const fs = require('fs');

let content = fs.readFileSync('src/data/tours.js', 'utf8');

// We need to find the reviews array for each tour.
// The structure is `reviews: [\n ... \n]`
// We can use a regex to match the end of the reviews array `]`, but that's risky.
// Better: split the file by `reviews: [` and then for each part (except the first), find the closing `],` or `]` and insert the new reviews before it.

const newReviews = `
        { id: 997, name: "Jordan M.", rating: 3, date: "May 2026", profile: "Traveler", trip: "Sri Lanka Tour", comment: "The itinerary was a bit rushed for my taste, but we saw some incredibly beautiful places. Good value overall.", color: "#f3e5f5" },
        { id: 998, name: "Taylor R.", rating: 2, date: "April 2026", profile: "Traveler", trip: "Sri Lanka Tour", comment: "A few of the stops weren't my favorite and the travel time between cities was long. However, our guide was very friendly and did their best to keep us entertained.", color: "#e3f2fd" },
        { id: 999, name: "Alex W.", rating: 1, date: "March 2026", profile: "Traveler", trip: "Sri Lanka Tour", comment: "We had unseasonably bad weather which dampened the experience, and the accommodation wasn't what I expected. Still, the local food was absolutely amazing.", color: "#fff3e0" }
`;

const parts = content.split('reviews: [');
let newContent = parts[0];

for (let i = 1; i < parts.length; i++) {
    // Each part starts right after `reviews: [`
    // We want to insert the new reviews at the very beginning of the array or end of it.
    // Let's insert it right after `reviews: [`
    newContent += 'reviews: [\n' + newReviews + parts[i];
}

fs.writeFileSync('src/data/tours.js', newContent, 'utf8');
console.log('Added 3, 2, 1 star reviews to all tours.');
