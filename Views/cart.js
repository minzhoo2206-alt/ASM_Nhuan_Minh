
export class CartView {
    constructor() {
        this.cartList = document.getElementById("cartList");
        this.subtotal = document.getElementById("subtotal");
        this.itemCount = document.getElementById("itemCount");
        this.shippingFee = document.getElementById("shippingFee");
        this.grandTotal = document.getElementById("grandTotal");
    }

    render(items, formatCurrency) {
        this.cartList.innerHTML = "";

        if (items.length === 0) {
            this.cartList.innerHTML = `
                <div class="rounded-xl bg-white p-8 text-center shadow">
                    <h2 class="mb-3 text-xl font-bold">
                        Giỏ hàng đang trống
                    </h2>
                    <a href="../index.html"
                       class="text-blue-600 hover:underline">
                        Tiếp tục mua sắm
                    </a>
                </div>
            `;

            this.updateTotal([], formatCurrency);
            return;
        }

        items.forEach(item => {
            const product = item.product;
            const name = product.name ?? product.tenSP ?? "Sản phẩm";
            const image = product.image ?? product.hinhAnh ?? "";
            const variantName = item.variant
                ? (item.variant.name ?? item.variant.color ?? item.variant.size ?? "")
                : "";

            const div = document.createElement("div");

            div.className =
                "mb-4 flex flex-col gap-4 rounded-xl bg-white p-4 shadow " +
                "sm:flex-row sm:items-center sm:justify-between";

            div.innerHTML = `
                <div class="flex items-center gap-4">
                    ${
                        image
                            ? `<img src="${image}" alt=""
                                   class="h-20 w-20 rounded-lg object-cover">`
                            : `<div class="flex h-20 w-20 items-center
                                          justify-center rounded-lg bg-gray-100">
                                   📦
                               </div>`
                    }

                    <div>
                        <h3 class="font-bold">${name}</h3>
                        ${
                            variantName
                                ? `<p class="text-sm text-gray-500">
                                     ${variantName}
                                   </p>`
                                : ""
                        }
                        <p class="mt-2 text-blue-600">
                            ${formatCurrency(item.price)}
                        </p>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <input
                        type="number"
                        min="1"
                        max="99"
                        value="${item.quantity}"
                        data-index="${item.index}"
                        class="w-20 rounded border p-2"
                    >

                    <span class="font-bold">
                        ${formatCurrency(item.itemTotal)}
                    </span>

                    <button
                        type="button"
                        data-action="remove"
                        data-index="${item.index}"
                        class="text-red-600 hover:underline"
                    >
                        Xóa
                    </button>
                </div>
            `;

            this.cartList.appendChild(div);
        });

        this.updateTotal(items, formatCurrency);
    }

    // Tính tổng tiền
    updateTotal(items, formatCurrency) {
        const subtotal = items.reduce(
            (total, item) => total + item.itemTotal, 0
        );

        const itemCount = items.reduce(
            (total, item) => total + item.quantity, 0
        );

        const shippingFee = items.length > 0 ? 30000 : 0;
        const grandTotal = subtotal + shippingFee;

        this.subtotal.textContent = formatCurrency(subtotal);
        this.itemCount.textContent = itemCount;
        this.shippingFee.textContent = formatCurrency(shippingFee);
        this.grandTotal.textContent = formatCurrency(grandTotal);
    }
}
