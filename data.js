// --- data.js ---
// This file acts as a central database for service provider information.

const servicesData = [
    { 
        id: 1, 
        name: "Hari Prasad", 
        category: "Plumber", 
        location: "Balangir", 
        description: "Expert in all types of plumbing work including pipe fitting, drainage repair, bathroom installations, and water tank cleaning. Available for emergency services in Balangir town and nearby villages. 10+ years of trusted experience.", 
        image: "https://placehold.co/128x128/dbeafe/1e40af?text=HP", 
        phone: "919876543210", 
        experience: 10, 
        rating: 4.8,
        gallery: [
            "https://placehold.co/600x400/bfdbfe/1e3a8a?text=Bathroom+Fitting",
            "https://placehold.co/600x400/bfdbfe/1e3a8a?text=Drainage+Repair",
            "https://placehold.co/600x400/bfdbfe/1e3a8a?text=Pipe+Work"
        ],
        reviews: [
            { user: "Rakesh S.", rating: 5, comment: "Very professional and solved the issue quickly. Highly recommended." },
            { user: "Sunita M.", rating: 4, comment: "Good work, but was a bit late. Overall satisfied." }
        ]
    },
    { 
        id: 2, 
        name: "Jyoti Electric Works", 
        category: "Electrician", 
        location: "Balangir", 
        description: "Specializing in house wiring, fan repair, and new electrical fittings. Certified and insured for all residential work.", 
        image: "https://placehold.co/128x128/fef9c3/b45309?text=JE", 
        phone: "919876543211", 
        experience: 8, 
        rating: 4.5,
        gallery: [
            "https://placehold.co/600x400/fef9c3/b45309?text=House+Wiring",
            "https://placehold.co/600x400/fef9c3/b45309?text=Meter+Installation",
            "https://placehold.co/600x400/fef9c3/b45309?text=Fan+Repair"
        ],
        reviews: [
            { user: "Amit P.", rating: 5, comment: "Excellent and fast work. Very knowledgeable electrician." }
        ]
    },
    { 
        id: 3, 
        name: "Mina's Tailoring", 
        category: "Tailor", 
        location: "Sambalpur", 
        description: "Custom stitching for blouses, dresses, and alterations. Quick service and perfect fitting guaranteed.", 
        image: "https://placehold.co/128x128/fce7f3/9d174d?text=MT", 
        phone: "919876543212", 
        experience: 15, 
        rating: 4.9,
        gallery: [
            "https://placehold.co/600x400/fce7f3/9d174d?text=Blouse+Designs",
            "https://placehold.co/600x400/fce7f3/9d174d?text=Dress+Stitching"
        ],
        reviews: [
            { user: "Priya Das", rating: 5, comment: "Best tailor in Sambalpur! Perfect fitting every time." }
        ]
    },
    { 
        id: 4, 
        name: "Gupta Tutors", 
        category: "Tutor", 
        location: "Bhubaneswar", 
        description: "Maths and Science tutoring for classes 8-10 (CBSE/ICSE). Home tuition available in Patia area.", 
        image: "https://placehold.co/128x128/dcfce7/15803d?text=GT", 
        phone: "919876543213", 
        experience: 5, 
        rating: 4.7,
        gallery: [
            "https://placehold.co/600x400/dcfce7/15803d?text=Classroom+Setup"
        ],
        reviews: [
            { user: "Parent of Rohan", rating: 5, comment: "My son's grades improved significantly. Thank you!" }
        ]
    },
     { 
        id: 5, 
        name: "Raju Construction", 
        category: "Construction", 
        location: "Sambalpur", 
        description: "Small construction projects, wall repairs, plastering, and painting services. Reliable and hardworking team.", 
        image: "https://placehold.co/128x128/d1d5db/374151?text=RC", 
        phone: "919876543214", 
        experience: 12, 
        rating: 4.6,
        gallery: ["https://placehold.co/600x400/d1d5db/374151?text=Wall+Plastering"],
        reviews: []
    },
    { 
        id: 6, 
        name: "Suresh Electric", 
        category: "Electrician", 
        location: "Bhubaneswar", 
        description: "Commercial and residential wiring. 24/7 emergency service available for power outages and short circuits.", 
        image: "https://placehold.co/128x128/fef9c3/b45309?text=SE", 
        phone: "919876543215", 
        experience: 20, 
        rating: 4.9,
        gallery: ["https://placehold.co/600x400/fef9c3/b45309?text=Commercial+Wiring"],
        reviews: [
            { user: "Hotel Manager", rating: 5, comment: "Suresh is our go-to guy for all electrical issues. Very reliable." }
        ]
    },
    { 
        id: 7, 
        name: "Cuttack Carpenters", 
        category: "Carpenter", 
        location: "Cuttack", 
        description: "Custom furniture, door and window frames, and repair work. On-time delivery and quality craftsmanship.", 
        image: "https://placehold.co/128x128/fef3c7/b45309?text=CC", 
        phone: "919876543216", 
        experience: 18, 
        rating: 4.8,
        gallery: [
            "https://placehold.co/600x400/fef3c7/b45309?text=Wooden+Chair",
            "https://placehold.co/600x400/fef3c7/b45309?text=Wardrobe"
        ],
        reviews: [
            { user: "Anjali Mishra", rating: 5, comment: "Built a beautiful wardrobe for us. Very skilled." }
        ]
    },
    { 
        id: 8, 
        name: "Puri Painting Crew", 
        category: "Painter", 
        location: "Puri", 
        description: "Interior and exterior wall painting with modern designs and finishes. We use weatherproof paints.", 
        image: "https://placehold.co/128x128/e0e7ff/3730a3?text=PP", 
        phone: "919876543217", 
        experience: 7, 
        rating: 4.6,
        gallery: ["https://placehold.co/600x400/e0e7ff/3730a3?text=Exterior+Painting"],
        reviews: [
            { user: "Sanjay Behera", rating: 4, comment: "Good work, finished the job in two days." }
        ] 
    },
    { 
        id: 9, 
        name: "Rourkela Mechanics", 
        category: "Mechanic", 
        location: "Rourkela", 
        description: "Two-wheeler and car repair services. Quick bike servicing and engine work specialist.", 
        image: "https://placehold.co/128x128/fee2e2/991b1b?text=RM", 
        phone: "919876543218", 
        experience: 14, 
        rating: 4.4,
        gallery: [],
        reviews: [
            { user: "Vikas", rating: 4, comment: "Serviced my bike well. Reasonable price." }
        ]
    },
    { 
        id: 10, 
        name: "Modern Plumbing", 
        category: "Plumber", 
        location: "Bhubaneswar", 
        description: "All modern plumbing solutions, including geyser installation, water purifiers, and modular bathroom fittings.", 
        image: "https://placehold.co/128x128/dbeafe/1e40af?text=MP", 
        phone: "919876543219", 
        experience: 9, 
        rating: 4.9,
        gallery: ["https://placehold.co/600x400/dbeafe/1e40af?text=Geyser+Installation"],
        reviews: []
    },
    { 
        id: 11, 
        name: "Sarala Home Cleaning", 
        category: "Home Cleaning", 
        location: "Cuttack", 
        description: "Deep cleaning services for homes and offices. Uses eco-friendly products. Available for weekly contracts.", 
        image: "https://placehold.co/128x128/ecfccb/4d7c0f?text=SH", 
        phone: "919876543220", 
        experience: 4, 
        rating: 4.8,
        gallery: [],
        reviews: [
            { user: "Smita P.", rating: 5, comment: "My house has never been this clean! Amazing service." }
        ]
    },
    { 
        id: 12, 
        name: "Berhampur Bike Repair", 
        category: "Mechanic", 
        location: "Berhampur", 
        description: "Specialist in all major bike brands including Hero, Honda, and Bajaj. On-road assistance available within the city.", 
        image: "https://placehold.co/128x128/fee2e2/991b1b?text=BR", 
        phone: "919876543221", 
        experience: 11, 
        rating: 4.7,
        gallery: ["https://placehold.co/600x400/fee2e2/991b1b?text=Bike+Service"],
        reviews: []
    },
    { 
        id: 13, 
        name: "Creative Carpenters", 
        category: "Carpenter", 
        location: "Bhubaneswar", 
        description: "Bespoke wooden furniture and modular kitchen setups. We bring your ideas to life.", 
        image: "https://placehold.co/128x128/fef3c7/b45309?text=CC", 
        phone: "919876543222", 
        experience: 16, 
        rating: 4.9,
        gallery: ["https://placehold.co/600x400/fef3c7/b45309?text=Modular+Kitchen"],
        reviews: [
            { user: "Aarav Singh", rating: 5, comment: "Fantastic work on our kitchen. Very professional team." }
        ]
    },
    { 
        id: 14, 
        name: "Master Tailors", 
        category: "Tailor", 
        location: "Cuttack", 
        description: "Expert tailoring for suits, sherwanis, and formal wear. Over 25 years of experience in men's fashion.", 
        image: "https://placehold.co/128x128/fce7f3/9d174d?text=MT", 
        phone: "919876543223", 
        experience: 25, 
        rating: 5.0,
        gallery: ["https://placehold.co/600x400/fce7f3/9d174d?text=Suit+Stitching"],
        reviews: [
            { user: "Mr. Jena", rating: 5, comment: "The best suit I have ever owned. Perfect fit and finish." }
        ]
    },
    { 
        id: 15, 
        name: "Priya's Coaching", 
        category: "Tutor", 
        location: "Rourkela", 
        description: "English and Social Studies coaching for all school levels. Small batch sizes for personalized attention.", 
        image: "https://placehold.co/128x128/dcfce7/15803d?text=PC", 
        phone: "919876543224", 
        experience: 10, 
        rating: 4.8,
        gallery: [],
        reviews: []
    },
    { 
        id: 16, 
        name: "Puri Pipe Masters", 
        category: "Plumber", 
        location: "Puri", 
        description: "Fast and reliable solutions for leaky pipes and clogged drains in hotels and residential areas.", 
        image: "https://placehold.co/128x128/dbeafe/1e40af?text=PM", 
        phone: "919876543225", 
        experience: 12, 
        rating: 4.5,
        gallery: [],
        reviews: [
             { user: "Lodge Owner", rating: 4, comment: "Quick response during a major water leak. Saved us." }
        ]
    },
    { 
        id: 17, 
        name: "Bright Walls Painters", 
        category: "Painter", 
        location: "Balangir", 
        description: "Affordable and quality painting services for residential properties. We complete projects on time.", 
        image: "https://placehold.co/128x128/e0e7ff/3730a3?text=BW", 
        phone: "919876543226", 
        experience: 6, 
        rating: 4.7,
        gallery: [],
        reviews: []
    },
    { 
        id: 18, 
        name: "Bhuban Electric", 
        category: "Electrician", 
        location: "Puri", 
        description: "All kinds of electrical repair and maintenance for hotels and homes. Specializes in decorative lighting.", 
        image: "https://placehold.co/128x128/fef9c3/b45309?text=BE", 
        phone: "919876543227", 
        experience: 14, 
        rating: 4.6,
        gallery: ["https://placehold.co/600x400/fef9c3/b45309?text=Lighting"],
        reviews: [
             { user: "Restaurant Owner", rating: 5, comment: "Did a great job with the lighting in our restaurant." }
        ]
    }
];
