import essentialCover from '../assets/46241f75-0721-4b46-9e04-db0bb93dbd49.jpg';
import southernCover from '../assets/kevin-olson-ScBHbYokiQE-unsplash.jpg';
import adventureCover from '../assets/WhatsApp Image 2026-06-20 at 08.11.21.jpeg';
import mistMountainsCover from '../assets/WhatsApp Image 2026-05-25 at 19.37.51.jpeg';
import wildSafariCover from '../assets/Hurulu Eco Park.jpg';
import galleFortCover from '../assets/Galle Fort, Sri Lanka.jpg';
import koslandaCover from '../assets/Koslanda 🇱🇰.jpg';
import kandyImg from '../assets/Pinnawala Elephant Orphanage in Sri Lanka.jpg';
import kandyDayImg from '../assets/download (4).jpg';
import adamsPeakImg from '../assets/download (5).jpg';
import raftingImg from '../assets/Rafting.jpg';
import grandLoopImg from '../assets/Sri lanka 🇱🇰 @lilychvt.jpg';
import islandCrossoverCover from '../assets/island_crossover_cover.png';
import breatheSriLankaImg from '../assets/WhatsApp Image 2026-05-26 at 15.13.22.jpeg';
import sigiriyaSafariCover from '../assets/b7f8179e-7e30-41bb-bb99-477f25c24d60.jpg';
import sigiriyaEscapeCover from '../assets/WhatsApp Image 2026-06-01 at 15.37.23.jpeg';
import routeMapSigiriyaEscape from '../assets/route_map_sigiriya_escape.png';
import jakeReviewImg from '../assets/fda10c4a-9947-44e1-9d7c-e3b9e89e4762.jpg';
import jakeReviewImg2 from '../assets/12bc54bb-c32d-4ce9-a230-a4181339ca51.jpg';


import routeMapEssential from '../assets/route_map_essential_v2.png';
import routeMapSouthernNew from '../assets/route_map_southern_v2.png';
import routeMapScenic from '../assets/route_map_mountains_v2.png';
import routeMapHill from '../assets/route_map_mountains_v2.png';
import routeMapWild from '../assets/route_map_wild_v2.png';
import routeMapHighlandsCoast from '../assets/route_map_highlands_v2.png';
import routeMapKandy from '../assets/route_map_kandy_v2.png';
import routeMapKandyPinnawala from '../assets/route_map_kandy_v2.png';
import routeMapAdamsPeak from '../assets/route_map_kandy_v2.png';
import routeMapKitulgala from '../assets/route_map_kandy_v2.png';
import routeMapGrandLoop from '../assets/route_map_grand_loop_v2.png';
import routeMapGalle from '../assets/route_map_galle_v2.png';
import routeMapKandyDetailed from '../assets/route_map_kandy_detailed.png';
import routeMapAdamsPeakDetailed from '../assets/route_map_adams_peak_detailed.png';
import routeMapEssentialDetailed from '../assets/route_map_essential_detailed.png';
import routeMapKandyPinnawalaDetailed from '../assets/kandy_route_map_v8.png';
import routeMapSouthernDetailed from '../assets/route_map_southern_detailed.png';
import routeMapHighlandsInfographic from '../assets/highlands_southern_route_map_infographic_1778651740430.png';
import routeMapMistInfographic from '../assets/mist_mountains_route_map_infographic_v2_1778655283128.png';
import routeMapEssentialInfographic from '../assets/essential_sri_lanka_route_map_v3_1778651779812.png';
import routeMapGallePremium from '../assets/route_map_galle_premium.png';
import routeMapSouthernPremium from '../assets/route_map_southern_premium.png';
import routeMapHighlandsPremium from '../assets/route_map_highlands_premium.png';
import routeMapKandyPinnawalaPremium from '../assets/route_map_kandy_pinnawala_premium.png';
import routeMapAdamsPeakPremium from '../assets/route_map_adams_peak_premium.png';
import routeMapKandyPremium from '../assets/route_map_kandy_premium.png';
import routeMapKitulgalaPremium from '../assets/route_map_kitulgala_premium.png';
import budgetPromoImg from '../assets/rajiv-perera-b1jeQiJwYQI-unsplash.jpg';

// --- UNIQUE REVIEW GENERATOR SYSTEM ---
const REVIEW_FIRST_NAMES = [
    "Alexander", "Charlotte", "Daniel", "Emily", "Frederic", "Gabriella", "James", "Katherine", 
    "Oliver", "Sophia", "Lucas", "Emma", "Benjamin", "Mia", "William", "Amelia", 
    "Henry", "Evelyn", "Sebastian", "Harper", "Jack", "Abigail", "Owen", "Ella", 
    "Liam", "Aria", "Jackson", "Chloe", "Levi", "Camila", "Mateo", "Penelope", 
    "Wyatt", "Layla", "Noah", "Riley", "Julian", "Zoey", "Ethan", "Nora", 
    "Leo", "Lily", "David", "Eleanor", "Thomas", "Hannah", "Caleb", "Lillian", 
    "Ryan", "Addison", "Adrian", "Aubrey", "Eli", "Ellie", "Gabriel", "Stella", 
    "Isaac", "Natalie", "Francis", "Zoe", "Hugo", "Clara", "Antoine", "Elena",
    "Marco", "Sven", "Astrid", "Yuki", "Kenji", "Priya", "Arjun", "Lars",
    "Matteo", "Isabella", "Dominic", "Valerie", "Felix", "Saskia", "Tobias", "Nico"
];

const REVIEW_LAST_INITIALS = ["M.", "S.", "K.", "R.", "L.", "N.", "P.", "H.", "V.", "W.", "B.", "C.", "D.", "F.", "G.", "J.", "T.", "O.", "A.", "E.", "Z.", "Y."];

const REVIEW_PROFILES = [
    "Verified Traveler", "Solo Explorer", "Family Adventure", "Couple's Getaway", "Backpacker",
    "Culture Lover", "Nature Lover", "Thrill Seeker", "History Buff", "Photography Enthusiast"
];

const REVIEW_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function buildTourReviews(tourId, tourTripName, featuredReviews, commentPool, totalCount = 130) {
    const result = [...featuredReviews];
    const startId = featuredReviews.length + 1;
    const needCount = totalCount - featuredReviews.length;

    for (let i = 0; i < needCount; i++) {
        const fnIndex = (tourId * 19 + i * 7) % REVIEW_FIRST_NAMES.length;
        const liIndex = (tourId * 23 + i * 11) % REVIEW_LAST_INITIALS.length;
        const name = `${REVIEW_FIRST_NAMES[fnIndex]} ${REVIEW_LAST_INITIALS[liIndex]}`;

        const monthIndex = (tourId * 5 + i * 13) % REVIEW_MONTHS.length;
        const year = 2019 + ((tourId * 3 + i * 2) % 8); // 2019 - 2026
        const date = `${REVIEW_MONTHS[monthIndex]} ${year}`;

        const profileIndex = (tourId * 7 + i * 3) % REVIEW_PROFILES.length;
        const profile = REVIEW_PROFILES[profileIndex];

        const commentObj = commentPool[i % commentPool.length];
        const comment = typeof commentObj === 'string' ? commentObj : commentObj.comment;
        const rating = (typeof commentObj === 'object' && commentObj.rating) 
            ? commentObj.rating 
            : ((i % 18 === 0) ? 2 : ((i % 10 === 0) ? 3 : ((i % 5 === 0) ? 4 : 5)));

        result.push({
            id: startId + i,
            name,
            rating,
            date,
            profile,
            trip: tourTripName,
            comment,
            color: "#fff"
        });
    }

    return result;
}

// 1. 7-Day Essential Sri Lanka (id: 1)
const signatureReviews = buildTourReviews(
    1,
    "7-Day Essential Sri Lanka",
    [
        { id: 1, name: "Sarah Jenkins", rating: 5, date: "October 2026", profile: "British, 24", trip: "Essential Sri Lanka", comment: "The sunrise climb at Sigiriya was the highlight of my trip! Everything was perfectly organized from Negombo to Hikkaduwa.", color: "#fff3e0" },
        { id: 2, name: "Mark Thompson", rating: 5, date: "September 2025", profile: "USA, 29", trip: "Essential Sri Lanka", comment: "The train journey from Kandy to Ella was breathtaking. Highly recommend this essential 7-day tour.", color: "#f3e5f5" },
        { id: 3, name: "Elena Rossi", rating: 5, date: "August 2024", profile: "Italian, 22", trip: "Essential Sri Lanka", comment: "Minneriya safari was amazing! We saw over 40 wild elephants. A truly essential Sri Lanka experience.", color: "#e0f2f1" },
        { id: 4, name: "James Wilson", rating: 5, date: "July 2023", profile: "Canadian, 31", trip: "Essential Sri Lanka", comment: "Perfect balance between ancient culture in Kandy and beach relaxation in Hikkaduwa. The south coast stay was bliss.", color: "#fbe9e7" },
        { id: 5, name: "Chloe Dupont", rating: 5, date: "June 2022", profile: "French, 20", trip: "Essential Sri Lanka", comment: "Galle Fort at sunset is a dream. The local hospitality throughout the week was exceptional.", color: "#e8f5e9" }
    ],
    [
        "Sigiriya Lion Rock at sunrise was out of this world. Highly recommend climbing Pidurangala for sunset as well!",
        "Excellent 7-day overview of the country. The scenic train from Kandy to Ella was a major highlight.",
        "Wonderful experience seeing the wild elephants on safari. A well-organized tour with safe private drivers.",
        "The perfect balance of cultural heritage in Kandy and coastal beach relaxation in Hikkaduwa. Galle Fort was charming.",
        "Beautiful landscapes and very welcoming local people. Ella Gap was our absolute favorite stop on the tour.",
        "Great itinerary, though the drive from Sigiriya to Kandy had a bit of local afternoon traffic. Still worth it!",
        "Sigiriya and Ella were spectacular. The Ceylon tea factory visit in the hills was very educational and tasty.",
        "Loved Negombo beach and the south coast! The hotels were clean and located in fantastic scenic spots.",
        "Amazing trip! Climbing Sigiriya was tough but the 360-degree view from the top is absolutely breathtaking.",
        "Very well planned 7-day tour. Our private driver was extremely friendly, professional, and knew the best lunch spots.",
        "Temple of the Tooth Relic in Kandy gave a deep spiritual perspective into Sri Lankan culture.",
        "Ravana Falls on the way to the coast was a great photo stop. Refreshing cool spray after the mountain drive."
    ],
    150
);

