const fs = require('fs');
const content = fs.readFileSync('src/data/tours.js', 'utf8');

// Find all review objects
const matches = [...content.matchAll(/\{[^}]*rating:\s*(\d)[^}]*comment:\s*("[^"]*")[^}]*\}/g)];
matches.forEach(m => {
    if (parseInt(m[1]) <= 4) {
        console.log(`Rating: ${m[1]} - Comment: ${m[2]}`);
    }
});
