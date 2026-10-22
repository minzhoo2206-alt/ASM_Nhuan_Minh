 const form = document.getElementById("registerForm");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirm = document.getElementById("confirm").value;

      // Reset lỗi
      document.getElementById("errName").textContent = "";
      document.getElementById("errEmail").textContent = "";
      document.getElementById("errPass").textContent = "";
      document.getElementById("errConfirm").textContent = "";

      let isValid = true;

      // Kiểm tra rỗng
      if (fullname === "") {
        document.getElementById("errName").textContent = "Họ tên không được để trống!";
        isValid = false;
      }
      if (email === "") {
        document.getElementById("errEmail").textContent = "Email không được để trống!";
        isValid = false;
      }
      if (password === "") {
        document.getElementById("errPass").textContent = "Mật khẩu không được để trống!";
        isValid = false;
      }
      if (confirm === "") {
        document.getElementById("errConfirm").textContent = "Xác nhận mật khẩu không được để trống!";
        isValid = false;
      }

      // Kiểm tra định dạng email
      const emailRegex = /^.+@.+\..+$/;
      if (isValid && !emailRegex.test(email)) {
        document.getElementById("errEmail").textContent = "Email phải đúng định dạng (*@*.*)";
        isValid = false;
      }

      // Kiểm tra mật khẩu khớp
      if (isValid && password !== confirm) {
        document.getElementById("errConfirm").textContent = "Mật khẩu xác nhận không khớp!";
        isValid = false;
      }

      if (isValid) {
        const newUser = { fullname, email, password };

        try {
          const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
          });

          if (!response.ok) {
            throw new Error("Có lỗi xảy ra khi đăng ký");
          }

          const data = await response.json();
          alert("Đăng ký thành công!");
          console.log("User đã lưu:", data);
          // Sau khi đăng ký thành công có thể chuyển hướng sang login
          window.location.href = "/index.html";
        } catch (error) {
          console.error(error);
          alert("Đăng ký thất bại!");
        }
      }
    });