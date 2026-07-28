import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileBottomBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { path: '/',                   icon: 'bi bi-house',          label: 'Home' },
        { path: '/packages',           icon: 'bi bi-suitcase-lg',    label: 'Tours' },
        { path: '/volunteer',          icon: 'bi bi-heart',          label: 'Giveback Volunteer' },
        { path: '/contact',            icon: 'bi bi-chat-text',      label: 'Contact' },
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
