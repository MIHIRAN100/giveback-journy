const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Account.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const regex = /<div style=\{\{ display: 'flex', gap: '30px', borderBottom: '1px solid transparent' \}\}>[\s\S]*?\{\['Overview', 'Bookings', 'Payments'\].map\(tab => \([\s\S]*?<\/div>\s*\)\)\}\s*<\/div>/;

const newStr = `<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid transparent' }}>
    <div style={{ display: 'flex', gap: '30px' }}>
        {['Overview', 'Bookings', 'Payments'].map(tab => (
            <div 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ 
                    paddingBottom: '15px', 
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: activeTab === tab ? '600' : '500',
                    borderBottom: activeTab === tab ? '3px solid var(--primary-green)' : '3px solid transparent', 
                    color: activeTab === tab ? 'var(--primary-green)' : '#aaa',
                    transition: 'all 0.2s ease'
                }}
            >
                {tab}
            </div>
        ))}
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
    )}
</div>`;

content = content.replace(regex, newStr);

fs.writeFileSync(filePath, content);
console.log("Replaced tabs container correctly.");
