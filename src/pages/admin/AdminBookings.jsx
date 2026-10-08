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
                    id, booking_reference, booking_date, participants, amount_due, amount_received, currency, booking_status, payment_status, user_id,
                    customer_name, customer_email, customer_phone, legacy_product_name, legacy_product_type,
                    products ( name, product_type ),
                    volunteer_details ( volunteer_status )
                `)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setBookings(data || []);
        } catch (err) {
            console.error('Error fetching bookings:', err);
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
                    amount_received: parseFloat(manageForm.amount_received),
                    amount_due: parseFloat(manageForm.amount_due)
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

    const handleDeleteBooking = async () => {
        if (!window.confirm(`Are you absolutely sure you want to permanently delete this booking (Ref: ${selectedBooking?.booking_reference})? This action cannot be undone.`)) {
            return;
        }
        try {
            // Volunteer details will automatically be deleted if there is an ON DELETE CASCADE foreign key,
            // but just to be safe, delete volunteer_details first.
            if (selectedBooking.volunteer_details) {
                await supabase.from('volunteer_details').delete().eq('booking_id', selectedBooking.id);
            }
            
            const { error } = await supabase.from('bookings').delete().eq('id', selectedBooking.id);
            if (error) throw error;
            
            setIsManageModalOpen(false);
            fetchBookings();
        } catch (err) {
            console.error('Error deleting:', err);
            alert('Failed to delete booking: ' + err.message);
        }
    };

    const filteredBookings = bookings.filter(b => {
        if (filterType === 'all') return true;
        if (filterType === 'tour') return b.products?.product_type === 'tour' || b.legacy_product_type === 'tour';
        if (filterType === 'volunteer') return b.products?.product_type === 'volunteer' || b.legacy_product_type === 'volunteer';
        if (filterType === 'pending_payment') return b.payment_status === 'awaiting_payment' || b.payment_status === 'partially_paid';
        return true;
    });

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', margin: '0', letterSpacing: '-1px' }}>Bookings</h1>
                
                <select 
                    value={filterType} 
                    onChange={e => setFilterType(e.target.value)}
                    style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }}
                >
                    <option value="all">All Bookings</option>
                    <option value="tour">Tours Only</option>
                    <option value="volunteer">Volunteers Only</option>
                    <option value="pending_payment">Pending Payments</option>
                </select>
            </div>
            
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '0', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                {loading ? (
                    <p>Loading bookings...</p>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #eee' }}>
                                    <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Reference</th>
                                    <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Customer</th>
                                    <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Product</th>
                                    <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date & Pax</th>
                                    <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Financials</th>
                                    <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
                                    <th style={{ padding: '16px 20px', textAlign: 'right', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBookings.map(b => (
                                    <tr key={b.id} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '20px', borderBottom: '1px solid #f1f5f9', fontWeight: 'bold', color: '#1a73e8' }}>
                                            {b.booking_reference || b.id.split('-')[0]}
                                        </td>
                                        <td style={{ padding: '20px', borderBottom: '1px solid #f1f5f9' }}>
                                            <div style={{ fontWeight: 'bold' }}>{b.customer_name || 'Guest'}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#666' }}>{b.customer_email || 'No email'}</div>
                                        </td>
                                        <td style={{ padding: '20px', borderBottom: '1px solid #f1f5f9' }}>
                                            <div style={{ fontWeight: 'bold' }}>{b.products?.name || b.legacy_product_name || 'Custom Booking'}</div>
                                            <div style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>{b.products?.product_type || b.legacy_product_type || 'Unknown'}</div>
                                        </td>
                                        <td style={{ padding: '20px', borderBottom: '1px solid #f1f5f9' }}>
                                            <div>{new Date(b.booking_date).toLocaleDateString()}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#666' }}>{b.participants} Pax</div>
                                        </td>
                                        <td style={{ padding: '20px', borderBottom: '1px solid #f1f5f9' }}>
                                            <div style={{ fontWeight: 'bold' }}>{b.currency} {b.amount_due}</div>
                                            <div style={{ fontSize: '0.85rem', color: b.amount_received < b.amount_due ? 'red' : 'green' }}>
                                                Paid: {b.amount_received}
                                            </div>
                                        </td>
                                        <td style={{ padding: '20px', borderBottom: '1px solid #f1f5f9' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-start' }}>
                                                <span style={{ 
                                                    display: 'inline-block', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold',
                                                    background: b.payment_status === 'paid' ? '#e6f4ea' : '#fff3e0',
                                                    color: b.payment_status === 'paid' ? '#1e8e3e' : '#e65100'
                                                }}>
                                                    Pay: {b.payment_status.replace('_', ' ')}
                                                </span>
                                                <span style={{ 
                                                    display: 'inline-block', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold',
                                                    background: b.booking_status === 'confirmed' ? '#e3f2fd' : '#f5f5f5',
                                                    color: b.booking_status === 'confirmed' ? '#1565c0' : '#666'
                                                }}>
                                                    Book: {b.booking_status}
                                                </span>
                                                {(b.products?.product_type === 'volunteer' || b.legacy_product_type === 'volunteer') && b.volunteer_details && (
                                                    <span style={{ 
                                                        display: 'inline-block', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold',
                                                        background: '#f3e5f5', color: '#6a1b9a'
                                                    }}>
                                                        Vol: {b.volunteer_details.volunteer_status.replace(/_/g, ' ')}
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td style={{ padding: '20px', borderBottom: '1px solid #f1f5f9', textAlign: 'right' }}>
                                            <button onClick={() => handleManageClick(b)} style={{ padding: '6px 12px', background: '#111', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                                                Manage
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
