document.addEventListener("DOMContentLoaded", () => {
    const ordersListBody = document.getElementById("orders-list");
    let allOrders = JSON.parse(localStorage.getItem("bazaarOrders")) || [];

    // --- Helper function to get the styling for each status ---
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

    // --- Helper function to get the action buttons for each status ---
    const getActionButtons = (order) => {
        const commonButtonClasses = "action-btn text-white font-bold py-1 px-3 rounded-full text-xs shadow";
        
        switch (order.status) {
            case "Pending":
                return `
                    <button data-id="${order.id}" data-status="Confirmed" class="update-status-btn bg-green-500 hover:bg-green-600 ${commonButtonClasses}">Confirm</button>
                    <button data-id="${order.id}" data-status="Cancelled" class="update-status-btn bg-red-500 hover:bg-red-600 ${commonButtonClasses} ml-2">Cancel</button>
                `;
            case "Confirmed":
                return `<button data-id="${order.id}" data-status="Shipped" class="update-status-btn bg-blue-500 hover:bg-blue-600 ${commonButtonClasses}">Mark as Shipped</button>`;
            case "Shipped":
                return `<button data-id="${order.id}" data-status="Delivered" class="update-status-btn bg-purple-500 hover:bg-purple-600 ${commonButtonClasses}">Mark as Delivered</button>`;
            default:
                // For "Delivered" or "Cancelled" orders, show no actions
                return `<span class="text-xs text-gray-400">No actions</span>`;
        }
    };
    
    // --- Main function to render all orders in the table ---
    const renderOrders = () => {
        // Clear any existing content
        ordersListBody.innerHTML = "";

        if (allOrders.length === 0) {
            const emptyRow = `
                <tr class="bg-white">
                    <td colspan="6" class="px-6 py-12 text-center text-gray-500">
                        You have no incoming orders yet.
                    </td>
                </tr>
            `;
            ordersListBody.innerHTML = emptyRow;
            return;
        }

        allOrders.forEach((order) => {
            const itemsSummary = order.items.map(item => `${item.name} (x${item.quantity})`).join(", ");
            const row = document.createElement("tr");
            row.className = "bg-white hover:bg-gray-50 transition-colors";

            row.innerHTML = `
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ${order.id}
                </th>
                <td class="px-6 py-4">
                    <div class="font-semibold">${order.customerName}</div>
                    <div class="text-xs text-gray-500">${order.customerInfo.phone}</div>
                </td>
                <td class="px-6 py-4 text-gray-600 max-w-xs truncate" title="${itemsSummary}">
                    ${itemsSummary}
                </td>
                <td class="px-6 py-4 font-bold text-gray-800">
                    ₹${order.totalAmount.toLocaleString("en-IN")}
                </td>
                <td class="px-6 py-4">
                    <span class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${getStatusBadge(order.status)}">
                        ${order.status}
                    </span>
                </td>
                <td class="px-6 py-4 text-center whitespace-nowrap">
                    ${getActionButtons(order)}
                </td>
            `;
            ordersListBody.appendChild(row);
        });
    };

    // --- Function to update an order's status ---
    const updateOrderStatus = (orderId, newStatus) => {
        // Find the order in our array
        const orderIndex = allOrders.findIndex(o => o.id === orderId);

        if (orderIndex > -1) {
            // Update its status
            allOrders[orderIndex].status = newStatus;
            // Save the entire updated list back to localStorage
            localStorage.setItem("bazaarOrders", JSON.stringify(allOrders));
            // Re-render the table to show the changes immediately
            renderOrders();
        }
    };

    // --- Event listener for all action buttons ---
    ordersListBody.addEventListener("click", (e) => {
        // Use event delegation to check if a status button was clicked
        if (e.target.classList.contains("update-status-btn")) {
            const orderId = e.target.dataset.id;
            const newStatus = e.target.dataset.status;
            updateOrderStatus(orderId, newStatus);
        }
    });

    // --- Initial render when the page loads ---
    renderOrders();
});
