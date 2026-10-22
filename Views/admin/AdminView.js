
export class AdminView {
  constructor() {
    this.content = document.querySelector("#pageContent");
    this.message = document.querySelector("#message");
  }

  showMessage(text, isError = false) {
    this.message.textContent = text;

    this.message.className = isError
      ? "mb-4 rounded-lg bg-red-100 p-3 text-red-700"
      : "mb-4 rounded-lg bg-green-100 p-3 text-green-700";
  }

  pageTitle(title, subtitle) {
    return `
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-800">${title}</h1>
        <p class="mt-1 text-sm text-gray-500">${subtitle}</p>
      </div>
    `;
  }

  // Giao diện tổng quan
  showDashboard(products, categories, users, orders, model) {
    const revenue = orders
      .filter(order => ["delivered", "Hoàn thành"].includes(order.status))
      .reduce((sum, order) => sum + Number(order.total_amount ?? order.total ?? 0), 0);

    this.content.innerHTML = `
      ${this.pageTitle("Tổng quan", "Thông tin hoạt động cửa hàng")}

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div class="rounded-xl bg-white p-5 shadow-sm">
          <p class="text-gray-500">Sản phẩm</p>
          <p class="mt-2 text-3xl font-bold text-orange-600">
            ${products.length}
          </p>
        </div>

        <div class="rounded-xl bg-white p-5 shadow-sm">
          <p class="text-gray-500">Danh mục</p>
          <p class="mt-2 text-3xl font-bold text-orange-600">
            ${categories.length}
          </p>
        </div>

        <div class="rounded-xl bg-white p-5 shadow-sm">
          <p class="text-gray-500">Người dùng</p>
          <p class="mt-2 text-3xl font-bold text-orange-600">
            ${users.length}
          </p>
        </div>

        <div class="rounded-xl bg-white p-5 shadow-sm">
          <p class="text-gray-500">Doanh thu hoàn thành</p>
          <p class="mt-2 text-xl font-bold text-green-600">
            ${model.formatMoney(revenue)}
          </p>
        </div>
      </div>

      <div class="mt-6 rounded-xl bg-white p-5 shadow-sm">
        <h2 class="mb-4 text-lg font-bold">Đơn hàng gần đây</h2>
        ${this.ordersTable(orders.slice().reverse().slice(0, 5), model, false)}
      </div>
    `;
  }

