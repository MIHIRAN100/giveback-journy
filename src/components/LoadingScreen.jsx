import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Preload sound
        const sound = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
        sound.volume = 0.3;

        const timer = setTimeout(() => {
            setFadeOut(true);
            
            // Try to play sound (may be blocked by browser until first interaction)
            sound.play().catch(err => console.log("Audio playback blocked:", err));
            
            setTimeout(() => setVisible(false), 800); 
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <div className="loader-progress">
                    <div className="loader-bar"></div>
                </div>
                <span className="loader-text">Giveback journny</span>
            </div>
        </div>
    );
};

export default LoadingScreen;
