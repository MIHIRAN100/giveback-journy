import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import logo from '../assets/brand_logo.jpg';
import AdBanner from './AdBanner';


const Navbar = () => {
    const { compareList } = useCompare();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { 
            name: 'Packages', 
            path: '/packages',
            columns: [
                {
                    title: 'Explore Tours',
                    items: [
                        { name: 'Signature Journeys', path: '/packages' },
                        { name: 'Day Adventures', path: '/packages' },
                        { name: 'Multi-Day Quests', path: '/packages' },
                        { name: 'Coastal Escapes', path: '/packages' },
                        { name: 'Wildlife Safaris', path: '/packages' }
                    ]
                },
                {
                    title: 'Travel Styles',
                    items: [
                        { name: 'Budget Friendly', path: '/packages' },
                        { name: 'Luxury Boutique', path: '/packages' },
                        { name: 'Adventure & Hike', path: '/packages' },
                        { name: 'Family Group', path: '/packages' }
                    ]
                },
                {
                    title: 'Quick Links',
                    items: [
                        { name: 'Compare Tours', path: '/compare' },
                        { name: 'Latest Offers', path: '/packages' },
                        { name: 'Why Book With Us', path: '/exclusive-journeys' }
                    ]
                }
            ]
        },
        { 
            name: 'Island Guide', 
            path: '/sri-lanka',
            columns: [
                {
                    title: 'Top Regions',
                    items: [
                        { name: 'Cultural Triangle', path: '/sri-lanka' },
                        { name: 'Hill Country', path: '/sri-lanka' },
                        { name: 'Southern Coast', path: '/sri-lanka' },
                        { name: 'Northern Wonders', path: '/sri-lanka' }
                    ]
                },
                {
                    title: 'Travel Essentials',
                    items: [
                        { name: 'Best Time to Visit', path: '/sri-lanka' },
                        { name: 'Visa & Entry', path: '/sri-lanka' },
                        { name: 'Local Etiquette', path: '/sri-lanka' },
                        { name: 'Packing Guide', path: '/sri-lanka' }
                    ]
                }
            ]
        },
        { 
            name: 'Impact & Volunteer', 
            path: '/volunteer',
            columns: [
                {
                    title: 'Current Projects',
                    items: [
                        { name: 'Wildlife Conservation', path: '/volunteer' },
                        { name: 'Village Education', path: '/volunteer' },
                        { name: 'Eco-Reforestation', path: '/volunteer' },
                        { name: 'Women Empowerment', path: '/volunteer' }
                    ]
                },
                {
                    title: 'Get Involved',
                    items: [
                        { name: 'How it Works', path: '/volunteer' },
                        { name: 'Volunteer Stories', path: '/volunteer' },
                        { name: 'Impact Reports', path: '/volunteer' },
                        { name: 'Apply Now', path: '/volunteer' }
                    ]
                }
            ]
        },
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
                <AdBanner />
                <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
                    <Link to="/" className="logo-area" onMouseEnter={() => setActiveMegaMenu(null)}>
                        <div className="logo-image-container">
                            <img src={logo} alt="Give Back Journey Logo" className="logo-image" />
                        </div>
                        <span className="logo-text">Give Back Journey<span className="logo-dot">.</span></span>
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
                                    <Link to={item.path} className="nav-item">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav-actions" onMouseEnter={() => setActiveMegaMenu(null)}>
                        <Link to="/compare" className="nav-icon-link" style={{ position: 'relative', marginRight: '15px', color: 'var(--pitch-black)', fontSize: '1.2rem' }}>
                            <i className="bi bi-shuffle"></i>
                            {compareList.length > 0 && <span className="compare-badge">{compareList.length}</span>}
                        </Link>
                        <Link to="/contact" className="btn-modern btn-black">Contact Us</Link>
                    </div>

                    <div className="mobile-menu-btn" onClick={toggleMenu}>
                        <i className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
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
                        <Link to={item.path} className="nav-item mobile" onClick={toggleMenu}>{item.name}</Link>
                        {item.columns && (
                            <div className="mobile-dropdown-items">
                                {item.columns.map(col => col.items.map((sub, sIdx) => (
                                    <Link key={sIdx} to={sub.path} className="mobile-sub-item" onClick={toggleMenu}>{sub.name}</Link>
                                )))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Navbar;
