import React from 'react';
import { Link } from 'react-router-dom';
import hihiImg from '../assets/hihi.webp';
import elephantImg from '../assets/Elephants in Sri Lanka (1).jpg';

const VolunteerSection = () => {
    const [isMuted, setIsMuted] = React.useState(true);
    const iframeRef = React.useRef(null);

    const toggleMute = () => {
        const command = isMuted ? 'unMute' : 'mute';
        if (iframeRef.current) {
            iframeRef.current.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: command,
                args: []
            }), '*');
            setIsMuted(!isMuted);
        }
    };

    return (
        <section className="volunteer-preview-section">
            <div className="volunteer-preview-container">
                <div className="volunteer-bento-grid">
                    <div className="volunteer-grid-item tall-card video-card" style={{ overflow: 'hidden', position: 'relative', marginBottom: '20px' }}>
                        <iframe 
                            ref={iframeRef}
                            src="https://www.youtube.com/embed/KeoRicNwxtA?autoplay=1&mute=1&loop=1&playlist=KeoRicNwxtA&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1" 
                            title="Volunteering in Sri Lanka"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '100%',
                                height: '100%',
                                transform: 'translate(-50%, -50%) scale(1.5)',
                                pointerEvents: 'none'
                            }}
                        ></iframe>
                        <div className="volunteer-image-overlay" style={{ zIndex: 5 }}>
                            <div className="experience-badge">Impactful Journeys</div>
                            
                            {/* Bottom Controls Row */}
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                right: '0',
                                padding: '15px 20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                                zIndex: 10
                            }}>

                                {/* Control Buttons */}
                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                    {/* Fullscreen Button */}
                                    <button 
                                        onClick={() => {
                                            if (iframeRef.current) {
                                                if (iframeRef.current.requestFullscreen) {
                                                    iframeRef.current.requestFullscreen();
                                                } else if (iframeRef.current.webkitRequestFullscreen) {
                                                    iframeRef.current.webkitRequestFullscreen();
                                                }
                                            }
                                        }}
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
                                    >
                                        <i className="fa-solid fa-expand" style={{ fontSize: '1.4rem' }}></i>
                                    </button>

                                    {/* Mute/Unmute Toggle */}
                                    <button 
                                        onClick={toggleMute}
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
                                    >
                                        <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`} style={{ fontSize: '1.2rem' }}></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div className="volunteer-grid-item" style={{ 
                            flex: 1, 
                            aspectRatio: '16/9'
                        }}>
                            <img src={hihiImg} alt="Volunteer Impact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="volunteer-image-overlay" style={{ 
                                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '20px'
                            }}>
                                <span className="impact-tag">
                                    <i className="fa-solid fa-users"></i>
                                    Community
                                </span>
                            </div>
                        </div>
                        <div className="volunteer-grid-item" style={{ 
                            flex: 1, 
                            aspectRatio: '16/9'
                        }}>
                            <img src={elephantImg} alt="Elephants in Sri Lanka" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="volunteer-image-overlay" style={{ 
                                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '20px'
                            }}>
                                <span className="impact-tag">
                                    <i className="fa-solid fa-bolt-lightning"></i>
                                    Empowerment
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="volunteer-preview-content">
                    <span className="about-tag">Meaningful Travel</span>
                    <h2 style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                        fontWeight: 900, 
                        lineHeight: 1, 
                        letterSpacing: '-0.04em',
                        marginBottom: '30px'
                    }}>
                        More Than <br/>
                        <span style={{ color: 'rgba(255,255,255,0.5)' }}>Just a Tourist.</span>
                    </h2>
                    <p>
                        Beyond the beaches and mountains, discover the heart of Sri Lanka through our Volunteer Experiences. 
                        Give back to the local communities, support wildlife conservation, and leave a lasting positive impact on the island you love.
                    </p>
                    
                    <div className="volunteer-perks">
                        <div className="perk-item">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <span>English Teaching</span>
                        </div>
                        <div className="perk-item">
                            <i className="fa-solid fa-person-breastfeeding"></i>
                            <span>Woman Empowerment</span>
                        </div>
                        <div className="perk-item">
                            <i className="fa-solid fa-hands-holding-child"></i>
                            <span>Special Needs Care</span>
                        </div>
                        <div className="perk-item">
                            <i className="fa-solid fa-trowel-bricks"></i>
                            <span>Renovation Projects</span>
                        </div>
                        <div className="perk-item">
                            <i className="fa-solid fa-user-doctor"></i>
                            <span>Medical Projects</span>
                        </div>
                        <div className="perk-item">
                            <i className="fa-solid fa-handshake-angle"></i>
                            <span>Local Support</span>
                        </div>
                    </div>

                    <Link to="/contact" className="btn-modern btn-solid-green" style={{
                        marginTop: '40px',
                        padding: '18px 45px',
                        fontSize: '1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <span>Enquire About Volunteering</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default VolunteerSection;
