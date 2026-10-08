import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';

const AdminBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterType, setFilterType] = useState('all');

    // Manage Modal State
    const [isManageModalOpen, setIsManageModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [manageForm, setManageForm] = useState({
        booking_status: '',
        payment_status: '',
        amount_received: 0,
        amount_due: 0,
        volunteer_status: ''
    });

    const fetchBookings = async () => {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select(`
                    id, booking_reference, booking_date, participants, amount_due, amount_received, currency, created_at, booking_status, payment_status, user_id,
                    customer_name, customer_email, customer_phone, legacy_product_name, legacy_product_type,
                    products ( name, product_type ),
                    volunteer_details ( volunteer_status )
                `)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            setBookings(data || []);
        } catch (error) {
            console.error('Error fetching admin bookings:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleManageClick = (booking) => {
        setSelectedBooking(booking);
        setManageForm({
            booking_status: booking.booking_status || 'pending',
            payment_status: booking.payment_status || 'awaiting_payment',
            amount_received: booking.amount_received || 0,
            amount_due: booking.amount_due || 0,
            volunteer_status: booking.volunteer_details?.[0]?.volunteer_status || 'application_pending'
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
                    amount_received: parseFloat(manageForm.amount_received),
                    amount_due: parseFloat(manageForm.amount_due)
                })
                .eq('id', selectedBooking.id);
            
            if (bookingError) throw bookingError;

            // If it's a volunteer, update volunteer_details too
            if (selectedBooking.products?.product_type === 'volunteer' || selectedBooking.legacy_product_type === 'volunteer') {
                const { error: volError } = await supabase
                    .from('volunteer_details')
                    .update({ volunteer_status: manageForm.volunteer_status })
                    .eq('booking_id', selectedBooking.id);
                if (volError) throw volError;
            }

            setIsManageModalOpen(false);
            fetchBookings();
        } catch (error) {
            console.error('Error updating booking:', error);
            alert('Failed to save changes. ' + error.message);
        }
    };

    const handleDeleteBooking = async () => {
        if (!window.confirm(`Are you absolutely sure you want to permanently delete this booking (Ref: ${selectedBooking?.booking_reference})? This action cannot be undone.`)) {
            return;
        }
        try {
            const { error } = await supabase
                .from('bookings')
                .delete()
                .eq('id', selectedBooking.id);
            if (error) throw error;
            setIsManageModalOpen(false);
            fetchBookings();
        } catch (error) {
            console.error('Error deleting booking:', error);
            alert('Failed to delete booking.');
        }
    };

    const filteredBookings = bookings.filter(b => {
        if (filterType === 'all') return true;
        return b.booking_status === filterType;
    });

    const pendingBookingsCount = bookings.filter(b => b.booking_status === 'pending').length;
    const missingPaymentsCount = bookings.filter(b => b.payment_status === 'awaiting_payment').length;
    const newBookingsCount = bookings.filter(b => new Date(b.created_at) > new Date(Date.now() - 7*24*60*60*1000)).length;

    return (
        <div style={{ backgroundColor: '#f4f7f6', minHeight: '100%', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
            
            {/* Top Tabs (Groups / Clients style) */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', backgroundColor: '#fcd34d', border: 'none', borderRadius: '25px', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <i className="bi bi-people-fill"></i> All Bookings <span style={{ backgroundColor: '#111', color: '#fff', padding: '2px 8px', borderRadius: '10px', fontSize: '0.75rem' }}>{bookings.length}</span>
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', backgroundColor: 'transparent', border: 'none', fontWeight: 'bold', fontSize: '0.9rem', color: '#666', cursor: 'pointer' }}>
                    <i className="bi bi-person"></i> Clients
                </button>
            </div>

            {/* Missing Data / Alerts Area */}
            <div style={{ marginBottom: '15px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#111', marginBottom: '15px' }}>Action Required / Last 7 Days</h3>
                <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '10px' }}>
                    
                    {/* Card 1 */}
                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', minWidth: '250px', border: '1px solid #eaeaea', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d32f2f', fontSize: '0.8rem', fontWeight: '600', marginBottom: '15px' }}>
                            <i className="bi bi-airplane" style={{ color: '#111', fontSize: '1.2rem' }}></i>
                            <span><i className="bi bi-exclamation-triangle"></i> Pending Approvals</span>
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: '800', color: '#111', marginBottom: '5px' }}>{pendingBookingsCount}</div>
                        <div style={{ fontSize: '0.85rem', color: '#666', display: 'flex', justifyContent: 'space-between' }}>
                            Pending Confirmations <i className="bi bi-arrow-right"></i>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', minWidth: '250px', border: '1px solid #eaeaea', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d32f2f', fontSize: '0.8rem', fontWeight: '600', marginBottom: '15px' }}>
                            <i className="bi bi-credit-card" style={{ color: '#111', fontSize: '1.2rem' }}></i>
                            <span><i className="bi bi-exclamation-triangle"></i> Missing Payments</span>
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: '800', color: '#111', marginBottom: '5px' }}>{missingPaymentsCount}</div>
                        <div style={{ fontSize: '0.85rem', color: '#666', display: 'flex', justifyContent: 'space-between' }}>
                            Awaiting Payment <i className="bi bi-arrow-right"></i>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', minWidth: '250px', border: '1px solid #eaeaea', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#166534', fontSize: '0.8rem', fontWeight: '600', marginBottom: '15px' }}>
                            <i className="bi bi-calendar-check" style={{ color: '#111', fontSize: '1.2rem' }}></i>
                            <span><i className="bi bi-check-circle"></i> New This Week</span>
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: '800', color: '#111', marginBottom: '5px' }}>{newBookingsCount}</div>
                        <div style={{ fontSize: '0.85rem', color: '#666', display: 'flex', justifyContent: 'space-between' }}>
                            Recent Bookings <i className="bi bi-arrow-right"></i>
                        </div>
                    </div>

                    {/* Illustration Placeholder (Optional, just keeping layout structure) */}
                    <div style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ color: '#aaa', fontSize: '0.8rem', textAlign: 'center' }}>
                            <i className="bi bi-image" style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}></i>
                            Analytics Graphic
                        </div>
                    </div>

                </div>
            </div>

            {/* Filter Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{ background: '#fff', border: '1px solid #ddd', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer' }}><i className="bi bi-search"></i></button>
                    <button style={{ background: '#fff', border: '1px solid #ddd', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '0.85rem' }}>
                        <i className="bi bi-calendar"></i> This Month <i className="bi bi-chevron-right"></i>
                    </button>
                    <button style={{ background: '#fff', border: '1px solid #ddd', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '0.85rem' }}>
                        <i className="bi bi-sliders"></i> More Filters
                    </button>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ display: 'flex', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
                        <button style={{ padding: '8px 12px', border: 'none', background: '#f5f5f5', cursor: 'pointer' }}><i className="bi bi-list"></i></button>
                        <button style={{ padding: '8px 12px', border: 'none', background: '#fff', cursor: 'pointer' }}><i className="bi bi-grid"></i></button>
                    </div>
                    <button style={{ background: '#fff', border: '1px solid #ddd', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '0.85rem' }}>
                        <i className="bi bi-download"></i> Export to csv
                    </button>
                </div>
            </div>

            {/* Bookings List (Row Cards) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>Loading bookings...</div>
                ) : filteredBookings.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#666', background: '#fff', borderRadius: '12px' }}>No bookings found.</div>
                ) : (
                    filteredBookings.map((booking, idx) => (
                        <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '15px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px', alignItems: 'center', border: '1px solid #eaeaea', boxShadow: '0 2px 4px rgba(0,0,0,0.01)' }}>
                            
                            {/* Col 1: Customer */}
                            <div>
                                <div style={{ fontWeight: '700', color: '#111', marginBottom: '4px', fontSize: '0.9rem' }}>{booking.customer_name || 'Guest User'}</div>
                                <div style={{ fontSize: '0.75rem', color: '#888', display: 'flex', gap: '10px' }}>
                                    <span><i className="bi bi-people" style={{ marginRight: '3px' }}></i> {booking.participants}</span>
                                    <span><i className="bi bi-envelope" style={{ marginRight: '3px' }}></i> {booking.customer_email?.substring(0,6)}..</span>
                                </div>
                            </div>

                            {/* Col 2: Payment Status */}
                            <div>
                                <span style={{ 
                                    padding: '4px 10px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase',
                                    backgroundColor: booking.payment_status === 'paid' ? '#dcfce7' : booking.payment_status === 'partially_paid' ? '#e0f2fe' : '#ffedd5',
                                    color: booking.payment_status === 'paid' ? '#166534' : booking.payment_status === 'partially_paid' ? '#0369a1' : '#c2410c'
                                }}>
                                    {booking.payment_status === 'paid' ? 'Full paid' : booking.payment_status === 'partially_paid' ? 'Partially paid' : 'Awaiting'}
                                </span>
                            </div>

                            {/* Col 3: Dates */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: '700', color: '#111' }}>
                                <div>{new Date(booking.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</div>
                                <i className="bi bi-airplane" style={{ color: '#aaa', transform: 'rotate(45deg)' }}></i>
                                <div>{new Date(booking.booking_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</div>
                            </div>

                            {/* Col 4: Activity / Type */}
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '0.75rem' }} title={booking.products?.product_type || booking.legacy_product_type}><i className="bi bi-compass"></i></div>
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '0.75rem' }}><i className="bi bi-geo"></i></div>
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '0.75rem' }}><i className="bi bi-camera"></i></div>
                            </div>

                            {/* Col 5: Status */}
                            <div>
                                <div style={{ fontSize: '0.65rem', color: '#888', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>Booking</div>
                                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: booking.booking_status === 'confirmed' ? '#166534' : '#d32f2f', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <i className={`bi bi-${booking.booking_status === 'confirmed' ? 'check-circle-fill' : 'exclamation-circle-fill'}`}></i>
                                    {booking.booking_status === 'confirmed' ? 'Confirmed' : 'Pending'}
                                </div>
                            </div>

                            {/* Col 6: Remaining Balance */}
                            <div>
                                <div style={{ fontSize: '0.65rem', color: '#888', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>Remaining Balance</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#111', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: (booking.amount_due - (booking.amount_received || 0)) > 0 ? '#0284c7' : '#166534' }}></div>
                                    {booking.currency} {Math.max(0, booking.amount_due - (booking.amount_received || 0))}
                                </div>
                            </div>

                            {/* Col 7: Actions */}
                            <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '15px' }}>
                                <button onClick={() => handleManageClick(booking)} style={{ background: 'none', border: 'none', color: '#666', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontWeight: '600' }}>
                                    <i className="bi bi-pencil-square"></i> Edit
                                </button>
                                <i className="bi bi-three-dots-vertical" style={{ color: '#aaa', cursor: 'pointer' }}></i>
                            </div>
                        </div>
                    ))
                )}
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
                                    <option value="paid">Fully Paid</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '5px' }}>Total Price / Amount Due ($)</label>
                                <input 
                                    type="number"
                                    value={manageForm.amount_due}
                                    onChange={e => setManageForm({...manageForm, amount_due: e.target.value})}
                                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                                />
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>Edit this to apply discounts.</div>
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

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '30px' }}>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button onClick={() => setIsManageModalOpen(false)} style={{ flex: 1, padding: '12px', background: '#eee', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Cancel</button>
                                <button onClick={handleSaveManage} style={{ flex: 1, padding: '12px', background: '#0f172a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Save Changes</button>
                            </div>
                            <button onClick={handleDeleteBooking} style={{ width: '100%', padding: '12px', background: '#fff', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}>
                                Delete Booking
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminBookings;
