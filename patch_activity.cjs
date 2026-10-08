const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Account.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Array of light background colors
if (!content.includes("const bgColors = ['#e6f4ea', '#e8f0fe', '#fce8e6', '#fef7e0'];")) {
    content = content.replace(
        "const Account = () => {",
        "const bgColors = ['#e6f4ea', '#e8f0fe', '#fce8e6', '#f3e5f5'];\nconst Account = () => {"
    );
}

// 2. Change the booking activity background color from '#eee' to bgColors[idx % 4]
content = content.replace(
    /backgroundColor: '#eee'/g,
    "backgroundColor: bgColors[idx % 4]"
);
// Also fix the color of the fallback icon
content = content.replace(
    /color: '#aaa'/g,
    "color: '#666'"
);

// 3. Add the location icon in front of the tour name in the Booking Activity section
content = content.replace(
    "{booking.products?.name || booking.legacy_product_name || 'Custom Booking'} <span",
    "<i className=\"bi bi-geo-alt\" style={{ marginRight: '5px', color: '#5C3BBA' }}></i>{booking.products?.name || booking.legacy_product_name || 'Custom Booking'} <span"
);

fs.writeFileSync(filePath, content);
console.log("Applied light background colors and location icon to Account.jsx");
