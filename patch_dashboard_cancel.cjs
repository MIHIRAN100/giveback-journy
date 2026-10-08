const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'admin', 'DashboardOverview.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Add cancelledBookings to initial state
content = content.replace(
    "confirmedBookings: 0,",
    "confirmedBookings: 0,\n        cancelledBookings: 0,"
);

// 2. Add 'cancelled' var
content = content.replace(
    "let confirmed = 0;",
    "let confirmed = 0;\n                let cancelled = 0;"
);

// 3. Add to loop
content = content.replace(
    "if (b.booking_status === 'pending') {\n                            pending++;\n                        }",
    "if (b.booking_status === 'pending') {\n                            pending++;\n                        }\n                        if (b.booking_status === 'cancelled' || b.booking_status === 'canceled') {\n                            cancelled++;\n                        }"
);

// 4. Set state
content = content.replace(
    "confirmedBookings: confirmed,",
    "confirmedBookings: confirmed,\n                    cancelledBookings: cancelled,"
);

// 5. Add UI card at bottom of right column
const newCardUI = `
                    {/* Cancellations Widget */}
                    <div style={{ background: '#fff', borderRadius: '20px', padding: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Cancellations</h2>
                            <i className="bi bi-three-dots" style={{ color: '#94a3b8', cursor: 'pointer' }}></i>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#ffe4e6', color: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                <i className="bi bi-x-circle-fill"></i>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: '700', color: '#111', fontSize: '0.95rem' }}>Cancelled Bookings</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Action required</div>
                            </div>
                            <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#111' }}>{stats.cancelledBookings}</div>
                        </div>
                    </div>
`;

content = content.replace(
    "                        </div>\n                    </div>\n\n                </div>",
    "                        </div>\n                    </div>\n" + newCardUI + "\n                </div>"
);

fs.writeFileSync(filePath, content);
console.log("Added Cancellations Card");
