// ============================================================
// home.js - Trang Chủ
// Dùng kế thừa (class) để tái sử dụng các hàm dùng chung
// ============================================================

// ===== CLASS CHA: chứa các hàm dùng chung =====
class BaseService {
  constructor() {
    this.productsApi = "http://localhost:3000/products";
    this.categoriesApi = "http://localhost:3000/categories";
  }

  // Hàm lấy giỏ hàng từ localStorage
  getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  // Hàm lưu giỏ hàng vào localStorage
  saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Hàm chuyển đường dẫn ảnh thành URL đầy đủ
  getImageUrl(imagePath) {
    if (!imagePath) return "";
    // Nếu đã là URL đầy đủ thì giữ nguyên
    if (/^(https?:)?\/\//.test(imagePath)) return imagePath;
    // Xóa các tiền tố ./ hay ../
    const cleanPath = imagePath.replace(/^(\.\/|\.\.\/)+/, "");
    return "/" + cleanPath;
  }
}

// ===== CLASS CON: xử lý trang Chủ (kế thừa BaseService) =====
class HomePage extends BaseService {
  constructor() {
    super(); // Gọi constructor class cha

    // Kiểm tra xem trang hiện tại có nằm trong thư mục /Pages không
    this.isInPages = window.location.pathname.includes("/Pages");
  }

  // Hàm render danh mục lên trang chủ
  renderCategories(categories) {
    const container = document.getElementById("categoriesList");
    if (!container) return;

    container.className =
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5";
    container.innerHTML = "";

    categories.forEach((category) => {
      // FIX: Đường dẫn đúng từ index.html đến products.html
      const href = "Pages/products.html?cat_id=" + category.cat_id;

      const item = document.createElement("a");
      item.href = href;
      item.className =
        "p-4 bg-white rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all group";

      item.innerHTML = `
        <div class="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
            </path>
          </svg>
        </div>
        <div class="font-bold text-stone-900 text-sm">${category.name}</div>
        <div class="text-xs text-stone-500 mt-0.5">Xem sản phẩm</div>
      `;
      container.appendChild(item);
    });
  }

  // Hàm render danh sách sản phẩm lên trang chủ
  renderProducts(products) {
    const container = document.getElementById("productList");
    if (!container) return;

    container.className =
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5";
    container.innerHTML = "";

    products.forEach((product) => {
      // FIX: Đường dẫn đúng từ index.html
      const detailHref = "Pages/productDetail.html?prod_id=" + product.id;

      const item = document.createElement("div");
      item.className =
        "bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-amber-400 hover:shadow-lg transition-all group flex flex-col";

      item.innerHTML = `
        <a href="${detailHref}" class="block">
          <div class="w-full aspect-[4/3] overflow-hidden bg-stone-100">
            <img src="${this.getImageUrl(product.image)}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300">
          </div>
        </a>

        <div class="p-4 flex flex-col flex-1">
          <div class="font-bold text-stone-900 text-sm leading-snug group-hover:text-amber-600 transition-colors">${product.name}</div>
          <div class="text-xs text-stone-500 mt-1 leading-relaxed line-clamp-2">${product.description}</div>
        </div>

        <div class="mt-auto pt-3 border-t border-stone-100 flex items-center justify-between p-4">
          <div class="text-amber-600 font-bold">${product.price.toLocaleString("vi-VN")} VND</div>
          <div class="flex items-center gap-1.5">
            <a href="${detailHref}" class="px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold">Chi tiết</a>
            <button
              class="p-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold add-to-cart-btn"
              data-prod-id="${product.id}"
              data-price="${product.price}"
              title="Thêm vào giỏ">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
      container.appendChild(item);
    });

    // Gắn sự kiện cho các nút "Thêm vào giỏ"
    this.setupAddToCartButtons();
  }

  // Hàm gắn sự kiện cho nút thêm vào giỏ hàng
  setupAddToCartButtons() {
    const buttons = document.querySelectorAll(".add-to-cart-btn");

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        const cart = this.getCart();
        const prodId = btn.dataset.prodId;
        const price = parseInt(btn.dataset.price);
        const cartKey = prodId; // Key nhận dạng sản phẩm trong giỏ

        // Kiểm tra sản phẩm đã có trong giỏ chưa
        const existing = cart.find((item) => item.cartKey === cartKey);

        if (existing) {
          existing.quantity = existing.quantity + 1;
        } else {
          cart.push({
            prod_id: prodId,
            variant_id: null,
            quantity: 1,
            price: price,
            cartKey: cartKey
          });
        }

        this.saveCart(cart);
        alert("Đã thêm sản phẩm vào giỏ!");
        // FIX: Đường dẫn đúng từ index.html sang cart.html
        window.location.href = "Pages/cart.html";
      });
    });
  }

  // Hàm khởi chạy trang chủ
  async init() {
    try {
      // Lấy danh mục (chỉ lấy 4 cái đầu cho trang chủ)
      const catRes = await fetch(this.categoriesApi + "?_page=1&_per_page=4");
      const catData = await catRes.json();
      // json-server trả về { data: [...] } khi dùng _page
      this.renderCategories(catData.data || catData);
    } catch (err) {
      console.error("Lỗi lấy danh mục:", err);
    }

    try {
      // Lấy sản phẩm (chỉ lấy 4 cái đầu cho trang chủ)
      const prodRes = await fetch(this.productsApi + "?_page=1&_per_page=4");
      const prodData = await prodRes.json();
      // json-server trả về { data: [...] } khi dùng _page
      this.renderProducts(prodData.data || prodData);
    } catch (err) {
      console.error("Lỗi lấy sản phẩm:", err);
    }
  }
}

// ===== KHỞI CHẠY =====
const homePage = new HomePage();
homePage.init();
