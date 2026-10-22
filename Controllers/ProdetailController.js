import ProDetailModel from "../Models/ProDetailModel.js";
import ProDetailView from "../Views/productDetail.js";

export default class ProdetailController {
  constructor() {
    this.model = new ProDetailModel();
    this.view = new ProDetailView();
    this.prodId = new URLSearchParams(window.location.search).get("prod_id");
  }

  init() {
    if (!this.view.container) {
      console.error("Không tìm thấy khu vực hiển thị chi tiết sản phẩm");
      return;
    }

    if (!this.prodId) {
      this.view.showError("Không tìm thấy mã sản phẩm.");
      return;
    }

    Promise.all([
      this.model.getProduct(this.prodId),
      this.model.getVariants(this.prodId)
    ]).then(([product, variants]) => {
      if (!product || !product.id) {
        this.view.showError("Sản phẩm không tồn tại.");
        return;
      }

      this.view.renderProduct(product, variants, ({ variantId, price, quantity }) => {
        this.model.addToCart(this.prodId, variantId, price, quantity);
        alert("Đã thêm sản phẩm vào giỏ!");
        window.location.href = "cart.html";
      });
    }).catch((error) => {
      console.error("Lỗi tải chi tiết sản phẩm:", error);
      this.view.showError("Có lỗi xảy ra khi tải sản phẩm.");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ProdetailController().init();
});
