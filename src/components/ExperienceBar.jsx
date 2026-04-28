import React from 'react';

const ExperienceBar = () => {
    return (
        <section className="how-we-work">
            <div className="section-container">
                <div className="experience-grid">
                    <div className="exp-item">
                        <p className="exp-number">15+</p>
                        <p className="exp-label">Years Experience</p>
                    </div>
                    <div className="exp-item">
                        <p className="exp-number">5k+</p>
                        <p className="exp-label">Happy Travelers</p>
                    </div>
                    <div className="exp-item">
                        <p className="exp-number">200+</p>
                        <p className="exp-label">Unique Tours</p>
                    </div>
                    <div className="exp-item">
                        <p className="exp-number">4.9/5</p>
                        <p className="exp-label">Average Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceBar;
