import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
    const { profile } = useAuth();

    const navItems = [
        { path: '/admin', label: 'Dashboard', icon: 'bi-grid-1x2', exact: true },
        { path: '/admin/customers', label: 'Customers', icon: 'bi-people' },
        { path: '/admin/volunteers', label: 'Volunteers', icon: 'bi-heart' },
        { path: '/admin/tours', label: 'Tours', icon: 'bi-map' },
        { path: '/admin/volunteer-packages', label: 'Volunteer Packages', icon: 'bi-box-seam' },
        { path: '/admin/bookings', label: 'Bookings', icon: 'bi-calendar-check' },
        { path: '/admin/payments', label: 'Payments', icon: 'bi-cash-coin' },
        { path: '/admin/arrivals', label: 'Arrivals', icon: 'bi-airplane-engines' },
        { path: '/admin/accommodation', label: 'Accommodation', icon: 'bi-house' },
        { path: '/admin/audit', label: 'Audit History', icon: 'bi-clock-history' },
        { path: '/admin/settings', label: 'Settings', icon: 'bi-gear' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', paddingTop: '90px', background: '#f8fafc', fontFamily: '"Inter", system-ui, sans-serif' }}>
            {/* Dark Sidebar */}
            <div style={{ width: '260px', background: '#0f172a', padding: '30px 20px', display: 'flex', flexDirection: 'column', color: '#f8fafc' }}>
                <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {navItems.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.exact}
                            style={({ isActive }) => ({
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '10px 14px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                color: isActive ? '#ffffff' : '#94a3b8',
                                background: isActive ? '#1e293b' : 'transparent',
                                fontWeight: isActive ? '600' : '500',
                                fontSize: '0.9rem',
                                transition: 'all 0.2s ease',
                                borderLeft: isActive ? '3px solid #38bdf8' : '3px solid transparent'
                            })}
                        >
                            {({ isActive }) => (
                                <>
                                    <i className={`bi ${item.icon}`} style={{ fontSize: '1.1rem', opacity: isActive ? 1 : 0.7 }}></i>
                                    {item.label}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Main Content Area */}
            <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
