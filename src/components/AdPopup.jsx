import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import adImg from '../assets/sebastian-latorre-VqPOeYqzK-M-unsplash.jpg';

const AdPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasClosed = sessionStorage.getItem('adPopupClosed');
            if (!hasClosed) {
                setIsVisible(true);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        sessionStorage.setItem('adPopupClosed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="ad-popup-overlay" style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 10000,
            padding: '0',
            animation: 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'none' // Allow clicking through the "overlay" area
        }}>
            <div className="ad-popup-card" style={{
                background: 'white',
                maxWidth: '480px',
                width: 'calc(100vw - 60px)',
                borderRadius: '25px',
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                position: 'relative',
                boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                pointerEvents: 'auto', // Re-enable pointer events for the card
                border: '1px solid rgba(0,0,0,0.05)'
            }}>
                {/* Image Side */}
                <div style={{ position: 'relative' }}>
                    <img src={adImg} alt="Top Tours" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Content Side */}
                <div style={{ padding: '25px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                    <button 
                        onClick={closePopup}
                        style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: '#f8f9fa',
                            border: 'none',
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#111',
                            transition: 'all 0.3s ease',
                            zIndex: 10,
                            fontSize: '0.7rem'
                        }}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Top Pick</span>
                    </div>

                    <h2 style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '8px', color: '#111', lineHeight: 1.2 }}>
                        Monthly Highlights <span style={{ color: 'var(--primary-green)' }}>Unveiled.</span>
                    </h2>
                    
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5, marginBottom: '15px' }}>
                        Discover our handpicked top tours and packages for this month.
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Link to="/packages" onClick={closePopup} style={{ 
                            background: '#111',
                            color: 'white',
                            padding: '10px 20px', 
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            textDecoration: 'none',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease'
                        }}>
                            Explore Now
                        </Link>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa' }}>4 days left</span>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes slideInRight { 
                    from { opacity: 0; transform: translateX(100px) translateY(20px); } 
                    to { opacity: 1; transform: translateX(0) translateY(0); } 
                }
                @media (max-width: 600px) {
                    .ad-popup-overlay {
                        bottom: 100px !important; /* Above mobile navigation */
                        right: 20px !important;
                        left: 20px !important;
                        width: auto !important;
                    }
                    .ad-popup-card {
                        width: 100% !important;
                        grid-template-columns: 100px 1fr !important;
                    }
                    .ad-popup-card h2 { font-size: 1.1rem !important; }
                    .ad-popup-card p { display: none; } /* Hide text on small mobile to save space */
                }
            `}} />
        </div>
    );
};

export default AdPopup;
