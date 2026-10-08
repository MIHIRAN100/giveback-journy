import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import { useCurrency } from '../../context/CurrencyContext';
import { Link } from 'react-router-dom';

const StatCard = ({ title, value, icon, color, trend }) => (
    <div style={{ 
        background: '#ffffff', 
        padding: '24px', 
        borderRadius: '20px', 
        border: '1px solid #f1f5f9', 
        display: 'flex', 
        flexDirection: 'column',
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#111' }}>{title}</div>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={`bi ${icon}`} style={{ color: color, fontSize: '1rem' }}></i>
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#111', lineHeight: 1 }}>{value}</div>
            {trend && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: trend.startsWith('+') ? '#10b981' : '#f43f5e', fontSize: '0.85rem', fontWeight: '700', marginBottom: '4px' }}>
                    <i className={`bi ${trend.startsWith('+') ? 'bi-arrow-up-right' : 'bi-arrow-down-right'}`}></i> {trend}
                </div>
            )}
        </div>
        <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '12px', fontWeight: '500' }}>vs. last period</div>
    </div>
);

const DashboardOverview = () => {
    const { user } = useAuth();
    const { formatPrice } = useCurrency();
    const [stats, setStats] = useState({
        totalRevenue: 0,
        activeBookings: 0,
        totalCustomers: 0,
        recentBookings: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                // Fetch recent bookings
                const { data: bookingsData } = await supabase
                    .from('bookings')
                    .select('id, amount_due, created_at, customer_name, customer_email, payment_status, booking_status, products(name)')
                    .order('created_at', { ascending: false })
                    .limit(10);

                // Calculate stats
                let revenue = 0;
                let active = 0;
                const uniqueCustomers = new Set();

                if (bookingsData) {
                    bookingsData.forEach(b => {
                        revenue += (b.amount_due || 0);
                        if (b.booking_status === 'confirmed') active++;
                        if (b.customer_email) uniqueCustomers.add(b.customer_email);
                    });
                }

                setStats({
                    totalRevenue: revenue,
                    activeBookings: active,
                    totalCustomers: uniqueCustomers.size,
                    recentBookings: bookingsData || []
                });
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (loading) return <div style={{ padding: '40px', color: '#666' }}>Loading dashboard...</div>;

    return (
        <div>
            {/* Header Area */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '800', color: '#111' }}>Dashboard</h1>
                
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '8px 16px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                        <i className="bi bi-calendar3"></i> Jan 1, 2026 - Feb 1, 2026
                    </button>
                    <button style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '8px 16px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                        <i className="bi bi-grid"></i> Add widget
                    </button>
                    <button style={{ background: '#2563eb', border: 'none', padding: '8px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)' }}>
                        <i className="bi bi-download"></i> Export
                    </button>
                </div>
            </div>

            {/* KPI Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                <StatCard 
                    title="Total Revenue" 
                    value={formatPrice(stats.totalRevenue)} 
                    icon="bi-cash-stack" 
                    color="#2563eb"
                    trend="+24.4%" 
                />
                <StatCard 
                    title="Active Bookings" 
                    value={stats.activeBookings} 
                    icon="bi-calendar-check" 
                    color="#10b981"
                    trend="+15.5%" 
                />
                <StatCard 
                    title="Total Customers" 
                    value={stats.totalCustomers} 
                    icon="bi-people" 
                    color="#f59e0b"
                    trend="+8.4%" 
                />
                <StatCard 
                    title="Total Orders" 
                    value={stats.recentBookings.length} 
                    icon="bi-box-seam" 
                    color="#8b5cf6"
                    trend="-10.5%" 
                />
            </div>

            {/* Main Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px' }}>
                
                {/* Recent Orders Table */}
                <div style={{ background: '#fff', borderRadius: '20px', padding: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                        <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '700', color: '#111' }}>Recent Orders</h2>
                        <i className="bi bi-three-dots" style={{ color: '#94a3b8', cursor: 'pointer' }}></i>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <th style={{ padding: '0 0 15px 0', color: '#94a3b8', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase' }}>Customer</th>
                                    <th style={{ padding: '0 0 15px 0', color: '#94a3b8', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase' }}>Tour</th>
                                    <th style={{ padding: '0 0 15px 0', color: '#94a3b8', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase' }}>Revenue</th>
                                    <th style={{ padding: '0 0 15px 0', color: '#94a3b8', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.recentBookings.map((b, i) => (
                                    <tr key={i} style={{ borderBottom: i !== stats.recentBookings.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                                        <td style={{ padding: '16px 0', fontWeight: '600', color: '#111' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontWeight: 'bold' }}>
                                                    {b.customer_name ? b.customer_name.charAt(0) : 'G'}
                                                </div>
                                                <div>
                                                    <div style={{ color: '#111' }}>{b.customer_name || 'Guest'}</div>
                                                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>{new Date(b.created_at).toLocaleDateString()}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ padding: '16px 0', color: '#475569', fontWeight: '500' }}>{b.products?.name || 'Custom Booking'}</td>
                                        <td style={{ padding: '16px 0', color: '#10b981', fontWeight: '700' }}>{formatPrice(b.amount_due)}</td>
                                        <td style={{ padding: '16px 0' }}>
                                            <span style={{ 
                                                background: b.payment_status === 'paid' ? '#dcfce7' : '#fef9c3', 
                                                color: b.payment_status === 'paid' ? '#166534' : '#a16207', 
                                                padding: '4px 10px', 
                                                borderRadius: '20px', 
                                                fontSize: '0.75rem', 
                                                fontWeight: '700' 
                                            }}>
                                                {b.payment_status.replace('_', ' ')}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Column (Placeholder for charts) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    
                    {/* Activity Widget */}
                    <div style={{ background: '#fff', borderRadius: '20px', padding: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>System Status</h2>
                            <i className="bi bi-three-dots" style={{ color: '#94a3b8', cursor: 'pointer' }}></i>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="bi bi-server"></i></div>
                                <div>
                                    <div style={{ fontWeight: '700', color: '#111', fontSize: '0.9rem' }}>Database Active</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Connected to Supabase</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#dcfce7', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="bi bi-globe"></i></div>
                                <div>
                                    <div style={{ fontWeight: '700', color: '#111', fontSize: '0.9rem' }}>Vercel Edge Network</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>12 locations active</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', borderRadius: '20px', padding: '25px', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>AI Assistant</h2>
                        <div style={{ background: '#fff', padding: '15px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                            <i className="bi bi-chat-dots" style={{ color: '#94a3b8' }}></i>
                            <input type="text" placeholder="Ask me anything..." style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontSize: '0.85rem' }} />
                            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><i className="bi bi-arrow-up-short"></i></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
