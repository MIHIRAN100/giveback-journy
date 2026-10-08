const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Account.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Fix the flag text color from #666 to #aaa (light grey) so it's visible on dark navy
content = content.replace(
    "color: '#666', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '500'",
    "color: '#aaa', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '500'"
);

// Fix the inactive tabs text color from #888 to #aaa so it's readable
content = content.replace(
    "color: activeTab === tab ? 'var(--primary-green)' : '#888',",
    "color: activeTab === tab ? 'var(--primary-green)' : '#aaa',"
);

// Also right-align the flag container to perfectly match the button
// It's already in a flex-end container, but we can ensure padding is matched if needed. It should be fine.

fs.writeFileSync(filePath, content);
console.log("Fixed text colors for dark header.");
