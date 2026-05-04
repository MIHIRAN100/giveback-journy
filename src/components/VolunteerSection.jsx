import React from 'react';
import { Link } from 'react-router-dom';
import hihiImg from '../assets/hihi.webp';
import puppyImg from '../assets/dominican puppy.jpg';

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
                            src="https://www.youtube.com/embed/cSBzHuvubQQ?autoplay=1&mute=1&loop=1&playlist=cSBzHuvubQQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1" 
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
                                transform: 'translate(-50%, -50%) scale(1.5)', // Scale up to cover edges and hide black bars
                                pointerEvents: 'none'
                            }}
                        ></iframe>
                        <div className="volunteer-image-overlay" style={{ zIndex: 5 }}>
                            <div className="experience-badge">Impactful Journeys</div>
                            
                            {/* Mute/Unmute Toggle */}
                            <button 
                                onClick={toggleMute}
                                style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    right: '20px',
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    zIndex: 10
                                }}
                                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.25)'}
                                onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.15)'}
                            >
                                <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`} style={{ fontSize: '1.1rem' }}></i>
                            </button>
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
                                <span style={{ 
                                    fontSize: '0.65rem', 
                                    fontWeight: 900, 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '2px',
                                    background: 'rgba(29, 185, 84, 0.2)',
                                    backdropFilter: 'blur(12px)',
                                    padding: '8px 18px',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(29, 185, 84, 0.3)',
                                    color: 'white',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                                }}>
                                    Community
                                </span>
                            </div>
                        </div>
                        <div className="volunteer-grid-item" style={{ 
                            flex: 1, 
                            aspectRatio: '16/9'
                        }}>
                            <img src={puppyImg} alt="Dominican Puppy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="volunteer-image-overlay" style={{ 
                                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '20px'
                            }}>
                                <span style={{ 
                                    fontSize: '0.65rem', 
                                    fontWeight: 900, 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '2px',
                                    background: 'rgba(29, 185, 84, 0.2)',
                                    backdropFilter: 'blur(12px)',
                                    padding: '8px 18px',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(29, 185, 84, 0.3)',
                                    color: 'white',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                                }}>
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

                    <Link to="/contact" className="btn-modern" style={{
                        textDecoration: 'none', 
                        display: 'inline-block', 
                        marginTop: '30px',
                        background: 'var(--primary-green)',
                        color: 'white',
                        padding: '15px 35px',
                        borderRadius: '500px',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        border: 'none',
                        boxShadow: '0 10px 25px rgba(16, 124, 65, 0.25)',
                        transition: 'all 0.3s ease'
                    }}>
                        Enquire About Volunteering
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default VolunteerSection;
