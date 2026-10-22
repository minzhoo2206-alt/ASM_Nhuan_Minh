// Bảo vệ các trang admin: chưa đăng nhập admin thì đá về trang đăng nhập admin.
// Đồng thời thêm tên admin + nút Đăng xuất vào thanh bên (aside).
import { requireAdmin, logout } from "/Compoment/authGuard.js";

const session = requireAdmin();

if (session) {
  const aside = document.querySelector("aside");
  if (aside) {
    const box = document.createElement("div");
    box.className = "mt-8 border-t border-slate-600 pt-4 text-sm";

    const name = document.createElement("p");
    name.className = "mb-3 text-slate-300";
    name.textContent = "👤 " + session.fullname;

    const out = document.createElement("button");
    out.type = "button";
    out.textContent = "Đăng xuất";
    out.className = "w-full rounded-lg bg-slate-700 px-4 py-2 text-left hover:bg-red-600";
    out.addEventListener("click", () => logout("/Pages/auth/adminLogin.html"));

    box.append(name, out);
    aside.append(box);
  }
}
