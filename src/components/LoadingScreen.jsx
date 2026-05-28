import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom designed high-fidelity SVGs with embedded framer-motion micro-animations
const GlobeIcon = () => (
    <motion.svg 
        width="42" 
        height="42" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#1DB954" 
        strokeWidth="1.75" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    >
        <circle cx="12" cy="12" r="10" strokeDasharray="3 3" opacity="0.3" />
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </motion.svg>
);

const PlaneIcon = () => (
    <motion.svg 
        width="42" 
        height="42" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#D4AF37" 
        strokeWidth="1.75" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        animate={{ y: [0, -3, 0], x: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
    >
        <motion.path 
            d="M3 21c3-3 7-2 10-5" 
            strokeDasharray="2 2" 
            opacity="0.5" 
            animate={{ strokeDashoffset: [0, -4] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
        />
        <path d="M17.8 19.2L16 11l3.5-3.5a1 1 0 0 0 0-1.4l-1.8-1.8a1 1 0 0 0-1.4 0L12.8 7.8l-8.2-1.8L3 7.6l6.8 3.2-3 3-2.2-.6-1.2 1.2 3.8 1.4 1.4 3.8 1.2-1.2-.6-2.2 3-3 3.2 6.8 1.6-1.6z" />
    </motion.svg>
);

const CompassIcon = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1DB954" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v2" opacity="0.5" />
        <path d="M12 20v2" opacity="0.5" />
        <path d="M2 12h2" opacity="0.5" />
        <path d="M20 12h2" opacity="0.5" />
        <motion.polygon 
            points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"
            style={{ originX: "12px", originY: "12px" }}
            animate={{ rotate: [0, 60, -20, 220, 180, 360] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            fill="rgba(29, 185, 84, 0.1)"
        />
    </svg>
);

const SuitcaseIcon = () => (
    <motion.svg 
        width="42" 
        height="42" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#D4AF37" 
        strokeWidth="1.75" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        animate={{ y: [0, -4, 0], rotate: [0, -3, 3, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
    >
        <rect x="3" y="7" width="18" height="13" rx="2.5" />
        <path d="M16 7V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        <line x1="8" y1="12" x2="8" y2="16" opacity="0.7" />
        <line x1="12" y1="12" x2="12" y2="16" opacity="0.7" />
        <line x1="16" y1="12" x2="16" y2="16" opacity="0.7" />
    </motion.svg>
);

const PinIcon = () => (
    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#1DB954" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <motion.path 
            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" 
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.0, ease: "easeInOut" }}
        />
        <motion.circle 
            cx="12" 
            cy="10" 
            r="3" 
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.0, ease: "easeInOut" }}
        />
        <motion.ellipse 
            cx="12" 
            cy="22" 
            rx="6" 
            ry="1.5"
            stroke="#1DB954"
            strokeWidth="1"
            opacity="0.5"
            animate={{ scale: [0.8, 1.6], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 2.0, ease: "easeOut" }}
            style={{ originX: "12px", originY: "22px" }}
        />
    </svg>
);

const items = [
    { icon: <GlobeIcon />, text: "Discovering beautiful destinations..." },
    { icon: <PlaneIcon />, text: "Preparing for takeoff..." },
    { icon: <CompassIcon />, text: "Finding the perfect path..." },
    { icon: <SuitcaseIcon />, text: "Packing meaningful memories..." },
    { icon: <PinIcon />, text: "Arriving at your Giveback Journey..." }
];

const LoadingScreen = () => {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Preload sound
        const sound = new Audio('https://assets.mixkit.co/active_storage/sfx/2560/2560-preview.mp3');
        sound.volume = 0.3;

        // Transition through travel icons (approx 1000ms per step)
        const iconInterval = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev < items.length - 1) {
                    return prev + 1;
                }
                return prev; // Hold on final PinIcon
            });
        }, 1000);

        // Keep loader visible for 5.5s total before starting fade out
        const timer = setTimeout(() => {
            setFadeOut(true);
            
            // Try to play sound (may be blocked by browser until first interaction)
            sound.play().catch(err => console.log("Audio playback blocked:", err));
            
            setTimeout(() => setVisible(false), 800); 
        }, 5500); 

        return () => {
            clearInterval(iconInterval);
            clearTimeout(timer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loader-content">
                {/* Glossy ring container for rotating icons */}
                <div className="loader-icon-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            {items[currentIndex].icon}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Constant Brand Name */}
                <span className="loader-brand">Giveback Journey</span>

                {/* Progress bar animating dynamically */}
                <div className="loader-progress">
                    <motion.div 
                        className="loader-bar"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5.5, ease: "linear" }}
                    />
                </div>

                {/* Synchronized status text */}
                <div style={{ height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentIndex}
                            className="loader-text"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 0.7, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            {items[currentIndex].text}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
