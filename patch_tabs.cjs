const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Account.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Remove Preferences and Files from the tabs array
content = content.replace(
    "['Overview', 'Bookings', 'Preferences', 'Payments', 'Files'].map(tab => (",
    "['Overview', 'Bookings', 'Payments'].map(tab => ("
);

// 2. Add legacy_product_name and featured_image to the table logic
// Let's replace the whole RIGHT CONTENT AREA again with the fixed logic
const rightContentStart = content.indexOf('{/* RIGHT CONTENT AREA */}');
const rightContentEnd = content.indexOf('</div>\n            </div>\n        </div>\n    );\n};');

if (rightContentStart !== -1 && rightContentEnd !== -1) {
    const newRightContent = `{/* RIGHT CONTENT AREA */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    
                    {activeTab === 'Overview' && (
                        <>
                            {/* Top Table Area (Mimicking "Job Information") -> We use it for "Upcoming Journeys" */}
                            <div style={{ marginBottom: '40px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Journey Itinerary</h3>
                                    <button onClick={() => navigate('/packages')} style={{ background: 'none', border: 'none', color: '#d32f2f', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '600' }}>
                                        + Find Tours
                                    </button>
                                </div>
                                
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                                        <thead>
                                            <tr style={{ color: '#888', borderBottom: '1px solid #eaeaea' }}>
                                                <th style={{ padding: '12px 0', fontWeight: '600' }}>TOUR NAME</th>
                                                <th style={{ padding: '12px 0', fontWeight: '600' }}>STATUS</th>
                                                <th style={{ padding: '12px 0', fontWeight: '600' }}>TRAVEL DATE</th>
                                                <th style={{ padding: '12px 0', fontWeight: '600' }}>TRAVELERS</th>
                                                <th style={{ padding: '12px 0', fontWeight: '600' }}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.slice(0, 4).map((booking, idx) => (
                                                <tr key={idx} style={{ borderBottom: '1px solid #f5f5f5' }}>
                                                    <td style={{ padding: '15px 0', color: '#111', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                        <div style={{ width: '36px', height: '36px', borderRadius: '6px', backgroundColor: '#eee', overflow: 'hidden', flexShrink: 0 }}>
                                                            {booking.products?.featured_image ? (
                                                                <img src={booking.products.featured_image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="tour" />
                                                            ) : (
                                                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}><i className="bi bi-image"></i></div>
                                                            )}
                                                        </div>
                                                        {booking.products?.name || booking.legacy_product_name || 'Custom Booking'}
                                                    </td>
                                                    <td style={{ padding: '15px 0', color: '#555', textTransform: 'capitalize' }}>{booking.booking_status}</td>
                                                    <td style={{ padding: '15px 0', color: '#555' }}>{new Date(booking.booking_date).toLocaleDateString()}</td>
                                                    <td style={{ padding: '15px 0', color: '#555' }}>{booking.participants}</td>
                                                    <td style={{ padding: '15px 0', color: '#aaa', textAlign: 'right' }}><i className="bi bi-three-dots"></i></td>
                                                </tr>
                                            ))}
                                            {bookings.length === 0 && (
                                                <tr>
                                                    <td colSpan="5" style={{ padding: '20px 0', textAlign: 'center', color: '#888' }}>No journeys planned yet.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Bottom Split Area (Mimicking "Activity" and "Compensation") */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                                
                                {/* Bookings Activity */}
                                <div>
                                    <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Booking Activity</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        {bookings.slice(0, 3).map((booking, idx) => (
                                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eee', overflow: 'hidden', flexShrink: 0 }}>
                                                    {booking.products?.featured_image ? (
                                                        <img src={booking.products?.featured_image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="tour" />
                                                    ) : (
                                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}><i className="bi bi-geo-alt"></i></div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '0.85rem', color: '#111', fontWeight: '600' }}>
                                                        {booking.products?.name || booking.legacy_product_name || 'Custom Booking'} <span style={{ color: '#888', fontWeight: '400' }}>booked on {new Date(booking.created_at).toLocaleDateString()}</span>
                                                    </div>
                                                    <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '3px' }}>
                                                        Ref: {booking.booking_reference || booking.id.split('-')[0]}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {bookings.length === 0 && <div style={{ fontSize: '0.85rem', color: '#888' }}>No recent activity.</div>}
                                        {bookings.length > 0 && <button onClick={() => setActiveTab('Bookings')} style={{ background: 'none', border: 'none', color: '#d32f2f', fontSize: '0.85rem', fontWeight: '600', padding: 0, textAlign: 'left', cursor: 'pointer', marginTop: '10px' }}>View all</button>}
                                    </div>
                                </div>

                                {/* Payment History */}
                                <div>
                                    <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Payment History</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                        {bookings.slice(0, 3).map((booking, idx) => (
                                            <div key={idx}>
                                                <div style={{ fontSize: '0.85rem', color: '#111', fontWeight: '600', marginBottom: '4px' }}>
                                                    {booking.amount_due > 0 ? \`\${booking.currency} \${booking.amount_due}\` : 'Fully Paid'} 
                                                    <span style={{ color: '#888', fontWeight: '400' }}> for {(booking.products?.name || booking.legacy_product_name || 'Custom Booking').substring(0, 15)}...</span>
                                                </div>
                                                <div style={{ fontSize: '0.75rem', color: '#888' }}>
                                                    Status: <span style={{ textTransform: 'capitalize', color: booking.payment_status === 'paid' ? 'green' : 'inherit' }}>{booking.payment_status.replace('_', ' ')}</span>
                                                </div>
                                            </div>
                                        ))}
                                        {bookings.length === 0 && <div style={{ fontSize: '0.85rem', color: '#888' }}>No payment history.</div>}
                                        {bookings.length > 0 && <button onClick={() => setActiveTab('Payments')} style={{ background: 'none', border: 'none', color: '#d32f2f', fontSize: '0.85rem', fontWeight: '600', padding: 0, textAlign: 'left', cursor: 'pointer', marginTop: '5px' }}>View all</button>}
                                    </div>
                                </div>

                            </div>
                        </>
                    )}

                    {activeTab === 'Bookings' && (
                        <div>
                            <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>All Bookings</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {bookings.map((booking, idx) => (
                                    <div key={idx} style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <div style={{ width: '60px', height: '60px', borderRadius: '8px', backgroundColor: '#eee', overflow: 'hidden' }}>
                                                {booking.products?.featured_image ? (
                                                    <img src={booking.products?.featured_image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="tour" />
                                                ) : (
                                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}><i className="bi bi-image"></i></div>
                                                )}
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '1rem', color: '#111', fontWeight: '600', marginBottom: '5px' }}>{booking.products?.name || booking.legacy_product_name || 'Custom Booking'}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#666' }}>Ref: {booking.booking_reference || booking.id.split('-')[0]} • Date: {new Date(booking.booking_date).toLocaleDateString()}</div>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '0.85rem', fontWeight: '600', color: booking.booking_status === 'confirmed' ? 'green' : '#888', textTransform: 'capitalize', marginBottom: '5px' }}>{booking.booking_status}</div>
                                            <button onClick={() => navigate(\`/contact?ref=\${booking.booking_reference}\`)} style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px', background: '#fff', fontSize: '0.8rem', cursor: 'pointer' }}>Contact Support</button>
                                        </div>
                                    </div>
                                ))}
                                {bookings.length === 0 && <div style={{ color: '#888', padding: '20px 0' }}>No bookings found.</div>}
                            </div>
                        </div>
                    )}

                    {activeTab === 'Payments' && (
                        <div>
                            <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>All Payments</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {bookings.map((booking, idx) => (
                                    <div key={idx} style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <div style={{ fontSize: '1rem', color: '#111', fontWeight: '600', marginBottom: '5px' }}>Payment for {booking.products?.name || booking.legacy_product_name || 'Custom Booking'}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Ref: {booking.booking_reference || booking.id.split('-')[0]}</div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111', marginBottom: '5px' }}>{booking.amount_due > 0 ? \`\${booking.currency} \${booking.amount_due}\` : 'Fully Paid'}</div>
                                            <div style={{ fontSize: '0.85rem', fontWeight: '600', color: booking.payment_status === 'paid' ? 'green' : '#d32f2f', textTransform: 'capitalize' }}>{booking.payment_status.replace('_', ' ')}</div>
                                        </div>
                                    </div>
                                ))}
                                {bookings.length === 0 && <div style={{ color: '#888', padding: '20px 0' }}>No payments found.</div>}
                            </div>
                        </div>
                    )}

                </div>`;

    const finalContent = content.substring(0, rightContentStart) + newRightContent + '\n            </div>\n        </div>\n    );\n};\n\nexport default Account;\n';
    
    fs.writeFileSync(filePath, finalContent);
    console.log("Patched tabs, titles and images");
} else {
    console.log("Could not find insertion points");
}
