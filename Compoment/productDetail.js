// ============================================================
// productDetail.js - Trang Chi Tiết Sản Phẩm
// Dùng kế thừa (class) để tái sử dụng các hàm dùng chung
// ============================================================

// ===== CLASS CHA: chứa các hàm dùng chung =====
class BaseService {
  constructor() {
    this.productsApi = "http://localhost:3000/products";
    this.variantsApi = "http://localhost:3000/product_variants";
  }

  // Hàm định dạng tiền tệ VNĐ
  formatCurrency(value) {
    return Number(value).toLocaleString("vi-VN") + " VND";
  }

  // Hàm lấy giỏ hàng từ localStorage
  getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  // Hàm lưu giỏ hàng vào localStorage
  saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

// ===== CLASS CON: xử lý trang Chi Tiết Sản Phẩm (kế thừa BaseService) =====
class ProductDetailPage extends BaseService {
  constructor() {
    super(); // Gọi constructor class cha

    // Lấy prod_id từ URL
    const params = new URLSearchParams(window.location.search);
    this.prodId = params.get("prod_id");
    this.container = document.getElementById("productDetail");
  }

  // Hàm hiển thị thông báo lỗi
  showError(message) {
    if (this.container) {
      this.container.innerHTML = `
        <div class="p-6 rounded-xl bg-white border border-stone-200 text-center text-stone-600">
          ${message}
        </div>
      `;
    }
  }

  // Hàm render giao diện chi tiết sản phẩm
  renderProduct(product, variants) {
    this.container.innerHTML = `
    <div class="bg-white rounded-2xl border border-stone-200 p-6 lg:p-8 shadow-xs">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <!-- Cột trái: ảnh -->
        <div class="lg:col-span-6 space-y-4">
          <div class="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
          </div>
        </div>

        <!-- Cột phải: thông tin -->
        <div class="lg:col-span-6 flex flex-col justify-between">
          <form class="space-y-4">
            <h1 class="text-2xl sm:text-3xl font-extrabold text-stone-900">${product.name}</h1>
            <div class="flex items-baseline gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200">
              <span id="priceDisplay" class="text-2xl sm:text-3xl font-extrabold text-amber-600 font-mono">
                ${this.formatCurrency(product.price)}
              </span>
            </div>
            <p class="text-stone-600 text-sm leading-relaxed">${product.description}</p>

            <!-- Biến thể sản phẩm -->
            <div class="space-y-2 pt-2 border-t border-stone-100">
              <label class="text-xs font-semibold text-stone-900 block">Chọn loại:</label>
              <div class="flex flex-wrap gap-4">
                ${variants.map((v) => `
                  <label class="flex items-center gap-1.5 text-xs text-stone-700 cursor-pointer">
                    <input type="radio" name="variant" value="${v.id}" data-price="${v.price}">
                    <span>${v.variant_name} - ${this.formatCurrency(v.price)} (${v.weight})</span>
                  </label>
                `).join("")}
              </div>
            </div>

            <!-- Số lượng -->
            <div class="space-y-2 pt-2 border-t border-stone-100">
              <label for="quantity" class="text-xs font-semibold text-stone-900 block">Số lượng:</label>
              <input type="number" id="quantity" value="1" min="1" max="99"
                class="w-20 px-3 py-2 text-xs font-bold text-stone-900 border border-stone-300 rounded-lg">
            </div>

            <!-- Tổng tiền -->
            <div class="pt-2 border-t border-stone-100">
              <span class="text-sm font-semibold text-stone-900">Tổng cộng: </span>
              <span id="totalPrice" class="text-lg font-bold text-amber-600">${this.formatCurrency(product.price)}</span>
            </div>

            <!-- Nút -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <button type="button" id="addToCart" class="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm">
                Thêm vào giỏ hàng
              </button>
              <a href="cart.html" class="px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm text-center">
                Mua ngay
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

    // Gắn logic cập nhật giá sau khi HTML đã được tạo
    this.setupPriceUpdate(product);
    this.setupAddToCart(product);
  }

  // Hàm cập nhật giá khi người dùng chọn biến thể hoặc thay đổi số lượng
  setupPriceUpdate(product) {
    const variantInputs = this.container.querySelectorAll('input[name="variant"]');
    const quantityInput = this.container.querySelector("#quantity");
    const totalPriceEl = this.container.querySelector("#totalPrice");
    const priceDisplayEl = this.container.querySelector("#priceDisplay");

    function updateTotal() {
      let basePrice = product.price;

      const selected = document.querySelector('input[name="variant"]:checked');
      if (selected) {
        basePrice = parseInt(selected.dataset.price);
      }

      const qty = parseInt(quantityInput.value) || 1;
      totalPriceEl.textContent = Number(basePrice * qty).toLocaleString("vi-VN") + " VND";
      priceDisplayEl.textContent = Number(basePrice).toLocaleString("vi-VN") + " VND";
    }

    variantInputs.forEach((input) => {
      input.addEventListener("change", updateTotal);
    });

    quantityInput.addEventListener("input", updateTotal);
  }

  // Hàm gắn sự kiện nút "Thêm vào giỏ hàng"
  setupAddToCart(product) {
    const addBtn = this.container.querySelector("#addToCart");
    const quantityInput = this.container.querySelector("#quantity");

    addBtn.addEventListener("click", () => {
      const cart = this.getCart();

      const selected = this.container.querySelector('input[name="variant"]:checked');
      let variantId = null;
      let price = product.price;

      if (selected) {
        variantId = selected.value;
        price = parseInt(selected.dataset.price);
      }

      let qty = parseInt(quantityInput.value);
      if (!qty || qty < 1) qty = 1;

      // Tạo key nhận dạng (sản phẩm + biến thể)
      const cartKey = variantId ? this.prodId + "-" + variantId : this.prodId;

      const existing = cart.find((item) => item.cartKey === cartKey);

      if (existing) {
        existing.quantity = existing.quantity + qty;
      } else {
        cart.push({
          prod_id: this.prodId,
          variant_id: variantId,
          quantity: qty,
          price: price,
          cartKey: cartKey
        });
      }

      this.saveCart(cart);
      alert("Đã thêm sản phẩm vào giỏ!");
      window.location.href = "cart.html";
    });
  }

  // Hàm khởi chạy trang chi tiết
  async init() {
    // Kiểm tra container có tồn tại không
    if (!this.container) {
      console.error("Không tìm thấy khu vực hiển thị chi tiết sản phẩm");
      return;
    }

    // Kiểm tra có prod_id trên URL không
    if (!this.prodId) {
      this.showError("Không tìm thấy mã sản phẩm.");
      return;
    }

    try {
      // Lấy thông tin sản phẩm và biến thể cùng lúc
      const [product, variants] = await Promise.all([
        fetch(this.productsApi + "/" + this.prodId).then((res) => {
          if (!res.ok) throw new Error("Không tải được sản phẩm");
          return res.json();
        }),
        fetch(this.variantsApi + "?prod_id=" + this.prodId).then((res) => {
          if (!res.ok) throw new Error("Không tải được biến thể");
          return res.json();
        })
      ]);

      // Kiểm tra sản phẩm có tồn tại không
      if (!product || !product.id) {
        this.showError("Sản phẩm không tồn tại.");
        return;
      }

      this.renderProduct(product, variants);

    } catch (err) {
      console.error("Lỗi:", err);
      this.showError("Có lỗi xảy ra khi tải sản phẩm.");
    }
  }
}

// ===== KHỞI CHẠY =====
const detailPage = new ProductDetailPage();
detailPage.init();