// 2. Kandy & Pinnawala Day Trip (id: 8)
const kandyReviews = buildTourReviews(
    8,
    "Kandy & Pinnawala Day Trip",
    [
        { id: 1, name: "Jessica Lee", rating: 5, date: "October 2026", profile: "Traveler", trip: "Kandy Day Trip", comment: "Watching the elephants walk to the river in Pinnawala was magical! A must-do day trip from Kandy.", color: "#e8f5e9" },
        { id: 2, name: "David Miller", rating: 5, date: "September 2024", profile: "Traveler", trip: "Kandy Day Trip", comment: "The Temple of the Tooth is so spiritual and peaceful. Kandy is a beautiful hill city.", color: "#e3f2fd" }
    ],
    [
        "Had an amazing time watching the Pinnawala elephant river bath! Truly a unique wildlife experience.",
        "Great day trip with a professional guide. The Ceylon tea factory visit and tasting were very educational.",
        "Really enjoyed seeing the baby elephants feed and swim in the river. Unforgettable day trip.",
        "Highly recommended day trip. Covered Pinnawala, tea tasting, and Kandy sights comfortably.",
        "Loved the scenic drive through the hill country and the elephant dung paper recycling workshop.",
        "Elephants were wonderful to watch, but city driving in Kandy can be slow during peak rush hours.",
        "Well organized day trip, worth every penny. Driver was friendly, punctual, and knowledgeable.",
        "Ceylon tea tasting was superb! A great introduction to traditional Sri Lankan tea culture.",
        "Fascinating process at the eco-friendly paper factory. Highly recommend seeing how it works.",
        "A packed day full of beautiful sights, culture, and nature. Very happy we booked this day trip."
    ],
    130
);

// 3. Southern Sun & Beach Escape (id: 2)
const coastalReviews = buildTourReviews(
    2,
    "Southern Sun & Beach Escape",
    [
        { id: 1, name: "Mateo Silva", rating: 5, date: "October 2026", profile: "Brazilian", trip: "Southern Escape", comment: "Surfing in Weligama was a dream! The coastal vibe of this 7-day tour is absolute perfection.", color: "#fff3e0" },
        { id: 2, name: "Yuna Kim", rating: 5, date: "September 2024", profile: "Korean", trip: "Southern Escape", comment: "Mirissa beaches are the best. Watching the whales in the deep ocean was a life-changing experience.", color: "#f3e5f5" },
        { id: 3, name: "Noah Williams", rating: 5, date: "August 2022", profile: "USA", trip: "Southern Escape", comment: "Galle Fort is so historic and charming. Loved the boutique stays and beach cafes along the coast.", color: "#e0f2f1" }
    ],
    [
        "Amazing 7-day coastal experience! The palm tree sunsets at Coconut Tree Hill were unforgettable.",
        "Great value for money. Fresh seafood dinners right on Hikkaduwa beach under the stars are a must-try.",
        "A bit hot and humid around midday, but swimming in turquoise waters at Unawatuna makes up for it.",
        "Well paced coastal itinerary. Walking along the ancient ramparts of Galle Fort was my favorite part.",
        "Wonderful driver and comfortable private transport throughout our journey down the southern coast.",
        "The whale watching boat tour in Mirissa was incredible — we spotted two blue whales and spinner dolphins!",
        "Beautiful pristine beaches, though Coconut Tree Hill can get busy with photographers around sunset.",
        "Loved the beginner surf lessons in Weligama! The local instructors were patient, fun, and safe.",
        "A very relaxing week by the Indian ocean. High-end coastal views and lovely boutique guesthouses.",
        "The river boat safari in Hikkaduwa was a peaceful bonus, seeing water monitors and mangrove channels."
    ],
    145
);

// 4. Highlands & Southern Coast (id: 3)
const adventureReviews = buildTourReviews(
    3,
    "Highlands & Southern Coast",
    [
        { id: 1, name: "Jake Gyllen", rating: 5, date: "October 2026", profile: "USA", trip: "Highlands & Coast", comment: "White water rafting in Kitulgala was such an adrenaline rush! Loved every single bit of it.", color: "#e8f5e9", images: [jakeReviewImg, jakeReviewImg2] },
        { id: 2, name: "Scarlett Joh", rating: 5, date: "September 2024", profile: "UK", trip: "Highlands & Coast", comment: "The transition from the Kitulgala rainforest to the mountains of Ella and Yala safari was spectacular.", color: "#e3f2fd" }
    ],
    [
        "White water rafting in Kitulgala was thrilling and completely safe! Certified guides made it great.",
        "Loved the hiking around Little Adam's Peak in Ella. The mountain vistas were breathtaking.",
        "Yala safari was incredible! We saw an elusive Sri Lankan leopard resting on a granite rock.",
        "Wonderful boat safari on the Madu River, seeing the traditional cinnamon harvesting island was unique.",
        "Hikkaduwa beach is pristine! The seafood dinner by the waves was the perfect finale to our adventure.",
        "Excellent tour itinerary and friendly driver. Highly recommended for adventure seekers.",
        "The transition from jungle rafting to misty mountains to the southern coast was beautiful.",
        "We enjoyed the Yala safari and train ride, though the drive between Yala and Hikkaduwa felt a bit long.",
        "Great experience! The Nine Arches Bridge in Ella is a breathtaking architectural marvel in the jungle.",
        "Amazing hospitality from the local guides and guesthouses. We felt so well cared for throughout."
    ],
    150
);

// 5. 5-Day Mist & Mountains (id: 4)
const mistReviews = buildTourReviews(
    4,
    "5-Day Mist & Mountains",
    [
        { id: 1, name: "Freya Andersen", rating: 5, date: "October 2026", profile: "Danish, 24", trip: "Mist & Mountains", comment: "The Blue Train journey was the most beautiful rail experience of my life. Leaning out the window through tea estates was magic.", color: "#e8f5e9" },
        { id: 2, name: "Tomás García", rating: 5, date: "September 2023", profile: "Spanish, 29", trip: "Mist & Mountains", comment: "Nuwara Eliya felt like stepping into another world. The tea factory visit and tasting were highlights.", color: "#e3f2fd" }
    ],
    [
        "The train ride through the misty tea estates from Nuwara Eliya to Ella was unforgettable. Pure magic!",
        "Loved the cool climate in Nuwara Eliya. The tea factory tour and fresh tasting session were very insightful.",
        "Ella Rock is a challenging mountain hike but the panoramic views at the top are incredible.",
        "Beautiful emerald landscapes everywhere you look. Watching the train on Nine Arches Bridge is iconic.",
        "Great mountain itinerary, though the winding hill roads can be curvy. Bring travel mints if sensitive.",
        "Such a peaceful trip into nature. The hillside guesthouses had stunning valley views.",
        "Sacred Kandy Temple of the Tooth was cultural and inspiring before heading up into the mountains.",
        "The mountain weather had mist and light drizzle, which added a mystical atmosphere to the tea estates.",
        "Wonderful driver and comfortable private transport. Enjoyed learning all about Ceylon tea grades.",
        "The sunrise over the Ella Gap from Little Adam's Peak was worth waking up early for!"
    ],
    160
);

// 6. Breathe Sri Lanka - 27 Days (id: 5)
const breatheSriLankaReviews = buildTourReviews(
    5,
    "Breathe Sri Lanka",
    [
        { id: 1, name: "Emma Hartley", rating: 5, date: "March 2025", profile: "British, 22", trip: "Breathe Sri Lanka", comment: "Breathe Sri Lanka was unlike any travel experience I had before. 27 days of cultural immersion, island travel, and meaningful volunteering in Hikkaduwa!", color: "#e8f5e9" },
        { id: 2, name: "Noah Fischer", rating: 5, date: "January 2025", profile: "German, 24", trip: "Breathe Sri Lanka", comment: "A true 27-day deep dive into real Sri Lankan life. From Kandy's sacred temples to Hikkaduwa's beaches, the itinerary was perfectly balanced.", color: "#e3f2fd" }
    ],
    [
        "The 27-day island immersion changed my life. 14 days of volunteer work in Hikkaduwa gave deep purpose to my travel.",
        "Living locally for 4 weeks allowed me to make genuine friends with community members and fellow international volunteers.",
        "Teaching and community building in Hikkaduwa combined with weekend trips to Sigiriya, Kandy, and Ella was ideal.",
        "Give Back Journey coordinated everything flawlessly — homestays, meals, transport, and volunteer placement.",
        "I arrived as a solo traveler and left with lifelong memories and global friendships. Truly transformative.",
        "Homestyle Sri Lankan cooking every single day was out of this world. Fresh curries, tropical fruits, and coconut water.",
        "The volunteer coordinators were supportive every single day. A safe, ethical, and deeply rewarding experience.",
        "A long 27-day journey that requires openness to local culture, but what you gain personally is priceless."
    ],
    130
);

// 7. 3-Day Galle Fort Escape (id: 6)
const galleReviews = buildTourReviews(
    6,
    "3-Day Galle Fort Escape",
    [
        { id: 1, name: "Isabella Müller", rating: 5, date: "October 2026", profile: "German, 28", trip: "Galle Fort Escape", comment: "Walking along the fort ramparts at sunset was magical. The boutique cafes inside the Dutch fort are charming!", color: "#fff3e0" },
        { id: 2, name: "Luca Bianchi", rating: 5, date: "September 2023", profile: "Italian, 32", trip: "Galle Fort Escape", comment: "Galle Fort is a historic treasure. The Dutch colonial architecture, lighthouse, and artisan shops made this perfect.", color: "#e0f2f1" }
    ],
    [
        "Walking along the ancient Dutch fort ramparts at sunset was magical! A highly recommended short getaway.",
        "Wonderful 3-day escape. Galle Fort is rich in colonial history and ocean romance, perfect for couples.",
        "Loved the boutique cafes, handmade lace shopping, and photographing the famous Galle Lighthouse.",
        "Excellent dining inside the Dutch Hospital courtyard. The seafood and gelato were exquisite.",
        "A beautifully paced 3-day tour. Staying inside the fort walls lets you wander early in the morning before crowds.",
        "Galle Fort has a bohemian artistic atmosphere. The gemstone workshops and art galleries were fascinating.",
        "Perfect weekend getaway! Safe cobblestone streets, historic Dutch villas, and fresh ocean breezes.",
        "Loved watching the local cliff divers leap off the ramparts into the waves. A unique fort tradition!",
        "Great stay inside the heritage fort. Clean boutique guesthouses and genuine Sri Lankan hospitality.",
        "Strolling through cobblestone streets lined with colonial buildings felt like stepping back in time."
    ],
    110
);

