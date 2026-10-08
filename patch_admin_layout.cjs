const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'admin', 'AdminLayout.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const newLayout = `import React from 'react';
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
            <div style={{ width: '260px', background: '#ffffff', padding: '30px 20px', display: 'flex', flexDirection: 'column', borderRight: '1px solid #eaeaea', zIndex: 10 }}>
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
                                    <i className={\`bi \${item.icon}\`} style={{ fontSize: '1.2rem' }}></i>
                                    {item.label}
                                </>
                            )}
                        </NavLink>
                    ))}
                    
                    <div style={{ marginTop: 'auto', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', borderRadius: '16px', padding: '20px', color: '#fff', textAlign: 'center', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.2)' }}>
                        <div style={{ background: '#fff', color: '#2563eb', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto', fontSize: '1.2rem' }}>
                            <i className="bi bi-shield-check"></i>
                        </div>
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', fontWeight: '700' }}>Upgrade to Premium!</h4>
                        <p style={{ margin: '0 0 15px 0', fontSize: '0.75rem', opacity: 0.9 }}>Upgrade your account and unlock all of the benefits.</p>
                        <button style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '20px', padding: '8px 16px', color: '#fff', fontWeight: '600', fontSize: '0.8rem', cursor: 'pointer', width: '100%' }}>
                            Upgrade premium
                        </button>
                    </div>
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
`;

fs.writeFileSync(filePath, newLayout);
console.log("Updated AdminLayout");
