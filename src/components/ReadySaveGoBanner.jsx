import React, { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';

const ReadySaveGoBanner = () => {
    const { formatPrice } = useCurrency();
    const [timeLeft, setTimeLeft] = useState({
        days: 137,
        hours: 9,
        mins: 39,
        secs: 33
    });

    useEffect(() => {
        // Set target date ~137 days from now (Dec 15 promo)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 137);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate.getTime() - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, mins, secs });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="ready-save-go-wrapper" style={{ padding: '0 5%', maxWidth: '1440px', margin: '25px auto 20px auto' }}>
            <div style={{
                background: '#3b7fba',
                borderRadius: '16px',
                padding: '12px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px',
                color: '#ffffff',
                boxShadow: '0 8px 25px rgba(59, 127, 186, 0.2)'
            }}>
                {/* Left Title */}
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.3px' }}>
                    Ready, Save, <span style={{ color: '#93c5fd' }}>GO!</span>
                </div>

                {/* Center White Floating Pill Container */}
                <div style={{
                    background: '#ffffff',
                    borderRadius: '100px',
                    padding: '5px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: '#0f172a',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {/* Discount Part */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div>
                            <div style={{ fontSize: '0.52rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>SAVE</div>
                            <div style={{ fontSize: '1rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>{formatPrice(150)}</div>
                            <div style={{ fontSize: '0.48rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1 }}>PER PERSON</div>
                        </div>
                        <div style={{
                            background: '#3b7fba',
                            color: '#ffffff',
                            padding: '4px 7px',
                            borderRadius: '6px',
                            fontSize: '0.62rem',
                            fontWeight: 800,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px'
                        }}>
                            <i className="fa-solid fa-tag"></i> 1
                        </div>
                    </div>

                    {/* Vertical Line */}
                    <div style={{ height: '28px', width: '1px', background: '#e2e8f0' }}></div>

                    {/* Timer Part */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {/* Days */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{timeLeft.days}</div>
                            <div style={{ fontSize: '0.48rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', marginTop: '1px' }}>DAYS</div>
                        </div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#3b7fba', marginTop: '-8px' }}>:</span>

                        {/* Hours */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{timeLeft.hours}</div>
                            <div style={{ fontSize: '0.48rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', marginTop: '1px' }}>HOURS</div>
                        </div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#3b7fba', marginTop: '-8px' }}>:</span>

                        {/* Mins */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{timeLeft.mins}</div>
                            <div style={{ fontSize: '0.48rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', marginTop: '1px' }}>MINS</div>
                        </div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#3b7fba', marginTop: '-8px' }}>:</span>

                        {/* Secs */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{timeLeft.secs}</div>
                            <div style={{ fontSize: '0.48rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', marginTop: '1px' }}>SECS</div>
                        </div>
                    </div>
                </div>

                {/* Right Text */}
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#ffffff' }}>Drop 1 Ends 15 Dec</div>
                    <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, marginTop: '1px' }}>T&Cs apply.*</div>
                </div>
            </div>
        </div>
    );
};

export default ReadySaveGoBanner;
