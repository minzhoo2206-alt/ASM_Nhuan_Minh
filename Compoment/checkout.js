// ============================================================
// checkout.js - Trang Thanh Toán
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
  // Hàm này dùng chung cho cả cart.js và checkout.js
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

// ===== CLASS CON: xử lý trang Thanh Toán (kế thừa BaseService) =====
class CheckoutPage extends BaseService {
  constructor() {
    super(); // Gọi constructor của class cha

    // Lấy các phần tử HTML cần thiết
    this.summaryContainer = document.querySelector(".divide-y");
    this.subtotalEl = document.getElementById("subtotal");
    this.itemCountEl = document.getElementById("itemCount");
    this.shippingFeeEl = document.getElementById("shippingFee");
    this.grandTotalEl = document.getElementById("grandTotal");
  }

  // Hàm hiển thị tóm tắt đơn hàng ở cột bên phải
  async renderSummary() {
    if (!this.summaryContainer) return;

    const cart = this.getCart();
    this.summaryContainer.innerHTML = "";
    let subtotal = 0;
    let itemCount = 0;

    for (let item of cart) {
      // Dùng hàm calcItemPrice kế thừa từ class cha
      const { product, variantInfo, price } = await this.calcItemPrice(item);
      const itemTotal = price * item.quantity;
      subtotal += itemTotal;
      itemCount += item.quantity;

      // Tạo thẻ hiển thị từng mặt hàng
      const div = document.createElement("div");
      div.className = "pt-2 flex items-center justify-between gap-3";
      div.innerHTML = `
        <div class="flex items-center gap-2">
          <img src="${product.image}" alt="${product.name}" class="w-10 h-10 rounded-lg object-cover border border-stone-200">
          <div>
            <div class="font-bold text-stone-900">${product.name}</div>
            <div class="text-[11px] text-stone-500">SL: ${item.quantity} ${variantInfo ? "· " + variantInfo.variant_name : ""}</div>
          </div>
        </div>
        <div class="font-bold text-stone-800 font-mono tabular-nums">${this.formatCurrency(itemTotal)}</div>
      `;
      this.summaryContainer.appendChild(div);
    }

    // Cập nhật tổng tiền
    if (this.subtotalEl) this.subtotalEl.textContent = this.formatCurrency(subtotal);
    if (this.itemCountEl) this.itemCountEl.textContent = itemCount;
    if (this.shippingFeeEl) this.shippingFeeEl.textContent = "0₫ (Miễn phí)";
    if (this.grandTotalEl) this.grandTotalEl.textContent = this.formatCurrency(subtotal);

    // Trả về subtotal để dùng lại khi submit form (tránh tính lại lần 2)
    return subtotal;
  }

  // Hàm xử lý khi người dùng nhấn nút đặt hàng
  setupForm(total) {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Lấy thông tin từ form
      const fullname = document.getElementById("fullname").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const address = document.getElementById("address").value.trim();
      const note = document.getElementById("note").value.trim();
      const paymentInput = form.querySelector("input[name='payment']:checked");

      // Kiểm tra dữ liệu đầu vào
      if (!fullname || !phone || !address) {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
        return;
      }

      if (!paymentInput) {
        alert("Vui lòng chọn phương thức thanh toán!");
        return;
      }

      const payment = paymentInput.value;
      const cart = this.getCart();

      // FIX: Không tính tiền lại lần 2, dùng total đã tính trong renderSummary()
      // Tạo đơn hàng và gửi lên API
      const order = {
        fullname,
        phone,
        address,
        note,
        payment,
        total,
        created_at: new Date().toISOString()
      };

      try {
        // Gửi đơn hàng lên server
        const orderRes = await fetch(this.ordersApi, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(order)
        });
        const newOrder = await orderRes.json();

        // Gửi chi tiết từng mặt hàng lên server
        for (let item of cart) {
          await fetch(this.orderDetailsApi, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              order_id: newOrder.id,
              prod_id: item.prod_id,
              variant_id: item.variant_id || null,
              quantity: item.quantity
            })
          });
        }

        // Xóa giỏ hàng sau khi đặt thành công
        localStorage.removeItem("cart");
        // Chuyển sang trang thành công
        window.location.href = "/Pages/success.html";

      } catch (err) {
        console.error("Lỗi khi đặt hàng:", err);
        alert("Có lỗi xảy ra, vui lòng thử lại!");
      }
    });
  }

  // Hàm khởi chạy trang thanh toán
  async init() {
    // Render danh sách đơn hàng và lấy tổng tiền
    const total = await this.renderSummary();
    // FIX: Truyền total vào setupForm thay vì tính lại
    this.setupForm(total);
  }
}

// ===== KHỞI CHẠY =====
const checkoutPage = new CheckoutPage();
checkoutPage.init();
