import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/brand_logo.png';
import { useCurrency } from '../context/CurrencyContext';

const Footer = () => {
    const { currency, setCurrency, currencies } = useCurrency();
    return (
        <footer className="brand-footer">
            {/* Curved/Wavy top border overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                overflow: 'hidden',
                lineHeight: 0,
                transform: 'translateY(-99%)',
                zIndex: 1,
                pointerEvents: 'none'
            }}>
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    style={{
                        position: 'relative',
                        display: 'block',
                        width: 'calc(100% + 1.3px)',
                        height: 'clamp(35px, 5vw, 65px)'
                    }}
                >
                    <path
                        d="M0,90 Q700,-20 1200,60 L1200,120 L0,120 Z"
                        fill="#1a2332"
                    ></path>
                </svg>
            </div>
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
                        <p style={{marginBottom: '8px'}}><i className="fa-solid fa-location-dot" style={{marginRight: '10px', color: 'var(--primary-green)'}}></i> Sirimadura, Viharagoda, Wathugedara, Ambalangoda, Sri Lanka</p>
                        <p style={{marginBottom: '8px'}}><i className="fa-solid fa-phone" style={{marginRight: '10px', color: 'var(--primary-green)'}}></i> +94 77 494 4909</p>
                        <p style={{marginBottom: '20px'}}><i className="fa-solid fa-envelope" style={{marginRight: '10px', color: 'var(--primary-green)'}}></i> Hello@givebackjourney.com</p>
                    </div>
                    <div className="footer-social" style={{display: 'flex', gap: '15px', fontSize: '1.4rem'}}>
                        <a href="https://wa.me/94774944909" target="_blank" rel="noreferrer" className="footer-link"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/journeygiveback?igsh=a21oZWZreHIzdTkw" target="_blank" rel="noreferrer" className="footer-link"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="footer-link"><i className="fa-brands fa-facebook-f"></i></a>
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

        </footer>
    );
};

export default Footer;
