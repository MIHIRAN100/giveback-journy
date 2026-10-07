const fs = require('fs');

let content = fs.readFileSync('src/pages/admin/AdminBookings.jsx', 'utf8');

const state_addition = `
    const [filterType, setFilterType] = useState('all');
    
    // Manage Modal State
    const [isManageModalOpen, setIsManageModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [manageForm, setManageForm] = useState({
        booking_status: '',
        payment_status: '',
        amount_received: 0,
        volunteer_status: ''
    });
`;
content = content.replace("const [filterType, setFilterType] = useState('all');", state_addition);

const logic_addition = `
    const handleManageClick = (booking) => {
        setSelectedBooking(booking);
        setManageForm({
            booking_status: booking.booking_status || 'pending',
            payment_status: booking.payment_status || 'awaiting_payment',
            amount_received: booking.amount_received || 0,
            volunteer_status: booking.volunteer_details?.volunteer_status || 'application_pending'
        });
        setIsManageModalOpen(true);
    };

    const handleSaveManage = async () => {
        try {
            // Update booking
            const { error: bookingError } = await supabase
                .from('bookings')
                .update({
                    booking_status: manageForm.booking_status,
                    payment_status: manageForm.payment_status,
                    amount_received: parseFloat(manageForm.amount_received)
                })
                .eq('id', selectedBooking.id);
                
            if (bookingError) throw bookingError;
            
            // Update volunteer details if applicable
            if (selectedBooking.products?.product_type === 'volunteer' || selectedBooking.legacy_product_type === 'volunteer') {
                if (selectedBooking.volunteer_details) {
                    const { error: volError } = await supabase
                        .from('volunteer_details')
                        .update({ volunteer_status: manageForm.volunteer_status })
                        .eq('booking_id', selectedBooking.id);
                    if (volError) throw volError;
                }
            }
            
            setIsManageModalOpen(false);
            fetchBookings(); // Refresh data
        } catch (err) {
            console.error('Error updating:', err);
            alert('Failed to update booking: ' + err.message);
        }
    };

    const filteredBookings = bookings.filter(b => {
`;
content = content.replace("const filteredBookings = bookings.filter(b => {", logic_addition);

const button_addition = `<button onClick={() => handleManageClick(b)} style={{ padding: '6px 12px', background: '#111', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                                                Manage
                                            </button>`;
content = content.replace(/<button style={{ padding: '6px 12px', background: '#eee', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>\s*Manage\s*<\/button>/g, button_addition);

const modal_addition = `
            </div>

            {/* Manage Modal */}
            {isManageModalOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
                    background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', 
                    alignItems: 'center', zIndex: 1000
                }}>
                    <div style={{ background: 'white', padding: '30px', borderRadius: '15px', width: '400px', maxWidth: '90%' }}>
                        <h2 style={{ marginTop: 0 }}>Manage Booking</h2>
                        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>
                            Ref: {selectedBooking?.booking_reference || selectedBooking?.id.split('-')[0]}
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '5px' }}>Booking Status</label>
                                <select 
                                    value={manageForm.booking_status}
                                    onChange={e => setManageForm({...manageForm, booking_status: e.target.value})}
                                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>
                            
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '5px' }}>Payment Status</label>
                                <select 
                                    value={manageForm.payment_status}
                                    onChange={e => setManageForm({...manageForm, payment_status: e.target.value})}
                                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                                >
                                    <option value="awaiting_payment">Awaiting Payment</option>
                                    <option value="partially_paid">Partially Paid</option>
                                    <option value="fully_paid">Fully Paid</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '5px' }}>Amount Received ($)</label>
                                <input 
                                    type="number"
                                    value={manageForm.amount_received}
                                    onChange={e => setManageForm({...manageForm, amount_received: e.target.value})}
                                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                                />
                            </div>

                            {(selectedBooking?.products?.product_type === 'volunteer' || selectedBooking?.legacy_product_type === 'volunteer') && (
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '5px' }}>Volunteer Status</label>
                                    <select 
                                        value={manageForm.volunteer_status}
                                        onChange={e => setManageForm({...manageForm, volunteer_status: e.target.value})}
                                        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                                    >
                                        <option value="application_pending">Application Pending</option>
                                        <option value="confirmed">Confirmed</option>
                                        <option value="awaiting_arrival">Awaiting Arrival</option>
                                        <option value="arrived">Arrived</option>
                                        <option value="pickup_completed">Pickup Completed</option>
                                        <option value="checked_in">Checked In</option>
                                        <option value="active">Active</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
                            <button onClick={() => setIsManageModalOpen(false)} style={{ flex: 1, padding: '12px', background: '#eee', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Cancel</button>
                            <button onClick={handleSaveManage} style={{ flex: 1, padding: '12px', background: '#111', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Save Changes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
`;

content = content.replace("            </div>\n        </div>\n    );\n};", modal_addition);

fs.writeFileSync('src/pages/admin/AdminBookings.jsx', content);
