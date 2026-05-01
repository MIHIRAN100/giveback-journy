import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileBottomBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { path: '/',                   icon: 'fa-solid fa-house',          label: 'Home' },
        { path: '/packages',           icon: 'fa-solid fa-compass',        label: 'Packages' },
        { path: '/sri-lanka',          icon: 'fa-solid fa-landmark',       label: 'Heritage' },
        { path: '/stays',              icon: 'fa-solid fa-bed',            label: 'Stays' },
        { path: '/contact',            icon: 'fa-solid fa-envelope',       label: 'Contact' },
    ];

    return (
        <nav className="mobile-bottom-bar">
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`mobile-bottom-item ${currentPath === item.path ? 'active' : ''}`}
                >
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                </Link>
            ))}
        </nav>
    );
};

export default MobileBottomBar;
