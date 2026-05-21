import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import puppyImg from '../assets/dominican puppy.jpg';
import effortImg from '../assets/This Moment Shows Effort Beyond Words.webp';
import hihiImg from '../assets/hihi.webp';
import impactJourneyImg from '../assets/WhatsApp Image 2026-05-20 at 11.50.00.jpeg';
import VolunteerOpportunities from '../components/VolunteerOpportunities';
import { useCurrency } from '../context/CurrencyContext';

const pricingPrograms = [
    {
        name: "Breathe Sri Lanka",
        price: 1155,
        duration: "27 Days",
        location: "Kandy & Coast",
        housing: "Shared Rooms",
        meals: "3 Daily",
        pickup: "Included",
        support: "24/7 Support",
        id: "real-sri-lanka-experience",
        color: "#1DB954"
    },
    {
        name: "Teaching Volunteer Program",
        price: 220,
        duration: "1-24 Weeks",
        location: "Kandy District",
        housing: "Shared / Private Upgrade",
        meals: "3 Daily",
        pickup: "Included",
        support: "24/7 Support",
        id: "sri-lanka-childcare",
        color: "#111"
    },
    {
        name: "Special Needs Support",
        price: 220,
        duration: "1-8 Weeks",
        location: "Kandy District",
        housing: "Shared / Private Upgrade",
        meals: "3 Daily",
        pickup: "Included",
        support: "24/7 Support",
        id: "special-needs-support",
        color: "#475569"
    },
    {
        name: "Construction & Renovation",
        price: 250,
        duration: "1-4 Weeks",
        location: "Kandy District",
        housing: "Shared / Private",
        meals: "3 Daily",
        pickup: "Included",
        support: "24/7 Support",
        id: "village-school-renovation",
        color: "#f6ad55"
    },
    {
        name: "Sri Lanka Dog Volunteers",
        price: 200,
        duration: "1-24 Weeks",
        location: "Galle District",
        housing: "Shared or Private",
        meals: "3 Daily",
        pickup: "Included",
        support: "24/7 Support",
        id: "sri-lanka-dog-rescue",
        color: "#ffd93d"
    },
    {
        name: "Zen & Temple Yoga",
        price: 280,
        duration: "1-4 Weeks",
        location: "Kandy District",
        housing: "Shared / Private",
        meals: "3 Daily",
        pickup: "Included",
        support: "24/7 Support",
        id: "zen-and-temple-yoga",
        color: "#9b59b6"
    },
    {
        name: "Medical Volunteer Program",
        price: 350,
        duration: "1-4 Weeks",
        location: "Kandy District",
        housing: "Shared / Private Upgrade",
        meals: "3 Daily",
        pickup: "Included",
        support: "24/7 Support",
        id: "medical-volunteer",
        color: "#e74c3c"
    }
];

const programWeeklyRates = {
    "real-sri-lanka-experience": {
        fixed: true,
        total: 1155,
        weeks: 4,
        note: "Fixed 27-day trip"
    },
    "sri-lanka-childcare": {
        baseWeeks: 1,
        basePrice: 220,
        extraWeekPrice: 100
    },
    "special-needs-support": {
        baseWeeks: 1,
        basePrice: 220,
        extraWeekPrice: 100
    },
    "village-school-renovation": {
        baseWeeks: 1,
        basePrice: 250,
        extraWeekPrice: 120
    },
    "sri-lanka-dog-rescue": {
        baseWeeks: 1,
        basePrice: 200,
        extraWeekPrice: 100
    },
    "zen-and-temple-yoga": {
        baseWeeks: 1,
        basePrice: 280,
        extraWeekPrice: 120
    },
    "medical-volunteer": {
        baseWeeks: 1,
        basePrice: 350,
        extraWeekPrice: 150
    }
};