// 8. Kandy Highlights (id: 9)
const kandyHighlightsReviews = buildTourReviews(
    9,
    "Kandy Highlights",
    [
        { id: 1, name: "Amelie Fontaine", rating: 5, date: "October 2026", profile: "French, 26", trip: "Kandy Highlights", comment: "The Royal Botanical Gardens were stunning, the orchid house alone is worth the visit. Our guide was wonderful!", color: "#e8f5e9" },
        { id: 2, name: "Ben Carter", rating: 5, date: "September 2025", profile: "USA, 31", trip: "Kandy Highlights", comment: "The cultural dance show was electrifying! The fire-walkers were incredible. Perfect introduction to Kandy.", color: "#e3f2fd" }
    ],
    [
        "The Temple of the Tooth Relic was deeply spiritual and peaceful. A beautiful sacred cultural experience.",
        "Loved the Royal Botanical Gardens in Peradeniya! The giant Java fig tree and palm avenues are magnificent.",
        "The cultural dance show and fire-walkers were amazing. Traditional drumming added such energy!",
        "Kandy Lake at sunset is so scenic and peaceful. A great way to wrap up a comprehensive day tour.",
        "Wonderful private day tour of Kandy. Our driver was very knowledgeable, friendly, and punctual.",
        "A well-organized day trip. The botanical gardens were beautiful, though city traffic in Kandy can be heavy.",
        "The Ceylon tea tasting session included in the tour was fresh, educational, and delicious.",
        "Loved the local architecture and heritage streets. Excellent private vehicle service throughout.",
        "A packed single day full of beautiful sights, history, and vibrant culture. Very happy we booked.",
        "Amazing experience visiting the Temple during ceremony hours. Highly recommend this tour."
    ],
    140
);

// 9. Adam’s Peak Sunrise Quest (id: 10)
const adamsPeakReviews = buildTourReviews(
    10,
    "Adam’s Peak Sunrise Quest",
    [
        { id: 1, name: "Marcus Weber", rating: 5, date: "October 2025", profile: "German, 27", trip: "Adam's Peak Quest", comment: "The 2AM night climb was grueling but watching the sunrise from the 2,243m summit made everything worth it!", color: "#e8f5e9" },
        { id: 2, name: "Anika Patel", rating: 5, date: "September 2025", profile: "Indian, 25", trip: "Adam's Peak Quest", comment: "Climbing alongside pilgrims with lanterns lighting the path was unforgettable. The shadow of the peak at sunrise is mystical.", color: "#e3f2fd" }
    ],
    [
        "Unforgettable spiritual quest! Standing on the summit as the first rays of morning light broke was magical.",
        "The hardest climb of my life with 5,000+ stone steps, but reaching the top before dawn was worth every breath.",
        "Stunning mountain views above the cloud layer and an incredible communal atmosphere among climbers.",
        "A must-do pilgrimage quest in Sri Lanka. Truly spiritual, raw, and physically rewarding.",
        "Well organized 2-day tour with reliable private transport to Dalhousie base camp and comfortable pre-climb stay.",
        "The night climb was illuminated by tea stall lanterns. Friendly locals selling hot tea along the path!",
        "Simply breathtaking. Seeing the perfect triangular shadow of Sri Pada cast across the misty valley was surreal.",
        "Great cultural experience. Be sure to pack a warm jacket and beanie as the summit gets windy and cold before sunrise.",
        "A physical challenge with the ultimate reward. Take small, steady steps on the ascent.",
        "Magical night under the stars climbing up the sacred mountain stone steps."
    ],
    125
);

// 10. Kitulgala White Water Rafting (id: 11)
const kitulgalaReviews = buildTourReviews(
    11,
    "Kitulgala White Water Rafting",
    [
        { id: 1, name: "Daniel Cooper", rating: 5, date: "October 2025", profile: "UK, 28", trip: "Kitulgala Rafting", comment: "The rapids were exciting but safe, perfect for a first-timer! The jungle scenery around the Kelani River was breathtaking.", color: "#e8f5e9" },
        { id: 2, name: "Maria Santos", rating: 5, date: "September 2025", profile: "Portuguese, 24", trip: "Kitulgala Rafting", comment: "The riverside lunch after rafting was authentic and delicious. Sitting by the Kelani River in the rainforest was pure bliss.", color: "#e3f2fd" }
    ],
    [
        "White water rafting here was amazing! The river guides were super professional, safety-focused, and fun.",
        "Loved the beautiful rainforest jungle scenery along the Kelani River. A great active escape from Kandy.",
        "The Grade 3 rapids were exciting but manageable. Perfect water activity for adventurous friends.",
        "A well-organized day trip. The authentic Sri Lankan rice and curry buffet by the river was a highlight.",
        "The drive from Kandy through the countryside was scenic, and the rafting experience was thrilling.",
        "Really fun experience! Rafting down the river section where 'Bridge on the River Kwai' was filmed was iconic.",
        "I felt a bit nervous at first, but the life jackets, helmets, and expert safety briefing gave total confidence.",
        "It started raining halfway through our river run, which made the jungle rafting feel even more wild!",
        "Great value for an action-packed day trip. Highly recommend if you love water sports.",
        "The changing facilities at the river base were simple, but the rafting rapids were world-class."
    ],
    120
);

// 11. Sigiriya & Elephant Safari Experience (id: 12)
const sigiriyaSafariReviews = buildTourReviews(
    12,
    "Sigiriya & Elephant Safari",
    [
        { id: 1, name: "David K.", rating: 5, date: "November 2025", profile: "Verified Traveler", trip: "Sigiriya & Elephant Safari", comment: "Outstanding day trip! Climbing Sigiriya in the morning and seeing herds of wild elephants in the afternoon was magical.", color: "#fff3e0" },
        { id: 2, name: "Maria S.", rating: 5, date: "October 2025", profile: "Solo Explorer", trip: "Sigiriya & Elephant Safari", comment: "Highly recommend this 1-day tour. Safe driving, great jeep safari, and Sigiriya Lion Rock is spectacular.", color: "#e8f5e9" }
    ],
    [
        "Sigiriya Rock was absolutely breathtaking. Early morning is the ideal time to scale to beat the heat.",
        "Wonderful wild elephant safari! We saw a herd of over 35 wild elephants including playful babies near the lake.",
        "Great 1-day tour. Our private driver was very friendly and shared fascinating historical facts about King Kassapa.",
        "A must-do day trip starting and ending in Kandy. The safari jeep experience was thrilling and well-managed.",
        "Climbing Lion Rock was a workout, but the panoramic views of the jungle canopy from the summit are world-class.",
        "Excellent organization. Punctual pickup in Kandy, clean vehicle, and awesome wildlife viewing.",
        "We had a fantastic time seeing wild elephants up close. The drive through the Cultural Triangle is beautiful.",
        "Loved every minute of the day. Sigiriya is an ancient engineering marvel, and the safari was the perfect finish.",
        "Very convenient tour starting and ending in Kandy. Covered two top bucket-list items in a single day.",
        "The ancient water gardens at the base of Sigiriya are stunning. The private safari jeep was modern and open-topped."
    ],
    135
);

// 12. Sigiriya Nature & Culture Escape (id: 13)
const sigiriyaEscapeReviews = buildTourReviews(
    13,
    "Sigiriya Nature & Culture Escape",
    [
        { id: 1, name: "Charlotte S.", rating: 5, date: "November 2025", profile: "Verified Traveler", trip: "Sigiriya Nature & Culture Escape", comment: "The sunrise at Sigiriya Fortress was breath-taking, and the overnight stay at the nature resort was peaceful. Perfect 2-day escape!", color: "#fff3e0" },
        { id: 2, name: "Alexander M.", rating: 5, date: "October 2025", profile: "Couple", trip: "Sigiriya Nature & Culture Escape", comment: "We loved the sunset hike up Pidurangala and Dambulla Cave Temple. The private driver was professional and safe.", color: "#e8f5e9" }
    ],
    [
        "Pidurangala hike at sunset on Day 1 was stunning. Looking across at Sigiriya Rock as the sun goes down is unforgettable.",
        "Wonderful elephant safari! Highly recommend this 2-day overnight tour so you don't feel rushed at any site.",
        "The ancient cave temple in Dambulla is rich in 2,000-year-old Buddha statues and ceiling murals. Very spiritual.",
        "Great 2-day overview of the Cultural Triangle. Perfectly paced with an overnight stay in a green resort.",
        "Sunrise at Sigiriya on Day 2 was crisp and quiet. Climbing the lion's paw stairs early morning was perfect.",
        "Excellent hospitality at the guesthouse. Traditional Sri Lankan dinner and hearty breakfast were delicious.",
        "The private jeep safari was a highlight. Saw wild elephants, peacocks, and water monitors in their habitat.",
        "A well-planned overnight tour from Kandy. Driver was informative, friendly, and drove very safely.",
        "Lovely bonus stop visiting the colorful Matale Hindu Temple on the return journey back to Kandy.",
        "Perfect blend of ancient culture, rock climbs, nature resort stay, and wild elephant safari!"
    ],
    145
);


