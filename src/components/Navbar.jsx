import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import { useCurrency } from '../context/CurrencyContext';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/brand_logo.png';
import AdBanner from './AdBanner';


const Navbar = () => {
    const { compareList } = useCompare();
    const { currency, setCurrency, currencies } = useCurrency();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleClickOutside = () => {
            setIsCurrencyOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { 
            name: 'Travel Deals', 
            path: '/packages',
            columns: [
                {
                    title: 'Signature Journeys',
                    items: [
                        { name: '7-Day Essential Sri Lanka', path: '/package/1' },
                        { name: 'Southern Sun & Beach Escape', path: '/package/2' },
                        { name: 'Highlands & Southern Coast', path: '/package/3' },
                        { name: '5-Day Mist & Mountains', path: '/package/4' },
                        { name: '3-Day Galle Fort Escape', path: '/package/6' }
                    ]
                },
                {
                    title: 'Day Trips & Adventures',
                    items: [
                        { name: 'Kandy & Pinnawala Day Trip', path: '/package/8' },
                        { name: 'Kandy Highlights', path: '/package/9' },
                        { name: "Adam's Peak Sunrise Quest", path: '/package/10' },
                        { name: 'Kitulgala White Water Rafting', path: '/package/11' }
                    ]
                },
                {
                    title: 'Quick Links',
                    items: [
                        { name: 'All Packages', path: '/packages' },
                        { name: 'Compare Tours', path: '/compare' },
                        { name: 'Breathe Sri Lanka Journey', path: '/volunteer-program/real-sri-lanka-experience' },
                        { name: 'Request Custom Plan', path: '/contact' }
                    ]
                }
            ]
        },
        { 
            name: 'Giveback Volunteer', 
            path: '/volunteer',
            columns: [
                {
                    title: 'Current Projects',
                    items: [
                        { name: 'Teaching Volunteer', path: '/volunteer-program/sri-lanka-childcare' },
                        { name: 'Special Needs Support', path: '/volunteer-program/special-needs-support' },
                        { name: 'Construction & Renovation', path: '/volunteer-program/village-school-renovation' },
                        { name: 'Medical Volunteer', path: '/volunteer-program/medical-volunteer' }
                    ]
                },
                {
                    title: 'Get Involved',
                    items: [
                        { name: 'How it Works', path: '/volunteer' },
                        { name: 'Volunteer Stories', path: '/volunteer' },
                        { name: 'Impact Reports', path: '/volunteer' },
                        { name: 'Pricing', path: '/volunteer#pricing' },
                        { name: 'Apply Now', path: '/volunteer' }
                    ]
                }
            ]
        },
        { name: 'Price', path: '/volunteer#pricing' },
        { name: 'About Us', path: '/exclusive-journeys' }
    ];

    return (
        <>
            {/* Global Overlay when Mega Menu is open */}
            <div 
                className={`mega-menu-overlay ${activeMegaMenu ? 'active' : ''}`}
                onMouseEnter={() => setActiveMegaMenu(null)}
            ></div>

            <header className={`brand-header ${(activeMegaMenu || !isHomePage || isScrolled) ? 'header-scrolled' : ''}`}>
                <AdBanner isScrolled={isScrolled} />
                <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
                    <Link to="/" className="logo-area" title="Giveback Journey Logo" onMouseEnter={() => setActiveMegaMenu(null)}>
                        <div className="logo-image-container">
                            <img src={logo} alt="Give Back Journey Logo" title="Giveback Journey Logo" className="logo-image" />
                        </div>
                        <span className="logo-text">Giveback Journey<span className="logo-dot">.</span></span>
                    </Link>

                    <div className="nav-center-wrapper">
                        <ul className="nav-menu">
                            <li className="nav-item-wrapper"><Link to="/" className="nav-item" onMouseEnter={() => setActiveMegaMenu(null)}>Home</Link></li>
                            {navItems.map((item, idx) => (
                                <li 
                                    key={idx} 
                                    className="nav-item-wrapper"
                                    onMouseEnter={() => item.columns ? setActiveMegaMenu(item.name) : setActiveMegaMenu(null)}
                                >
                                    <Link to={item.path} className="nav-item" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <span>{item.name}</span>
                                        {item.name === 'Giveback Volunteer' && <span className="nav-badge-new">New</span>}
                                        {item.columns && (
                                            <i className="bi bi-chevron-down" style={{ 
                                                fontSize: '0.65rem', 
                                                transition: 'transform 0.3s ease',
                                                transform: activeMegaMenu === item.name ? 'rotate(180deg)' : 'rotate(0)' 
                                            }}></i>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav-actions" onMouseEnter={() => { setActiveMegaMenu(null); setIsCurrencyOpen(false); }}>
                        <div className="nav-currency-selector" style={{ position: 'relative', marginRight: '15px' }}>
                            <div 
                                onClick={(e) => { e.stopPropagation(); setIsCurrencyOpen(!isCurrencyOpen); }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '6px 12px',
                                    background: 'rgba(0,0,0,0.03)',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    color: 'var(--pitch-black)',
                                    fontSize: '0.8rem',
                                    fontWeight: 700
                                }}
                            >
                                <span>{currencies[currency].icon}</span>
                                <span>{currency}</span>
                                <i className={`bi bi-chevron-down`} style={{ fontSize: '0.6rem', transition: 'transform 0.3s ease', transform: isCurrencyOpen ? 'rotate(180deg)' : 'rotate(0)' }}></i>
                            </div>

                            <AnimatePresence>
                                {isCurrencyOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        style={{
                                            position: 'absolute',
                                            top: '120%',
                                            right: 0,
                                            background: 'rgba(255, 255, 255, 0.9)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '16px',
                                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                            padding: '8px',
                                            minWidth: '150px',
                                            zIndex: 1000,
                                            border: '1px solid rgba(0,0,0,0.05)'
                                        }}
                                    >
                                        {Object.values(currencies).map(c => (
                                            <div 
                                                key={c.label}
                                                onClick={() => { setCurrency(c.label); setIsCurrencyOpen(false); }}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    padding: '10px 15px',
                                                    borderRadius: '10px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease',
                                                    background: currency === c.label ? 'rgba(27, 163, 82, 0.1)' : 'transparent',
                                                    color: currency === c.label ? 'var(--primary-green)' : '#333',
                                                    fontSize: '0.85rem',
                                                    fontWeight: currency === c.label ? 800 : 600
                                                }}
                                                className="currency-option"
                                            >
                                                <span style={{ fontSize: '1.1rem' }}>{c.icon}</span>
                                                <span>{c.label} ({c.symbol})</span>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <Link to="/compare" className="nav-icon-link" style={{ position: 'relative', marginRight: '15px', color: 'var(--pitch-black)', fontSize: '1.2rem' }}>
                            <i className="bi bi-shuffle"></i>
                            {compareList.length > 0 && <span className="compare-badge">{compareList.length}</span>}
                        </Link>
                        <Link to="/contact" className="btn-modern btn-black">Contact Us</Link>
                    </div>

                    <div className="mobile-right-actions">
                        <Link to="/compare" className="mobile-compare-btn">
                            <i className={compareList.length > 0 ? "bi bi-heart-fill" : "bi bi-heart"}></i>
                            {compareList.length > 0 && <span className="compare-badge">{compareList.length}</span>}
                        </Link>
                        
                        {/* Mobile Currency Selector */}
                        <div className="mobile-currency-selector" style={{ position: 'relative' }}>
                            <div 
                                onClick={(e) => { e.stopPropagation(); setIsCurrencyOpen(!isCurrencyOpen); }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    padding: '6px 10px',
                                    background: 'rgba(0,0,0,0.05)',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    color: 'var(--pitch-black)',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}
                            >
                                <span>{currencies[currency].icon}</span>
                                <span>{currency}</span>
                                <i className={`bi bi-chevron-down`} style={{ fontSize: '0.55rem', transition: 'transform 0.3s ease', transform: isCurrencyOpen ? 'rotate(180deg)' : 'rotate(0)' }}></i>
                            </div>

                            <AnimatePresence>
                                {isCurrencyOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        style={{
                                            position: 'absolute',
                                            top: '120%',
                                            right: 0,
                                            background: 'rgba(255, 255, 255, 0.95)',
                                            backdropFilter: 'blur(15px)',
                                            WebkitBackdropFilter: 'blur(15px)',
                                            borderRadius: '16px',
                                            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                                            padding: '6px',
                                            minWidth: '130px',
                                            zIndex: 1000,
                                            border: '1px solid rgba(0,0,0,0.05)'
                                        }}
                                    >
                                        {Object.values(currencies).map(c => (
                                            <div 
                                                key={c.label}
                                                onClick={() => { setCurrency(c.label); setIsCurrencyOpen(false); }}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    padding: '8px 12px',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease',
                                                    background: currency === c.label ? 'rgba(27, 163, 82, 0.1)' : 'transparent',
                                                    color: currency === c.label ? 'var(--primary-green)' : '#333',
                                                    fontSize: '0.8rem',
                                                    fontWeight: currency === c.label ? 800 : 600
                                                }}
                                            >
                                                <span style={{ fontSize: '1rem' }}>{c.icon}</span>
                                                <span>{c.label}</span>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="mobile-menu-btn" onClick={toggleMenu}>
                            <i className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                        </div>
                    </div>
                </nav>

                {/* Apple-Style Mega Menu Content */}
                <div 
                    className={`mega-menu-container ${activeMegaMenu ? 'active' : ''}`}
                    onMouseLeave={() => setActiveMegaMenu(null)}
                >
                    <div className="mega-menu-inner">
                        {navItems.map((nav, nIdx) => (
                            activeMegaMenu === nav.name && nav.columns && (
                                <div key={nIdx} className="mega-menu-grid">
                                    {nav.columns.map((col, cIdx) => (
                                        <div key={cIdx} className="mega-menu-column">
                                            <h4 className="mega-column-title">{col.title}</h4>
                                            <ul className="mega-column-list">
                                                {col.items.map((it, iIdx) => (
                                                    <li key={iIdx}>
                                                        <Link to={it.path} className="mega-link" onClick={() => setActiveMegaMenu(null)}>
                                                            {it.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </header>

            <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
            <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
                <div className="drawer-close" onClick={toggleMenu}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                {navItems.map((item, idx) => (
                    <div key={idx} className="mobile-nav-group">
                        <Link to={item.path} className="nav-item mobile" onClick={toggleMenu} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>{item.name}</span>
                            {item.name === 'Giveback Volunteer' && <span className="nav-badge-new">New</span>}
                        </Link>
                        {item.columns && (
                            <div className="mobile-dropdown-items">
                                {item.columns.map(col => col.items.map((sub, sIdx) => (
                                    <Link key={sIdx} to={sub.path} className="mobile-sub-item" onClick={toggleMenu}>{sub.name}</Link>
                                )))}
                            </div>
                        )}
                    </div>
                ))}
                <div className="mobile-nav-group" style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#999', letterSpacing: '1px' }}>Preferred Currency</label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                            {Object.values(currencies).map(c => (
                                <div 
                                    key={c.label}
                                    onClick={() => {
                                        setCurrency(c.label);
                                        toggleMenu();
                                    }}
                                    style={{
                                        padding: '15px',
                                        borderRadius: '16px',
                                        border: `2px solid ${currency === c.label ? 'var(--primary-green)' : '#eee'}`,
                                        background: currency === c.label ? 'rgba(27, 163, 82, 0.05)' : 'white',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '8px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <span style={{ fontSize: '1.5rem' }}>{c.icon}</span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: currency === c.label ? 'var(--primary-green)' : '#333' }}>{c.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
