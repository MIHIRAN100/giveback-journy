import essentialCover from '../assets/gy.jpg';
import southernCover from '../assets/kevin-olson-ScBHbYokiQE-unsplash.jpg';
import adventureCover from '../assets/etienne-boulanger-C5yfbvMWxC8-unsplash.jpg';
import mistMountainsCover from '../assets/Nuwera Eliya day tour.jpg';
import wildSafariCover from '../assets/Hurulu Eco Park.jpg';
import galleFortCover from '../assets/Galle Fort, Sri Lanka.jpg';
import koslandaCover from '../assets/Koslanda 🇱🇰.jpg';
import kandyImg from '../assets/Pinnawala Elephant Orphanage in Sri Lanka.jpg';
import kandyDayImg from '../assets/download (4).jpg';
import adamsPeakImg from '../assets/download (5).jpg';
import raftingImg from '../assets/Rafting.jpg';
import grandLoopImg from '../assets/Sri lanka 🇱🇰 @lilychvt.jpg';

import routeMapEssential from '../assets/route-map-signature-new.png';
import routeMapSouthernNew from '../assets/route-map-southern-new.png';
import routeMapScenic from '../assets/route-map-scenic.png';
import routeMapHill from '../assets/route-map-hill.png';
import routeMapWild from '../assets/route-map-wild.png';
import routeMapHighlandsCoast from '../assets/route-map-highlands-coast.png';
import routeMapKandy from '../assets/route-map-kandy.png';
import routeMapKandyPinnawala from '../assets/route-map-kandy-pinnawala.png';
import routeMapAdamsPeak from '../assets/route-map-adams-peak.png';
import routeMapKitulgala from '../assets/route-map-kitulgala.png';
import routeMapGrandLoop from '../assets/route-map-grand-loop.png';
import budgetPromoImg from '../assets/rajiv-perera-b1jeQiJwYQI-unsplash.jpg';

const signatureReviews = [
    { id: 1, name: "Sarah Jenkins", rating: 5, date: "October 2025", profile: "British, 24", trip: "Signature Experience", comment: "The sunrise climb at Sigiriya was the highlight of my trip! Everything was perfectly organized.", color: "#fff3e0" },
    { id: 2, name: "Mark Thompson", rating: 5, date: "September 2025", profile: "USA, 29", trip: "Signature Experience", comment: "The train journey from Kandy to Ella was breathtaking. Highly recommend this signature tour.", color: "#f3e5f5" },
    { id: 3, name: "Elena Rossi", rating: 5, date: "August 2025", profile: "Italian, 22", trip: "Signature Experience", comment: "Minneriya safari was amazing! We saw so many elephants. A truly essential Sri Lanka experience.", color: "#e0f2f1" },
    { id: 4, name: "James Wilson", rating: 5, date: "July 2025", profile: "Canadian, 31", trip: "Signature Experience", comment: "Perfect balance between culture and relaxation. The south coast stay was the perfect ending.", color: "#fbe9e7" },
    { id: 5, name: "Chloe Dupont", rating: 5, date: "June 2025", profile: "French, 20", trip: "Signature Experience", comment: "Galle Fort at sunset is a dream. The hospitality throughout the week was exceptional.", color: "#e8f5e9" }
];

const kandyReviews = [
    { id: 1, name: "Jessica Lee", rating: 5, date: "October 2025", profile: "Traveler", trip: "Kandy Day Trip", comment: "Watching the elephants walk to the river in Pinnawala was magical! A must-do day trip.", color: "#e8f5e9" },
    { id: 2, name: "David Miller", rating: 5, date: "September 2025", profile: "Traveler", trip: "Kandy Day Trip", comment: "The Temple of the Tooth is so spiritual and peaceful. Kandy is a beautiful city.", color: "#e3f2fd" },
    { id: 3, name: "Emma Watson", rating: 5, date: "August 2025", profile: "UK", trip: "Kandy Day Trip", comment: "Botanical gardens were stunning. Our driver was very helpful with picking us up.", color: "#fff3e0" },
    { id: 4, name: "Hans Zimmer", rating: 5, date: "July 2025", profile: "German", trip: "Kandy Day Trip", comment: "The cultural show music and dance were very impressive. Great way to spend a day.", color: "#f3e5f5" },
    { id: 5, name: "Sofia Loren", rating: 5, date: "June 2025", profile: "Italy", trip: "Kandy Day Trip", comment: "Short but very comprehensive. We saw all the major sights in just one day.", color: "#e0f2f1" }
];

