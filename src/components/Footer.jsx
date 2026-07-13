import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/brand_logo.png';
import { useCurrency } from '../context/CurrencyContext';

const Footer = () => {
    const { currency, setCurrency, currencies } = useCurrency();
    return (
        <footer className="brand-footer">
            <div className="footer-grid">
                {/* Column 1: Brand & Contact */}
                <div className="footer-column">
                    <Link to="/" className="logo-area" style={{marginBottom: '25px', display: 'inline-flex', color: 'var(--white)'}}>
                        <div className="logo-image-container">
                            <img src={logo} alt="Giveback Journey Logo" className="logo-image" />
                        </div>
                        <span className="logo-text">Giveback Journey<span className="logo-dot">.</span></span>
                    </Link>
                    <p style={{color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '20px'}}>
                        Empowering local communities through meaningful travel. We reveal Sri Lanka's soul through curated heritage, wilderness, and impactful experiences.
                    </p>
                    <div className="footer-contact-info" style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)'}}>
                        <p style={{marginBottom: '8px'}}><i className="fa-solid fa-location-dot" style={{marginRight: '10px', color: 'var(--primary-green)'}}></i> No. 45, Peradeniya Road, Kandy, Sri Lanka</p>
                        <p style={{marginBottom: '8px'}}><i className="fa-solid fa-phone" style={{marginRight: '10px', color: 'var(--primary-green)'}}></i> +94 81 234 5678</p>
                        <p style={{marginBottom: '20px'}}><i className="fa-solid fa-envelope" style={{marginRight: '10px', color: 'var(--primary-green)'}}></i> Hello@givebackjourney.com</p>
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
                            <span style={{fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px'}}>Authentic Impact</span>
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
                <div>© 2026 Giveback Journey (Pvt) Ltd. All rights reserved.</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                    <div className="footer-bottom-links" style={{display: 'flex', gap: '20px'}}>
                        <Link to="/privacy-policy" className="footer-link" style={{fontSize: '0.75rem'}}>Privacy Policy</Link>
                        <Link to="/terms-and-conditions" className="footer-link" style={{fontSize: '0.75rem'}}>Terms & Conditions</Link>
                        <Link to="/cookie-policy" className="footer-link" style={{fontSize: '0.75rem'}}>Cookie Policy</Link>
                        <Link to="/nda" className="footer-link" style={{fontSize: '0.75rem'}}>Non-Disclosure Agreement (NDA)</Link>
                    </div>
                </div>
            </div>

            <div className="footer-disclaimer" style={{
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: '20px',
                marginTop: '30px',
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.72rem',
                lineHeight: '1.7',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}>
                <p>† Regular price values are based on comparable tour elements, private vehicle hire with local drivers, and standard guesthouse accommodation costs in Sri Lanka at the time of publication.</p>
                <p>* Giveback Journey contribution scheme ensures a portion of your tour package costs directly funds our grassroots partners and ongoing projects in community education, wildlife conservation, and eco-farming across Sri Lanka. Impact verification is conducted quarterly and published for transparency.</p>
                <p>Due to the dynamic nature of volunteering projects and tropical weather, itineraries and community placement activities are subject to slight changes to ensure safety and maximum project benefits. Any major updates will be verified and communicated directly to guests.</p>
                <p>Apple® and Apple Logo® are registered trademarks of Apple Inc. Google Play and the Google Play Logo are trademarks of Google LLC.</p>
            </div>
        </footer>
    );
};

export default Footer;
