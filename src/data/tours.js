import tourCover from '../assets/praveen-maleesha-5XSOMBEhJWQ-unsplash.jpg';
import southernCover from '../assets/kevin-olson-ScBHbYokiQE-unsplash.jpg';
import adventureCover from '../assets/etienne-boulanger-C5yfbvMWxC8-unsplash.jpg';
import mistMountainsCover from '../assets/Little Adam’s Peak.jpg';
import wildSafariCover from '../assets/Hurulu Eco Park.jpg';
import galleFortCover from '../assets/Galle Fort, Sri Lanka.jpg';
import koslandaCover from '../assets/Koslanda 🇱🇰.jpg';
import kandyEssenceCover from '../assets/download (4).jpg';

export const tourPackages = [
    {
        id: 1,
        name: "7-Day Signature Sri Lanka",
        days: "7 Days",
        description: "A perfectly balanced journey through the heart of the island. From the ancient lion rock of Sigiriya to the misty highlands of Ella and the sacred temples of Kandy.",
        price: "$850",
        image: tourCover,
        itinerary: [
            { day: 1, title: "Arrival | Negombo", activities: ["Airport pick-up", "Transfer to Negombo", "Rest"], desc: "Recover from travel in the coastal town of Negombo." },
            { day: 2, title: "Negombo → Sigiriya", activities: ["Sigiriya Rock Fortress", "Sunset experience"], desc: "Climb the iconic Lion Rock and enjoy a breathtaking sunset." },
            { day: 3, title: "Sigiriya → Kandy", activities: ["Elephant safari", "Dambulla Cave Temple"], desc: "Encounter wildlife and explore ancient cave architecture." },
            { day: 4, title: "Kandy Cultural", activities: ["Temple of Tooth", "Traditional lunch"], desc: "Immerse yourself in the sacred heart of the hill capital." },
            { day: 5, title: "Kandy → Ella", activities: ["Scenic train transfer", "Ella leisure"], desc: "Experience one of the world's most beautiful train journeys." },
            { day: 6, title: "Explore Ella", activities: ["Little Adam's Peak", "Nine Arches Bridge"], desc: "Hike through lush tea estates and over architectural marvels." },
            { day: 7, title: "Departure", activities: ["Transfer to airport"], desc: "Safe travels back home with memories of the island." }
        ],
        inclusions: ["Airport pick-up/drop-off", "Private vehicle with Professional Driver", "Budget guesthouses (A/C)", "Daily breakfast", "Entrance fees"],
        exclusions: ["International flights", "Visa fees", "Lunch and dinner"]
    },
    {
        id: 2,
        name: "Southern Shores & Blue Whales",
        days: "5 Days",
        description: "A coastal escape focused on the pristine beaches of the south. From the colonial charm of Galle Fort to the majestic blue whales of Mirissa.",
        price: "$620",
        image: southernCover,
        itinerary: [
            { day: 1, title: "Arrival & Galle Fort", activities: ["Airport pick-up", "Galle Fort walk"], desc: "Explore the UNESCO-listed ramparts of the Dutch Fort." },
            { day: 2, title: "Mirissa Coastal Soul", activities: ["Beach leisure", "Coconut Tree Hill"], desc: "Relax on the golden sands and capture the perfect sunset." },
            { day: 3, title: "Whale Watching", activities: ["Boat trip", "Dolphin spotting"], desc: "Witness the majestic blue whales in their natural habitat." },
            { day: 4, title: "Weligama Surf", activities: ["Surfing lesson", "Beach BBQ"], desc: "Ride the waves and enjoy fresh seafood on the shore." },
            { day: 5, title: "Departure", activities: ["Transfer to airport"], desc: "Heading back with sun-kissed memories." }
        ],
        inclusions: ["Airport transfers", "Private vehicle with Professional Driver", "Whale watching boat", "Surfing lesson", "Accommodation + Breakfast"],
        exclusions: ["International flights", "Personal expenses"]
    },
    {
        id: 3,
        name: "7-Day Scenic Adventure",
        days: "7 Days",
        description: "Journey through the emerald mountains of Ella, the wild jungles of Yala, and the golden shores of Mirissa. A perfect blend of nature, wildlife, and coastal bliss.",
        price: "$680",
        image: adventureCover,
        itinerary: [
            { day: 1, title: "Arrival | Ella", activities: ["Airport meet & greet", "Scenic drive to Ella", "Mountains & Waterfalls"], desc: "Travel through lush tea estates to the mountain village of Ella." },
            { day: 2, title: "Explore Ella", activities: ["Nine Arch Bridge", "Little Adam's Peak", "Ella Rock (Optional)"], desc: "Hike to panoramic viewpoints and discover colonial-era architecture." },
            { day: 3, title: "Ella → Yala", activities: ["Transfer to Tissamaharama", "Evening Yala Safari"], desc: "Encounter leopards, elephants, and crocodiles in their natural habitat." },
            { day: 4, title: "Yala → Mirissa", activities: ["Travel to Coast", "Beach relaxation"], desc: "Unwind on golden sands with palm trees and calm blue waters." },
            { day: 5, title: "Leisure in Mirissa", activities: ["Whale watching (Optional)", "Coastal exploring"], desc: "Spot blue whales in the ocean or relax at local seaside cafés." },
            { day: 6, title: "Galle & Hikkaduwa", activities: ["Madu River safari", "Galle Fort visit"], desc: "Explore the historic Dutch Fort and enjoy a peaceful river boat ride." },
            { day: 7, title: "Departure", activities: ["Transfer to airport"], desc: "Final journey back to the airport for your flight home." }
        ],
        inclusions: ["Accommodation with breakfast", "Airport pick-up & drop-off", "Private transport with Professional Driver", "Yala safari experience", "Madu River safari", "Visit to Galle Fort"],
        exclusions: ["International flights", "Visa fees", "Lunch & Dinner", "Entrance fees"]
    },
    {
        id: 4,
        name: "5-Day Mist & Mountains",
        days: "5 Days",
        description: "Venture into the emerald heart of Sri Lanka. Traverse the misty tea plantations of Nuwara Eliya and hike the scenic trails of Horton Plains.",
        price: "$550",
        image: mistMountainsCover,
        itinerary: [
            { day: 1, title: "Arrival | Kandy", activities: ["Pick-up", "Kandy Lake walk"], desc: "Start your mountain journey in the peaceful hill capital." },
            { day: 2, title: "Nuwara Eliya", activities: ["Blue train ride", "Tea factory"], desc: "Travel through the clouds to the 'Little England' of Sri Lanka." },
            { day: 3, title: "Horton Plains", activities: ["World's End trek", "Bakers Falls"], desc: "Stand on the edge of the world and witness raw highland nature." },
            { day: 4, title: "Ella Adventure", activities: ["Nine Arches Bridge", "Little Adam's Peak"], desc: "Discover the most charming mountain village on the island." },
            { day: 5, title: "Departure", activities: ["Transfer to airport"], desc: "Descend from the mountains for your flight home." }
        ],
        inclusions: ["All transfers with Professional Driver", "Train tickets", "Park entrance fees", "Accommodation + Breakfast"],
        exclusions: ["International flights", "Tips"]
    },
    {
        id: 5,
        name: "6-Day Wild Safari Expedition",
        days: "6 Days",
        description: "Experience the raw beauty of Sri Lanka's wildlife. Encounter leopards in Yala and explore the untamed jungles of Udawalawe.",
        price: "$720",
        image: wildSafariCover,
        itinerary: [
            { day: 1, title: "Arrival | Udawalawe", activities: ["Pick-up", "Sunset safari"], desc: "Meet the elephant herds in their untamed grassland home." },
            { day: 2, title: "Elephant Home", activities: ["Feeding session", "Transfer to Yala"], desc: "Visit the transit home for baby elephants before the jungle." },
            { day: 3, title: "Yala Expedition", activities: ["Full day safari", "Picnic lunch"], desc: "A dedicated search for leopards and bears in the deep wild." },
            { day: 4, title: "Tangalle Coast", activities: ["Transfer to Tangalle", "Turtle visit"], desc: "Transition from the jungle to the wild, secluded shores." },
            { day: 5, title: "Southern Leisure", activities: ["Lagoon safari", "Beach BBQ"], desc: "Relax and enjoy the coastal wildlife of the deep south." },
            { day: 6, title: "Departure", activities: ["Transfer to airport"], desc: "Final memories of the island's wild side." }
        ],
        inclusions: ["All transfers with Professional Driver", "4x4 Safari Jeeps", "Park fees", "Accommodation + Breakfast"],
        exclusions: ["International flights", "Dinner"]
    },
    {
        id: 6,
        name: "3-Day Galle Fort Escape",
        days: "3 Days",
        description: "A quick but immersive journey into the colonial heart of Sri Lanka. Walk the historic ramparts and enjoy boutique coastal living.",
        price: "$320",
        image: galleFortCover,
        itinerary: [
            { day: 1, title: "Arrival | Galle", activities: ["Airport pick-up", "Sunset on ramparts"], desc: "Arrive at the Dutch Fort and walk the ancient walls." },
            { day: 2, title: "Fort Boutique", activities: ["Lighthouse visit", "Shopping"], desc: "Discover the charming streets and local artisan shops." },
            { day: 3, title: "Departure", activities: ["Morning swim", "Transfer to airport"], desc: "One last dip in the ocean before your flight." }
        ],
        inclusions: ["Airport transfers with Professional Driver", "Guided walk", "Accommodation + Breakfast"],
        exclusions: ["Lunch and dinner"]
    },
    {
        id: 7,
        name: "Into the Wild",
        days: "4 Days",
        description: "A deep dive into the rainforest and untamed landscapes. Experience the raw biodiversity of Sinharaja and the hidden waterfalls of the south.",
        price: "$480",
        image: koslandaCover,
        itinerary: [
            { day: 1, title: "Arrival | Sinharaja", activities: ["Airport pick-up", "Jungle lodge check-in"], desc: "Enter the heart of the last primeval rainforest in Sri Lanka." },
            { day: 2, title: "Rainforest Trek", activities: ["Guided jungle hike", "Bird watching"], desc: "Discover endemic species and the vibrant life under the canopy." },
            { day: 3, title: "Waterfalls & Wild", activities: ["Natural pool bath", "Night jungle walk"], desc: "Swim in hidden falls and experience the forest after dark." },
            { day: 4, title: "Departure", activities: ["Morning trek", "Transfer to airport"], desc: "Leave the wilderness behind with a soul full of nature." }
        ],
        inclusions: ["All transfers with Professional Driver", "Jungle guide", "Accommodation + All Meals", "Park fees"],
        exclusions: ["International flights", "Personal gear"]
    },
    {
        id: 8,
        name: "1-Day Kandy Essence",
        days: "1 Day",
        description: "Explore the cultural soul of Sri Lanka in just one day. Visit the sacred Temple of the Tooth and enjoy the scenic beauty of the hill capital starting from Kandy.",
        price: "$120",
        image: kandyEssenceCover,
        itinerary: [
            { day: 1, title: "Kandy Highlights", activities: ["Temple of Tooth", "Royal Botanical Gardens", "Kandy Lake Walk", "Cultural Show"], desc: "A deep dive into the spiritual and natural beauty of the hill capital." }
        ],
        inclusions: ["Private transport with Driver", "All Entrance fees", "Lunch with a view", "Bottle of water"],
        exclusions: ["Personal expenses", "Tips"]
    },
    {
        id: 9,
        name: "2-Day Highlands Escape",
        days: "2 Days",
        description: "A perfect getaway from Kandy to the misty mountains of Nuwara Eliya. Experience tea plantations, waterfalls, and the cool highland breeze.",
        price: "$240",
        image: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=1200",
        itinerary: [
            { day: 1, title: "Kandy → Nuwara Eliya", activities: ["Tea factory visit", "Ramboda Falls", "Gregory Lake"], desc: "Travel through scenic mountain roads to the 'Little England' of Sri Lanka." },
            { day: 2, title: "Nuwara Eliya & Return", activities: ["Hakgala Gardens", "Strawberry farms", "Scenic drive back to Kandy"], desc: "Enjoy the refreshing mountain air and vibrant gardens before returning." }
        ],
        inclusions: ["Private transport with Driver", "1 Night Accommodation (3-star)", "Breakfast", "All Entrance fees"],
        exclusions: ["Lunch and dinner", "Tips"]
    },
    {
        id: 10,
        name: "Kandy & Pinnawala Day Trip",
        days: "1 Day",
        description: "Spend a day with the gentle giants. Visit the world-famous Pinnawala Elephant Orphanage and witness elephants bathing in the river, starting from Kandy.",
        price: "$110",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=1200",
        itinerary: [
            { day: 1, title: "Kandy → Pinnawala", activities: ["Elephant Orphanage", "River Bathing", "Millennium Elephant Foundation", "Spice Garden"], desc: "A heartwarming experience visiting the most famous elephant sanctuary on the island." }
        ],
        inclusions: ["Private transport with Driver", "Orphanage Entrance fees", "Lunch near the river", "English speaking guide"],
        exclusions: ["Personal expenses", "Elephant riding (not recommended)"]
    },
    {
        id: 11,
        name: "Adam's Peak Sunrise Quest",
        days: "2 Days",
        description: "Embark on a spiritual journey from Kandy to the sacred summit of Adam's Peak. Hike under the stars to witness a breathtaking mountain sunrise.",
        price: "$280",
        image: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&q=80&w=1200",
        itinerary: [
            { day: 1, title: "Kandy → Dalhousie", activities: ["Drive to foothills", "Prep for climb", "Night start"], desc: "Travel from Kandy to the base of the peak and prepare for the midnight ascent." },
            { day: 2, title: "The Summit & Return", activities: ["Sunrise at Temple", "Descent", "Return to Kandy"], desc: "Witness the 'Shadow of the Peak' at sunrise before heading back for a well-earned rest." }
        ],
        inclusions: ["Private transport with Driver", "1 Night Lodge stay", "Early morning coffee/tea", "Walking sticks provided"],
        exclusions: ["Personal guide for climb", "All meals except snacks"]
    },
    {
        id: 12,
        name: "Kitulgala White Water Rafting",
        days: "1 Day",
        description: "Get your adrenaline pumping with a day trip to Kitulgala from Kandy. Experience white water rafting and explore the lush tropical rainforest.",
        price: "$130",
        image: "https://images.unsplash.com/photo-1530608108141-984755ad22d4?auto=format&fit=crop&q=80&w=1200",
        itinerary: [
            { day: 1, title: "Kandy → Kitulgala", activities: ["White water rafting", "Canyoning", "Jungle trekking", "River lunch"], desc: "An action-packed day on the Kelani River with professional adventure guides." }
        ],
        inclusions: ["Private transport with Driver", "Rafting equipment & Life jackets", "Adventure Guide", "Traditional buffet lunch"],
        exclusions: ["Insurance", "GoPro rental for photos"]
    }
];

export const TOURS_DATA = [
    { id: 1, title: "The Lion Rock", category: "Historical", rating: 4.9, price: "$45", image: "https://images.unsplash.com/photo-1588598136852-2999e339f416?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Kandy Temple", category: "Cultural", rating: 4.8, price: "$30", image: "https://images.unsplash.com/photo-1625736312933-7649539665bc?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Nine Arches", category: "Adventure", rating: 4.9, price: "$25", image: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Yala Safari", category: "Nature", rating: 4.7, price: "$60", image: "https://images.unsplash.com/photo-1590418606746-018840fb9cd0?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Galle Fort", category: "Historical", rating: 4.8, price: "$20", image: "https://images.unsplash.com/photo-1626081442111-744315264020?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Into the Wild", category: "Nature", rating: 4.9, price: "$55", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800" },
    { id: 7, title: "Ancient Polonnaruwa", category: "Historical", rating: 4.8, price: "$35", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800" },
    { id: 8, title: "Adam's Peak Trek", category: "Adventure", rating: 4.9, price: "$50", image: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&q=80&w=800" }
];
