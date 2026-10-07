import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';

const AdminArrivals = () => {
    const { user } = useAuth();
    const [arrivals, setArrivals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFilter, setDateFilter] = useState('today'); // 'today', 'upcoming', 'all'

    // Payment Modal State
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [paymentAmount, setPaymentAmount] = useState('');

    const fetchArrivals = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('bookings')
                .select(`
                    id, payment_status, amount_due, amount_received, currency,
                    products ( name ),
                    customer_name, customer_phone, customer_email,
                    volunteer_details (
                        id, arrival_date, arrival_flight, airport_pickup, accommodation_req, volunteer_status
                    )
                `)
                .not('volunteer_details', 'is', null)
                .order('created_at', { ascending: false });

            if (error) throw error;
            
            // Filter out those without volunteer details
            const validArrivals = (data || []).filter(b => b.volunteer_details);
            
            // Sort by arrival date or booking date
            validArrivals.sort((a, b) => {
                const dateA = new Date(a.volunteer_details.arrival_date || a.booking_date || 0);
                const dateB = new Date(b.volunteer_details.arrival_date || b.booking_date || 0);
                return dateA - dateB;
            });
            
            setArrivals(validArrivals);
        } catch (err) {
            console.error('Error fetching arrivals:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArrivals();
    }, []);

    const handleUpdateStatus = async (volunteerDetailsId, newStatus) => {
        try {
            const { error } = await supabase
                .from('volunteer_details')
                .update({ volunteer_status: newStatus })
                .eq('id', volunteerDetailsId);
            
            if (error) throw error;
            
            // Update local state for immediate feedback
            setArrivals(arrivals.map(a => {
                if (a.volunteer_details.id === volunteerDetailsId) {
                    return { ...a, volunteer_details: { ...a.volunteer_details, volunteer_status: newStatus } };
                }
                return a;
            }));
            
        } catch (err) {
            alert('Failed to update status.');
            console.error(err);
        }
    };

    const handleRecordPayment = async (e) => {
        e.preventDefault();
        if (!selectedBooking) return;
        
        const amount = parseFloat(paymentAmount);
        if (isNaN(amount) || amount <= 0) return alert("Valid positive amount required.");

        try {
            const { error } = await supabase.from('payments').insert({
                booking_id: selectedBooking.id,
                amount: amount,
                currency: selectedBooking.currency,
                payment_method: 'cash_airport',
                collected_by: user.id,
                notes: 'Collected at airport arrival'
            });

            if (error) throw error;
            
            alert("Payment recorded successfully!");
            setIsPaymentModalOpen(false);
            fetchArrivals();
        } catch (err) {
            alert("Failed to record payment.");
            console.error(err);
        }
    };

    const openPaymentModal = (booking) => {
        setSelectedBooking(booking);
        const remaining = booking.amount_due - booking.amount_received;
        setPaymentAmount(remaining > 0 ? remaining.toString() : '');
        setIsPaymentModalOpen(true);
    };

    // Filtering logic
    const todayStr = new Date().toISOString().split('T')[0];
    
    const filteredArrivals = arrivals.filter(b => {
        // Date Filter
        const arrDate = b.volunteer_details.arrival_date || b.booking_date;
        if (dateFilter === 'today' && arrDate !== todayStr) return false;
        if (dateFilter === 'upcoming' && arrDate <= todayStr) return false;

        // Search Filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            const name = (b.customer_name || '').toLowerCase();
            const flight = (b.volunteer_details?.arrival_flight || '').toLowerCase();
            if (!name.includes(term) && !flight.includes(term)) return false;
        }
        return true;
    });

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '60px' }}>
            <div style={{ position: 'sticky', top: 0, background: '#f5f7fa', paddingTop: '20px', paddingBottom: '15px', zIndex: 10 }}>
                <h1 style={{ marginBottom: '15px', fontSize: '1.8rem' }}>Airport Arrivals</h1>
                
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
                    <input 
                        type="text" 
                        placeholder="Search name or flight..." 
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        style={{ flex: '1 1 200px', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                    />
                    <select 
                        value={dateFilter} 
                        onChange={e => setDateFilter(e.target.value)}
                        style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: 'white' }}
                    >
                        <option value="today">Today Only</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="all">All Arrivals</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>Loading arrivals...</div>
            ) : filteredArrivals.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '12px' }}>
                    <i className="bi bi-calendar-x" style={{ fontSize: '2rem', color: '#ccc', marginBottom: '10px', display: 'block' }}></i>
                    No arrivals found for this filter.
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {filteredArrivals.map(b => {
                        const vol = b.volunteer_details;
                        const remaining = b.amount_due - b.amount_received;
                        const isPaid = remaining <= 0;

                        return (
                            <div key={b.id} style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                {/* Header: Name and Flight */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                                    <div>
                                        <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{b.customer_name}</h3>
                                        <div style={{ fontSize: '0.85rem', color: '#666' }}>
                                            {'' && <span><i className="bi bi-globe"></i> {''} &nbsp;</span>}
                                            <span><i className="bi bi-telephone"></i> {b.customer_phone || 'No phone'}</span>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1565c0' }}>
                                            <i className="bi bi-airplane-fill"></i> {vol.arrival_flight || 'TBD'}
                                        </div>
                                        <div style={{ fontSize: '0.85rem', color: '#666' }}>
                                            {new Date(vol.arrival_date).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>

                                {/* Status Badges */}
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                                    <span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', background: vol.airport_pickup ? '#e3f2fd' : '#f5f5f5', color: vol.airport_pickup ? '#1565c0' : '#666' }}>
                                        <i className="bi bi-car-front"></i> {vol.airport_pickup ? 'Pickup Required' : 'No Pickup'}
                                    </span>
                                    <span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', background: isPaid ? '#e6f4ea' : '#ffebee', color: isPaid ? '#1e8e3e' : '#d32f2f' }}>
                                        <i className="bi bi-currency-dollar"></i> {isPaid ? 'Fully Paid' : `Owes ${b.currency} ${remaining}`}
                                    </span>
                                    <span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', background: '#f3e5f5', color: '#6a1b9a' }}>
                                        <i className="bi bi-person-badge"></i> {vol.volunteer_status.replace(/_/g, ' ')}
                                    </span>
                                </div>

                                {/* Accommodation Info */}
                                {vol.accommodation_req && (
                                    <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '8px', fontSize: '0.85rem', color: '#444', marginBottom: '15px' }}>
                                        <strong><i className="bi bi-house"></i> Accommodation:</strong> {vol.accommodation_req}
                                    </div>
                                )}

                                {/* Action Buttons (Mobile Friendly) */}
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                                    {!isPaid && (
                                        <button onClick={() => openPaymentModal(b)} style={{ flex: '1 1 120px', padding: '10px', background: 'var(--primary-green)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                                            <i className="bi bi-cash"></i> Collect Cash
                                        </button>
                                    )}
                                    
                                    {vol.volunteer_status !== 'arrived' && vol.volunteer_status !== 'pickup_completed' && (
                                        <button onClick={() => handleUpdateStatus(vol.id, 'arrived')} style={{ flex: '1 1 120px', padding: '10px', background: '#1565c0', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                                            Mark Arrived
                                        </button>
                                    )}

                                    {vol.airport_pickup && vol.volunteer_status !== 'pickup_completed' && (
                                        <button onClick={() => handleUpdateStatus(vol.id, 'pickup_completed')} style={{ flex: '1 1 120px', padding: '10px', background: '#111', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                                            Complete Pickup
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Mobile Payment Modal */}
            {isPaymentModalOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'flex-end', zIndex: 1000, padding: '15px' }}>
                    <div style={{ background: 'white', padding: '25px', borderRadius: '20px 20px 10px 10px', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                        <h3 style={{ marginBottom: '5px' }}>Airport Cash Collection</h3>
                        <p style={{ color: '#666', marginBottom: '20px', fontSize: '0.9rem' }}>
                            Customer: {selectedBooking?.customer_name} <br/>
                            Balance Due: {selectedBooking?.currency} {selectedBooking?.amount_due - selectedBooking?.amount_received}
                        </p>
                        
                        <form onSubmit={handleRecordPayment}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Amount Received ({selectedBooking?.currency})</label>
                                <input type="number" step="0.01" value={paymentAmount} onChange={e => setPaymentAmount(e.target.value)} style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1.1rem' }} required />
                            </div>
                            
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button type="button" onClick={() => setIsPaymentModalOpen(false)} style={{ flex: 1, padding: '15px', background: '#eee', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Cancel</button>
                                <button type="submit" style={{ flex: 1, padding: '15px', background: '#111', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Confirm Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminArrivals;
