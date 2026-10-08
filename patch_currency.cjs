const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Account.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Add import for useCurrency
if (!content.includes("useCurrency")) {
    content = content.replace(
        "import { useAuth } from '../context/AuthContext';",
        "import { useAuth } from '../context/AuthContext';\nimport { useCurrency } from '../context/CurrencyContext';"
    );
}

// 2. Destructure useCurrency
if (!content.includes("formatPrice")) {
    content = content.replace(
        "const { user, logOut } = useAuth();",
        "const { user, logOut } = useAuth();\n    const { formatPrice } = useCurrency();"
    );
}

// 3. Remove image from All Bookings tab
const allBookingsImageStart = content.indexOf("<div style={{ width: '60px', height: '60px', borderRadius: '8px', \nbackgroundColor: bgColors[idx % 4]");
if (allBookingsImageStart === -1) {
    // Try without \n
    const imgStartRegex = /<div style=\{\{ width: '60px', height: '60px', borderRadius: '8px', backgroundColor: bgColors\[idx % 4\], overflow: 'hidden' \}\}>[\s\S]*?<\/div>\s*<\/div>\s*<div>/m;
    content = content.replace(imgStartRegex, "<div>");
}

// 4. Update pricing logic to use formatPrice
// First, the one in "Payment History" (Overview tab)
content = content.replace(
    /\{booking\.amount_due > 0 \? \`\\\$\\\{booking\.currency\\\} \\\$\\\{booking\.amount_due\\\}\` : 'Fully Paid'\}/g,
    "{booking.amount_due > 0 ? formatPrice(booking.amount_due) : 'Fully Paid'}"
);
// In case the backticks are not escaped in the source code read by Node
content = content.replace(
    /\{booking\.amount_due > 0 \? `\$\{booking\.currency\} \$\{booking\.amount_due\}` : 'Fully Paid'\}/g,
    "{booking.amount_due > 0 ? formatPrice(booking.amount_due) : 'Fully Paid'}"
);

fs.writeFileSync(filePath, content);
console.log("Applied currency and removed booking image.");
