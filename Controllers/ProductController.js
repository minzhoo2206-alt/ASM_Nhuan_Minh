import ProductModel from "../Models/ProductModel.js";
import HomeView from "../Views/home.js";

export default class ProductController {
  constructor() {
    this.model = new ProductModel();
    this.view = new HomeView();
  }

  // Khởi chạy trang chủ
  init() {
    this.loadCategories();
    this.loadProducts();
  }

  // Lấy danh mục và đưa sang View
  loadCategories() {
    this.model
      .getCategories()
      .then((categories) => {
        this.view.renderCategories(categories);
      })
      .catch((error) => {
        this.view.showError("Lỗi lấy danh mục: " + error.message);
      });
  }

  // Lấy sản phẩm và đưa sang View
  loadProducts() {
    this.model
      .getProducts()
      .then((products) => {
        this.view.renderProducts(products, (prodId, price) => {
          this.handleAddToCart(prodId, price);
        });
      })
      .catch((error) => {
        this.view.showError("Lỗi lấy sản phẩm: " + error.message);
      });
  }

  // Xử lý thêm sản phẩm vào giỏ hàng
  handleAddToCart(prodId, price) {
    this.model.addToCart(prodId, price);

    alert("Đã thêm sản phẩm vào giỏ hàng!");

    window.location.href = "Pages/cart.html";
  }
}
