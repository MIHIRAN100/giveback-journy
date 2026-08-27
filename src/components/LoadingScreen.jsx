import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/gb_round_logo.png';

let isFirstLoad = true;

const LoadingScreen = () => {
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Reset loader visibility on route change
        setVisible(true);
        setFadeOut(false);

        // Preload sound
        const sound = new Audio('https://assets.mixkit.co/active_storage/sfx/2560/2560-preview.mp3');
        sound.volume = 0.3;

        // Shorter transition (1.2s) for tab changes, normal (3.5s) for initial entrance
        const duration = isFirstLoad ? 3500 : 1200;

        const timer = setTimeout(() => {
            setFadeOut(true);
            
            // Only play audio on first entrance load
            if (isFirstLoad) {
                sound.play().catch(err => console.log("Audio playback blocked:", err));
                isFirstLoad = false;
            }
            
            setTimeout(() => setVisible(false), 500); 
        }, duration); 

        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (!visible) return null;

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loader-content" style={{ gap: '20px' }}>
                {/* Circular logo container with rotating spinner ring */}
                <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Spinning loader ring around the circle */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: '-4px',
                            left: '-4px',
                            right: '-4px',
                            bottom: '-4px',
                            borderRadius: '50%',
                            border: '3.5px solid rgba(59, 127, 186, 0.12)',
                            borderTopColor: '#3b7fba',
                            borderRightColor: '#3b7fba',
                            pointerEvents: 'none',
                            zIndex: 1
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                    
                    {/* White circular logo container */}
                    <motion.div
                        style={{
                            width: '90px',
                            height: '90px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            boxShadow: '0 8px 32px rgba(59, 127, 186, 0.12)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2,
                            overflow: 'hidden',
                            border: '1px solid rgba(59, 127, 186, 0.1)'
                        }}
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <img 
                            src={logo} 
                            alt="Logo" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                        />
                    </motion.div>
                </div>

                {/* Elegant Brand Name */}
                <span 
                    className="loader-brand"
                    style={{
                        fontFamily: "'Outfit', 'Inter', sans-serif",
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        color: '#111',
                        letterSpacing: '5px',
                        display: 'block',
                        textAlign: 'center',
                        marginTop: '5px'
                    }}
                >
                    Giveback Journey
                </span>
            </div>
        </div>
    );
};

export default LoadingScreen;
