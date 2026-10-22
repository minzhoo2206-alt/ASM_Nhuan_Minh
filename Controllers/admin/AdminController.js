
export class AdminController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.bindEvents();
    this.renderPage(document.body.dataset.page || "dashboard");
  }

  bindEvents() {
    // Bấm nút thêm sản phẩm hoặc hủy
    this.view.content.addEventListener("click", event => {
      if (event.target.closest("#toggleProductForm")) {
        document.querySelector("#productForm")?.classList.toggle("hidden");
      }

      if (event.target.closest("#cancelProductForm")) {
        document.querySelector("#productForm")?.classList.add("hidden");
      }

      // Xóa sản phẩm
      const button = event.target.closest("[data-delete-product]");

      if (button) {
        const id = button.dataset.deleteProduct;

        if (confirm("Ní có chắc muốn xóa sản phẩm này không?")) {
          this.model.deleteProduct(id)
            .then(() => {
              this.view.showMessage("Xóa sản phẩm thành công!");
              this.renderPage("products");
            })
            .catch(error => this.view.showMessage(error.message, true));
        }
      }
    });

    // Thêm sản phẩm
    this.view.content.addEventListener("submit", event => {
      if (event.target.id !== "productForm") return;

      event.preventDefault();

      const form = new FormData(event.target);

      const product = {
        name: form.get("name").trim(),
        cat_id: Number(form.get("categoryId")),
        price: Number(form.get("price")),
        quantity: Number(form.get("stock")),
        description: form.get("description").trim()
      };

      this.model.addProduct(product)
        .then(() => {
          this.view.showMessage("Thêm sản phẩm thành công!");
          this.renderPage("products");
        })
        .catch(error => this.view.showMessage(error.message, true));
    });

    // Cập nhật trạng thái đơn hàng
    this.view.content.addEventListener("change", event => {
      const select = event.target.closest("[data-order-status]");

      if (!select) return;

      this.model.updateOrder(
        select.dataset.orderStatus,
        select.value
      )
        .then(() => {
          this.view.showMessage("Cập nhật trạng thái thành công!");
        })
        .catch(error => this.view.showMessage(error.message, true));
    });
  }

  // Hiển thị trang tương ứng
  renderPage(page) {
    if (page === "dashboard") {
      Promise.all([
        this.model.getProducts(),
        this.model.getCategories(),
        this.model.getUsers(),
        this.model.getOrders()
      ])
        .then(([products, categories, users, orders]) => {
          this.view.showDashboard(
            products,
            categories,
            users,
            orders,
            this.model
          );
        })
        .catch(error => this.view.showMessage(error.message, true));
    }

    if (page === "products") {
      Promise.all([
        this.model.getProducts(),
        this.model.getCategories()
      ])
        .then(([products, categories]) => {
          this.view.showProducts(products, categories, this.model);
        })
        .catch(error => this.view.showMessage(error.message, true));
    }

    if (page === "categories") {
      this.model.getCategories()
        .then(data => this.view.showCategories(data))
        .catch(error => this.view.showMessage(error.message, true));
    }

    if (page === "users") {
      this.model.getUsers()
        .then(data => this.view.showUsers(data))
        .catch(error => this.view.showMessage(error.message, true));
    }

    if (page === "orders") {
      this.model.getOrders()
        .then(data => this.view.showOrders(data, this.model))
        .catch(error => this.view.showMessage(error.message, true));
    }

    if (page === "orderDetail") {
      const id = new URLSearchParams(location.search).get("id");

      this.model.getOrders()
        .then(orders => {
          const order = orders.find(item => String(item.id) === String(id));
          if (!order) {
            this.view.showOrderDetail(undefined, this.model);
            return;
          }

          return this.model.getOrderDetails(id).then(details =>
            Promise.all(details.map(detail =>
              this.model.getProduct(detail.prod_id)
                .then(product => ({
                  name: product.name,
                  quantity: detail.quantity,
                  price: detail.unit_price ?? detail.price
                }))
                .catch(() => ({
                  name: `Sản phẩm #${detail.prod_id}`,
                  quantity: detail.quantity,
                  price: detail.unit_price ?? detail.price
                }))
            ))
          ).then(items => {
            this.view.showOrderDetail({ ...order, items }, this.model);
          });
        })
        .catch(error => this.view.showMessage(error.message, true));
    }
  }
}
