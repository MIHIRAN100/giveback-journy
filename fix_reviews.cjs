const fs = require('fs');

const toursPath = 'src/data/tours.js';
let content = fs.readFileSync(toursPath, 'utf8');

const new1Star = `const CRITICAL_REVIEWS_1_STAR = [
    "The weather wasn't on our side during the trip, but the guide did their best to keep our spirits up. A beautiful country overall!",
    "I got a bit car sick on the winding roads to the mountains, but the destinations themselves were absolutely stunning.",
    "We had some minor delays during the trip, but the local food completely made up for it. Would definitely come back.",
    "The itinerary was a little too packed for me, but it's undeniable that Sri Lanka has amazing sights to offer.",
    "The tropical heat was a bit intense for us, but the cool breeze at the beaches was a great relief.",
    "I wish we had more free time to relax, but we did manage to see all the major highlights on our bucket list.",
    "A few bumps along the road, but the warmth of the locals left a lasting positive impression on us."
];`;

const new2Star = `const CRITICAL_REVIEWS_2_STAR = [
    "Some of the hotels were a bit basic, but the incredible warmth of the Sri Lankan people made it a memorable trip.",
    "There was a lot of driving involved between cities, but the views of tea plantations from the window were breathtaking.",
    "The schedule felt a bit rushed at times, but we did get to see everything we wanted to. Very eventful!",
    "A few minor miscommunications before the trip, but once we arrived, the on-ground team was super helpful and kind.",
    "The historical sites are great, though we recommend bringing a good pair of walking shoes and plenty of water.",
    "We spent quite a bit of time in the vehicle, but our driver made sure we were comfortable and played great local music.",
    "A bit exhausting with early morning starts, but catching the sunrise over the mountains made it worth it.",
    "Good overall, just wish we had an extra day in the itinerary to just sit by the pool and do nothing."
];`;

const new3Star = `const CRITICAL_REVIEWS_3_STAR = [
    "A solid trip! The days are long and full of activities, which is great if you want to see a lot, though a bit tiring.",
    "Good experience overall. The food and culture are amazing, even if the travel times between cities are long.",
    "Decent value. The sights are spectacular, just be prepared for the tropical heat and humidity!",
    "Loved the beaches and mountains. A few minor hiccups along the way, but nothing that ruined a wonderful vacation.",
    "The pacing was quite fast, but it meant we got to experience both the cultural triangle and the south coast in one trip.",
    "Overall a good time. Our guide was very knowledgeable, though some of the stops felt a bit crowded with other tourists.",
    "Enjoyable holiday. The wildlife safari was the absolute peak, even if the early wake-up call was tough.",
    "Beautiful island, vibrant culture, and delicious curries. We had a good time despite some long driving days.",
    "A nice overview of Sri Lanka. The train ride was fantastic, though the train itself was quite busy.",
    "Good itinerary. We felt well taken care of by the team and enjoyed learning about the rich history of the island."
];`;

// Replace the arrays using Regex that matches `const CRITICAL_REVIEWS_1_STAR = [...];`
content = content.replace(/const CRITICAL_REVIEWS_1_STAR = \[[^\]]+\];/s, new1Star);
content = content.replace(/const CRITICAL_REVIEWS_2_STAR = \[[^\]]+\];/s, new2Star);
content = content.replace(/const CRITICAL_REVIEWS_3_STAR = \[[^\]]+\];/s, new3Star);

fs.writeFileSync(toursPath, content, 'utf8');
console.log('Replaced negative reviews with slightly positive ones.');
