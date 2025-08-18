document.addEventListener("DOMContentLoaded", () => {
    const ordersListBody = document.getElementById("orders-list");
    let allOrders = JSON.parse(localStorage.getItem("bazaarOrders")) || [];

    // --- Helper function to get the styling for each status ---
    const getStatusBadge = (status) => {
        switch (status) {
            case "Confirmed":       return "bg-blue-100 text-blue-800";
            case "Shipped":         return "bg-indigo-100 text-indigo-800";
            case "Out for Delivery":return "bg-purple-100 text-purple-800";
            case "Delivered":       return "bg-green-100 text-green-800";
            case "Cancelled":       return "bg-red-100 text-red-800";
            case "Pending":
            default:                return "bg-yellow-100 text-yellow-800";
        }
    };

    /**
     * --- [NEW AND IMPROVED] Helper function to get the action buttons ---
     * This provides a primary action button and a conditional "Cancel" button.
     */
    const getActionButtons = (order) => {
        const primaryButtonClasses = "action-btn text-white font-bold py-1 px-3 rounded-full text-xs shadow transition-transform hover:scale-105";
        const cancelButtonClasses = "update-status-btn bg-red-500 hover:bg-red-600 ml-2 " + primaryButtonClasses;
        
        let actionsHTML = '';

        // The "Cancel" button is available for these statuses
        const canBeCancelled = ["Pending", "Confirmed", "Shipped"].includes(order.status);

        switch (order.status) {
            case "Pending":
                actionsHTML = `<button data-id="${order.id}" data-status="Confirmed" class="update-status-btn bg-green-500 hover:bg-green-600 ${primaryButtonClasses}">Confirm Order</button>`;
                break;
            case "Confirmed":
                actionsHTML = `<button data-id="${order.id}" data-status="Shipped" class="update-status-btn bg-blue-500 hover:bg-blue-600 ${primaryButtonClasses}">Mark as Shipped</button>`;
                break;
            case "Shipped":
                actionsHTML = `<button data-id="${order.id}" data-status="Out for Delivery" class="update-status-btn bg-indigo-500 hover:bg-indigo-600 ${primaryButtonClasses}">Out for Delivery</button>`;
                break;
            case "Out for Delivery":
                actionsHTML = `<button data-id="${order.id}" data-status="Delivered" class="update-status-btn bg-purple-500 hover:bg-purple-600 ${primaryButtonClasses}">Mark as Delivered</button>`;
                break;
            default:
                // For "Delivered" or "Cancelled" statuses
                return `<span class="text-xs text-gray-400">No actions available</span>`;
        }

        // If the order can be cancelled, add the cancel button next to the primary action.
        if (canBeCancelled) {
            actionsHTML += `<button data-id="${order.id}" data-status="Cancelled" class="${cancelButtonClasses}">Cancel</button>`;
        }
        
        return actionsHTML;
    };
    
    // --- Main function to render all orders in the table ---
    const renderOrders = () => {
        ordersListBody.innerHTML = "";

        if (allOrders.length === 0) {
            ordersListBody.innerHTML = `
                <tr class="bg-white"><td colspan="6" class="px-6 py-12 text-center text-gray-500">You have no incoming orders yet.</td></tr>
            `;
            return;
        }

        // Sort orders to show actionable items first
        allOrders.sort((a, b) => {
            const statusOrder = ["Pending", "Confirmed", "Shipped", "Out for Delivery", "Delivered", "Cancelled"];
            return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
        });

        allOrders.forEach((order) => {
            const itemsSummary = order.items.map(item => `${item.name} (x${item.quantity})`).join(", ");
            const row = document.createElement("tr");
            row.className = "bg-white hover:bg-gray-50 transition-colors";
            row.innerHTML = `
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">${order.id}</th>
                <td class="px-6 py-4">
                    <div class="font-semibold">${order.customerName}</div>
                    <div class="text-xs text-gray-500">${order.customerInfo.phone}</div>
                </td>
                <td class="px-6 py-4 text-gray-600 max-w-xs truncate" title="${itemsSummary}">${itemsSummary}</td>
                <td class="px-6 py-4 font-bold text-gray-800">₹${order.totalAmount.toLocaleString("en-IN")}</td>
                <td class="px-6 py-4">
                    <span class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${getStatusBadge(order.status)}">${order.status}</span>
                </td>
                <td class="px-6 py-4 text-center whitespace-nowrap">${getActionButtons(order)}</td>
            `;
            ordersListBody.appendChild(row);
        });
    };

    // --- Function to update an order's status ---
    const updateOrderStatus = (orderId, newStatus) => {
        const orderIndex = allOrders.findIndex(o => o.id === orderId);
        if (orderIndex > -1) {
            const orderToUpdate = allOrders[orderIndex];
            if (orderToUpdate.status === newStatus) return;

            if (!Array.isArray(orderToUpdate.statusHistory)) {
                orderToUpdate.statusHistory = [{ status: orderToUpdate.status, date: new Date().toISOString() }];
            }

            orderToUpdate.statusHistory.push({ status: newStatus, date: new Date().toISOString() });
            orderToUpdate.status = newStatus;

            localStorage.setItem("bazaarOrders", JSON.stringify(allOrders));
            renderOrders();
        }
    };

    // --- Event listener for all action buttons ---
    ordersListBody.addEventListener("click", (e) => {
        if (e.target.classList.contains("update-status-btn")) {
            const orderId = e.target.dataset.id;
            const newStatus = e.target.dataset.status;
            if (confirm(`Are you sure you want to change this order's status to "${newStatus}"?`)) {
                updateOrderStatus(orderId, newStatus);
            }
        }
    });

    // --- Initial render ---
    renderOrders();
});
