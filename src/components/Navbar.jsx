import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import logo from '../assets/logo_circular.png';


const Navbar = () => {
    const { compareList } = useCompare();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [bannerVisible, setBannerVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const shouldShowSolid = !isHomePage || isScrolled;

    return (
        <>
            <header className={`brand-header ${shouldShowSolid ? 'header-scrolled' : ''}`}>
            {/* Smooth-Hiding Advertising Banner */}
            <div className={`banner-wrapper ${!bannerVisible || isScrolled ? 'banner-hidden' : ''}`}>
                <div className="banner">
                    <div className="banner-content">
                        <span className="banner-tag">NEW</span>
                        <span className="banner-text">New volunteering projects available - Join the impact today!</span>
                    </div>
                    <div className="banner-close" onClick={() => setBannerVisible(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
            
            <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="logo-area">
                    <img src={logo} alt="Giveback Journey Logo" className="logo-image" />
                    <span className="logo-text">Giveback journny<span className="logo-dot">.</span></span>
                </Link>

                <div className="nav-center-wrapper" style={{flex: 2}}>
                    <ul className="nav-menu">
                        <li><Link to="/" className="nav-item">Introduction</Link></li>
                        <li><Link to="/packages" className="nav-item">Packages</Link></li>
                        <li><Link to="/sri-lanka" className="nav-item">Sri Lankan Heritage</Link></li>
                        <li><Link to="/exclusive-journeys" className="nav-item">Exclusive Journeys</Link></li>
                        <li><Link to="/volunteer" className="nav-item">Giveback Impact</Link></li>
                    </ul>
                </div>

                <div className="nav-actions">
                    <Link to="/compare" className="nav-icon-link" style={{ position: 'relative', marginRight: '15px', color: 'var(--pitch-black)', fontSize: '1.2rem' }}>
                        <i className="bi bi-shuffle"></i>
                        {compareList.length > 0 && (
                            <span style={{ 
                                position: 'absolute', 
                                top: '-8px', 
                                right: '-8px', 
                                background: 'var(--primary-green)', 
                                color: 'white', 
                                fontSize: '0.65rem', 
                                fontWeight: 800, 
                                width: '18px', 
                                height: '18px', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                border: '2px solid white'
                            }}>
                                {compareList.length}
                            </span>
                        )}
                    </Link>
                    <Link to="/contact" className="btn-modern btn-black">Contact Us</Link>
                </div>

                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    <i className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
            </nav>

        </header>
        <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
            <div className="drawer-close" onClick={toggleMenu}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <Link to="/" className="nav-item" onClick={toggleMenu}>Introduction</Link>
            <Link to="/packages" className="nav-item" onClick={toggleMenu}>Packages</Link>
            <Link to="/sri-lanka" className="nav-item" onClick={toggleMenu}>Sri Lankan Heritage</Link>
            <Link to="/exclusive-journeys" className="nav-item" onClick={toggleMenu}>Exclusive Journeys</Link>
            <Link to="/volunteer" className="nav-item" onClick={toggleMenu}>Giveback Impact</Link>
            <Link to="/contact" className="btn-modern btn-black" onClick={toggleMenu} style={{textAlign: 'center', marginTop: '20px'}}>Contact Us</Link>
        </div>
        </>
    );
};

export default Navbar;
