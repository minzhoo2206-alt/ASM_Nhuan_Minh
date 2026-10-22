
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const emailVal = document.getElementById("email").value.trim();
      const passVal = document.getElementById("password").value;

      document.getElementById("errEmail").textContent = "";
      document.getElementById("errPass").textContent = "";

      let isValid = true;

      if (emailVal === "") {
        document.getElementById("errEmail").textContent = "Email không được để trống!";
        isValid = false;
      }
      if (passVal === "") {
        document.getElementById("errPass").textContent = "Mật khẩu không được để trống!";
        isValid = false;
      }

      if (isValid) {
        try {
          // Gọi API JSON Server để kiểm tra user
          const response = await fetch(`http://localhost:3000/admin?email=${emailVal}&password=${passVal}`);
          const users = await response.json();

          if (users.length > 0) {
            alert(`Xin chào ${users.rolo} ${users[0].fullname}`);
            window.location.href = "/Pages/admin/dashboard.html"; // chuyển hướng sau khi đăng nhập
          } else {
            alert("Đăng nhập thất bại! Sai email hoặc mật khẩu.");
          }
        } catch (error) {
          console.error(error);
          alert("Có lỗi xảy ra khi đăng nhập!");
          window.location.href = "/index.html";
        }
      }
    });
