import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import budgetPromoImg from '../assets/rajiv-perera-b1jeQiJwYQI-unsplash.jpg';
import essentialSlide2 from '../assets/c9643fab2024fdb4eb79ec69b070e545.jpg';
import gallerySlide3 from '../assets/87fd5839db5c013598d55c1c41ee72d5.jpg';
import gallerySlide4 from '../assets/24b02737e3f0ac7e69426d35da060e5a.jpg';
import gallerySlide5 from '../assets/e00c2772910971201b0e48853af8577a.jpg';

const SpotifyAdCard = ({ margin = '0' }) => {
    const navigate = useNavigate();
    const [bgIndex, setBgIndex] = useState(0);
    const bgImages = [budgetPromoImg, essentialSlide2, gallerySlide3, gallerySlide4, gallerySlide5];

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prev) => (prev + 1) % bgImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="spotify-ad-card" style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '40px',
            color: 'white',
            background: '#121212',
            boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
            margin: margin,
            border: '1px solid rgba(255,255,255,0.1)',
            cursor: 'default'
        }}>
            {/* Absolute Background Image Layers for Cinematic Crossfade */}
            {bgImages.map((img, index) => (
                <div 
                    key={index}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 0.4), rgba(18, 18, 18, 0.95)), url(${img})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        opacity: index === bgIndex ? 1 : 0,
                        transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}
                />
            ))}

            {/* Accent Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(29,185,84,0.25) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <div style={{ zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
                    <div style={{ color: '#1DB954', fontSize: '1.6rem' }}>
                        <i className="fa-solid fa-hand-holding-heart"></i>
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 900, letterSpacing: '1px', textTransform: 'none', color: '#fff', opacity: 0.9 }}>Give Back Journey<span style={{color: '#1DB954'}}>.</span></span>
                </div>
                
                <h3 style={{ 
                    fontSize: 'clamp(2.2rem, 4vw, 3rem)', 
                    fontWeight: 900, 
                    lineHeight: 1, 
                    margin: 0, 
                    color: 'white',
                    letterSpacing: '-2px',
                    maxWidth: '400px'
                }}>
                    The Best <span style={{color: '#1DB954'}}>Budget</span> <br/>Tour Plan.
                </h3>
                <p style={{ color: '#e0e0e0', fontSize: '1.1rem', marginTop: '20px', fontWeight: 600, maxWidth: '350px', lineHeight: 1.4 }}>
                    No hidden fees. Just pure adventure.
                </p>
            </div>

            <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: '15px 20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                }}>
                    <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        background: '#1DB954', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        color: 'black'
                    }}>
                        <i className="fa-solid fa-hand-holding-heart"></i>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>
                        This journey can be combined with <span style={{color: '#1DB954'}}>Volunteering</span>
                    </p>
                </div>

                <div 
                    onClick={() => navigate('/volunteer')}
                    className="spotify-btn"
                    style={{ 
                        fontSize: '1rem', 
                        fontWeight: 900, 
                        textTransform: 'uppercase', 
                        letterSpacing: '1px',
                        background: '#1DB954',
                        color: 'black',
                        padding: '16px 40px',
                        borderRadius: '500px',
                        width: 'fit-content',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: '0 10px 20px rgba(29, 185, 84, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.backgroundColor = '#1ed760';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.backgroundColor = '#1DB954';
                    }}
                >
                    Explore More
                </div>
            </div>

            {/* Decorative Vinyl Record Style Circle */}
            <div style={{
                position: 'absolute',
                bottom: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.05)',
                zIndex: 0,
                pointerEvents: 'none'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.03)',
                }}></div>
            </div>
        </div>
    );
};

export default SpotifyAdCard;
