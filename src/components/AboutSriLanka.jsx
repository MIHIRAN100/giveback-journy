import React from 'react';
import { Link } from 'react-router-dom';
import PageImage from '../assets/ivani-de-silva-7SPIdNscD4I-unsplash.jpg';
import BigImage from '../assets/Wanderlust Sri Lanka - Mini Adams Peak Ella.jpg';
import ThirdImage from '../assets/artem-beliaikin-pDiWpjV14F0-unsplash.jpg';
import NatureImage from '../assets/Sri Lanka_ Beaches, Wildlife, Temples, Culture, Adventure, Nature.jpg';
import WildlifeImage from '../assets/a.jpg';

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
                    {/* Left Top Card */}
                    <div className="about-grid-item">
                        <img src={ThirdImage} alt="Local Markets" />
                        <span className="about-card-label">Culture</span>
                        <div className="about-card-overlay">
                            <h3>Vibrant Markets</h3>
                            <p>Taste the spices</p>
                        </div>
                    </div>

                    {/* Middle Tall Card */}
                    <div className="about-grid-item">
                        <img src={BigImage} alt="Sri Lanka High View" />
                        <span className="about-card-label">Scenic</span>
                        <div className="about-card-overlay">
                            <h3>High Views</h3>
                            <p>Breathtaking landscapes</p>
                        </div>
                    </div>
                    
                    {/* Right Top Card (Green Card) */}
                    <div className="about-grid-item green-card">
                        <span className="about-card-label" style={{background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)'}}>Local</span>
                        <div className="about-card-overlay">
                            <h3>Discover <br/> Authenticity</h3>
                            <p>Experience the island <i className="fa-solid fa-arrow-right" style={{marginLeft: '5px'}}></i></p>
                        </div>
                    </div>

                    {/* Left Bottom Card */}
                    <div className="about-grid-item">
                        <img src={NatureImage} alt="Heritage" />
                        <span className="about-card-label">Heritage</span>
                        <div className="about-card-overlay">
                            <h3>Ancient History</h3>
                            <p>Timeless journeys</p>
                        </div>
                    </div>

                    {/* Card 5 (Tall) */}
                    <div className="about-grid-item">
                        <img src={PageImage} alt="Beaches" />
                        <span className="about-card-label">Coastal</span>
                        <div className="about-card-overlay">
                            <h3>Golden Shores</h3>
                            <p>Tropical paradise</p>
                        </div>
                    </div>

                    {/* Card 6 (Tall) */}
                    <div className="about-grid-item">
                        <img src={WildlifeImage} alt="Wildlife" />
                        <span className="about-card-label">Wild</span>
                        <div className="about-card-overlay">
                            <h3>Safari Trails</h3>
                            <p>Untamed nature</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSriLanka;
