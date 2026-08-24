import React from 'react';
import { Link } from 'react-router-dom';

const HomeMetricsSection = () => {
    return (
        <section className="home-metrics-section" style={{ background: '#ffffff', padding: '60px 5% 40px' }}>
            <style>{`
                .metrics-container {
                    max-width: 1350px;
                    margin: 0 auto;
                }

                /* Top Grid Layout */
                .metrics-top-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 25px;
                }

                @media (max-width: 1024px) {
                    .metrics-top-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media (max-width: 640px) {
                    .metrics-top-grid {
                        grid-template-columns: 1fr;
                    }
                }

                /* Top Left Text Block */
                .metrics-intro-card {
                    padding: 10px 10px 10px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .metrics-tag {
                    display: inline-block;
                    background: #f1f5f9;
                    color: #475569;
                    font-size: 0.72rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    padding: 4px 12px;
                    border-radius: 100px;
                    margin-bottom: 12px;
                    width: fit-content;
                }

                .metrics-title {
                    font-size: 1.85rem;
                    font-weight: 800;
                    color: #0f172a;
                    line-height: 1.2;
                    margin: 0 0 14px 0;
                    letter-spacing: -0.02em;
                }

                .metrics-desc {
                    font-size: 0.88rem;
                    color: #64748b;
                    line-height: 1.6;
                    margin: 0 0 20px 0;
                }

                .metrics-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #3b7fba;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .metrics-link:hover {
                    color: #16a34a;
                    transform: translateX(4px);
                }

                /* Dark Card (Column 2) */
                .metrics-dark-card {
                    background: #0f172a;
                    color: #ffffff;
                    border-radius: 20px;
                    padding: 30px 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
                    transition: transform 0.3s ease;
                }

                .metrics-dark-card:hover {
                    transform: translateY(-5px);
                }

                .metrics-icon-box-dark {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    color: #ffffff;
                    margin-bottom: 24px;
                }

                /* Color Card (Column 3) */
                .metrics-color-card {
                    background: #3b7fba;
                    color: #ffffff;
                    border-radius: 20px;
                    padding: 30px 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    box-shadow: 0 10px 30px rgba(59, 127, 186, 0.15);
                    transition: transform 0.3s ease;
                }

                .metrics-color-card:hover {
                    transform: translateY(-5px);
                }

                .metrics-icon-box-color {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    color: #ffffff;
                    margin-bottom: 24px;
                }

                .card-heading {
                    font-size: 1.15rem;
                    font-weight: 800;
                    line-height: 1.3;
                    margin: 0 0 12px 0;
                }

                .card-text {
                    font-size: 0.82rem;
                    line-height: 1.55;
                    opacity: 0.88;
                    margin: 0;
                }

                /* Light Stat Card (Column 4) */
                .metrics-stat-card {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .stat-num-big {
                    font-size: 2.2rem;
                    font-weight: 900;
                    color: #0f172a;
                    line-height: 1;
                    margin-bottom: 4px;
                }

                .stat-num-label {
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: #334155;
                    margin-bottom: 6px;
                }

                .stat-num-sub {
                    font-size: 0.75rem;
                    color: #64748b;
                    margin-bottom: 16px;
                    line-height: 1.35;
                }

                .stat-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .stat-list-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 0.76rem;
                    color: #475569;
                    font-weight: 600;
                }

                .dots-indicator {
                    letter-spacing: 2px;
                    color: #1ba352;
                    font-size: 0.85rem;
                }

                /* Bottom Stats Banner Bar */
                .metrics-bottom-banner {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 24px;
                    padding: 28px 36px;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                }

                @media (max-width: 900px) {
                    .metrics-bottom-banner {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 500px) {
                    .metrics-bottom-banner {
                        grid-template-columns: 1fr;
                    }
                }

                .banner-metric-item {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    position: relative;
                }

                .banner-metric-item:not(:last-child)::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 15%;
                    bottom: 15%;
                    width: 1px;
                    background: #e2e8f0;
                }

                @media (max-width: 900px) {
                    .banner-metric-item::after {
                        display: none;
                    }
                }

                .metric-icon-wrap {
                    width: 46px;
                    height: 46px;
                    border-radius: 14px;
                    border: 1.5px solid #cbd5e1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.25rem;
                    color: #3b7fba;
                    background: #ffffff;
                    flex-shrink: 0;
                }

                .metric-val {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: #0f172a;
                    line-height: 1.1;
                }

                .metric-lbl {
                    font-size: 0.76rem;
                    color: #64748b;
                    font-weight: 600;
                    margin-top: 2px;
                }
            `}</style>

            <div className="metrics-container">
                {/* Top Tier: 4 Columns */}
                <div className="metrics-top-grid">
                    {/* Column 1: Intro Text */}
                    <div className="metrics-intro-card">
                        <div>
                            <span className="metrics-tag">About Giveback</span>
                            <h2 className="metrics-title">
                                Crafting authentic journeys you love to share.
                            </h2>
                            <p className="metrics-desc">
                                Since 2018, we have realized custom Sri Lanka tours and volunteer placements tailored to individual desires. We work transparently, guarantee zero hidden fees, and ensure lasting impact.
                            </p>
                        </div>
                        <Link to="/exclusive-journeys" className="metrics-link">
                            <span>More about our company</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>

                    {/* Column 2: Dark Navy Card */}
                    <div className="metrics-dark-card">
                        <div>
                            <div className="metrics-icon-box-dark">
                                <i className="fa-solid fa-compass"></i>
                            </div>
                            <h3 className="card-heading">
                                Private Chauffeur &amp; Guided Tours
                            </h3>
                        </div>
                        <p className="card-text">
                            Dedicated local driver-guides, air-conditioned luxury vehicles, and carefully timed itineraries to avoid crowded tourist peaks.
                        </p>
                    </div>

                    {/* Column 3: Brand Accent Card */}
                    <div className="metrics-color-card">
                        <div>
                            <div className="metrics-icon-box-color">
                                <i className="fa-solid fa-sliders"></i>
                            </div>
                            <h3 className="card-heading">
                                Tailored Bespoke Itineraries
                            </h3>
                        </div>
                        <p className="card-text">
                            Our travel experts customize every detail—combining pristine beaches, heritage sites, wildlife safaris, and volunteer projects to suit your pace.
                        </p>
                    </div>

                    {/* Column 4: Stat Breakdown Card */}
                    <div className="metrics-stat-card">
                        <div>
                            <div className="stat-num-big">120+</div>
                            <div className="stat-num-label">Verified Itineraries &amp; Programs</div>
                            <div className="stat-num-sub">Choose your ideal Sri Lanka experience from tested journeys.</div>
                        </div>
                        <div className="stat-list">
                            <div className="stat-list-item">
                                <span>Signature Tours</span>
                                <span className="dots-indicator">••••••••</span>
                                <span style={{ color: '#0f172a', fontWeight: 800 }}>60</span>
                            </div>
                            <div className="stat-list-item">
                                <span>Day Trips &amp; Safaris</span>
                                <span className="dots-indicator">•••••</span>
                                <span style={{ color: '#0f172a', fontWeight: 800 }}>40</span>
                            </div>
                            <div className="stat-list-item">
                                <span>Giveback Projects</span>
                                <span className="dots-indicator">••••</span>
                                <span style={{ color: '#0f172a', fontWeight: 800 }}>20</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Tier: 4-Metric Banner Bar */}
                <div className="metrics-bottom-banner">
                    <div className="banner-metric-item">
                        <div className="metric-icon-wrap">
                            <i className="fa-solid fa-route"></i>
                        </div>
                        <div>
                            <div className="metric-val">18 000+ km</div>
                            <div className="metric-lbl">Traveled Across Sri Lanka</div>
                        </div>
                    </div>

                    <div className="banner-metric-item">
                        <div className="metric-icon-wrap">
                            <i className="fa-solid fa-users"></i>
                        </div>
                        <div>
                            <div className="metric-val">98%</div>
                            <div className="metric-lbl">5-Star Traveler Satisfaction</div>
                        </div>
                    </div>

                    <div className="banner-metric-item">
                        <div className="metric-icon-wrap">
                            <i className="fa-solid fa-heart"></i>
                        </div>
                        <div>
                            <div className="metric-val">1 200+</div>
                            <div className="metric-lbl">Local Lives &amp; Children Supported</div>
                        </div>
                    </div>

                    <div className="banner-metric-item">
                        <div className="metric-icon-wrap">
                            <i className="fa-solid fa-award"></i>
                        </div>
                        <div>
                            <div className="metric-val">10+ Years</div>
                            <div className="metric-lbl">Local Island Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMetricsSection;
