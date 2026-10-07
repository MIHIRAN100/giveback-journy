import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

const AdminCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                // Fetch all bookings to extract guest customer info
                const { data, error } = await supabase
                    .from('bookings')
                    .select('customer_name, customer_email, customer_phone, amount_received, created_at')
                    .order('created_at', { ascending: true });

                if (error) throw error;

                // Group by email to create unique customers
                const customersMap = {};
                
                (data || []).forEach(b => {
                    const email = b.customer_email?.toLowerCase().trim() || 'guest_no_email@example.com';
                    
                    if (!customersMap[email]) {
                        customersMap[email] = {
                            name: b.customer_name || 'Guest User',
                            email: b.customer_email || 'No email provided',
                            phone: b.customer_phone || 'N/A',
                            first_booking: b.created_at,
                            total_spent: 0,
                            booking_count: 0
                        };
                    }
                    
                    customersMap[email].booking_count++;
                    customersMap[email].total_spent += (parseFloat(b.amount_received) || 0);
                });

                // Convert map to array and sort by most recent/most spent
                const customerList = Object.values(customersMap).sort((a, b) => b.total_spent - a.total_spent);
                setCustomers(customerList);

            } catch (err) {
                console.error('Error fetching customers:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCustomers();
    }, []);

    const filteredCustomers = customers.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        c.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', margin: '0', letterSpacing: '-1px' }}>Customers</h1>
                
                <div style={{ position: 'relative' }}>
                    <i className="bi bi-search" style={{ position: 'absolute', left: '15px', top: '12px', color: '#64748b' }}></i>
                    <input 
                        type="text" 
                        placeholder="Search customers..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ padding: '10px 10px 10px 40px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', width: '250px' }}
                    />
                </div>
            </div>
            
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '0', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                {loading ? (
                    <div style={{ padding: '40px', color: '#64748b' }}>Loading customer database...</div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Customer Details</th>
                                    <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contact</th>
                                    <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>First Active</th>
                                    <th style={{ padding: '16px 20px', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Bookings</th>
                                    <th style={{ padding: '16px 20px', textAlign: 'right', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Lifetime Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCustomers.map((c, idx) => (
                                    <tr key={idx} style={{ transition: 'background 0.2s', borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '20px' }}>
                                            <div style={{ fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontSize: '0.85rem' }}>
                                                    {c.name.charAt(0).toUpperCase()}
                                                </div>
                                                {c.name}
                                            </div>
                                        </td>
                                        <td style={{ padding: '20px' }}>
                                            <div style={{ fontSize: '0.9rem', color: '#334155' }}><i className="bi bi-envelope me-2" style={{color:'#94a3b8'}}></i>{c.email}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}><i className="bi bi-telephone me-2" style={{color:'#94a3b8'}}></i>{c.phone}</div>
                                        </td>
                                        <td style={{ padding: '20px', color: '#475569', fontSize: '0.9rem' }}>
                                            {new Date(c.first_booking).toLocaleDateString()}
                                        </td>
                                        <td style={{ padding: '20px' }}>
                                            <span style={{ background: '#f1f5f9', color: '#334155', padding: '4px 10px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                                                {c.booking_count} Bookings
                                            </span>
                                        </td>
                                        <td style={{ padding: '20px', textAlign: 'right' }}>
                                            <div style={{ fontWeight: '700', color: '#10b981', fontSize: '1.1rem' }}>
                                                ${c.total_spent.toLocaleString()}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                        {filteredCustomers.length === 0 && (
                            <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
                                No customers found matching your search.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminCustomers;
