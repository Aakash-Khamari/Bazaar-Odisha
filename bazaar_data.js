// --- bazaar_data.js ---
// This file acts as a central database for the Bazaar Cart.
// It contains information about the vendors (SHGs) and their products.

const shgVendors = [
    {
        id: 1,
        name: "Maa Durga SHG",
        location: "Balangir",
        phone: "919123456780",
        image: "https://placehold.co/100x100/fecaca/991b1b?text=MD"
    },
    {
        id: 2,
        name: "Koraput Organics",
        location: "Koraput",
        phone: "919123456781",
        image: "https://placehold.co/100x100/d9f99d/4d7c0f?text=KO"
    },
    {
        id: 3,
        name: "Bargarh Handloom Weavers",
        location: "Bargarh",
        phone: "919123456782",
        image: "https://placehold.co/100x100/a5b4fc/4338ca?text=BHW"
    },
    {
        id: 4,
        name: "Pipili Handicrafts Collective",
        location: "Puri",
        phone: "919123456783",
        image: "https://placehold.co/100x100/fde68a/b45309?text=PHC"
    },
    {
        id: 5,
        name: "Nilagiri Naturals",
        location: "Balasore",
        phone: "919123456784",
        image: "https://placehold.co/100x100/dcfce7/14532d?text=NN"
    },
    {
        id: 6,
        name: "Raghurajpur Heritage Arts",
        location: "Puri",
        phone: "919123456785",
        image: "https://placehold.co/100x100/e9d5ff/581c87?text=RHA"
    },
    {
        id: 7,
        name: "Chilika Fresh",
        location: "Ganjam",
        phone: "919123456786",
        image: "https://placehold.co/100x100/cffafe/0e7490?text=CF"
    },
    {
        id: 8,
        name: "Khandagiri Herbal Store",
        location: "Bhubaneswar",
        phone: "919123456787",
        image: "https://placehold.co/100x100/bbf7d0/166534?text=KHS"
    }
];


