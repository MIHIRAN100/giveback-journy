import React, { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';

const TourDetailsPromoBanner = () => {
    const { formatPrice } = useCurrency();
    // Target date: August 16, 2026 at 4:29:00 AM
    const targetDate = new Date('2026-08-16T04:29:00').getTime();
    const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00' });

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                setTimeLeft({ days: '00', hours: '00', minutes: '00' });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            setTimeLeft({
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0')
            });
        };

        // Run initially
        updateTimer();
        const intervalId = setInterval(updateTimer, 60000); // Update every minute to conserve performance

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
                background: 'linear-gradient(90deg, #0c3a21 0%, #1ba352 50%, #0d9488 100%)', // Custom branding green-teal gradient
                border: '1px solid rgba(27, 163, 82, 0.25)', 
                borderRadius: '16px',
                padding: '10px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white',
                boxShadow: '0 8px 32px rgba(27, 163, 82, 0.1)',
                flexWrap: 'wrap',
                gap: '16px',
                fontFamily: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
            }} className="tour-promo-banner-inner">
                
                {/* Left Text Callout */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
                        Ready, Save, <span style={{ color: 'var(--accent-gold)', fontWeight: 900 }}>GO!</span>
                    </span>
                </div>

                {/* Central White Flash Card */}
                <div style={{
                    background: '#ffffff',
                    borderRadius: '10px',
                    padding: '6px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    color: '#1d1d1f',
                    flexWrap: 'wrap'
                }}>
                    {/* Discount Value */}
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#86868b' }}>Save</span>
                        <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1d1d1f', letterSpacing: '-1px' }}>
                            {formatPrice(150)}
                        </span>
                        <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#86868b', textTransform: 'uppercase', lineHeight: 1.1 }}>
                            Per<br/>Person
                        </span>
                    </div>

                    {/* Green Tag Badge */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{
                            background: 'var(--primary-green)',
                            color: 'white',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontWeight: 900,
                            fontSize: '0.82rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            boxShadow: '0 2px 8px rgba(27, 163, 82, 0.15)'
                        }}>
                            <i className="bi bi-tag-fill" style={{ fontSize: '0.85rem' }}></i>
                            1
                        </div>
                    </div>

                    {/* Thin Divider */}
                    <div style={{ width: '1px', height: '24px', background: '#e5e5ea' }}></div>

                    {/* Countdown Timer */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#1d1d1f', lineHeight: 1 }}>{timeLeft.days}</div>
                            <div style={{ fontSize: '0.55rem', fontWeight: 800, color: '#86868b', textTransform: 'uppercase', marginTop: '2px' }}>Days</div>
                        </div>
                        <span style={{ fontWeight: 900, color: 'var(--primary-green)', fontSize: '1.1rem' }}>:</span>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#1d1d1f', lineHeight: 1 }}>{timeLeft.hours}</div>
                            <div style={{ fontSize: '0.55rem', fontWeight: 800, color: '#86868b', textTransform: 'uppercase', marginTop: '2px' }}>Hours</div>
                        </div>
                        <span style={{ fontWeight: 900, color: 'var(--primary-green)', fontSize: '1.1rem' }}>:</span>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#1d1d1f', lineHeight: 1 }}>{timeLeft.minutes}</div>
                            <div style={{ fontSize: '0.55rem', fontWeight: 800, color: '#86868b', textTransform: 'uppercase', marginTop: '2px' }}>Mins</div>
                        </div>
                    </div>
                </div>

                {/* Right Terms Block */}
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.9)', textAlign: 'right', lineHeight: 1.3 }}>
                    <div style={{ fontWeight: 800 }}>Drop 1 Ends 14 Aug</div>
                    <div style={{ opacity: 0.8, fontSize: '0.65rem' }}>T&Cs apply.*</div>
                </div>

            </div>
        </div>
    );
};

export default TourDetailsPromoBanner;
