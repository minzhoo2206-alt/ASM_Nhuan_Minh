// ============================================================
// products.js - Trang Danh Sách Sản Phẩm
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
    if (/^(https?:)?\/\//.test(imagePath)) return imagePath;
    const cleanPath = imagePath.replace(/^(\.\/|\.\.\/)+/, "");
    return "/" + cleanPath;
  }
}

// ===== CLASS CON: xử lý trang Danh Sách Sản Phẩm (kế thừa BaseService) =====
class ProductsPage extends BaseService {
  constructor() {
    super(); // Gọi constructor class cha

    // Lấy các tham số từ URL (ví dụ: ?cat_id=1&q=bánh&page=2)
    const params = new URLSearchParams(window.location.search);
    this.catId = params.get("cat_id");
    this.searchQuery = params.get("q");
    this.page = parseInt(params.get("page")) || 1;
    this.perPage = 12; // Số sản phẩm mỗi trang
  }

  // Hàm render thanh danh mục (để lọc theo loại)
  renderCategories(categories) {
    const container = document.getElementById("categoriesList");
    if (!container) return;

    container.className =
      "bg-white p-4 rounded-xl border border-stone-200 shadow-xs mb-8 space-y-4";
    container.innerHTML = "";

    const flexBox = document.createElement("div");
    flexBox.className = "flex flex-wrap items-center gap-2";

    // Nút "Tất cả món"
    const allLink = document.createElement("a");
    allLink.href = "products.html";
    allLink.textContent = "Tất cả món";
    allLink.className = !this.catId
      ? "px-4 py-2 text-xs font-medium rounded-lg bg-amber-500 text-white"
      : "px-4 py-2 text-xs font-medium rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors";
    flexBox.appendChild(allLink);

    // Nút từng danh mục
    categories.forEach((category) => {
      const link = document.createElement("a");
      link.href = "products.html?cat_id=" + category.cat_id;
      link.textContent = category.name;
      link.className =
        this.catId && category.cat_id == this.catId
          ? "px-4 py-2 text-xs font-medium rounded-lg bg-amber-500 text-white"
          : "px-4 py-2 text-xs font-medium rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors";
      flexBox.appendChild(link);
    });

    container.appendChild(flexBox);
  }

  // Hàm lọc sản phẩm theo danh mục và từ khóa
  filterProducts(products) {
    let result = products;

    // Lọc theo danh mục
    if (this.catId) {
      result = result.filter((p) => p.cat_id == this.catId);
    }

    // Lọc theo từ khóa tìm kiếm
    if (this.searchQuery) {
      const keyword = this.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(keyword) ||
          p.description.toLowerCase().includes(keyword)
      );
    }

    return result;
  }

  // Hàm tạo URL phân trang
  buildPageUrl(pageNumber) {
    let url = "products.html?";
    const parts = [];
    if (this.catId) parts.push("cat_id=" + this.catId);
    if (this.searchQuery) parts.push("q=" + this.searchQuery);
    parts.push("page=" + pageNumber);
    return url + parts.join("&");
  }

  // Hàm render danh sách sản phẩm và phân trang
  renderProducts(products) {
    const container = document.getElementById("productList");
    if (!container) return;

    container.className =
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5";
    container.innerHTML = "";

    // Lọc sản phẩm
    const filtered = this.filterProducts(products);

    // Phân trang
    const totalPages = Math.ceil(filtered.length / this.perPage);
    const start = (this.page - 1) * this.perPage;
    const pageProducts = filtered.slice(start, start + this.perPage);

    // Hiển thị từng sản phẩm
    pageProducts.forEach((product) => {
      // FIX: Đường dẫn đúng khi đang ở trong /Pages/
      const detailHref = "productDetail.html?prod_id=" + product.id;

      const item = document.createElement("a");
      item.href = detailHref;
      item.className =
        "bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-amber-400 hover:shadow-lg transition-all group flex flex-col";

      item.innerHTML = `
        <div class="w-full aspect-[4/3] overflow-hidden bg-stone-100">
          <img src="${this.getImageUrl(product.image)}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300">
        </div>
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

    // Render phân trang
    if (totalPages > 1) {
      const pagination = document.createElement("div");
      pagination.className = "flex justify-center gap-2 mt-6";

      for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = this.buildPageUrl(i);
        pageLink.textContent = i;
        pageLink.className =
          i === this.page
            ? "px-3 py-1 rounded bg-amber-500 text-white font-bold"
            : "px-3 py-1 rounded bg-stone-100 text-stone-700 hover:bg-stone-200";
        pagination.appendChild(pageLink);
      }

      container.parentNode.appendChild(pagination);
    }

    // Gắn sự kiện cho nút thêm vào giỏ
    this.setupAddToCartButtons();
  }

  // Hàm gắn sự kiện cho các nút "Thêm vào giỏ"
  setupAddToCartButtons() {
    const buttons = document.querySelectorAll(".add-to-cart-btn");

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // Ngăn không cho click lan lên thẻ <a> cha

        const cart = this.getCart();
        const prodId = btn.dataset.prodId;
        const price = parseInt(btn.dataset.price);
        const cartKey = prodId;

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
        // FIX: Đường dẫn đúng khi đang ở trong /Pages/
        window.location.href = "cart.html";
      });
    });
  }

  // Hàm khởi chạy trang sản phẩm
  async init() {
    try {
      // Lấy danh mục
      const catRes = await fetch(this.categoriesApi);
      const categories = await catRes.json();
      this.renderCategories(categories);
    } catch (err) {
      console.error("Lỗi lấy danh mục:", err);
    }

    try {
      // Lấy toàn bộ sản phẩm (việc lọc theo cat_id sẽ làm trên client)
      const prodRes = await fetch(this.productsApi);
      const products = await prodRes.json();
      this.renderProducts(products);
    } catch (err) {
      console.error("Lỗi lấy sản phẩm:", err);
    }
  }
}

// ===== KHỞI CHẠY =====
const productsPage = new ProductsPage();
productsPage.init();
