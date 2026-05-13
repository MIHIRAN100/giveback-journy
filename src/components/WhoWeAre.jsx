import React from 'react';
import { Link } from 'react-router-dom';
import CultureImg from '../assets/Sri lanka 🇱🇰 @lilychvt.jpg';
import NatureImg from '../assets/Little Adam’s Peak.jpg';
import FoodImg from '../assets/Tasting Sri Lankan Cuisine .jpg';
import WildlifeImg from '../assets/Elephants in Sri Lanka (1).jpg';

const WhoWeAre = () => {
    return (
        <section className="who-we-are-modern" id="about-us">
            <div className="who-container">
                <div className="who-grid-layout">
                    
                    {/* Left Column: Brand Story & Values */}
                    <div className="who-content-side">
                        <h2 className="who-main-title">
                            The experts in budget-friendly travel & local volunteering
                        </h2>
                        <p className="who-subtitle">
                            We redefine island exploration by proving that impactful travel can be accessible to everyone. Our mission is to combine affordable, authentic adventures with meaningful volunteering that directly supports Sri Lankan communities—this is how our <b>'Giveback Journey'</b> name was born: a promise to ensure every step you take on this island helps it flourish.
                        </p>
                        
                        <div className="who-features-list">
                            <div className="who-feature-item">
                                <div className="who-feature-icon">
                                    <i className="fa-solid fa-wallet"></i>
                                </div>
                                <div className="who-feature-text">
                                    <h4>Budget-Friendly Value</h4>
                                    <p>Experience the best of Sri Lanka without the tourist price tag. We curate low-cost, high-value journeys for every traveler.</p>
                                </div>
                            </div>

                            <div className="who-feature-item">
                                <div className="who-feature-icon">
                                    <i className="fa-solid fa-hand-holding-heart"></i>
                                </div>
                                <div className="who-feature-text">
                                    <h4>Meaningful Volunteering</h4>
                                    <p>Join hands with local projects in schools, conservation, and community development for a truly life-changing trip.</p>
                                </div>
                            </div>

                            <div className="who-feature-item">
                                <div className="who-feature-icon">
                                    <i className="fa-solid fa-people-carry-box"></i>
                                </div>
                                <div className="who-feature-text">
                                    <h4>Direct Local Impact</h4>
                                    <p>Every dollar you spend and every hour you volunteer leaves a positive footprint on the heart of our island.</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/exclusive-journeys" className="who-explore-btn">
                            Explore More
                        </Link>
                    </div>

                    {/* Middle Column: Featured Vertical Image */}
                    <div className="who-middle-column">
                        <div className="who-tall-card">
                            <img src={NatureImg} alt="Sri Lankan Nature" className="who-card-img" />
                            <div className="who-card-overlay">
                                <h3>The Soul of Nature</h3>
                                <p>Discover the untouched beauty of Sri Lanka's highlands and hidden waterfalls that take your breath away.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stacked Images */}
                    <div className="who-right-column">
                        <div className="who-small-card">
                            <div className="who-img-wrapper">
                                <img src={CultureImg} alt="Sri Lankan Culture" />
                                <span className="who-badge">Full Day</span>
                            </div>
                            <div className="who-card-info">
                                <h5>True People And Soul</h5>
                            </div>
                        </div>

                        <div className="who-small-card who-impact-card">
                            <div className="who-impact-content">
                                <div className="who-impact-icon">
                                    <i className="fa-solid fa-heart-pulse"></i>
                                </div>
                                <div className="who-impact-number">150+</div>
                                <h5>Community Projects</h5>
                                <p>Directly supported by our travelers since 2021.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .who-we-are-modern {
                    padding: 100px 5%;
                    background: #ffffff;
                    overflow: hidden;
                }
                .who-container {
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .who-grid-layout {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr 1fr;
                    gap: 60px;
                    align-items: flex-start;
                }

                /* Content Column */
                .who-main-title {
                    font-size: clamp(2rem, 3.5vw, 3rem);
                    font-weight: 800;
                    color: #111;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    letter-spacing: -1px;
                }
                .who-subtitle {
                    font-size: 1.1rem;
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 40px;
                    max-width: 90%;
                }
                .who-features-list {
                    display: flex;
                    flex-direction: column;
                    gap: 35px;
                    margin-bottom: 45px;
                }
                .who-feature-item {
                    display: flex;
                    gap: 20px;
                }
                .who-feature-icon {
                    width: 45px;
                    height: 45px;
                    background: #f0f7f2;
                    color: #1DB954;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    font-size: 1.2rem;
                }
                .who-feature-text h4 {
                    margin: 0 0 8px 0;
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #222;
                }
                .who-feature-text p {
                    margin: 0;
                    font-size: 0.95rem;
                    color: #666;
                    line-height: 1.6;
                }
                .who-explore-btn {
                    display: inline-block;
                    padding: 16px 40px;
                    background: #e8f5e9;
                    color: #2e7d32;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                }
                .who-explore-btn:hover {
                    background: #c8e6c9;
                    transform: translateY(-2px);
                }

                /* Middle Column */
                .who-tall-card {
                    position: relative;
                    height: 650px;
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                }
                .who-card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .who-card-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 40px 30px;
                    background: linear-gradient(transparent, rgba(0,0,0,0.8));
                    color: white;
                }
                .who-card-overlay h3 {
                    margin: 0 0 10px 0;
                    font-size: 1.5rem;
                    font-weight: 700;
                }
                .who-card-overlay p {
                    margin: 0;
                    font-size: 0.9rem;
                    opacity: 0.9;
                    line-height: 1.5;
                }

                /* Right Column */
                .who-right-column {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }
                .who-small-card {
                    border-radius: 24px;
                    overflow: hidden;
                }
                .who-img-wrapper {
                    position: relative;
                    height: 250px;
                    border-radius: 24px;
                    overflow: hidden;
                    margin-bottom: 15px;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.06);
                }
                .who-img-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .who-badge {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background: white;
                    color: #333;
                    padding: 6px 16px;
                    border-radius: 100px;
                    font-size: 0.75rem;
                    font-weight: 700;
                }
                .who-card-info h5 {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 700;
                    color: #333;
                    text-align: center;
                }

                /* Impact Card Styling */
                .who-impact-card {
                    background: linear-gradient(145deg, #1DB954 0%, #158a3d 100%);
                    color: white;
                    padding: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 250px;
                    box-shadow: 0 15px 35px rgba(29, 185, 84, 0.2);
                }
                .who-impact-content {
                    text-align: center;
                }
                .who-impact-icon {
                    font-size: 2rem;
                    margin-bottom: 15px;
                    animation: heartBeat 2s infinite;
                }
                .who-impact-number {
                    font-size: 2.5rem;
                    font-weight: 900;
                    line-height: 1;
                    margin-bottom: 10px;
                }
                .who-impact-card h5 {
                    color: white;
                    font-size: 1.1rem;
                    margin-bottom: 8px;
                }
                .who-impact-card p {
                    font-size: 0.85rem;
                    opacity: 0.9;
                    line-height: 1.5;
                    margin: 0;
                }

                @keyframes heartBeat {
                    0% { transform: scale(1); }
                    14% { transform: scale(1.1); }
                    28% { transform: scale(1); }
                    42% { transform: scale(1.1); }
                    70% { transform: scale(1); }
                }

                /* Responsive */
                @media (max-width: 1200px) {
                    .who-grid-layout {
                        grid-template-columns: 1fr 1fr;
                        gap: 40px;
                    }
                    .who-right-column {
                        grid-column: span 2;
                        flex-direction: row;
                    }
                    .who-small-card {
                        flex: 1;
                    }
                }
                @media (max-width: 900px) {
                    .who-grid-layout {
                        grid-template-columns: 1fr;
                    }
                    .who-right-column {
                        grid-column: span 1;
                        flex-direction: column;
                    }
                    .who-tall-card {
                        height: 500px;
                    }
                }
                @media (max-width: 600px) {
                    .who-main-title {
                        font-size: 1.8rem;
                    }
                    .who-tall-card {
                        height: 400px;
                    }
                    .who-img-wrapper {
                        height: 200px;
                    }
                }
            `}} />
        </section>
    );
};

export default WhoWeAre;