const bazaarProducts = [
    {
        id: 101,
        vendorId: 1,
        name: "Handmade Turmeric Powder",
        category: "Food & Spices",
        price: 150,
        unit: "250g",
        description: "Pure, organic turmeric powder, ground traditionally to retain its natural oils and potent curcumin content. Sourced from local farms in Balangir.",
        images: ["https://placehold.co/600x400/fcd34d/b45309?text=Turmeric+1", "https://placehold.co/600x400/fcd34d/b45309?text=Turmeric+2"],
        stock: 50,
        rating: 4.9
    },
    {
        id: 102,
        vendorId: 1,
        name: "Spicy Mango Pickle",
        category: "Food & Spices",
        price: 200,
        unit: "500g",
        description: "A traditional Odia mango pickle made with mustard oil and a blend of hand-ground spices. Tangy, spicy, and delicious.",
        images: ["https://placehold.co/600x400/d9f99d/4d7c0f?text=Pickle+1", "https://placehold.co/600x400/d9f99d/4d7c0f?text=Pickle+2"],
        stock: 30,
        rating: 4.8
    },
    {
        id: 103,
        vendorId: 1,
        name: "Gahma Badi (Sun-dried Lentil)",
        category: "Food & Spices",
        price: 120,
        unit: "200g pack",
        description: "Crispy and savory sun-dried lentil dumplings, a traditional delicacy from Western Odisha. Perfect for frying and adding to curries.",
        images: ["https://placehold.co/600x400/f5f5f4/44403c?text=Badi+1"],
        stock: 80,
        rating: 4.9
    },
    {
        id: 201,
        vendorId: 2,
        name: "Koraput Arabica Coffee",
        category: "Beverages",
        price: 350,
        unit: "200g Beans",
        description: "Single-origin Arabica coffee beans grown in the hills of Koraput. Features a smooth, aromatic profile with notes of citrus.",
        images: ["https://placehold.co/600x400/a3e635/3f6212?text=Coffee+1"],
        stock: 40,
        rating: 4.9
    },
    {
        id: 202,
        vendorId: 2,
        name: "Organic Forest Honey",
        category: "Food & Spices",
        price: 280,
        unit: "250g",
        description: "Raw, unprocessed honey collected from the natural forests of Koraput. Rich in antioxidants and natural enzymes.",
        images: ["https://placehold.co/600x400/fbbf24/b45309?text=Honey+1"],
        stock: 60,
        rating: 5.0
    },
    {
        id: 301,
        vendorId: 3,
        name: "Sambalpuri Cotton Saree",
        category: "Handloom",
        price: 1250,
        unit: "per piece",
        description: "An authentic Sambalpuri 'Bandha' (Ikat) saree made from pure cotton. Features traditional motifs in a classic red, black, and white combination.",
        images: ["https://placehold.co/600x400/a5b4fc/4338ca?text=Saree+1", "https://placehold.co/600x400/a5b4fc/4338ca?text=Saree+2"],
        stock: 15,
        rating: 4.9
    },
    {
        id: 302,
        vendorId: 3,
        name: "Bomkai Silk Stole",
        category: "Handloom",
        price: 800,
        unit: "per piece",
        description: "A beautiful Bomkai silk stole with intricate threadwork on the 'pallu'. Perfect for festive occasions and formal wear.",
        images: ["https://placehold.co/600x400/c084fc/7e22ce?text=Stole+1"],
        stock: 25,
        rating: 4.8
    },
    {
        id: 401,
        vendorId: 4,
        name: "Applique Work Lampshade",
        category: "Home Decor",
        price: 550,
        unit: "per piece",
        description: "A vibrant lampshade handcrafted with the famous Pipili 'Chandua' (Applique) work. Adds a touch of Odia artistry to any room.",
        images: ["https://placehold.co/600x400/fde68a/b45309?text=Lampshade+1", "https://placehold.co/600x400/fde68a/b45309?text=Lampshade+2"],
        stock: 20,
        rating: 4.7
    },
    {
        id: 402,
        vendorId: 4,
        name: "Dhokra Metal Craft (Horse)",
        category: "Handicrafts",
        price: 950,
        unit: "per piece",
        description: "A stunning Dhokra metal craft horse figurine, made using the traditional lost-wax casting technique. A perfect collector's item.",
        images: ["https://placehold.co/600x400/f59e0b/92400e?text=Dhokra+1"],
        stock: 10,
        rating: 5.0
    },
    {
        id: 501,
        vendorId: 5,
        name: "Natural Floor Cleaner",
        category: "Eco-Friendly",
        price: 180,
        unit: "500ml",
        description: "An eco-friendly floor cleaner made from citronella and other natural oils. Safe for pets and children, effectively repels insects.",
        images: ["https://placehold.co/600x400/86efac/15803d?text=Cleaner+1"],
        stock: 100,
        rating: 4.6
    },
    {
        id: 502,
        vendorId: 5,
        name: "Sabai Grass Baskets (Set of 3)",
        category: "Home Decor",
        price: 750,
        unit: "per set",
        description: "Handwoven storage baskets made from Sabai grass, a natural fiber found in Odisha. Durable, eco-friendly, and stylish.",
        images: ["https://placehold.co/600x400/a3a3a3/404040?text=Basket+1", "https://placehold.co/600x400/a3a3a3/404040?text=Basket+2"],
        stock: 22,
        rating: 4.8
    },
    {
        id: 601,
        vendorId: 6,
        name: "Pattachitra Painting (Krishna Leela)",
        category: "Handicrafts",
        price: 2500,
        unit: "12x18 inch",
        description: "A traditional Pattachitra painting on a treated cloth canvas, depicting scenes from Krishna Leela. A masterpiece from the heritage village of Raghurajpur.",
        images: ["https://placehold.co/600x400/d8b4fe/6b21a8?text=Pattachitra"],
        stock: 5,
        rating: 5.0
    },
    {
        id: 602,
        vendorId: 6,
        name: "Painted Coconuts (Set of 2)",
        category: "Handicrafts",
        price: 450,
        unit: "per set",
        description: "Beautifully hand-painted coconuts featuring intricate designs of gods and goddesses. A unique item for home decor or religious ceremonies.",
        images: ["https://placehold.co/600x400/93c5fd/1e40af?text=Coconuts"],
        stock: 30,
        rating: 4.9
    },
    {
        id: 701,
        vendorId: 7,
        name: "Dry Fish (Sukhua)",
        category: "Food & Spices",
        price: 300,
        unit: "200g pack",
        description: "Sun-dried fish (Sukhua) sourced directly from the fishermen of Chilika Lake. Hygienically packed and rich in protein.",
        images: ["https://placehold.co/600x400/67e8f9/155e75?text=Sukhua"],
        stock: 40,
        rating: 4.5
    },
    {
        id: 801,
        vendorId: 8,
        name: "Herbal Hair Oil",
        category: "Health & Wellness",
        price: 250,
        unit: "200ml",
        description: "An Ayurvedic hair oil made from a blend of local herbs like Brahmi, Amla, and Bhringaraj to promote hair growth and reduce hair fall.",
        images: ["https://placehold.co/600x400/4ade80/166534?text=Hair+Oil"],
        stock: 70,
        rating: 4.7
    },
    {
        id: 303,
        vendorId: 3,
        name: "Kotpad Cotton Scarf",
        category: "Handloom",
        price: 600,
        unit: "per piece",
        description: "A naturally dyed scarf made from Kotpad handloom cotton, known for its rustic charm and earthy colors derived from the Aal tree.",
        images: ["https://placehold.co/600x400/78716c/44403c?text=Kotpad+Scarf"],
        stock: 40,
        rating: 4.8
    }
];
