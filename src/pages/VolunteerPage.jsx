import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import puppyImg from '../assets/dominican puppy.jpg';
import effortImg from '../assets/This Moment Shows Effort Beyond Words.webp';
import hihiImg from '../assets/hihi.webp';
import impactJourneyImg from '../assets/WhatsApp Image 2026-05-20 at 11.50.00.jpeg';
import VolunteerOpportunities from '../components/VolunteerOpportunities';

const VolunteerPage = () => {
    const testimonials = [
        {
            quote: "This wasn't just a trip; it was a transformation. Seeing the local communities thrive and being part of the wildlife conservation made me realize the power of small actions.",
            author: "Emma Mitchell",
            location: "Volunteer from London, UK",
            initials: "EM",
            image: puppyImg
        },
        {
            quote: "This moment showed me that some efforts go beyond words. Seeing the tangible impact of our work was incredibly rewarding.",
            author: "Elena Rossi",
            location: "Volunteer from Rome, Italy",
            initials: "ER",
            image: effortImg
        },
        {
            quote: "The connections I made with the local community will stay with me forever. Every smile made the hard work worth it.",
            author: "Yuki Tanaka",
            location: "Volunteer from Tokyo, Japan",
            initials: "YT",
            image: hihiImg
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                setIsFading(false);
            }, 600);
        }, 6000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="volunteer-page">
            <style>
                {`
                .volunteer-page {
                    background: #fff;
                    overflow-x: hidden;
                }
                
                .volunteer-hero {
                    height: 75vh;
                    min-height: 500px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${effortImg}) no-repeat center/cover;
                    margin-bottom: 80px;
                }

                .hero-content {
                    max-width: 1000px;
                    padding: 0 25px;
                    z-index: 2;
                }

                .hero-tag {
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    font-size: 0.85rem;
                    font-weight: 800;
                    background: var(--primary-green);
                    padding: 10px 30px;
                    border-radius: 100px;
                    display: inline-block;
                    margin-bottom: 30px;
                    box-shadow: 0 10px 20px rgba(29, 185, 84, 0.3);
                }

                .hero-title {
                    font-size: clamp(2.8rem, 8vw, 5rem);
                    font-weight: 900;
                    letter-spacing: -0.04em;
                    line-height: 1.05;
                    margin: 0;
                }

                .hero-desc {
                    font-size: clamp(1.1rem, 3vw, 1.4rem);
                    margin-top: 30px;
                    opacity: 0.95;
                    line-height: 1.6;
                    font-weight: 400;
                    max-width: 750px;
                    margin: 30px auto 0;
                }

                .volunteer-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 5% 120px;
                }

                .section-intro {
                    margin-bottom: 120px;
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 60px;
                    align-items: center;
                }

                .intro-title {
                    font-size: clamp(2.2rem, 5vw, 3.5rem);
                    font-weight: 900;
                    letter-spacing: -0.04em;
                    line-height: 1.1;
                    color: #111;
                }

                .intro-text {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: #444;
                }

                .focus-areas-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    margin-bottom: 120px;
                }

                .focus-card {
                    background: #fcfcfc;
                    padding: 50px;
                    border-radius: 40px;
                    border: 1px solid #f0f0f0;
                    transition: all 0.4s ease;
                }

                .focus-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.05);
                    border-color: var(--primary-green);
                }

                .locations-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-bottom: 120px;
                }

                .location-card {
                    background: #fff;
                    padding: 50px;
                    border-radius: 40px;
                    border: 1px solid #eee;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s ease;
                }

                .location-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 6px;
                    height: 100%;
                    background: var(--primary-green);
                    opacity: 0;
                    transition: 0.3s;
                }

                .location-card:hover::before {
                    opacity: 1;
                }

                .features-section {
                    background: #f8fafc;
                    padding: 120px 5%;
                    border-radius: 60px;
                    margin-bottom: 120px;
                    position: relative;
                    overflow: hidden;
                }
                
                .features-section::before {
                    content: '';
                    position: absolute;
                    top: -100px;
                    right: -100px;
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, rgba(29, 185, 84, 0.05) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 30px;
                }

                .feature-item {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    padding: 40px 30px;
                    border-radius: 32px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .feature-item:hover {
                    transform: translateY(-12px);
                    background: #fff;
                    box-shadow: 0 25px 50px rgba(0,0,0,0.08);
                    border-color: rgba(29, 185, 84, 0.2);
                }

                .feature-icon-container {
                    width: 70px;
                    height: 70px;
                    background: white;
                    color: #111;
                    border-radius: 22px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.8rem;
                    margin-bottom: 25px;
                    transition: all 0.5s ease;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                    position: relative;
                }

                .feature-item:hover .feature-icon-container {
                    transform: rotate(10deg);
                    background: var(--primary-green);
                    color: white;
                    box-shadow: 0 15px 30px rgba(29, 185, 84, 0.3);
                }

                .feature-title {
                    font-size: 1.35rem;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 15px;
                    letter-spacing: -0.02em;
                }

                .feature-desc {
                    font-size: 0.95rem;
                    line-height: 1.7;
                    color: #64748b;
                    margin: 0;
                }

                /* Journey Steps */
                .testimonial-slider {
                    background: #fff;
                    border-radius: 50px;
                    overflow: hidden;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    min-height: 550px;
                    box-shadow: 0 40px 100px rgba(0,0,0,0.08);
                    margin-bottom: 120px;
                }

                .testimonial-img {
                    min-height: 100%;
                    background-position: center !important;
                    background-repeat: no-repeat !important;
                    background-size: cover !important;
                    transition: all 0.8s ease;
                }

                .testimonial-content {
                    padding: 60px 80px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background: linear-gradient(135deg, #1DB954 0%, #0a2e1a 100%);
                    color: white;
                    position: relative;
                }

                .journey-steps {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    margin-bottom: 120px;
                }

                    @media (max-width: 1024px) {
                    .section-intro, .focus-areas-grid, .locations-grid, .journey-steps {
                        grid-template-columns: 1fr !important;
                    }

                    .features-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    
                    .volunteer-hero {
                        height: 60vh;
                        margin-bottom: 60px;
                    }

                    .volunteer-container {
                        padding-bottom: 80px;
                    }

                    .section-intro {
                        gap: 30px;
                        margin-bottom: 80px;
                        text-align: center;
                    }

                    .focus-card, .location-card {
                        padding: 35px 25px;
                    }

                    .features-section {
                        padding: 60px 25px;
                        border-radius: 40px;
                    }

                    .testimonial-slider {
                        grid-template-columns: 1fr !important;
                        min-height: auto;
                        border-radius: 35px;
                        margin-bottom: 80px;
                    }
                    
                    .testimonial-img {
                        height: 300px;
                        min-height: 300px;
                    }

                    .testimonial-content {
                        padding: 45px 30px !important;
                    }
                    
                    .hero-title {
                        font-size: 3.2rem;
                    }
                }

                /* Your Impact Journey Asymmetric Grid */
                .journey-grid-container {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 40px;
                    margin-bottom: 120px;
                }

                .journey-big-card {
                    position: relative;
                    border-radius: 40px;
                    overflow: hidden;
                    height: 480px;
                    background: url(${impactJourneyImg}) no-repeat center/cover;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 50px;
                    box-shadow: 0 25px 60px rgba(0,0,0,0.15);
                }

                .journey-big-card-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%);
                    z-index: 1;
                }

                .journey-big-card-content {
                    position: relative;
                    z-index: 2;
                    color: white;
                }

                .journey-quote {
                    font-size: 1.6rem;
                    font-weight: 700;
                    font-style: italic;
                    line-height: 1.5;
                    margin-bottom: 25px;
                    letter-spacing: -0.01em;
                }

                .journey-quote-author {
                    font-size: 0.85rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--primary-green);
                }

                .journey-steps-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                }

                .journey-step-card {
                    background: #f8fafc;
                    border: 1px solid #f1f5f9;
                    padding: 35px 25px;
                    border-radius: 30px;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 200px;
                }

                .journey-step-card:hover {
                    transform: translateY(-8px);
                    background: white;
                    border-color: rgba(29, 185, 84, 0.25);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.06);
                }

                .journey-step-number {
                    font-size: 2.2rem;
                    font-weight: 900;
                    color: rgba(29, 185, 84, 0.15);
                    line-height: 1;
                }

                .journey-step-card:hover .journey-step-number {
                    color: var(--primary-green);
                    transform: scale(1.05);
                    transition: all 0.3s ease;
                }

                .journey-step-title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #111;
                    margin: 0;
                    line-height: 1.3;
                }

                @media (max-width: 1024px) {
                    .journey-grid-container {
                        grid-template-columns: 1fr !important;
                        gap: 30px;
                    }
                    .journey-big-card {
                        height: 400px;
                        padding: 35px;
                    }
                    .journey-quote {
                        font-size: 1.35rem;
                    }
                }

                @media (max-width: 600px) {
                    .journey-steps-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px;
                    }
                }
                `}
            </style>

            {/* Hero Section */}
            <section className="volunteer-hero">
                <div className="hero-content">
                    <span className="hero-tag">Give Back to the Island</span>
                    <h1 className="hero-title">
                        Volunteer <br/> Experiences<span style={{ color: 'var(--primary-green)' }}>.</span>
                    </h1>
                    <p className="hero-desc">
                        Join our mission to empower local communities through education, sustainable development, and hands-on support.
                    </p>
                </div>
            </section>

            <div className="volunteer-container">
                {/* Introduction */}
                <section className="section-intro">
                    <h2 className="intro-title">Make a Lasting Impact</h2>
                    <div className="intro-text">
                        <p style={{ marginBottom: '20px' }}>
                            Volunteering in Sri Lanka is a journey of the heart. At Give Back Journey, we connect passionate travelers with meaningful projects that address the island's most pressing needs.
                        </p>
                        <p>
                            Whether you're teaching English to enthusiastic students, supporting woman empowerment initiatives, or providing care for those with special needs, your contribution creates a ripple effect of positive change.
                        </p>
                    </div>
                </section>

                {/* Experience Focus Areas */}
                <div className="focus-areas-grid">
                    <div className="focus-card">
                        <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '20px', color: 'var(--primary-green)' }}>Zen & Temple Service</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555', marginBottom: '25px' }}>
                            Experience the spiritual heart of Sri Lanka. Join local monks in temple maintenance, learn meditation, and help preserve ancient heritage.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {["Meditation", "Temple Care", "Buddhist Arts"].map((item, i) => (
                                <span key={i} style={{ background: '#f0fdf4', color: '#166534', padding: '8px 18px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700 }}>{item}</span>
                            ))}
                        </div>
                    </div>

                    <div className="focus-card">
                        <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '20px', color: '#111' }}>Education & Childcare</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555', marginBottom: '25px' }}>
                            Make a direct impact in rural village preschools and special needs centers. Assist with English teaching, creative play, and basic therapy.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {["Rural Teaching", "Special Needs", "School Support"].map((item, i) => (
                                <span key={i} style={{ background: '#f8f9fa', color: '#475569', padding: '8px 18px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700 }}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Project Locations */}
                <section style={{ marginBottom: '120px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 900 }}>Where You’ll Make an Impact</h2>
                    </div>
                    <div className="locations-grid">
                        <div className="location-card">
                            <h4 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px' }}>Kandy District</h4>
                            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '20px' }}>Nestled in the lush hill country, focus on community development and English education in rural schools.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {["Hill Country", "Education", "Rural Villages"].map((tag, i) => (
                                    <span key={i} style={{ fontSize: '0.75rem', fontWeight: 800, background: '#f0f0f0', padding: '6px 15px', borderRadius: '50px' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="location-card">
                            <h4 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px', color: 'var(--primary-green)' }}>Galle District</h4>
                            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '20px' }}>Along the historic southern coast, focus on environmental initiatives and woman empowerment programs.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {["Coastal Region", "Environment", "Empowerment"].map((tag, i) => (
                                    <span key={i} style={{ fontSize: '0.75rem', fontWeight: 800, background: '#f0f0f0', padding: '6px 15px', borderRadius: '50px' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="features-section">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Experience Excellence</span>
                        <h3 style={{ fontSize: '3rem', fontWeight: 900, marginTop: '10px', color: '#111', letterSpacing: '-0.03em' }}>Program Features</h3>
                    </div>
                    <div className="features-grid">
                        {[
                            { title: "Project Training", icon: "fa-chalkboard-user", desc: "Comprehensive orientation and hands-on skill training before you start." },
                            { title: "Local Coordinator", icon: "fa-user-group", desc: "24/7 dedicated support from our experienced on-site leaders." },
                            { title: "Shared Living", icon: "fa-house-chimney", desc: "Safe, comfortable accommodation in volunteer houses or host families." },
                            { title: "Impact Certificate", icon: "fa-certificate", desc: "Official recognition of your volunteer hours and community contributions." }
                        ].map((item, i) => (
                            <div key={i} className="feature-item">
                                <div className="feature-icon-container">
                                    <i className={`fa-solid ${item.icon}`}></i>
                                </div>
                                <h4 className="feature-title">{item.title}</h4>
                                <p className="feature-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Volunteer Opportunities */}
                <VolunteerOpportunities />

                {/* Journey Steps */}
                <section style={{ margin: '120px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>The Path of Giving Back</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginTop: '10px' }}>Your Impact Journey</h2>
                    </div>
                    <div className="journey-grid-container">
                        {/* Big card with background image and quote */}
                        <div className="journey-big-card">
                            <div className="journey-big-card-overlay"></div>
                            <div className="journey-big-card-content">
                                <i className="fa-solid fa-quote-left" style={{ fontSize: '2rem', color: 'var(--primary-green)', opacity: 0.8, marginBottom: '15px', display: 'block' }}></i>
                                <blockquote className="journey-quote">
                                    "This journey isn't just about the places you visit, but the lives you touch and the legacy of kindness you leave behind."
                                </blockquote>
                                <cite className="journey-quote-author">— Give Back Journey</cite>
                            </div>
                        </div>

                        {/* Step cards */}
                        <div className="journey-steps-grid">
                            {[
                                { step: "01", title: "Apply Online" },
                                { step: "02", title: "Personal Chat" },
                                { step: "03", title: "Preparation" },
                                { step: "04", title: "Arrive & Act" }
                            ].map((item, i) => (
                                <div key={i} className="journey-step-card">
                                    <div className="journey-step-number">STEP {item.step}</div>
                                    <h4 className="journey-step-title">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial Slider */}
                <section className="testimonial-slider">
                    <div 
                        className="testimonial-img"
                        style={{ 
                            background: `url(${testimonials[currentIndex].image})`,
                            opacity: isFading ? 0.7 : 1,
                            transform: isFading ? 'scale(1.05)' : 'scale(1)'
                        }}
                    ></div>
                    <div className="testimonial-content">
                        <div style={{ transition: '0.6s ease', opacity: isFading ? 0 : 1 }}>
                            <i className="fa-solid fa-quote-left" style={{ fontSize: '2.5rem', opacity: 0.3, marginBottom: '20px' }}></i>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '30px', lineHeight: 1.4 }}>"{testimonials[currentIndex].quote}"</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <p style={{ fontWeight: 800, margin: 0 }}>{testimonials[currentIndex].author}</p>
                                    <p style={{ opacity: 0.7, margin: 0 }}>{testimonials[currentIndex].location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '30px' }}>Ready to Make a Difference?</h2>
                    <Link to="/volunteer-inquiry" className="btn-modern" style={{ 
                        padding: '20px 60px', 
                        background: 'var(--primary-green)', 
                        color: 'white', 
                        borderRadius: '100px',
                        fontWeight: 900,
                        fontSize: '1.1rem',
                        textDecoration: 'none',
                        display: 'inline-block',
                        boxShadow: '0 15px 35px rgba(29, 185, 84, 0.3)'
                    }}>
                        Apply to Volunteer
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VolunteerPage;
