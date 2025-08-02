// --- shg_data.js ---
// This file acts as a central database for detailed SHG profiles.

const shgData = [
    {
        id: 1,
        name: "Maa Durga SHG",
        location: "Balangir",
        leader_name: "Sita Sahu",
        phone: "919123456780",
        image: "https://placehold.co/128x128/fecaca/991b1b?text=MD",
        established_year: 2018,
        members_count: 12,
        key_products: ["Handmade Spices", "Gahma Badi", "Pickles"],
        description: "Maa Durga SHG is a group of 12 women from Balangir dedicated to producing pure, homemade spices and traditional Odia food items like Badi and pickles. Our mission is to provide authentic, chemical-free food products while ensuring sustainable livelihoods for our members.",
        story: "Started in 2018 with a small loan, our group began by making spices for local households. As demand grew, we expanded our range to include traditional items that remind people of their homes. Every product is made with love and care, following age-old recipes.",
        gallery: [
            "https://placehold.co/600x400/fecaca/991b1b?text=Members+Working",
            "https://placehold.co/600x400/fecaca/991b1b?text=Spice+Grinding",
            "https://placehold.co/600x400/fecaca/991b1b?text=Finished+Products"
        ]
    },
    {
        id: 2,
        name: "Koraput Organics",
        location: "Koraput",
        leader_name: "Lalita Naik",
        phone: "919123456781",
        image: "https://placehold.co/128x128/d9f99d/4d7c0f?text=KO",
        established_year: 2019,
        members_count: 20,
        key_products: ["Arabica Coffee", "Forest Honey", "Turmeric"],
        description: "We are a collective of tribal farmers from the hills of Koraput, committed to organic farming practices. We specialize in high-quality coffee and honey, harvested sustainably from the pristine forests of the Eastern Ghats.",
        story: "Koraput Organics was formed to help local farmers get a fair price for their unique produce, bypassing middlemen. We believe in preserving the biodiversity of our land while bringing the best of Koraput's natural bounty to the world.",
        gallery: [
            "https://placehold.co/600x400/d9f99d/4d7c0f?text=Coffee+Plantation",
            "https://placehold.co/600x400/d9f99d/4d7c0f?text=Honey+Collection"
        ]
    },
    {
        id: 3,
        name: "Bargarh Handloom Weavers",
        location: "Bargarh",
        leader_name: "Anasuya Meher",
        phone: "919123456782",
        image: "https://placehold.co/128x128/a5b4fc/4338ca?text=BHW",
        established_year: 2015,
        members_count: 35,
        key_products: ["Sambalpuri Sarees", "Bomkai Stoles", "Cotton Fabric"],
        description: "A cooperative of master weavers from Bargarh, the heartland of Sambalpuri 'Bandha' (Ikat) craft. We are dedicated to preserving the intricate art of tie-dye weaving passed down through generations.",
        story: "Our group was formed to empower the local weaver community, which was struggling against machine-made fabrics. By selling directly through platforms like this, we ensure that our weavers receive the recognition and financial security they deserve.",
        gallery: [
            "https://placehold.co/600x400/a5b4fc/4338ca?text=Weaver+at+Loom",
            "https://placehold.co/600x400/a5b4fc/4338ca?text=Ikat+Process",
            "https://placehold.co/600x400/a5b4fc/4338ca?text=Colorful+Sarees"
        ]
    },
    {
        id: 4,
        name: "Pipili Handicrafts Collective",
        location: "Puri",
        leader_name: "Ranjan Mohapatra",
        phone: "919123456783",
        image: "https://placehold.co/128x128/fde68a/b45309?text=PHC",
        established_year: 2012,
        members_count: 25,
        key_products: ["Applique Lampshades", "Wall Hangings", "Garden Umbrellas"],
        description: "We are artisans from Pipili, globally renowned for our vibrant 'Chandua' or Applique work. Our collective creates a wide range of decorative items that bring color and traditional art into modern homes.",
        story: "The art of Applique has been a part of Pipili's culture for centuries, traditionally used for temple rituals. Our collective has adapted this art form to create contemporary products, providing a sustainable income for over 25 artisan families.",
        gallery: [
            "https://placehold.co/600x400/fde68a/b45309?text=Artisan+Stitching",
            "https://placehold.co/600x400/fde68a/b45309?text=Colorful+Chandua"
        ]
    },
    {
        id: 5,
        name: "Nilagiri Naturals",
        location: "Balasore",
        leader_name: "Bimala Das",
        phone: "919123456784",
        image: "https://placehold.co/128x128/dcfce7/14532d?text=NN",
        established_year: 2020,
        members_count: 15,
        key_products: ["Sabai Grass Baskets", "Eco-Friendly Cleaners", "Herbal Soaps"],
        description: "Nilagiri Naturals is focused on creating sustainable, eco-friendly products for daily use. We specialize in handwoven Sabai grass items and natural home care solutions.",
        story: "Our journey began with a simple idea: to create products that are good for people and the planet. We train local women in the art of weaving Sabai grass and making natural cleaners, empowering them with skills and financial independence.",
        gallery: [
            "https://placehold.co/600x400/dcfce7/14532d?text=Sabai+Weaving",
            "https://placehold.co/600x400/dcfce7/14532d?text=Natural+Ingredients"
        ]
    },
    {
        id: 6,
        name: "Raghurajpur Heritage Arts",
        location: "Puri",
        leader_name: "Bibhu Maharana",
        phone: "919123456785",
        image: "https://placehold.co/128x128/e9d5ff/581c87?text=RHA",
        established_year: 2010,
        members_count: 40,
        key_products: ["Pattachitra Paintings", "Tala Patra (Palm Leaf Engraving)", "Painted Coconuts"],
        description: "We are a community of 'Chitrakars' (artists) from the heritage village of Raghurajpur, dedicated to preserving and promoting ancient Odia art forms like Pattachitra and palm leaf engraving.",
        story: "Every family in our village is involved in some form of art. Our collective was created to showcase this incredible talent to a wider audience, ensuring that these timeless art forms continue to thrive and support our community.",
        gallery: [
            "https://placehold.co/600x400/e9d5ff/581c87?text=Pattachitra+Artist",
            "https://placehold.co/600x400/e9d5ff/581c87?text=Palm+Leaf+Art",
            "https://placehold.co/600x400/e9d5ff/581c87?text=Village+View"
        ]
    },
    {
        id: 7,
        name: "Chilika Fresh",
        location: "Ganjam",
        leader_name: "Arun Das",
        phone: "919123456786",
        image: "https://placehold.co/128x128/cffafe/0e7490?text=CF",
        established_year: 2021,
        members_count: 30,
        key_products: ["Dry Fish (Sukhua)", "Dry Prawns (Chingudi Sukhua)", "Fish Pickles"],
        description: "A fishermen's cooperative from the banks of Chilika Lake, providing hygienically processed and packed dry fish and other seafood products. We follow sustainable fishing practices.",
        story: "Traditionally, fishermen had to sell their surplus catch at very low prices. Our SHG was formed to help them preserve the fish through drying and packaging, allowing them to reach a wider market and earn a better income, especially during the off-season.",
        gallery: [
            "https://placehold.co/600x400/cffafe/0e7490?text=Fish+Drying+Yard",
            "https://placehold.co/600x400/cffafe/0e7490?text=Packaged+Sukhua"
        ]
    },
    {
        id: 8,
        name: "Khandagiri Herbal Store",
        location: "Bhubaneswar",
        leader_name: "Santoshi Jena",
        phone: "919123456787",
        image: "https://placehold.co/128x128/bbf7d0/166534?text=KHS",
        established_year: 2019,
        members_count: 10,
        key_products: ["Herbal Hair Oil", "Ayurvedic Powders", "Natural Face Packs"],
        description: "An urban SHG based in Bhubaneswar that procures rare herbs from Khandagiri hills and other forests to create authentic Ayurvedic wellness products based on traditional knowledge.",
        story: "Our group leader, Santoshi, learned about herbal remedies from her grandmother. She started this SHG to share that knowledge and provide natural, chemical-free wellness solutions to city dwellers who are looking for healthier alternatives.",
        gallery: [
            "https://placehold.co/600x400/bbf7d0/166534?text=Herbs+and+Oils"
        ]
    },
    {
        id: 9,
        name: "Sonepur Terracotta Artisans",
        location: "Subarnapur",
        leader_name: "Daitari Rana",
        phone: "919123456788",
        image: "https://placehold.co/128x128/fb923c/c2410c?text=STA",
        established_year: 2017,
        members_count: 18,
        key_products: ["Terracotta Diyas", "Clay Pottery", "Decorative Figurines"],
        description: "A group of skilled potters from Subarnapur (Sonepur) district, known for its unique terracotta crafts. We create everything from traditional pottery to modern decorative items from locally sourced clay.",
        story: "Our craft has been passed down through generations. By forming this SHG, we have been able to improve our kiln technology, streamline our designs, and reach customers directly, improving the lives of 18 families.",
        gallery: [
            "https://placehold.co/600x400/fb923c/c2410c?text=Potter's+Wheel",
            "https://placehold.co/600x400/fb923c/c2410c?text=Clay+Elephants"
        ]
    },
    {
        id: 10,
        name: "Kendrapara Golden Grass Crafts",
        location: "Kendrapara",
        leader_name: "Radha Swain",
        phone: "919123456789",
        image: "https://placehold.co/128x128/facc15/78350f?text=GGC",
        established_year: 2016,
        members_count: 50,
        key_products: ["Golden Grass Hats", "Handbags", "Table Mats", "Coasters"],
        description: "We are a large SHG of women artisans from Kendrapara, specializing in the art of weaving 'Golden Grass' (Kaincha). This unique, wild grass grows in our region and has a beautiful natural golden sheen.",
        story: "Golden Grass weaving is a delicate and time-consuming craft. Our SHG provides the training, resources, and market linkage for over 50 women, helping them earn a respectable income from their homes while caring for their families.",
        gallery: [
            "https://placehold.co/600x400/facc15/78350f?text=Weaving+Process",
            "https://placehold.co/600x400/facc15/78350f?text=Golden+Grass+Bags"
        ]
    },
    {
        id: 11,
        name: "Kalahandi Millet Sisters",
        location: "Kalahandi",
        leader_name: "Parbati Majhi",
        phone: "919123456790",
        image: "https://placehold.co/128x128/fde047/ca8a04?text=KMS",
        established_year: 2022,
        members_count: 22,
        key_products: ["Ragi Flour", "Millet Cookies", "Little Millet Grains"],
        description: "A newly formed SHG promoting the 'Odisha Millet Mission' by cultivating and processing various types of millets. We offer nutritious, gluten-free alternatives to rice and wheat.",
        story: "Inspired by the government's push for millets, our group of women farmers decided to revive traditional millet farming. We now process and package millet products to promote healthy eating and create a stable market for our crops.",
        gallery: [
            "https://placehold.co/600x400/fde047/ca8a04?text=Millet+Harvest",
            "https://placehold.co/600x400/fde047/ca8a04?text=Ragi+Cookies"
        ]
    },
    {
        id: 12,
        name: "Baripada Stone Carvers",
        location: "Mayurbhanj",
        leader_name: "Iswar Mohanty",
        phone: "919123456791",
        image: "https://placehold.co/128x128/a8a29e/57534e?text=BSC",
        established_year: 2014,
        members_count: 8,
        key_products: ["Stone Statues", "Carved Coasters", "Soapstone Idols"],
        description: "A small group of highly skilled stone carvers from the Baripada region, working with soapstone and sandstone to create intricate sculptures and utility items.",
        story: "Stone carving is a demanding art with a rich history in Odisha. Our group works to keep this tradition alive, creating beautiful pieces that are perfect for home decor and as unique gifts, ensuring the craft provides for our families.",
        gallery: [
            "https://placehold.co/600x400/a8a29e/57534e?text=Artist+Carving",
            "https://placehold.co/600x400/a8a29e/57534e?text=Finished+Statue"
        ]
    }
];
