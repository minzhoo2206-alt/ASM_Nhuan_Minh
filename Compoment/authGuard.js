// Tiện ích bảo vệ trang + đăng xuất. Dùng khi cần (file mới, không ảnh hưởng code cũ).
// Ví dụ trong một trang admin:
//   <script type="module">
//     import { requireAdmin, logout } from "/Compoment/authGuard.js";
//     requireAdmin();
//   </script>
const SESSION_KEY = "auth_session";

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

export function requireAdmin() {
  const s = getSession();
  if (!s || s.role !== "admin") {
    window.location.href = "/Pages/auth/adminLogin.html";
    return null;
  }
  return s;
}

export function requireUser() {
  const s = getSession();
  if (!s || s.role !== "user") {
    window.location.href = "/Pages/auth/login.html";
    return null;
  }
  return s;
}

export function logout(redirectTo = "/Pages/auth/login.html") {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = redirectTo;
}
