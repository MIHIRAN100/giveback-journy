import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SpotifyAdCard = ({ margin = '0' }) => {
    const navigate = useNavigate();
    
    // Countdown state (mock)
    const [timeLeft, setTimeLeft] = useState({
        days: '05', hours: '06', mins: '19', secs: '29'
    });

    useEffect(() => {
        const timer = setInterval(() => {
            let s = parseInt(timeLeft.secs) - 1;
            let m = parseInt(timeLeft.mins);
            let h = parseInt(timeLeft.hours);
            let d = parseInt(timeLeft.days);
            
            if (s < 0) { s = 59; m -= 1; }
            if (m < 0) { m = 59; h -= 1; }
            if (h < 0) { h = 23; d -= 1; }
            
            setTimeLeft({
                days: d.toString().padStart(2, '0'),
                hours: h.toString().padStart(2, '0'),
                mins: m.toString().padStart(2, '0'),
                secs: s.toString().padStart(2, '0')
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <div className="qantas-promo-banner" style={{
            margin: margin,
            background: 'linear-gradient(90deg, #bc9355 0%, #faecd7 50%, #bc9355 100%)', // Gold gradient
            borderRadius: '12px',
            padding: '45px 30px',
            minHeight: '200px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '30px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: 'Inter, Arial, sans-serif'
        }}>
            {/* Left section: Points and Title */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '25px', zIndex: 1 }}>
                
                {/* $200 text */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px', color: '#000' }}>
                        $2<div style={{ 
                            width: 'clamp(40px, 7vw, 60px)', 
                            height: 'clamp(40px, 7vw, 60px)', 
                            background: '#1ba352', 
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 4px',
                            boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), 2px 2px 5px rgba(0,0,0,0.2)'
                        }}>
                            <i className="fa-solid fa-hand-holding-heart" style={{ color: '#fff', fontSize: '1.4rem' }}></i>
                        </div>0
                    </div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#111', marginTop: '8px', letterSpacing: '0.5px' }}>
                        Book Now & Save with this Discount
                    </span>
                </div>

                {/* Vertical Divider (Hidden on small screens) */}
                <div className="d-none d-md-block" style={{ width: '2px', height: '60px', background: '#333', opacity: 0.8 }}></div>

                {/* Ends Text */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Ends 31 Aug
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#444', fontWeight: 500, marginTop: '4px' }}>
                        T&Cs & exclusions apply.*
                    </span>
                </div>
            </div>

            {/* Right section: Pill Timer */}
            <div style={{ 
                display: 'flex', 
                borderRadius: '500px', 
                overflow: 'visible',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                position: 'relative',
                zIndex: 1,
                border: '2px solid #fff',
                marginLeft: 'auto'
            }}>
                {/* PLUS badge */}
                <div style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '50px',
                    background: '#1ba352', 
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    fontWeight: 900,
                    fontSize: '0.85rem',
                    transform: 'rotate(-5deg)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    zIndex: 2,
                    border: '2px solid #fff'
                }}>
                    BONUS
                </div>

                {/* Black Half */}
                <div style={{ 
                    background: '#000', 
                    padding: '16px 28px', 
                    borderTopLeftRadius: '500px', 
                    borderBottomLeftRadius: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        Save <span style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-1px', color: '#1ba352' }}>$50</span> extra.
                    </div>
                    <div style={{ color: '#1ba352', fontSize: '0.9rem', fontWeight: 800, marginTop: '2px' }}>
                        Ends 11 Aug.
                    </div>
                </div>

                {/* White Half */}
                <div style={{ 
                    background: '#fff', 
                    padding: '16px 28px', 
                    borderTopRightRadius: '500px', 
                    borderBottomRightRadius: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px'
                }}>
                    <i className="bi bi-stopwatch-fill" style={{ fontSize: '2.2rem', color: '#1ba352' }}></i>
                    
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                        {Object.entries(timeLeft).map(([label, value], i, arr) => (
                            <React.Fragment key={label}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#000', lineHeight: 1 }}>{value}</span>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#666', textTransform: 'uppercase', marginTop: '6px' }}>{label}</span>
                                </div>
                                {i < arr.length - 1 && <span style={{ color: '#1ba352', fontWeight: 900, fontSize: '1.4rem', margin: '0 -4px', alignSelf: 'flex-start' }}>.</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Floating green coins (decorative) */}
            <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '80px',
                height: '80px',
                background: 'radial-gradient(circle at 30% 30%, #2bc36f, #1ba352)',
                borderRadius: '50%',
                boxShadow: 'inset -3px -3px 8px rgba(0,0,0,0.3), 3px 5px 15px rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '0.6rem',
                fontWeight: 'bold',
                textAlign: 'center',
                transform: 'rotate(-15deg)',
                zIndex: 0
            }}>
                <i className="fa-solid fa-leaf" style={{ fontSize: '1.8rem', transform: 'rotate(-25deg)' }}></i>
            </div>
            
            <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '50px',
                width: '50px',
                height: '50px',
                background: 'radial-gradient(circle at 30% 30%, #2bc36f, #1ba352)',
                borderRadius: '50%',
                boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.3), 2px 4px 10px rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                transform: 'rotate(25deg)',
                zIndex: 0
            }}>
                <i className="fa-solid fa-leaf" style={{ fontSize: '1.1rem', transform: 'rotate(-25deg)' }}></i>
            </div>
        </div>
    );
};

export default SpotifyAdCard;
