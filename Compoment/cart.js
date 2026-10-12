// ============================================================
// cart.js - Trang Giỏ Hàng
// Dùng kế thừa (class) để tái sử dụng các hàm dùng chung
// ============================================================

// ===== CLASS CHA: chứa các hàm dùng chung =====
class BaseService {
  constructor() {
    // Địa chỉ API dùng chung cho toàn bộ dự án
    this.productsApi = "http://localhost:3000/products";
    this.variantsApi = "http://localhost:3000/product_variants";
    this.ordersApi = "http://localhost:3000/orders";
    this.orderDetailsApi = "http://localhost:3000/order_details";
  }

  // Hàm định dạng tiền tệ VNĐ
  formatCurrency(value) {
    return value.toLocaleString("vi-VN") + "₫";
  }

  // Hàm lấy giỏ hàng từ localStorage
  getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  // Hàm lưu giỏ hàng vào localStorage
  saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Hàm lấy thông tin sản phẩm từ API
  async fetchProduct(prodId) {
    const res = await fetch(this.productsApi + "/" + prodId);
    return res.json();
  }

  // Hàm lấy thông tin biến thể từ API
  async fetchVariant(variantId) {
    const res = await fetch(this.variantsApi + "?variant_id=" + variantId);
    const list = await res.json();
    return list[0]; // Trả về biến thể đầu tiên tìm được
  }

  // Hàm tính giá của 1 mặt hàng trong giỏ
  async calcItemPrice(item) {
    const product = await this.fetchProduct(item.prod_id);
    let variantInfo = null;

    if (item.variant_id) {
      variantInfo = await this.fetchVariant(item.variant_id);
    }

    const price = variantInfo ? variantInfo.price : product.price;
    return { product, variantInfo, price };
  }
}

// ===== CLASS CON: xử lý trang Giỏ Hàng (kế thừa BaseService) =====
class CartPage extends BaseService {
  constructor() {
    super(); // Gọi constructor của class cha để có this.productsApi, this.variantsApi...

    // Lấy các phần tử HTML cần thiết
    this.container = document.getElementById("cartList");
    this.subtotalEl = document.getElementById("subtotal");
    this.itemCountEl = document.getElementById("itemCount");
    this.shippingFeeEl = document.getElementById("shippingFee");
    this.grandTotalEl = document.getElementById("grandTotal");
    this.checkoutBtn = document.getElementById("checkoutBtn"); // FIX: khai báo đúng chỗ
  }

  // Hàm render toàn bộ giỏ hàng lên trang
  async render() {
    if (!this.container) return;

    const cart = this.getCart(); // Lấy giỏ hàng từ localStorage

    this.container.innerHTML = "";
    let subtotal = 0;
    let itemCount = 0;

    // Duyệt qua từng mặt hàng trong giỏ
    for (let index = 0; index < cart.length; index++) {
      const item = cart[index];

      // Gọi hàm của class cha để lấy thông tin sản phẩm + biến thể
      const { product, variantInfo, price } = await this.calcItemPrice(item);

      const itemTotal = price * item.quantity;
      subtotal += itemTotal;
      itemCount += item.quantity;

      // Tạo thẻ div cho từng mặt hàng
      const div = document.createElement("div");
      div.className =
        "p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4";

      div.innerHTML = `
        <div class="flex items-center gap-3.5 flex-grow">
          <a href="productDetail.html?prod_id=${product.id}"
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
          </a>
          <div class="space-y-1">
            <div class="text-[11px] font-semibold text-amber-600 uppercase">${product.name.split(" ")[0]}</div>
            <a href="productDetail.html?prod_id=${product.id}"
              class="font-bold text-stone-900 text-xs sm:text-sm hover:text-amber-600 transition-colors block line-clamp-1">
              ${product.name}
            </a>
            <div class="text-xs text-stone-500">
              ${variantInfo ? `<span>Loại: <strong>${variantInfo.variant_name}</strong></span> ·` : ""}
              <span class="font-mono text-stone-600 font-semibold">${this.formatCurrency(price)} / phần</span>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between w-full sm:w-auto gap-4 sm:gap-6 self-end sm:self-center">
          <div class="flex items-center gap-1.5">
            <span class="text-xs text-stone-500">SL:</span>
            <input type="number" value="${item.quantity}" min="1" max="99"
              class="w-14 px-2 py-1 text-xs text-center font-bold text-stone-900 border border-stone-300 rounded-md bg-stone-50"
              data-index="${index}">
          </div>
          <div class="text-right">
            <div class="text-amber-600 font-bold text-sm font-mono tabular-nums">${this.formatCurrency(itemTotal)}</div>
          </div>
          <button class="p-2 text-stone-400 hover:text-rose-600 transition-colors" title="Xóa món này" data-index="${index}">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
              </path>
            </svg>
          </button>
        </div>
      `;

      this.container.appendChild(div);
    }

    // Cập nhật phần tóm tắt đơn hàng
    if (this.subtotalEl) this.subtotalEl.textContent = this.formatCurrency(subtotal);
    if (this.itemCountEl) this.itemCountEl.textContent = itemCount;
    if (this.shippingFeeEl) this.shippingFeeEl.textContent = "0₫ (Miễn phí)";
    if (this.grandTotalEl) this.grandTotalEl.textContent = this.formatCurrency(subtotal);

    // Gắn sự kiện cho ô nhập số lượng
    this.container.querySelectorAll('input[type="number"]').forEach((input) => {
      input.addEventListener("change", (e) => {
        const idx = e.target.dataset.index;
        const cart = this.getCart();
        cart[idx].quantity = parseInt(e.target.value) || 1;
        this.saveCart(cart);
        this.render(); // Render lại sau khi thay đổi
      });
    });

    // Gắn sự kiện cho nút xóa sản phẩm
    this.container.querySelectorAll('button[title="Xóa món này"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = e.currentTarget.dataset.index;
        const cart = this.getCart();
        cart.splice(idx, 1);
        this.saveCart(cart);
        this.render(); // Render lại sau khi xóa
      });
    });

    // Gắn sự kiện nút "Tiến hành đặt hàng"
    // FIX: đã khai báo this.checkoutBtn trong constructor, không còn lỗi ReferenceError
    if (this.checkoutBtn) {
      // Xóa sự kiện cũ để tránh gắn nhiều lần (quan trọng khi render() được gọi lại)
      this.checkoutBtn.replaceWith(this.checkoutBtn.cloneNode(true));
      this.checkoutBtn = document.getElementById("checkoutBtn");

      this.checkoutBtn.addEventListener("click", () => {
        // FIX: Dùng đường dẫn tương đối thay vì đường dẫn tuyệt đối
        window.location.href = "/Pages/checkout.html";
      });
    }
  }
}

// ===== KHỞI CHẠY =====
const cartPage = new CartPage();
cartPage.render();
