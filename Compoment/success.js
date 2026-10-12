// ============================================================
// success.js - Trang Đặt Hàng Thành Công
// Dùng kế thừa (class) để tái sử dụng các hàm dùng chung
// ============================================================

// ===== CLASS CHA: chứa các hàm dùng chung =====
class BaseService {
  constructor() {
    this.ordersApi = "http://localhost:3000/orders";
  }

  // Hàm định dạng tiền tệ VNĐ
  formatCurrency(value) {
    return Number(value).toLocaleString("vi-VN") + "₫";
  }

  // Hàm định dạng ngày giờ thành dạng dễ đọc (giờ:phút · ngày/tháng/năm)
  formatDate(isoString) {
    const date = new Date(isoString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return hours + ":" + minutes + " · " + day + "/" + month + "/" + year;
  }
}

// ===== CLASS CON: xử lý trang Thành Công (kế thừa BaseService) =====
class SuccessPage extends BaseService {
  constructor() {
    super(); // Gọi constructor class cha

    // Lấy các phần tử HTML cần cập nhật
    this.orderIdEl = document.getElementById("orderId");
    this.fullnameEl = document.getElementById("orderFullname");
    this.phoneEl = document.getElementById("orderPhone");
    this.addressEl = document.getElementById("orderAddress");
    this.paymentEl = document.getElementById("orderPayment");
    this.totalEl = document.getElementById("orderTotal");
    this.createdAtEl = document.getElementById("orderCreatedAt");
  }

  // Hàm hiển thị thông tin đơn hàng lên trang
  showOrder(order) {
    // Tạo mã đơn hàng dạng AV-XXXX (dùng ID từ server)
    if (this.orderIdEl) {
      this.orderIdEl.textContent = "AV-" + order.id;
    }

    if (this.fullnameEl) {
      this.fullnameEl.textContent = order.fullname || "--";
    }

    if (this.phoneEl) {
      this.phoneEl.textContent = order.phone || "--";
    }

    if (this.addressEl) {
      this.addressEl.textContent = order.address || "--";
    }

    // Hiển thị phương thức thanh toán dễ đọc
    if (this.paymentEl) {
      if (order.payment === "cod") {
        this.paymentEl.textContent = "Tiền mặt khi nhận hàng (COD)";
      } else if (order.payment === "bank") {
        this.paymentEl.textContent = "Chuyển khoản VietQR / Ví MoMo";
      } else {
        this.paymentEl.textContent = order.payment || "--";
      }
    }

    if (this.totalEl) {
      this.totalEl.textContent = this.formatCurrency(order.total || 0);
    }

    // Hiển thị thời gian đặt hàng (dùng hàm formatDate của class cha)
    if (this.createdAtEl) {
      if (order.created_at) {
        this.createdAtEl.textContent = this.formatDate(order.created_at);
      } else {
        this.createdAtEl.textContent = "--";
      }
    }
  }

  // Hàm lấy đơn hàng mới nhất từ API
  // FIX: json-server v1 không hỗ trợ _sort/_order/_limit
  // → Lấy toàn bộ danh sách rồi lấy phần tử CUỐI CÙNG (mới nhất)
  async fetchLatestOrder() {
    const res = await fetch(this.ordersApi);

    // Kiểm tra response có OK không
    if (!res.ok) {
      throw new Error("Không thể kết nối tới server API");
    }

    const orders = await res.json();

    // json-server trả về mảng thẳng (không có wrapper)
    // Kiểm tra orders có phải mảng không
    if (!Array.isArray(orders) || orders.length === 0) {
      return null;
    }

    // Lấy phần tử cuối cùng = đơn hàng mới nhất
    return orders[orders.length - 1];
  }

  // Hàm khởi chạy trang thành công
  async init() {
    try {
      const order = await this.fetchLatestOrder();

      if (order) {
        this.showOrder(order);
      } else {
        // Không có đơn hàng nào thì báo lỗi nhỏ
        if (this.orderIdEl) {
          this.orderIdEl.textContent = "Không tìm thấy";
        }
      }
    } catch (err) {
      console.error("Lỗi khi tải thông tin đơn hàng:", err);
      // Nếu lỗi mạng thì giữ nguyên placeholder "--"
    }
  }
}

// ===== KHỞI CHẠY =====
const successPage = new SuccessPage();
successPage.init();
