import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
    const { profile } = useAuth();

    const navItems = [
        { path: '/admin', label: 'Dashboard', icon: 'bi-grid-1x2', exact: true },
        { path: '/admin/bookings', label: 'Orders', icon: 'bi-box-seam' },
        { path: '/admin/tours', label: 'Products', icon: 'bi-tag' },
        { path: '/admin/customers', label: 'Customers', icon: 'bi-people' },
        { path: '/admin/payments', label: 'Finances', icon: 'bi-cash-coin' },
        { path: '/admin/arrivals', label: 'Arrivals', icon: 'bi-airplane-engines' },
        { path: '/admin/settings', label: 'Settings', icon: 'bi-gear' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', paddingTop: '90px', background: '#f4f7fb', fontFamily: '"Inter", system-ui, sans-serif' }}>
            {/* Light Sidebar */}
            <div style={{ width: '260px', background: '#ffffff', padding: '30px 20px', display: 'flex', flexDirection: 'column', borderRight: '1px solid #eaeaea', position: 'sticky', top: '90px', height: 'calc(100vh - 90px)', zIndex: 100 }}>
                <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {navItems.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.exact}
                            style={({ isActive }) => ({
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                padding: '12px 16px',
                                borderRadius: '12px',
                                textDecoration: 'none',
                                color: isActive ? '#2563eb' : '#64748b',
                                background: isActive ? '#eff6ff' : 'transparent',
                                fontWeight: isActive ? '700' : '600',
                                fontSize: '0.9rem',
                                transition: 'all 0.2s ease',
                                position: 'relative'
                            })}
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '4px', background: '#2563eb', borderRadius: '0 4px 4px 0' }}></div>}
                                    <i className={`bi ${item.icon}`} style={{ fontSize: '1.2rem' }}></i>
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

