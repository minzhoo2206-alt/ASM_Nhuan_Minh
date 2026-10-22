export default class ProductModel {
  constructor() {
    this.productsApi = "http://localhost:3000/products";
    this.categoriesApi = "http://localhost:3000/categories";
  }

  // Hàm dùng chung để lấy dữ liệu từ API
  fetchData(url) {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error("Không thể lấy dữ liệu từ JSON Server");
      }
      return response.json();
    }).then((data) => data.data || data);
  }

  // Lấy danh mục
  getCategories() {
    return this.fetchData(this.categoriesApi + "?_page=1&_per_page=4");
  }

  // Lấy sản phẩm
  getProducts() {
    return this.fetchData(this.productsApi + "?_page=1&_per_page=4");
  }

  // Lấy giỏ hàng
  getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  // Lưu giỏ hàng
  saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Thêm sản phẩm vào giỏ hàng
  addToCart(prodId, price) {
    const cart = this.getCart();

    // Keep the same item identity used by the product list and detail pages.
    const existingItem = cart.find((item) =>
      String(item.prod_id) === String(prodId) &&
      (item.variant_id === undefined || item.variant_id === null || item.variant_id === "")
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        prod_id: prodId,
        variant_id: null,
        quantity: 1,
        price: price,
      });
    }

    this.saveCart(cart);
  }
}
