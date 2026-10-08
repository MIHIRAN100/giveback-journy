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
        recentBookings: [],
        pendingBookings: 0,
        confirmedBookings: 0,
        cancelledBookings: 0,
        topTours: [],
        todaysArrivals: 0,
        totalVolunteers: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                // Fetch recent bookings
                const { data: bookingsData } = await supabase
                    .from('bookings')
                    .select('id, amount_due, created_at, booking_date, customer_name, customer_email, payment_status, booking_status, legacy_product_name, legacy_product_type, products(name, product_type)')
                    .order('created_at', { ascending: false });

                // Calculate stats
                let revenue = 0;
                let active = 0;
                let pending = 0;
                let confirmed = 0;
                let cancelled = 0;
                const uniqueCustomers = new Set();
                const tourCounts = {};
                let arrivalsToday = 0;
                let volCount = 0;
                const todayStr = new Date().toISOString().split('T')[0];

                if (bookingsData) {
                    bookingsData.forEach(b => {
                        revenue += (b.amount_due || 0);
                        if (b.booking_status === 'confirmed') {
                            active++;
                            confirmed++;
                        }
                        if (b.booking_status === 'pending') {
                            pending++;
                        }
                        if (b.customer_email) uniqueCustomers.add(b.customer_email);
                        
                        if (b.booking_date && b.booking_date.startsWith(todayStr)) {
                            arrivalsToday++;
                        }
                        
                        if (b.legacy_product_type === 'volunteer' || b.products?.product_type === 'volunteer') {
                            volCount++;
                        }

                        const tourName = b.products?.name || b.legacy_product_name || 'Custom Booking';
                        tourCounts[tourName] = (tourCounts[tourName] || 0) + 1;
                    });
                }

                // Sort top tours
                const sortedTours = Object.keys(tourCounts).map(name => ({
                    name,
                    count: tourCounts[name]
                })).sort((a, b) => b.count - a.count).slice(0, 3);

                setStats({
                    totalRevenue: revenue,
                    activeBookings: active,
                    totalCustomers: uniqueCustomers.size,
                    recentBookings: bookingsData ? bookingsData.slice(0, 20) : [],
                    pendingBookings: pending,
                    confirmedBookings: confirmed,
                    cancelledBookings: cancelled,
                    topTours: sortedTours,
                    todaysArrivals: arrivalsToday,
                    totalVolunteers: volCount
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
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
                <StatCard 
                    title="Today's Arrivals" 
                    value={stats.todaysArrivals} 
                    icon="bi-airplane-engines" 
                    color="#0ea5e9"
                />
                <StatCard 
                    title="Total Volunteers" 
                    value={stats.totalVolunteers} 
                    icon="bi-heart-fill" 
                    color="#ec4899"
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

                    <div style={{ overflowX: 'auto', maxHeight: '400px', overflowY: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                            <thead style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 10 }}>
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
                                        <td style={{ padding: '16px 0', color: '#475569', fontWeight: '500' }}>{b.products?.name || b.legacy_product_name || 'Custom Booking'}</td>
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

                {/* Right Column (Cards) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    
                    {/* Booking Status Breakdown Widget */}
                    <div style={{ background: '#fff', borderRadius: '20px', padding: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Booking Status</h2>
                            <i className="bi bi-three-dots" style={{ color: '#94a3b8', cursor: 'pointer' }}></i>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#dcfce7', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="bi bi-check-circle-fill"></i></div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: '700', color: '#111', fontSize: '0.95rem' }}>Confirmed</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Ready for travel</div>
                                </div>
                                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#111' }}>{stats.confirmedBookings}</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="bi bi-clock-fill"></i></div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: '700', color: '#111', fontSize: '0.95rem' }}>Pending</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Awaiting action</div>
                                </div>
                                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#111' }}>{stats.pendingBookings}</div>
                            </div>
                        </div>
                    </div>

                    {/* Top Tours Widget */}
                    <div style={{ background: '#fff', borderRadius: '20px', padding: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f1f5f9' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Top Selling Tours</h2>
                            <i className="bi bi-three-dots" style={{ color: '#94a3b8', cursor: 'pointer' }}></i>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {stats.topTours.map((tour, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f8fafc', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid #e2e8f0' }}>#{idx + 1}</div>
                                    <div style={{ flex: 1, overflow: 'hidden' }}>
                                        <div style={{ fontWeight: '600', color: '#111', fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tour.name}</div>
                                    </div>
                                    <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#2563eb', background: '#eff6ff', padding: '4px 10px', borderRadius: '20px' }}>{tour.count} sold</div>
                                </div>
                            ))}
                            {stats.topTours.length === 0 && <div style={{ fontSize: '0.85rem', color: '#888' }}>No data available</div>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;

