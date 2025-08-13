document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chat-button');
    const chatWindow = document.getElementById('chat-window');
    const closeButton = document.getElementById('chat-close-button');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');

    // --- Core Chatbot Toggle Logic ---
    if (chatButton && chatWindow && closeButton) {
        chatButton.addEventListener('click', () => {
            chatWindow.classList.add('is-open');
        });
        
        closeButton.addEventListener('click', () => {
            chatWindow.classList.remove('is-open');
        });
    }

    // --- Chat Simulation Logic ---
    const addMessage = (message, sender) => {
        const messageWrapper = document.createElement('div');
        messageWrapper.className = `flex mb-3 ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
        
        const messageBubble = document.createElement('div');
        messageBubble.className = `p-3 rounded-lg max-w-xs text-sm shadow-sm ${sender === 'user' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'}`;
        messageBubble.innerHTML = message; // Use innerHTML to allow links
        
        messageWrapper.appendChild(messageBubble);
        chatBody.appendChild(messageWrapper);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    // --- New & Improved Bot Response Logic ---
    const getBotResponse = (userInput) => {
        const lowerInput = userInput.toLowerCase();

        // --- Greeting ---
        if (/(hello|hi|hey|namaskar)/.test(lowerInput)) {
            return "Namaskar! How can I assist you today? You can ask me to find products, services, or about how our platform works.";
        }
        
        // --- Specific Product Search ---
        if (/(find|buy|get|looking for).*(pattachitra|pickle|saree|handicraft|dhokra|textile|food)/.test(lowerInput)) {
            return `You can find a wonderful collection of handmade items in our <a href="shg-marketplace.html" class="font-bold underline">SHG Marketplace</a>. Just click the link to start exploring!`;
        }

        // --- Specific Service Search ---
        if (/(need|find|looking for|get).*(plumber|electrician|carpenter|painter|tutor|repair)/.test(lowerInput)) {
            return `To find a skilled professional, please visit our <a href="hire-local-help.html" class="font-bold underline">Hire Local Help</a> page. You can filter by skill and location to find the perfect person for your job.`;
        }
        
        // --- Platform Questions ---
        if (/(add|list|sell).*(business|shop|service)/.test(lowerInput)) {
            return `That's wonderful! You can list your business or SHG for free by clicking the <a href="add-listing.html" class="font-bold underline">'Add Your Business'</a> button in the top right corner of any page.`;
        }
        if (/(shipping|delivery)/.test(lowerInput)) {
            return "For products purchased from the SHG Marketplace, shipping is handled directly by the Self-Help Group. Their specific policies are usually mentioned on the product detail page.";
        }
        if (/(payment|pay|upi|card)/.test(lowerInput)) {
            return "We support secure online payments through all major credit/debit cards and UPI for marketplace purchases. For direct services hired from our platform, you arrange the payment directly with the service provider.";
        }
        if (/(who are you|what is this|about)/.test(lowerInput)) {
            return `I am Mo Sahayak, an AI assistant for Bazaar Odisha. Our platform helps you connect with local businesses, skilled workers, and SHG products from all over Odisha. You can learn more on our <a href="about.html" class="font-bold underline">About Us</a> page.`;
        }
        
        // --- Founder Question ---
        if (/(founder|who made|aakash)/.test(lowerInput)) {
            return "Bazaar Odisha is a passion project created by Aakash Khamari to help empower the local economy of his home state, Odisha.";
        }

        // --- Farewell ---
        if (/(bye|thank you|thanks)/.test(lowerInput)) {
            return "You're most welcome! Have a great day and feel free to reach out anytime. Goodbye!";
        }

        // --- Default Fallback ---
        return "I'm sorry, I'm not sure how to answer that. You could try asking me something like:<ul><li class='mt-1'>- 'Where can I find a plumber?'</li><li>- 'I want to buy pattachitra art.'</li><li>- 'How do I add my business?'</li></ul>";
    };

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userMessage = chatInput.value.trim();
            if (userMessage) {
                addMessage(userMessage, 'user');
                chatInput.value = '';
                
                // Add a "typing" indicator for realism
                const typingIndicator = document.createElement('div');
                typingIndicator.className = 'flex justify-start mb-3';
                typingIndicator.innerHTML = `<div class="p-3 rounded-lg bg-gray-200 text-gray-500 text-sm">...</div>`;
                chatBody.appendChild(typingIndicator);
                chatBody.scrollTop = chatBody.scrollHeight;

                setTimeout(() => {
                    chatBody.removeChild(typingIndicator); // Remove typing indicator
                    const botMessage = getBotResponse(userMessage);
                    addMessage(botMessage, 'bot');
                }, 1200); // Simulate bot thinking time
            }
        });
    }
});
