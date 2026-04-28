import React from 'react';
import WhoImageMain from '../assets/javier-saint-jean-r4pIcB2reug-unsplash.jpg';
import WhoImageSecondary from '../assets/f60e45b2-b97c-4817-8ce3-903aad9819e5.jpg';
import WhoImageTertiary from '../assets/lucija-ros-VC7P8p6dFIc-unsplash.jpg';

const WhoWeAre = () => {
    return (
        <section className="who-we-are-section">
            <div className="who-we-are-container">
                <div className="who-image-column">
                    <div className="who-image-grid-refined">
                        <div className="who-grid-item-refined item-large">
                            <img src={WhoImageMain} alt="Exquisite Budget Travel" />
                            <div className="who-floating-badge">
                                <span className="badge-number">15+</span>
                                <span className="badge-text">Years</span>
                            </div>
                        </div>
                        <div className="who-grid-item-refined">
                            <img src={WhoImageSecondary} alt="Authentic Experience" />
                        </div>
                        <div className="who-grid-item-refined">
                            <img src={WhoImageTertiary} alt="Island Journey" />
                        </div>
                    </div>
                </div>
                
                <div className="who-content-column">
                    <span className="about-tag">Who We Are</span>
                    <h2>World-Class Travel, <br/> Budget-Friendly Reality.</h2>
                    <p className="who-lead">
                        We believe that extraordinary travel shouldn't be reserved only for the elite. Our mission is to provide the best budget travel experiences in the world, combining luxury service with unbeatable value.
                    </p>
                    <p className="who-text">
                        From hand-picked local stays to exclusive off-the-beaten-path expeditions, we curate every detail to ensure you get the absolute most out of every dollar. We don't just plan tours; we craft memories that stay with you forever, without the heavy price tag.
                    </p>
                    
                    <div className="who-stats-grid">
                        <div className="who-stat-item">
                            <i className="fa-solid fa-earth-asia"></i>
                            <div>
                                <h4>Global Reach</h4>
                                <p>Tours across the island</p>
                            </div>
                        </div>
                        <div className="who-stat-item">
                            <i className="fa-solid fa-wallet"></i>
                            <div>
                                <h4>Best Value</h4>
                                <p>Unbeatable pricing</p>
                            </div>
                        </div>
                    </div>
                    
                    <button className="btn-modern btn-solid-green" style={{marginTop: '20px'}}>Read Our Full Story</button>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
