
const API_URL = "http://localhost:3000";

export class AdminModel {
  // Lấy dữ liệu từ JSON Server
  getAll(endpoint) {
    return fetch(`${API_URL}/${endpoint}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Không thể lấy dữ liệu!");
        }

        return response.json();
      });
  }

  // Lấy danh sách sản phẩm
  getProducts() {
    return this.getAll("products");
  }

  // Lấy danh sách danh mục
  getCategories() {
    return this.getAll("categories");
  }

  // Lấy danh sách người dùng
  getUsers() {
    return this.getAll("users");
  }

  // Lấy danh sách đơn hàng
  getOrders() {
    return this.getAll("orders");
  }

  getOrderDetails(orderId) {
    return this.getAll(`order_details?order_id=${encodeURIComponent(orderId)}`);
  }

  getProduct(id) {
    return this.getAll(`products/${encodeURIComponent(id)}`);
  }

  // Thêm sản phẩm
  addProduct(product) {
    return fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    }).then(response => {
      if (!response.ok) {
        throw new Error("Thêm sản phẩm thất bại!");
      }

      return response.json();
    });
  }

  // Xóa sản phẩm
  deleteProduct(id) {
    return fetch(`${API_URL}/products/${id}`, {
      method: "DELETE"
    }).then(response => {
      if (!response.ok) {
        throw new Error("Xóa sản phẩm thất bại!");
      }

      return true;
    });
  }

  // Cập nhật trạng thái đơn hàng
  updateOrder(id, status) {
    return fetch(`${API_URL}/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: status })
    }).then(response => {
      if (!response.ok) {
        throw new Error("Cập nhật đơn hàng thất bại!");
      }

      return response.json();
    });
  }

  // Định dạng tiền Việt Nam
  formatMoney(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(Number(price) || 0);
  }
}
