import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/brand_logo.jpg';

const Footer = () => {
    return (
        <footer className="brand-footer">
            <div className="footer-grid">
                {/* Column 1: Brand */}
                <div className="footer-column">
                    <Link to="/" className="logo-area" style={{marginBottom: '25px', display: 'inline-flex'}}>
                        <div className="logo-image-container">
                            <img src={logo} alt="Giveback Journey Logo" className="logo-image" />
                        </div>
                        <span className="logo-text" style={{color: 'white'}}>Giveback Journey<span className="logo-dot">.</span></span>
                    </Link>
                    <p style={{color: 'rgba(255,255,255,0.6)', lineHeight: 1.8}}>
                        Sri Lanka's leading boutique travel agency. We reveal the island's soul through curated heritage, wilderness, and luxury experiences.
                    </p>
                    <div className="footer-social" style={{display: 'flex', gap: '20px', marginTop: '30px', fontSize: '1.2rem'}}>
                        <a href="#" className="footer-link"><i className="fa-brands fa-tiktok"></i></a>
                        <a href="#" className="footer-link"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="#" className="footer-link"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#" className="footer-link"><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                </div>

                {/* Column 2: Discover */}
                <div className="footer-column">
                    <h4>Discover</h4>
                    <ul className="footer-links">
                        <li><Link to="/" className="footer-link">The Introduction</Link></li>
                        <li><Link to="/packages" className="footer-link">Tour Packages</Link></li>
                        <li><Link to="/sri-lanka" className="footer-link">Island Heritage</Link></li>
                        <li><Link to="/contact" className="footer-link">Talk to an Expert</Link></li>
                        <li><Link to="/stays" className="footer-link">Stays</Link></li>
                    </ul>
                </div>

                {/* Column 3: Regional Hubs */}
                <div className="footer-column">
                    <h4>Regional Hubs</h4>
                    <ul className="footer-links">
                        <li><a href="#" className="footer-link">Colombo Metro</a></li>
                        <li><a href="#" className="footer-link">Cultural Triangle</a></li>
                        <li><a href="#" className="footer-link">Hill Country</a></li>
                        <li><a href="#" className="footer-link">Southern Coast</a></li>
                        <li><a href="#" className="footer-link">Northern Jaffna</a></li>
                    </ul>
                </div>

                {/* Column 4: Community / Newsletter */}
                <div className="footer-column">
                    <h4>Stay Inspired</h4>
                    <div className="newsletter-box">
                        <p style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)'}}>Join our curated mailing list for secret destinations and seasonal island updates.</p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input type="email" className="newsletter-input" placeholder="your@email.com" />
                            <button className="btn-modern btn-solid-green" style={{width: '100%', padding: '12px'}}>Join List</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div>© 2024 Giveback Journey. Tour Agency Sri Lanka. All rights reserved.</div>
                <div className="footer-bottom-links" style={{display: 'flex', gap: '30px'}}>
                    <Link to="/privacy-policy" className="footer-link" style={{fontSize: '0.75rem'}}>Privacy Policy</Link>
                    <Link to="/terms-and-conditions" className="footer-link" style={{fontSize: '0.75rem'}}>Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
