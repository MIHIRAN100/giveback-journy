import tourCover from '../assets/praveen-maleesha-5XSOMBEhJWQ-unsplash.jpg';
import southernCover from '../assets/kevin-olson-ScBHbYokiQE-unsplash.jpg';
import adventureCover from '../assets/etienne-boulanger-C5yfbvMWxC8-unsplash.jpg';
import mistMountainsCover from '../assets/Little Adam’s Peak.jpg';
import wildSafariCover from '../assets/Hurulu Eco Park.jpg';
import galleFortCover from '../assets/Galle Fort, Sri Lanka.jpg';
import koslandaCover from '../assets/Koslanda 🇱🇰.jpg';
import kandyEssenceCover from '../assets/download (4).jpg';
import nuwaraEliyaCover from '../assets/Nuwera Eliya day tour.jpg';
import pinnawalaCover from '../assets/Pinnawala Elephant Orphanage in Sri Lanka.jpg';
import adamsPeakCover from '../assets/download (5).jpg';
import raftingCover from '../assets/Rafting.jpg';
import routeMapSignature from '../assets/route-map.png';
import routeMapSouthern from '../assets/route-map-southern.png';
import routeMapHill from '../assets/route-map-hill.png';
import routeMapWild from '../assets/route-map-wild.png';
import routeMapScenic from '../assets/route-map-scenic.png';
import routeMapSignatureNew from '../assets/route-map-signature-new.png';
import routeMapSouthernNew from '../assets/route-map-southern-new.png';

