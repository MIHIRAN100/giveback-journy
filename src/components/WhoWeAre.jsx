import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SlideImg1 from '../assets/46241f75-0721-4b46-9e04-db0bb93dbd49.jpg';
import SlideImg2 from '../assets/b7f8179e-7e30-41bb-bb99-477f25c24d60.jpg';
import SlideImg3 from '../assets/IMG_6076.jpg';
import SlideImg4 from '../assets/Wanderlust Sri Lanka - Mini Adams Peak Ella.jpg';
import SlideImg5 from '../assets/medical_gallery_new_1.jpg';
import SlideImg6 from '../assets/12bc54bb-c32d-4ce9-a230-a4181339ca51.jpg';
import CultureImg from '../assets/WhatsApp Image 2026-05-20 at 11.50.00.jpeg';

const WhoWeAre = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            img: SlideImg1,
            tag: 'Timeless Heritage',
            title: 'Authentic Island Experiences',
            desc: 'Discover coastal villages, tea highland trails, and rich ancient heritage with local guides.'
        },
        {
            img: SlideImg2,
            tag: 'Island Exploration',
            title: 'Breathtaking Destinations',
            desc: 'Traverse scenic routes, lush rainforests, and vibrant Sri Lankan culture with trusted experts.'
        },
        {
            img: SlideImg3,
            tag: 'Community & Nature',
            title: 'Grassroots Impact & Culture',
            desc: 'Engage with village schools, conservation efforts, and vibrant local communities.'
        },
        {
            img: SlideImg4,
            tag: "Little Adam's Peak",
            title: 'Majestic Mountain Vistas',
            desc: "Witness the iconic views over Ella Gap and hike through Sri Lanka's famous hill country."
        },
        {
            img: SlideImg5,
            tag: 'Medical & Community Care',
            title: 'Hands On Volunteer Outreach',
            desc: 'Support local healthcare, community clinics, and grassroots health initiatives across Sri Lanka.'
        },
        {
            img: SlideImg6,
            tag: 'Unforgettable Journeys',
            title: 'Cherished Traveler Memories',
            desc: 'Build lifelong friendships and experience Sri Lankan warmth and hospitality firsthand.'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const pillars = [
        {
            icon: 'fa-solid fa-wallet',
            title: 'Budget Friendly Value',
            tag: 'No Middlemen Fees',
            desc: 'Experience the best of Sri Lanka without the tourist price tag. We curate low cost, high value journeys tailored for every traveler.'
        },
        {
            icon: 'fa-solid fa-hand-holding-heart',
            title: 'Meaningful Volunteering',
            tag: 'Hands On Experience',
            desc: 'Join hands with local initiatives in teaching, wildlife conservation, special needs, and village development for a life changing journey.'
        },
        {
            icon: 'fa-solid fa-people-carry-box',
            title: 'Direct Community Impact',
            tag: '100% Ethical & Sustainable',
            desc: 'Every dollar you spend and every volunteer hour directly empowers Sri Lankan host families, schools, and grassroots projects.'
        },
        {
            icon: 'fa-solid fa-compass-drafting',
            title: 'Authentic Island Exploration',
            tag: 'Off The Beaten Track',
            desc: 'Immerse yourself in hidden waterfalls, historic heritage sites, and local culinary traditions led by trusted native experts.'
        }
    ];

    const stats = [
        { number: '1,000+', label: 'Happy Travelers', sub: 'Since 2019' },
        { number: '15+', label: 'Active Projects', sub: 'Islandwide' },
        { number: '100%', label: 'Direct Impact', sub: 'Local Communities' },
        { number: '4.9 ★', label: 'Traveler Rating', sub: 'Verified Reviews' }
    ];

    return (
        <section className="who-we-are-modern" id="about-us">
            <div className="who-container">
                
                {/* Section Header */}
                <div className="who-header-block">
                    <div className="who-badge-tag">
                        <i className="fa-solid fa-sparkles"></i>
                        <span>OUR IDENTITY & MISSION</span>
                    </div>
                    <h2 className="who-main-title">
                        Your Gateway to Affordable Travel & <span className="who-title-highlight">Community Volunteering</span>
                    </h2>
                    <p className="who-subtitle">
                        We redefine island exploration by proving that impactful travel can be accessible to everyone. Our mission combines affordable, authentic adventures with meaningful volunteering that directly supports Sri Lankan communities.
                    </p>
                </div>

                {/* Quick Stats Grid */}
                <div className="who-stats-row">
                    {stats.map((st, idx) => (
                        <div key={idx} className="who-stat-card">
                            <div className="who-stat-number">{st.number}</div>
                            <div className="who-stat-label">{st.label}</div>
                            <div className="who-stat-sub">{st.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Main Bento / Split Layout */}
                <div className="who-grid-layout">
                    
                    {/* Left Column: Structured Pillars */}
                    <div className="who-content-side">
                        <div className="who-pillars-grid">
                            {pillars.map((pil, idx) => (
                                <div key={idx} className="who-pillar-card">
                                    <div className="who-pillar-top">
                                        <div className="who-pillar-icon">
                                            <i className={pil.icon}></i>
                                        </div>
                                        <span className="who-pillar-tag">{pil.tag}</span>
                                    </div>
                                    <h4 className="who-pillar-title">{pil.title}</h4>
                                    <p className="who-pillar-desc">{pil.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="who-actions-wrapper">
                            <Link to="/exclusive-journeys" className="who-btn-primary">
                                <span>Explore Our Journeys</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                            <Link to="/volunteer" className="who-btn-secondary">
                                <span>Become a Volunteer</span>
                                <i className="fa-solid fa-heart"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Bento Visual Cards */}
                    <div className="who-visual-side">
                        {/* Featured Slideshow Card (Apple / Netflix Cinematic Style) */}
                        <div className="who-bento-tall who-apple-card">
                            {slides.map((s, idx) => (
                                <div
                                    key={idx}
                                    className={`who-slide-item ${idx === currentSlide ? 'active' : ''}`}
                                >
                                    <img src={s.img} alt={s.title} className="who-bento-img" />
                                </div>
                            ))}

                            {/* Top Apple / Netflix Segmented Progress Bar */}
                            <div className="who-progress-bar-strip">
                                {slides.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`who-progress-segment ${idx === currentSlide ? 'active' : idx < currentSlide ? 'completed' : ''}`}
                                        onClick={() => setCurrentSlide(idx)}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    >
                                        <div className="who-progress-fill"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Top Left Glassmorphic Badge */}
                            <div className="who-apple-badge">
                                <span className="who-badge-dot"></span>
                                <span>SRI LANKA EXPEDITION</span>
                            </div>

                            {/* Slide Navigation Arrows */}
                            <button
                                className="who-slide-nav who-nav-prev"
                                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                                aria-label="Previous Slide"
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>
                            <button
                                className="who-slide-nav who-nav-next"
                                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                                aria-label="Next Slide"
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>

                            {/* Apple / Netflix Modern Glass Typography Card */}
                            <div key={currentSlide} className="who-bento-overlay who-apple-overlay">
                                <div className="who-apple-tag">
                                    <i className="fa-solid fa-sparkles"></i>
                                    <span>{slides[currentSlide].tag}</span>
                                </div>
                                <h3 className="who-apple-title">{slides[currentSlide].title}</h3>
                                <p className="who-apple-desc">{slides[currentSlide].desc}</p>
                            </div>
                        </div>

                        {/* Bottom Visual Sub-Grid */}
                        <div className="who-bento-subgrid">
                            <div className="who-bento-small">
                                <img src={CultureImg} alt="Volunteer Impact" className="who-bento-img" />
                                <div className="who-small-overlay">
                                    <span className="who-small-badge">🤝 Real People</span>
                                    <h4>Make A Positive Impact</h4>
                                </div>
                            </div>

                            <div className="who-bento-highlight-card">
                                <div className="who-hl-header">
                                    <i className="fa-solid fa-shield-halved"></i>
                                    <span>Why Choose Us?</span>
                                </div>
                                <ul className="who-hl-list">
                                    <li><i className="fa-solid fa-check-circle"></i> Certified Native Guides</li>
                                    <li><i className="fa-solid fa-check-circle"></i> 100% Transparent Costs</li>
                                    <li><i className="fa-solid fa-check-circle"></i> 24/7 On-Ground Support</li>
                                    <li><i className="fa-solid fa-check-circle"></i> Flexible Custom Plans</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .who-we-are-modern {
                    padding: 90px 5%;
                    background: linear-gradient(180deg, #ffffff 0%, #f8faf9 100%);
                    position: relative;
                }
                .who-container {
                    max-width: 1350px;
                    margin: 0 auto;
                }

                /* Header */
                .who-header-block {
                    text-align: center;
                    max-width: 850px;
                    margin: 0 auto 50px auto;
                }
                .who-badge-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 22px;
                    background: rgba(27, 163, 82, 0.08);
                    color: var(--primary-green, #1ba352);
                    border-radius: 100px;
                    font-size: 0.82rem;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    border: 1px solid rgba(27, 163, 82, 0.2);
                    margin-bottom: 20px;
                }
                .who-main-title {
                    font-size: clamp(2.2rem, 3.8vw, 3rem);
                    font-weight: 800;
                    color: #1a2332;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    letter-spacing: -0.02em;
                }
                .who-title-highlight {
                    background: linear-gradient(135deg, #1ba352 0%, #158a45 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .who-subtitle {
                    font-size: 1.08rem;
                    color: #555555;
                    line-height: 1.7;
                    margin: 0 auto;
                }

                /* Quick Stats Row */
                .who-stats-row {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    margin-bottom: 60px;
                }
                .who-stat-card {
                    background: #ffffff;
                    padding: 24px 20px;
                    border-radius: 20px;
                    text-align: center;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .who-stat-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 15px 35px rgba(27, 163, 82, 0.12);
                    border-color: rgba(27, 163, 82, 0.2);
                }
                .who-stat-number {
                    font-size: 2.2rem;
                    font-weight: 900;
                    color: #1ba352;
                    line-height: 1;
                    margin-bottom: 6px;
                }
                .who-stat-label {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #1a2332;
                }
                .who-stat-sub {
                    font-size: 0.78rem;
                    color: #888888;
                    margin-top: 2px;
                }

                /* Bento Grid Layout */
                .who-grid-layout {
                    display: grid;
                    grid-template-columns: 1.15fr 1fr;
                    gap: 45px;
                    align-items: stretch;
                }

                /* Pillars List */
                .who-pillars-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    margin-bottom: 35px;
                }
                .who-pillar-card {
                    background: #ffffff;
                    padding: 24px;
                    border-radius: 20px;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.02);
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }
                .who-pillar-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.07);
                    border-color: rgba(27, 163, 82, 0.25);
                }
                .who-pillar-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 15px;
                }
                .who-pillar-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background: rgba(27, 163, 82, 0.1);
                    color: #1ba352;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.25rem;
                }
                .who-pillar-tag {
                    font-size: 0.68rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    padding: 4px 10px;
                    border-radius: 100px;
                    background: #f1f5f3;
                    color: #4a4a4a;
                }
                .who-pillar-title {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #1a2332;
                    margin-bottom: 8px;
                }
                .who-pillar-desc {
                    font-size: 0.88rem;
                    color: #666666;
                    line-height: 1.6;
                    margin: 0;
                }

                /* Actions */
                .who-actions-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    flex-wrap: wrap;
                }
                .who-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 15px 32px;
                    background: #1a2332;
                    color: #ffffff;
                    border-radius: 500px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.92rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 25px rgba(26, 35, 50, 0.2);
                }
                .who-btn-primary:hover {
                    background: #253349;
                    transform: translateY(-2px);
                    box-shadow: 0 14px 30px rgba(26, 35, 50, 0.3);
                }
                .who-btn-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 15px 30px;
                    background: rgba(27, 163, 82, 0.1);
                    color: #1ba352;
                    border: 1px solid rgba(27, 163, 82, 0.25);
                    border-radius: 500px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.92rem;
                    transition: all 0.3s ease;
                }
                .who-btn-secondary:hover {
                    background: #1ba352;
                    color: #ffffff;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(27, 163, 82, 0.3);
                }

                /* Visual Side (Bento) */
                .who-visual-side {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                /* Apple / Netflix Cinematic Card Styling */
                .who-apple-card {
                    position: relative;
                    height: 400px;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
                    background: #0d121d;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                }
                .who-slide-item {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 0.8s ease-in-out;
                    z-index: 1;
                }
                .who-slide-item.active {
                    opacity: 1;
                    z-index: 2;
                }
                .who-bento-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 6s ease-out;
                }
                .who-slide-item.active .who-bento-img {
                    transform: scale(1.08);
                }
                .who-progress-bar-strip {
                    position: absolute;
                    top: 14px;
                    left: 20px;
                    right: 20px;
                    display: flex;
                    gap: 6px;
                    z-index: 12;
                }
                .who-progress-segment {
                    flex: 1;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.25);
                    border-radius: 10px;
                    overflow: hidden;
                    cursor: pointer;
                    backdrop-filter: blur(4px);
                    transition: background 0.3s ease;
                }
                .who-progress-segment.completed .who-progress-fill {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.85);
                }
                .who-progress-segment.active .who-progress-fill {
                    width: 100%;
                    background: linear-gradient(90deg, #25f482 0%, #1ba352 100%);
                    animation: appleProgressFill 4s linear forwards;
                }
                @keyframes appleProgressFill {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .who-apple-badge {
                    position: absolute;
                    top: 28px;
                    left: 20px;
                    background: rgba(10, 15, 25, 0.45);
                    backdrop-filter: blur(16px) saturate(180%);
                    -webkit-backdrop-filter: blur(16px) saturate(180%);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 6px 14px;
                    border-radius: 100px;
                    font-size: 0.68rem;
                    font-weight: 800;
                    letter-spacing: 1.2px;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    z-index: 11;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                }
                .who-badge-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #25f482;
                    box-shadow: 0 0 10px #25f482;
                }
                .who-slide-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(0, 0, 0, 0.4);
                    backdrop-filter: blur(6px);
                    color: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    opacity: 0;
                    transition: all 0.3s ease;
                    z-index: 12;
                    font-size: 0.85rem;
                }
                .who-apple-card:hover .who-slide-nav {
                    opacity: 1;
                }
                .who-nav-prev {
                    left: 15px;
                }
                .who-nav-next {
                    right: 15px;
                }
                .who-slide-nav:hover {
                    background: #1ba352;
                    border-color: #1ba352;
                }
                .who-apple-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 50px 24px 22px 24px;
                    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(5,9,16,0.5) 35%, rgba(5,9,16,0.95) 100%);
                    color: #ffffff;
                    z-index: 10;
                    pointer-events: auto;
                    animation: appleTextUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                @keyframes appleTextUp {
                    0% {
                        opacity: 0;
                        transform: translateY(12px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .who-apple-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.72rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1.8px;
                    background: linear-gradient(135deg, #25f482 0%, #1ba352 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 6px;
                    animation: appleSmoothTag 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
                }
                .who-apple-tag i {
                    color: #25f482;
                    -webkit-text-fill-color: initial;
                }
                .who-apple-title {
                    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif;
                    font-size: 1.45rem;
                    font-weight: 800;
                    line-height: 1.2;
                    margin: 0 0 6px 0;
                    color: #ffffff;
                    letter-spacing: -0.02em;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
                    animation: appleSmoothTitle 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
                }
                .who-apple-desc {
                    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", sans-serif;
                    font-size: 0.85rem;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.9);
                    line-height: 1.45;
                    margin: 0;
                    max-width: 95%;
                    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.7);
                    animation: appleSmoothDesc 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;
                }

                @keyframes appleSmoothTag {
                    0% {
                        opacity: 0;
                        transform: translateY(8px);
                        filter: blur(2px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                        filter: blur(0px);
                    }
                }
                @keyframes appleSmoothTitle {
                    0% {
                        opacity: 0;
                        transform: translateY(14px);
                        filter: blur(4px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                        filter: blur(0px);
                    }
                }
                @keyframes appleSmoothDesc {
                    0% {
                        opacity: 0;
                        transform: translateY(18px);
                        filter: blur(4px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                        filter: blur(0px);
                    }
                }
                .who-overlay-tag {
                    font-size: 0.72rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #1ba352;
                    margin-bottom: 6px;
                }
                .who-bento-overlay h3 {
                    font-size: 1.35rem;
                    font-weight: 700;
                    margin-bottom: 6px;
                    color: #ffffff;
                }
                .who-bento-overlay p {
                    font-size: 0.88rem;
                    opacity: 0.85;
                    line-height: 1.5;
                    margin: 0;
                }

                .who-bento-subgrid {
                    display: grid;
                    grid-template-columns: 1.1fr 1fr;
                    gap: 20px;
                }
                .who-bento-small {
                    position: relative;
                    height: 220px;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
                }
                .who-small-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 20px;
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
                    color: #ffffff;
                }
                .who-small-badge {
                    font-size: 0.7rem;
                    font-weight: 800;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(8px);
                    padding: 3px 8px;
                    border-radius: 6px;
                    display: inline-block;
                    margin-bottom: 6px;
                }
                .who-small-overlay h4 {
                    font-size: 1.05rem;
                    font-weight: 700;
                    margin: 0;
                    color: #ffffff;
                }

                .who-bento-highlight-card {
                    background: #1a2332;
                    color: #ffffff;
                    padding: 24px;
                    border-radius: 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    box-shadow: 0 15px 35px rgba(26, 35, 50, 0.25);
                }
                .who-hl-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.95rem;
                    font-weight: 800;
                    color: #1ba352;
                    margin-bottom: 16px;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }
                .who-hl-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .who-hl-list li {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.9);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .who-hl-list li i {
                    color: #1ba352;
                    font-size: 0.85rem;
                }

                /* Responsive Styles */
                @media (max-width: 1024px) {
                    .who-grid-layout {
                        grid-template-columns: 1fr;
                    }
                    .who-stats-row {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 640px) {
                    .who-pillars-grid {
                        grid-template-columns: 1fr;
                    }
                    .who-bento-subgrid {
                        grid-template-columns: 1fr;
                    }
                    .who-stats-row {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 12px;
                    }
                    .who-stat-number {
                        font-size: 1.8rem;
                    }
                    .who-we-are-modern {
                        padding: 60px 4%;
                    }
                }
            `}} />
        </section>
    );
};

export default WhoWeAre;
