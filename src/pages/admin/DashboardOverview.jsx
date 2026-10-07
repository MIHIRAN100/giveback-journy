import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';

const StatCard = ({ title, value, icon, color, gradient }) => (
    <div style={{ 
        background: '#ffffff', 
        padding: '24px', 
        borderRadius: '16px', 
        border: '1px solid #e2e8f0', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '20px', 
        transition: 'all 0.3s ease',
        cursor: 'default',
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
    }}>
        <div style={{ 
            width: '52px', 
            height: '52px', 
            borderRadius: '14px', 
            background: gradient || `${color}15`, 
            color: color, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '1.4rem' 
        }}>
            <i className={`bi ${icon}`} style={{ color: gradient ? '#fff' : color }}></i>
        </div>
        <div>
            <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>{title}</div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', lineHeight: '1', letterSpacing: '-1px' }}>{value}</div>
        </div>
    </div>
);

const DashboardOverview = () => {
    const { profile } = useAuth();
    const [stats, setStats] = useState({
        totalCustomers: 0,
        totalVolunteers: 0,
        tourBookings: 0,
        volunteerBookings: 0,
        todayArrivals: 0,
        upcomingArrivals: 0,
        awaitingPayment: 0,
        partiallyPaid: 0,
        fullyPaid: 0,
        confirmedBookings: 0,
        pendingBookings: 0,
        totalRevenue: 0,
        outstandingBalance: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [
                    { count: customersCount },
                    { count: volunteersCount },
                    { data: bookingsData },
                    { data: volunteerDetailsData }
                ] = await Promise.all([
                    supabase.from('profiles').select('*', { count: 'exact', head: true }),
                    supabase.from('volunteer_details').select('*', { count: 'exact', head: true }),
                    supabase.from('bookings').select('legacy_product_type, booking_status, payment_status, amount_due, amount_received, products(product_type)'),
                    supabase.from('volunteer_details').select('arrival_date')
                ]);

                const newStats = { ...stats };
                newStats.totalCustomers = customersCount || 1; // Assuming 1 logged in user at least
                newStats.totalVolunteers = volunteersCount || 0;

                if (bookingsData) {
                    bookingsData.forEach(b => {
                        const type = b.products?.product_type || b.legacy_product_type;
                        if (type === 'tour') newStats.tourBookings++;
                        if (type === 'volunteer') newStats.volunteerBookings++;

                        if (b.payment_status === 'awaiting_payment') newStats.awaitingPayment++;
                        if (b.payment_status === 'partially_paid') newStats.partiallyPaid++;
                        if (b.payment_status === 'fully_paid' || b.payment_status === 'paid') newStats.fullyPaid++;

                        if (b.booking_status === 'confirmed') newStats.confirmedBookings++;
                        if (b.booking_status === 'pending') newStats.pendingBookings++;
                        
                        // Calculate money (ignoring cancelled bookings for outstanding balance)
                        if (b.booking_status !== 'cancelled') {
                            const received = parseFloat(b.amount_received) || 0;
                            const due = parseFloat(b.amount_due) || 0;
                            newStats.totalRevenue += received;
                            newStats.outstandingBalance += Math.max(0, due - received);
                        }
                    });
                }

                if (volunteerDetailsData) {
                    const today = new Date().toISOString().split('T')[0];
                    volunteerDetailsData.forEach(v => {
                        if (v.arrival_date === today) newStats.todayArrivals++;
                        else if (v.arrival_date > today) newStats.upcomingArrivals++;
                    });
                }

                setStats(newStats);
            } catch (err) {
                console.error("Failed to load stats", err);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) return <div style={{ color: '#64748b', fontWeight: '500', padding: '40px' }}>Loading workspace...</div>;

    const sectionStyle = {
        marginBottom: '48px'
    };

    const sectionTitleStyle = {
        fontSize: '1.1rem',
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        letterSpacing: '-0.3px'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px'
    };

    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    const firstName = profile?.full_name?.split(' ')[0] || 'Admin';

    return (
        <div>
            <div style={{ marginBottom: '48px', paddingBottom: '24px', borderBottom: '1px solid #e2e8f0' }}>
                <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0', letterSpacing: '-1px' }}>
                    {greeting}, {firstName}!
                </h1>
                <p style={{ color: '#64748b', margin: 0, fontSize: '1rem', fontWeight: '400' }}>Here's an overview of your operations today.</p>
            </div>

            <div style={sectionStyle}>
                <div style={gridStyle}>
                    <StatCard title="Total Customers" value={stats.totalCustomers} icon="bi-people" color="#3b82f6" />
                    <StatCard title="Total Volunteers" value={stats.totalVolunteers} icon="bi-heart" color="#8b5cf6" />
                    <StatCard title="Tour Bookings" value={stats.tourBookings} icon="bi-map" color="#f97316" />
                    <StatCard title="Volunteer Bookings" value={stats.volunteerBookings} icon="bi-box-seam" color="#10b981" />
                </div>
            </div>

            <div style={sectionStyle}>
                <h3 style={sectionTitleStyle}>Financial Health</h3>
                <div style={gridStyle}>
                    <StatCard title="Total Cash Collected" value={`$${stats.totalRevenue.toLocaleString()}`} icon="bi-cash-stack" color="#10b981" gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)" />
                    <StatCard title="Outstanding Balance" value={`$${stats.outstandingBalance.toLocaleString()}`} icon="bi-wallet2" color="#f59e0b" gradient="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" />
                    <StatCard title="Awaiting Payment" value={stats.awaitingPayment} icon="bi-hourglass-split" color="#ef4444" />
                    <StatCard title="Fully Paid" value={stats.fullyPaid} icon="bi-check-circle" color="#3b82f6" />
                </div>
            </div>

            <div style={sectionStyle}>
                <h3 style={sectionTitleStyle}>Logistics & Operations</h3>
                <div style={gridStyle}>
                    <StatCard title="Pending Bookings" value={stats.pendingBookings} icon="bi-clock" color="#f59e0b" />
                    <StatCard title="Confirmed Bookings" value={stats.confirmedBookings} icon="bi-check2-all" color="#3b82f6" />
                    <StatCard title="Today's Arrivals" value={stats.todayArrivals} icon="bi-airplane-engines" color="#ec4899" />
                    <StatCard title="Upcoming Arrivals" value={stats.upcomingArrivals} icon="bi-calendar-event" color="#0ea5e9" />
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
