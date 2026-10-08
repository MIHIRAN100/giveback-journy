const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Account.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Remove the country block from the top section
const topCountryStart = content.indexOf("{profile.country && (");
const topCountryEnd = content.indexOf(")}\n                        </div>\n                    </div>\n                    \n                    <div style={{ display: 'flex', gap: '30px'");
if (topCountryStart !== -1 && topCountryEnd !== -1) {
    // Cut it out
    content = content.substring(0, topCountryStart) + content.substring(topCountryEnd + 3);
} else {
    console.log("Could not find top country block");
}

// 2. Wrap tabs and insert country block
const tabsContainerStart = content.indexOf("<div style={{ display: 'flex', gap: '30px', borderBottom: '1px solid transparent' }}>");
if (tabsContainerStart !== -1) {
    const replacement = `<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid transparent' }}>
                        <div style={{ display: 'flex', gap: '30px' }}>`;
    
    content = content.replace("<div style={{ display: 'flex', gap: '30px', borderBottom: '1px solid transparent' }}>", replacement);
    
    const tabsEnd = content.indexOf("</div>\n                </div>\n\n                {/* Main Content Area */}");
    if (tabsEnd !== -1) {
        const countryBlock = `
                        </div>
                        {profile.country && (
                            <div style={{ fontSize: '0.85rem', color: '#aaa', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500', paddingBottom: '15px' }}>
                                {getCountryCode(profile.country) ? (
                                    <img src={\`https://flagcdn.com/w20/\${getCountryCode(profile.country)}.png\`} alt={profile.country} style={{ width: '18px', height: '13px', borderRadius: '2px' }} />
                                ) : (
                                    <i className="bi bi-geo-alt-fill" style={{ color: 'var(--primary-green)' }}></i>
                                )}
                                {profile.country}
                            </div>
                        )}`;
        
        content = content.substring(0, tabsEnd) + countryBlock + content.substring(tabsEnd);
    } else {
        console.log("Could not find end of tabs block");
    }
} else {
    console.log("Could not find tabs container");
}

fs.writeFileSync(filePath, content);
console.log("Moved flag parallel to tabs");
