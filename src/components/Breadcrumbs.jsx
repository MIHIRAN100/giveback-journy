import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tourPackages } from '../data/tours';

const Breadcrumbs = ({ customName = null }) => {
    const location = useLocation();
    const path = location.pathname;

    // Don't show breadcrumbs on Home page
    if (path === '/') return null;

    const getBreadcrumbs = () => {
        const crumbs = [
            { label: 'Home', path: '/' }
        ];

        if (path.startsWith('/package/')) {
            const id = path.split('/').pop();
            const pkg = tourPackages.find(p => p.id === parseInt(id));
            crumbs.push({ label: 'Tour Packages', path: '/packages' });
            if (pkg) {
                crumbs.push({ label: pkg.name, path: path, active: true });
            }
        } else if (path === '/packages') {
            crumbs.push({ label: 'Tour Packages', path: '/packages', active: true });
        } else if (path === '/volunteer') {
            crumbs.push({ label: 'Giveback Impact', path: '/volunteer', active: true });
        } else if (path === '/sri-lanka') {
            crumbs.push({ label: 'Destinations', path: '#' });
            crumbs.push({ label: 'Sri Lanka', path: '/sri-lanka', active: true });
        } else if (path === '/contact') {
            crumbs.push({ label: 'Contact', path: '/contact', active: true });
        } else if (path === '/compare') {
            crumbs.push({ label: 'Compare Tours', path: '/compare', active: true });
        } else if (path === '/exclusive-journeys') {
            crumbs.push({ label: 'Exclusive Journeys', path: '/exclusive-journeys', active: true });
        } else if (path.startsWith('/inquiry/')) {
            const id = path.split('/').pop();
            const pkg = tourPackages.find(p => p.id === parseInt(id));
            crumbs.push({ label: 'Tour Packages', path: '/packages' });
            if (pkg) {
                crumbs.push({ label: pkg.name, path: `/package/${id}` });
            }
            crumbs.push({ label: 'Booking Inquiry', path: path, active: true });
        }

        return crumbs;
    };

    const breadcrumbs = getBreadcrumbs();

    return (
        <nav style={{ 
            padding: '15px 5%', 
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            color: '#888',
            fontWeight: 600,
            borderBottom: '1px solid rgba(0,0,0,0.03)',
            position: 'sticky',
            top: '0',
            zIndex: 100
        }}>
            {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                    {index > 0 && (
                        <span style={{ color: '#ccc', margin: '0 4px', fontSize: '0.7rem', fontWeight: 400 }}>
                            /
                        </span>
                    )}
                    {crumb.active ? (
                        <span style={{ 
                            color: '#111', 
                            fontWeight: 800,
                            padding: '6px 12px',
                            background: 'rgba(0,0,0,0.03)',
                            borderRadius: '100px'
                        }}>
                            {crumb.label}
                        </span>
                    ) : (
                        <Link 
                            to={crumb.path} 
                            style={{ 
                                color: '#666', 
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                padding: '6px 12px',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#107c41';
                                e.target.style.background = 'rgba(16, 124, 65, 0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#666';
                                e.target.style.background = 'transparent';
                            }}
                        >
                            {crumb.label === 'Home' && <i className="bi bi-house-door" style={{fontSize: '1rem'}}></i>}
                            {crumb.label}
                        </Link>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumbs;
