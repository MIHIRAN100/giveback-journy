const fs = require('fs');

const toursPath = 'src/data/tours.js';
const volPath = 'src/pages/VolunteerProgramDetails.jsx';

let toursData = fs.readFileSync(toursPath, 'utf8');

// 1. Emoji map for tours.js (uses class='')
const emojiMapHtml = {
    '🍽️': "<i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i>",
    '🐘': "<i class='bi bi-camera' style='color: #888; margin-right: 6px;'></i>",
    '🛕': "<i class='bi bi-bank' style='color: #888; margin-right: 6px;'></i>",
    '🌿': "<i class='bi bi-tree' style='color: #888; margin-right: 6px;'></i>",
    '🌅': "<i class='bi bi-sunset' style='color: #888; margin-right: 6px;'></i>",
    '🏘️': "<i class='bi bi-house' style='color: #888; margin-right: 6px;'></i>",
    '🚶': "<i class='bi bi-person-walking' style='color: #888; margin-right: 6px;'></i>",
    '☕': "<i class='bi bi-cup' style='color: #888; margin-right: 6px;'></i>",
    '⛰️': "<i class='bi bi-mountain' style='color: #888; margin-right: 6px;'></i>",
    '🛤️': "<i class='bi bi-train-freight-front' style='color: #888; margin-right: 6px;'></i>",
    '🏖️': "<i class='bi bi-umbrella' style='color: #888; margin-right: 6px;'></i>",
    '🐢': "<i class='bi bi-water' style='color: #888; margin-right: 6px;'></i>",
    '🦞': "<i class='bi bi-water' style='color: #888; margin-right: 6px;'></i>",
    '🤿': "<i class='bi bi-water' style='color: #888; margin-right: 6px;'></i>",
    '🌊': "<i class='bi bi-water' style='color: #888; margin-right: 6px;'></i>",
    '🫖': "<i class='bi bi-cup' style='color: #888; margin-right: 6px;'></i>",
    '🌉': "<i class='bi bi-signpost' style='color: #888; margin-right: 6px;'></i>",
    '🧳': "<i class='bi bi-briefcase' style='color: #888; margin-right: 6px;'></i>",
    '🌴': "<i class='bi bi-tree' style='color: #888; margin-right: 6px;'></i>",
    '🛶': "<i class='bi bi-water' style='color: #888; margin-right: 6px;'></i>",
    '🛍️': "<i class='bi bi-bag' style='color: #888; margin-right: 6px;'></i>",
    '🍹': "<i class='bi bi-cup-straw' style='color: #888; margin-right: 6px;'></i>",
    '🔥': "<i class='bi bi-fire' style='color: #888; margin-right: 6px;'></i>",
    '🧗': "<i class='bi bi-person-walking' style='color: #888; margin-right: 6px;'></i>",
    '🐒': "<i class='bi bi-tree' style='color: #888; margin-right: 6px;'></i>",
    '🛺': "<i class='bi bi-car-front' style='color: #888; margin-right: 6px;'></i>",
    '🚣': "<i class='bi bi-water' style='color: #888; margin-right: 6px;'></i>",
    '👣': "<i class='bi bi-person-walking' style='color: #888; margin-right: 6px;'></i>",
    '🧘': "<i class='bi bi-person-arms-up' style='color: #888; margin-right: 6px;'></i>",
    '🌤️': "<i class='bi bi-sun' style='color: #888; margin-right: 6px;'></i>",
    '🏔️': "<i class='bi bi-mountain' style='color: #888; margin-right: 6px;'></i>",
    '🚙': "<i class='bi bi-car-front' style='color: #888; margin-right: 6px;'></i>",
    '✔️': "<i class='bi bi-check-circle-fill' style='color: var(--primary-green); margin-right: 6px;'></i>",
    '❌': "<i class='bi bi-x-circle-fill' style='color: #dc3545; margin-right: 6px;'></i>"
};

// Replace emojis in tours.js
for (const [emoji, icon] of Object.entries(emojiMapHtml)) {
    const regex = new RegExp(emoji, 'g');
    toursData = toursData.replace(regex, icon);
}

// 2. Standardize Departure Info and Remove airport transfer from inclusions
const targetDepartureDesc = "\"<b><i class='bi bi-cup-hot' style='color: #888; margin-right: 6px;'></i> Breakfast included.</b><br/><br/>After breakfast, you can arrange your own transfer to wherever you wish to go by your own taxi. For an additional fee, we can arrange this transfer for you. Alternatively, you can choose to continue this journey by joining our volunteering programs.\"";

// We need to replace the desc of the LAST day of the itinerary for every tour.
// Since tours.js exports an array `tourPackages`, we can use a regex to match the itinerary arrays and replace the last day's desc.
// A simpler way: Find all occurrences of `title: "Departure",\n                desc: "..."` and replace.
// But wait, the title might be "Coastal Farewell & Departure" etc.
// Let's do a more robust string manipulation:
// Split the file by `itinerary: [`
let parts = toursData.split('itinerary: [');
for (let i = 1; i < parts.length; i++) {
    // Find the end of this itinerary array
    let endIdx = parts[i].indexOf('],');
    if (endIdx === -1) endIdx = parts[i].indexOf(']');
    
    let itineraryStr = parts[i].substring(0, endIdx);
    
    // Find the last `desc:` in this itineraryStr
    let lastDescIdx = itineraryStr.lastIndexOf('desc: "');
    if (lastDescIdx === -1) lastDescIdx = itineraryStr.lastIndexOf('desc: `');
    
    if (lastDescIdx !== -1) {
        // Find the end of this desc string
        let quoteChar = itineraryStr[lastDescIdx + 6]; // " or `
        let endDescIdx = itineraryStr.indexOf(quoteChar + ',', lastDescIdx + 7);
        if (endDescIdx === -1) endDescIdx = itineraryStr.indexOf(quoteChar + '\n', lastDescIdx + 7);
        
        if (endDescIdx !== -1) {
            let before = itineraryStr.substring(0, lastDescIdx);
            let after = itineraryStr.substring(endDescIdx + 1); // skip the quote
            
            // Replace with target
            itineraryStr = before + 'desc: ' + targetDepartureDesc + after;
        }
    }
    
    parts[i] = itineraryStr + parts[i].substring(endIdx);
}
toursData = parts.join('itinerary: [');

// Remove Departure airport transfer from inclusions
toursData = toursData.replace(/"Departure airport transfer",?\s*/g, '');
toursData = toursData.replace(/"Departure airport transfer"/g, '');

fs.writeFileSync(toursPath, toursData);

// Now for VolunteerProgramDetails.jsx (uses className='')
if (fs.existsSync(volPath)) {
    let volData = fs.readFileSync(volPath, 'utf8');
    const emojiMapJsx = {
        '✔️': "<i className='bi bi-check-circle-fill' style={{color: 'var(--primary-green)', marginRight: '8px'}}></i>",
        '❌': "<i className='bi bi-x-circle-fill' style={{color: '#dc3545', marginRight: '8px'}}></i>",
        '🌍': "<i className='bi bi-globe-americas' style={{color: 'var(--primary-green)', marginRight: '8px'}}></i>"
    };

    for (const [emoji, icon] of Object.entries(emojiMapJsx)) {
        const regex = new RegExp(emoji, 'g');
        volData = volData.replace(regex, icon);
    }
    fs.writeFileSync(volPath, volData);
}

console.log("Replacements complete.");
