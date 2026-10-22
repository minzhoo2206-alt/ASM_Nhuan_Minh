export default class ProDetailView {
  constructor() {
    this.container = document.getElementById("productDetail");
  }

  showError(message) {
    if (this.container) {
      this.container.innerHTML = `<div class="p-6 rounded-xl bg-white border border-stone-200 text-center text-stone-600">${message}</div>`;
    }
  }

  formatCurrency(value) {
    return Number(value).toLocaleString("vi-VN") + " VND";
  }

  renderProduct(product, variants, onAddToCart) {
    this.container.innerHTML = `
      <div class="bg-white rounded-2xl border border-stone-200 p-6 lg:p-8 shadow-xs">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div class="lg:col-span-6 space-y-4">
            <div class="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
              <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
            </div>
          </div>
          <div class="lg:col-span-6 flex flex-col justify-between">
            <form class="space-y-4">
              <h1 class="text-2xl sm:text-3xl font-extrabold text-stone-900">${product.name}</h1>
              <div class="flex items-baseline gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span id="priceDisplay" class="text-2xl sm:text-3xl font-extrabold text-amber-600 font-mono">${this.formatCurrency(product.price)}</span>
              </div>
              <p class="text-stone-600 text-sm leading-relaxed">${product.description}</p>
              <div class="space-y-2 pt-2 border-t border-stone-100">
                <label class="text-xs font-semibold text-stone-900 block">Chọn loại:</label>
                <div class="flex flex-wrap gap-4">${variants.map((variant) => `
                  <label class="flex items-center gap-1.5 text-xs text-stone-700 cursor-pointer">
                    <input type="radio" name="variant" value="${variant.id}" data-price="${variant.price}">
                    <span>${variant.variant_name} - ${this.formatCurrency(variant.price)} (${variant.weight})</span>
                  </label>`).join("")}
                </div>
              </div>
              <div class="space-y-2 pt-2 border-t border-stone-100">
                <label for="quantity" class="text-xs font-semibold text-stone-900 block">Số lượng:</label>
                <input type="number" id="quantity" value="1" min="1" max="99" class="w-20 px-3 py-2 text-xs font-bold text-stone-900 border border-stone-300 rounded-lg">
              </div>
              <div class="pt-2 border-t border-stone-100">
                <span class="text-sm font-semibold text-stone-900">Tổng cộng: </span>
                <span id="totalPrice" class="text-lg font-bold text-amber-600">${this.formatCurrency(product.price)}</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <button type="button" id="addToCart" class="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm">Thêm vào giỏ hàng</button>
                <a href="cart.html" class="px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm text-center">Mua ngay</a>
              </div>
            </form>
          </div>
        </div>
      </div>`;

    this.setupPriceUpdate(product);
    this.container.querySelector("#addToCart").addEventListener("click", () => {
      const selected = this.container.querySelector('input[name="variant"]:checked');
      const rawQuantity = Number.parseInt(this.container.querySelector("#quantity").value, 10);
      onAddToCart({
        variantId: selected ? selected.value : null,
        price: selected ? Number(selected.dataset.price) : Number(product.price),
        quantity: Math.max(1, Math.min(99, rawQuantity || 1))
      });
    });
  }

  setupPriceUpdate(product) {
    const quantityInput = this.container.querySelector("#quantity");
    const updateTotal = () => {
      const selected = this.container.querySelector('input[name="variant"]:checked');
      const basePrice = selected ? Number(selected.dataset.price) : Number(product.price);
      const quantity = Number.parseInt(quantityInput.value, 10) || 1;
      this.container.querySelector("#totalPrice").textContent = this.formatCurrency(basePrice * quantity);
      this.container.querySelector("#priceDisplay").textContent = this.formatCurrency(basePrice);
    };

    this.container.querySelectorAll('input[name="variant"]').forEach((input) => {
      input.addEventListener("change", updateTotal);
    });
    quantityInput.addEventListener("input", updateTotal);
  }
}
