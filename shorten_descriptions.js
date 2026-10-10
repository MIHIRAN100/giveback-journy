import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/tours.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Regex to match description: "..." 
// Since they contain \n\n, we want to match everything inside the double quotes.
// Then we replace the matched string with only its first paragraph.

content = content.replace(/description:\s*"([^"]+)"/g, (match, p1) => {
    // p1 is the description text.
    // split by \n\n and take the first paragraph
    const firstParagraph = p1.split('\\n\\n')[0];
    return `description: "${firstParagraph}"`;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Done!');