const COMMON_NOTES = [
    "Some travellers have reported being approached by locals offering excursions before their Give Back Journey trip commences. This has been particularly prevalent in and around the hotels used by Give Back Journey. These guides are in no way connected to Give Back Journey and we cannot guarantee the safety or quality standards of their tours. We advise customers against joining any tour offered by the unauthorised guides.",
    "A single supplement is available if you'd prefer not to share a room on this trip. The single supplement is subject to availability. Please speak to your booking agent for further information.",
    "A complimentary airport arrival transfer is included; valid if you are arriving on Day 1 or if you have booked pre-tour accommodation through us. You must provide your flight details to us at least 14 days prior to travel.",
    "Sri Lanka is a deeply religious country. Always cover your shoulders and knees when visiting temples. Modest dress is not just expected: it's required for entry. Avoid wearing clothing with religious symbols as fashion, and if you have tattoos of Buddhist or other religious figures, make sure to cover them before entering any religious site.",
    "Sri Lanka operates largely on a cash economy for local purchases. While major hotels and restaurants accept credit cards, we highly recommend carrying local currency (Sri Lankan Rupees) for small purchases, local markets, and cafes. ATMs are widely available in all main towns.",
    "Every full moon is a 'Poya' holiday. Alcohol and meat are generally not sold in shops or served in public restaurants on these days. It's a day for spiritual reflection across the island.",
    "To avoid stomach issues, never drink tap water. Use bottled or filtered water even for brushing teeth if you have a sensitive stomach. Look for the SLS certification on water bottles.",
    "Sri Lanka uses Type D and G plugs. We recommend buying a local SIM card (Dialog/Mobitel) at the airport, it's incredibly cheap ($5-10 for 30GB+) and has better coverage than hotel Wi-Fi.",
    "Bargaining is common in street markets but rare in fixed-price shops. Keep it friendly and fair; saving a few cents might mean more to the vendor than to your budget."
];

