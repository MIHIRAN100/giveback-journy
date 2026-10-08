const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Account.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Change background color
content = content.replace("backgroundColor: '#fafafa'", "backgroundColor: '#f8fafc'");

// 2. Wrap the LEFT SIDEBAR in a floating card
content = content.replace(
    "<div style={{ width: '100%', maxWidth: '300px', flexShrink: 0 }}>",
    "<div style={{ width: '100%', maxWidth: '320px', flexShrink: 0, backgroundColor: '#fff', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', height: 'fit-content' }}>"
);

// 3. Make Avatar fully circular instead of rounded-square (or keep rounded square but softer)
content = content.replace("borderRadius: '16px'", "borderRadius: '50%', boxShadow: '0 8px 20px rgba(0,0,0,0.1)'");
content = content.replace("borderRadius: '16px'", "borderRadius: '50%', boxShadow: '0 8px 20px rgba(0,0,0,0.1)'"); // Second occurrence for the initials fallback

// 4. Modernize the active tabs
content = content.replace(
    "borderBottom: activeTab === tab ? '2px solid #111' : '2px solid transparent',",
    "borderBottom: activeTab === tab ? '3px solid #111' : '3px solid transparent', color: activeTab === tab ? '#111' : '#888',"
);

// 5. Wrap the RIGHT CONTENT elements in modern floating cards
// "Journey Itinerary" table wrapper
content = content.replace(
    "<div style={{ marginBottom: '40px' }}>",
    "<div style={{ marginBottom: '40px', backgroundColor: '#fff', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>"
);

// "Booking Activity" wrapper
content = content.replace(
    "<div>\n                                    <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Booking Activity</h3>",
    "<div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>\n                                    <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Booking Activity</h3>"
);

// "Payment History" wrapper
content = content.replace(
    "<div>\n                                    <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Payment History</h3>",
    "<div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>\n                                    <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Payment History</h3>"
);

// 6. Avatar for initials bg color
content = content.replace("backgroundColor: '#e88931'", "background: 'linear-gradient(135deg, #111 0%, #333 100%)'");

// 7. Increase Avatar size
content = content.replace("width: '70px', height: '70px'", "width: '85px', height: '85px'");

// 8. Style updates for the All Bookings / All Payments tab content
content = content.replace(
    "padding: '20px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #eaeaea'",
    "padding: '25px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.02)'"
);
// Replace the second occurrence for the payments view too
content = content.replace(
    "padding: '20px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #eaeaea'",
    "padding: '25px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.02)'"
);

// Save back
fs.writeFileSync(filePath, content);
console.log("Modernized UI styling applied to Account.jsx");
