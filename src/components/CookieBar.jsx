import React, { useState, useEffect } from 'react';

const CookieBar = ({ onVisibilityChange }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookies_accepted');
        if (!accepted) {
            setTimeout(() => {
                setVisible(true);
                if (onVisibilityChange) onVisibilityChange(true);
            }, 1500);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookies_accepted', 'true');
        setVisible(false);
        if (onVisibilityChange) onVisibilityChange(false);
    };

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 3000,
            background: 'var(--pitch-black)',
            color: 'white',
            padding: '20px 5%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '30px',
            boxShadow: '0 -10px 40px rgba(0,0,0,0.2)',
            animation: 'slideUp 0.5s ease'
        }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px', flex: 1}}>
                <i className="fa-solid fa-cookie-bite" style={{fontSize: '1.5rem', color: 'var(--primary-green)'}}></i>
                <p style={{fontSize: '0.85rem', opacity: 0.8, margin: 0, lineHeight: 1.5}}>
                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                </p>
            </div>
            <div style={{display: 'flex', gap: '12px', flexShrink: 0}}>
                <button onClick={handleAccept} className="btn-modern btn-solid-green" style={{padding: '10px 28px', fontSize: '0.8rem'}}>
                    Accept
                </button>
                <button onClick={handleAccept} className="btn-modern btn-ghost" style={{padding: '10px 20px', fontSize: '0.8rem', color: 'white', borderColor: 'rgba(255,255,255,0.2)'}}>
                    Decline
                </button>
            </div>
        </div>
    );
};

export default CookieBar;