const getProgramPriceDetails = (progId, weeks) => {
    const rate = programWeeklyRates[progId];
    if (!rate) return { total: 0, average: 0, isMinLimit: false };

    if (rate.fixed) {
        return {
            total: rate.total,
            average: Math.round(rate.total / rate.weeks),
            isFixed: true
        };
    }

    const isMinLimit = weeks < rate.baseWeeks;
    const actualWeeks = isMinLimit ? rate.baseWeeks : weeks;
    const total = rate.basePrice + (actualWeeks - rate.baseWeeks) * rate.extraWeekPrice;
    const average = Math.round(total / weeks);

    const baseAverage = Math.round(rate.basePrice / rate.baseWeeks);
    const savingPercent = average < baseAverage ? Math.round(((baseAverage - average) / baseAverage) * 100) : 0;

    return {
        total,
        average,
        isMinLimit,
        minWeeks: rate.baseWeeks,
        savingPercent
    };
};

const VolunteerPage = () => {
    const { formatPrice } = useCurrency();
    const [selectedWeeks, setSelectedWeeks] = useState(2);
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
                    margin-bottom: 80px;
                    text-align: center;
                    max-width: 720px;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 0 20px;
                }

                .intro-title {
                    font-size: clamp(1.5rem, 3vw, 2rem);
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    line-height: 1.3;
                    color: #1d1d1f;
                    margin-bottom: 18px;
                }

                .intro-text {
                    font-size: 1.05rem;
                    line-height: 1.75;
                    color: #6e6e73;
                    font-weight: 400;
                }

                .focus-areas-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-bottom: 100px;
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
                    .focus-areas-grid, .locations-grid, .journey-steps {
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
                        margin-bottom: 60px;
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
                .journey-timeline {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0;
                    position: relative;
                    margin-bottom: 100px;
                    padding: 0 10px;
                }

                .journey-timeline::before {
                    content: '';
                    position: absolute;
                    top: 36px;
                    left: calc(12.5% + 10px);
                    right: calc(12.5% + 10px);
                    height: 2px;
                    background: linear-gradient(90deg, var(--primary-green), #dcfce7);
                    z-index: 0;
                }

                .journey-step {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: 0 16px;
                    position: relative;
                    z-index: 1;
                }

                .journey-step-icon {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: #f8fdf9;
                    border: 1.5px solid #d1fae5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 32px;
                    box-shadow: 0 4px 20px rgba(29,185,84,0.08);
                    transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
                }

                .journey-step-icon i {
                    font-size: 1.5rem;
                    color: var(--primary-green);
                    transition: all 0.3s ease;
                }

                .journey-step:hover .journey-step-icon {
                    background: var(--primary-green);
                    border-color: var(--primary-green);
                    transform: translateY(-6px);
                    box-shadow: 0 20px 40px rgba(29,185,84,0.2);
                }

                .journey-step:hover .journey-step-icon i {
                    color: white;
                }

                .journey-step-tag {
                    display: inline-block;
                    padding: 4px 14px;
                    border-radius: 100px;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    margin-bottom: 14px;
                }

                .journey-step-title {
                    font-size: 1.05rem;
                    font-weight: 800;
                    color: #1d1d1f;
                    margin-bottom: 12px;
                    letter-spacing: -0.02em;
                }

                .journey-step-desc {
                    font-size: 0.85rem;
                    line-height: 1.65;
                    color: #6e6e73;
                    font-weight: 400;
                }

                @media (max-width: 1024px) {
                    .journey-timeline {
                        grid-template-columns: 1fr 1fr;
                        gap: 40px;
                    }
                    .journey-timeline::before {
                        display: none;
                    }
                }

                @media (max-width: 600px) {
                    .journey-timeline {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }
                }

                @media (max-width: 768px) {
                    .pricing-info-boxes {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                        padding: 25px !important;
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
                    <h2 className="intro-title">Making a Lasting Impact.</h2>
                    <div className="intro-text">
                        <p style={{ marginBottom: '16px' }}>
                            Volunteering in Sri Lanka is a journey of the heart. At Giveback Journey, we connect passionate travelers with meaningful projects that address the island's most pressing needs.
                        </p>
                        <p>
                            Whether you're teaching English to enthusiastic students, supporting women's empowerment initiatives, or providing care for those with special needs, your contribution creates a ripple effect of positive change.
                        </p>
                    </div>
                </section>

                {/* Experience Focus Areas */}
                <div className="focus-areas-grid">
                    <div className="focus-card">
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', color: 'var(--primary-green)', letterSpacing: '-0.02em' }}>Construction &amp; Community</h3>
                        <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#6e6e73', marginBottom: '25px' }}>
                            Help rebuild and beautify community spaces — from rural schools and temples to community halls — giving local families spaces they can be proud of.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {["Painting & Repairs", "School Rebuilding", "Community Spaces"].map((item, i) => (
                                <span key={i} style={{ background: '#f0fdf4', color: '#166534', padding: '7px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700 }}>{item}</span>
                            ))}
                        </div>
                    </div>

                    <div className="focus-card">
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', color: '#111', letterSpacing: '-0.02em' }}>Education &amp; Childcare</h3>
                        <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#6e6e73', marginBottom: '25px' }}>
                            Make a direct impact in rural village preschools and special needs centers. Assist with English teaching, creative play, and basic therapy.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {["Rural Teaching", "Special Needs", "School Support"].map((item, i) => (
                                <span key={i} style={{ background: '#f8f9fa', color: '#475569', padding: '7px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700 }}>{item}</span>
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
                <VolunteerOpportunities />                {/* Pricing Table Section */}
                <section id="pricing" style={{ margin: '120px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Transparent Pricing</span>
                        <h2 style={{ fontSize: '3.2rem', fontWeight: 900, marginTop: '10px', letterSpacing: '-0.04em' }}>Program Fees & Comparison</h2>
                        <p style={{ color: '#666', fontSize: '1.15rem', marginTop: '15px', maxWidth: '600px', margin: '15px auto 0', lineHeight: 1.6 }}>
                            Compare fees, durations, and inclusions across all volunteer programs. We believe in complete financial transparency.
                        </p>
                    </div>

                    {/* Duration Selector */}
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        gap: '15px', 
                        marginBottom: '40px' 
                    }}>
                        <span style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.95rem' }}>Select Stay Duration:</span>
                        <div style={{ 
                            background: '#f1f5f9', 
                            padding: '6px', 
                            borderRadius: '100px', 
                            display: 'flex',
                            gap: '4px',
                            border: '1px solid #e2e8f0'
                        }}>
                            {[1, 2, 3, 4].map((wk) => (
                                <button
                                    key={wk}
                                    onClick={() => setSelectedWeeks(wk)}
                                    style={{
                                        border: 'none',
                                        background: selectedWeeks === wk ? 'var(--primary-green)' : 'transparent',
                                        color: selectedWeeks === wk ? 'white' : '#64748b',
                                        padding: '10px 24px',
                                        borderRadius: '100px',
                                        fontSize: '0.85rem',
                                        fontWeight: 800,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: selectedWeeks === wk ? '0 4px 10px rgba(29, 185, 84, 0.25)' : 'none'
                                    }}
                                    className="duration-toggle-btn"
                                >
                                    {wk} {wk === 1 ? 'Week' : 'Weeks'}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={{ overflowX: 'auto', background: '#fff', borderRadius: '32px', boxShadow: '0 25px 70px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '950px' }}>
                            <thead>
                                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #edf2f7' }}>
                                    <th style={{ padding: '24px 30px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.5px' }}>Program</th>
                                    <th style={{ padding: '24px 20px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.5px' }}>Total Price</th>
                                    <th style={{ padding: '24px 20px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.5px' }}>Weekly Average</th>
                                    <th style={{ padding: '24px 20px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.5px' }}>Duration</th>
                                    <th style={{ padding: '24px 20px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.5px' }}>Location</th>
                                    <th style={{ padding: '24px 20px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.5px' }}>Meals & Housing</th>
                                    <th style={{ padding: '24px 20px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.5px' }}>Airport Pickup</th>
                                    <th style={{ padding: '24px 30px', textAlign: 'right' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingPrograms.map((prog, index) => {
                                    const details = getProgramPriceDetails(prog.id, selectedWeeks);
                                    return (
                                        <tr 
                                            key={index} 
                                            className="pricing-row"
                                            style={{ 
                                                borderBottom: index === pricingPrograms.length - 1 ? 'none' : '1px solid #f1f5f9',
                                                transition: 'all 0.2s ease'
                                            }}
                                        >
                                            <td style={{ padding: '26px 30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: prog.color }}></div>
                                                <div>
                                                    <span style={{ fontWeight: 800, fontSize: '1rem', color: '#1e293b', display: 'block' }}>{prog.name}</span>
                                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>{prog.support}</span>
                                                </div>
                                            </td>
                                            <td style={{ padding: '26px 20px' }}>
                                                <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', display: 'block' }}>
                                                    {formatPrice(details.total)}
                                                </span>
                                                {details.isMinLimit && (
                                                    <span style={{ fontSize: '0.65rem', color: '#ea580c', fontWeight: 700, background: '#fff7ed', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', marginTop: '4px' }}>
                                                        {details.minWeeks} Wk Min. Commit
                                                    </span>
                                                )}
                                            </td>
                                            <td style={{ padding: '26px 20px' }}>
                                                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', display: 'block' }}>
                                                    {formatPrice(details.average)}
                                                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>/wk</span>
                                                </span>
                                                {details.savingPercent > 0 && (
                                                    <span style={{ fontSize: '0.65rem', color: '#166534', fontWeight: 700, background: '#dcfce7', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', marginTop: '4px' }}>
                                                        Save {details.savingPercent}%/wk
                                                    </span>
                                                )}
                                            </td>
                                            <td style={{ padding: '26px 20px', fontSize: '0.9rem', fontWeight: 700, color: '#475569' }}>
                                                {details.isFixed ? "27 Days (Fixed)" : `${selectedWeeks} ${selectedWeeks === 1 ? 'Week' : 'Weeks'}`}
                                            </td>
                                            <td style={{ padding: '26px 20px', fontSize: '0.9rem', fontWeight: 700, color: '#475569' }}>
                                                {prog.location}
                                            </td>
                                            <td style={{ padding: '26px 20px' }}>
                                                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', display: 'block' }}>{prog.meals}</span>
                                                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>{prog.housing}</span>
                                            </td>
                                            <td style={{ padding: '26px 20px' }}>
                                                <span style={{ 
                                                    fontSize: '0.75rem', 
                                                    fontWeight: 800, 
                                                    color: prog.pickup === 'Included' ? '#166534' : '#991b1b',
                                                    background: prog.pickup === 'Included' ? '#f0fdf4' : '#fef2f2',
                                                    padding: '6px 14px',
                                                    borderRadius: '100px',
                                                    display: 'inline-block'
                                                }}>
                                                    {prog.pickup}
                                                </span>
                                            </td>
                                            <td style={{ padding: '26px 30px', textAlign: 'right' }}>
                                                <Link 
                                                    to={`/volunteer-program/${prog.id}`} 
                                                    className="table-btn"
                                                    style={{ 
                                                        padding: '10px 20px', 
                                                        background: '#f1f5f9', 
                                                        color: '#334155', 
                                                        borderRadius: '12px', 
                                                        fontWeight: 800, 
                                                        fontSize: '0.85rem', 
                                                        textDecoration: 'none',
                                                        display: 'inline-block',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                >
                                                    Details
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <style dangerouslySetInnerHTML={{ __html: `
                        .pricing-row:hover {
                            background-color: #f8fafc;
                        }
                        .table-btn:hover {
                            background-color: var(--primary-green) !important;
                            color: white !important;
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(29, 185, 84, 0.2);
                        }
                    `}} />

                    {/* What's Included details */}
                    <div style={{ 
                        marginTop: '40px', 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '30px',
                        padding: '40px',
                        background: '#f8fafc',
                        borderRadius: '30px',
                        border: '1px solid #f1f5f9'
                    }} className="pricing-info-boxes">
                        <div>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '20px', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <i className="fa-solid fa-circle-check" style={{ color: 'var(--primary-green)' }}></i> Included in Your Fee
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '14px' }}>
                                {[
                                    "Airport Arrival Pickup",
                                    "Clean, Safe Accommodation",
                                    "3 Fresh Local Meals Daily",
                                    "24/7 In-Country Support",
                                    "Program Orientation",
                                    "Hands-on Project Training",
                                    "Local Project Transportation",
                                    "Official Impact Certificate"
                                ].map((inc, i) => (
                                    <li key={i} style={{ fontSize: '0.88rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                                        <i className="fa-solid fa-check" style={{ color: 'var(--primary-green)', fontSize: '0.85rem' }}></i> {inc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '20px', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <i className="fa-solid fa-circle-xmark" style={{ color: '#94a3b8' }}></i> Not Included
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                {[
                                    "International Flights",
                                    "Sri Lankan Travel Visa",
                                    "Personal Travel Insurance",
                                    "Return Airport Transfer",
                                    "Daily Personal Expenses",
                                    "Weekend Excursion Budgets"
                                ].map((exc, i) => (
                                    <li key={i} style={{ fontSize: '0.88rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                                        <i className="fa-solid fa-xmark" style={{ color: '#cbd5e1', fontSize: '0.85rem' }}></i> {exc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Journey Steps */}
                <section style={{ margin: '120px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem' }}>How It Works</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: '12px', letterSpacing: '-0.04em', color: '#1d1d1f' }}>Your Impact Journey</h2>
                        <p style={{ color: '#6e6e73', fontSize: '1.05rem', marginTop: '16px', maxWidth: '560px', margin: '16px auto 0', lineHeight: 1.65 }}>
                            From your first inquiry to your last day on the ground — here's how we make it seamless.
                        </p>
                    </div>

                    <div className="journey-timeline">
                        {[
                            {
                                icon: 'fa-file-lines',
                                tag: 'Application',
                                tagColor: '#166534',
                                tagBg: '#dcfce7',
                                title: 'Apply Online',
                                desc: 'Fill out a short application. Tell us about yourself, your skills, and which program excites you most.'
                            },
                            {
                                icon: 'fa-comments',
                                tag: 'Discovery',
                                tagColor: '#1e40af',
                                tagBg: '#dbeafe',
                                title: 'Personal Chat',
                                desc: 'We schedule a friendly call to match you with the perfect program and answer every question you have.'
                            },
                            {
                                icon: 'fa-bag-shopping',
                                tag: 'Preparation',
                                tagColor: '#92400e',
                                tagBg: '#fef3c7',
                                title: 'Get Prepared',
                                desc: 'Receive your full pre-departure guide — flights, packing tips, cultural orientation, and a warm welcome pack.'
                            },
                            {
                                icon: 'fa-hand-holding-heart',
                                tag: 'Impact',
                                tagColor: '#7c3aed',
                                tagBg: '#ede9fe',
                                title: 'Arrive & Act',
                                desc: 'Land in Sri Lanka, meet your local team, and start creating real, lasting change from day one.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="journey-step">
                                <div className="journey-step-icon">
                                    <i className={`fa-solid ${item.icon}`}></i>
                                </div>
                                <span className="journey-step-tag" style={{ color: item.tagColor, background: item.tagBg }}>
                                    {item.tag}
                                </span>
                                <h4 className="journey-step-title">{item.title}</h4>
                                <p className="journey-step-desc">{item.desc}</p>
                            </div>
                        ))}
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
