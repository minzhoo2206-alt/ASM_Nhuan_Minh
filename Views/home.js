export default class HomeView {
  // Xử lý đường dẫn hình ảnh
  getImageUrl(imagePath) {
    if (!imagePath) {
      return "";
    }

    if (
      imagePath.startsWith("http://") ||
      imagePath.startsWith("https://") ||
      imagePath.startsWith("//")
    ) {
      return imagePath;
    }

    const cleanPath = imagePath.replace(/^(\.\.?\/)+/, "");

    return "/" + cleanPath;
  }

  // Hiển thị danh mục
  renderCategories(categories) {
    const categoriesList = document.querySelector("#categoriesList");

    if (!categoriesList) {
      console.warn("Không tìm thấy #categoriesList");
      return;
    }

    categoriesList.className = "grid grid-cols-2 md:grid-cols-4 gap-4";

    categoriesList.innerHTML = "";

    categories.forEach((category) => {
      const categoryLink = document.createElement("a");

      categoryLink.href = "Pages/products.html?cat_id=" + category.cat_id;

      categoryLink.className =
        "block rounded-lg p-4 text-center hover:shadow-md transition";

      const categoryName = category.cat_name || category.name || "Danh mục";

      categoryLink.textContent = categoryName;

      categoriesList.appendChild(categoryLink);
    });
  }

  // Hiển thị sản phẩm
  renderProducts(products, onAddToCart) {
    const productList = document.querySelector("#productList");

    if (!productList) {
      console.warn("Không tìm thấy #productList");
      return;
    }

    productList.className = "grid grid-cols-2 md:grid-cols-4 gap-4";

    productList.innerHTML = "";

    products.forEach((product) => {
      const productCard = document.createElement("div");

      productCard.className =
        "rounded-lg border p-3 hover:shadow-md transition";

      const detailUrl = "Pages/productDetail.html?prod_id=" + product.id;

      const imageUrl = this.getImageUrl(product.image);

      const productName = product.name || product.prod_name || "Sản phẩm";

      const description = product.description || "";

      const price = Number(product.price || 0);

      // Tạo đường dẫn xem chi tiết
      const detailLink = document.createElement("a");
      detailLink.href = detailUrl;

      // Tạo ảnh sản phẩm
      const image = document.createElement("img");
      image.src = imageUrl;
      image.alt = productName;
      image.className = "w-full h-40 object-cover rounded";

      image.onerror = () => {
        image.style.display = "none";
      };

      // Tạo tên sản phẩm
      const name = document.createElement("h3");
      name.className = "mt-2 font-semibold";
      name.textContent = productName;

      // Tạo mô tả
      const desc = document.createElement("p");
      desc.className = "text-sm text-gray-500";
      desc.textContent = description;

      // Tạo giá
      const priceElement = document.createElement("p");
      priceElement.className = "mt-2 font-bold text-red-600";
      priceElement.textContent = price.toLocaleString("vi-VN") + " đ";

      detailLink.append(image, name, desc, priceElement);

      // Tạo nút thêm giỏ hàng
      const button = document.createElement("button");
      button.type = "button";
      button.className =
        "add-to-cart-btn mt-3 w-full rounded bg-black text-white p-2";
      button.textContent = "Thêm vào giỏ hàng";

      // Báo cho Controller khi nhấn nút
      button.addEventListener("click", () => {
        onAddToCart(product.id, price);
      });

      productCard.append(detailLink, button);
      productList.appendChild(productCard);
    });
  }

  // Hiển thị lỗi cho người dùng
  showError(message) {
    console.error(message);
  }
}