const coastalReviews = [
    { id: 1, name: "Mateo Silva", rating: 5, date: "October 2025", profile: "Brazilian", trip: "Southern Escape", comment: "Surfing in Weligama was a dream. The coastal vibe of this tour is perfect.", color: "#fff3e0" },
    { id: 2, name: "Yuna Kim", rating: 5, date: "September 2025", profile: "Korean", trip: "Southern Escape", comment: "Mirissa beaches are the best. Watching the whales was a life-changing experience.", color: "#f3e5f5" },
    { id: 3, name: "Noah Williams", rating: 5, date: "August 2025", profile: "USA", trip: "Southern Escape", comment: "Galle Fort is so historic and charming. Loved the boutique stays along the coast.", color: "#e0f2f1" },
    { id: 4, name: "Mia Dubois", rating: 5, date: "July 2025", profile: "French", trip: "Southern Escape", comment: "The seafood dinners by the beach were incredible. Such a relaxing week.", color: "#fbe9e7" },
    { id: 5, name: "Leo Rossi", rating: 5, date: "June 2025", profile: "Italian", trip: "Southern Escape", comment: "Sunset at Coconut Tree Hill is a must-see. The southern coast is beautiful.", color: "#e8f5e9" }
];

const adventureReviews = [
    { id: 1, name: "Jake Gyllen", rating: 5, date: "October 2025", profile: "USA", trip: "Highlands & Coast", comment: "White water rafting in Kitulgala was such an adrenaline rush! Loved every bit of it.", color: "#e8f5e9" },
    { id: 2, name: "Scarlett Joh", rating: 5, date: "September 2025", profile: "UK", trip: "Highlands & Coast", comment: "The transition from the rainforest to the mountains of Ella was spectacular.", color: "#e3f2fd" },
    { id: 3, name: "Ryan Reyn", rating: 5, date: "August 2025", profile: "Canadian", trip: "Highlands & Coast", comment: "Seeing a leopard in Yala was the highlight of my trip. The guide was expert.", color: "#fff3e0" },
    { id: 4, name: "Gal Gadot", rating: 5, date: "July 2025", profile: "Israel", trip: "Highlands & Coast", comment: "Little Adam's Peak hike was easy but offered the most incredible views of Ella.", color: "#f3e5f5" },
    { id: 5, name: "Chris Evans", rating: 5, date: "June 2025", profile: "USA", trip: "Highlands & Coast", comment: "Hikkaduwa is the perfect place to end an adventure. Great food and beach vibes.", color: "#e0f2f1" }
];

