// MODEL: làm việc với dữ liệu (API json-server + localStorage), không đụng tới giao diện.
export default class AuthModel {
  constructor() {
    // json-server riêng cho phần tài khoản (database/auth.json), chạy ở cổng 3001
    this.baseUrl = "http://localhost:3000";
    this.accountsApi = this.baseUrl + "/accounts";
    this.adminsApi = this.baseUrl + "/admins";
    this.sessionKey = "auth_session";
  }

 

  async fetchJson(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Không kết nối được JSON Server (cổng 3001)");
    }
    const data = await response.json();
    return data.data || data;
  }

  // Bỏ mật khẩu trước khi lưu/ trả ra ngoài
  stripPassword(account) {
    const { password, ...safe } = account;
    return safe;
  }

   async findByCredentials(api, email, password) {
    const list = await this.fetchJson(
      `${api}?email=${encodeURIComponent(email.toLowerCase())}&password=${encodeURIComponent(password)}`
    );
    return list.length > 0 ? this.stripPassword(list[0]) : null;
  }
    
  // Đăng nhập user
  loginUser(email, password) {
    return this.findByCredentials(this.accountsApi, email, password);
  }

  // Đăng nhập admin
  loginAdmin(email, password) {
    return this.findByCredentials(this.adminsApi, email, password);
  }

  // Email đã được đăng ký chưa
  async emailExists(email) {
    const list = await this.fetchJson(
      `${this.accountsApi}?email=${encodeURIComponent(email.toLowerCase())}`
    );
    return list.length > 0;
  }

  // Đăng ký user mới
  async register({ fullname, email, password }) {
    if (await this.emailExists(email)) {
      throw new Error("Email này đã được đăng ký!");
    }

    const newAccount = {
      fullname,
      email: email.toLowerCase(),
      password,
      role: "user",
      created_date: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    const saved = await this.fetchJson(this.accountsApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAccount),
    });
    return this.stripPassword(saved);
  }

  // ---- Phiên đăng nhập (lưu ở localStorage) ----
  saveSession(account) {
    localStorage.setItem(this.sessionKey, JSON.stringify(account));
  }

  getSession() {
    try {
      return JSON.parse(localStorage.getItem(this.sessionKey));
    } catch {
      return null;
    }
  }

  logout() {
    localStorage.removeItem(this.sessionKey);
  }
}
