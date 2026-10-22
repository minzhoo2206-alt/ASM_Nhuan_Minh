// CONTROLLER: nối Model và View, chứa luật kiểm tra dữ liệu nhập.
// mode: "login" (user) | "admin" (admin) | "signup" (đăng ký user)
export default class AuthController {
  constructor(model, view, mode) {
    this.model = model;
    this.view = view;
    this.mode = mode;
    // Nếu đã đăng nhập đúng vai trò thì khỏi hiện form nữa
    this.redirectIfLoggedIn();
    this.view.onSubmit(() => this.handleSubmit());
  }

  redirectIfLoggedIn() {
    const session = this.model.getSession();
    if (!session) return;
    if (this.mode === "admin" && session.role === "admin") {
      this.view.redirect("/Pages/admin/dashboard.html");
    } else if (this.mode !== "admin" && session.role === "user") {
      this.view.redirect("/index.html");
    }
  }

 
  validate(data) {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (this.mode === "signup" && !data.fullname) {
      errors.fullname = "Họ tên không được để trống!";
    }

    if (!data.email) {
      errors.email = "Email không được để trống!";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Email không đúng định dạng!";
    }

    if (!data.password) {
      errors.password = "Mật khẩu không được để trống!";
    } else if (this.mode === "signup" && data.password.length < 6) {
      errors.password = "Mật khẩu tối thiểu 6 ký tự!";
    }

    if (this.mode === "signup") {
      if (!data.confirm) {
        errors.confirm = "Xác nhận mật khẩu không được để trống!";
      } else if (data.password !== data.confirm) {
        errors.confirm = "Mật khẩu xác nhận không khớp!";
      }
    }
    return errors;
  }

  async handleSubmit() {
    this.view.clearErrors();
    const data = this.view.getFormData();

    const errors = this.validate(data);
    const fields = Object.keys(errors);
    if (fields.length > 0) {
      fields.forEach((f) => this.view.showFieldError(f, errors[f]));
      return;
    }

    this.view.setLoading(true);
    try {
      if (this.mode === "signup") {
        await this.signup(data);
      } else {
        await this.login(data);
      }
    } catch (error) {
      this.view.showMessage(error.message);
    } finally {
      this.view.setLoading(false);
    }
  }

  async login(data) {
    const account =
      this.mode === "admin"
        ? await this.model.loginAdmin(data.email, data.password)
        : await this.model.loginUser(data.email, data.password);

    if (!account) {
      this.view.showMessage("Sai email hoặc mật khẩu!");
      return;
    }

    this.model.saveSession(account);
    this.view.showMessage(`Xin chào ${account.fullname}!`, "success");
    this.view.redirect(
      this.mode === "admin" ? "/Pages/admin/dashboard.html" : "/index.html",
      600
    );
  }

  async signup(data) {
    await this.model.register(data);
    this.view.showMessage("Đăng ký thành công! Đang chuyển sang đăng nhập...", "success");
    this.view.redirect("/Pages/auth/login.html", 1000);
  }
}