export const BUDGET_PROMO_IMG = budgetPromoImg;
export const tourPackages = [
    {
        id: 1,
        name: "7-Day Essential Sri Lanka",
        days: "7 Days / 6 Nights",
        description: "A comprehensive journey through Sri Lanka’s most iconic highlights—from ancient heritage and misty tea mountains to the wild jungles and the tropical south.",
        price: "$650",
        image: essentialCover,
        itinerary: [
            { day: 1, title: "Arrival & Transfer to Sigiriya", desc: "Welcome to Sri Lanka! Your private driver will meet you at the airport and transfer you to Sigiriya. After checking into your guesthouse, spend a relaxed evening preparing for the adventure ahead.", activities: ["Airport Greeting", "Private Transfer", "Evening Relaxation"] },
            { day: 2, title: "Sigiriya Lion Rock & Village Experience", desc: "Climb the ancient Sigiriya Lion Rock for breathtaking views. In the afternoon, enjoy a traditional village tour and lunch, gaining insight into the local way of life.", activities: ["Lion Rock Hike", "Village Tour", "Traditional Lunch"] },
            { day: 3, title: "Dambulla Temple & Journey to Kandy", desc: "Visit the Dambulla Cave Temple, a UNESCO site, before traveling to Kandy. Explore the Temple of the Tooth and end your day with a vibrant cultural dance performance.", activities: ["Cave Temple Visit", "Temple of the Tooth", "Cultural Show"] },
            { day: 4, title: "Scenic Train Ride to Ella", desc: "Board the world-famous train from Kandy to Ella. Wind through emerald tea plantations and misty mountains on what is widely considered the most beautiful train journey on earth.", activities: ["Iconic Train Ride", "Tea Plantation Views", "Mountain Sightseeing"] },
            { day: 5, title: "Ella Highlights & Transfer to Yala", desc: "Visit the Nine Arches Bridge and Little Adam’s Peak in the morning. Afterward, travel to Yala, ready for an early morning wildlife safari the next day.", activities: ["Nine Arches Bridge", "Little Adam’s Peak", "Drive to Yala"] },
            { day: 6, title: "Yala Safari & Mirissa Coast", desc: "Embark on an early morning jeep safari in Yala National Park to spot leopards and elephants. In the afternoon, head to the golden beaches of Mirissa.", activities: ["Leopard Safari", "Jungle Wildlife", "Sunset at Mirissa"] },
            { day: 7, title: "Galle Fort & Departure", desc: "Explore the historic Galle Fort and walk its colonial ramparts. Finally, transfer back to the airport for your onward journey, carrying memories of an unforgettable week.", activities: ["Galle Fort Tour", "Colonial Architecture", "Airport Transfer"] }
        ],
        inclusions: ["Accommodation", "Daily breakfast", "Private transport", "Train tickets", "Yala Safari"],
        exclusions: ["Flights", "Entrance fees", "Lunch & dinner"],
        routeMap: routeMapEssential,
        reviews: signatureReviews
    },
    {
        id: 8,
        name: "Kandy & Pinnawala Day Trip",
        days: "1 Day",
        description: "A memorable day combining wildlife, culture, and scenic experiences around Kandy, including the famous Pinnawala Elephant Orphanage and a Ceylon tea factory.",
        price: "$125",
        image: budgetPromoImg,
        itinerary: [
            { 
                day: 1, 
                title: "Pinnawala & Kandy Scenic Day Tour", 
                desc: "Your day begins with a 7:00 AM pick-up to reach Pinnawala in time for the feeding and bathing sessions. Observe elephants up close as they gather by the river. Later, see the eco-friendly elephant dung paper recycling process. On the return journey, visit a local tea factory to learn about Ceylon tea production before being transferred back to your hotel.", 
                activities: ["Elephant Feeding & Bathing", "Riverside Interaction", "Dung Paper Recycling", "Tea Factory Visit", "Fresh Ceylon Tea Tasting"] 
            }
        ],
        inclusions: ["Private transport (Taxi)", "Elephant orphanage visit", "Tea factory tour", "Hotel pick-up & drop-off"],
        exclusions: ["Lunch", "Personal expenses", "Entrance fees for optional sites"],
        routeMap: routeMapKandyPinnawala,
        reviews: kandyReviews
    },
    {
        id: 2,
        name: "Southern Sun & Beach Escape",
        days: "7 Days / 6 Nights",
        description: "A relaxing coastal journey along Sri Lanka’s south—combining beach life, culture, and optional adventures.",
        price: "$600",
        image: southernCover,
        itinerary: [
            { day: 1, title: "Hikkaduwa Arrival", desc: "Welcome to the coast!", activities: ["Beach Relax"] },
            { day: 2, title: "Marine Life", desc: "Explore the coral reef.", activities: ["Snorkeling"] },
            { day: 3, title: "Galle Fort", desc: "Walk the ancient walls.", activities: ["Fort Tour"] },
            { day: 4, title: "Unawatuna", desc: "Relax by the jungle beach.", activities: ["Beach Day"] },
            { day: 5, title: "Mirissa", desc: "Sunset at Coconut Tree Hill.", activities: ["Sunset View"] },
            { day: 6, title: "Whale Watching", desc: "Search for blue whales.", activities: ["Whale Safari"] },
            { day: 7, title: "Departure", desc: "Airport transfer.", activities: ["Transfer"] }
        ],
        inclusions: ["Accommodation", "Breakfast", "Transfers"],
        exclusions: ["Lunch & Dinner", "Personal expenses", "Entrance fees"],
        routeMap: routeMapSouthernNew,
        reviews: coastalReviews
    },
    {
        id: 3,
        name: "Highlands & Coast Adventure",
        days: "7 Days / 6 Nights",
        description: "A well-balanced journey through rainforest adventure, misty mountains, wildlife, and tropical beaches—designed for travelers who want maximum experience with great value.",
        price: "$680",
        image: adventureCover,
        itinerary: [
            { 
                day: 1, 
                title: "Arrival & Transfer to Kitulgala", 
                desc: "Welcome to Sri Lanka! Upon arrival, transfer to Kitulgala, a peaceful riverside destination surrounded by lush rainforest. Check into your guesthouse and relax after your journey.", 
                activities: ["Kelani River Relaxation", "Village Walk", "Jungle Atmosphere", "Nature Walk (Optional)", "River Bathing (Optional)"] 
            },
            { 
                day: 2, 
                title: "Rafting Adventure & Transfer to Ella", 
                desc: "Start your day with adventure on the Kelani River with white water rafting. After lunch, proceed to Ella, enjoying scenic tea plantations and mountain views.", 
                activities: ["White Water Rafting", "Bird Watching (Optional)", "Scenic Drive to Ella", "Explore Ella Town"] 
            },
            { 
                day: 3, 
                title: "Ella Peaks & Iconic Landmarks", 
                desc: "Discover the beauty of Ella. Hike to Little Adam's Peak and visit the world-famous Nine Arches Bridge.", 
                activities: ["Little Adam's Peak Hike", "Nine Arches Bridge", "Zip-lining (Optional)", "Tea Plantation Visit (Optional)"] 
            },
            { 
                day: 4, 
                title: "Yala Safari & Journey to the Coast", 
                desc: "Explore Yala National Park, home to elephants and leopards, before continuing your journey towards the southern coast.", 
                activities: ["Yala Jeep Safari", "Wildlife Spotting", "Drive to South Coast"] 
            },
            { 
                day: 5, 
                title: "Beach Relaxation in Hikkaduwa", 
                desc: "Settle into coastal life in Hikkaduwa. Spend your day relaxing on the beach or enjoying the ocean.", 
                activities: ["Beach Relaxation", "Ocean Swimming", "Sunset Views", "Snorkeling (Optional)", "Surfing Lessons (Optional)"] 
            },
            { 
                day: 6, 
                title: "Galle Fort & River Safari", 
                desc: "Explore the historic Galle Fort and its charming streets. Later, enjoy a relaxing boat ride through the mangroves of Madu River.", 
                activities: ["Galle Fort Walk", "Colonial Architecture", "Madu River Safari (Optional)", "Shopping (Optional)"] 
            },
            { 
                day: 7, 
                title: "Departure", 
                desc: "After breakfast, transfer to the airport for your onward journey, carrying memories of an incredible Sri Lankan adventure.", 
                activities: ["Final Breakfast", "Airport Transfer"] 
            }
        ],
        inclusions: [
            "6 nights guesthouse accommodation", 
            "Daily breakfast", 
            "Dinner on Day 1 (Kitulgala)", 
            "Lunch on Day 2 (Kitulgala)", 
            "White water rafting experience", 
            "Yala National Park jeep safari", 
            "All transfers"
        ],
        exclusions: [
            "Other lunches & dinners", 
            "Optional activities", 
            "Personal expenses"
        ],
        routeMap: routeMapHighlandsCoast,
        reviews: adventureReviews
    },
    {
        id: 4,
        name: "5-Day Mist & Mountains",
        days: "5 Days",
        description: "Venture into the emerald heart of Sri Lanka. Traverse tea plantations and hike the scenic trails of Ella.",
        price: "$550",
        image: mistMountainsCover,
        itinerary: [
            { day: 1, title: "Kandy Sacred", desc: "Temple visit.", activities: ["Spiritual"] },
            { day: 2, title: "Tea Culture", desc: "Factory tour.", activities: ["Tasting"] },
            { day: 3, title: "Epic Train", desc: " Scenic ride.", activities: ["Train"] },
            { day: 4, title: "Ella Rock", desc: "Summit hike.", activities: ["Hiking"] },
            { day: 5, title: "Departure", desc: "Mountain farewell.", activities: ["Transfer"] }
        ],
        inclusions: ["Tea factory visit", "Train tickets", "Mountain hiking"],
        exclusions: ["Lunch", "Entrance fees", "Insurance"],
        routeMap: routeMapHill,
        reviews: signatureReviews
    },
    {
        id: 5,
        name: "6-Day Wild Safari Expedition",
        days: "6 Days",
        description: "Experience the raw beauty of Sri Lanka's wildlife in Yala and Udawalawe.",
        price: "$720",
        image: wildSafariCover,
        itinerary: [
            { day: 1, title: "Udawalawe", desc: "Elephant home.", activities: ["Safari"] },
            { day: 2, title: "Transit Home", desc: "Baby elephants.", activities: ["Feeding"] },
            { day: 3, title: "Yala Wild", desc: "Leopard search.", activities: ["Full Safari"] },
            { day: 4, title: "Tangalle", desc: "Wild coast.", activities: ["Beach"] },
            { day: 5, title: "Leisure", desc: "BBQ on beach.", activities: ["BBQ"] },
            { day: 6, title: "Departure", desc: "Transfer.", activities: ["Airport"] }
        ],
        inclusions: ["Safari jeeps", "Park entry permits", "Expert tracker"],
        exclusions: ["Personal items", "Drinks", "Tips"],
        routeMap: routeMapWild,
        reviews: adventureReviews
    },
    {
        id: 6,
        name: "3-Day Galle Fort Escape",
        days: "3 Days",
        description: "A quick but immersive journey into the colonial heart of Sri Lanka.",
        price: "$320",
        image: galleFortCover,
        itinerary: [
            { day: 1, title: "Arrival", desc: "Dutch Fort.", activities: ["Sunset"] },
            { day: 2, title: "Boutique", desc: "Shopping.", activities: ["Artisan"] },
            { day: 3, title: "Departure", desc: "Swim.", activities: ["Transfer"] }
        ],
        inclusions: ["Galle Fort tour", "Boutique stay", "Local breakfast"],
        exclusions: ["Shopping", "Lunches", "Transport to Galle"],
        reviews: coastalReviews
    },
    {
        id: 7,
        name: "Into the Wild",
        days: "4 Days",
        description: "A deep dive into the rainforest and untamed landscapes of Sinharaja.",
        price: "$480",
        image: koslandaCover,
        itinerary: [
            { day: 1, title: "Sinharaja", desc: "Rainforest lodge.", activities: ["Check-in"] },
            { day: 2, title: "Jungle Trek", desc: "Bird watching.", activities: ["Hike"] },
            { day: 3, title: "Waterfalls", desc: "Natural pool.", activities: ["Swim"] },
            { day: 4, title: "Departure", desc: "Transfer.", activities: ["Airport"] }
        ],
        inclusions: ["Rainforest trekking", "Naturalist guide", "Eco-lodge stay"],
        exclusions: ["Alcoholic beverages", "Travel insurance", "Personal gear"],
        reviews: adventureReviews
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
                desc: "You will be picked up from your accommodation and taken to the sacred Temple of the Tooth Relic. After a guided visit, enjoy a peaceful walk around Kandy Lake. The journey continues to the Royal Botanical Gardens. In the evening, attend a vibrant Sri Lankan cultural show.", 
                activities: ["Temple of the Tooth", "Kandy Lake Walk", "Royal Botanical Gardens", "Cultural Dance Show"] 
            }
        ],
        inclusions: ["Pick-up & Drop-off (within 1km of city)", "Temple of the Tooth visit", "Botanical Garden tour", "Cultural show tickets"],
        exclusions: ["Lunch", "Locations outside 1km radius", "Personal expenses"],
        routeMap: routeMapKandy,
        reviews: kandyReviews
    },
    {
        id: 10,
        name: "Adam’s Peak Sunrise Quest",
        days: "2 Days / 1 Night",
        description: "A spiritual and scenic journey to the sacred Adam's Peak (Sri Pada). Experience a magical night climb and witness a breathtaking sunrise from the summit.",
        price: "$280",
        image: adamsPeakImg,
        itinerary: [
            { 
                day: 1, 
                title: "Kandy to Dalhousie", 
                desc: "Begin with a scenic drive through tea plantations and waterfalls to Dalhousie. Check in to a guesthouse to relax and prepare for the upcoming night climb.", 
                activities: ["Scenic Highlands Drive", "Tea Plantation Views", "Guesthouse Relaxation"] 
            },
            { 
                day: 2, 
                title: "Sunrise Climb & Back to Kandy", 
                desc: "Begin your night climb at 10:00 PM. Reach the summit for a spiritual sunrise. Descend for breakfast before returning to Kandy for your hotel drop-off.", 
                activities: ["Night Peak Climb", "Spiritual Sunrise", "Mountain Descent", "Return Transfer"] 
            }
        ],
        inclusions: ["Private transport (Taxi/TukTuk)", "Guesthouse stay (1 Night)", "Breakfast", "Hotel Pick-up & Drop-off"],
        exclusions: ["Dinner", "Lunch", "Personal snacks/water", "Hiking gear"],
        importantNotes: [
            "Supplies: Please carry water and light snacks for the climb",
            "Gear: A rain jacket and proper hiking shoes are recommended",
            "Respect: modest dress is required (no shorts, tank tops, or revealing clothing)",
            "Tradition: Shoes must be removed at the very top of the peak"
        ],
        routeMap: routeMapAdamsPeak,
        reviews: adventureReviews
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
                desc: "Depart from Kandy to Kitulgala. Experience exciting white-water rafting through tropical rainforest rapids. Enjoy a traditional Sri Lankan riverside lunch before returning to Kandy.", 
                activities: ["White Water Rafting", "Safety Briefing", "Rainforest Scenery", "Traditional Riverside Lunch"] 
            }
        ],
        inclusions: ["Private transport (Taxi/TukTuk)", "Rafting equipment & guide", "Traditional Lunch", "Hotel Pick-up & Drop-off"],
        exclusions: ["Personal expenses", "Tips", "Travel insurance"],
        routeMap: routeMapKitulgala,
        reviews: adventureReviews
    },
    {
        id: 12,
        name: "21-Day Whole Island Odyssey",
        days: "21 Days / 20 Nights",
        description: "The ultimate national journey. A complete loop of the entire island, covering every major region from the northernmost tip of Jaffna to the southern beaches of Galle.",
        price: "$1,980",
        image: grandLoopImg,
        itinerary: [
            { day: 1, title: "Arrival & Transfer to Negombo", desc: "Welcome to Sri Lanka. Relax at a beachfront hotel in Negombo to recover from your flight.", activities: ["Airport Transfer", "Beach Evening", "Relaxation"] },
            { day: 2, title: "Wilpattu National Park", desc: "Head North to Wilpattu for a safari in the island's largest and oldest national park.", activities: ["Leopard Safari", "Jungle Drive", "Eco-Lodge Stay"] },
            { day: 3, title: "Mannar & Giant's Tank", desc: "Discover the unique arid landscapes, ancient baobab trees, and the historic Mannar Fort.", activities: ["Baobab Tree Sighting", "Mannar Fort", "Bird Watching"] },
            { day: 4, title: "The Journey to Jaffna", desc: "Drive over the Elephant Pass to enter the northern peninsula, a world of its own.", activities: ["Elephant Pass", "Scenic North Drive", "Jaffna Arrival"] },
            { day: 5, title: "Jaffna Heritage & Culture", desc: "Visit the iconic Nallur Kandaswamy Kovil and the historic Jaffna Public Library.", activities: ["Nallur Kovil", "Jaffna Library", "Colonial Fort"] },
            { day: 6, title: "Point Pedro & Northern Islands", desc: "Visit the northernmost tip of the island and take a boat to the unique Nainativu island.", activities: ["Point Pedro Visit", "Boat to Nainativu", "Island Temples"] },
            { day: 7, title: "Sacred Anuradhapura", desc: "Head south to the ancient capital and explore the cradle of Buddhism in Sri Lanka.", activities: ["Sacred Stupas", "Ancient Ruins", "Spiritual Heritage"] },
            { day: 8, title: "Sigiriya Lion Rock", desc: "Climb the majestic rock fortress and admire the 5th-century frescoes and gardens.", activities: ["Lion Rock Climb", "Water Gardens", "Village Tour"] },
            { day: 9, title: "Medieval Polonnaruwa", desc: "Explore the second capital by bicycle, visiting the Gal Vihara and Royal Palace.", activities: ["Bicycle Tour", "Stone Statues", "Ancient Lake Sights"] },
            { day: 10, title: "Trincomalee Beaches", desc: "Head to the East Coast for the crystal-clear waters of Nilaveli Beach.", activities: ["Koneswaram Temple", "Nilaveli Beach", "Seafood Dinner"] },
            { day: 11, title: "Pigeon Island Sanctuary", desc: "A morning of world-class snorkeling in the turquoise marine sanctuary.", activities: ["Snorkeling", "Coral Reef Exploration", "Boat Ride"] },
            { day: 12, title: "The Hill Capital: Kandy", desc: "Travel to the misty hills and visit the Temple of the Sacred Tooth Relic.", activities: ["Temple Visit", "Kandy Lake", "Cultural Show"] },
            { day: 13, title: "Tea Highlands: Nuwara Eliya", desc: "Wind through emerald tea estates and visit a colonial-era factory.", activities: ["Tea Tasting", "Waterfall Sights", "Gregory Lake"] },
            { day: 14, title: "Scenic Train Ride to Ella", desc: "Experience the world's most beautiful train journey through the mountains.", activities: ["Iconic Train Trip", "Highland Panoramas", "Ella Town"] },
            { day: 15, title: "Ella Peaks & Arches", desc: "Visit the Nine Arches Bridge and hike Little Adam’s Peak for stunning views.", activities: ["Nine Arches Bridge", "Little Adam's Peak", "Mountain Café"] },
            { day: 16, title: "Udawalawe Elephant Safari", desc: "Visit the Elephant Transit Home and enjoy a safari in Udawalawe National Park.", activities: ["Elephant Transit Home", "Safari Drive", "River Stay"] },
            { day: 17, title: "Wild Yala National Park", desc: "An early morning search for leopards in the island's most famous wilderness.", activities: ["Leopard Safari", "Wildlife Photography", "Bush Dinner"] },
            { day: 18, title: "Mirissa Coastal Bliss", desc: "Relax in the southern surf hub and witness whales in the deep blue.", activities: ["Whale Watching", "Coconut Tree Hill", "Surfing"] },
            { day: 19, title: "Historic Galle Fort", desc: "Explore the UNESCO-listed Dutch fort with its boutique shops and cafes.", activities: ["Fort Walk", "Lighthouse Photo", "Boutique Shopping"] },
            { day: 20, title: "Bentota Golden Beaches", desc: "A final day of relaxation with a river safari and sunset beach walk.", activities: ["Madu River Safari", "Beach Relaxation", "Farewell Dinner"] },
            { day: 21, title: "Colombo & Departure", desc: "Final city sightseeing and shopping before your transfer to the airport.", activities: ["City Tour", "Souvenir Shopping", "Airport Transfer"] }
        ],
        inclusions: ["All Accommodation", "Daily Breakfast", "Private Luxury Transport", "Train Tickets", "3 National Park Safaris", "Boat Transfers"],
        exclusions: ["International Flights", "Entrance fees for all sites", "Lunch & Dinner"],
        routeMap: routeMapGrandLoop,
        reviews: signatureReviews
    }
];
