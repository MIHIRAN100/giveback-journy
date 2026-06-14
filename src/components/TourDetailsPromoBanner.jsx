import React from 'react';

const TourDetailsPromoBanner = () => {
    return (
        <div style={{
            maxWidth: '1300px',
            margin: '20px auto 0 auto',
            padding: '0 5%',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <div style={{
                background: 'linear-gradient(135deg, #121212 0%, #1c1c1c 100%)', // Sleek dark mode gradient
                border: '1px solid rgba(27, 163, 82, 0.22)', // Subtle green border
                borderRadius: '12px',
                padding: '12px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white',
                fontSize: '0.92rem',
                fontWeight: 600,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                flexWrap: 'wrap',
                gap: '12px',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }} className="tour-promo-banner-inner">
                <div style={{ 
                    flex: 1, 
                    textAlign: 'center',
                    fontSize: '0.95rem',
                    letterSpacing: '0.3px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                }}>
                    <span style={{ 
                        color: '#1ba352', // var(--primary-green)
                        textTransform: 'uppercase', 
                        fontWeight: 900, 
                        fontSize: '0.75rem',
                        letterSpacing: '1.5px',
                        background: 'rgba(27, 163, 82, 0.12)',
                        padding: '3px 10px',
                        borderRadius: '50px',
                        border: '1px solid rgba(27, 163, 82, 0.2)'
                    }}>Flash Sale</span>
                    <span>Up to 20% off selected trips</span>
                </div>
                
                <div style={{
                    background: 'rgba(27, 163, 82, 0.1)', // Translucent green badge
                    border: '1px solid rgba(27, 163, 82, 0.25)',
                    color: '#4ade80', // Glowing green text
                    padding: '6px 14px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.2px'
                }}>
                    <i className="bi bi-stopwatch-fill" style={{ fontSize: '0.95rem' }}></i>
                    <span>Ends 4:29am 16 Aug 2026</span>
                </div>
            </div>
        </div>
    );
};

export default TourDetailsPromoBanner;
