import React from 'react';
import { Link } from 'react-router-dom';

const AdBanner = () => {
    return (
        <div className="banner-wrapper">
            <div className="banner">
                {/* Left side: Trust stat & promo CTA */}
                <div className="banner-left-group">
                    <div className="banner-stat">
                        <i className="fa-solid fa-circle-check"></i>
                        <span>1000+ travelers since 2019</span>
                    </div>
                    <Link to="/volunteer" className="banner-cta">
                        Trusted volunteer programs + flexible booking! Apply today <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.55rem', marginLeft: '5px' }}></i>
                    </Link>
                </div>

                {/* Right side: Phone, Email & Social Media aligned together */}
                <div className="banner-right-group">
                    <a href="tel:+94774944909" className="banner-item banner-phone">
                        <i className="fa-solid fa-phone" style={{ color: 'var(--primary-green)' }}></i>
                        <span>+94 77 494 4909</span>
                    </a>
                    <span className="banner-divider">|</span>
                    <a href="mailto:Hello@givebackjourney.com" className="banner-item banner-email">
                        <i className="fa-solid fa-envelope" style={{ color: 'var(--primary-green)' }}></i>
                        <span>Hello@givebackjourney.com</span>
                    </a>
                    <span className="banner-divider">|</span>
                    <div className="banner-social">
                        <a href="https://wa.me/94774944909" target="_blank" rel="noreferrer" title="WhatsApp">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="https://www.instagram.com/giveback_journey?igsh=b3J1ZzJkN2t5aG1l" target="_blank" rel="noreferrer" title="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdBanner;



