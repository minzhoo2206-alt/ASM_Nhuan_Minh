// Gắn khu vực Đăng nhập / Đăng ký / Đăng xuất vào header các trang khách hàng.
import { getSession, logout } from "/Compoment/authGuard.js";

function buildAuthArea() {
  const session = getSession();
  const box = document.createElement("div");
  box.id = "authNav";
  box.className = "flex items-center gap-2 text-xs sm:text-sm font-medium";

  const link = (href, text, cls) => {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.className = cls;
    return a;
  };

  if (!session) {
    box.append(
      link("/Pages/auth/login.html", "Đăng nhập", "text-stone-600 hover:text-amber-600 transition-colors"),
      link("/Pages/auth/signup.html", "Đăng ký", "px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold transition-colors")
    );
    return box;
  }

  const hello = document.createElement("span");
  hello.className = "hidden sm:inline text-stone-600";
  hello.textContent = "Xin chào, " + session.fullname;
  box.append(hello);

  if (session.role === "admin") {
    box.append(link("/Pages/admin/dashboard.html", "Quản trị", "text-amber-600 font-semibold hover:underline"));
  }

  const out = document.createElement("button");
  out.type = "button";
  out.textContent = "Đăng xuất";
  out.className = "text-stone-500 hover:text-red-600 transition-colors";
  out.addEventListener("click", () => logout("/index.html"));
  box.append(out);
  return box;
}

const header = document.querySelector("header");
if (header) {
  const target =
    header.querySelector(".flex.items-center.gap-3") || header.firstElementChild;
  if (target && !document.getElementById("authNav")) {
    target.prepend(buildAuthArea());
  }
}
