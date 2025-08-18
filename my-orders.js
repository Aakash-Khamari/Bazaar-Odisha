document.addEventListener("DOMContentLoaded", () => {
    const ordersListContainer = document.getElementById("my-orders-list");
    // Retrieve the orders from the exact same localStorage key
    const allOrders = JSON.parse(localStorage.getItem("bazaarOrders")) || [];

    // Re-usable helper function to get status colors (copied from orders.js for consistency)
    const getStatusBadge = (status) => {
        switch (status) {
            case "Confirmed":
                return "bg-blue-100 text-blue-800";
            case "Shipped":
                return "bg-indigo-100 text-indigo-800";
            case "Delivered":
                return "bg-green-100 text-green-800";
            case "Cancelled":
                return "bg-red-100 text-red-800";
            case "Pending":
            default:
                return "bg-yellow-100 text-yellow-800";
        }
    };

    const renderMyOrders = () => {
        ordersListContainer.innerHTML = "";

        if (allOrders.length === 0) {
            ordersListContainer.innerHTML = `
                <div class="bg-white p-8 rounded-lg shadow-sm text-center text-gray-500">
                    <h2 class="text-xl font-semibold">You haven't placed any orders yet.</h2>
                    <p class="mt-2">Explore our <a href="shg-marketplace.html" class="text-teal-600 hover:underline">SHG Marketplace</a> to find unique products!</p>
                </div>
            `;
            return;
        }

        // Display orders, newest first
        allOrders.reverse().forEach(order => {
            const itemsHtml = order.items.map(item => `
                <li class="flex justify-between items-center text-sm">
                    <span>${item.name} (x${item.quantity})</span>
                    <span class="font-medium">₹${(item.price * item.quantity).toLocaleString("en-IN")}</span>
                </li>
            `).join("");

            const orderCard = `
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div class="p-4 bg-gray-50 border-b flex justify-between items-center flex-wrap gap-2">
                        <div>
                            <p class="font-bold text-gray-800">Order ID: ${order.id}</p>
                            <p class="text-xs text-gray-500">Placed on: August 18, 2025</p> <!-- Example date -->
                        </div>
                        <span class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${getStatusBadge(order.status)}">
                            ${order.status}
                        </span>
                    </div>
                    <div class="p-4">
                        <p class="font-semibold mb-2">Items in this order:</p>
                        <ul class="space-y-2 border-b pb-3 mb-3">
                            ${itemsHtml}
                        </ul>
                        <div class="flex justify-between items-center font-bold text-lg">
                            <span>Total</span>
                            <span>₹${order.totalAmount.toLocaleString("en-IN")}</span>
                        </div>
                    </div>
                </div>
            `;
            ordersListContainer.insertAdjacentHTML("beforeend", orderCard);
        });
    };

    // Initial render call
    renderMyOrders();
});

