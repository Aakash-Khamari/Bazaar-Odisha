document.addEventListener("DOMContentLoaded", () => {
    const ordersListContainer = document.getElementById("my-orders-list");
    // Retrieve orders, ensuring the newest are shown first
    const allOrders = (JSON.parse(localStorage.getItem("bazaarOrders")) || []).reverse();

    // --- HELPER FUNCTIONS ---

    // Provides consistent styling for status badges
    const getStatusBadge = (status) => {
        switch (status) {
            case "Confirmed": return "bg-blue-100 text-blue-800";
            case "Shipped": return "bg-indigo-100 text-indigo-800";
            case "Out for Delivery": return "bg-purple-100 text-purple-800";
            case "Delivered": return "bg-green-100 text-green-800";
            case "Cancelled": return "bg-red-100 text-red-800";
            case "Pending":
            default: return "bg-yellow-100 text-yellow-800";
        }
    };

    /**
     * Formats an ISO date string into a more readable format (e.g., "August 18, 2025").
     * @param {string | null} dateString - The ISO date string from the order history.
     * @returns {string} - The formatted date or an empty string.
     */
    const formatStatusDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    /**
     * Creates the HTML for the vertical order tracking timeline using dynamic dates.
     * @param {string} currentStatus - The current status of the order.
     * @param {Array} statusHistory - The array of status changes for the order.
     * @returns {string} - The HTML string for the tracker.
     */
    const createTrackerHTML = (currentStatus, statusHistory = []) => {
        const statuses = ["Confirmed", "Shipped", "Out for Delivery", "Delivered"];
        const currentStatusIndex = statuses.indexOf(currentStatus);

        let trackerItems = statuses.map((status, index) => {
            // Find the corresponding history entry for this status
            const historyEntry = statusHistory.find(h => h.status === status);
            const statusDate = historyEntry ? formatStatusDate(historyEntry.date) : "";

            const isCompleted = historyEntry && (index < currentStatusIndex || currentStatus === "Delivered");
            const isActive = historyEntry && index === currentStatusIndex && currentStatus !== "Delivered";
            
            let dotClass = "bg-gray-300";
            let textClass = "text-gray-500";
            let lineClass = "bg-gray-300";

            if (isCompleted) {
                dotClass = "bg-green-500";
                textClass = "font-semibold text-gray-700";
                lineClass = "bg-green-500";
            } else if (isActive) {
                dotClass = "bg-teal-500 ring-4 ring-teal-100";
                textClass = "font-bold text-teal-600";
                lineClass = "bg-green-500"; // The line leading to an active step is also green
            }
            
            const line = index < statuses.length - 1 ? `<div class="w-0.5 h-8 ml-2 my-1 ${lineClass}"></div>` : '';
            const dateHtml = statusDate ? `<p class="text-xs text-gray-400">${statusDate}</p>` : '';

            return `
                <div class="flex">
                    <div class="flex flex-col items-center">
                        <div class="w-4 h-4 rounded-full ${dotClass} z-10"></div>
                        ${line}
                    </div>
                    <div class="ml-4">
                        <p class="text-sm ${textClass}">${status}</p>
                        ${dateHtml}
                    </div>
                </div>
            `;
        }).join("");

        return `<div class="pt-4 mt-4 border-t">${trackerItems}</div>`;
    };

    // --- MAIN RENDER FUNCTION ---

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

        allOrders.forEach(order => {
            const itemsHtml = order.items.map(item => `
                <li class="flex justify-between items-center text-sm">
                    <span>${item.name} (x${item.quantity})</span>
                    <span class="font-medium">₹${(item.price * item.quantity).toLocaleString("en-IN")}</span>
                </li>
            `).join("");
            
            // Get the date the order was placed from the first history entry
            const placedOnDate = (order.statusHistory && order.statusHistory.length > 0) 
                ? formatStatusDate(order.statusHistory[0].date) 
                : "Date not available";

            const orderCardHTML = `
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div class="p-4 bg-gray-50 border-b flex justify-between items-center flex-wrap gap-2">
                        <div>
                            <p class="font-bold text-gray-800">Order ID: ${order.id}</p>
                            <p class="text-xs text-gray-500">Placed on: ${placedOnDate}</p>
                        </div>
                        <span class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${getStatusBadge(order.status)}">
                            ${order.status}
                        </span>
                    </div>
                    <div class="p-4">
                        <p class="font-semibold mb-2">Items:</p>
                        <ul class="space-y-2 pb-3 mb-3">${itemsHtml}</ul>
                        <div class="flex justify-between items-center font-bold text-lg border-t pt-3">
                            <span>Total</span>
                            <span>₹${order.totalAmount.toLocaleString("en-IN")}</span>
                        </div>
                    </div>
                    <div class="px-4 pb-4">
                        <button class="track-order-btn w-full text-center py-2 px-4 bg-gray-100 hover:bg-gray-200 text-teal-700 font-semibold rounded-md text-sm transition-all duration-300">
                            Track Order
                        </button>
                        <div class="tracker-container hidden mt-4">
                            <!-- The tracker now receives the status history -->
                            ${createTrackerHTML(order.status, order.statusHistory)}
                        </div>
                    </div>
                </div>
            `;
            ordersListContainer.insertAdjacentHTML("beforeend", orderCardHTML);
        });
    };

    // --- EVENT LISTENERS ---

    ordersListContainer.addEventListener('click', (event) => {
        const trackButton = event.target.closest('.track-order-btn');
        if (!trackButton) return;

        const trackerContainer = trackButton.nextElementSibling;
        const isHidden = trackerContainer.classList.contains('hidden');

        if (isHidden) {
            trackerContainer.classList.remove('hidden');
            trackButton.textContent = 'Hide Tracker';
        } else {
            trackerContainer.classList.add('hidden');
            trackButton.textContent = 'Track Order';
        }
    });

    // Initial render call
    renderMyOrders();
});
