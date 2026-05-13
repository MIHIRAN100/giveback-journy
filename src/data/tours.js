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
import budgetPromoImg from '../assets/rajiv-perera-b1jeQiJwYQI-unsplash.jpg';

const signatureReviews = [
    { id: 1, name: "Sarah Jenkins", rating: 5, date: "October 2025", profile: "British, 24", trip: "Signature Experience", comment: "The sunrise climb at Sigiriya was the highlight of my trip! Everything was perfectly organized.", color: "#fff3e0" },
    { id: 2, name: "Mark Thompson", rating: 5, date: "September 2025", profile: "USA, 29", trip: "Signature Experience", comment: "The train journey from Kandy to Ella was breathtaking. Highly recommend this signature tour.", color: "#f3e5f5" },
    { id: 3, name: "Elena Rossi", rating: 5, date: "August 2025", profile: "Italian, 22", trip: "Signature Experience", comment: "Minneriya safari was amazing! We saw so many elephants. A truly essential Sri Lanka experience.", color: "#e0f2f1" },
    { id: 4, name: "James Wilson", rating: 5, date: "July 2025", profile: "Canadian, 31", trip: "Signature Experience", comment: "Perfect balance between culture and relaxation. The south coast stay was the perfect ending.", color: "#fbe9e7" },
    { id: 5, name: "Chloe Dupont", rating: 5, date: "June 2025", profile: "French, 20", trip: "Signature Experience", comment: "Galle Fort at sunset is a dream. The hospitality throughout the week was exceptional.", color: "#e8f5e9" },
    { id: 6, name: "Robert Brown", rating: 5, date: "May 2025", profile: "USA", trip: "Signature Experience", comment: "The tour guide was exceptionally knowledgeable. Highly recommended!", color: "#fff" },
    { id: 7, name: "Alice Green", rating: 4, date: "April 2025", profile: "UK", trip: "Signature Experience", comment: "Great experience overall, though the bus ride was a bit long.", color: "#fff" },
    { id: 8, name: "Tom Cruise", rating: 5, date: "March 2025", profile: "USA", trip: "Signature Experience", comment: "Felt like a movie! Every location was stunning.", color: "#fff" },
    { id: 9, name: "Emma Stone", rating: 5, date: "February 2025", profile: "Australia", trip: "Signature Experience", comment: "The wildlife safari was out of this world.", color: "#fff" },
    { id: 10, name: "Lucas Silva", rating: 5, date: "January 2025", profile: "Brazil", trip: "Signature Experience", comment: "Amazing food and culture. Love Sri Lanka!", color: "#fff" },
    { id: 11, name: "Zoe Kravitz", rating: 5, date: "December 2024", profile: "USA", trip: "Signature Experience", comment: "The beaches are pristine. Very relaxing.", color: "#fff" },
    { id: 12, name: "Ryan Gosling", rating: 4, date: "November 2024", profile: "Canada", trip: "Signature Experience", comment: "Great service and beautiful hotels.", color: "#fff" },
    { id: 13, name: "Michael Chen", rating: 3, date: "October 2024", profile: "Singapore", trip: "Signature Experience", comment: "The sights were incredible, but the weather was unusually rainy during our train ride which blocked some views.", color: "#fff" },
    { id: 14, name: "Sophia Martinez", rating: 2, date: "September 2024", profile: "Spain", trip: "Signature Experience", comment: "Beautiful country, but I found the local food much too spicy for my stomach. Ensure you ask for non-spicy versions.", color: "#fff" },
    { id: 15, name: "David Beckham", rating: 4, date: "August 2024", profile: "UK", trip: "Signature Experience", comment: "Excellent itinerary and private transport. Smooth communication with our tour consultant.", color: "#fff" },
    { id: 16, name: "Liam Hemsworth", rating: 3, date: "July 2024", profile: "Australia", trip: "Signature Experience", comment: "Enjoyed the safari and beach towns, but the drives between cities can feel a bit exhausting.", color: "#fff" }
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
    { id: 5, name: "Leo Rossi", rating: 5, date: "June 2025", profile: "Italian", trip: "Southern Escape", comment: "Sunset at Coconut Tree Hill is a must-see. The southern coast is beautiful.", color: "#e8f5e9" },
    { id: 6, name: "Sandro Moretti", rating: 3, date: "May 2025", profile: "Italy", trip: "Southern Escape", comment: "The beaches were beautiful, but the travel times between coastal towns were longer than expected due to local traffic.", color: "#fff" },
    { id: 7, name: "Anna Schmidt", rating: 4, date: "April 2025", profile: "Germany", trip: "Southern Escape", comment: "Well-organized tour with great guesthouse selections. Some locations were a bit crowded.", color: "#fff" },
    { id: 8, name: "Robert Klein", rating: 1, date: "March 2025", profile: "Netherlands", trip: "Southern Escape", comment: "Unfortunately, the extreme humidity during this season made the outdoor treks very difficult for me personally.", color: "#fff" }
];

