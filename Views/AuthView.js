// VIEW: chỉ đọc/ghi giao diện (form, thông báo lỗi), không gọi API.
export default class AuthView {
  constructor() {
    this.form = document.getElementById("authForm");
    this.messageBox = document.getElementById("message");
    this.submitBtn = this.form.querySelector("button[type='submit']");
    this.submitText = this.submitBtn.textContent;
  }

  // Lấy giá trị các ô input (theo thuộc tính name)
  getFormData() {
    const data = {};
    new FormData(this.form).forEach((value, key) => {
      data[key] = typeof value === "string" ? value : "";
    });
    if (data.fullname !== undefined) data.fullname = data.fullname.trim();
    if (data.email !== undefined) data.email = data.email.trim();
    return data;
  }

  onSubmit(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }

  clearErrors() {
    this.form.querySelectorAll("[data-error-for]").forEach((el) => {
      el.textContent = "";
    });
    this.messageBox.innerHTML = "";
  }

  showFieldError(field, text) {
    const el = this.form.querySelector(`[data-error-for='${field}']`);
    if (el) el.textContent = text;
  }

  showMessage(text, type = "error") {
    const color =
      type === "success"
        ? "bg-green-100 text-green-800 border-green-300"
        : "bg-red-100 text-red-800 border-red-300";
    this.messageBox.innerHTML = `<div class="mb-4 rounded-lg border px-4 py-3 text-sm ${color}"></div>`;
    this.messageBox.firstElementChild.textContent = text; // textContent để tránh chèn HTML
  }

  setLoading(isLoading) {
    this.submitBtn.disabled = isLoading;
    this.submitBtn.textContent = isLoading ? "Đang xử lý..." : this.submitText;
    this.submitBtn.classList.toggle("opacity-60", isLoading);
  }

  redirect(url, delay = 0) {
    setTimeout(() => (window.location.href = url), delay);
  }
}
