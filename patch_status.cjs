const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Account.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Remove icon from Journey Itinerary
const tourNameTdStart = content.indexOf("<td style={{ padding: '15px 0', color: '#111', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '12px' }}>");
const tourNameTdEnd = content.indexOf("</td>", tourNameTdStart) + 5;

if (tourNameTdStart !== -1) {
    content = content.substring(0, tourNameTdStart) +
        "<td style={{ padding: '15px 0', color: '#111', fontWeight: 'bold' }}>\n" +
        "                                                        {booking.products?.name || booking.legacy_product_name || 'Custom Booking'}\n" +
        "                                                    </td>" +
        content.substring(tourNameTdEnd);
} else {
    console.log("Could not find TOUR NAME td block");
}

// 2. Add badge style to Status
content = content.replace(
    "<td style={{ padding: '15px 0', color: '#111', fontWeight: 'bold', textTransform: 'capitalize' }}>{booking.booking_status}</td>",
    `<td style={{ padding: '15px 0' }}>
                                                        <span style={{ 
                                                            padding: '4px 10px', 
                                                            borderRadius: '20px', 
                                                            fontSize: '0.75rem', 
                                                            fontWeight: 'bold', 
                                                            textTransform: 'uppercase',
                                                            backgroundColor: booking.booking_status === 'confirmed' ? '#dcfce7' : '#fef3c7',
                                                            color: booking.booking_status === 'confirmed' ? '#166534' : '#92400e'
                                                        }}>
                                                            {booking.booking_status}
                                                        </span>
                                                    </td>`
);

fs.writeFileSync(filePath, content);
console.log("Applied badge and removed table icon.");