  // Giao diện sản phẩm
  showProducts(products, categories, model) {
    const categoryOptions = categories.map(category => `
      <option value="${category.cat_id ?? category.id}">${category.name}</option>
    `).join("");

    const rows = products.map(product => {
      const category = categories.find(
        item => String(item.cat_id ?? item.id) === String(product.cat_id ?? product.categoryId)
      );

      return `
        <tr class="border-b hover:bg-gray-50">
          <td class="p-3">${product.id}</td>
          <td class="p-3">${product.name}</td>
          <td class="p-3">${category?.name || product.category || "—"}</td>
          <td class="p-3">${model.formatMoney(product.price)}</td>
          <td class="p-3">${product.quantity ?? product.stock ?? 0}</td>
          <td class="p-3">
            <button data-delete-product="${product.id}"
              class="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700">
              Xóa
            </button>
          </td>
        </tr>
      `;
    }).join("");

    this.content.innerHTML = `
      ${this.pageTitle("Quản lý sản phẩm", "Thêm và xóa sản phẩm")}

      <section class="mb-6 rounded-xl bg-white p-5 shadow-sm">
        <button id="toggleProductForm"
          class="rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
          + Thêm sản phẩm
        </button>

        <form id="productForm"
          class="mt-4 hidden grid grid-cols-1 gap-4 md:grid-cols-2">

          <input name="name" required placeholder="Tên sản phẩm"
            class="rounded-lg border p-3">

          <select name="categoryId" required
            class="rounded-lg border p-3">
            ${categoryOptions}
          </select>

          <input name="price" type="number" min="0" required
            placeholder="Giá sản phẩm"
            class="rounded-lg border p-3">

          <input name="stock" type="number" min="0" required
            placeholder="Số lượng tồn kho"
            class="rounded-lg border p-3">

          <input name="description" placeholder="Mô tả sản phẩm"
            class="rounded-lg border p-3 md:col-span-2">

          <div class="flex gap-2 md:col-span-2">
            <button type="submit"
              class="rounded-lg bg-green-600 px-4 py-2 text-white">
              Lưu sản phẩm
            </button>

            <button type="button" id="cancelProductForm"
              class="rounded-lg bg-gray-200 px-4 py-2">
              Hủy
            </button>
          </div>
        </form>
      </section>

      <section class="rounded-xl bg-white p-5 shadow-sm">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[650px] text-left text-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-3">ID</th>
                <th class="p-3">Tên sản phẩm</th>
                <th class="p-3">Danh mục</th>
                <th class="p-3">Giá</th>
                <th class="p-3">Tồn kho</th>
                <th class="p-3">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              ${rows || `
                <tr>
                  <td colspan="6" class="p-5 text-center text-gray-500">
                    Chưa có sản phẩm
                  </td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  // Giao diện danh mục
  showCategories(categories) {
    this.content.innerHTML = `
      ${this.pageTitle("Quản lý danh mục", "Danh sách danh mục")}

      <section class="rounded-xl bg-white p-5 shadow-sm">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="p-3">ID</th>
              <th class="p-3">Tên danh mục</th>
            </tr>
          </thead>
          <tbody>
            ${categories.map(category => `
              <tr class="border-b hover:bg-gray-50">
                <td class="p-3">${category.id}</td>
                <td class="p-3">${category.name}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
    `;
  }

  // Giao diện người dùng
  showUsers(users) {
    this.content.innerHTML = `
      ${this.pageTitle("Quản lý người dùng", "Danh sách người dùng")}

      <section class="overflow-x-auto rounded-xl bg-white p-5 shadow-sm">
        <table class="w-full min-w-[500px] text-left text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="p-3">ID</th>
              <th class="p-3">Họ tên</th>
              <th class="p-3">Email</th>
              <th class="p-3">Điện thoại</th>
            </tr>
          </thead>
          <tbody>
            ${users.map(user => `
              <tr class="border-b hover:bg-gray-50">
                <td class="p-3">${user.id}</td>
                <td class="p-3">${user.name || user.fullName || "—"}</td>
                <td class="p-3">${user.email || "—"}</td>
                <td class="p-3">${user.phone || "—"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
    `;
  }

  // Bảng đơn hàng dùng chung
  ordersTable(orders, model, showDetail = true) {
    const statuses = [
      ["pending", "Chờ xác nhận"],
      ["processing", "Đang xử lý"],
      ["shipping", "Đang giao"],
      ["delivered", "Hoàn thành"],
      ["cancelled", "Đã hủy"]
    ];

    return `
      <div class="overflow-x-auto">
        <table class="w-full min-w-[700px] text-left text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="p-3">Mã đơn</th>
              <th class="p-3">Khách hàng</th>
              <th class="p-3">Tổng tiền</th>
              <th class="p-3">Trạng thái</th>
              ${showDetail ? '<th class="p-3">Chi tiết</th>' : ""}
            </tr>
          </thead>
          <tbody>
            ${orders.map(order => `
              <tr class="border-b hover:bg-gray-50">
                <td class="p-3">#${order.id}</td>
                <td class="p-3">
                  ${order.customerName || order.fullname || order.customer || order.customerId || order.user_id || "—"}
                </td>
                <td class="p-3">${model.formatMoney(order.total_amount ?? order.total)}</td>
                <td class="p-3">
                  <select data-order-status="${order.id}"
                    class="rounded-lg border p-2">
                    ${statuses.map(([value, label]) => `
                      <option value="${value}"
                        ${order.status === value ? "selected" : ""}>
                        ${label}
                      </option>
                    `).join("")}
                  </select>
                </td>
                ${showDetail ? `
                  <td class="p-3">
                    <a href="orderDetail.html?id=${order.id}"
                      class="rounded-lg bg-blue-600 px-3 py-2 text-white">
                      Xem
                    </a>
                  </td>
                ` : ""}
              </tr>
            `).join("") || `
              <tr>
                <td colspan="${showDetail ? 5 : 4}"
                  class="p-5 text-center text-gray-500">
                  Chưa có đơn hàng
                </td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    `;
  }

  // Giao diện đơn hàng
  showOrders(orders, model) {
    this.content.innerHTML = `
      ${this.pageTitle("Quản lý đơn hàng", "Theo dõi trạng thái đơn hàng")}
      <section class="rounded-xl bg-white p-5 shadow-sm">
        ${this.ordersTable(orders, model)}
      </section>
    `;
  }

  // Giao diện chi tiết đơn hàng
  showOrderDetail(order, model) {
    if (!order) {
      this.content.innerHTML = `
        ${this.pageTitle("Chi tiết đơn hàng", "Không tìm thấy đơn hàng")}
      `;
      return;
    }

    const items = order.items || order.products || [];

    this.content.innerHTML = `
      ${this.pageTitle("Chi tiết đơn hàng #" + order.id, "Thông tin đơn hàng")}

      <section class="rounded-xl bg-white p-5 shadow-sm">
        <p class="mb-3">Khách hàng: ${order.customerName || order.fullname || order.customer || order.user_id || "—"}</p>
        <p class="mb-3">Trạng thái: ${order.status || "—"}</p>
        <p class="mb-5">Tổng tiền: ${model.formatMoney(order.total_amount ?? order.total)}</p>

        <h2 class="mb-3 text-lg font-bold">Sản phẩm trong đơn</h2>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-3">Tên sản phẩm</th>
                <th class="p-3">Số lượng</th>
                <th class="p-3">Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              ${items.map(item => `
                <tr class="border-b">
                  <td class="p-3">${item.name || item.productName || "—"}</td>
                  <td class="p-3">${item.quantity || 1}</td>
                  <td class="p-3">${model.formatMoney(item.price || item.unitPrice)}</td>
                </tr>
              `).join("") || `
                <tr>
                  <td colspan="3" class="p-4 text-gray-500">
                    Không có chi tiết sản phẩm.
                  </td>
                </tr>
              `}
            </tbody>
          </table>
        </div>

        <a href="orders.html"
          class="mt-5 inline-block rounded-lg bg-gray-200 px-4 py-2">
          ← Quay lại
        </a>
      </section>
    `;
  }
}
