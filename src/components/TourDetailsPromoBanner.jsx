import React, { useState, useEffect } from 'react';

const TourDetailsPromoBanner = () => {
    // Target date: August 16, 2026 at 4:29:00 AM
    const targetDate = new Date('2026-08-16T04:29:00').getTime();
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                setTimeLeft('Ended');
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            let timeString = '';
            if (days > 0) timeString += `${days}d `;
            timeString += `${hours.toString().padStart(2, '0')}h `;
            timeString += `${minutes.toString().padStart(2, '0')}m `;
            timeString += `${seconds.toString().padStart(2, '0')}s`;

            setTimeLeft(timeString);
        };

        // Run initially
        updateTimer();
        const intervalId = setInterval(updateTimer, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div style={{
            maxWidth: '1300px',
            margin: '20px auto 0 auto',
            padding: '0 5%',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <div style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', // Sleek dark slate blue
                border: '1px solid rgba(59, 127, 186, 0.25)', // Subtle blue border
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
                        color: '#3b7fba', // var(--accent-gold) / Website blue
                        textTransform: 'uppercase', 
                        fontWeight: 900, 
                        fontSize: '0.75rem',
                        letterSpacing: '1.5px',
                        background: 'rgba(59, 127, 186, 0.15)',
                        padding: '3px 10px',
                        borderRadius: '50px',
                        border: '1px solid rgba(59, 127, 186, 0.3)'
                    }}>Flash Sale</span>
                    <span>Up to 20% off selected trips</span>
                </div>
                
                <div style={{
                    background: '#3b7fba', // Website blue background for the timeout badge
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: 'white', 
                    padding: '6px 14px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.2px',
                    boxShadow: '0 4px 12px rgba(59, 127, 186, 0.3)'
                }}>
                    <i className="bi bi-stopwatch-fill" style={{ fontSize: '0.95rem' }}></i>
                    <span>Ends in: {timeLeft}</span>
                </div>
            </div>
        </div>
    );
};

export default TourDetailsPromoBanner;