const adventureReviews = [
    { id: 1, name: "Jake Gyllen", rating: 5, date: "October 2025", profile: "USA", trip: "Highlands & Coast", comment: "White water rafting in Kitulgala was such an adrenaline rush! Loved every bit of it.", color: "#e8f5e9" },
    { id: 2, name: "Scarlett Joh", rating: 5, date: "September 2025", profile: "UK", trip: "Highlands & Coast", comment: "The transition from the rainforest to the mountains of Ella was spectacular.", color: "#e3f2fd" },
    { id: 3, name: "Ryan Reyn", rating: 5, date: "August 2025", profile: "Canadian", trip: "Highlands & Coast", comment: "Seeing a leopard in Yala was the highlight of my trip. The guide was expert.", color: "#fff3e0" },
    { id: 4, name: "Gal Gadot", rating: 5, date: "July 2025", profile: "Israel", trip: "Highlands & Coast", comment: "Little Adam's Peak hike was easy but offered the most incredible views of Ella.", color: "#f3e5f5" },
    { id: 5, name: "Chris Evans", rating: 5, date: "June 2025", profile: "USA", trip: "Highlands & Coast", comment: "Hikkaduwa is the perfect place to end an adventure. Great food and beach vibes.", color: "#e0f2f1" }
];

const COMMON_NOTES = [
    "Some travellers have reported being approached by locals offering excursions before their Giveback Journey trip commences. This has been particularly prevalent in and around the hotels used by Giveback Journey. These guides are in no way connected to Giveback Journey and we cannot guarantee the safety or quality standards of their tours. We advise customers against joining any tour offered by the unauthorised guides.",
    "A single supplement is available if you'd prefer not to share a room on this trip. The single supplement is subject to availability. Please speak to your booking agent for further information.",
    "A complimentary airport arrival transfer is included; valid if you are arriving on Day 1 or if you have booked pre-tour accommodation through us. You must provide your flight details to us at least 14 days prior to travel.",
    "Sri Lanka is a deeply religious country. Always cover your shoulders and knees when visiting temples. Modest dress is not just expected—it's required for entry. Avoid wearing clothing with religious symbols as fashion, and if you have tattoos of Buddhist or other religious figures, make sure to cover them before entering any religious site.",
    "Sri Lanka operates largely on a cash economy for local purchases. While major hotels and restaurants accept credit cards, we highly recommend carrying local currency (Sri Lankan Rupees) for small purchases, local markets, and cafes. ATMs are widely available in all main towns.",
    "Every full moon is a 'Poya' holiday. Alcohol and meat are generally not sold in shops or served in public restaurants on these days. It's a day for spiritual reflection across the island.",
    "To avoid stomach issues, never drink tap water. Use bottled or filtered water even for brushing teeth if you have a sensitive stomach. Look for the SLS certification on water bottles.",
    "Sri Lanka uses Type D and G plugs. We recommend buying a local SIM card (Dialog/Mobitel) at the airport—it's incredibly cheap ($5-10 for 30GB+) and has better coverage than hotel Wi-Fi.",
    "Bargaining is common in street markets but rare in fixed-price shops. Keep it friendly and fair; saving a few cents might mean more to the vendor than to your budget."
];