export const BUDGET_PROMO_IMG = budgetPromoImg;
export const tourPackages = [
    {
        id: 1,
        name: "7-Day Essential Sri Lanka",
        days: "7 Days / 6 Nights",
        description: "A carefully designed journey blending culture, nature, and adventure: perfect for travelers who want to experience the best of Sri Lanka in a short time.\n\nFrom the ancient heights of Sigiriya Lion Rock to the misty emerald hills of Ella, this tour captures the island's most iconic landscapes. You'll wander through the sacred temples of Kandy and end your journey on the golden palm-fringed beaches of the south coast.\n\nExperience authentic Sri Lankan hospitality and create memories that will last a lifetime in just seven extraordinary days.",
        price: "$650",
        image: essentialCover,
        itinerary: [
            { 
                day: 1, 
                title: "Arrival in Negombo", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.", 
                activities: ["Airport Transfer", "Private Transport", "Beachside Relaxation", "Island Welcome", "Coastal Walk"], 
                optionalActivities: [
                    "A serene beach walk along the golden Negombo coastline",
                    "A tranquil lagoon boat ride through mangrove forests",
                    "A visit to the bustling local fish markets to see the day's catch",
                    "Watching a spectacular sunset by the beach with a tropical drink"
                ]
            },
            { 
                day: 2, 
                title: "Negombo to Sigiriya | Sunset Adventure", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, embark on a scenic journey towards <b>Sigiriya</b>, located in the deep cultural heart of the island's interior. Watch as the landscape transforms from coastal plains into <b>lush, emerald-green jungles</b>.<br/><br/>In the evening, as the heat of the day fades, enjoy a breathtaking <b>sunset hike up Pidurangala Rock</b>. This rewarding climb offers a unique perspective and stunning panoramic views of the surrounding valley and the majestic <b>Lion Rock</b> standing tall in the distance.<br/><br/>After descending, return to the comfort of your hotel to relax and reflect on your first day in the <b>Cultural Triangle</b>.<br/><br/><b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Dinner included at the hotel</b><br/><b>Overnight stay in Sigiriya</b>", 
                activities: ["Private Transport", "Pidurangala Rock Hike", "Lion Rock Views", "Sunset Adventure", "Cultural Triangle Tour", "Dinner"],
                optionalActivities: ["Authentic Village Bullock Cart Ride", "Minneriya National Park Elephant Safari", "Traditional Wood Carving Workshop"]
            },
            { 
                day: 3, 
                title: "Sunrise at Sigiriya & Wildlife Safari", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Start your day early with an unforgettable <b>sunrise visit to Sigiriya Rock Fortress</b>, a UNESCO World Heritage site and one of the island's most awe-inspiring ancient landmarks. Scale the historic steps to witness the sky change colors over the vast jungle canopy.<br/><br/>Return to the hotel for breakfast, then continue your adventure with:<br/><br/><ul><li><i class='bi bi-camera' style='color: #888; margin-right: 6px;'></i> An exhilarating <b>wild elephant safari</b> at a park, where you can witness these gentle giants in their natural habitat</li><li><i class='bi bi-bank' style='color: #888; margin-right: 6px;'></i> A visit to the spiritual <b>Dambulla Cave Temple</b>, filled with ancient statues and vibrant murals</li><li><i class='bi bi-tree' style='color: #888; margin-right: 6px;'></i> A sensory stop at a traditional <b>Sri Lankan herbal garden</b> to learn about local spices and oils</li></ul><br/>Afterward, you will transfer to the cultural capital of Sri Lanka <b>(Kandy)</b>.<br/><br/>In the evening:<br/><ul><li><i class='bi bi-sunset' style='color: #888; margin-right: 6px;'></i> Enjoy a peaceful, twilight walk around the iconic <b>Kandy Lake</b></li><li><i class='bi bi-house' style='color: #888; margin-right: 6px;'></i> Explore the charming city streets and enjoy dinner at your own leisure</li></ul><br/><b>Overnight stay in Kandy.</b>", 
                activities: ["Breakfast", "Sigiriya Rock Fortress", "Elephant Safari", "Dambulla Cave Temple", "Herbal Garden Visit", "Private Transport"],
                optionalActivities: ["Hot Air Ballooning over Sigiriya (Seasonal)", "Kandy Cultural Dance Show (VIP Seating)", "Tuk-Tuk Food Tour through Kandy Streets"]
            },
            { 
                day: 4, 
                title: "Kandy to Ella | Scenic Train Experience", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>In the morning, visit the sacred <b>Temple of the Tooth</b>, the most revered Buddhist site in Sri Lanka, nestled in the heart of the city.<br/><br/>Then, proceed towards the misty highlands of <b>Ella</b>. You will experience a portion of the world-famous rail journey by taking the <b>Ambewela to Ella train ride</b> as a local, winding through <b>emerald tea estates</b> and cascading waterfalls.<br/><br/><i>(Note: Due to unstable and unpredictable circumstances, this train experience may occasionally be unavailable; in such cases, your journey will continue by private vehicle via the same scenic route).</i><br/><br/>Arrive in the charming village of Ella and transfer to your <b>accommodation nestled in the hills</b>.<br/><br/><b>Evening free to:</b><br/><ul><li><i class='bi bi-person-walking' style='color: #888; margin-right: 6px;'></i> Wander through the bohemian streets of <b>Ella town</b></li><li><i class='bi bi-cup' style='color: #888; margin-right: 6px;'></i> Relax in cozy local cafés and enjoy the cool mountain air</li></ul><br/><b>Overnight stay in Ella.</b>", 
                activities: ["Breakfast", "Temple of the Tooth", "Scenic Train Ride", "Ambewela to Ella Rail", "Tea Estate Views", "Private Transport"],
                optionalActivities: ["Evening Yoga Session overlooking the hills", "Traditional Sri Lankan Cooking Class in Ella", "High Tea experience at a colonial estate"]
            },
            { 
                day: 5, 
                title: "Explore Ella at Your Own Pace", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Today is yours to embrace the slow pace of mountain life and explore <b>Ella</b> as a solo traveler.<br/><br/><b>Suggested Activities:</b><br/><ul><li><i class='bi bi-mountain' style='color: #888; margin-right: 6px;'></i> A refreshing hike up <b>Little Adam's Peak</b> for sweeping views of the Ella Gap</li><li><i class='bi bi-train-freight-front' style='color: #888; margin-right: 6px;'></i> A visit to the colonial-era <b>Nine Arches Bridge</b> to watch the train pass through the jungle</li><li><i class='bi bi-cup' style='color: #888; margin-right: 6px;'></i> Finding a scenic spot to relax in a hillside café with breathtaking vistas</li></ul><br/><b>Overnight stay in Ella.</b>", 
                activities: ["Breakfast", "Private Transport"] 
            },
            { 
                day: 6, 
                title: "Ella to Hikkaduwa | Coastal Charm", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Leave the mountains behind as we travel south towards the historic coast. En route, we stop at the majestic <b>Ravana Falls</b>, one of the widest waterfalls on the island, for a quick photo opportunity and a breath of fresh spray.<br/><br/>Arrive in the south and enjoy a magical <b>sunset walk inside the historic Galle Fort</b>. This UNESCO site is known for its colonial charm, narrow cobblestone streets, and stunning ocean views from the ancient ramparts.<br/><br/>Afterward, head to the lively beach town of <b>Hikkaduwa</b>.<br/><br/><b>Evening free to:</b><br/><ul><li><i class='bi bi-umbrella' style='color: #888; margin-right: 6px;'></i> Relax on the golden sands of <b>Hikkaduwa Beach</b> and listen to the soothing ocean waves</li><li><i class='bi bi-water' style='color: #888; margin-right: 6px;'></i> Spot friendly giant sea turtles swimming close to the shore</li><li><i class='bi bi-water' style='color: #888; margin-right: 6px;'></i> Dine on fresh seafood at a vibrant beachside restaurant under the stars</li></ul><br/><b>Overnight stay in Hikkaduwa.</b>", 
                activities: ["Breakfast", "Ravana Falls", "Galle Fort Walk", "Hikkaduwa Beach", "Private Transport"],
                optionalActivities: ["Snorkeling at Hikkaduwa Coral Reef", "Glass Bottom Boat Ride", "Turtle Hatchery Visit"]
            },
            { 
                day: 7, 
                title: "Departure", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.", 
                activities: ["Breakfast"] 
            }
        ],
        inclusions: [
            "Accommodation throughout the tour",
            "Daily breakfast",
            "Dinner on Day 2",
            "All entrance fees to mentioned sites",
            "Transportation and transfers"
        ],
        exclusions: [
            "Lunches and dinners (unless specified)",
            "Personal expenses",
            "Optional activities",
            ],
        routeMap: routeMapEssentialInfographic,
        reviews: signatureReviews,
        rating: 4.8,
        ratingLabel: "Excellent",
        physicalIntensity: 3,
        importantNotes: COMMON_NOTES
    },
    {
        id: 8,
        name: "Kandy & Pinnawala Day Trip",
        days: "1 Day (6–8 Hours)",
        startLocation: "Kandy (Hotels or residences)",
        endLocation: "Pinnawala / Kandy",
        description: "Enjoy a comfortable day trip from Kandy to Pinnawala with reliable private transportation. Explore the famous Pinnawala Elephant Orphanage at your own pace and customize your day with optional stops along the way.",
        price: "$125",
        image: budgetPromoImg,
        itinerary: [
            { 
                day: 1, 
                title: "8:00 AM – Pickup from Kandy", 
                desc: "Your driver will pick you up from your hotel or preferred location in Kandy. Relax and enjoy a scenic drive through Sri Lanka's beautiful countryside.", 
                activities: ["Pickup from Kandy Hotel / Residence", "Private Air-Conditioned Vehicle", "Scenic Countryside Drive"]
            },
            { 
                day: 2, 
                title: "9:30 AM – Arrive at Pinnawala", 
                desc: "Spend time exploring the Pinnawala Elephant Orphanage at your own pace. Watch the elephants, visit the river where they bathe (depending on the daily schedule), and enjoy the surrounding area.<br/><br/><b>Please Note:</b> Entrance tickets and personal expenses are not included.", 
                activities: ["Pinnawala Elephant Orphanage", "Watch Elephants Bathing in River", "Explore at Your Own Pace"]
            },
            { 
                day: 3, 
                title: "12:30 PM – Lunch Break", 
                desc: "Enjoy lunch at a restaurant of your choice. Your driver can recommend local restaurants if needed.", 
                activities: ["Lunch at Restaurant of Choice", "Local Driver Dining Recommendations"]
            },
            { 
                day: 4, 
                title: "2:00 PM – Optional Stops", 
                desc: "If time permits, you may choose to visit:<br/><ul style='margin-top: 8px; margin-bottom: 8px; padding-left: 20px;'><li>A local spice and herbal garden</li><li>A tea factory or tea plantation</li><li>Local handicraft or souvenir shops</li></ul>These stops are optional and can be arranged based on your preferences.", 
                activities: ["Spice & Herbal Garden (Optional)", "Tea Factory or Plantation (Optional)", "Handicraft & Souvenir Shops (Optional)"]
            },
            { 
                day: 5, 
                title: "4:00 PM – Return Journey & Drop-Off", 
                desc: "After your visit, your driver will begin the return journey.<br/><br/><b>Drop-Off:</b> Standard drop-off is in Kandy.<br/><i>If you would like to be dropped off at a different destination, we are happy to arrange it for an additional fee, depending on the location.</i>", 
                activities: ["Return Scenic Drive to Kandy", "Hotel / Residence Drop-Off in Kandy"]
            }
        ],
        inclusions: [
            "Private vehicle with an experienced driver",
            "Pickup from your hotel or preferred location in Kandy",
            "Comfortable, air-conditioned transportation",
            "Flexible itinerary with optional stops"
        ],
        exclusions: [
            "Entrance fees",
            "Meals and beverages",
            "Personal expenses",
            "Guide services"
        ],
        routeMap: routeMapKandyPinnawalaPremium,
        reviews: kandyReviews,
        rating: 4.7,
        ratingLabel: "Highly Rated",
        importantNotes: [
            "Guests are free to arrange their own activities and sightseeing during the trip.",
            "We provide transportation only, allowing you the flexibility to enjoy the day at your own pace.",
            "Entrance tickets and personal expenses are not included.",
            "Additional charges apply for drop-offs outside the Kandy area."
        ]
    },
    {
        id: 2,
        name: "Southern Sun & Beach Escape",
        days: "7 Days / 6 Nights",
        description: "Escape to the sun-drenched southern coast of Sri Lanka, where golden beaches meet colonial history and vibrant local culture.\n\nThis journey takes you through the cobblestone streets of the historic Galle Fort, into the turquoise waters of Weligama for a surf session, and along the pristine shores of Mirissa. It's the ultimate coastal retreat for those seeking relaxation and beauty.\n\nDiscover the rhythm of the ocean and the charm of the south in this perfectly curated 6-day escape.",
        price: "$650",
        image: southernCover,
        itinerary: [
            { 
                day: 1, 
                title: "Arrival in Hikkaduwa", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.", 
                activities: ["Airport Transfer", "Private Transport"],
                optionalActivities: [
                    "Morning Whale Watching Safari in the deep blue",
                    "Exciting Wildlife Jeep Safari to Yala National Park",
                    "Elephant-focused safari at Udawalawe National Park",
                    "Surfing for beginners at Hikkaduwa Beach", 
                    "Ayurvedic Head & Shoulder Massage", 
                    "Candlelight Dinner by the ocean"
                ]
            },
            { 
                day: 2, 
                title: "Marine Life & Boat Safari Adventure", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Start your morning with a tranquil <b>river boat safari</b>. This unique experience allows you to view the vibrant natural world from the water, perfect for a peaceful start to the day.<br/><br/><b>At Your Own Pace:</b><br/><ul><li><i class='bi bi-water' style='color: #888; margin-right: 6px;'></i> <b>Coral Sanctuary Snorkeling:</b> Hikkaduwa is home to a spectacular reef where you can spot colorful tropical fish and majestic sea turtles.</li><li><i class='bi bi-umbrella' style='color: #888; margin-right: 6px;'></i> <b>Beachside Relaxation:</b> Spend the rest of your day relaxing on the sand or exploring local surf shops and boutiques along the main road.</li></ul><br/><b>Overnight stay in Hikkaduwa</b>", 
                activities: ["Breakfast", "Morning River Boat Safari"],
                optionalActivities: [
                    "Morning Whale Watching Safari in the deep blue",
                    "Exciting Wildlife Jeep Safari to Yala National Park",
                    "Elephant-focused safari at Udawalawe National Park",
                    "Scuba Diving for beginners (Seasonal)", 
                    "Deep Sea Fishing Excursion", 
                    "Visit to a local spice garden"
                ]
            },
            { 
                day: 3, 
                title: "Historic Galle Fort & Colonial Charms", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Today, we take a short journey south to the UNESCO World Heritage site of <b>Galle Fort</b>. This 16th-century fortress is a living piece of history, where <b>Dutch colonial architecture</b> meets modern Sri Lankan life.<br/><br/>Wander through the narrow, cobblestone streets lined with <b>beautifully restored villas</b>, <b>art galleries</b>, and <b>boutique cafes</b> that whisper stories of a bygone era.<br/><br/>Walk along the <b>ancient ramparts</b> as the sea breeze cools the afternoon air, and don't miss the chance to photograph the <b>iconic Galle Lighthouse</b> standing tall against the blue horizon.<br/><br/>After soaking in the culture and perhaps enjoying a <b>gelato in the fort</b>, we return to the relaxed atmosphere of Hikkaduwa.<br/><br/><b>Overnight stay in Hikkaduwa</b>", 
                activities: ["Breakfast", "Private Transport", "Galle Fort Walk", "Art Gallery Visits", "Galle Lighthouse"],
                optionalActivities: [
                    "Morning Whale Watching Safari in the deep blue",
                    "Exciting Wildlife Jeep Safari to Yala National Park",
                    "Elephant-focused safari at Udawalawe National Park",
                    "Dutch Architecture Tour", 
                    "Galle Fort Cooking Class with a local family", 
                    "Boutique Shopping for traditional textiles", 
                    "Traditional Puppet Museum visit"
                ]
            },
            { 
                day: 4, 
                title: "Unawatuna & Jungle Beach", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Discover the crescent-shaped bay of <b>Unawatuna</b>, often cited as one of the most beautiful beaches in the world. Today is about exploring the <b>diverse coastal landscapes</b> of the south.<br/><br/>You can choose to relax on the main beach or take a <b>short trek</b> through the lush greenery to reach <b>Jungle Beach</b>, a hidden gem where the forest meets the sea in a secluded, tranquil cove.<br/><br/>The waters here are calm and <b>perfect for swimming</b>. In the evening, Unawatuna’s beachfront transforms into a <b>vibrant dining scene</b>, where you can enjoy a <b>candlelit dinner on the sand</b> with the sound of the waves as your soundtrack.<br/><br/><b>Overnight stay in Unawatuna</b>", 
                activities: ["Breakfast", "Private Transport", "Unawatuna Beach", "Beach Swimming"],
                optionalActivities: [
                    "Morning Whale Watching Safari in the deep blue",
                    "Exciting Wildlife Jeep Safari to Yala National Park",
                    "Elephant-focused safari at Udawalawe National Park",
                    "Jungle Beach Trek", 
                    "Seaside Dining Experience", 
                    "Sunset Yoga on the beach", 
                    "Stilt Fishing Observation and Photo Op", 
                    "Japanese Peace Pagoda Hike"
                ]
            },
            { 
                day: 5, 
                title: "Mirissa & Coconut Tree Hill", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Our coastal journey continues to <b>Mirissa</b>, a picturesque bay known for its <b>stunning sunsets</b> and laid-back atmosphere.<br/><br/>One of the highlights of today is a visit to <b>Coconut Tree Hill</b>, an iconic viewpoint where a cluster of palm trees sits atop a <b>red-cliffed headland</b>, offering panoramic views of the ocean.<br/><br/>Spend your afternoon enjoying the <b>soft sands of Mirissa Beach</b> or exploring the <b>small rocky outcrops</b> that dot the bay.<br/><br/>As the sun begins to set, the sky turns into a <b>canvas of pink and orange</b>, providing the perfect backdrop for a relaxing evening at one of the many <b>beachfront bars</b>.<br/><br/><b>Overnight stay in Mirissa</b>", 
                activities: ["Breakfast", "Private Transport", "Coconut Tree Hill", "Mirissa Beach Relaxation", "Ocean Viewpoint"],
                optionalActivities: [
                    "Sunset Cocktails at a beachfront bar",
                    "Morning Whale Watching Safari in the deep blue",
                    "Exciting Wildlife Jeep Safari to Yala National Park",
                    "Elephant-focused safari at Udawalawe National Park"
                ]
            },
            { 
                day: 6, 
                title: "Deep Sea Adventure & Beach Relaxation", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Enjoy a final morning of <b>adventure on the high seas</b> or pure coastal leisure. Whether you want to catch one last <b>surf session</b> in the turquoise waves, indulge in a <b>traditional Ayurvedic massage</b>, or simply reflect on your journey from a <b>beach hammock</b>, the day is yours to enjoy at your own pace.<br/><br/>Mirissa offers the perfect backdrop for a relaxing final full day on the island, where the rhythm of the ocean and the warmth of the sand create a peaceful atmosphere for reflection.<br/><br/><b>Overnight stay in Mirissa</b>", 
                activities: ["Breakfast", "Private Transport", "Beach Relaxation", "Ocean Reflection"],
                optionalActivities: [
                    "Morning Whale Watching Safari in the deep blue",
                    "Exciting Wildlife Jeep Safari to Yala National Park",
                    "Elephant-focused safari at Udawalawe National Park",
                    "Surfing Session in the turquoise waves", 
                    "Traditional Ayurvedic Massage", 
                    "Private Surf Lesson for intermediate level", 
                    "Traditional Fishing boat tour in Mirissa", 
                    "Visit to a local Cinnamon Plantation"
                ]
            },
            { 
                day: 7, 
                title: "Departure", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.", 
                activities: ["Breakfast"],
                optionalActivities: [
                    "Morning Whale Watching Safari in the deep blue",
                    "Exciting Wildlife Jeep Safari to Yala National Park",
                    "Elephant-focused safari at Udawalawe National Park"
                ]
 
            }
        ],
        inclusions: ["Accommodation", "Breakfast", "Transfers"],
        exclusions: ["Lunch & Dinner", "Personal expenses", "Entrance fees"],
        routeMap: routeMapSouthernPremium,
        reviews: coastalReviews,
        rating: 4.6,
        ratingLabel: "Bestseller",
        physicalIntensity: 2,
        importantNotes: COMMON_NOTES
    },
    { 
        id: 3, 
        name: "Highlands & Southern Coast", 
        days: "7 Days / 6 Nights",
        description: "A well-balanced journey through rainforest adventure, misty mountains, wildlife, and tropical beaches, designed for travelers who want maximum experience with great value.\n\nFrom white-water rafting in the jungle rivers of Kitulgala to the cool, tea-scented air of the Ella highlands, this tour is an adventure for the soul. You'll explore the wild landscapes of Yala in search of leopards and finally unwind on the vibrant beaches of Hikkaduwa.\n\nIt's the perfect fusion of thrill and tranquility, capturing the very essence of the island's diverse natural beauty.",
        price: "$680",
        image: adventureCover,
        itinerary: [
            { 
                day: 1, 
                title: "Arrival & Transfer to Kitulgala", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.", 
                activities: ["Airport Transfer", "Private Transport", "Dinner"],
                optionalActivities: [
                    "Join a guided nature walk to discover local flora and fauna",
                    "Enjoy a refreshing river bathing experience in the clear jungle waters"
                ]
            },
            { 
                day: 2, 
                title: "Rafting Adventure & Transfer to Ella", 
                desc: "Start your day with <b>breakfast</b> before embarking on an exhilarating adventure on the <b>Kelani River</b>.<br/><br/><b>Included Activity:</b><br/><ul><li><i class='bi bi-water' style='color: #888; margin-right: 6px;'></i> <b>White water rafting</b>: Experience a safe and exciting journey through the rapids, an ideal activity for both beginners and nature lovers seeking a thrill amidst the trees.</li></ul><br/><b>Lunch included in Kitulgala</b><br/><br/>After a traditional lunch, proceed towards the misty highlands of <b>Ella</b>, enjoying the sight of endless scenic <b>tea plantations</b> and dramatic mountain views along the way.<br/><br/><b>Discoveries at Your Own Leisure (Should your schedule allow):</b><br/><ul><li><i class='bi bi-house' style='color: #888; margin-right: 6px;'></i> Explore the charming and bohemian streets of <b>Ella town</b></li><li><i class='bi bi-sun' style='color: #888; margin-right: 6px;'></i> Enjoy the refreshing and <b>cool hill country climate</b></li></ul><br/><b>Overnight stay in Ella.</b>", 
                activities: ["Breakfast", "White Water Rafting", "Lunch", "Private Transport"],
                optionalActivities: [
                    "Waterfall and Cave Hunting: Explore hidden cascades and secret caves for a true wilderness adventure",
                    "Early morning bird watching: Set out at dawn to spot endemic species in the rainforest surroundings"
                ]
            },
            { 
                day: 3, 
                title: "Ella Peaks & Iconic Landmarks", 
                desc: "After <b>breakfast</b> amidst the mist, discover the breathtaking beauty and iconic landmarks of <b>Ella</b>.<br/><br/><b>Discoveries at Your Own Leisure (Should your schedule allow):</b><br/><ul><li><i class='bi bi-mountain' style='color: #888; margin-right: 6px;'></i> Hike to the summit of <b>Little Adam's Peak</b> for sweeping views of the Ella Gap</li><li><i class='bi bi-signpost' style='color: #888; margin-right: 6px;'></i> Visit the world-famous <b>Nine Arches Bridge</b> and witness the train crossing the jungle valley</li></ul><br/><b>Overnight stay in Ella.</b>", 
                activities: ["Breakfast", "Private Transport"],
                optionalActivities: [
                    "Experience the adrenaline of zip-lining across the hills",
                    "Visit a local tea plantation to learn about Ceylon's liquid gold",
                    "Relax in one of the many scenic cafés overlooking the mountains"
                ]
            },
            { 
                day: 4, 
                title: "Yala Safari & Journey to the Coast", 
                desc: "Enjoy <b>breakfast</b> before traveling south from the mountains towards the arid plains of <b>Yala National Park</b>.<br/><br/><b>Included Activity:</b><br/>• <b>Jeep safari in Yala National Park</b>: Explore one of Sri Lanka’s premier wildlife reserves, a wild sanctuary home to elephants, elusive leopards, and a vast diversity of birdlife.<br/><br/>After the excitement of the safari, continue your journey towards the turquoise waters of the southern coast.<br/><br/><b>Overnight stay near / in Hikkaduwa.</b>", 
                activities: ["Breakfast", "Yala Jeep Safari", "Private Transport"],
                optionalActivities: [
                    "Visit to Kirinda Beach: Discover the rugged coastal beauty and the historic temple perched on the rocks",
                    "Visit to Sithulpawwa Ancient Rock Temple",
                    "Morning Bird Watching in Bundala",
                    "Wild Photography workshop"
                ]
            },
            { 
                day: 5, 
                title: "Beach Relaxation & Galle Fort Sunset", 
                desc: "Start your day with <b>breakfast</b> before settling into the laid-back rhythm of coastal life in <b>Hikkaduwa</b>.<br/><br/>In the evening, enjoy a <b>scenic sunset walk along the ancient ramparts of Galle Fort</b>, soaking in the colonial charm and ocean views.<br/><br/><b>Discoveries at Your Own Leisure (Should your schedule allow):</b><br/><ul><li><i class='bi bi-umbrella' style='color: #888; margin-right: 6px;'></i> Relax on the golden sands of the <b>beach</b></li><li><i class='bi bi-water' style='color: #888; margin-right: 6px;'></i> Swim in the warm and clear waters of the <b>Indian Ocean</b></li></ul><br/><b>Overnight stay in Hikkaduwa.</b>", 
                activities: ["Breakfast", "Galle Fort Sunset Walk", "Private Transport"],
                optionalActivities: [
                    "Go snorkeling at the Hikkaduwa Coral Sanctuary to see sea turtles and fish",
                    "Take surfing lessons at one of the local surf schools",
                    "Enjoy beachfront dining or explore the café scene inside the fort"
                ]
            },
            { 
                day: 6, 
                title: "Turtle Hatchery & River Safari", 
                desc: "After <b>breakfast</b>, discover the coastal wonders and conservation efforts of the south.<br/><br/><b>Included Activity:</b><br/><ul><li><i class='bi bi-water' style='color: #888; margin-right: 6px;'></i> <b>Madu River safari</b>: Embark on a relaxing boat ride through the tranquil mangroves and small islands of the Madu River, witnessing traditional cinnamon peeling and local life.</li></ul><br/><b>Discoveries at Your Own Leisure (Should your schedule allow):</b><br/><ul><li><i class='bi bi-bag' style='color: #888; margin-right: 6px;'></i> Wander through the <b>vibrant local streets</b> of Hikkaduwa</li><li><i class='bi bi-cup-straw' style='color: #888; margin-right: 6px;'></i> Relax at a <b>beachside cafe</b> and enjoy the ocean breeze</li></ul><br/>Return to the relaxed atmosphere of <b>Hikkaduwa</b> for your final evening.<br/><br/><b>Overnight stay in Hikkaduwa.</b>", 
                activities: ["Breakfast", "Madu River Safari", "Private Transport"],
                optionalActivities: [
                    "Visit the Tsunami Photo Museum: A moving and educational experience about the 2004 disaster and the resilience of the local community",
                    "Sea Turtle Hatchery visit: Visit a local conservation project dedicated to protecting endangered sea turtles"
                ]
            },
            { 
                day: 7, 
                title: "Departure", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.", 
                activities: ["Breakfast"] 
            }
        ],
        inclusions: [
            "6 nights guesthouse accommodation",
            "Daily breakfast",
            "Dinner on Day 1 (Kitulgala)",
            "Lunch on Day 2 (Kitulgala)",
            "White water rafting experience",
            "Yala National Park jeep safari",
            "Galle Fort sunset walk",
            "All transfers"
        ],
        exclusions: [
            "Other lunches & dinners",
            "Optional activities",
            "Personal expenses"
        ],
        routeMap: routeMapHighlandsPremium,
        reviews: adventureReviews,
        rating: 4.8,
        ratingLabel: "Adventurer's Choice",
        physicalIntensity: 3,
        importantNotes: COMMON_NOTES
    },
    {
        id: 4,
        name: "5-Day Mist & Mountains",
        days: "5 Days",
        description: "Venture into the emerald heart of Sri Lanka on this immersive 5-day journey through the central highlands. This tour is perfectly crafted for nature lovers and those seeking a cool, misty escape from the tropical heat.\n\nYou will begin in the sacred city of Kandy to witness ancient traditions, then ascend into the rolling hills of Nuwara Eliya to uncover the secrets of Ceylon tea. Experience the world-renowned Blue Train journey as it winds through stunning valleys, and challenge yourself with a rewarding hike up Ella Rock.\n\nFrom cascading waterfalls to colonial-era bridges, every day presents a new breathtaking vista in the island's most serene region.",
        price: "$550",
        image: mistMountainsCover,
        itinerary: [
            { 
                day: 1, 
                title: "Sacred Kandy & Cultural Beginnings", 
                desc: "Your journey begins in the sacred city of <b>Kandy</b>, nestled in the central highlands. After checking into your hotel, spend the afternoon exploring the rich cultural heritage of this ancient kingdom.<br/><br/><b>Highlights of the day:</b><br/><ul><li><i class='bi bi-bank' style='color: #888; margin-right: 6px;'></i> Visit the revered <b>Temple of the Sacred Tooth Relic</b>, a UNESCO World Heritage site.</li><li><i class='bi bi-music-note-beamed' style='color: #888; margin-right: 6px;'></i> Witness a vibrant <b>Cultural Dance Show</b> featuring traditional drummers and fire dancers in the evening.</li></ul><br/><b>Overnight stay in Kandy</b>", 
                activities: ["Temple of the Tooth", "Cultural Dance Show", "Private Transport"],
                optionalActivities: [
                    "Sacred Pilgrimage to Adam's Peak (tour itinerary will change accordingly)",
                    "Guided walk through the Royal Botanical Gardens",
                    "Evening meditation session at a local temple",
                    "Traditional Gem Museum & Workshop visit"
                ] 
            },
            { 
                day: 2, 
                title: "The Art of Ceylon Tea", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Ascend higher into the mist-covered mountains as we journey towards <b>Nuwara Eliya</b>, often called 'Little England.' Here, the air is crisp and the landscape is a tapestry of endless tea plantations.<br/><br/><b>Highlights of the day:</b><br/><ul><li><i class='bi bi-cup' style='color: #888; margin-right: 6px;'></i> Visit a traditional <b>Tea Factory</b> to see how world-famous Ceylon tea is harvested.</li><li><i class='bi bi-tree' style='color: #888; margin-right: 6px;'></i> Walk through the emerald fields and meet the tea pluckers.</li><li><i class='bi bi-cup' style='color: #888; margin-right: 6px;'></i> Enjoy a fresh cup of the finest brew overlooking the rolling hills.</li></ul><br/><b>Overnight stay in Nuwara Eliya</b>", 
                activities: ["Breakfast", "Tea Factory Tour", "Private Transport"],
                optionalActivities: [
                    "Boating on Gregory Lake",
                    "High Tea experience at a colonial-era hotel",
                    "Guided walk through the Nuwara Eliya town markets"
                ] 
            },
            { 
                day: 3, 
                title: "The Iconic Highland Train Journey", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Board the legendary <b>Blue Train</b> for what is widely considered the most beautiful rail journey in the world. As the train winds its way through the central highlands towards Ella, you'll be treated to spectacular views of waterfalls, deep valleys, and mist-shrouded forests.<br/><br/><i>(Note: Due to unpredictable circumstances, this train experience may occasionally be unavailable; in such cases, your journey will continue by private vehicle via the same scenic route).</i><br/><br/>This is a slow-travel experience at its finest, lean out the window to feel the cool mountain breeze and witness the stunning geography of the island unfolding before your eyes.<br/><br/><b>Overnight stay in Ella</b>", 
                activities: ["Breakfast", "Scenic Train Journey"],
                optionalActivities: [
                    "Picnic lunch on the train with local snacks",
                    "Sunset walk to Little Adam's Peak upon arrival in Ella",
                    "Rejuvenating Ayurvedic head massage in Ella"
                ] 
            },
            { 
                day: 4, 
                title: "Ella Rock & Mountain Vistas", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Tackle the rewarding hike to the summit of <b>Ella Rock</b>, a more challenging trek that pays off with some of the most dramatic views in the country.<br/><br/><b>In the afternoon:</b><br/><ul><li><i class='bi bi-house' style='color: #888; margin-right: 6px;'></i> Take it easy in <b>Ella town</b>, known for its bohemian cafes and friendly vibe.</li><li><i class='bi bi-signpost' style='color: #888; margin-right: 6px;'></i> Visit the colonial-era <b>Nine Arches Bridge</b> to watch the train pass through the jungle.</li><li><i class='bi bi-mountain' style='color: #888; margin-right: 6px;'></i> Relax with a breathtaking view of the Ella Gap.</li></ul><br/><b>Overnight stay in Ella</b>", 
                activities: ["Breakfast", "Guided Mountain Hike", "Private Transport"],
                optionalActivities: ["Flying Ravana Mega Zipline", "Traditional Cooking Class in Ella", "Evening Yoga with a mountain view"]
            },
            { 
                day: 5, 
                title: "Mountain Farewell & Departure", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.", 
                activities: ["Breakfast", "Scenic Descent"],
                optionalActivities: [
                    "Stop at Ravana Falls for photography and a cool dip",
                    "Visit a local spice and herbal garden en route",
                    "Authentic Sri Lankan breakfast experience in a village home"
                ] 
            }
        ],
        inclusions: ["Tea factory visit", "Train tickets", "Mountain hiking"],
        exclusions: ["Lunch", "Entrance fees", "Insurance"],
        routeMap: routeMapMistInfographic,
        reviews: mistReviews,
        rating: 4.7,
        ratingLabel: "Highly Rated",
        importantNotes: COMMON_NOTES
    },
    {
        id: 6,
        name: "3-Day Galle Fort Escape",
        days: "3 Days",
        description: "A quick but immersive journey into the colonial heart of Sri Lanka.",
        price: "$320",
        image: galleFortCover,
        itinerary: [
            { 
                day: 1, 
                title: "Colonial Grandeur & Sunset Ramparts", 
                desc: "Welcome to the historic <b>Galle Fort</b>, a UNESCO World Heritage site that perfectly preserves the island's colonial past. After settling into your boutique accommodation, step out to explore the cobblestone streets lined with Dutch-era villas.<br/><br/><b>Highlights of the day:</b><br/><ul><li><i class='bi bi-building' style='color: #888; margin-right: 6px;'></i> Walk among stunning <b>colonial architecture</b> and visit the historic Dutch Reformed Church.</li><li><i class='bi bi-sunset' style='color: #888; margin-right: 6px;'></i> Take a leisurely <b>Sunset Rampart Walk</b>, joining locals as the sun dips below the Indian Ocean.</li></ul><br/><b>Overnight stay in Galle Fort</b>", 
                activities: ["Fort Check-in", "Sunset Rampart Walk", "Colonial Sights"],
                optionalActivities: ["Cocktails at a heritage hotel", "Photography tour of colonial buildings", "Local street food tasting"]
            },
            { 
                day: 2, 
                title: "Artisan Streets & Boutique Shopping", 
                desc: "Spend the day diving deeper into the fort's unique character. <b>Galle Fort</b> is a hub for art and craftsmanship; explore the many galleries showcasing local talent, visit <b>traditional jewelry makers</b>, and browse boutique shops for high-quality <b>textiles and souvenirs</b>.<br/><br/>The fort is best explored on foot, allowing you to discover <b>hidden courtyards</b> and architectural details at your own pace. In the afternoon, perhaps enjoy a <b>traditional Sri Lankan tea experience</b> or find a quiet spot on the ramparts to watch the <b>local 'cliff divers'</b>, a true fort tradition.", 
                activities: ["Breakfast", "Boutique Shopping", "Art Gallery Visits", "Artisan Workshops"],
                optionalActivities: ["Traditional Sri Lankan tea experience", "Watch local 'cliff divers' performance", "Jewelry making demonstration"]
            },
            { 
                day: 3, 
                title: "Coastal Farewell & Departure", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.", 
                activities: ["Breakfast", "Coastal Dip"] 
            }
        ],
        inclusions: ["Galle Fort tour", "Boutique stay", "Local breakfast"],
        exclusions: ["Shopping", "Lunches", "Transport to Galle"],
        routeMap: routeMapGallePremium,
        reviews: galleReviews,
        rating: 4.8,
        ratingLabel: "Cultural Gem",
        physicalIntensity: 1,
        importantNotes: COMMON_NOTES
    },
    {
        id: 9,
        name: "Kandy Highlights",
        days: "1 Day",
        description: "A relaxing introduction to the cultural and natural beauty of Kandy, including the Temple of the Tooth, Kandy Lake, and Royal Botanical Gardens.",
        price: "$120",
        image: kandyDayImg,
        itinerary: [
            { 
                day: 1, 
                title: "Kandy Highlights", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.", 
                activities: ["Temple of the Tooth Visit", "Royal Botanical Gardens", "Cultural Dance Show", "Private Transport"] 
            }
        ],
        inclusions: ["Pick-up & Drop-off (within 1km of city)", "Temple of the Tooth visit", "Botanical Garden tour", "Cultural show tickets"],
        exclusions: ["Lunch", "Locations outside 1km radius", "Personal expenses"],
        routeMap: routeMapKandyPremium,
        reviews: kandyHighlightsReviews,
        rating: 4.6,
        ratingLabel: "Excellent",
        importantNotes: COMMON_NOTES
    },
    {
        id: 10,
        name: "Adam’s Peak Sunrise Quest",
        days: "2 Days / 1 Night",
        startLocation: "Kandy (Hotels or residences)",
        endLocation: "Nallathanniya / Kandy",
        description: "Experience one of Sri Lanka's most iconic pilgrimages with a comfortable private transfer from Kandy to Adam's Peak (Sri Pada). Whether you're climbing for the breathtaking sunrise, spiritual significance, or stunning mountain views, we'll provide safe and reliable transportation so you can enjoy the journey at your own pace.",
        price: "$280",
        image: adamsPeakImg,
        itinerary: [
            { 
                day: 1, 
                title: "2:00 PM – Pickup from Kandy & Scenic Drive", 
                desc: "Your driver will pick you up from your hotel or preferred location in Kandy. Sit back and enjoy the scenic drive through Sri Lanka's beautiful hill country.", 
                activities: ["Pickup from Kandy Hotel / Residence", "Private Air-Conditioned Transport", "Scenic Hill Country Drive"]
            },
            { 
                day: 1, 
                title: "5:30 PM – Arrive at Adam's Peak (Nallathanniya)", 
                desc: "Arrive in the Nallathanniya (Dalhousie) area and check in to your included hotel accommodation.<br/><br/><b>Hotel Included:</b> Comfortable overnight accommodation in Nallathanniya (Dalhousie) is provided as part of your package.<br/><br/>Spend the evening relaxing, having dinner at a local restaurant, and preparing for the overnight climb.", 
                activities: ["Arrive in Nallathanniya (Dalhousie)", "Check-in to Included Hotel", "Dinner & Pre-Climb Evening Rest"]
            },
            { 
                day: 2, 
                title: "2:00 AM – Begin the Ascent & Witness Sunrise", 
                desc: "Start your hike to the summit of Adam's Peak in time to witness the unforgettable sunrise from the top. Take your time exploring the summit before descending at your own pace.", 
                activities: ["2:00 AM Night Ascent to Summit", "Pilgrimage Stone Path Climb", "Unforgettable Sunrise at Peak", "Summit Exploration & Descent"] 
            },
            { 
                day: 2, 
                title: "9:00 AM – Return to Accommodation & Refresh", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>Return to your hotel, freshen up, enjoy a delicious included breakfast, and check out of your accommodation.", 
                activities: ["Return to Accommodation", "Freshen Up & Breakfast Included", "Hotel Check-out"] 
            },
            { 
                day: 2, 
                title: "11:00 AM – Return Journey to Kandy", 
                desc: "Meet your driver and begin the drive back through the scenic tea highlands.", 
                activities: ["Meet Private Driver", "Return Scenic Highland Drive"] 
            },
            { 
                day: 2, 
                title: "3:00 PM – Arrive & Drop-Off in Kandy", 
                desc: "Standard drop-off is in Kandy.<br/><br/><i>If you would like to be dropped off at another destination, we can arrange this for an additional fee, depending on the location.</i>", 
                activities: ["Kandy Hotel / Residence Drop-Off", "Custom Drop-Off Option Available"] 
            }
        ],
        inclusions: [
            "1 Night Hotel Accommodation in Nallathanniya (Dalhousie)",
            "Day 2 Breakfast included",
            "Private air-conditioned vehicle",
            "Professional and experienced driver",
            "Pickup from your hotel or preferred location in Kandy",
            "Return transportation from Adam's Peak",
            "Flexible schedule to suit your travel plans"
        ],
        exclusions: [
            "Entrance fees (if applicable)",
            "Meals and beverages (except Day 2 Breakfast)",
            "Guide services",
            "Personal expenses"
        ],
        routeMap: routeMapAdamsPeakPremium,
        reviews: adamsPeakReviews,
        rating: 4.7,
        ratingLabel: "Must Experience",
        physicalIntensity: 5,
        importantNotes: [
            "1 Night hotel accommodation in Nallathanniya and Day 2 breakfast are fully included in your package.",
            "If your pickup location is outside Kandy, we are happy to arrange transportation for an additional charge, depending on the pickup location.",
            "Wear comfortable hiking shoes and warm clothing, as temperatures at the summit can be cool before sunrise.",
            "Bring a flashlight or headlamp, drinking water, snacks, and a light jacket for the climb."
        ]
    },
    {
        id: 11,
        name: "Kitulgala White Water Rafting",
        days: "1 Day",
        description: "A thrilling adventure from Kandy to Kitulgala, home to the famous Kelani River rapids. Perfect for beginners and adrenaline seekers alike.",
        price: "$152",
        image: raftingImg,
        itinerary: [
            { 
                day: 1, 
                title: "River Rapids Adventure", 
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.", 
                activities: ["White Water Rafting", "Lunch", "Private Transfer"] 
            }
        ],
        inclusions: ["Private transport (Taxi/TukTuk)", "Rafting equipment & guide", "Traditional Lunch", "Hotel Pick-up & Drop-off"],
        exclusions: ["Personal expenses", "Tips", "Travel insurance"],
        routeMap: routeMapKitulgalaPremium,
        reviews: kitulgalaReviews,
        rating: 4.7,
        ratingLabel: "Thrill Seekers",
        physicalIntensity: 3,
        importantNotes: COMMON_NOTES
    },
    {
        id: 5,
        name: "Breathe Sri Lanka",
        days: "27 Days",
        location: "Kandy & Coast",
        description: "A complete 27-day island immersion combining culture, adventure, and meaningful community work. Journey through ancient temples in Kandy, hike emerald hills in Ella, relax on southern beaches, and dedicate 14 days to volunteering in Hikkaduwa.",
        price: "$1,155",
        image: breatheSriLankaImg,
        tags: ["volunteer", "impact", "giveback", "meaningful"],
        rating: 4.9,
        ratingLabel: "Volunteer Choice",
        isVolunteer: true,
        inclusions: [
            "Accommodation throughout the journey",
            "Meals as per itinerary",
            "Volunteer placement & coordination",
            "Cultural tours & entry fees",
            "Local guidance & orientation"
        ],
        exclusions: [
            "International flights & visa fees",
            "Travel insurance",
            "Personal expenses",
            "Return airport transfer"
        ],
        reviews: breatheSriLankaReviews,
        importantNotes: COMMON_NOTES
    },
    {
        id: 12,
        name: "Sigiriya & Elephant Safari Experience",
        days: "1 Day",
        description: "Experience the cultural heart and wildlife beauty of Sri Lanka in one unforgettable day. This premium day tour takes you from Kandy to the ancient Sigiriya Rock Fortress and on an exciting elephant safari in their natural habitat, starting and ending in Kandy.",
        price: "$200",
        image: sigiriyaSafariCover,
        itinerary: [
            {
                day: 1,
                title: "Sigiriya Rock & Elephant Safari Journey",
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.",
                activities: ["Sigiriya Rock Climbing", "Wild Elephant Safari", "Private Jeep Tour", "Private Transport"],
                optionalActivities: ["Traditional village lunch", "Herbal garden tour", "Wood carving workshop"]
            }
        ],
        inclusions: [
            "Private transportation (Starting & Ending in Kandy)",
            "Breakfast during the journey",
            "Safari Jeep experience",
            "Entrance fees for Sigiriya Rock and Safari",
            "Driver assistance"
        ],
        exclusions: [
            "Lunch and dinners",
            "Personal expenses",
            "Tips and gratuities"
        ],
        routeMap: routeMapWild,
        reviews: sigiriyaSafariReviews,
        rating: 4.8,
        ratingLabel: "Must Experience",
        physicalIntensity: 3,
        importantNotes: [
            "Departure time is flexible based on your preference and weather conditions.",
            ...COMMON_NOTES
        ]
    },
    {
        id: 13,
        name: "Sigiriya Nature & Culture Escape",
        days: "2 Days / 1 Night",
        description: "Experience the perfect combination of history, culture, nature, and wildlife during this unforgettable overnight journey through the cultural triangle of Sri Lanka. Starting and ending in Kandy, this tour includes visits to Dambulla Cave Temple, Pidurangala sunset hike, Sigiriya Sunrise climb, Matale Hindu Temple, and a wild elephant safari.",
        price: "$320",
        image: sigiriyaEscapeCover,
        itinerary: [
            {
                day: 1,
                title: "Kandy to Sigiriya | Cave Temple & Pidurangala sunset",
                desc: "<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.",
                activities: ["Dambulla Cave Temple Visit", "Pidurangala Sunset Hike", "Guesthouse Check-in", "Local Dinner"],
                optionalActivities: ["Traditional wood carving workshop", "Ayurvedic massage in Dambulla"]
            },
            {
                day: 2,
                title: "Sunrise, Wildlife & Return to Kandy",
                desc: `<strong>Early Morning: Sigiriya Sunrise Climb</strong><br/>
                Rise early and proceed to the majestic <b>Sigiriya Rock Fortress</b>. Scale the rock steps in the cool morning air to witness the amazing sunrise over the treetops. Explore the ancient ruins of King Kassapa's palace, the water gardens, and the famous Lion's Paw gate, enjoying one of Sri Lanka's most iconic and historic views.<br/><br/>

                <strong>Morning: Breakfast & Check-Out</strong><br/>
                Return to the guesthouse to enjoy a fresh, hearty breakfast. Collect your belongings and check out of your stay.<br/><br/>

                <strong>Afternoon: Wild Elephant Safari</strong><br/>
                Set off for an exciting <b>wildlife safari experience</b> in a national park near Sigiriya. Hop into a private safari jeep to witness the majestic wild giants of Sri Lanka—elephants in their natural habitat—along with monkeys, crocodiles, exotic birds, and beautiful landscapes.<br/><br/>

                <strong>Return Journey & Matale Temple</strong><br/>
                Embark on the drive back to Kandy. On the way, visit the famous <b>Matale Hindu Temple</b>, experiencing its towering colorful gopuram architecture and spiritual atmosphere. Arrive back in Kandy in the evening and drop off at your Kandy accommodation.`,
                activities: ["Sigiriya Sunrise Climb", "Guesthouse Breakfast", "Elephant Jeep Safari", "Matale Hindu Temple Visit", "Private Transport"],
                optionalActivities: ["Spice & Herbal Garden Tour in Matale", "Village Tuk-Tuk Food Tour"]
            }
        ],
        inclusions: [
            "Private transportation (Starting & Ending in Kandy)",
            "Guesthouse Accommodation (1 Night)",
            "Breakfast & Dinner at the guesthouse",
            "Private Safari Jeep experience",
            "Entrance fees for all mentioned sites (Dambulla, Pidurangala, Sigiriya, Safari, Matale)",
            "Driver assistance"
        ],
        exclusions: [
            "Lunches",
            "Personal expenses",
            "Tips and gratuities"
        ],
        routeMap: routeMapSigiriyaEscape,
        reviews: sigiriyaEscapeReviews,
        rating: 4.9,
        ratingLabel: "Must Experience",
        physicalIntensity: 4,
        importantNotes: [
            "Departure time is flexible based on your preference and weather conditions.",
            ...COMMON_NOTES
        ]
    }
];

export const TOURS_DATA = tourPackages;
