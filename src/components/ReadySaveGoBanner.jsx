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
        <div className="ready-save-go-wrapper" style={{ padding: '0 5%', maxWidth: '1440px', margin: '35px auto' }}>
            <div style={{
                background: '#3b7fba',
                borderRadius: '24px',
                padding: '20px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
                color: '#ffffff',
                boxShadow: '0 12px 35px rgba(59, 127, 186, 0.25)'
            }}>
                {/* Left Title */}
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.5px' }}>
                    Ready, Save, <span style={{ color: '#93c5fd' }}>GO!</span>
                </div>

                {/* Center White Floating Pill Container */}
                <div style={{
                    background: '#ffffff',
                    borderRadius: '100px',
                    padding: '8px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    color: '#0f172a',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {/* Discount Part */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div>
                            <div style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>SAVE</div>
                            <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>{formatPrice(150)}</div>
                            <div style={{ fontSize: '0.58rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1 }}>PER PERSON</div>
                        </div>
                        <div style={{
                            background: '#3b7fba',
                            color: '#ffffff',
                            padding: '6px 10px',
                            borderRadius: '8px',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}>
                            <i className="fa-solid fa-tag"></i> 1
                        </div>
                    </div>

                    {/* Vertical Line */}
                    <div style={{ height: '36px', width: '1px', background: '#e2e8f0' }}></div>

                    {/* Timer Part */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {/* Days */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{timeLeft.days}</div>
                            <div style={{ fontSize: '0.58rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', marginTop: '2px' }}>DAYS</div>
                        </div>
                        <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#3b7fba', marginTop: '-10px' }}>:</span>

                        {/* Hours */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{timeLeft.hours}</div>
                            <div style={{ fontSize: '0.58rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', marginTop: '2px' }}>HOURS</div>
                        </div>
                        <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#3b7fba', marginTop: '-10px' }}>:</span>

                        {/* Mins */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{timeLeft.mins}</div>
                            <div style={{ fontSize: '0.58rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', marginTop: '2px' }}>MINS</div>
                        </div>
                        <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#3b7fba', marginTop: '-10px' }}>:</span>

                        {/* Secs */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{timeLeft.secs}</div>
                            <div style={{ fontSize: '0.58rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', marginTop: '2px' }}>SECS</div>
                        </div>
                    </div>
                </div>

                {/* Right Text */}
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff' }}>Drop 1 Ends 15 Dec</div>
                    <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, marginTop: '2px' }}>T&Cs apply.*</div>
                </div>
            </div>
        </div>
    );
};

export default ReadySaveGoBanner;
