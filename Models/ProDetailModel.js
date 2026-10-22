export default class ProDetailModel {
  constructor() {
    this.proApi = "http://localhost:3000/products";
    this.proVarApi = "http://localhost:3000/product_variants";
  }

  fetchData(url) {
    return fetch(url).then((response) => {
      if (!response.ok) throw new Error("Không thể lấy dữ liệu từ JSON Server");
      return response.json();
    }).then((data) => data.data || data);
  }

  getProduct(prodId) {
    return this.fetchData(`${this.proApi}/${encodeURIComponent(prodId)}`);
  }

  getVariants(prodId) {
    return this.fetchData(`${this.proVarApi}?prod_id=${encodeURIComponent(prodId)}`);
  }

  addToCart(productId, variantId, price, quantity) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartKey = variantId ? `${productId}-${variantId}` : String(productId);
    const existing = cart.find((item) => item.cartKey === cartKey);

    if (existing) {
      existing.quantity = (Number(existing.quantity) || 0) + quantity;
    } else {
      cart.push({
        prod_id: productId,
        variant_id: variantId,
        quantity,
        price,
        cartKey
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
