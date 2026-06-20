import React from 'react';
import { Link } from 'react-router-dom';
import communityImg from '../assets/teaching volunteers/IMG_7118.JPG';
import educationImg from '../assets/IMG_4412.jpg';
import medicalGalleryImg from '../assets/WhatsApp Image 2026-06-20 at 08.04.37.jpeg';

const VolunteerSection = () => {
    return (
        <section className="volunteer-preview-section">
            <div className="volunteer-preview-container">
                <div className="volunteer-bento-grid">
                    {/* Item 1: Image */}
                    <div className="volunteer-grid-item video-card" style={{ overflow: 'hidden', position: 'relative' }}>
                        <img src={medicalGalleryImg} alt="Volunteer Impact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="volunteer-image-overlay" style={{ zIndex: 5 }}>
                            <div className="experience-badge">Impactful Journeys</div>
                        </div>
                    </div>

                    {/* Item 2: Community */}
                    <div className="volunteer-grid-item community-card">
                        <img src={communityImg} alt="Volunteer Impact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

                    {/* Item 3: Purpose Card */}
                    <div className="volunteer-grid-item stats-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.12)',
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <i className="fa-solid fa-heart" style={{ color: 'white', fontSize: '0.85rem' }}></i>
                            </div>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.8 }}>Our Purpose</span>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, justifyContent: 'center', margin: '15px 0' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <div style={{ fontSize: '1.2rem', color: '#1ba352', marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px' }}>
                                    <i className="fa-solid fa-earth-asia"></i>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 800, lineHeight: 1.2 }}>Grassroots Support</div>
                                    <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '3px', lineHeight: 1.3 }}>Directly assist community-led local initiatives.</div>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <div style={{ fontSize: '1.2rem', color: '#1ba352', marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px' }}>
                                    <i className="fa-solid fa-handshake-angle"></i>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 800, lineHeight: 1.2 }}>Mutual Growth</div>
                                    <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '3px', lineHeight: 1.3 }}>Exchange skills, knowledge, and build friendships.</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <div style={{ fontSize: '1.2rem', color: '#1ba352', marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px' }}>
                                    <i className="fa-solid fa-shield-heart"></i>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 800, lineHeight: 1.2 }}>Ethical Travel</div>
                                    <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '3px', lineHeight: 1.3 }}>Ensure a positive, respectful cultural footprint.</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.65rem', opacity: 0.5, borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '10px', display: 'flex', alignItems: 'center', width: '100%' }}>
                            <span>Make a Difference</span>
                            <i className="fa-solid fa-arrow-right" style={{ marginLeft: 'auto', color: '#1ba352' }}></i>
                        </div>
                    </div>

                    {/* Item 4: Education */}
                    <div className="volunteer-grid-item education-card">
                        <img src={educationImg} alt="Preschool Teaching Volunteer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="volunteer-image-overlay" style={{ 
                            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: '20px'
                        }}>
                            <span className="impact-tag">
                                <i className="fa-solid fa-graduation-cap"></i>
                                Education
                            </span>
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
                    
                    <div className="volunteer-perks" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '40px' }}>
                        <Link to="/volunteer-program/real-sri-lanka-experience" className="perk-item" style={{ textDecoration: 'none' }}>
                            <i className="fa-solid fa-leaf"></i>
                            <span>Breathe Sri Lanka</span>
                        </Link>
                        <Link to="/volunteer-program/sri-lanka-childcare" className="perk-item" style={{ textDecoration: 'none' }}>
                            <i className="fa-solid fa-graduation-cap"></i>
                            <span>Teaching Volunteer</span>
                        </Link>
                        <Link to="/volunteer-program/special-needs-support" className="perk-item" style={{ textDecoration: 'none' }}>
                            <i className="fa-solid fa-hands-holding-child"></i>
                            <span>Special Needs Support</span>
                        </Link>
                        <Link to="/volunteer-program/village-school-renovation" className="perk-item" style={{ textDecoration: 'none' }}>
                            <i className="fa-solid fa-trowel-bricks"></i>
                            <span>Construction & Renovation</span>
                        </Link>
                        <Link to="/volunteer-program/medical-volunteer" className="perk-item" style={{ textDecoration: 'none' }}>
                            <i className="fa-solid fa-briefcase-medical"></i>
                            <span>Medical Volunteer</span>
                        </Link>
                    </div>

                    <Link to="/volunteer" className="btn-modern btn-solid-green" style={{
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