export const tourPackages = [
    {
        id: 1,
        name: "7-Day Essential Sri Lanka",
        days: "7 Days / 6 Nights",
        description: "A carefully designed journey blending culture, nature, and adventure—perfect for travelers who want to experience the best of Sri Lanka in a short time.",
        price: "$840",
        image: tourCover,
        itinerary: [
            { 
                day: 1, 
                title: "Arrival in Negombo", 
                desc: "Welcome to Sri Lanka! Upon arrival, you will be transferred to Negombo, a relaxed beach town near the airport—perfect to recover after your flight and prepare for the adventure ahead. Take the day at your own pace and unwind.", 
                activities: ["Beach walk along Negombo coastline", "Lagoon boat ride", "Visit local fish markets", "Sunset by the beach"] 
            },
            { 
                day: 2, 
                title: "Negombo to Sigiriya | Sunset Adventure", 
                desc: "After breakfast, travel to Sigiriya, located in the cultural heart of the island. In the evening, enjoy a sunset hike up Pidurangala Rock—a rewarding climb offering breathtaking panoramic views. After the hike, return to your hotel and relax.", 
                activities: ["Scenic drive to Cultural Triangle", "Pidurangala Rock Hike", "Panoramic Sunset Views"] 
            },
            { 
                day: 3, 
                title: "Sunrise at Sigiriya & Wildlife Safari", 
                desc: "Start early with a sunrise visit to Sigiriya Rock Fortress, one of Sri Lanka’s most iconic landmarks. Return to the hotel for breakfast, then continue your journey with an exciting wild elephant safari, a visit to Dambulla Cave Temple, and a stop at a traditional herbal garden. Afterward, transfer to Kandy for a peaceful evening walk around the lake.", 
                activities: ["Sigiriya Rock Fortress", "Wild Elephant Safari", "Dambulla Cave Temple", "Herbal Garden Visit", "Kandy Lake Walk"] 
            },
            { 
                day: 4, 
                title: "Kandy to Ella | Scenic Train Experience", 
                desc: "Visit the sacred Temple of the Tooth in the morning. Then proceed towards Ella with a scenic journey. You will experience part of the world-famous Kandy to Ella train ride (from a nearby station due to current operational limits). Arrive in Ella and transfer to your accommodation to explore the local cafés.", 
                activities: ["Temple of the Tooth Relic", "Scenic Highland Train Ride", "Ella Town Exploration"] 
            },
            { 
                day: 5, 
                title: "Explore Ella at Your Own Pace", 
                desc: "Today is yours to explore Ella as a solo traveler. Immerse yourself in the mountain vibes, hike the trails, or simply relax with a view. Ella offers the perfect blend of adventure and tranquility in the highlands.", 
                activities: ["Hike Little Adam's Peak", "Visit Nine Arches Bridge", "Explore tea plantations", "Scenic Café Relaxation"] 
            },
            { 
                day: 6, 
                title: "Ella to Hikkaduwa via Galle Fort", 
                desc: "Travel south towards the coast. En route, stop at the thundering Ravana Falls for a photo opportunity. In the late afternoon, enjoy a historic sunset walk along the ramparts of Galle Fort before continuing to the vibrant shores of Hikkaduwa for your overnight stay.", 
                activities: ["Ravana Falls Stopover", "Galle Fort Sunset Walk", "Hikkaduwa Coastal Transition"] 
            },
            { 
                day: 7, 
                title: "Departure", 
                desc: "After breakfast, enjoy your final moments of island life before transferring to the airport for your departure journey, carrying home memories of ancient rocks, misty mountains, and golden shores.", 
                activities: ["Final Island Breakfast", "Airport Transfer"] 
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
        routeMap: routeMapSignatureNew,
        importantNotes: [
            "Temple Dress Code & Respectful Conduct: When visiting sacred sites like the Temple of the Tooth or Sigiriya, it is imperative to dress modestly. Both men and women must ensure their shoulders and knees are fully covered. We recommend carrying a light sarong or shawl in your day bag. Additionally, remember that it is considered highly disrespectful to pose with your back to a Buddha statue for photographs, or to wear clothing with religious symbols. Removal of hats and shoes is mandatory before entering temple grounds to maintain the sanctity of these ancient spiritual spaces.",

            "Regional Weather Patterns & Packing Essentials: Sri Lanka's geography creates diverse micro-climates. While the coast is tropical and humid, the hill country destinations like Kandy and Ella can experience significant temperature drops, especially during the evenings and early mornings. We advise packing a versatile wardrobe; breathable cotton fabrics are best for the lowlands, while a warm fleece or light down jacket is essential for the highlands. A sturdy pair of walking shoes is a must for exploring the rock fortresses and tea estates, along with a high-quality raincoat for unpredictable tropical showers.",
            "Currency, Tipping Culture & Local Transactions: The official currency is the Sri Lankan Rupee (LKR). While credit cards are widely accepted in major hotels and upscale restaurants in Colombo and Kandy, carrying local cash is essential for smaller transactions at local markets, village shops, and for tipping. Tipping is a customary way to show appreciation for good service; a small gesture for your driver, guides, and hotel staff goes a long way. We suggest withdrawing cash from ATMs in major cities, as they offer competitive exchange rates and are readily available throughout the main tourist routes."
        ],
        reviews: [
            { id: 1, name: "Sarah Jenkins", rating: 5, date: "October 2025", comment: "An absolutely flawless experience. The climb up Sigiriya at sunrise was the highlight of my year. Our driver was so knowledgeable and kind!", icon: "bi bi-person-circle" },
            { id: 2, name: "Mark Thompson", rating: 5, date: "September 2025", comment: "The train journey from Kandy to Ella was as beautiful as the pictures. Every detail was handled perfectly.", icon: "bi bi-person-badge" },
            { id: 3, name: "Elena Rossi", rating: 5, date: "August 2025", comment: "The wildlife safari in Minneriya was breathtaking! We saw over 50 elephants. Highly recommended.", icon: "bi bi-emoji-smile" },
            { id: 4, name: "James Wilson", rating: 5, date: "July 2025", comment: "Perfectly organized. The balance between culture and relaxation on the south coast was just right.", icon: "bi bi-person-heart" },
            { id: 5, name: "Chloe Dupont", rating: 5, date: "June 2025", comment: "Galle Fort at sunset is something I will never forget. Amazing hospitality from the locals.", icon: "bi bi-stars" },
            { id: 6, name: "Liam O'Connor", rating: 5, date: "May 2025", comment: "Best value for money. The budget stays were clean and the food was delicious everywhere we went.", icon: "bi bi-wallet2" },
            { id: 7, name: "Yuki Tanaka", rating: 5, date: "April 2025", comment: "The hiking in Ella was challenging but the views were worth every step. Excellent guides!", icon: "bi bi-compass" }
        ]
    },
    {
        id: 2,
        name: "Southern Sun & Beach Escape",
        days: "7 Days / 6 Nights",
        description: "A relaxing coastal journey along Sri Lanka’s south—combining beach life, culture, and optional adventures, with a perfect ending by the ocean.",
        price: "$600",
        image: southernCover,
        itinerary: [
            { 
                day: 1, 
                title: "Arrival & Beach Relaxation in Hikkaduwa", 
                desc: "Welcome to Sri Lanka! Your journey begins in Hikkaduwa, known for its lively beach vibe and surf culture. After checking into your guesthouse, take time to unwind and recover from your journey. Enjoy a beautiful sunset by the coast.", 
                activities: ["Beachfront Relaxation", "Indian Ocean Swim", "Sunset Watching"] 
            },
            { 
                day: 2, 
                title: "Marine Life & Coastal Vibes", 
                desc: "After breakfast, enjoy a full day at leisure exploring Hikkaduwa. Discover local cafés, shops, and the vibrant underwater world. Hikkaduwa is the perfect introduction to Sri Lanka's coastal beauty.", 
                activities: ["Beach Hopping", "Optional Snorkeling at Sanctuary", "Optional Scuba Diving"] 
            },
            { 
                day: 3, 
                title: "Hikkaduwa to Unawatuna via Galle", 
                desc: "Travel further south to Unawatuna, with a stop at the historic Galle Fort. Walk along the fort walls and explore charming streets filled with colonial architecture before checking into your Unawatuna guesthouse.", 
                activities: ["Galle Fort Wall Walk", "Colonial Architecture Tour", "Sunset Drinks by the Ocean"] 
            },
            { 
                day: 4, 
                title: "Beach & Nature in Unawatuna", 
                desc: "Enjoy a peaceful day combining beach and nature. Visit Jungle Beach, a quiet spot surrounded by lush greenery, or the Japanese Peace Pagoda for panoramic views of the coastline.", 
                activities: ["Unawatuna Beach Swim", "Jungle Beach Visit", "Japanese Peace Pagoda", "Optional Yoga Session"] 
            },
            { 
                day: 5, 
                title: "Unawatuna to Mirissa | Sunset Coast", 
                desc: "Continue your journey to Mirissa, one of Sri Lanka’s most beautiful and relaxed beach destinations. After check-in, visit Coconut Tree Hill for the most iconic sunset views on the island.", 
                activities: ["Travel to Mirissa", "Coconut Tree Hill Sunset", "Beachside Relaxation"] 
            },
            { 
                day: 6, 
                title: "Whale Watching & Final Relaxation", 
                desc: "Start early for a memorable ocean experience spotting blue whales and dolphins (seasonal). Spend your final afternoon fully unwinding and enjoying your last moments by the tropical Indian Ocean.", 
                activities: ["Optional Whale Watching", "Final Beach Relaxation", "Farewell Ocean Swim"] 
            },
            { 
                day: 7, 
                title: "Departure", 
                desc: "After breakfast, transfer directly to the airport for your onward journey. Carry the warmth of the sun and the rhythm of the waves home with you.", 
                activities: ["Final Island Breakfast", "Direct Airport Transfer"] 
            }
        ],
        inclusions: [
            "6 nights guesthouse accommodation",
            "Daily breakfast",
            "All ground transfers"
        ],
        exclusions: [
            "Lunch & dinner",
            "Optional activities",
            "Personal expenses"
        ],
        routeMap: routeMapSouthernNew,
        importantNotes: [
            "Beach Safety & Indian Ocean Currents: The southern coast of Sri Lanka offers breathtaking beaches, but the Indian Ocean can have powerful undercurrents and riptides. It is vital to pay close attention to the colored flags on the beach: red means the water is dangerous for swimming. Always consult with locals or hotel staff before heading out, especially during the monsoon transitions. If you find yourself caught in a current, stay calm and swim parallel to the shore until you are free. We prioritize your safety and recommend swimming only in designated areas with active lifeguard monitoring.",
            "Tropical Sun Protection & Hydration: The sun in Sri Lanka is exceptionally strong due to its proximity to the equator. Even on overcast days, UV levels remain high. We strongly advise using high-SPF, reef-safe sunscreen, wearing a wide-brimmed hat, and utilizing UV-protective swimwear. Maintaining hydration is equally important in the humid coastal heat. Always carry a reusable water bottle; we provide clean refills throughout your journey to ensure you remain energized and healthy. Avoid direct sun exposure during the peak hours of 11 AM to 3 PM to prevent heat exhaustion and severe sunburn.",
            "Responsible Whale Watching Etiquette: Mirissa is one of the world's premier destinations for spotting blue whales, but it's crucial to choose operators who prioritize marine conservation. Our partners follow strict international guidelines for whale watching, ensuring boats maintain a respectful distance and never cross the path of these majestic creatures. Never attempt to touch or feed marine life, and ensure all trash is disposed of correctly on the boat. By following these rules, we help preserve the delicate marine ecosystem for future generations while providing you with an awe-inspiring and ethical wildlife encounter.",
            "Eco-Conscious Travel & Wildlife Respect: The southern shores are nesting grounds for several endangered sea turtle species. If you encounter a turtle on the beach, especially at night, maintain a distance of at least 30 feet and never use flash photography, as it disorients them. Avoid walking on nesting areas and do not disturb the sand. Sri Lanka is also home to diverse land wildlife; always admire animals from a distance and avoid supporting attractions that use animals for entertainment. Your responsible actions contribute directly to the successful conservation efforts of this vibrant and fragile island ecosystem."
        ],
        reviews: [
            { id: 1, name: "Elena Rodriguez", rating: 5, date: "August 2025", comment: "Whale watching in Mirissa was breathtaking. We saw three blue whales! The hotel recommendations were spot on.", icon: "bi bi-person-heart" },
            { id: 2, name: "David Chen", rating: 4, date: "July 2025", comment: "Great surf lessons in Weligama. The southern coast is truly magical. Highly recommend the sunset at Coconut Tree Hill.", icon: "bi bi-person-video" }
        ]
    },
    {
        id: 3,
        name: "7-Day Scenic Adventure",
        days: "7 Days",
        description: "Journey through the emerald mountains of Ella, the wild jungles of Yala, and the golden shores of Mirissa. A perfect blend of nature, wildlife, and coastal bliss.",
        price: "$680",
        image: adventureCover,
        itinerary: [
            { day: 1, title: "Scenic Highlands Arrival", desc: "Embark on a breathtaking journey from the airport into the heart of the central highlands. As you ascend, witness the landscape transform from bustling lowlands into rolling tea plantations and mist-shrouded peaks. Arriving in Ella, you'll be greeted by crisp, cool air and stunning vistas of the surrounding mountain gaps, setting the perfect tone for your upcoming adventure.", activities: ["Mountain Transfer", "Tea Estate Views", "Evening in Ella"] },
            { day: 2, title: "Ella Peaks & Iconic Bridges", desc: "Start your day with a hike up Little Adam's Peak, an exhilarating experience that rewards you with panoramic views over the lush valley below. Afterward, walk along the tracks of the Nine Arches Bridge, a masterpiece of colonial engineering perfectly nestled within the forest. Spend the afternoon exploring the local cafes or visiting a hidden waterfall tucked away in the mountain trails.", activities: ["Little Adam's Peak Hike", "Nine Arches Bridge Visit", "Waterfall Exploration"] },
            { day: 3, title: "Wild Safari Expedition", desc: "Traverse the southern plains as you head toward Yala National Park. On arrival, head straight into the wild on an afternoon jeep safari, scanning the dense bushes and watering holes for the elusive Sri Lankan leopard, herds of elephants, and lazy crocodiles. The raw beauty of the jungle at sunset offers incredible photography opportunities and an unforgettable connection with nature.", activities: ["Yala Safari", "Leopard Spotting", "Wildlife Photography"] },
            { day: 4, title: "Tropical Coast Transition", desc: "Leave the wild plains behind and head to the shimmering coastline of the south. Reach the pristine sands of Mirissa, where the crashing waves and swaying palms offer an immediate sense of relaxation. Spend your afternoon walking the beach, watching the local fishermen, or simply lounging in a hammock while listening to the rhythmic pulse of the Indian Ocean.", activities: ["Coastal Drive", "Beach Relaxation", "Sunset Watching"] },
            { day: 5, title: "Marine Wonders & Leisure", desc: "Enjoy the freedom of a day at your own pace. Opt for an optional boat trip to spot whales and dolphins in the deep blue sea, or stay on land to explore the quiet fishing villages and secret coves. Whether you choose adrenaline-filled water activities or quiet reflection on the sand, the coastal charm of Mirissa promises a day of true indulgence and tranquility.", activities: ["Whale Watching", "Beach Exploration", "Relaxed Island Life"] },
            { day: 6, title: "Galle Fort & River Safari", desc: "Discover the rich history of Galle Fort, a UNESCO-listed site packed with colonial charm and artisan boutiques. After exploring the ramparts, head to the nearby river for a peaceful boat safari through the mangroves, where you can spot exotic birds and monitor lizards. The day seamlessly blends historical exploration with the natural serenity of Sri Lanka's winding waterways.", activities: ["Galle Fort Tour", "Madu River Safari", "Artisan Shopping"] },
            { day: 7, title: "Return to Memories", desc: "On your final day, take a slow morning to enjoy one last cup of Ceylon tea while looking out at the ocean. Your private driver will then guide you back to the airport, allowing you to reminisce about the diverse landscapes, the wild jungles, and the serene beaches you've traversed throughout your unforgettable seven-day adventure.", activities: ["Slow Morning", "Coastal Drive", "Airport Departure"] }
        ],
        inclusions: ["Accommodation with breakfast", "Airport pick-up & drop-off", "Private transport with Professional Driver", "Yala safari experience", "Madu River safari", "Visit to Galle Fort"],
        exclusions: ["International flights", "Lunch & Dinner", "Entrance fees"],
        routeMap: routeMapScenic,
        importantNotes: [
            "Wildlife Safari Etiquette & Safety: Embarking on a safari in Yala National Park is a thrilling experience, but it requires strict adherence to safety protocols. It is essential to remain quiet and stay completely inside the vehicle at all times to avoid distressing the animals. Leopards and elephants are wild and unpredictable; maintaining a respectful distance is mandatory. We also advocate for a 'no trace' policy—ensure all plastic and waste is kept within the jeep. By following these guidelines, you ensure your own safety while helping to preserve the natural behavior of Sri Lanka's most iconic wildlife in their pristine jungle habitat.",
            "Scenic Train Journey & Ticket Logistics: The train journey between Kandy and Ella is widely considered one of the most beautiful in the world. Due to its immense popularity, tickets for reserved seating in first and second class sell out weeks in advance. We handle these bookings for you to ensure the best possible experience. However, please note that the train schedule can be subject to delays. We recommend bringing a light snack and a book, though most travelers find themselves mesmerized by the passing tea estates and mountain vistas. This slow-travel experience is a highlight of the trip, offering a unique perspective on the island's interior.",
            "Hiking Preparedness & Gear for Ella: Exploring the peaks of Ella, including Little Adam’s Peak and Ella Rock, involves trekking through varied terrain, from manicured tea paths to rugged forest trails. Sturdy, non-slip hiking shoes or high-quality trainers with good grip are essential, especially as paths can become slippery after rain. We also recommend wearing long socks to protect against leeches in the denser forest areas during the wet season. Carrying a lightweight daypack with water, a camera, and a light rain jacket will ensure you are comfortable throughout your mountain adventures while capturing the stunning panoramic views from the summits.",
            "Connectivity & Communication in Remote Areas: While Sri Lanka has excellent mobile coverage in urban centers, signal strength can fluctuate significantly as you move through the deep jungles of Yala or the high-altitude regions of Ella. We recommend downloading offline maps and ensuring your loved ones know you may be out of reach during certain segments of your adventure. Most of our handpicked hotels and eco-lodges offer Wi-Fi in common areas, allowing you to stay connected and share your experiences. This temporary disconnection from the digital world often enhances the sense of immersion in the raw beauty and tranquility of the Sri Lankan wilderness."
        ],
        reviews: [
            { id: 1, name: "James Wilson", rating: 5, date: "November 2025", comment: "The safari in Yala was incredible. Our guide knew exactly where to find the leopards! Truly a wild adventure.", icon: "bi bi-person-workspace" },
            { id: 2, name: "Sophie Muller", rating: 5, date: "December 2025", comment: "Ella is a dream. The Nine Arches Bridge is even more impressive in person. Thank you for the amazing organization.", icon: "bi bi-person-check" }
        ]
    },
    {
        id: 4,
        name: "5-Day Mist & Mountains",
        days: "5 Days",
        description: "Venture into the emerald heart of Sri Lanka. Traverse the misty tea plantations of Nuwara Eliya and hike the scenic trails of Horton Plains.",
        price: "$550",
        image: mistMountainsCover,
        itinerary: [
            { day: 1, title: "Kandy Arrival & Sacred Temple", desc: "Enter the misty hills of Kandy and visit the sacred Temple of the Tooth Relic, the spiritual heart of the island. Walk through the beautifully adorned halls and witness the evening 'Pooja' ceremony, where the sound of drums and the scent of incense create a deeply spiritual atmosphere. Afterward, enjoy a quiet evening overlooking the city lights and the serene Kandy Lake.", activities: ["Temple of the Tooth", "Lake Walk", "Spiritual Ceremony"] },
            { day: 2, title: "Botanical Gardens & Tea Culture", desc: "Wander through the Peradeniya Botanical Gardens, home to a stunning collection of orchids and giant palm avenues. Later, visit a working tea factory to learn the secrets behind Sri Lanka's world-famous Ceylon tea. From plucking the tender leaves to the final drying process, you'll gain a new appreciation for every cup you enjoy amidst the rolling green estates.", activities: ["Botanical Garden Tour", "Tea Factory Visit", "Tea Tasting"] },
            { day: 3, title: "The Great Train Journey to Ella", desc: "Prepare for the journey of a lifetime as you board the train from Kandy to Ella. This six-hour ride is often cited as the most beautiful in the world, winding through high-altitude cloud forests, over historic viaducts, and past cascading waterfalls. Keep your camera ready as every turn reveals a new, more breathtaking view of the island's emerald heart.", activities: ["Iconic Train Ride", "Cloud Forest Views", "Photography Session"] },
            { day: 4, title: "Ella Rock & Nine Arches Adventure", desc: "Lace up your boots for a rewarding hike up Ella Rock, offering the most dramatic panoramic views in the region. After descending, visit the Nine Arches Bridge, an engineering marvel hidden within a lush forest valley. Stand on the tracks and feel the history of the railway as you wait for the colorful trains to pass through this iconic landscape.", activities: ["Ella Rock Hike", "Nine Arches Bridge", "Mountain Exploration"] },
            { day: 5, title: "Ravana Falls & Highland Farewell", desc: "Visit the thundering Ravana Falls, tied to ancient legends of the Ramayana. Feel the cooling mist on your face before enjoying a final traditional highland lunch in the village. As you prepare for your departure, take one last look at the stunning Ella Gap, carrying with you the peace and majesty of the Sri Lankan mountains.", activities: ["Ravana Falls Visit", "Village Lunch", "Panoramic Vistas"] }
        ],
        inclusions: ["All transfers with Professional Driver", "Train tickets", "Park entrance fees", "Accommodation + Breakfast"],
        exclusions: ["International flights", "Tips"],
        routeMap: routeMapHill,
        importantNotes: [
            "High Altitude Climate & Wardrobe Advice: Nuwara Eliya, often referred to as 'Little England,' sits at an elevation of 1,889 meters. Consequently, the climate is remarkably different from the tropical lowlands. Temperatures can drop to 10°C (50°F) or lower during the night, and mist is common in the mornings. We strongly advise packing layered clothing, including sweaters, long trousers, and a windproof jacket. Most historic hotels in this region provide heaters or hot water bottles, but being prepared with warm attire will ensure you can comfortably enjoy the colonial charm and scenic beauty of the highland plantations regardless of the weather.",
            "Leech Protection on Nature Trails: When hiking through the lush tea estates and forest reserves like Horton Plains, it is possible to encounter land leeches, particularly after a tropical downpour. While they are harmless, they can be a nuisance. We provide specialized leech socks and repellent spray for our guests during these treks. We also recommend wearing long trousers and tucking them into your socks for added protection. Staying on the main designated paths significantly reduces the likelihood of an encounter. These small precautions allow you to focus entirely on the breathtaking biodiversity and unique flora of the Sri Lankan highlands.",
            "Nuwara Eliya to Ella Train Segment: The segment of the railway between Nuwara Eliya (Nanu Oya station) and Ella is the most scenic part of the entire hill country line. The train winds through high-altitude cloud forests and vast emerald tea valleys. We recommend keeping your camera fully charged and staying near the windows or doors (safely!) to capture the famous views. The atmosphere on the train is often festive and communal, providing a wonderful opportunity to interact with local commuters and other travelers. It’s a slow, rhythmic journey that perfectly captures the soul of the island’s mountainous heart.",
            "Temple Etiquette & Sacred Site Protocols: As you visit the cultural landmarks of the hill country, such as the Seetha Amman Temple, please remember that these are active places of worship. In addition to the standard dress code of covering shoulders and knees, you will be required to remove your shoes and hats before entering the temple precincts. Walking barefoot on sun-warmed stone can be challenging, so some travelers choose to wear socks, which are generally permitted. Maintaining a quiet and respectful demeanor ensures you can witness the vibrant rituals and deep spirituality of the local community without causing any unintentional offense."
        ],
        reviews: [
            { id: 1, name: "Lucas Wagner", rating: 5, date: "September 2025", comment: "The mist in Nuwara Eliya is magical. We loved the colonial tea bungalows and the high-altitude hikes. A very relaxing segment of our trip.", icon: "bi bi-person-check" },
            { id: 2, name: "Emma Larsson", rating: 5, date: "October 2025", comment: "The train ride from Nanu Oya to Ella is life-changing. Don't forget your camera!", icon: "bi bi-person-heart" }
        ]
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
        exclusions: ["International flights", "Dinner"],
        routeMap: routeMapWild,
        importantNotes: [
            "Optimizing Your Safari Experience: For the best chances of encountering the elusive Sri Lankan leopard or large herds of wild elephants in Udawalawe and Yala, early morning safaris are essential. We typically depart before dawn to reach the park gates as they open, as wildlife is most active in the cooler hours. Our experienced naturalists and drivers are experts at tracking movements and identifying alarm calls of other animals. Patience is key; sometimes the most rewarding sightings happen when you least expect them. Ensure you have your binoculars ready to spot the incredible array of endemic birdlife and smaller mammals that call these jungles home.",
            "Safari Environment & Dust Protection: The terrain in Sri Lanka’s national parks can be very dry and rugged, leading to significant dust during jeep safaris. This is especially true during the dry season. We recommend bringing a lightweight scarf, buff, or face mask to protect your nose and mouth, as well as sunglasses to shield your eyes. Keeping your camera equipment in a protective bag when not in use is also highly advised to prevent dust from entering the lenses. These simple practical steps will ensure you remain comfortable throughout the multi-hour expeditions while you focus on the raw beauty of the untamed wilderness.",
            "Strict National Park Rules & Conservation: Sri Lanka takes wildlife conservation very seriously. Within the national parks, it is strictly forbidden to feed animals, litter, or use loud music. Jeeps must remain on designated tracks to protect the habitat. Our drivers are committed to these ethical standards and will not approach animals too closely to ensure their natural behavior is not disrupted. Smoking is also prohibited within the park boundaries. By respecting these rules, you contribute to the sustainable management of these vital ecosystems, ensuring that the wildlife continues to thrive and that future generations can also experience the magic of the wild.",
            " Hydration & Sun Safety in the Wild: The temperatures in the lowland jungles can rise rapidly after sunrise, often reaching over 30°C (86°F). Proper hydration is critical for your well-being. We provide ample bottled water in the jeeps, but we encourage the use of reusable containers to minimize plastic waste. Additionally, wear breathable, light-colored clothing and apply plenty of sunscreen. A wide-brimmed hat is useful, though you should ensure it is secured during the bumpy jeep ride. Staying cool and hydrated allows you to maintain your energy for the full duration of the safari, from the first light of dawn to the golden hues of late afternoon."
        ],
        reviews: [
            { id: 1, name: "Oliver Scott", rating: 5, date: "November 2025", comment: "Saw a leopard within the first hour at Yala! The drivers are incredibly skilled and respect the wildlife. A 10/10 experience.", icon: "bi bi-person-workspace" },
            { id: 2, name: "Mia Takahashi", rating: 5, date: "December 2025", comment: "Udawalawe elephants are so peaceful. It was amazing to see them in such large herds. Very well organized safari.", icon: "bi bi-person-circle" }
        ]
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
        image: nuwaraEliyaCover,
        itinerary: [
            { day: 1, title: "Kandy → Nuwara Eliya", activities: ["Tea factory visit", "Ramboda Falls", "Gregory Lake"], desc: "Travel through scenic mountain roads to the 'Little England' of Sri Lanka." },
            { day: 2, title: "Nuwara Eliya & Return", activities: ["Hakgala Gardens", "Strawberry farms", "Scenic drive back to Kandy"], desc: "Enjoy the refreshing mountain air and vibrant gardens before returning." }
        ],
        importantNotes: [
            "Nuwara Eliya Weather & Clothing: Known as 'Little England', Nuwara Eliya is significantly cooler than the lowlands. Temperatures can drop to 10°C (50°F) at night. We recommend bringing warm layers and a light jacket for the evenings.",
            "Tea Estate Etiquette: When visiting tea factories, please follow the guide's instructions. Photos are often encouraged, but avoid plucking tea leaves without permission as it's a delicate agricultural process.",
            "Altitude & Hydration: The winding roads can sometimes cause motion sickness. We recommend staying hydrated and perhaps having a light meal before the mountain climb."
        ],
        reviews: [
            { id: 1, name: "Sophie Clarke", rating: 5, date: "January 2026", comment: "The mist over the tea estates is unforgettable. Nuwara Eliya has such a unique charm. The Ramboda Falls stop was a great highlight!", icon: "bi bi-person-heart" },
            { id: 2, name: "Thomas Wright", rating: 5, date: "December 2025", comment: "A perfect 2-day trip from Kandy. The accommodation was cozy and the driver was very safe on the winding mountain roads.", icon: "bi bi-person-check" }
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
        image: pinnawalaCover,
        itinerary: [
            { day: 1, title: "Kandy → Pinnawala", activities: ["Elephant Orphanage", "River Bathing", "Millennium Elephant Foundation", "Spice Garden"], desc: "A heartwarming experience visiting the most famous elephant sanctuary on the island." }
        ],
        importantNotes: [
            "Elephant Bathing Schedule: To witness the spectacular sight of the elephant herd bathing in the Maha Oya river, we aim to arrive at the orphanage by 10 AM or 2 PM. This is the highlight of the visit and provides excellent photography opportunities.",
            "Responsible Interaction: We prioritize ethical wildlife encounters. While you can observe the elephants closely, we advise against any activities that cause stress to the animals. Respect the boundaries set by the mahouts (elephant handlers).",
            "Sun Protection: Most of the observation areas are outdoors near the river. We recommend wearing a hat and applying sunscreen, as the sun can be quite strong during the midday bathing sessions."
        ],
        reviews: [
            { id: 1, name: "Jessica Lee", rating: 5, date: "February 2026", comment: "Watching the elephants walk through the village streets to the river was incredible! A must-see if you're staying in Kandy.", icon: "bi bi-person-heart" },
            { id: 2, name: "David Miller", rating: 5, date: "January 2026", comment: "So many elephants! The river bathing session is just beautiful. It was great to see them so happy in the water.", icon: "bi bi-person-video" }
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
        image: adamsPeakCover,
        itinerary: [
            { day: 1, title: "Kandy → Dalhousie", activities: ["Drive to foothills", "Prep for climb", "Night start"], desc: "Travel from Kandy to the base of the peak and prepare for the midnight ascent." },
            { day: 2, title: "The Summit & Return", activities: ["Sunrise at Temple", "Descent", "Return to Kandy"], desc: "Witness the 'Shadow of the Peak' at sunrise before heading back for a well-earned rest." }
        ],
        importantNotes: [
            "Physical Preparation & Gear: The climb involves over 5,000 stone steps and can be physically demanding. We recommend wearing sturdy hiking shoes with good grip. The temperature drops significantly as you ascend, so bringing layers (including a warm hat and gloves) is essential for staying comfortable while waiting for the sunrise.",
            "Pilgrimage Season & Crowds: The official season runs from December to May. During full moon days and weekends, the path can become very crowded. We guide you on the best starting times to manage the flow and ensure you reach the summit comfortably before the first light of dawn.",
            "Temple Etiquette: Adam's Peak is a sacred site for multiple religions. Please dress respectfully (shoulders and knees covered) especially at the summit temple. It is customary to remove your shoes before entering the immediate temple precinct at the top."
        ],
        reviews: [
            { id: 1, name: "Alexander Gross", rating: 5, date: "March 2026", comment: "The most challenging and rewarding thing I've ever done. The sunrise was spiritual. Our driver made the logistics so easy so we could focus on the climb.", icon: "bi bi-person-check" },
            { id: 2, name: "Elena Volkov", rating: 5, date: "April 2026", comment: "A truly bucket-list experience. The view of the shadow of the peak at sunrise is something I'll never forget. Tough climb but worth every step!", icon: "bi bi-person-heart" }
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
        image: raftingCover,
        itinerary: [
            { day: 1, title: "Kandy → Kitulgala", activities: ["White water rafting", "Canyoning", "Jungle trekking", "River lunch"], desc: "An action-packed day on the Kelani River with professional adventure guides." }
        ],
        importantNotes: [
            "Safety Gear & Requirements: All participants are provided with international-standard life jackets and helmets. No prior rafting experience is necessary, but we do require all guests to inform their guide of any medical conditions or swimming abilities beforehand. The minimum age for rafting is typically 6 years old.",
            "What to Bring: You will get wet! We recommend wearing quick-drying sportswear or swimwear. A change of clothes and a towel are essential for after the rafting session. We provide secure lockers at the base camp for your dry clothes and valuables.",
            "Weather Conditions: Rafting is possible throughout the year, but the intensity of the rapids (Grades 2 and 3) can vary depending on the rainfall in the catchment area. Our guides constantly monitor the river levels to ensure a safe and thrilling experience."
        ],
        reviews: [
            { id: 1, name: "Ben Sullivan", rating: 5, date: "May 2026", comment: "The adrenaline rush was incredible! The guides were professional and made us feel safe while having a blast in the rapids. The lunch afterward was the best curry I've had in Sri Lanka.", icon: "bi bi-person-video" },
            { id: 2, name: "Carla Mendez", rating: 5, date: "April 2026", comment: "Such a fun day trip from Kandy. Canyoning and jumping into the natural pools was the highlight. Highly recommend for any adventure seekers!", icon: "bi bi-person-badge" }
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