export const BUDGET_PROMO_IMG = budgetPromoImg;
export const tourPackages = [
    {
        id: 1,
        name: "7-Day Essential Sri Lanka",
        days: "7 Days / 6 Nights",
        description: "A carefully designed journey blending culture, nature, and adventure—perfect for travelers who want to experience the best of Sri Lanka in a short time.\n\nFrom the ancient heights of Sigiriya Lion Rock to the misty emerald hills of Ella, this tour captures the island's most iconic landscapes. You'll wander through the sacred temples of Kandy and end your journey on the golden palm-fringed beaches of the south coast.\n\nExperience authentic Sri Lankan hospitality and create memories that will last a lifetime in just seven extraordinary days.",
        price: "$650",
        image: essentialCover,
        itinerary: [
            { 
                day: 1, 
                title: "Arrival in Negombo", 
                desc: "Welcome to the tropical paradise of <b>Sri Lanka!</b><br/><br/>Upon arrival at the international airport, you will be warmly greeted and transferred to the vibrant coastal town of <b>Negombo</b>.<br/><br/>This relaxed <b>beachside sanctuary</b>, with its swaying palms and salty breeze, is the perfect place to recover from your flight and prepare for the incredible adventure ahead.<br/><br/>Take the day at your own pace to <b>unwind</b> and soak in the island atmosphere.<br/><br/><b>Overnight stay in Negombo.</b>", 
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
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>After breakfast, embark on a scenic journey towards <b>Sigiriya</b>, located in the deep cultural heart of the island's interior. Watch as the landscape transforms from coastal plains into <b>lush, emerald-green jungles</b>.<br/><br/>In the evening, as the heat of the day fades, enjoy a breathtaking <b>sunset hike up Pidurangala Rock</b>. This rewarding climb offers a unique perspective and stunning panoramic views of the surrounding valley and the majestic <b>Lion Rock</b> standing tall in the distance.<br/><br/>After descending, return to the comfort of your hotel to relax and reflect on your first day in the <b>Cultural Triangle</b>.<br/><br/><b>🍽️ Dinner included at the hotel</b><br/><b>Overnight stay in Sigiriya</b>", 
                activities: ["Private Transport", "Pidurangala Rock Hike", "Lion Rock Views", "Sunset Adventure", "Cultural Triangle Tour", "Dinner"],
                optionalActivities: ["Authentic Village Bullock Cart Ride", "Minneriya National Park Elephant Safari", "Traditional Wood Carving Workshop"]
            },
            { 
                day: 3, 
                title: "Sunrise at Sigiriya & Wildlife Safari", 
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Start your day early with an unforgettable <b>sunrise visit to Sigiriya Rock Fortress</b>, a UNESCO World Heritage site and one of the island's most awe-inspiring ancient landmarks. Scale the historic steps to witness the sky change colors over the vast jungle canopy.<br/><br/>Return to the hotel for breakfast, then continue your adventure with:<br/><br/><ul><li>🐘 An exhilarating <b>wild elephant safari</b> at a park, where you can witness these gentle giants in their natural habitat</li><li>🛕 A visit to the spiritual <b>Dambulla Cave Temple</b>, filled with ancient statues and vibrant murals</li><li>🌿 A sensory stop at a traditional <b>Sri Lankan herbal garden</b> to learn about local spices and oils</li></ul><br/>Afterward, you will transfer to the cultural capital of Sri Lanka <b>(Kandy)</b>.<br/><br/>In the evening:<br/><ul><li>🌅 Enjoy a peaceful, twilight walk around the iconic <b>Kandy Lake</b></li><li>🏘️ Explore the charming city streets and enjoy dinner at your own leisure</li></ul><br/><b>Overnight stay in Kandy.</b>", 
                activities: ["Breakfast", "Sigiriya Rock Fortress", "Elephant Safari", "Dambulla Cave Temple", "Herbal Garden Visit", "Private Transport"],
                optionalActivities: ["Hot Air Ballooning over Sigiriya (Seasonal)", "Kandy Cultural Dance Show (VIP Seating)", "Tuk-Tuk Food Tour through Kandy Streets"]
            },
            { 
                day: 4, 
                title: "Kandy to Ella | Scenic Train Experience", 
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>In the morning, visit the sacred <b>Temple of the Tooth</b>, the most revered Buddhist site in Sri Lanka, nestled in the heart of the city.<br/><br/>Then, proceed towards the misty highlands of <b>Ella</b>. You will experience a portion of the world-famous rail journey by taking the <b>Ambewela to Ella train ride</b> as a local—winding through <b>emerald tea estates</b> and cascading waterfalls.<br/><br/><i>(Note: Due to unstable and unpredictable circumstances, this train experience may occasionally be unavailable; in such cases, your journey will continue by private vehicle via the same scenic route).</i><br/><br/>Arrive in the charming village of Ella and transfer to your <b>accommodation nestled in the hills</b>.<br/><br/><b>Evening free to:</b><br/><ul><li>🚶 Wander through the bohemian streets of <b>Ella town</b></li><li>☕ Relax in cozy local cafés and enjoy the cool mountain air</li></ul><br/><b>Overnight stay in Ella.</b>", 
                activities: ["Breakfast", "Temple of the Tooth", "Scenic Train Ride", "Ambewela to Ella Rail", "Tea Estate Views", "Private Transport"],
                optionalActivities: ["Evening Yoga Session overlooking the hills", "Traditional Sri Lankan Cooking Class in Ella", "High Tea experience at a colonial estate"]
            },
            { 
                day: 5, 
                title: "Explore Ella at Your Own Pace", 
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Today is yours to embrace the slow pace of mountain life and explore <b>Ella</b> as a solo traveler.<br/><br/><b>Suggested Activities:</b><br/><ul><li>⛰️ A refreshing hike up <b>Little Adam's Peak</b> for sweeping views of the Ella Gap</li><li>🛤️ A visit to the colonial-era <b>Nine Arches Bridge</b> to watch the train pass through the jungle</li><li>☕ Finding a scenic spot to relax in a hillside café with breathtaking vistas</li></ul><br/><b>Overnight stay in Ella.</b>", 
                activities: ["Breakfast", "Private Transport"] 
            },
            { 
                day: 6, 
                title: "Ella to Hikkaduwa | Coastal Charm", 
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Leave the mountains behind as we travel south towards the historic coast. En route, we stop at the majestic <b>Ravana Falls</b>, one of the widest waterfalls on the island, for a quick photo opportunity and a breath of fresh spray.<br/><br/>Arrive in the south and enjoy a magical <b>sunset walk inside the historic Galle Fort</b>. This UNESCO site is known for its colonial charm, narrow cobblestone streets, and stunning ocean views from the ancient ramparts.<br/><br/>Afterward, head to the lively beach town of <b>Hikkaduwa</b>.<br/><br/><b>Evening free to:</b><br/><ul><li>🏖️ Relax on the golden sands of <b>Hikkaduwa Beach</b> and listen to the soothing ocean waves</li><li>🐢 Spot friendly giant sea turtles swimming close to the shore</li><li>🦞 Dine on fresh seafood at a vibrant beachside restaurant under the stars</li></ul><br/><b>Overnight stay in Hikkaduwa.</b>", 
                activities: ["Breakfast", "Ravana Falls", "Galle Fort Walk", "Hikkaduwa Beach", "Private Transport"],
                optionalActivities: ["Snorkeling at Hikkaduwa Coral Reef", "Glass Bottom Boat Ride", "Turtle Hatchery Visit"]
            },
            { 
                day: 7, 
                title: "Departure", 
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>After breakfast, we will transfer you comfortably to the airport for your onward journey. Carry with you the memories of ancient wonders, misty mountains, and the warmth of the Sri Lankan spirit.", 
                activities: ["Breakfast", "Airport transfer"] 
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
            "Optional activities"
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
        days: "1 Day",
        startLocation: "Kandy",
        endLocation: "Pinnawala",
        description: "A memorable day combining wildlife, culture, and scenic experiences around Kandy, including the famous Pinnawala Elephant Orphanage and a Ceylon tea factory.",
        price: "$125",
        image: budgetPromoImg,
        itinerary: [
            { 
                day: 1, 
                title: "Pinnawala & Kandy Scenic Day Tour", 
                desc: "Your adventure begins with an early 7:00 AM pick-up to ensure we reach the Pinnawala Elephant Orphanage in time for the morning's most magical moments.<br/><br/><strong>Key Highlights & Activities:</strong><ul style='margin-top: 10px; padding-left: 20px; list-style-type: disc;'><li><strong>Pinnawala Elephant Orphanage:</strong> Witness the incredible sight of the elephant herd as they are led to the nearby river for their daily bath—a truly heart-warming experience where you can observe these gentle giants playing and splashing in the water.</li><li style='margin-top: 8px;'><strong>Dung Paper Recycling Factory:</strong> Following the riverside interaction, we visit a unique local factory to see the fascinating process of eco-friendly elephant dung paper recycling.</li><li style='margin-top: 8px;'><strong>Traditional Ceylon Tea Factory:</strong> On the scenic return journey towards Kandy, we stop at a traditional Ceylon tea factory. Here, you'll learn about the intricate art of tea production and enjoy a fresh tasting session of the world's finest brew before being transferred back to your accommodation.</li></ul>", 
                activities: ["Elephant Feeding & Bathing", "Riverside Interaction", "Dung Paper Recycling", "Tea Factory Visit", "Fresh Ceylon Tea Tasting"],
                optionalActivities: ["Kandy Cultural Dance Show", "Royal Botanical Gardens stroll", "Sacred Temple of the Tooth visit"]
            }
        ],
        inclusions: ["Private transport (Taxi)", "Elephant orphanage visit", "Tea factory tour", "Hotel pick-up & drop-off"],
        exclusions: ["Lunch", "Personal expenses", "Entrance fees for optional sites"],
        routeMap: routeMapKandyPinnawalaDetailed,
        reviews: kandyReviews,
        rating: 4.7,
        ratingLabel: "Highly Rated",
        importantNotes: COMMON_NOTES
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
                desc: "Welcome to the golden shores of <b>Hikkaduwa!</b><br/><br/>Upon your arrival, you'll be transferred to your <b>charming coastal guesthouse in Hikkaduwa</b>.<br/><br/><b>Hikkaduwa</b> is famous for its laid-back vibe and vibrant beach culture, making it the perfect starting point for your southern escape.<br/><br/>Spend your first afternoon settling in—<b>sink your toes into the soft sand</b>, enjoy a refreshing drink as you watch the waves, or take a <b>gentle stroll along the shoreline</b>.<br/><br/>As evening falls, the town comes alive with the scent of <b>fresh seafood</b> and the sound of the ocean, offering a relaxing introduction to island life.<br/><br/><b>Overnight stay in Hikkaduwa</b>", 
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
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Start your morning with a tranquil <b>river boat safari</b>. This unique experience allows you to view the vibrant natural world from the water, perfect for a peaceful start to the day.<br/><br/><b>At Your Own Pace:</b><br/><ul><li>🤿 <b>Coral Sanctuary Snorkeling:</b> Hikkaduwa is home to a spectacular reef where you can spot colorful tropical fish and majestic sea turtles.</li><li>🏖️ <b>Beachside Relaxation:</b> Spend the rest of your day relaxing on the sand or exploring local surf shops and boutiques along the main road.</li></ul><br/><b>Overnight stay in Hikkaduwa</b>", 
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
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Today, we take a short journey south to the UNESCO World Heritage site of <b>Galle Fort</b>. This 16th-century fortress is a living piece of history, where <b>Dutch colonial architecture</b> meets modern Sri Lankan life.<br/><br/>Wander through the narrow, cobblestone streets lined with <b>beautifully restored villas</b>, <b>art galleries</b>, and <b>boutique cafes</b> that whisper stories of a bygone era.<br/><br/>Walk along the <b>ancient ramparts</b> as the sea breeze cools the afternoon air, and don't miss the chance to photograph the <b>iconic Galle Lighthouse</b> standing tall against the blue horizon.<br/><br/>After soaking in the culture and perhaps enjoying a <b>gelato in the fort</b>, we return to the relaxed atmosphere of Hikkaduwa.<br/><br/><b>Overnight stay in Hikkaduwa</b>", 
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
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Discover the crescent-shaped bay of <b>Unawatuna</b>, often cited as one of the most beautiful beaches in the world. Today is about exploring the <b>diverse coastal landscapes</b> of the south.<br/><br/>You can choose to relax on the main beach or take a <b>short trek</b> through the lush greenery to reach <b>Jungle Beach</b>—a hidden gem where the forest meets the sea in a secluded, tranquil cove.<br/><br/>The waters here are calm and <b>perfect for swimming</b>. In the evening, Unawatuna’s beachfront transforms into a <b>vibrant dining scene</b>, where you can enjoy a <b>candlelit dinner on the sand</b> with the sound of the waves as your soundtrack.<br/><br/><b>Overnight stay in Unawatuna</b>", 
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
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Our coastal journey continues to <b>Mirissa</b>, a picturesque bay known for its <b>stunning sunsets</b> and laid-back atmosphere.<br/><br/>One of the highlights of today is a visit to <b>Coconut Tree Hill</b>, an iconic viewpoint where a cluster of palm trees sits atop a <b>red-cliffed headland</b>, offering panoramic views of the ocean.<br/><br/>Spend your afternoon enjoying the <b>soft sands of Mirissa Beach</b> or exploring the <b>small rocky outcrops</b> that dot the bay.<br/><br/>As the sun begins to set, the sky turns into a <b>canvas of pink and orange</b>, providing the perfect backdrop for a relaxing evening at one of the many <b>beachfront bars</b>.<br/><br/><b>Overnight stay in Mirissa</b>", 
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
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Enjoy a final morning of <b>adventure on the high seas</b> or pure coastal leisure. Whether you want to catch one last <b>surf session</b> in the turquoise waves, indulge in a <b>traditional Ayurvedic massage</b>, or simply reflect on your journey from a <b>beach hammock</b>, the day is yours to enjoy at your own pace.<br/><br/>Mirissa offers the perfect backdrop for a relaxing final full day on the island, where the rhythm of the ocean and the warmth of the sand create a peaceful atmosphere for reflection.<br/><br/><b>Overnight stay in Mirissa</b>", 
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
                desc: "After breakfast, it’s time to bid farewell to the southern coast. Your private transfer will take you back to the airport for your onward journey. As you leave the turquoise waters behind, you’ll carry with you memories of golden sunsets, historic forts, and the gentle rhythm of the Indian Ocean.\n\nWe hope this southern escape has left you feeling refreshed and inspired, and we look forward to welcoming you back to our island paradise in the future.", 
                activities: ["Breakfast", "Airport Transfer"],
                optionalActivities: [
                    "Morning Whale Watching Safari in the deep blue",
                    "Exciting Wildlife Jeep Safari to Yala National Park",
                    "Elephant-focused safari at Udawalawe National Park"
                ]
 
            }
        ],
        inclusions: ["Accommodation", "Breakfast", "Transfers"],
        exclusions: ["Lunch & Dinner", "Personal expenses", "Entrance fees"],
        routeMap: routeMapSouthernDetailed,
        reviews: coastalReviews,
        rating: 4.9,
        ratingLabel: "Bestseller",
        physicalIntensity: 2,
        importantNotes: COMMON_NOTES
    },
    { 
        id: 3, 
        name: "Highlands & Southern Coast", 
        days: "7 Days / 6 Nights",
        description: "A well-balanced journey through rainforest adventure, misty mountains, wildlife, and tropical beaches—designed for travelers who want maximum experience with great value.\n\nFrom white-water rafting in the jungle rivers of Kitulgala to the cool, tea-scented air of the Ella highlands, this tour is an adventure for the soul. You'll explore the wild landscapes of Yala in search of leopards and finally unwind on the vibrant beaches of Hikkaduwa.\n\nIt's the perfect fusion of thrill and tranquility, capturing the very essence of the island's diverse natural beauty.",
        price: "$680",
        image: adventureCover,
        itinerary: [
            { 
                day: 1, 
                title: "Arrival & Transfer to Kitulgala", 
                desc: "Welcome to the island of <b>Sri Lanka!</b><br/><br/>Upon your arrival, you will be warmly greeted and transferred to <b>Kitulgala</b>, a riverside destination nestled within a lush and vibrant rainforest. This serene landscape, where the air is thick with the scent of tropical greenery, provides the perfect tranquil introduction to your journey.<br/><br/>Check into your guesthouse and take some time to unwind and relax after your travels.<br/><br/><b>Discoveries at Your Own Leisure (Should your schedule allow):</b><br/><ul><li>🚣 Relax by the banks of the flowing <b>Kelani River</b></li><li>👣 Take a short, peaceful <b>village walk</b> to observe local life</li><li>🧘 Simply sit back and enjoy the <b>peaceful jungle atmosphere</b></li></ul><br/><b>Dinner included at the guesthouse</b><br/><b>Overnight stay in Kitulgala.</b>", 
                activities: ["Airport Transfer", "Private Transport", "Dinner"],
                optionalActivities: [
                    "Join a guided nature walk to discover local flora and fauna",
                    "Enjoy a refreshing river bathing experience in the clear jungle waters"
                ]
            },
            { 
                day: 2, 
                title: "Rafting Adventure & Transfer to Ella", 
                desc: "Start your day with <b>breakfast</b> before embarking on an exhilarating adventure on the <b>Kelani River</b>.<br/><br/><b>Included Activity:</b><br/><ul><li>🌊 <b>White water rafting</b>: Experience a safe and exciting journey through the rapids, an ideal activity for both beginners and nature lovers seeking a thrill amidst the trees.</li></ul><br/><b>Lunch included in Kitulgala</b><br/><br/>After a traditional lunch, proceed towards the misty highlands of <b>Ella</b>, enjoying the sight of endless scenic <b>tea plantations</b> and dramatic mountain views along the way.<br/><br/><b>Discoveries at Your Own Leisure (Should your schedule allow):</b><br/><ul><li>🏘️ Explore the charming and bohemian streets of <b>Ella town</b></li><li>🌤️ Enjoy the refreshing and <b>cool hill country climate</b></li></ul><br/><b>Overnight stay in Ella.</b>", 
                activities: ["Breakfast", "White Water Rafting", "Lunch", "Private Transport"],
                optionalActivities: [
                    "Waterfall and Cave Hunting: Explore hidden cascades and secret caves for a true wilderness adventure",
                    "Early morning bird watching: Set out at dawn to spot endemic species in the rainforest surroundings"
                ]
            },
            { 
                day: 3, 
                title: "Ella Peaks & Iconic Landmarks", 
                desc: "After <b>breakfast</b> amidst the mist, discover the breathtaking beauty and iconic landmarks of <b>Ella</b>.<br/><br/><b>Discoveries at Your Own Leisure (Should your schedule allow):</b><br/><ul><li>🏔️ Hike to the summit of <b>Little Adam's Peak</b> for sweeping views of the Ella Gap</li><li>🌉 Visit the world-famous <b>Nine Arches Bridge</b> and witness the train crossing the jungle valley</li></ul><br/><b>Overnight stay in Ella.</b>", 
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
                desc: "Start your day with <b>breakfast</b> before settling into the laid-back rhythm of coastal life in <b>Hikkaduwa</b>.<br/><br/>In the evening, enjoy a <b>scenic sunset walk along the ancient ramparts of Galle Fort</b>, soaking in the colonial charm and ocean views.<br/><br/><b>Discoveries at Your Own Leisure (Should your schedule allow):</b><br/><ul><li>🏖️ Relax on the golden sands of the <b>beach</b></li><li>🌊 Swim in the warm and clear waters of the <b>Indian Ocean</b></li></ul><br/><b>Overnight stay in Hikkaduwa.</b>", 
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
                desc: "After <b>breakfast</b>, discover the coastal wonders and conservation efforts of the south.<br/><br/><b>Included Activity:</b><br/><ul><li>🛶 <b>Madu River safari</b>: Embark on a relaxing boat ride through the tranquil mangroves and small islands of the Madu River, witnessing traditional cinnamon peeling and local life.</li></ul><br/><b>Discoveries at Your Own Leisure (Should your schedule allow):</b><br/><ul><li>🛍️ Wander through the <b>vibrant local streets</b> of Hikkaduwa</li><li>🍹 Relax at a <b>beachside cafe</b> and enjoy the ocean breeze</li></ul><br/>Return to the relaxed atmosphere of <b>Hikkaduwa</b> for your final evening.<br/><br/><b>Overnight stay in Hikkaduwa.</b>", 
                activities: ["Breakfast", "Madu River Safari", "Private Transport"],
                optionalActivities: [
                    "Visit the Tsunami Photo Museum: A moving and educational experience about the 2004 disaster and the resilience of the local community",
                    "Sea Turtle Hatchery visit: Visit a local conservation project dedicated to protecting endangered sea turtles"
                ]
            },
            { 
                day: 7, 
                title: "Departure", 
                desc: "Enjoy <b>breakfast</b> before your private transfer comfortably takes you to the airport for your onward journey, carrying with you the cherished memories of your Sri Lankan adventure.", 
                activities: ["Breakfast", "Airport Transfer"] 
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
        routeMap: routeMapHighlandsInfographic,
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
        description: "Venture into the emerald heart of Sri Lanka. Traverse tea plantations and hike the scenic trails of Ella.",
        price: "$550",
        image: mistMountainsCover,
        itinerary: [
            { 
                day: 1, 
                title: "Sacred Kandy & Cultural Beginnings", 
                desc: "<div style='background: #fff9c4; border-left: 4px solid #fbc02d; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-size: 0.85rem; color: #444; line-height: 1.5;'><i class='bi bi-clock-fill' style='color: #fbc02d; margin-right: 8px;'></i><b>Important Arrival Note:</b> All travelers must be at the designated meeting point before <b>3:00 PM</b>. You may arrive independently, or we can arrange a private pickup from any location across the country for an additional pickup fee.</div>Your journey into the emerald heart of Sri Lanka begins in <b>Kandy</b>, the island's last royal capital. Nestled amongst rolling hills, this city is the spiritual home of the nation.<br/><br/><b>Highlights of the day:</b><br/><ul><li>🛕 Visit the sacred <b>Temple of the Tooth Relic</b>, where history and devotion come together.</li><li>🌅 Enjoy a serene evening walk around <b>Kandy Lake</b>.</li><li>🔥 Watch a vibrant <b>Cultural Dance Show</b>, a perfect introduction to Sri Lankan heritage.</li></ul><br/><b>Overnight stay in Kandy</b>", 
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
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Ascend higher into the mist-covered mountains as we journey towards <b>Nuwara Eliya</b>, often called 'Little England.' Here, the air is crisp and the landscape is a tapestry of endless tea plantations.<br/><br/><b>Highlights of the day:</b><br/><ul><li>☕ Visit a traditional <b>Tea Factory</b> to see how world-famous Ceylon tea is harvested.</li><li>🌿 Walk through the emerald fields and meet the tea pluckers.</li><li>🫖 Enjoy a fresh cup of the finest brew overlooking the rolling hills.</li></ul><br/><b>Overnight stay in Nuwara Eliya</b>", 
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
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Board the legendary <b>Blue Train</b> for what is widely considered the most beautiful rail journey in the world. As the train winds its way through the central highlands towards Ella, you'll be treated to spectacular views of waterfalls, deep valleys, and mist-shrouded forests.<br/><br/><i>(Note: Due to unpredictable circumstances, this train experience may occasionally be unavailable; in such cases, your journey will continue by private vehicle via the same scenic route).</i><br/><br/>This is a slow-travel experience at its finest—lean out the window to feel the cool mountain breeze and witness the stunning geography of the island unfolding before your eyes.<br/><br/><b>Overnight stay in Ella</b>", 
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
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Tackle the rewarding hike to the summit of <b>Ella Rock</b>, a more challenging trek that pays off with some of the most dramatic views in the country.<br/><br/><b>In the afternoon:</b><br/><ul><li>🏘️ Take it easy in <b>Ella town</b>, known for its bohemian cafes and friendly vibe.</li><li>🌉 Visit the colonial-era <b>Nine Arches Bridge</b> to watch the train pass through the jungle.</li><li>⛰️ Relax with a breathtaking view of the Ella Gap.</li></ul><br/><b>Overnight stay in Ella</b>", 
                activities: ["Breakfast", "Guided Mountain Hike", "Private Transport"],
                optionalActivities: ["Flying Ravana Mega Zipline", "Traditional Cooking Class in Ella", "Evening Yoga with a mountain view"]
            },
            { 
                day: 5, 
                title: "Mountain Farewell & Departure", 
                desc: "<b>🍽️ Breakfast included.</b><br/><br/>Enjoy your final mountain breakfast before we begin our descent from the highlands. As you drive back towards the coast or the airport, reflect on the misty peaks and emerald valleys that have defined your mountain escape.<br/><br/>Your journey concludes with a private transfer to your next destination or the airport.", 
                activities: ["Breakfast", "Scenic Descent", "Airport Transfer"],
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
        reviews: signatureReviews,
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
                desc: "Your escape begins in the historic UNESCO World Heritage site of Galle Fort. This beautifully preserved Dutch-era fortress is a labyrinth of narrow streets, colonial villas, and vibrant culture. After checking into your boutique stay, take your first walk along the ancient ramparts as the sun begins to set over the Indian Ocean.\n\nThe iconic lighthouse and the old Dutch hospital provide a stunning backdrop for your evening. Wander through the fort's lanes, where you'll find charming cafes and artisan shops tucked away in historic buildings, offering a peaceful and sophisticated start to your journey.", 
                activities: ["Fort Check-in", "Sunset Rampart Walk", "Colonial Sights"],
                optionalActivities: ["Cocktails at a heritage hotel", "Photography tour of colonial buildings", "Local street food tasting"]
            },
            { 
                day: 2, 
                title: "Artisan Streets & Boutique Shopping", 
                desc: "Spend the day diving deeper into the fort's unique character. Galle Fort is a hub for art and craftsmanship; explore the many galleries showcasing local talent, visit traditional jewelry makers, and browse boutique shops for high-quality textiles and souvenirs.\n\nThe fort is best explored on foot, allowing you to discover hidden courtyards and architectural details at your own pace. In the afternoon, perhaps enjoy a traditional Sri Lankan tea experience or find a quiet spot on the ramparts to watch the local 'cliff divers'—a true fort tradition.", 
                activities: ["Breakfast", "Boutique Shopping", "Art Gallery Visits", "Artisan Workshops"],
                optionalActivities: ["Traditional Sri Lankan tea experience", "Watch local 'cliff divers' performance", "Jewelry making demonstration"]
            },
            { 
                day: 3, 
                title: "Coastal Farewell & Departure", 
                desc: "Before you say goodbye to Galle, take a final refreshing dip in the ocean at a nearby beach or enjoy breakfast in one of the fort’s many picturesque cafes. Your short but immersive journey concludes with a transfer back to your next destination or the airport.\n\nAs you leave the historic walls of the fort behind, carry with you the timeless charm and elegance of this colonial gem. We hope this brief escape has left you with lasting memories of Sri Lanka’s southern heritage.", 
                activities: ["Breakfast", "Coastal Dip", "Airport Transfer"] 
            }
        ],
        inclusions: ["Galle Fort tour", "Boutique stay", "Local breakfast"],
        exclusions: ["Shopping", "Lunches", "Transport to Galle"],
        routeMap: routeMapGalle,
        reviews: coastalReviews,
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
                desc: "Your immersive day in the cultural capital begins with a 9:00 AM pick-up from your accommodation. We first visit the sacred Temple of the Tooth Relic, the spiritual heart of Sri Lanka, where you'll witness the deep devotion of local pilgrims. Afterward, enjoy a peaceful stroll around the iconic Kandy Lake, taking in the views of the surrounding hills and the white-washed temple walls.\n\nThe journey continues to the Royal Botanical Gardens in Peradeniya, home to over 4,000 species of plants and a spectacular orchid collection. As evening falls, witness a vibrant Sri Lankan cultural show, where traditional drummers and fire-dancers bring the island's rich history to life in a high-energy performance.", 
                activities: ["Temple of the Tooth Visit", "Royal Botanical Gardens", "Cultural Dance Show", "Private Transport"] 
            }
        ],
        inclusions: ["Pick-up & Drop-off (within 1km of city)", "Temple of the Tooth visit", "Botanical Garden tour", "Cultural show tickets"],
        exclusions: ["Lunch", "Locations outside 1km radius", "Personal expenses"],
        routeMap: routeMapKandyDetailed,
        reviews: kandyReviews,
        rating: 4.6,
        ratingLabel: "Excellent",
        importantNotes: COMMON_NOTES
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
                title: "Highland Drive to Dalhousie", 
                desc: "Your spiritual journey begins with a scenic drive through the heart of the tea country. Pass by cascading waterfalls and endless emerald hills as we make our way to the village of Dalhousie, the base for the Adam's Peak climb. \n\nCheck into your guesthouse and spend the afternoon resting and hydrating in preparation for the night ahead. The cool mountain air and the view of the peak from the village create a sense of anticipation for the quest that awaits.", 
                activities: ["Scenic Highlands Drive", "Tea Plantation Views", "Pre-Climb Rest"],
                optionalActivities: ["Visit to St. Clair's Falls", "Tea tasting at Mlesna Tea Castle", "Laxapana Falls short detour"]
            },
            { 
                day: 2, 
                title: "The Sacred Sunrise & Descent", 
                desc: "The climb begins in the silence of the night, usually around 10:00 PM, joining thousands of pilgrims on the ancient stone path. The way is illuminated by lanterns and the collective spirit of those seeking the summit. \n\nReach the peak in the pre-dawn hours to witness a breathtaking sunrise that illuminates the entire island—a spiritual experience like no other. After the descent, enjoy breakfast before your return transfer to Kandy, carrying the light of the sunrise with you.", 
                activities: ["Breakfast", "Adam's Peak Climb", "Private Transfer"] 
            }
        ],
        inclusions: ["Private transport (Taxi/TukTuk)", "Guesthouse stay (1 Night)", "Breakfast", "Hotel Pick-up & Drop-off"],
        exclusions: ["Dinner", "Lunch", "Personal snacks/water", "Hiking gear"],
        routeMap: routeMapAdamsPeakDetailed,
        reviews: adventureReviews,
        rating: 5.0,
        ratingLabel: "Must Experience",
        physicalIntensity: 5,
        importantNotes: COMMON_NOTES
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
                desc: "Depart from Kandy for a thrilling day on the Kelani River in Kitulgala, the famous filming location for 'The Bridge on the River Kwai.' Experience the adrenaline rush of tackling white-water rapids through a lush tropical rainforest, an adventure suitable for both beginners and thrill-seekers.\n\nAfter your river journey, enjoy a traditional Sri Lankan riverside lunch, served in a beautiful jungle setting. Relax by the river and soak in the natural beauty before your return transfer to Kandy, feeling the exhilarating energy of the forest.", 
                activities: ["White Water Rafting", "Lunch", "Private Transfer"] 
            }
        ],
        inclusions: ["Private transport (Taxi/TukTuk)", "Rafting equipment & guide", "Traditional Lunch", "Hotel Pick-up & Drop-off"],
        exclusions: ["Personal expenses", "Tips", "Travel insurance"],
        routeMap: routeMapKitulgala,
        reviews: adventureReviews,
        rating: 4.7,
        ratingLabel: "Thrill Seekers",
        physicalIntensity: 3,
        importantNotes: COMMON_NOTES
    },
];
