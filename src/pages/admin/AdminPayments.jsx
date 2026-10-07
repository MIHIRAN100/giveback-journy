import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';

const AdminPayments = () => {
    const { user } = useAuth();
    const [payments, setPayments] = useState([]);
    const [pendingBookings, setPendingBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [paymentAmount, setPaymentAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash_airport');
    const [paymentNotes, setPaymentNotes] = useState('');
    const [submittingPayment, setSubmittingPayment] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            
            // 1. Fetch Audit History (Payments table)
            const { data: paymentsData } = await supabase
                .from('payments')
                .select(`
                    id, amount, currency, payment_method, payment_date, notes,
                    bookings ( id, products(name) ),
                    profiles!collected_by ( full_name )
                `)
                .order('created_at', { ascending: false });
                
            // 2. Fetch Bookings with pending payments for the "Record Payment" section
            const { data: bookingsData } = await supabase
                .from('bookings')
                .select(`
                    id, amount_due, amount_received, currency, payment_status,
                    products ( name ),
                    customer_name, customer_email
                `)
                .neq('payment_status', 'paid')
                .order('created_at', { ascending: false });

            setPayments(paymentsData || []);
            setPendingBookings(bookingsData || []);
        } catch (err) {
            console.error('Error fetching payments:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const openPaymentModal = (booking) => {
        setSelectedBooking(booking);
        const remaining = booking.amount_due - booking.amount_received;
        setPaymentAmount(remaining > 0 ? remaining.toString() : '');
        setPaymentMethod('cash_airport');
        setPaymentNotes('');
        setIsPaymentModalOpen(true);
    };

    const handleRecordPayment = async (e) => {
        e.preventDefault();
        if (!selectedBooking) return;
        
        const amount = parseFloat(paymentAmount);
        if (isNaN(amount) || amount <= 0) return alert("Valid positive amount required.");

        if (!window.confirm(`Record ${selectedBooking.currency} ${amount} payment for ${selectedBooking.profiles?.full_name}?`)) return;

        try {
            setSubmittingPayment(true);
            const { error } = await supabase.from('payments').insert({
                booking_id: selectedBooking.id,
                amount: amount,
                currency: selectedBooking.currency,
                payment_method: paymentMethod,
                collected_by: user.id,
                notes: paymentNotes
            });

            if (error) throw error;
            
            alert("Payment recorded successfully!");
            setIsPaymentModalOpen(false);
            setSelectedBooking(null);
            fetchData();
        } catch (err) {
            console.error("Error recording payment:", err);
            alert("Failed to record payment.");
        } finally {
            setSubmittingPayment(false);
        }
    };

    return (
        <div>
            <h1 style={{ marginBottom: '30px', fontSize: '2rem' }}>Payment Management</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                
                {/* Left: Pending Payments */}
                <div style={{ background: '#ffffff', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ marginBottom: '20px' }}>Outstanding Balances</h2>
                    {loading ? <p>Loading...</p> : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {pendingBookings.length === 0 ? <p>All caught up! No pending payments.</p> : pendingBookings.map(b => (
                                <div key={b.id} style={{ padding: '15px', border: '1px solid #eee', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>{b.customer_name}</div>
                                        <div style={{ fontSize: '0.85rem', color: '#666' }}>{b.products?.name}</div>
                                        <div style={{ fontSize: '0.85rem', color: '#d32f2f', marginTop: '5px' }}>
                                            Due: {b.currency} {b.amount_due - b.amount_received} (of {b.amount_due})
                                        </div>
                                    </div>
                                    <button onClick={() => openPaymentModal(b)} style={{ padding: '8px 16px', background: 'var(--primary-green)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                                        Collect Cash
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: Payment History */}
                <div style={{ background: '#ffffff', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ marginBottom: '20px' }}>Audit History</h2>
                    {loading ? <p>Loading...</p> : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {payments.length === 0 ? <p>No payments recorded yet.</p> : payments.map(p => (
                                <div key={p.id} style={{ padding: '15px', background: '#f9f9f9', borderRadius: '8px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                        <span style={{ fontWeight: 'bold', color: '#1e8e3e' }}>+{p.currency} {p.amount}</span>
                                        <span style={{ fontSize: '0.8rem', color: '#666' }}>{new Date(p.payment_date).toLocaleDateString()}</span>
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: '#444' }}>Booking: {p.bookings?.products?.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '5px' }}>
                                        Method: {p.payment_method.replace('_', ' ')} | Collected by: {p.profiles?.full_name}
                                    </div>
                                    {p.notes && <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#666', marginTop: '5px' }}>Note: {p.notes}</div>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>

            {/* Payment Modal */}
            {isPaymentModalOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
                    <div style={{ background: 'white', padding: '30px', borderRadius: '16px', width: '100%', maxWidth: '500px' }}>
                        <h3 style={{ marginBottom: '5px' }}>Record Cash Payment</h3>
                        <p style={{ color: '#666', marginBottom: '20px', fontSize: '0.9rem' }}>
                            Booking: {selectedBooking?.products?.name} <br/>
                            Customer: {selectedBooking?.customer_name} <br/>
                            Balance Due: {selectedBooking?.currency} {selectedBooking?.amount_due - selectedBooking?.amount_received}
                        </p>
                        
                        <form onSubmit={handleRecordPayment}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Amount Received ({selectedBooking?.currency})</label>
                                <input type="number" step="0.01" value={paymentAmount} onChange={e => setPaymentAmount(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} required />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Payment Method</label>
                                <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}>
                                    <option value="cash_airport">Cash at Airport</option>
                                    <option value="cash_other">Other Cash Collection</option>
                                </select>
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Admin Notes (Optional)</label>
                                <textarea value={paymentNotes} onChange={e => setPaymentNotes(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', minHeight: '80px' }} />
                            </div>
                            
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                <button type="button" onClick={() => setIsPaymentModalOpen(false)} style={{ padding: '10px 20px', background: '#eee', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Cancel</button>
                                <button type="submit" disabled={submittingPayment} style={{ padding: '10px 20px', background: '#111', color: 'white', border: 'none', borderRadius: '8px', cursor: submittingPayment ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}>{submittingPayment ? 'Saving...' : 'Confirm Payment'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPayments;
