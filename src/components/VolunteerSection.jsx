import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerSection = () => {
    return (
        <section className="volunteer-preview-section">
            <div className="volunteer-preview-container">
                <div className="volunteer-bento-grid">
                    <div className="volunteer-grid-item tall-card video-card" style={{ overflow: 'hidden', position: 'relative' }}>
                        <iframe 
                            src="https://www.youtube.com/embed/cSBzHuvubQQ?autoplay=1&mute=1&loop=1&playlist=cSBzHuvubQQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1" 
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
                        <div className="volunteer-image-overlay" style={{ zIndex: 1 }}>
                            <div className="experience-badge">Impactful Journeys</div>
                        </div>
                    </div>
                </div>

                <div className="volunteer-preview-content">
                    <span className="about-tag">Meaningful Travel</span>
                    <h2>More Than Just a Tourist.</h2>
                    <p>
                        Beyond the beaches and mountains, discover the heart of Sri Lanka through our Volunteer Experiences. 
                        Give back to the local communities, support wildlife conservation, and leave a lasting positive impact on the island you love.
                    </p>
                    
                    <div className="volunteer-perks">
                        <div className="perk-item">
                            <i className="fa-solid fa-paw"></i>
                            <span>Wildlife Protection</span>
                        </div>
                        <div className="perk-item">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <span>Community Teaching</span>
                        </div>
                        <div className="perk-item">
                            <i className="fa-solid fa-seedling"></i>
                            <span>Eco-Sustainability</span>
                        </div>
                        <div className="perk-item">
                            <i className="fa-solid fa-fish-fins"></i>
                            <span>Marine Conservation</span>
                        </div>
                        <div className="perk-item">
                            <i className="fa-solid fa-leaf"></i>
                            <span>Organic Farming</span>
                        </div>
                        <div className="perk-item">
                            <i className="fa-solid fa-hand-holding-heart"></i>
                            <span>Elderly Care Support</span>
                        </div>
                    </div>

                    <Link to="/contact" className="btn-modern btn-white" style={{textDecoration: 'none', display: 'inline-block', marginTop: '30px'}}>
                        Enquire About Volunteering
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default VolunteerSection;
