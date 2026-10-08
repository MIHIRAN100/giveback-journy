const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Account.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const regex = /<div style=\{\{ width: '60px', height: '60px', borderRadius: '8px', backgroundColor: bgColors\[idx % 4\], overflow: 'hidden' \}\}>[\s\S]*?<\/div>[\s]*<div>/g;

content = content.replace(regex, "<div>");

fs.writeFileSync(filePath, content);
console.log("Image removed properly.");
