import React from 'react';
import { Link } from 'react-router-dom';
import ElephantImg from '../assets/elephant_wildlife.png';
import TeaImg from '../assets/tea_plantation.png';
import VolunteerImg from '../assets/volunteer-community.png';
import gbRoundLogo from '../assets/gb_round_logo.png';

const SpotlightSection = () => {
    return (
        <section className="spotlight-section">
            <div className="spotlight-container">
                {/* Header */}
                <div className="spotlight-header">
                    <h2>Giveback Journey Spotlight</h2>
                    <p>Find out what's happening at Giveback Journey—from curated Sri Lanka tour deals to our community impact initiatives.</p>
                </div>

                {/* 4 Column Grid */}
                <div className="spotlight-grid">
                    
                    {/* Card 1: Deals of The Week */}
                    <div className="spotlight-card">
                        <div className="spotlight-card-img">
                            <img src={ElephantImg} alt="Deals of The Week" />
                        </div>
                        <div className="spotlight-card-body">
                            <div>
                                <h3>Deals of The Week</h3>
                                <p>
                                    Discover Sri Lanka’s most breathtaking destinations at up to 30% off. World-famous fortresses, misty hill-country trains, and tropical beaches await!
                                </p>
                            </div>
                            <Link to="/packages" className="spotlight-card-link">
                                View Deals <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem', marginLeft: '4px' }}></i>
                            </Link>
                        </div>
                    </div>

                    {/* Card 2: Giveback Plus+ Banner */}
                    <div className="spotlight-card spotlight-banner-card">
                        <div className="spotlight-banner-top">
                            <div className="spotlight-brand-tag">
                                <img src={gbRoundLogo} alt="Logo" className="spotlight-badge-logo" />
                                <span className="banner-brand-text">giveback<b>plus+</b></span>
                            </div>
                            <h4 className="banner-main-title">Travel More. Save More.</h4>
                            <div className="spotlight-circles-row">
                                <div className="circle-img-badge c1"><img src={TeaImg} alt="Tea" /></div>
                                <div className="circle-img-badge c2"><img src={VolunteerImg} alt="Volunteer" /></div>
                            </div>
                        </div>
                        <div className="spotlight-card-body">
                            <div>
                                <h3>Giveback Plus+</h3>
                                <p>
                                    Our rewards & loyalty program unlocks extra savings on every Sri Lanka tour and volunteer experience. Join today and start saving on your next adventure!
                                </p>
                            </div>
                            <Link to="/exclusive-journeys" className="spotlight-card-link">
                                Discover More <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem', marginLeft: '4px' }}></i>
                            </Link>
                        </div>
                    </div>

                    {/* Card 3: Empowering Solo & Group Travelers */}
                    <div className="spotlight-card">
                        <div className="spotlight-card-img">
                            <img src={TeaImg} alt="Empowering Solo Travelers" />
                        </div>
                        <div className="spotlight-card-body">
                            <div>
                                <h3>Empowering Solo Travelers</h3>
                                <p>
                                    With curated itineraries and opportunities to connect with fellow travelers and local Sri Lankan guides, make your journey safe, enriching, and memorable.
                                </p>
                            </div>
                            <Link to="/volunteer" className="spotlight-card-link">
                                Find Your Trip <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem', marginLeft: '4px' }}></i>
                            </Link>
                        </div>
                    </div>

                    {/* Column 4: 3 Right Mini Cards Stack */}
                    <div className="spotlight-mini-stack">
                        {/* Mini Card 1: Travel Insurance */}
                        <div className="spotlight-mini-card">
                            <div className="mini-card-icon-box">
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <div className="mini-card-info">
                                <h4>Travel Insurance</h4>
                                <Link to="/terms" className="mini-card-link">
                                    Learn More <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem' }}></i>
                                </Link>
                            </div>
                        </div>

                        {/* Mini Card 2: Travel & Earn */}
                        <div className="spotlight-mini-card">
                            <div className="mini-card-icon-box">
                                <i className="fa-solid fa-coins"></i>
                            </div>
                            <div className="mini-card-info">
                                <h4>Travel & Earn Rewards</h4>
                                <Link to="/exclusive-journeys" className="mini-card-link">
                                    Learn More <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem' }}></i>
                                </Link>
                            </div>
                        </div>

                        {/* Mini Card 3: 24/7 Support */}
                        <div className="spotlight-mini-card">
                            <div className="mini-card-icon-box">
                                <i className="fa-solid fa-headset"></i>
                            </div>
                            <div className="mini-card-info">
                                <h4>24/7 Local Support</h4>
                                <Link to="/contact" className="mini-card-link">
                                    Contact Us <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.7rem' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SpotlightSection;
