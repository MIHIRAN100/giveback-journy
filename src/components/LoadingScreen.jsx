import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

let isFirstLoad = true;

const LoadingScreen = () => {
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Reset loader visibility on route change
        setVisible(true);
        setFadeOut(false);

        // Slightly longer duration for initial load, snappy for page navigation
        const duration = isFirstLoad ? 1100 : 500;

        const timer = setTimeout(() => {
            setFadeOut(true);
            isFirstLoad = false;
            setTimeout(() => setVisible(false), 350);
        }, duration);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (!visible) return null;

    return (
        <div className={`skeleton-loading-overlay ${fadeOut ? 'fade-out' : ''}`}>
            <div className="skeleton-content-wrapper">
                {/* Title skeleton bar */}
                <div className="skeleton-bone skeleton-header-title"></div>

                {/* Filter pills row */}
                <div className="skeleton-pills-container">
                    <div className="skeleton-bone skeleton-pill-chip"></div>
                    <div className="skeleton-bone skeleton-pill-chip"></div>
                    <div className="skeleton-bone skeleton-pill-chip"></div>
                    <div className="skeleton-bone skeleton-pill-chip"></div>
                    <div className="skeleton-bone skeleton-pill-chip"></div>
                    <div className="skeleton-bone skeleton-pill-chip"></div>
                </div>

                {/* Primary cards grid: 3 full cards + 1 partial card */}
                <div className="skeleton-cards-container">
                    <div className="skeleton-bone skeleton-card-box"></div>
                    <div className="skeleton-bone skeleton-card-box"></div>
                    <div className="skeleton-bone skeleton-card-box"></div>
                    <div className="skeleton-bone skeleton-card-box skeleton-card-partial"></div>
                </div>

                {/* Secondary row for taller screens */}
                <div className="skeleton-secondary-section">
                    <div className="skeleton-bone skeleton-sub-title"></div>
                    <div className="skeleton-secondary-grid">
                        <div className="skeleton-bone skeleton-secondary-card"></div>
                        <div className="skeleton-bone skeleton-secondary-card"></div>
                        <div className="skeleton-bone skeleton-secondary-card"></div>
                        <div className="skeleton-bone skeleton-secondary-card skeleton-card-partial"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
