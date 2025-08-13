document.addEventListener('DOMContentLoaded', () => {

    // --- AVATAR GENERATION FUNCTION ---
    // Creates a colored circle with user initials
    const generateAvatar = (name) => {
        const colors = ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#10b981", "#14b8a6", "#06b6d4", "#0ea5e9", "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#d946ef", "#ec4899", "#f43f5e"];
        const getInitials = (name) => {
            const parts = name.split(' ');
            if (parts.length > 1) {
                return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
            }
            return name.substring(0, 2).toUpperCase();
        };
        const initials = getInitials(name);
        const charCodeSum = Array.from(initials).reduce((sum, char) => sum + char.charCodeAt(0), 0);
        const colorIndex = charCodeSum % colors.length;
        const bgColor = colors[colorIndex];
        
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="48" height="48"><circle cx="50" cy="50" r="50" fill="${bgColor}" /><text x="50" y="55" font-family="Poppins, sans-serif" font-size="40" fill="white" text-anchor="middle" dominant-baseline="middle">${initials}</text></svg>`;
        return `data:image/svg+xml;base64,${btoa(svg)}`;
    };

    // --- DATA STORE ---
    let posts = [
        { id: 8, author: { name: 'Prakash Jena' }, location: 'Puri', timestamp: '5 minutes ago', type: 'job', content: 'Urgently need a reliable driver for a one-day trip from Puri to Konark tomorrow morning. Must have a valid commercial license. Good pay.', likes: 2, liked: false, replies: [] },
        { id: 7, author: { name: 'Alisha Mohanty' }, location: 'Balangir', timestamp: '2 hours ago', type: 'recommendation', content: 'Can anyone recommend a good tailor in Balangir for stitching a Sambalpuri dress? Looking for someone with great finishing and reasonable prices.', likes: 18, liked: true, replies: [{ author: { name: 'Rakesh Sahu' }, timestamp: '1 hour ago', content: 'Try Koshal Ladies Tailor near Thikadar Pada. They are fantastic.' }, { author: { name: 'Sunita Naik' }, timestamp: '30 minutes ago', content: 'I second that! They did an amazing job on my sister’s dress.' }, { author: { name: 'Bikash Pradhan' }, timestamp: '15 minutes ago', content: 'Yes, Koshal is the best in town for traditional wear.' }] },
        { id: 6, author: { name: 'Bikash Pradhan' }, location: 'Sambalpur', timestamp: '8 hours ago', type: 'question', content: 'Where is the best place to buy authentic Dhokra handicrafts in Sambalpur, besides the online marketplaces?', likes: 15, liked: false, replies: [{ author: { name: 'Sunita Naik' }, timestamp: '7 hours ago', content: 'You should check out the government emporium, Utkalika, near Golebazar. They have a great collection.' }, { author: { name: 'Ravi Sharma' }, timestamp: '6 hours ago', content: 'There are also some artisan workshops near the Hirakud dam area that sell directly.' }] },
        { id: 5, author: { name: 'Ravi Sharma' }, location: 'Bhubaneswar', timestamp: '1 day ago', type: 'job', content: 'Looking for a skilled carpenter to build some custom bookshelves for my apartment in Patia. Please share contacts if you know someone good.', likes: 22, liked: false, replies: [{ author: { name: 'Suresh Mohanty' }, timestamp: '22 hours ago', content: 'Contact Rourkela Wood Works, they have a branch in Bhubaneswar and are very professional.' }] },
        { id: 4, author: { name: 'Sunita Naik' }, location: 'Maa Tarini SHG', timestamp: '3 days ago', type: 'share', content: 'Our new batch of sun-dried mango pickles is finally ready! We made them with extra love and spices this time. Get them from the Bazaar Odisha marketplace before they run out!', likes: 45, liked: true, sharedProduct: { id: 105, name: 'Sun-dried Mango Pickles', image: 'images/product_mango_pickle.webp' }, replies: [{ author: { name: 'Alisha Mohanty' }, timestamp: '2 days ago', content: 'Oh wow, I’m ordering mine right now! Best pickles ever.' }, { author: { name: 'Prakash Jena' }, timestamp: '1 day ago', content: 'Just received my order. They are delicious!' }] },
        { id: 3, author: { name: 'Suresh Mohanty' }, location: 'Cuttack', timestamp: '4 days ago', type: 'recommendation', content: 'My family is visiting. Can anyone suggest a good place in Cuttack for authentic Dahibara Aloodum?', likes: 58, liked: false, replies: [{ author: { name: 'Ravi Sharma' }, timestamp: '4 days ago', content: 'You can’t beat the stalls near Barabati Stadium!' }] },
        { id: 2, author: { name: 'Priya Das' }, location: 'Rourkela', timestamp: '5 days ago', type: 'question', content: 'Does anyone know of a reliable service center for laptop repairs in Rourkela? My laptop screen is flickering.', likes: 11, liked: false, replies: [{ author: { name: 'Rakesh Sahu' }, timestamp: '5 days ago', content: 'Try Berhampur PC Solutions, they have a pickup service in Rourkela.' }] },
        { id: 1, author: { name: 'Rakesh Sahu' }, location: 'Bhubaneswar', timestamp: '1 week ago', type: 'share', content: 'Absolutely in love with this Pattachitra art I bought from a Puri-based SHG on this platform. The details are incredible. We must support our local artists!', likes: 72, liked: true, sharedProduct: { id: 101, name: 'Handmade Pattachitra Art', image: 'images/product_pattachitra_art.webp' }, replies: [] }
    ];
    
    const currentUser = { name: 'You' };
    const feedContainer = document.getElementById('community-feed');
    const newPostTextarea = document.getElementById('new-post-textarea');
    const newPostBtn = document.getElementById('new-post-btn');
    document.getElementById('current-user-avatar').src = generateAvatar(currentUser.name);

    // --- RENDER FUNCTIONS ---
    const renderFeed = () => {
        const feedContainer = document.getElementById('community-feed');
        feedContainer.innerHTML = '';
        const sortedPosts = [...posts];
        if (document.querySelector('[data-sort="top"].active')) { sortedPosts.sort((a, b) => b.likes - a.likes); } 
        else { sortedPosts.sort((a, b) => b.id - a.id); }
        
        sortedPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'bg-white rounded-2xl shadow-lg p-6'; postElement.dataset.postId = post.id;
            const likedClass = post.liked ? 'is-liked' : '';
            const sharedProductHTML = post.sharedProduct ? `<div class="mt-4 border rounded-lg p-3 flex items-center gap-4 bg-gray-50"><img src="${post.sharedProduct.image}" class="w-16 h-16 rounded-md object-cover"><div><p class="font-bold">${post.sharedProduct.name}</p><a href="product-details.html?id=${post.sharedProduct.id}" class="text-sm text-[var(--primary-color)] hover:underline">View Product</a></div></div>` : '';
            
            postElement.innerHTML = `<div class="flex items-start gap-4"><img src="${generateAvatar(post.author.name)}" alt="${post.author.name}" class="w-12 h-12 rounded-full"><div class="flex-1"><p><strong class="font-semibold">${post.author.name}</strong> posted in <strong class="text-[var(--primary-color)]">${post.location}</strong>.</p><p class="text-sm text-gray-500">${post.timestamp}</p></div>${post.type === 'job' ? `<span class="bg-sky-100 text-sky-700 text-xs font-bold px-2 py-1 rounded-full">HIRING</span>` : ''}</div><p class="mt-4 text-gray-800 leading-relaxed">${post.content}</p>${sharedProductHTML}<div class="mt-4 pt-4 border-t flex items-center gap-6 text-gray-600"><button class="like-btn flex items-center gap-1 hover:text-[var(--primary-color)] ${likedClass}"><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.562 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg><span class="like-count">${post.likes}</span> Likes</button><button class="comment-btn flex items-center gap-1 hover:text-[var(--primary-color)]"><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.08-3.242A8.858 8.858 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.416 14.624a7.35 7.35 0 003.584 1.376A7.35 7.35 0 0010 16c3.032 0 5.5-2.239 5.5-5s-2.468-5-5.5-5-5.5 2.239-5.5 5c0 1.28.42 2.45 1.123 3.393L4.416 14.624z" clip-rule="evenodd" /></svg><span class="comment-count">${post.replies.length}</span> Comments</button></div><div class="replies-section hidden mt-4 pt-4 border-t"></div>`;
            feedContainer.appendChild(postElement);
        });
    };

    const renderReplies = (postId, container) => { const post = posts.find(p => p.id === postId); container.innerHTML = ''; if (post.replies.length > 0) { post.replies.forEach(reply => { const replyEl = document.createElement('div'); replyEl.className = 'flex items-start gap-3 mb-4'; replyEl.innerHTML = `<img src="${generateAvatar(reply.author.name)}" alt="${reply.author.name}" class="w-10 h-10 rounded-full"><div class="flex-1 bg-gray-100 rounded-lg p-3"><p><strong class="font-semibold">${reply.author.name}</strong> <span class="text-xs text-gray-500 ml-2">${reply.timestamp}</span></p><p class="text-sm text-gray-700">${reply.content}</p></div>`; container.appendChild(replyEl); }); } const replyForm = document.createElement('form'); replyForm.className = 'reply-form flex items-center gap-3 mt-4'; replyForm.innerHTML = `<img src="${generateAvatar(currentUser.name)}" alt="Your avatar" class="w-10 h-10 rounded-full"><input type="text" placeholder="Write a reply..." class="form-input flex-1 !py-2 !text-sm" required><button type="submit" class="btn-primary font-semibold px-4 py-2 rounded-full text-sm">Reply</button>`; container.appendChild(replyForm); };
    
    // --- EVENT HANDLERS ---
    const handleAddPost = () => { const content = newPostTextarea.value.trim(); if (!content) return; const newPost = { id: Date.now(), author: { name: currentUser.name }, location: 'Your Location', timestamp: 'Just now', type: 'question', content: content, likes: 0, liked: false, replies: [] }; posts.unshift(newPost); newPostTextarea.value = ''; renderFeed(); };
    const handleAddReply = (e, postId) => { e.preventDefault(); const input = e.target.querySelector('input'); const content = input.value.trim(); if (!content) return; const newReply = { author: { name: currentUser.name }, timestamp: 'Just now', content: content, }; const post = posts.find(p => p.id === postId); post.replies.push(newReply); const repliesSection = e.target.closest('.replies-section'); renderReplies(postId, repliesSection); e.target.closest('.comment-count').textContent = post.replies.length; };
    const handleLike = (postId, likeBtn) => { const post = posts.find(p => p.id === postId); post.liked = !post.liked; post.likes += post.liked ? 1 : -1; likeBtn.querySelector('.like-count').textContent = post.likes; likeBtn.classList.toggle('is-liked', post.liked); };
    const handleSort = (sortType) => { document.querySelectorAll('#feed-filters .filter-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.sort === sortType)); renderFeed(); };
    
    // --- EVENT LISTENERS ---
    newPostBtn.addEventListener('click', handleAddPost);
    document.getElementById('feed-filters').addEventListener('click', (e) => { if (e.target.matches('.filter-btn')) { handleSort(e.target.dataset.sort); } });
    feedContainer.addEventListener('click', (e) => {
        const commentBtn = e.target.closest('.comment-btn'); const likeBtn = e.target.closest('.like-btn');
        if (commentBtn) { const postElement = commentBtn.closest('[data-post-id]'); const postId = parseInt(postElement.dataset.postId); const repliesSection = postElement.querySelector('.replies-section'); if (repliesSection.classList.contains('hidden')) { renderReplies(postId, repliesSection); } repliesSection.classList.toggle('hidden'); }
        if (likeBtn) { const postId = parseInt(likeBtn.closest('[data-post-id]').dataset.postId); handleLike(postId, likeBtn); }
    });
    feedContainer.addEventListener('submit', (e) => { if (e.target.classList.contains('reply-form')) { const postId = parseInt(e.target.closest('[data-post-id]').dataset.postId); handleAddReply(e, postId); } });

    // --- INITIALIZATION ---
    renderFeed();
});
