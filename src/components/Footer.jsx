import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/brand_logo.jpg';

const Footer = () => {
    return (
        <footer className="brand-footer">
            <div className="footer-grid">
                {/* Column 1: Brand & Contact */}
                <div className="footer-column">
                    <Link to="/" className="logo-area" style={{marginBottom: '25px', display: 'inline-flex'}}>
                        <div className="logo-image-container">
                            <img src={logo} alt="Give Back Journey Logo" className="logo-image" />
                        </div>
                        <span className="logo-text" style={{color: 'white'}}>Give Back Journey<span className="logo-dot">.</span></span>
                    </Link>
                    <p style={{color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '20px'}}>
                        Empowering local communities through meaningful travel. We reveal Sri Lanka's soul through curated heritage, wilderness, and impactful experiences.
                    </p>
                    <div className="footer-contact-info" style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)'}}>
                        <p style={{marginBottom: '8px'}}><i className="fa-solid fa-location-dot" style={{marginRight: '10px', color: 'var(--primary-green)'}}></i> No. 45, Peradeniya Road, Kandy, Sri Lanka</p>
                        <p style={{marginBottom: '8px'}}><i className="fa-solid fa-phone" style={{marginRight: '10px', color: 'var(--primary-green)'}}></i> +94 81 234 5678</p>
                        <p style={{marginBottom: '20px'}}><i className="fa-solid fa-envelope" style={{marginRight: '10px', color: 'var(--primary-green)'}}></i> hello@givebackjourney.com</p>
                    </div>
                    <div className="footer-social" style={{display: 'flex', gap: '15px', fontSize: '1.4rem'}}>
                        <a href="https://wa.me/94771234567" target="_blank" rel="noreferrer" className="footer-link"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="#" className="footer-link"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="footer-link"><i className="fa-brands fa-tiktok"></i></a>
                        <a href="#" className="footer-link"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="footer-link"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>

                {/* Column 2: Discover */}
                <div className="footer-column">
                    <h4>Explore</h4>
                    <ul className="footer-links">
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/packages" className="footer-link">Tour Packages</Link></li>
                        <li><Link to="/volunteer" className="footer-link">Volunteering</Link></li>
                        <li><Link to="/sri-lanka" className="footer-link">Island Guide</Link></li>
                        <li><Link to="/contact" className="footer-link">Talk to an Expert</Link></li>
                    </ul>
                </div>

                {/* Column 3: Impact Areas */}
                <div className="footer-column">
                    <h4>Impact Hubs</h4>
                    <ul className="footer-links">
                        <li><Link to="/volunteer" className="footer-link">Wildlife Conservation</Link></li>
                        <li><Link to="/volunteer" className="footer-link">Community Education</Link></li>
                        <li><Link to="/volunteer" className="footer-link">Sustainable Farming</Link></li>
                        <li><Link to="/exclusive" className="footer-link">Cultural Heritage</Link></li>
                        <li><Link to="/volunteer" className="footer-link">Eco-Tourism</Link></li>
                    </ul>
                </div>

                {/* Column 4: Trust & Certifications */}
                <div className="footer-column">
                    <h4>Verified Trust</h4>
                    <p style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: '20px'}}>Proudly recognized for our commitment to sustainable and impactful travel across the island.</p>
                    <div className="trust-badges" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px'}}>
                        <div style={{background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px', textAlign: 'center'}}>
                            <i className="fa-solid fa-leaf" style={{color: 'var(--primary-green)', fontSize: '1.2rem', display: 'block', marginBottom: '5px'}}></i>
                            <span style={{fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px'}}>Eco Certified</span>
                        </div>
                        <div style={{background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px', textAlign: 'center'}}>
                            <i className="fa-solid fa-award" style={{color: 'var(--primary-green)', fontSize: '1.2rem', display: 'block', marginBottom: '5px'}}></i>
                            <span style={{fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px'}}>Local Experts</span>
                        </div>
                        <div style={{background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px', textAlign: 'center'}}>
                            <i className="fa-solid fa-shield-halved" style={{color: 'var(--primary-green)', fontSize: '1.2rem', display: 'block', marginBottom: '5px'}}></i>
                            <span style={{fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px'}}>Secure Trip</span>
                        </div>
                        <div style={{background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px', textAlign: 'center'}}>
                            <i className="fa-solid fa-map-location-dot" style={{color: 'var(--primary-green)', fontSize: '1.2rem', display: 'block', marginBottom: '5px'}}></i>
                            <span style={{fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px'}}>SL Tourism</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div>© 2026 Give Back Journey (Pvt) Ltd. All rights reserved.</div>
                <div className="footer-bottom-links" style={{display: 'flex', gap: '30px'}}>
                    <Link to="/privacy-policy" className="footer-link" style={{fontSize: '0.75rem'}}>Privacy Policy</Link>
                    <Link to="/terms-and-conditions" className="footer-link" style={{fontSize: '0.75rem'}}>Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
