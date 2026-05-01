import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [bannerVisible, setBannerVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else if (window.scrollY < 30) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header className={`brand-header ${isScrolled ? 'header-scrolled' : ''}`}>
            {/* Smooth-Hiding Advertising Banner */}
            <div className={`banner-wrapper ${!bannerVisible || isScrolled ? 'banner-hidden' : ''}`}>
                <div className="banner">
                    <div className="banner-content">
                        <span className="banner-tag">NEW</span>
                        <span className="banner-text">Special Island Update : Discover 2025 Seasonal Packages for Sri Lanka.</span>
                    </div>
                    <div className="banner-close" onClick={() => setBannerVisible(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
            
            <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="logo-area">
                    <div className="logo-box">
                        <i className="fa-solid fa-hand-holding-heart"></i>
                    </div>
                    <span className="logo-text">Giveback journny<span className="logo-dot">.</span></span>
                </Link>

                <div className="nav-center-wrapper" style={{flex: 2}}>
                    <ul className="nav-menu">
                        <li><Link to="/" className="nav-item">Introduction</Link></li>
                        <li><Link to="/packages" className="nav-item">Packages</Link></li>
                        <li><Link to="/sri-lanka" className="nav-item">Sri Lankan Heritage</Link></li>
                        <li><Link to="/exclusive-journeys" className="nav-item">Exclusive Journeys</Link></li>
                        <li><Link to="/stays" className="nav-item">Stays</Link></li>
                    </ul>
                </div>

                <div className="nav-actions">
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
            <Link to="/stays" className="nav-item" onClick={toggleMenu}>Stays</Link>
            <Link to="/contact" className="btn-modern btn-black" onClick={toggleMenu} style={{textAlign: 'center', marginTop: '20px'}}>Contact Us</Link>
        </div>
        </>
    );
};

export default Navbar;
