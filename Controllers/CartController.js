
import { CartModel } from "../Models/CartModel.js";
import { CartView } from "../Views/cart.js";

export class CartController {
    constructor() {
        this.model = new CartModel();
        this.view = new CartView();

        this.bindEvents();
        this.renderCart();
    }

    // Hiển thị giỏ hàng
    renderCart() {
        this.model.getCartDetails()
            .then(items => {
                this.view.render(
                    items,
                    this.model.formatCurrency.bind(this.model)
                );
            })
            .catch(error => {
                console.error("Lỗi giỏ hàng:", error);
                this.view.cartList.innerHTML = `
                    <p class="rounded bg-red-100 p-4 text-red-600">
                        Không tải được giỏ hàng. Hãy kiểm tra API.
                    </p>
                `;
            });
    }

    // Xử lý sự kiện
    bindEvents() {
        // Thay đổi số lượng
        this.view.cartList.addEventListener("change", event => {
            if (event.target.matches('input[type="number"]')) {
                const index = Number(event.target.dataset.index);

                this.model.updateQuantity(index, event.target.value);
                this.renderCart();
            }
        });

        // Xóa sản phẩm
        this.view.cartList.addEventListener("click", event => {
            const button = event.target.closest(
                'button[data-action="remove"]'
            );

            if (button) {
                const index = Number(button.dataset.index);

                this.model.removeItem(index);
                this.renderCart();
            }
        });

        // Xóa toàn bộ giỏ hàng
        const clearBtn = document.getElementById("clearCartBtn");

        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                this.model.clearCart();
                this.renderCart();
            });
        }

        // Thanh toán
        const checkoutBtn = document.getElementById("checkoutBtn");

        if (checkoutBtn) {
            checkoutBtn.addEventListener("click", () => {
                if (this.model.getCart().length === 0) {
                    alert("Giỏ hàng đang trống!");
                    return;
                }

                window.location.href = "./checkout.html";
            });
        }
    }
}

// Khởi chạy Controller
document.addEventListener("DOMContentLoaded", () => {
    new CartController();
});
