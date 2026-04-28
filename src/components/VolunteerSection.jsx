import React from 'react';
import { Link } from 'react-router-dom';
import VolunteerImg from '../assets/a2c730ae-701d-4a8c-8862-2a70549aebf1.jpg';

const VolunteerSection = () => {
    return (
        <section className="volunteer-preview-section">
            <div className="volunteer-preview-container">
                <div className="volunteer-preview-image">
                    <img 
                        src={VolunteerImg} 
                        alt="Volunteering in Sri Lanka" 
                    />
                    <div className="volunteer-image-overlay">
                        <div className="experience-badge">Impactful Journeys</div>
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
                            <span>Eco-Sustainablity</span>
                        </div>
                    </div>

                    <Link to="/contact" className="btn-modern btn-white" style={{textDecoration: 'none', display: 'inline-block'}}>
                        Enquire About Volunteering
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default VolunteerSection;
