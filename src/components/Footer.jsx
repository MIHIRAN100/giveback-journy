import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/brand_logo.png';
import { useCurrency } from '../context/CurrencyContext';

const Footer = () => {
    const { currency, setCurrency, currencies } = useCurrency();
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (newsletterEmail) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setNewsletterEmail('');
            }, 4000);
        }
    };

    return (
        <footer className="brand-footer">
            {/* Top Wavy Curve Overlay */}
            <div className="footer-wave-top">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,90 Q700,-20 1200,60 L1200,120 L0,120 Z" fill="#111827"></path>
                </svg>
            </div>

            {/* Newsletter Header Banner Strip */}
            <div className="footer-newsletter-strip">
                <div className="footer-newsletter-content">
                    <div className="footer-newsletter-text">
                        <i className="fa-solid fa-paper-plane" style={{ color: 'var(--primary-green)', fontSize: '1.4rem' }}></i>
                        <div>
                            <h4>Stay Connected with Sri Lanka</h4>
                            <p>Receive volunteer stories, exclusive tour deals, and Sri Lanka travel tips straight to your inbox.</p>
                        </div>
                    </div>

                    <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
                        {subscribed ? (
                            <div className="footer-subscribe-success">
                                <i className="fa-solid fa-circle-check"></i>
                                <span>Thank you for subscribing!</span>
                            </div>
                        ) : (
                            <>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address..." 
                                    required 
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    className="footer-subscribe-input"
                                />
                                <button type="submit" className="footer-subscribe-btn">
                                    <span>Subscribe</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </div>

            {/* Main Footer Grid */}
            <div className="footer-grid">
                {/* Column 1: Brand & Contact Info */}
                <div className="footer-column brand-col">
                    <Link to="/" className="logo-area" style={{ marginBottom: '20px', display: 'inline-flex', color: 'var(--white)' }}>
                        <div className="logo-image-container">
                            <img src={logo} alt="Giveback Journey Logo" className="logo-image" />
                        </div>
                        <span className="logo-text">Giveback Journey<span className="logo-dot">.</span></span>
                    </Link>
                    
                    <p className="footer-brand-desc">
                        Empowering local Sri Lankan communities through meaningful travel, ethical volunteering, and authentic cultural immersion.
                    </p>

                    <div className="footer-contact-list">
                        <div className="contact-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Sirimadura, Viharagoda, Wathugedara, Ambalangoda, Sri Lanka</span>
                        </div>
                        <div className="contact-item">
                            <i className="fa-solid fa-phone"></i>
                            <a href="tel:+94774944909">+94 77 494 4909</a>
                        </div>
                        <div className="contact-item">
                            <i className="fa-solid fa-envelope"></i>
                            <a href="mailto:Hello@givebackjourney.com">Hello@givebackjourney.com</a>
                        </div>
                    </div>

                    <div className="footer-social-bar">
                        <a href="https://wa.me/94774944909" target="_blank" rel="noreferrer" title="WhatsApp" className="social-icon-btn"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/giveback_journey?igsh=b3J1ZzJkN2t5aG1l" target="_blank" rel="noreferrer" title="Instagram" className="social-icon-btn"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/givebackjourney" target="_blank" rel="noreferrer" title="Facebook" className="social-icon-btn"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="mailto:Hello@givebackjourney.com" title="Email Us" className="social-icon-btn"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>

                {/* Column 2: Tour Packages */}
                <div className="footer-column">
                    <h4>Tour Packages</h4>
                    <ul className="footer-links">
                        <li><Link to="/packages" className="footer-link">All Tour Packages</Link></li>
                        <li><Link to="/package/1" className="footer-link">7-Day Essential Sri Lanka</Link></li>
                        <li><Link to="/package/2" className="footer-link">Southern Sun & Beach Escape</Link></li>
                        <li><Link to="/package/3" className="footer-link">Highlands & Southern Coast</Link></li>
                        <li><Link to="/package/4" className="footer-link">5-Day Mist & Mountains</Link></li>
                        <li><Link to="/package/6" className="footer-link">3-Day Galle Fort Escape</Link></li>
                        <li><Link to="/contact" className="footer-link highlight">Request Custom Plan →</Link></li>
                    </ul>
                </div>

                {/* Column 3: Volunteer Programs */}
                <div className="footer-column">
                    <h4>Volunteering</h4>
                    <ul className="footer-links">
                        <li><Link to="/volunteer" className="footer-link">All Volunteer Programs</Link></li>
                        <li><Link to="/volunteer-program/sri-lanka-childcare" className="footer-link">Teaching & Childcare</Link></li>
                        <li><Link to="/volunteer-program/special-needs-support" className="footer-link">Special Needs Support</Link></li>
                        <li><Link to="/volunteer-program/village-school-renovation" className="footer-link">School Renovation</Link></li>
                        <li><Link to="/volunteer-program/medical-volunteer" className="footer-link">Medical Placement</Link></li>
                        <li><Link to="/volunteer-program/real-sri-lanka-experience" className="footer-link highlight">Breathe Sri Lanka (27-Day)</Link></li>
                    </ul>
                </div>

                {/* Column 4: Quick Links & Support */}
                <div className="footer-column">
                    <h4>Navigation</h4>
                    <ul className="footer-links">
                        <li><Link to="/" className="footer-link">Home Page</Link></li>
                        <li><Link to="/exclusive-journeys" className="footer-link">About Giveback Journey</Link></li>
                        <li><Link to="/compare" className="footer-link">Compare Tours</Link></li>
                        <li><Link to="/#feedback-shorts" className="footer-link">Traveler Video Shorts</Link></li>
                        <li><Link to="/contact" className="footer-link">Talk to an Expert</Link></li>
                        <li><Link to="/contact" className="footer-link">Help & FAQs</Link></li>
                    </ul>
                </div>

                {/* Column 5: Trust & Peace of Mind */}
                <div className="footer-column trust-col">
                    <h4>Trust & Peace of Mind</h4>
                    <p className="trust-intro">Registered Sri Lankan travel organization committed to safety, transparent pricing, and 100% authentic impact.</p>

                    <div className="footer-trust-cards">
                        <div className="trust-card">
                            <i className="fa-solid fa-shield-heart"></i>
                            <div>
                                <strong>24/7 Support</strong>
                                <span>In-Country Emergency Support</span>
                            </div>
                        </div>
                        <div className="trust-card">
                            <i className="fa-solid fa-leaf"></i>
                            <div>
                                <strong>Ethical Travel</strong>
                                <span>Direct Community Impact</span>
                            </div>
                        </div>
                        <div className="trust-card">
                            <i className="fa-solid fa-lock"></i>
                            <div>
                                <strong>Secure Booking</strong>
                                <span>256-Bit SSL Protection</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <span>© {new Date().getFullYear()} Giveback Journey (Pvt) Ltd. All rights reserved.</span>
                    <span className="sl-badge"><i className="fa-solid fa-earth-asia" style={{ color: 'var(--primary-green)', marginRight: '4px' }}></i> Sri Lanka</span>
                </div>

                <div className="footer-bottom-links">
                    <Link to="/privacy-policy" className="footer-link-sub">Privacy Policy</Link>
                    <span className="sep">•</span>
                    <Link to="/terms-and-conditions" className="footer-link-sub">Terms & Conditions</Link>
                    <span className="sep">•</span>
                    <Link to="/cookie-policy" className="footer-link-sub">Cookie Policy</Link>
                    <span className="sep">•</span>
                    <Link to="/nda" className="footer-link-sub">NDA</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
