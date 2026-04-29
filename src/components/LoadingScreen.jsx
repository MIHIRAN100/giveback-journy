import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setVisible(false), 800); // Wait for fade animation
        }, 2000); // Minimum display time

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
