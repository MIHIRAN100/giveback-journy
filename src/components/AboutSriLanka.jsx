import React from 'react';
import { Link } from 'react-router-dom';
import PageImage from '../assets/ivani-de-silva-7SPIdNscD4I-unsplash.jpg';
import BigImage from '../assets/rajiv-perera-b1jeQiJwYQI-unsplash.jpg';

const AboutSriLanka = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <span className="about-tag">Culture & Heritage</span>
                <h2>Soul of the <br/> Indian Ocean.</h2>
                <p>
                    Sri Lanka is a land of ancient kingdoms, emerald tea plantations, and pristine palm-fringed shores. 
                    From the mist-covered mountains of the Hill Country to the vibrant heart of the Cultural Triangle, 
                    this island offers a timeless journey through heritage.
                </p>
                <div className="about-actions">
                    <Link to="/sri-lanka" className="btn-modern btn-solid-green" style={{textDecoration: 'none', display: 'inline-block'}}>
                        Explore Our Story
                    </Link>
                </div>
            </div>

            <div className="about-image-container">
                <div className="about-image-grid">
                    {/* Top Span Image */}
                    <div className="about-grid-item grid-span-2">
                        <img 
                            src={BigImage} 
                            alt="Sri Lanka High View" 
                        />
                    </div>
                    
                    {/* Featured Green Card with dark inset shadow style from CSS */}
                    <div className="about-grid-item featured-green-card">
                        <h3>Discover <br/> Authenticity.</h3>
                        <p>Experience the island through local eyes <i className="fa-solid fa-arrow-right"></i></p>
                    </div>

                    {/* Side Image */}
                    <div className="about-grid-item">
                        <img 
                            src={PageImage} 
                            alt="Scenic Sri Lanka Landscape" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSriLanka;
