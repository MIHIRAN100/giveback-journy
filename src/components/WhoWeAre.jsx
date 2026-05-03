import React from 'react';
import WhoImageMain from '../assets/javier-saint-jean-r4pIcB2reug-unsplash.jpg';
import WhoImageSecondary from '../assets/f60e45b2-b97c-4817-8ce3-903aad9819e5.jpg';
import WhoImageTertiary from '../assets/lucija-ros-VC7P8p6dFIc-unsplash.jpg';
import WhoImage4 from '../assets/artem-beliaikin-pDiWpjV14F0-unsplash.jpg';
import WhoImage5 from '../assets/brian-kyed-8NpelZe-EzM-unsplash.jpg';
import WhoImage6 from '../assets/Tasting Sri Lankan Cuisine .jpg';
import WhoImage7 from '../assets/Wild grass nature resort.jpg';

const WhoWeAre = () => {
    return (
        <section className="who-we-are-section">
            <div className="who-we-are-container">
                <div className="who-image-column">
                    <div className="who-image-grid-refined">
                        {/* Card 1 */}
                        <div className="who-grid-item-refined">
                            <img src={WhoImageSecondary} alt="Authentic Experience" />
                            <span className="who-card-label">Authentic</span>
                            <div className="who-card-overlay">
                                <h3>Local Life</h3>
                                <p>Connecting you directly with village artisans and community projects.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="who-grid-item-refined">
                            <img src={WhoImageMain} alt="Exquisite Budget Travel" />
                            <span className="who-card-label">Experience</span>
                            <div className="who-card-overlay">
                                <h3>15+ Years</h3>
                                <p>A decade and a half of crafting deep-island experiences beyond guidebooks.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="who-grid-item-refined">
                            <img src={WhoImageTertiary} alt="Island Journey" />
                            <span className="who-card-label">Value</span>
                            <div className="who-card-overlay">
                                <h3>Budget Luxury</h3>
                                <p>Premium boutique stays and private transport at unbeatable value.</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="who-grid-item-refined">
                            <img src={WhoImage4} alt="Nature" />
                            <span className="who-card-label">Nature</span>
                            <div className="who-card-overlay">
                                <h3>Wild Trails</h3>
                                <p>Ethical wildlife expeditions led by conservation-focused local experts.</p>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="who-grid-item-refined">
                            <img src={WhoImage5} alt="Heritage" />
                            <span className="who-card-label">Culture</span>
                            <div className="who-card-overlay">
                                <h3>Heritage</h3>
                                <p>Uncovering 2,500 years of history through the eyes of local historians.</p>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="who-grid-item-refined">
                            <img src={WhoImage6} alt="Cuisine" />
                            <span className="who-card-label">Flavor</span>
                            <div className="who-card-overlay">
                                <h3>Island Tastes</h3>
                                <p>Savoring the authentic spices and culinary traditions of Sri Lanka.</p>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="who-grid-item-refined">
                            <img src={WhoImage7} alt="Eco Stay" />
                            <span className="who-card-label">Eco</span>
                            <div className="who-card-overlay">
                                <h3>Green Stays</h3>
                                <p>Hand-picked eco-resorts that prioritize sustainability and local nature.</p>
                            </div>
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
