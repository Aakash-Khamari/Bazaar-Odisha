// --- community_data.js ---
// This file acts as a central database for the Community forum.
// It stores posts and their corresponding replies.

const communityPosts = [
    {
        id: 1,
        userName: "Suresh Kumar",
        userImage: "https://placehold.co/48x48/dbeafe/1e40af?text=SK",
        timestamp: "2 hours ago",
        location: "Bhubaneswar",
        category: "Service Request",
        postContent: "I am looking for a reliable electrician in the Patia area for some house wiring work. Any recommendations from the app?",
        replies: [
            {
                id: 101,
                userName: "Anjali Das",
                userImage: "https://placehold.co/48x48/fce7f3/9d174d?text=AD",
                timestamp: "1 hour ago",
                replyContent: "You should check out 'Suresh Electric' listed on this app. I hired him last month, and he was very professional and reasonably priced."
            },
            {
                id: 102,
                userName: "Admin",
                userImage: "https://placehold.co/48x48/e0e7ff/3730a3?text=BO",
                timestamp: "30 minutes ago",
                replyContent: "Thank you for the recommendation, Anjali! You can find Suresh Electric's details in the 'Services' tab."
            }
        ]
    },
    {
        id: 2,
        userName: "Priyanka Mohanty",
        userImage: "https://placehold.co/48x48/fde68a/b45309?text=PM",
        timestamp: "8 hours ago",
        location: "Sambalpur",
        category: "Product Query",
        postContent: "Has anyone bought a Sambalpuri saree from the Bargarh Handloom Weavers group listed here? I want to know about the quality of the cotton.",
        replies: [
            {
                id: 201,
                userName: "Anasuya Meher",
                userImage: "https://placehold.co/48x48/a5b4fc/4338ca?text=AM",
                timestamp: "6 hours ago",
                replyContent: "Hello Priyanka, I am the leader of the Bargarh Handloom Weavers SHG. We use 100% pure cotton and natural dyes. The quality is assured. You can contact us directly for more details."
            },
            {
                id: 202,
                userName: "Deepa Sahu",
                userImage: "https://placehold.co/48x48/dcfce7/14532d?text=DS",
                timestamp: "5 hours ago",
                replyContent: "Yes, I bought one for my mother. The fabric is very soft and comfortable, and the colors are beautiful. Go for it!"
            }
        ]
    },
    {
        id: 3,
        userName: "Rakesh Nayak",
        userImage: "https://placehold.co/48x48/fee2e2/991b1b?text=RN",
        timestamp: "1 day ago",
        location: "General",
        category: "Recommendation",
        postContent: "The 'Gahma Badi' from Maa Durga SHG is amazing! Tastes just like the ones my grandmother used to make. Highly recommend it to everyone.",
        replies: []
    },
    {
        id: 4,
        userName: "Sunita Barik",
        userImage: "https://placehold.co/48x48/ecfccb/4d7c0f?text=SB",
        timestamp: "2 days ago",
        location: "Puri",
        category: "General Query",
        postContent: "Where can I find authentic Pattachitra paintings in Puri? Looking for something to decorate my new home.",
        replies: [
            {
                id: 401,
                userName: "Bibhu Maharana",
                userImage: "https://placehold.co/48x48/e9d5ff/581c87?text=BM",
                timestamp: "1 day ago",
                replyContent: "You can visit our SHG, 'Raghurajpur Heritage Arts', in Raghurajpur village just outside Puri. We have a wide collection of authentic Pattachitra."
            }
        ]
    }
];
