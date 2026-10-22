export class BaseService {
    constructor() {
        this.productsApi = "http://localhost:3000/products";
        this.variantsApi = "http://localhost:3000/product_variants";
        this.ordersApi = "http://localhost:3000/orders";
        this.orderDetailsApi = "http://localhost:3000/order_details";
    }

    // Định dạng tiền
    formatCurrency(price) {
        return Number(price || 0).toLocaleString("vi-VN") + " ₫";
    }

    // Lấy giỏ hàng từ localStorage
    getCart() {
        return JSON.parse(localStorage.getItem("cart")) || [];
    }

    // Lưu giỏ hàng
    saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Lấy thông tin sản phẩm bằng fetch then
    fetchProduct(prodId) {
        return fetch(`${this.productsApi}/${prodId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Không tìm thấy sản phẩm");
                }
                return response.json();
            });
    }

    // Lấy thông tin biến thể
    fetchVariant(variantId) {
        return fetch(`${this.variantsApi}?variant_id=${variantId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Không lấy được biến thể");
                }
                return response.json();
            })
            .then(variants => {
                // Hỗ trợ dữ liệu dùng variant_id hoặc id
                return variants.find(item =>
                    String(item.variant_id) === String(variantId) ||
                    String(item.id) === String(variantId)
                ) || null;
            });
    }

    // Lấy giá sản phẩm
    calcItemPrice(item) {
        return this.fetchProduct(item.prod_id)
            .then(product => {
                if (item.variant_id !== undefined &&
                    item.variant_id !== null &&
                    item.variant_id !== "") {

                    return this.fetchVariant(item.variant_id)
                        .then(variant => ({
                            product,
                            variant,
                            price: Number(
                                variant?.price ?? product.price ?? product.donGia ?? 0
                            )
                        }));
                }

                return {
                    product,
                    variant: null,
                    price: Number(product.price ?? product.donGia ?? 0)
                };
            });
    }
}

export class CartModel extends BaseService {
    // Lấy chi tiết tất cả sản phẩm trong giỏ
    getCartDetails() {
        const cart = this.getCart();

        return Promise.all(
            cart.map((item, index) => {
                return this.calcItemPrice(item)
                    .then(data => ({
                        index,
                        product: data.product,
                        variant: data.variant,
                        price: data.price,
                        quantity: Number(item.quantity) || 1,
                        itemTotal: data.price * (Number(item.quantity) || 1)
                    }));
            })
        );
    }

    // Thêm sản phẩm vào giỏ
    addToCart(product, quantity = 1, variant = null) {
        const cart = this.getCart();

        const prodId = product.id ?? product.prod_id;
        const variantId = variant
            ? (variant.variant_id ?? variant.id)
            : null;

        const existingItem = cart.find(item =>
            String(item.prod_id) === String(prodId) &&
            String(item.variant_id ?? "") === String(variantId ?? "")
        );

        if (existingItem) {
            existingItem.quantity =
                (Number(existingItem.quantity) || 1) + Number(quantity);
        } else {
            const newItem = {
                prod_id: prodId,
                quantity: Number(quantity) || 1
            };

            if (variantId !== null && variantId !== undefined) {
                newItem.variant_id = variantId;
            }

            cart.push(newItem);
        }

        this.saveCart(cart);
    }

    // Cập nhật số lượng
    updateQuantity(index, quantity) {
        const cart = this.getCart();

        if (cart[index]) {
            cart[index].quantity = Math.max(
                1,
                Math.min(99, Number(quantity) || 1)
            );

            this.saveCart(cart);
        }
    }

    // Xóa một sản phẩm
    removeItem(index) {
        const cart = this.getCart();
        cart.splice(index, 1);
        this.saveCart(cart);
    }

    // Xóa toàn bộ giỏ hàng
    clearCart() {
        this.saveCart([]);
    }
}
