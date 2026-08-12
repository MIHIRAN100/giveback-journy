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
import routeMapSouthern7Day from '../assets/route_map_southern_7day_new.png';
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
        description: "A masterfully crafted 7-day expedition designed to showcase the very best of Sri Lanka in one unforgettable week. Perfectly balanced between ancient UNESCO heritage sites, misty highland train rides, wildlife encounters, and tropical beach relaxation, this signature itinerary is ideal for first-time visitors, solo travelers, couples, and families alike.\n\nYour adventure begins on the coastal shores of Negombo before heading inland toward the island's famed Cultural Triangle. Stand in awe of the ancient 5th-century Sigiriya Lion Rock Fortress at sunrise, trek up Pidurangala for breathtaking valley views, scale sacred cave temples in Dambulla, and embark on an exciting jeep safari to spot herds of wild Asian elephants in their natural habitat.\n\nTransitioning into the cool, lush hill country, immerse yourself in Sri Lanka's spiritual heart in Kandy with a visit to the sacred Temple of the Tooth Relic. Board the legendary scenic mountain train as it winds past rolling emerald tea estates and cascading waterfalls toward the bohemian mountain town of Ella, home to the iconic Nine Arches Bridge and Little Adam's Peak.\n\nFinally, descend to the pristine southern coastline in Hikkaduwa. Unwind along golden palm-fringed beaches, stroll through the historic cobblestone streets of Galle Fort at sunset, and savor fresh seafood by the ocean waves. Guided by an experienced private driver with air-conditioned comfort throughout, this 7-day journey offers an authentic, seamless, and deeply immersive Sri Lankan experience.",
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
        days: "1 Day (8:30 AM – Drop-off)",
        startLocation: "Kandy (Hotels or residences)",
        endLocation: "Pinnawala / Kandy",
        description: "Embark on a deeply meaningful 1-day sanctuary and cultural journey starting and ending in Kandy. Specially designed for conscious travelers and animal lovers, this tour offers a rare, ethical perspective on elephant welfare alongside classic island heritage.\n\nYour day begins at a small-scale elephant rescue and rehabilitation center dedicated to providing individualized care, physical therapy, and emotional healing for rescued working elephants. Learn about Sri Lankan elephant history, assist dedicated caretakers with daily feeding, and observe these gentle giants in a peaceful, natural setting with a strict no-riding policy.\n\nFollowing a delicious traditional packed lunch along a scenic riverbank, visit the world-renowned Pinnawala Elephant Orphanage to witness large herds bathing and splashing in the river. Conclude your day trip with a drive back into Kandy, stopping at panoramic city viewpoints and traditional herbal gardens for a rich, well-rounded single-day experience.",
        price: "$125",
        image: budgetPromoImg,
        itinerary: [
            { 
                day: 1, 
                title: "08:30 AM – Departure from Kandy & Small Rescue Center", 
                desc: "Meet your driver at your accommodation at 08:30 AM and begin your journey to a small elephant rescue and rehabilitation center.<br/><br/>Unlike large sanctuaries, this center operates on a very small scale and usually cares for only one elephant at a time, allowing the team to provide personalized attention and dedicated care. In Sri Lanka, domesticated elephants have historically played an important role in religious ceremonies, traditional processions, and local communities. Unfortunately, some elephants have suffered from years of hard work, inadequate care, and poor living conditions.<br/><br/>This rescue center focuses on providing a safe and peaceful environment for elephants in need, helping them recover physically and emotionally. By visiting, you will support a meaningful conservation initiative that prioritizes animal welfare and ethical treatment.<br/><br/>During your visit, you will have the opportunity to learn about these majestic and sacred animals, observe them up close, and gain a deeper understanding of their behaviour and history. You will also have the chance to feed the elephant and interact with its caretakers.<br/><br/><b>Please note:</b> Elephant riding is strictly prohibited at the center, and the project does not support any activities that involve riding or exploiting elephants.", 
                activities: ["08:30 AM Hotel Pickup", "Small Elephant Rescue Center", "Elephant Care & Feeding", "Ethical Welfare & History", "Strict No-Riding Policy"]
            },
            { 
                day: 1, 
                title: "11:30 AM – Riverside Lunch Experience", 
                desc: "Enjoy a traditional Sri Lankan packed lunch beside a beautiful riverside setting. Prepared with local flavors and fresh ingredients, this meal offers an authentic taste of Sri Lankan cuisine and provides a unique cultural experience surrounded by nature.", 
                activities: ["Riverside Packed Lunch", "Traditional Sri Lankan Cuisine", "Nature & River Vistas"]
            },
            { 
                day: 1, 
                title: "12:00 PM – Farewell to the Rescue Center", 
                desc: "After lunch, say goodbye to the elephant and the dedicated team before continuing your journey to the world-famous Pinnawala Elephant Orphanage.", 
                activities: ["Farewell to Rescue Center", "Transfer to Pinnawala"]
            },
            { 
                day: 1, 
                title: "01:15 PM – Visit to Pinnawala Elephant Orphanage", 
                desc: "Arrive at Pinnawala Elephant Orphanage, one of Sri Lanka's most iconic wildlife attractions and home to one of the world's largest groups of captive elephants.<br/><br/>Established in 1975, the orphanage provides shelter and care for orphaned, injured, and abandoned elephants. Here, you will witness the afternoon feeding session and observe these magnificent animals as they interact with one another in a natural and spacious environment.<br/><br/>Spend time watching the elephants and learning about their daily lives and the conservation efforts carried out by the orphanage.<br/><br/><b>Please note:</b> Visitors are not permitted to touch the elephants during this experience.", 
                activities: ["Pinnawala Elephant Orphanage", "Afternoon Feeding Session", "Large Herd Observation", "Conservation Insights"]
            },
            { 
                day: 1, 
                title: "03:00 PM – Departure Towards Kandy & Cultural Stops", 
                desc: "Leave Pinnawala and begin your return journey to Kandy.<br/><br/><b>Traditional Herbal Garden Experience:</b><br/>On the way back, stop at a traditional Sri Lankan herbal garden, where you will discover the island's rich heritage of Ayurvedic medicine and natural healing practices. During your visit, you will learn about a variety of medicinal plants, herbs, and spices that have been used in Sri Lankan culture for centuries to promote health and well-being.<br/><br/><b>Kandy Viewpoint:</b><br/>Continue to the famous Kandy Viewpoint, located high above the city. From here, you will enjoy breathtaking panoramic views of Kandy, surrounded by lush green hills and centered around the beautiful Kandy Lake. Take in the stunning scenery and capture unforgettable photographs.", 
                activities: ["Return Journey to Kandy", "Ayurvedic Herbal Garden Tour", "Kandy Viewpoint & Lake Vistas", "Photography Stop"]
            },
            { 
                day: 1, 
                title: "Drop-off at Your Accommodation in Kandy", 
                desc: "After enjoying the spectacular views, you will be transferred back to your accommodation.<br/><br/><b>End of the program for the day.</b>", 
                activities: ["Hotel / Residence Drop-Off", "End of Day Program"]
            }
        ],
        inclusions: [
            "Private vehicle with an experienced driver",
            "Pickup from your accommodation in Kandy (08:30 AM)",
            "Visit to Small Elephant Rescue Center (feeding & care)",
            "Traditional Sri Lankan packed lunch by the riverside",
            "Pinnawala Elephant Orphanage visit",
            "Traditional Herbal & Ayurvedic Garden tour",
            "Kandy Viewpoint photo stop",
            "Return drop-off at your accommodation"
        ],
        exclusions: [
            "Entrance fees (Pinnawala & Rescue Center)",
            "Personal expenses & beverages",
            "Tips and gratuities",
            "Guide services"
        ],
        routeMap: routeMapKandyPinnawalaPremium,
        reviews: kandyReviews,
        rating: 4.8,
        ratingLabel: "Must Experience",
        importantNotes: [
            "Elephant Riding Policy: Elephant riding is strictly prohibited at the rescue center and is not supported in any form.",
            "Pinnawala Interaction Policy: Visitors are not permitted to touch the elephants at Pinnawala Elephant Orphanage.",
            "Pickup & Drop-off: Standard pickup (08:30 AM) and drop-off are in Kandy. Additional charges apply for transfers outside Kandy.",
            ...COMMON_NOTES
        ]
    },
    {
        id: 2,
        name: "Southern Sun & Beach Escape",
        days: "7 Days / 6 Nights",
        description: "Embark on an epic 7-day coastal and island escape through the sun-drenched south and misty central highlands of Sri Lanka. Expertly curated for beach lovers, adventure seekers, wildlife enthusiasts, and cultural explorers, this immersive tour offers a seamless blend of tropical relaxation, vibrant local traditions, breathtaking mountain landscapes, and meaningful travel connections.\n\nYour expedition begins along the golden, palm-fringed shores of Hikkaduwa and Mirissa. Relax on pristine sand beaches, swim in turquoise waters alongside giant sea turtles, stand atop iconic Coconut Tree Hill at sunset, and explore the historic 16th-century Dutch fortress city of Galle with its charming cobblestone alleys, artisan boutiques, and rampart ocean vistas.\n\nLeaving the ocean behind, journey inland through the wild savannah plains of Udawalawe, home to free-roaming herds of wild Asian elephants and exotic birdlife. Experience the thrill of an early morning jeep safari, capturing photographs of these magnificent creatures in their natural habitat. Ascend into the dramatic, cloud-wrapped mountain sanctuary of Ella, where you'll trek up Little Adam's Peak for panoramic valley views, visit the world-famous colonial Nine Arches Bridge nestled deep in the jungle, and marvel at cascading waterfalls. The crisp mountain air and stunning vistas provide the perfect backdrop for relaxation and exploration.\n\nHighlighting your central highland adventure, board the world-famous Blue Train as it winds through endless rolling emerald tea estates and pine-scented valleys toward Kandy—the sacred cultural heartland of Sri Lanka. Conclude your tour exploring the revered Temple of the Tooth Relic and lush Royal Botanical Gardens, with flexible options to seamlessly transition into local Give Back Journey volunteering projects. You will also have the opportunity to savor authentic Sri Lankan cuisine, meet welcoming local communities, and create memories that will last a lifetime. Featuring private air-conditioned transport, daily breakfast, and local guidance throughout, this 7-day escape is the ultimate Sri Lankan tropical holiday.",
        price: "$549",
        image: southernCover,
        itinerary: [
            { 
                day: 1, 
                title: "Welcome to Hikkaduwa & Sunset at Galle Fort", 
                desc: "<b>Overnight: Hikkaduwa</b><br/><br/>Your Sri Lankan adventure begins on the golden south coast.<br/><br/><b><i class='bi bi-geo-alt-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 1: Hikkaduwa Beach Arrival & Check In</b><br/>Settle into your accommodation in Hikkaduwa, famous for its surfing culture, coral reefs, and laid back coastal atmosphere.<br/><br/><b><i class='bi bi-bank2' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 2: UNESCO Galle Fort Exploration</b><br/>Travel to the historic 16th century fortress city of Galle. Wander through charming Dutch colonial streets filled with artisan shops, boutique cafés, and historic architecture.<br/><br/><b><i class='bi bi-sun-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 3: Sunset Rampart Promenade</b><br/>Enjoy a sunset walk along the ancient fort walls overlooking the Indian Ocean.", 
                activities: ["Hikkaduwa Beach Town", "Galle Fort Exploration", "Sunset Views from Fort Walls", "Colonial History & Local Culture"],
                optionalActivities: ["Boutique Cafe Exploration inside Fort", "Traditional Gemstone Shop Visit"]
            },
            { 
                day: 2, 
                title: "Hikkaduwa Marine Experience & Beach Discovery", 
                desc: "<b><i class='bi bi-cup-hot-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Breakfast included</b> | <b>Overnight: Hikkaduwa</b><br/><br/><b><i class='bi bi-water' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 1: Mangrove River Safari (Optional)</b><br/>Embark on a morning river boat safari through lush mangrove waterways, spotting local birdlife and river monitor lizards.<br/><br/><b><i class='bi bi-life-preserver' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 2: Coral Reef & Turtle Sanctuary</b><br/>Discover Hikkaduwa's marine sanctuary. Swim in clear shallow waters where sea turtles frequently visit the shore.<br/><br/><b><i class='bi bi-umbrella-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 3: Beachside Leisure & Local Cafés</b><br/>Relax on golden sands, explore beachfront surf shops, or indulge in an authentic Ayurvedic massage.", 
                activities: ["Breakfast", "Tropical Beaches", "Marine Life Experience", "Relaxed Coastal Lifestyle"],
                optionalActivities: [
                    "Mangrove River Safari",
                    "Turtle Watching on shore",
                    "Snorkeling at Hikkaduwa Coral Reef",
                    "Beginner Surf Lessons",
                    "Scuba Diving",
                    "Ayurvedic Treatments"
                ]
            },
            { 
                day: 3, 
                title: "Mirissa Beach Escape", 
                desc: "<b><i class='bi bi-cup-hot-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Breakfast included</b> | <b>Overnight: Mirissa</b><br/><br/><b><i class='bi bi-car-front-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 1: Southern Coastal Scenic Drive</b><br/>Journey along Sri Lanka's postcard perfect southern shoreline towards the bay of Mirissa.<br/><br/><b><i class='bi bi-camera-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 2: Coconut Tree Hill Viewpoint</b><br/>Visit the island's iconic red cliff headland topped with towering palm trees for panoramic ocean photos.<br/><br/><b><i class='bi bi-sun-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 3: Mirissa Bay Sunset & Beach Dining</b><br/>Unwind on the soft crescent beach of Mirissa and watch the sunset from vibrant beachfront dining spots.", 
                activities: ["Breakfast", "Private Transport", "Scenic Coastal Journey", "Mirissa Beach", "Coconut Tree Hill", "Sunset Experience"],
                optionalActivities: [
                    "Whale Watching Safari (Seasonal)",
                    "Surfing in Mirissa Bay",
                    "Beachside Seafood Dining"
                ]
            },
            { 
                day: 4, 
                title: "Wildlife Safari Adventure & Journey to Ella", 
                desc: "<b><i class='bi bi-cup-hot-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Breakfast included</b> | <b>Overnight: Ella</b><br/><br/><b><i class='bi bi-compass-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 1: Udawalawe National Park Wildlife Safari (Optional)</b><br/>Leave the coast behind and head into the wild savannah. Join an open top jeep safari to witness wild elephant herds in their natural habitat.<br/><br/><b><i class='bi bi-geo-alt-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 2: Scenic Mountain Countryside Ascent</b><br/>Ascend into the misty green hills as the climate cools and tropical forests transform into emerald tea estates.<br/><br/><b><i class='bi bi-house-door-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 3: Arrival in Ella Mountain Village</b><br/>Check in to your hillside accommodation and soak up the laid back mountain charm of Ella town.", 
                activities: ["Breakfast", "Private Transport", "Wildlife Countryside Drive", "Elephant Country", "Scenic Mountain Drive", "Ella Arrival"],
                optionalActivities: [
                    "Udawalawe National Park Jeep Safari (Approx. USD 40 to 45 entrance + USD 50 to 60 jeep per vehicle)"
                ]
            },
            { 
                day: 5, 
                title: "Discover Ella: Mountains & Tea Country", 
                desc: "<b><i class='bi bi-cup-hot-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Breakfast included</b> | <b>Overnight: Ella</b><br/><br/><b><i class='bi bi-signpost-split-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 1: Little Adam's Peak Hike</b><br/>Take a refreshing morning hike up Little Adam's Peak for panoramic views over the famous Ella Gap.<br/><br/><b><i class='bi bi-train-front-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 2: Nine Arches Bridge Landmark</b><br/>Walk to the historic colonial Nine Arches Bridge nestled deep in the mountain jungle to watch the train pass.<br/><br/><b><i class='bi bi-water' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 3: Ravana Waterfalls & Tea Estates</b><br/>Visit cascading Ravana Falls and enjoy the scenic tea plantation landscapes surrounding Ella.", 
                activities: ["Breakfast", "Little Adam's Peak Hike", "Nine Arches Bridge", "Ravana Falls", "Tea Plantation Views"],
                optionalActivities: [
                    "Tea Factory Visit & Tasting",
                    "Flying Ravana Zipline Adventure",
                    "Traditional Sri Lankan Cooking Class",
                    "Local Village Walk"
                ]
            },
            { 
                day: 6, 
                title: "Scenic Train Journey to Kandy: Cultural Capital", 
                desc: "<b><i class='bi bi-cup-hot-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Breakfast included</b> | <b>Overnight: Kandy</b><br/><br/><b><i class='bi bi-train-front-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 1: Iconic Hill Country Train Ride</b><br/>Board the legendary blue mountain train and ride through endless rolling tea estates, pine forests, and mountain viaducts.<br/><br/><b><i class='bi bi-bank2' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 2: Arrival in Kandy Sacred City</b><br/>Arrive in Sri Lanka's spiritual capital, surrounded by green mountains and the tranquil Kandy Lake.<br/><br/><b><i class='bi bi-music-note-beamed' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 3: Cultural Evening & Traditional Performance</b><br/>Explore local markets or choose to attend a traditional Kandyan cultural dance and fire walking show.", 
                activities: ["Breakfast", "Scenic Train Ticket", "Tea Country Rail Views", "Arrival in Kandy", "Cultural Introduction", "Private Transport"],
                optionalActivities: [
                    "Kandy Cultural Dance & Fire Walking Show",
                    "Kandy Evening Market Walk"
                ]
            },
            { 
                day: 7, 
                title: "Explore Kandy & Continue Your Sri Lankan Journey", 
                desc: "<b><i class='bi bi-cup-hot-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Breakfast included</b> | <b>End of Tour in Kandy</b><br/><br/><b><i class='bi bi-bank2' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 1: Temple of the Sacred Tooth Relic</b><br/>Visit Sri Lanka's most sacred Buddhist temple located beside Kandy Lake.<br/><br/><b><i class='bi bi-tree-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 2: Royal Botanical Gardens Peradeniya</b><br/>Stroll through world-famous botanical grounds featuring giant Java fig trees and orchid houses.<br/><br/><b><i class='bi bi-heart-fill' style='color: var(--primary-green); margin-right: 6px;'></i> Stop 3: Transition to Give Back Journey Volunteering</b><br/>Extend your adventure seamlessly by joining community initiatives (teaching, wildlife, medical, or women's empowerment) starting directly from Kandy!", 
                activities: ["Breakfast", "Kandy Cultural Exploration", "Optional Give Back Journey Transition"],
                optionalActivities: [
                    "Join Give Back Journey Volunteer Programs (Teaching, Medical, Wildlife)",
                    "Private Transfer to Airport or Next Destination"
                ]
            }
        ],
        inclusions: [
            "6 nights shared accommodation (max 3 per room)",
            "Daily breakfast",
            "Transportation between destinations",
            "Scenic train journey ticket through hill country",
            "Local assistance throughout the journey",
            "Support with arranging optional activities"
        ],
        exclusions: [
            "International flights",
            "Airport transfers",
            "Lunch and dinner",
            "National park entrance fees",
            "Safari jeep charges",
            "Attraction entrance tickets",
            "Optional activities & Personal expenses"
        ],
        routeMap: routeMapSouthern7Day,
        reviews: coastalReviews,
        rating: 4.9,
        ratingLabel: "Small Group Favorite",
        physicalIntensity: 2,
        importantNotes: [
            "Price is based on minimum 5 participants and shared accommodation (max 3 people per room).",
            "For smaller groups, solo travelers, families, or private departures, customized pricing is available.",
            "Room upgrades (Private room or Twin sharing) are available at an additional cost depending on availability.",
            ...COMMON_NOTES
        ]
    },
    { 
        id: 3, 
        name: "Highlands & Southern Coast", 
        days: "7 Days / 6 Nights",
        description: "Experience the ultimate adrenaline-fueled and nature-rich 7-day expedition across Sri Lanka's most exhilarating landscapes. Meticulously designed for adventure seekers, outdoor enthusiasts, and nature lovers, this action-packed itinerary seamlessly connects dense tropical rainforests, misty high-altitude tea plantations, thrilling wildlife safaris, and golden Indian Ocean beaches.\n\nYour journey kicks off in the jungle paradise of Kitulgala, famous as the setting for the classic film 'Bridge on the River Kwai'. Navigate Grade 3 white-water rapids along the roaring Kelani River before climbing into the cool, tea-scented highlands of Ella. Trek through lush green valleys to Little Adam's Peak, marvel at the iconic colonial Nine Arches Bridge as mountain trains rumble past, and stand before cascading waterfalls.\n\nVenture south into the dense dry-zone wilderness of Yala National Park, world-famous for having one of the highest densities of leopards on Earth. Board an open-top 4x4 safari jeep to track elusive Sri Lankan leopards, sloth bears, wild Asian elephants, mugger crocodiles, and vibrant bird species in their untamed natural habitat.\n\nConclude your 7-day adventure by descending to the vibrant coastal paradise of Hikkaduwa. Unwind on golden sands, swim with wild sea turtles in crystal-clear waters, and explore the historic 16th-century Dutch ramparts of Galle Fort at sunset. With dedicated private transport, professional local guidance, and daily breakfast included, this tour delivers the perfect harmony of heart-pumping thrill and coastal serenity.",
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
        description: "Venture deep into the serene, emerald heart of Sri Lanka on this immersive 5-day mountain escape through the central highlands. Crafted for nature lovers, hikers, and travelers seeking a cool, refreshing reprieve from the tropical heat, this journey showcases the island's most breathtaking elevated landscapes.\n\nStarting in the sacred hillside city of Kandy, visit the revered Temple of the Tooth Relic before ascending into the misty, pine-scented tea valleys of Nuwara Eliya, affectionately known as 'Little England'. Explore colonial heritage estates, witness traditional tea plucking, and sample authentic Ceylon single-origin teas.\n\nHighlighting your highland adventure, board the world-famous Blue Train for an epic rail journey through dramatic mountain passes, cascading waterfalls, and cloud forests to Ella. Challenge yourself with a summit trek up Ella Rock, walk across the jungle-clad Nine Arches Bridge, and enjoy sweeping vistas of the Ella Gap. Complete with private transfers, hand-picked hillside stays, and daily breakfast, this 5-day tour is the ultimate highland retreat.",
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
        description: "Step back in time with a charming 3-day romantic and cultural getaway to the historic Dutch Fort of Galle, one of Asia's best-preserved UNESCO World Heritage fortified cities. Tailored for history lovers, culture enthusiasts, and travelers looking for a refined coastal retreat, this short escape captures the timeless beauty and bohemian allure of Sri Lanka's southern coast.\n\nNestled within centuries-old coral-and-granite ramparts, your stay offers an intimate look into living history. Stroll along peaceful cobblestone avenues lined with colonial Dutch villas, whitewashed churches, vibrant art galleries, and chic boutique cafes. Watch local artisans craft fine handmade lace, visit traditional gemstone workshops, and marvel at the iconic Galle Lighthouse standing guard over the Indian Ocean.\n\nAs golden hour approaches, join locals and fellow travelers atop the massive stone ramparts for an unforgettable sunset walk, enjoying panoramic ocean views and watching daring cliff divers leap into the turquoise waves below. Complete with charming boutique accommodation, authentic local dining experiences, and total relaxation by the ocean, this 3-day retreat is the perfect short escape.",
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
        name: "Kandy Highlights Full-Day Tour",
        days: "1 Day",
        startLocation: "Kandy (Hotels or residences)",
        endLocation: "Kandy",
        description: "Discover the rich spiritual heritage, royal history, and lush mountain landscapes of Sri Lanka's cultural capital on this comprehensive full-day Kandy tour. Designed for travelers who want to absorb all of Kandy's highlights in a single day, this private tour provides maximum flexibility and personal comfort.\n\nExplore the world-renowned Royal Botanical Gardens in Peradeniya, home to over 4,000 tropical plant species, giant Java fig trees, and breathtaking orchid houses. Drive up to panoramic hilltop viewpoints overlooking Kandy Lake and surrounding mountain ranges, with optional stops at traditional gemstone lapidaries, wood carving workshops, and handmade batik studios.\n\nIn the late afternoon, visit the sacred Bahirawakanda Giant Buddha statue perched high above the city for sunset views, followed by an authentic hands-on Sri Lankan cooking lesson and home-cooked dinner with a local Kandyan family. Accompanied by an experienced private driver throughout, this full-day tour offers an authentic, hassle-free introduction to Kandy.",
        price: "$130",
        image: kandyDayImg,
        itinerary: [
            { 
                day: 1, 
                title: "8:30 AM – Pickup from Kandy Hotel / Residence", 
                desc: "Your driver will pick you up from your hotel or preferred location in Kandy. Relax and enjoy a comfortable journey as you begin exploring Sri Lanka's central highlands.", 
                activities: ["Pickup from Kandy Hotel / Residence", "Private Transport", "Scenery Drive in Kandy"]
            },
            { 
                day: 1, 
                title: "11:00 AM – Royal Botanical Gardens, Peradeniya", 
                desc: "Stroll through one of Asia's most famous botanical gardens, home to thousands of species of tropical plants, orchids, towering palm trees, and giant bamboo.", 
                activities: ["Peradeniya Royal Botanical Gardens", "Orchid House & Giant Bamboo", "Tropical Flora Stroll"]
            },
            { 
                day: 1, 
                title: "1:30 PM – Lunch Break", 
                desc: "Enjoy lunch at a local restaurant of your choice. Your driver will be happy to recommend popular dining options.", 
                activities: ["Lunch Break", "Local Driver Dining Recommendations"]
            },
            { 
                day: 1, 
                title: "2:30 PM – Kandy View Point & Batik Factory (Optional)", 
                desc: "Take in panoramic views of Kandy City, the surrounding mountains, and Kandy Lake—an ideal stop for memorable photographs. You can also take an optional stop at a traditional local Batik factory to see how colorful wax-resist dyed textiles are handmade.", 
                activities: ["Panoramic Kandy City View", "Surrounding Mountain Vistas", "Kandy Lake Scenic Photography", "Batik Factory Visit (Optional)"]
            },
            { 
                day: 1, 
                title: "3:30 PM – Gem Museum or Wood Carving Centre (Optional)", 
                desc: "Choose to visit a local gem museum or wood carving workshop to learn about Sri Lanka's rich heritage and traditional artisan craftsmanship.", 
                activities: ["Gem Museum & Lapidary (Optional)", "Wood Carving Workshop (Optional)"]
            },
            { 
                day: 1, 
                title: "5:30 PM – Bahirawakanda Buddha Statue & Sunset Vistas", 
                desc: "Visit the iconic giant Buddha statue perched on the hill overlooking Kandy, enjoying breathtaking panoramic views of the city as the sun begins to set.", 
                activities: ["Giant Bahirawakanda Buddha Statue", "Panoramic City Sunset View", "Hilltop Exploration"]
            },
            { 
                day: 1, 
                title: "6:30 PM – Cooking Lesson with a Local Family, Dinner & Return", 
                desc: "Enjoy an authentic Sri Lankan cooking lesson with a local family, learning traditional culinary secrets and spices. A delicious home-cooked dinner is included at the same location. After dinner, your driver will begin the return journey.<br/><br/><b>Drop-off:</b> Your driver will drop you off at your hotel or preferred location in Kandy.<br/><i>If you would like to be dropped off at another destination, we are happy to arrange this for an additional fee, depending on the location.</i>", 
                activities: ["Cooking Lesson with Local Family", "Dinner Included with Local Family", "Authentic Sri Lankan Cuisine", "Return Transportation", "Kandy Hotel / Residence Drop-Off"]
            }
        ],
        inclusions: [
            "All entrance tickets to mentioned places",
            "Private transportation",
            "Professional and experienced driver",
            "Pickup and drop-off within Kandy",
            "Flexible itinerary with optional stops"
        ],
        exclusions: [
            "Meals and beverages",
            "Guide services",
            "Personal expenses"
        ],
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
        description: "Embark on an unforgettable journey to Sri Pada (Adam's Peak), one of Sri Lanka's most sacred and breathtaking mountain summits standing tall at 2,243 meters above sea level.\n\nThis 2-day overnight adventure takes you from Kandy through misty tea country and cascading waterfalls to Nallathanniya (Dalhousie) at the base of the peak. After checking in and resting at your included hotel accommodation, you'll start the midnight ascent under starry skies to reach the summit before dawn.\n\nAs the first light breaks, witness the legendary sunrise over Sri Lanka's central highlands and the famous triangular shadow of the sacred peak projected across the surrounding clouds. Whether climbing during the vibrant pilgrimage season (December to May) or exploring the serene off-season, our package includes private transfers, dedicated driver support, hotel stay, and breakfast for a seamless, rewarding quest.",
        price: "$280",
        image: adamsPeakImg,
        itinerary: [
            { 
                day: 1, 
                title: "2:00 PM – Pickup from Kandy & Scenic Drive", 
                desc: "Your driver will pick you up from your hotel or preferred location in Kandy. Sit back and enjoy the scenic drive through Sri Lanka's beautiful hill country.", 
                activities: ["Pickup from Kandy Hotel / Residence", "Private Transport", "Scenic Hill Country Drive"]
            },
            { 
                day: 1, 
                title: "5:30 PM – Arrive at Adam's Peak (Nallathanniya)", 
                desc: "Arrive in the Nallathanniya (Dalhousie) area and check in to your included hotel accommodation.<br/><br/><b>Hotel Included:</b> Comfortable overnight accommodation in Nallathanniya (Dalhousie) is provided as part of your package.<br/><br/>Spend the evening relaxing, enjoying dinner at a local restaurant (dinner is not included), and preparing for the overnight climb.", 
                activities: ["Arrive in Nallathanniya (Dalhousie)", "Check-in to Included Hotel", "Pre-Climb Evening Rest (Dinner Not Included)"]
            },
            { 
                day: 2, 
                title: "2:00 AM – Begin the Ascent & Witness Sunrise", 
                desc: "Start your hike to the summit of Adam's Peak in time to witness the unforgettable sunrise from the top. Take your time exploring the summit before descending at your own pace.<br/><br/><b>Essential Preparation & Season Guidance:</b><br/>• <b>Climbing Season & Timing:</b> The official pilgrimage season runs from December to May (drier weather, path lights lit, tea stalls open along the trail). The off-season is from June to November. The night climb begins around 2:00 AM to reach the 2,243m summit before sunrise.<br/>• <b>Cold & Rainy Weather:</b> It can be rainy and gets very cold as you ascend higher towards the summit. Be sure to bring warm jackets, hoodies, rain protection, and extra layers.<br/>• <b>Path Night Lights:</b> Trail lights are illuminated during season months, but may be turned off during the off-season, so please bring a reliable flashlight or headlamp.", 
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
            "Private transport vehicle",
            "Professional and experienced driver",
            "Pickup from your hotel or preferred location in Kandy",
            "Return transportation from Adam's Peak",
            "Flexible schedule to suit your travel plans"
        ],
        exclusions: [
            "Entrance fees (if applicable)",
            "Dinner, lunches and beverages (except Day 2 Breakfast)",
            "Guide services",
            "Personal expenses"
        ],
        routeMap: routeMapAdamsPeakPremium,
        reviews: adamsPeakReviews,
        rating: 4.7,
        ratingLabel: "Must Experience",
        physicalIntensity: 5,
        importantNotes: [
            "1 Night hotel accommodation in Nallathanniya and Day 2 breakfast are fully included in your package (Dinner is not included).",
            "Season & Timing: The official pilgrimage season runs from December to May (drier weather, lit path, open tea stalls). Off-season runs from June to November (heavier rain, unlit path, closed stalls). The climb starts at 2:00 AM to reach the summit for sunrise.",
            "Weather & Clothing: Adam's Peak can be rainy, and temperatures drop significantly as you climb higher and higher towards the summit. Please bring warm jackets, hoodies, rain jackets, and warm extra layers.",
            "Path Night Lights & Off-Season Climbing: During off-season months, trail lights along the mountain path are often turned off, so it is essential to bring a reliable flashlight, headlamp, or torch.",
            "Wear sturdy, comfortable hiking shoes and carry sufficient drinking water, snacks, and a light backpack for the night climb.",
            "If your pickup location is outside Kandy, we are happy to arrange transportation for an additional charge, depending on your location.",
            ...COMMON_NOTES
        ]
    },
    {
        id: 11,
        name: "Kitulgala White Water Rafting",
        days: "1 Day",
        startLocation: "Kandy (Hotels or residences)",
        endLocation: "Kitulgala / Kandy",
        description: "Unleash your inner adventurer on an exhilarating 1-day white-water rafting and jungle expedition to Kitulgala, Sri Lanka's premier outdoor sports haven. Located along the scenic banks of the Kelani River—famous as the filming location for the Oscar-winning movie 'The Bridge on the River Kwai'—this day trip promises heart-pumping thrills in a pristine rainforest setting.\n\nUnder the guidance of certified safety experts, navigate Grade 3 rapids as you splash through turbulent river bends, pristine jungle gorges, and refreshing natural pools. After your river run, recharge with a hearty, authentic Sri Lankan rice-and-curry buffet lunch beside the riverbank.\n\nIn the afternoon, embark on a forest trek to the historic Belilena Cave, one of South Asia's most significant prehistoric archaeological sites, where remains of 30,000-year-old 'Balangoda Man' were discovered. Complete with private round-trip transportation from Kandy and all safety gear, this day trip offers the ultimate outdoor escape.",
        price: "$152",
        image: raftingImg,
        itinerary: [
            { 
                day: 1, 
                title: "7:30 AM – Pickup from Kandy & Scenic Hill Country Drive", 
                desc: "Your driver will pick you up from your hotel or preferred location in Kandy. Relax and enjoy a scenic drive through Sri Lanka's picturesque hill country on your way to Kitulgala.", 
                activities: ["Pickup from Kandy Hotel / Residence", "Private Transport", "Scenic Hill Country Drive"]
            },
            { 
                day: 1, 
                title: "10:00 AM – Explore the Picturesque Kelani River", 
                desc: "Arrive in Kitulgala and spend some time enjoying the beautiful Kelani River, famous for its crystal-clear waters, lush rainforest surroundings, and stunning landscapes. Capture memorable photos and take in the peaceful atmosphere before your adventure begins.", 
                activities: ["Arrive in Kitulgala", "Kelani River Exploration", "Lush Rainforest Scenery", "Photography & Peaceful Atmosphere"]
            },
            { 
                day: 1, 
                title: "10:30 AM – White Water Rafting Adventure", 
                desc: "Meet your professional rafting guides for a safety briefing before beginning your thrilling white water rafting adventure on the Kelani River. Experience a series of exciting rapids while enjoying the spectacular rainforest scenery. This activity is suitable for both beginners and experienced adventurers.", 
                activities: ["Professional Safety Briefing", "Kelani River White Water Rafting", "Exciting Rapids Experience", "Safety Gear & Guides Included"]
            },
            { 
                day: 1, 
                title: "12:30 PM – Traditional Sri Lankan Lunch", 
                desc: "After your rafting experience, enjoy a delicious traditional Sri Lankan lunch at a local restaurant.", 
                activities: ["Traditional Sri Lankan Meal", "Riverside Dining & Relaxation"]
            },
            { 
                day: 1, 
                title: "2:00 PM – Visit Historic Belilena Cave", 
                desc: "Continue your adventure with a visit to the famous Belilena Cave, one of Sri Lanka's most significant prehistoric archaeological sites. Enjoy a scenic forest hike to the cave while taking in the natural beauty of the surrounding rainforest.", 
                activities: ["Prehistoric Belilena Cave Visit", "Scenic Rainforest Forest Hike", "Archaeological Site Exploration"]
            },
            { 
                day: 1, 
                title: "4:00 PM Return Journey & 6:30 PM Drop-Off", 
                desc: "After exploring Belilena Cave, begin your return journey to Kandy.<br/><br/><b>6:30 PM Drop-off:</b> Your driver will drop you off at your hotel or preferred location in Kandy.<br/><i>If you would like to be dropped off at another destination, we are happy to arrange this for an additional fee, depending on the location.</i>", 
                activities: ["Return Drive to Kandy", "Hotel / Residence Drop-Off in Kandy", "Custom Destination Drop-Off Available"]
            }
        ],
        inclusions: [
            "Private transportation",
            "Pickup and drop-off within Kandy",
            "White water rafting experience",
            "Professional rafting guides and safety equipment",
            "Visit to the Kelani River",
            "Visit to Belilena Cave",
            "Traditional Sri Lankan lunch",
            "All rafting activity fees"
        ],
        exclusions: [
            "Personal expenses",
            "Additional food and beverages",
            "Optional activities not mentioned in the itinerary"
        ],
        routeMap: routeMapKitulgalaPremium,
        reviews: kitulgalaReviews,
        rating: 4.7,
        ratingLabel: "Thrill Seekers",
        physicalIntensity: 3,
        importantNotes: [
            "Pickup and drop-off are included within Kandy only.",
            "Pickup from locations outside Kandy or drop-off at a different destination can be arranged for an additional charge, depending on the location.",
            "Wear comfortable clothing and secure footwear suitable for both rafting and hiking.",
            "Bring a change of clothes, a towel, sunscreen, insect repellent, drinking water, and a camera to capture the day's highlights.",
            "This tour is suitable for most fitness levels. The hike to Belilena Cave involves uphill walking and uneven terrain.",
            ...COMMON_NOTES
        ]
    },
    {
        id: 5,
        name: "Breathe Sri Lanka",
        days: "27 Days",
        location: "Kandy & Coast",
        description: "Transform your travel experience with 'Breathe Sri Lanka'—an extraordinary 27-day island immersion combining deep cultural exploration, highland hiking, beach relaxation, and 14 rewarding days of community volunteering. Purpose-built for slow travelers, gap year students, and conscious volunteers, this signature program connects you with the heart and soul of Sri Lanka.\n\nSpend your initial weeks exploring iconic island destinations: scale ancient rock fortresses in Sigiriya, wander sacred temples in Kandy, ride the scenic mountain train through misty tea estates in Ella, and soak up the sun along the southern beaches of Mirissa and Galle Fort.\n\nThe centerpiece of your journey is a dedicated 14-day volunteer placement in Hikkaduwa. Work alongside local communities in childcare, teaching, special needs support, or eco-conservation while staying in welcoming local homestays. With all coordination, meals, accommodations, and guided excursions handled by Give Back Journey, this 27-day program offers a life-changing blend of exploration and impact.",
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
        name: "Sigiriya & Dambulla Heritage Adventure",
        days: "1 Day (Full-Day Tour)",
        startLocation: "Kandy",
        endLocation: "Kandy",
        description: "Discover two of Sri Lanka's most iconic UNESCO World Heritage Sites on this unforgettable full-day heritage trip from Kandy. Designed for culture enthusiasts, history lovers, and adventure seekers alike, this private expedition takes you deep into the heart of the island's celebrated Cultural Triangle.\n\nYour journey begins with a scenic drive through lush rural villages and tropical countryside before reaching the ancient Dambulla Cave Temple. Carved into a massive granite rock rising high above the plains, this 2,000-year-old sacred sanctuary features five majestic caves housing hundreds of serene Buddha statues and intricate wall murals depicting ancient Sinhalese royalty and spiritual legends.\n\nIn the afternoon, ascend the awe-inspiring Sigiriya Rock Fortress, often hailed as the 'Eighth Wonder of the World'. Built in the 5th century by King Kashyapa, this sheer 200-meter citadel features world-renowned ancient frescoes, the polished Mirror Wall, water gardens, and the legendary Lion's Paws gate leading to breathtaking 360-degree panoramic views across the jungle canopy.\n\nFor those seeking even more thrill, enhance your day with an optional wild elephant safari in a nearby national park before your comfortable return transfer back to Kandy. Enjoy dedicated private transportation, inclusive entrance tickets, and an experienced local driver to ensure a seamless and enriching day trip.",
        price: "$220",
        image: sigiriyaSafariCover,
        itinerary: [
            {
                day: 1,
                title: "07:30 AM – Departure from Kandy",
                desc: "After breakfast, meet your driver at your accommodation and begin your journey towards Sri Lanka's Cultural Triangle. The drive from Kandy takes approximately two and a half hours and passes through picturesque villages, lush forests and rural landscapes.<br/><br/>Along the way, your driver will be happy to share insights into local life and Sri Lankan culture.",
                activities: ["07:30 AM Departure", "Private Transportation", "Scenic Cultural Triangle Drive", "Local Life & Culture Insights"]
            },
            {
                day: 1,
                title: "10:00 AM – Visit to Dambulla Cave Temple",
                desc: "Your first stop will be the magnificent Dambulla Cave Temple, the largest and best-preserved cave temple complex in Sri Lanka and a UNESCO World Heritage Site.<br/><br/>Dating back more than 2,000 years, the temple consists of five caves filled with hundreds of Buddha statues, ancient murals and colorful paintings covering the cave walls and ceilings.<br/><br/>The temple sits on top of a large rock, offering spectacular views of the surrounding countryside. It remains an important place of worship and provides visitors with a fascinating insight into Sri Lanka's Buddhist heritage and history.<br/><br/>You will have approximately one and a half hours to explore the caves and admire the remarkable artwork.",
                activities: ["Dambulla Cave Temple (UNESCO Site)", "Ancient Cave Murals & Statues", "Panoramic Rock Vistas"]
            },
            {
                day: 1,
                title: "12:30 PM – Lunch Break (Optional)",
                desc: "Enjoy lunch at a local restaurant (not included in the tour price), where you will have the opportunity to sample authentic Sri Lankan cuisine.<br/><br/>Your driver will be happy to recommend restaurants based on your preferences.",
                activities: ["Lunch Break", "Authentic Sri Lankan Cuisine", "Local Dining Recommendations"]
            },
            {
                day: 1,
                title: "02:00 PM – Explore Sigiriya Rock Fortress",
                desc: "After lunch, continue to the world-famous Sigiriya Rock Fortress, often referred to as the \"Eighth Wonder of the World.\"<br/><br/>Built in the fifth century by King Kashyapa, Sigiriya rises nearly 200 metres above the surrounding plains and once served as a royal palace and fortress.<br/><br/>The climb to the summit takes approximately one and a half to two hours and includes:<br/><ul><li>The Royal Gardens</li><li>Ancient water gardens and fountains</li><li>The famous Mirror Wall</li><li>The Lion's Gate</li><li>Ancient frescoes</li><li>Panoramic views from the summit</li></ul><br/>Today, Sigiriya is considered one of the most important archaeological sites in Asia and attracts visitors from around the world.",
                activities: ["Sigiriya Rock Fortress (UNESCO Site)", "Royal & Water Gardens", "Mirror Wall & Lion's Gate", "Ancient Frescoes", "Summit Panoramic Views"]
            },
            {
                day: 1,
                title: "05:00 PM – Return to Kandy",
                desc: "After your visit to Sigiriya, begin your journey back to Kandy, arriving in the evening.<br/><br/>Sit back, relax and enjoy the scenic drive through Sri Lanka's beautiful countryside.",
                activities: ["Return Journey to Kandy", "Scenic Evening Countryside Drive"]
            },
            {
                day: 1,
                title: "Optional Add-on – Wild Elephant Safari",
                desc: "For travelers seeking an even greater adventure, an optional wild elephant safari can be added to the itinerary.<br/><br/>Travel by jeep into one of Sri Lanka's national parks, where you may encounter wild elephants roaming freely in their natural habitat. Depending on the season, you may also spot deer, monkeys, crocodiles, peacocks and many other species of wildlife.<br/><br/><i>Additional charges apply. The safari can be arranged either before or after your visit to Sigiriya, depending on park conditions and your preferences.</i>",
                activities: ["Optional Wild Elephant Safari", "Jeep Safari in National Park", "Wildlife Spotting"]
            }
        ],
        inclusions: [
            "Entrance ticket to Dambulla Cave Temple",
            "Entrance ticket to Sigiriya Rock Fortress",
            "Private air-conditioned transportation throughout the tour",
            "English-speaking driver",
            "Hotel pick-up and drop-off in Kandy",
            "Fuel, parking and highway charges"
        ],
        exclusions: [
            "Lunch and beverages",
            "Optional wild elephant safari",
            "Personal expenses",
            "Tips and gratuities",
            "Travel insurance"
        ],
        routeMap: routeMapWild,
        reviews: sigiriyaSafariReviews,
        rating: 4.8,
        ratingLabel: "Must Experience",
        physicalIntensity: 3,
        importantNotes: [
            "Comfortable walking shoes are highly recommended.",
            "The climb to Sigiriya involves approximately 1,200 steps.",
            "Please wear clothing that covers your shoulders and knees when visiting Dambulla Cave Temple.",
            "Bring sunscreen, a hat and plenty of water, especially during the hotter months.",
            "The tour operates in all weather conditions.",
            "Optional Wild Elephant Safari: Available upon request (additional cost). The safari can be arranged either before or after your visit to Sigiriya, depending on park conditions and your preferences.",
            "Duration: Full day (approximately 12 hours)",
            "Starting point: Kandy",
            "Ending point: Kandy",
            ...COMMON_NOTES
        ]
    },
    {
        id: 13,
        name: "Sigiriya Nature & Culture Escape",
        days: "2 Days / 1 Night",
        startLocation: "Kandy",
        endLocation: "Kandy",
        description: "Embark on an unforgettable two-day expedition from Kandy into the ancient heart of Sri Lanka's Cultural Triangle, where rich history meets breathtaking natural beauty. Meticulously designed for travelers seeking a perfect balance of heritage and wilderness, this overnight escape takes you deep into the island's most iconic landscapes and UNESCO World Heritage sites, ensuring you experience the true essence of Sri Lanka without feeling rushed.\n\nYour adventure begins with a scenic drive through vibrant tropical countryside to the magnificent Dambulla Cave Temple. This ancient, 2,000-year-old sanctuary is perched high on a granite outcrop and adorned with intricate murals and hundreds of serene Buddha statues. As evening approaches, challenge yourself to a rewarding hike up Pidurangala Rock. From this spectacular vantage point, you will be treated to unparalleled panoramic sunset views of the surrounding jungle canopy and the majestic Sigiriya Lion Rock glowing in the fading light. Relax and recharge overnight in a peaceful guesthouse surrounded by the tranquil, untouched atmosphere of rural Sri Lanka.\n\nOn your second day, rise before dawn to conquer the world-famous Sigiriya Rock Fortress. Climbing this 'Eighth Wonder of the World' in the cool morning air rewards you with an awe-inspiring sunrise and a glimpse into the opulent ruins of King Kassapa's ancient sky palace. Marvel at the preserved frescoes, the Mirror Wall, and the imposing Lion's Paws as you ascend to the summit. The adventure then transitions from ancient history to thrilling wildlife with an open-top jeep safari through a nearby national park, offering the incredible chance to witness wild Asian elephants, crocodiles, and exotic birds roaming freely in their natural habitat.\n\nConcluding with a visit to the vibrant, architecturally stunning Matale Hindu Temple, this comprehensive tour delivers a seamless, deeply immersive cultural and wildlife experience. With private transportation, local guidance, and carefully selected accommodations included, every detail is handled so you can focus entirely on the adventure.",
        price: "$345",
        image: sigiriyaEscapeCover,
        itinerary: [
            {
                day: 1,
                title: "Kandy to Sigiriya | Cave Temple & Pidurangala Sunset",
                desc: `<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Meals included: Breakfast and dinner</b><br/><br/>
                After breakfast, leave Kandy and begin your journey towards Sigiriya, passing through picturesque villages, lush forests and rural landscapes.<br/><br/>
                <strong>Morning: Dambulla Cave Temple</strong><br/>
                Your first stop will be the magnificent Dambulla Cave Temple, Sri Lanka's largest and best-preserved cave temple complex and a UNESCO World Heritage Site.<br/><br/>
                Dating back more than 2,000 years, the temple consists of five caves filled with hundreds of Buddha statues, ancient murals and colorful paintings. Perched on top of a giant rock, the temple offers breathtaking views of the surrounding countryside and provides visitors with a fascinating insight into Sri Lanka's rich Buddhist heritage.<br/><br/>
                <strong>Afternoon: Guesthouse Check-in</strong><br/>
                After exploring Dambulla, continue to your guesthouse in Sigiriya and enjoy some free time to relax and take in the peaceful atmosphere of rural Sri Lanka.<br/><br/>
                <strong>Evening: Pidurangala Sunset Hike</strong><br/>
                In the late afternoon, set off on a hike to Pidurangala Rock, one of Sri Lanka's most spectacular viewpoints.<br/><br/>
                The climb takes approximately 30–45 minutes and rewards you with stunning panoramic views of Sigiriya Rock Fortress and the surrounding jungle. Watch the sun slowly disappear behind the horizon while the sky transforms into beautiful shades of orange and pink.<br/><br/>
                <strong>Evening: Traditional Sri Lankan Dinner</strong><br/>
                Return to your guesthouse and enjoy a delicious homemade Sri Lankan dinner prepared with fresh local ingredients.<br/><br/>
                Overnight stay in Sigiriya.`,
                activities: ["Dambulla Cave Temple", "Guesthouse Check-in", "Pidurangala Sunset Hike", "Traditional Sri Lankan Dinner"]
            },
            {
                day: 2,
                title: "Sigiriya Sunrise, Wildlife & Return to Kandy",
                desc: `<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Meals included: Breakfast</b><br/><br/>
                <strong>Early Morning: Sigiriya Sunrise Climb</strong><br/>
                Wake up before dawn and proceed to the world-famous Sigiriya Rock Fortress, often referred to as the "Eighth Wonder of the World."<br/><br/>
                Built in the fifth century by King Kassapa, Sigiriya rises nearly 200 metres above the surrounding plains and once served as a royal palace and fortress.<br/><br/>
                Climb the ancient staircases in the cool morning air and witness a spectacular sunrise over Sri Lanka's Cultural Triangle. Explore the royal gardens, ancient frescoes, the famous Lion's Paw entrance and enjoy one of the most iconic views in Asia.<br/><br/>
                <strong>Morning: Breakfast & Check-out</strong><br/>
                Return to the guesthouse and enjoy a fresh breakfast before checking out and preparing for the day's final adventure.<br/><br/>
                <strong>Afternoon: Wild Elephant Safari</strong><br/>
                Set off on an unforgettable jeep safari in one of the national parks near Sigiriya.<br/><br/>
                Travel through forests, lakes and open grasslands in search of Sri Lanka's majestic wild elephants roaming freely in their natural habitat. Depending on the season, you may also spot monkeys, crocodiles, deer, peacocks and many species of birds.<br/><br/>
                <strong>Evening: Matale Hindu Temple & Return to Kandy</strong><br/>
                On the journey back to Kandy, stop at the famous Matale Hindu Temple, known for its colorful architecture and impressive carvings.<br/><br/>
                Take some time to admire the spiritual atmosphere before continuing your drive back to Kandy, where you will be dropped off at your accommodation in the evening.<br/><br/>
                End of the tour.`,
                activities: ["Sigiriya Sunrise Climb", "Wild Elephant Safari", "Matale Hindu Temple", "Return Journey to Kandy"],
                optionalActivities: [
                    "Spice and Herbal Garden Tour in Matale: Learn about Sri Lanka's ancient Ayurvedic traditions.",
                    "Village Tuk-Tuk Food Tour: Experience authentic village life and sample traditional food by tuk-tuk."
                ]
            }
        ],
        inclusions: [
            "One night's accommodation in a guesthouse in Sigiriya",
            "Breakfast on both days",
            "Traditional Sri Lankan dinner on Day 1",
            "Entrance fee to Dambulla Cave Temple",
            "Entrance fee to Pidurangala Rock",
            "Entrance fee to Sigiriya Rock Fortress",
            "Wild elephant jeep safari",
            "Visit to Matale Hindu Temple",
            "Private transportation throughout the tour",
            "English-speaking driver",
            "Pick-up and drop-off in Kandy"
        ],
        exclusions: [
            "Lunches and beverages",
            "Personal expenses",
            "Travel insurance",
            "Tips and gratuities"
        ],
        routeMap: routeMapSigiriyaEscape,
        reviews: sigiriyaEscapeReviews,
        rating: 4.9,
        ratingLabel: "Must Experience",
        physicalIntensity: 4,
        importantNotes: [
            "Comfortable walking shoes are highly recommended.",
            "The Sigiriya climb involves approximately 1,200 steps.",
            "Please wear clothing that covers your shoulders and knees when visiting temples.",
            "Bring sunscreen, a hat and plenty of water.",
            "Wildlife sightings cannot be guaranteed, although elephant encounters are very common.",
            ...COMMON_NOTES
        ]
    },
    // 14. Wild Sri Lanka (id: 14)
    {
        id: 14,
        name: "Wild Sri Lanka – 8 Days",
        days: "8 Days / 7 Nights",
        startLocation: "Colombo / Airport",
        endLocation: "Colombo / Airport",
        description: "Embark on a wildly unforgettable 8-day journey through Sri Lanka's spectacular southern beaches, world-famous wildlife reserves, and misty mountain landscapes. Meticulously designed for nature lovers and wildlife enthusiasts, this expedition seamlessly blends tropical relaxation with thrilling animal encounters and cultural immersion.\n\nYour adventure begins on the golden southern coast, where you will explore the historic, cobblestone streets of Galle Fort and actively participate in vital sea turtle conservation efforts. As you journey inland, the landscape transforms into the dense, untamed wilderness of Yala National Park. Here, you'll board an open-top 4x4 safari jeep to track elusive Sri Lankan leopards, sloth bears, and crocodiles in their natural habitat.\n\nAscending into the cool, tea-scented central highlands, you'll discover the scenic beauty of Ella and board the world-famous hill country train, winding through mist-covered mountains and cascading waterfalls. The adventure continues in Kandy, where you'll engage in a deeply ethical, hands-on elephant rescue experience—learning about conservation while feeding and observing these majestic animals up close without riding them.\n\nFinally, conclude your journey by conquering the ancient Sigiriya Rock Fortress, an architectural marvel rising from the jungle canopy, followed by a final, heart-pounding wild elephant safari in Minneriya or Kaudulla National Park. With private transport, expert local guidance, and carefully selected comfortable accommodations throughout, this complete 8-day package delivers the ultimate balance of thrilling wilderness and serene Sri Lankan charm.",
        price: "$1,220",
        image: wildSafariCover,
        itinerary: [
            {
                day: 1,
                title: "Arrival and Transfer to Galle",
                desc: `<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Included: Accommodation and private transfer.</b><br/><br/>
                Upon your arrival at the airport, you will be warmly welcomed by our team and begin your journey to the historic coastal district of Galle.<br/><br/>
                Located on Sri Lanka's southern coast, Galle is famous for its colonial architecture, golden beaches, and laid-back atmosphere. After checking in to your accommodation, relax and enjoy your first evening in paradise.<br/><br/>
                Overnight stay in the Galle area.`,
                activities: ["Arrival", "Transfer to Galle"]
            },
            {
                day: 2,
                title: "Turtle Conservation, Mask Factory and Galle Fort",
                desc: `<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Included: Breakfast, lunch, accommodation and all activities.</b><br/><br/>
                Spend the morning supporting local conservation efforts at a turtle hatchery, where you will learn about the protection of endangered sea turtles and the important work being done to preserve these incredible creatures and their nesting grounds.<br/><br/>
                In the afternoon, visit a traditional mask factory and discover the fascinating history behind Sri Lanka's colorful masks, which are deeply connected to local folklore and traditions.<br/><br/>
                Later, explore the world-famous Galle Fort, a UNESCO World Heritage Site built by the Portuguese and later expanded by the Dutch. Wander through its charming streets and witness a spectacular sunset over the Indian Ocean.<br/><br/>
                Overnight stay in the Galle area.`,
                activities: ["Turtle Conservation", "Mask Factory", "Galle Fort"]
            },
            {
                day: 3,
                title: "Yala Safari and Transfer to Ella",
                desc: `<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Included: Breakfast, accommodation and safari.</b><br/><br/>
                Depart early in the morning for an unforgettable safari in Yala National Park, Sri Lanka's most famous wildlife reserve.<br/><br/>
                Home to elephants, leopards, crocodiles, sloth bears and many species of birds, Yala offers an incredible opportunity to experience Sri Lanka's rich wildlife in its natural habitat.<br/><br/>
                After the safari, continue your journey to the beautiful hill town of Ella.<br/><br/>
                Overnight stay in Ella.`,
                activities: ["Yala Safari", "Transfer to Ella"]
            },
            {
                day: 4,
                title: "Explore Ella",
                desc: `<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Included: Breakfast and accommodation.</b><br/><br/>
                Enjoy a full day exploring Ella, one of Sri Lanka's most scenic destinations. Surrounded by tea plantations and misty mountains, Ella offers the perfect combination of adventure and relaxation.<br/><br/>
                You may visit famous attractions such as the Nine Arches Bridge, Little Adam's Peak and Ravana Falls while taking in the breathtaking views of the hill country.<br/><br/>
                Overnight stay in Ella.`,
                activities: ["Explore Ella", "Nine Arches Bridge", "Little Adam's Peak", "Ravana Falls"]
            },
            {
                day: 5,
                title: "Scenic Train Journey to Kandy",
                desc: `<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Included: Breakfast, train ticket and accommodation.</b><br/><br/>
                Board one of the world's most beautiful train journeys from Ella to Nanu Oya. Passing through tea plantations, waterfalls and mountain villages, this is an authentic local experience where you will travel alongside Sri Lankans rather than as a tourist.<br/><br/>
                Upon arrival in Nanu Oya, continue to Kandy by private taxi, enjoying the stunning scenery of Sri Lanka's central highlands.<br/><br/>
                Overnight stay in Kandy.`,
                activities: ["Scenic Train Journey", "Transfer to Kandy"]
            },
            {
                day: 6,
                title: "Elephant Experience and Cultural Discoveries",
                desc: `<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Included: Breakfast, lunch, accommodation and all activities.</b><br/><br/>
                Today, you will enjoy a unique and ethical elephant experience at a small rescue and rehabilitation center dedicated to caring for domesticated elephants in need.<br/><br/>
                Learn about the challenges faced by these majestic animals and the efforts being made to improve their welfare. You will have the opportunity to observe the elephant up close and participate in feeding activities. Please note that elephant riding is strictly prohibited.<br/><br/>
                Enjoy a traditional riverside lunch before visiting the famous Pinnawala Elephant Orphanage, where you will witness one of the daily feeding sessions.<br/><br/>
                On the way back to Kandy, stop at a traditional herbal garden and finish the day with breathtaking views from the Kandy viewpoint.<br/><br/>
                Overnight stay in Kandy.`,
                activities: ["Ethical Elephant Experience", "Pinnawala Elephant Orphanage", "Herbal Garden", "Kandy Viewpoint"]
            },
            {
                day: 7,
                title: "Sigiriya and Wild Elephant Safari",
                desc: `<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Included: Breakfast, dinner, accommodation and safari.</b><br/><br/>
                Begin your day with a visit to the magnificent Sigiriya Rock Fortress, a UNESCO World Heritage Site often referred to as the "Eighth Wonder of the World."<br/><br/>
                Climb the ancient fortress and admire the spectacular views over Sri Lanka's cultural triangle.<br/><br/>
                In the afternoon, embark on an exciting safari in search of wild elephants roaming freely in their natural habitat, along with many other species of wildlife.<br/><br/>
                Return to Kandy in the evening.<br/><br/>
                Overnight stay in Kandy.`,
                activities: ["Sigiriya Rock Fortress", "Wild Elephant Safari"]
            },
            {
                day: 8,
                title: "Departure",
                desc: `<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Included: Breakfast and airport transfer.</b><br/><br/>
                After an unforgettable journey through Sri Lanka's southern beaches, wildlife reserves and misty mountains, it is time to say goodbye.<br/><br/>
                Transfer to the airport for your departure, taking with you memories that will last a lifetime.`,
                activities: ["Airport Transfer", "Departure"]
            }
        ],
        inclusions: [
            "Accommodation throughout the tour",
            "Breakfast on all days except Day 1",
            "Lunch on Day 2 and Day 6",
            "Dinner on Day 7",
            "Private transportation throughout the tour",
            "English-speaking driver/guide",
            "Turtle Conservation project",
            "Mask factory visit",
            "Galle Fort visit",
            "Yala National Park Safari",
            "Train ticket from Ella to Nanu Oya",
            "Ethical elephant experience",
            "Pinnawala Elephant Orphanage",
            "Sigiriya Rock Fortress entrance",
            "Wild Elephant Safari",
            "Airport pick-up and drop-off"
        ],
        exclusions: [
            "Lunches and dinners not mentioned",
            "Personal expenses",
            "Travel insurance",
            "Tips and gratuities",
            "Airfare and visa fees"
        ],
        reviews: buildTourReviews(14, "Wild Sri Lanka – 8 Days", [], ["Amazing wild experience!", "Loved the elephants.", "Great itinerary and guides.", "Highly recommended tour."], 125),
        rating: 4.8,
        ratingLabel: "Highly Recommended",
        physicalIntensity: 3,
        importantNotes: [
            "Comfortable walking shoes are recommended.",
            "Please wear clothing that covers your shoulders and knees when visiting temples.",
            "Wildlife sightings cannot be guaranteed.",
            ...COMMON_NOTES
        ]
    }
];

export const TOURS_DATA = tourPackages;
