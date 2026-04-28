import React from 'react';
import { Link } from 'react-router-dom';

const BentoSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="bg-watermark">LANKA</div>
            <div className="section-container">
                <div className="about-header reveal active">
                    <div className="header-left">
                        <span className="section-tag">01 / Destination</span>
                        <h2>SRI LANKA</h2>
                    </div>
                    <div className="header-right">
                        <p className="about-lead">A land like no other. From ancient kingdoms carved in stone to the wild heartbeat of the jungle, Sri Lanka is a tapestry of endless discovery and soulful serendipity.</p>
                        <p className="about-more-text">Experience the rhythmic pulses of island life as you traverse through verdant tea plantations, hidden coastal sanctuaries, and the sacred echoes of pre-historic civilization.</p>
                        <Link to="/sri-lanka" className="read-more-btn">
                            Explore the Full Story <i className="bi bi-arrow-right-short"></i>
                        </Link>
                    </div>
                </div>

                <div className="bento-grid">
                    <div className="bento-tile tile-large reveal active" style={{'--bg-image': "url('img/sri_lanka_hero.png')"}}>
                        <div className="tile-content">
                            <span className="tile-tag">Heritage</span>
                            <h3>The Stone Kings</h3>
                        </div>
                    </div>
                    
                    <div className="bento-tile tile-small reveal active" style={{'--bg-image': "url('https://images.unsplash.com/photo-1551888041-e940f81fd03a?auto=format&fit=crop&w=800&q=80')"}}>
                        <div className="tile-content">
                            <span className="tile-tag">Lifestyle</span>
                            <h3>Coastal Soul</h3>
                        </div>
                    </div>

                    <div className="bento-tile tile-tall reveal active" style={{'--bg-image': "url('img/sri_lanka_tea.png')"}}>
                        <div className="tile-content">
                            <span className="tile-tag">Highlands</span>
                            <h3>Emerald Mist</h3>
                        </div>
                    </div>

                    <Link to="/sri-lanka" className="bento-tile tile-action reveal active">
                        <div className="action-content">
                            <p className="action-slogan">Your adventure, perfectly curated.</p>
                            <h3>Plan Your Journey</h3>
                            <i className="bi bi-arrow-right-circle"></i>
                        </div>
                    </Link>

                    <div className="bento-tile tile-wide reveal active" style={{'--bg-image': "url('https://images.unsplash.com/photo-1582236522501-c852ac30e620?auto=format&fit=crop&w=800&q=80')"}}>
                        <div className="tile-content">
                            <span className="tile-tag">Wilderness</span>
                            <h3>Deep Jungle Safari</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoSection;
