import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import puppyImg from '../assets/dominican puppy.jpg';
import effortImg from '../assets/This Moment Shows Effort Beyond Words.webp';
import hihiImg from '../assets/hihi.webp';
import impactJourneyImg from '../assets/WhatsApp Image 2026-05-20 at 11.50.00.jpeg';
import VolunteerOpportunities from '../components/VolunteerOpportunities';
import { useCurrency } from '../context/CurrencyContext';

// Section assets
import constructionImg from '../assets/teaching volunteers/IMG_2991.jpg';
import educationImg from '../assets/teaching_english_preschool_sri_lanka_1778936461399.png';
import kandyImg from '../assets/tea_plantation.png';
import galleImg from '../assets/Galle Fort, Sri Lanka.jpg';

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
        price: 200,
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
        price: 200,
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
        price: 200,
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
        name: "Body & Mind Wellness Week",
        price: 200,
        duration: "1-2 Weeks",
        location: "Hikkaduwa, Sri Lanka",
        housing: "Shared Volunteer House",
        meals: "3 Daily",
        pickup: "Included",
        support: "24/7 Support",
        id: "zen-and-temple-yoga",
        color: "#9b59b6"
    },
    {
        name: "Medical Volunteer Program",
        price: 200,
        duration: "1-4 Weeks",
        location: "Kandy District",
        housing: "Shared / Private Upgrade",
        meals: "3 Daily",
        pickup: "Included",
        support: "24/7 Support",
        id: "medical-volunteer",
        color: "#e74c3c"
    },
    {
        name: "Ceylon Skill Odyssey",
        price: 250,
        duration: "7 Days",
        location: "Multiple Locations",
        housing: "Coordinated Support",
        meals: "Varies",
        pickup: "Included",
        support: "24/7 Support",
        id: "ceylon-skill-odyssey",
        color: "#0d9488"
    }
];

export const programWeeklyRates = {
    "real-sri-lanka-experience": {
        fixed: true,
        total: 1155,
        weeks: 4,
        note: "Fixed 27-day trip"
    },
    "ceylon-skill-odyssey": {
        fixed: true,
        total: 250,
        weeks: 1,
        note: "7-Day Experience"
    },
    "sri-lanka-childcare": {
        baseWeeks: 1,
        basePrice: 200,
        extraWeekPrice: 50
    },
    "special-needs-support": {
        baseWeeks: 1,
        basePrice: 200,
        extraWeekPrice: 50
    },
    "village-school-renovation": {
        baseWeeks: 1,
        basePrice: 200,
        extraWeekPrice: 50
    },
    "sri-lanka-dog-rescue": {
        baseWeeks: 1,
        basePrice: 200,
        extraWeekPrice: 50
    },
    "zen-and-temple-yoga": {
        baseWeeks: 1,
        basePrice: 200,
        extraWeekPrice: 50
    },
    "medical-volunteer": {
        baseWeeks: 1,
        basePrice: 200,
        extraWeekPrice: 170
    }
};

export const getProgramPriceDetails = (progId, weeks) => {
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
                    letter-spacing: 2px;
                    font-size: 0.72rem;
                    font-weight: 800;
                    background: var(--primary-green);
                    padding: 6px 18px;
                    border-radius: 100px;
                    display: inline-block;
                    margin-bottom: 20px;
                    box-shadow: 0 6px 15px rgba(29, 185, 84, 0.2);
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
                    grid-template-columns: 1fr 1fr;
                    gap: 25px;
                }

                .feature-item {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    padding: 25px;
                    border-radius: 24px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    text-align: left;
                    gap: 20px;
                }

                .feature-item:hover {
                    transform: translateY(-8px);
                    background: #fff;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.06);
                    border-color: rgba(29, 185, 84, 0.2);
                }

                .feature-icon-container {
                    width: 54px;
                    height: 54px;
                    background: white;
                    color: #111;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.35rem;
                    margin-bottom: 0;
                    transition: all 0.5s ease;
                    box-shadow: 0 6px 15px rgba(0,0,0,0.05);
                    position: relative;
                    flex-shrink: 0;
                }

                .feature-item:hover .feature-icon-container {
                    transform: rotate(10deg);
                    background: var(--primary-green);
                    color: white;
                    box-shadow: 0 10px 20px rgba(29, 185, 84, 0.25);
                }

                .feature-title {
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 6px;
                    letter-spacing: -0.02em;
                }

                .feature-desc {
                    font-size: 0.85rem;
                    line-height: 1.5;
                    color: #64748b;
                    margin: 0;
                }

                @media (max-width: 600px) {
                    .features-grid {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 12px !important;
                    }
                    .feature-item {
                        padding: 12px !important;
                        gap: 10px !important;
                        border-radius: 16px !important;
                    }
                    .feature-icon-container {
                        width: 32px !important;
                        height: 32px !important;
                        font-size: 0.95rem !important;
                        border-radius: 8px !important;
                    }
                    .feature-title {
                        font-size: 0.8rem !important;
                        margin-bottom: 2px !important;
                    }
                    .feature-desc {
                        font-size: 0.68rem !important;
                        line-height: 1.35 !important;
                    }
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

                .duration-selector-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 25px;
                }
                
                .duration-label {
                    font-weight: 800;
                    color: #1e293b;
                    font-size: 0.78rem;
                }
                
                .duration-track {
                    background: #f1f5f9;
                    padding: 3px;
                    border-radius: 100px;
                    display: flex;
                    gap: 2px;
                    border: 1px solid #e2e8f0;
                }
                
                .duration-toggle-btn {
                    border: none;
                    background: transparent;
                    color: #64748b;
                    padding: 5px 12px;
                    border-radius: 100px;
                    font-size: 0.68rem;
                    font-weight: 800;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .duration-toggle-btn.active {
                    background: var(--primary-green) !important;
                    color: white !important;
                    box-shadow: 0 4px 10px rgba(29, 185, 84, 0.25) !important;
                }

                @media (max-width: 768px) {
                    .duration-selector-container {
                        gap: 5px;
                        margin-bottom: 18px;
                    }
                    .duration-label {
                        font-size: 0.7rem;
                    }
                    .duration-toggle-btn {
                        padding: 4px 8px;
                        font-size: 0.62rem;
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
                {/* Expectations & Travel Philosophy Style Section */}
                <section className="philosophy-section" style={{ maxWidth: '800px', margin: '40px auto 60px', padding: '0 20px' }}>
                    <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', display: 'block', marginBottom: '12px' }}>OUR MISSION</span>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', margin: '0 0 24px 0', color: '#1d1d1f', lineHeight: 1.1 }}>Making a Lasting Impact.</h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: 1.75, color: '#484848', marginBottom: '20px' }}>
                        Volunteering in Sri Lanka is a journey of the heart. At Giveback Journey, we connect passionate travelers with meaningful projects that address the island's most pressing needs.
                    </p>
                    <p style={{ fontSize: '1.15rem', lineHeight: 1.75, color: '#484848', marginBottom: '40px' }}>
                        Whether you're teaching English to enthusiastic students, supporting women's empowerment initiatives, or providing care for those with special needs, your contribution creates a ripple effect of positive change.
                    </p>
                    
                    <hr style={{ border: 0, borderBottom: '1px solid #eaeaea', margin: '40px 0' }} />

                    {/* Focus Areas */}
                    <div style={{ marginBottom: '60px' }}>
                        <div style={{ marginBottom: '50px' }}>
                            <h3 style={{ borderLeft: '4px solid var(--primary-green)', paddingLeft: '16px', fontSize: '1.5rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.02em', margin: '0 0 18px 0' }}>
                                Construction &amp; Community
                            </h3>
                            <img 
                                src={constructionImg} 
                                alt="Construction &amp; Community volunteering in Sri Lanka" 
                                style={{ 
                                    width: '100%', 
                                    height: '350px', 
                                    objectFit: 'cover', 
                                    borderRadius: '16px', 
                                    marginBottom: '20px', 
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.06)' 
                                }} 
                            />
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '16px' }}>
                                Help rebuild and beautify community spaces — from rural schools and temples to community halls — giving local families spaces they can be proud of. Volunteers work hand-in-hand with local masons and community members, engaging in painting, repairing furniture, planting community gardens, and renovating structures.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '20px' }}>
                                Through these efforts, you directly help enhance the daily lives of families and children, providing them with spaces that foster community pride, learning, and celebration. No prior construction experience is required — just a willing pair of hands and a heart to serve.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {["Painting & Repairs", "School Rebuilding", "Community Spaces"].map((item, i) => (
                                    <span key={i} style={{ background: '#f0fdf4', color: '#166534', padding: '7px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700 }}>{item}</span>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h3 style={{ borderLeft: '4px solid var(--primary-green)', paddingLeft: '16px', fontSize: '1.5rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.02em', margin: '0 0 18px 0' }}>
                                Education &amp; Childcare
                            </h3>
                            <img 
                                src={educationImg} 
                                alt="Education &amp; Childcare volunteering in Sri Lanka" 
                                style={{ 
                                    width: '100%', 
                                    height: '350px', 
                                    objectFit: 'cover', 
                                    borderRadius: '16px', 
                                    marginBottom: '20px', 
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.06)' 
                                }} 
                            />
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '16px' }}>
                                Make a direct impact in rural village preschools and special needs centers. Assist with conversational English teaching, creative play, drawing, music, and basic physical/sensory therapy.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '20px' }}>
                                By bringing creativity, warmth, and attention to classrooms that are often under-resourced, you'll help build kids' confidence and open up future learning pathways. Your presence acts as a powerful catalyst for cultural exchange and long-term educational growth.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {["Rural Teaching", "Special Needs", "School Support"].map((item, i) => (
                                    <span key={i} style={{ background: '#f8f9fa', color: '#475569', padding: '7px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700 }}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <hr style={{ border: 0, borderBottom: '1px solid #eaeaea', margin: '40px 0' }} />

                    {/* Locations */}
                    <div>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', display: 'block', marginBottom: '12px' }}>DESTINATIONS</span>
                        <h2 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.04em', margin: '0 0 30px 0', color: '#1d1d1f' }}>Where You’ll Make an Impact.</h2>
                        
                        <div style={{ marginBottom: '50px' }}>
                            <h3 style={{ borderLeft: '4px solid var(--primary-green)', paddingLeft: '16px', fontSize: '1.5rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.02em', margin: '0 0 18px 0' }}>
                                Kandy District
                            </h3>
                            <img 
                                src={kandyImg} 
                                alt="Kandy District Tea Plantation Sri Lanka" 
                                style={{ 
                                    width: '100%', 
                                    height: '350px', 
                                    objectFit: 'cover', 
                                    borderRadius: '16px', 
                                    marginBottom: '20px', 
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.06)' 
                                }} 
                            />
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '16px' }}>
                                Nestled in the lush, mist-covered hill country, Kandy is the cultural capital of Sri Lanka. Here, our projects focus heavily on community development and English education in rural, mountain-side schools.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '20px' }}>
                                Volunteers live in a vibrant, community-oriented setting, experiencing the traditional Sri Lankan way of life, and supporting families that reside away from major commercial centers.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {["Hill Country", "Education", "Rural Villages"].map((tag, i) => (
                                    <span key={i} style={{ fontSize: '0.75rem', fontWeight: 800, background: '#f0f0f0', color: '#475569', padding: '6px 15px', borderRadius: '50px' }}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h3 style={{ borderLeft: '4px solid var(--primary-green)', paddingLeft: '16px', fontSize: '1.5rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.02em', margin: '0 0 18px 0' }}>
                                Galle District
                            </h3>
                            <img 
                                src={galleImg} 
                                alt="Galle Fort and Coastal Region Sri Lanka" 
                                style={{ 
                                    width: '100%', 
                                    height: '350px', 
                                    objectFit: 'cover', 
                                    borderRadius: '16px', 
                                    marginBottom: '20px', 
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.06)' 
                                }} 
                            />
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '16px' }}>
                                Along the historic southern coast, focus on environmental conservation and women's empowerment initiatives. From beach cleanups and coastal habitat preservation to leading self-reliance workshops, there are diverse avenues of contribution.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '20px' }}>
                                Galle provides a beautiful blend of colonial history, coastal biodiversity, and dynamic community-led programs, allowing volunteers to make a lasting ecological and social footprint.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {["Coastal Region", "Environment", "Empowerment"].map((tag, i) => (
                                    <span key={i} style={{ fontSize: '0.75rem', fontWeight: 800, background: '#f0f0f0', color: '#475569', padding: '6px 15px', borderRadius: '50px' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="section-divider" style={{ margin: '40px auto 80px' }} />

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
                                <div className="feature-text-content">
                                    <h4 className="feature-title">{item.title}</h4>
                                    <p className="feature-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <hr className="section-divider" />

            {/* Volunteer Opportunities */}
            <VolunteerOpportunities />

            <div className="volunteer-container">
                <hr className="section-divider" style={{ margin: '0 auto 80px' }} />
                {/* Pricing Table Section */}
                <section id="pricing" style={{ margin: '120px 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Transparent Pricing</span>
                        <h2 style={{ fontSize: '3.2rem', fontWeight: 900, marginTop: '10px', letterSpacing: '-0.04em' }}>Program Fees & Comparison</h2>
                        <p style={{ color: '#666', fontSize: '1.15rem', marginTop: '15px', maxWidth: '600px', margin: '15px auto 0', lineHeight: 1.6 }}>
                            Compare fees, durations, and inclusions across all volunteer programs. We believe in complete financial transparency.
                        </p>
                    </div>

                    {/* Duration Selector */}
                    <div className="duration-selector-container">
                        <span className="duration-label">Select Stay Duration:</span>
                        <div className="duration-track">
                            {[1, 2, 3, 4].map((wk) => (
                                <button
                                    key={wk}
                                    onClick={() => setSelectedWeeks(wk)}
                                    className={`duration-toggle-btn ${selectedWeeks === wk ? 'active' : ''}`}
                                >
                                    {wk} {wk === 1 ? 'Wk' : 'Wks'}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="table-container-mobile-wrapper" style={{ overflowX: 'auto', background: '#fff', borderRadius: '32px', boxShadow: '0 25px 70px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
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
                                            <td data-label="Program" style={{ padding: '26px 30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: prog.color }}></div>
                                                    <div style={{ textAlign: 'left' }}>
                                                        <span style={{ fontWeight: 800, fontSize: '1rem', color: '#1e293b', display: 'block' }}>{prog.name}</span>
                                                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>{prog.support}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-label="Total Price" style={{ padding: '26px 20px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                    <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a' }}>
                                                        {formatPrice(details.total)}
                                                    </span>
                                                    {details.isMinLimit && (
                                                        <span style={{ fontSize: '0.65rem', color: '#ea580c', fontWeight: 700, background: '#fff7ed', padding: '2px 8px', borderRadius: '4px', marginTop: '4px' }}>
                                                            {details.minWeeks} Wk Min. Commit
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td data-label="Weekly Avg" style={{ padding: '26px 20px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b' }}>
                                                        {formatPrice(details.average)}
                                                        <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>/wk</span>
                                                    </span>
                                                    {details.savingPercent > 0 && (
                                                        <span style={{ fontSize: '0.65rem', color: '#166534', fontWeight: 700, background: '#dcfce7', padding: '2px 8px', borderRadius: '4px', marginTop: '4px' }}>
                                                            Save {details.savingPercent}%/wk
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td data-label="Duration" style={{ padding: '26px 20px', fontSize: '0.9rem', fontWeight: 700, color: '#475569' }}>
                                                <span>{details.isFixed ? `${prog.duration} (Fixed)` : `${selectedWeeks} ${selectedWeeks === 1 ? 'Week' : 'Weeks'}`}</span>
                                            </td>
                                            <td data-label="Location" style={{ padding: '26px 20px', fontSize: '0.9rem', fontWeight: 700, color: '#475569' }}>
                                                <span>{prog.location}</span>
                                            </td>
                                            <td data-label="Meals & Housing" style={{ padding: '26px 20px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>{prog.meals}</span>
                                                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>{prog.housing}</span>
                                                </div>
                                            </td>
                                            <td data-label="Airport Pickup" style={{ padding: '26px 20px' }}>
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
                        @media (max-width: 768px) {
                            .table-container-mobile-wrapper {
                                background: transparent !important;
                                box-shadow: none !important;
                                border: none !important;
                                overflow-x: visible !important;
                            }
                            .table-container-mobile-wrapper table {
                                min-width: 100% !important;
                            }
                            .table-container-mobile-wrapper table thead {
                                display: none !important;
                            }
                            .table-container-mobile-wrapper table, 
                            .table-container-mobile-wrapper table tbody, 
                            .table-container-mobile-wrapper table tr, 
                            .table-container-mobile-wrapper table td {
                                display: block !important;
                                width: 100% !important;
                                box-sizing: border-box !important;
                            }
                            .table-container-mobile-wrapper .pricing-row {
                                background: #ffffff !important;
                                border-radius: 24px !important;
                                padding: 20px !important;
                                margin-bottom: 20px !important;
                                border: 1px solid rgba(0, 0, 0, 0.05) !important;
                                box-shadow: 0 10px 30px rgba(0,0,0,0.03) !important;
                                display: flex !important;
                                flex-direction: column !important;
                            }
                            .table-container-mobile-wrapper .pricing-row td {
                                padding: 12px 10px !important;
                                border-bottom: 1px solid #f1f5f9 !important;
                                display: flex !important;
                                justify-content: space-between !important;
                                align-items: center !important;
                                text-align: right !important;
                                background: transparent !important;
                            }
                            .table-container-mobile-wrapper .pricing-row td:last-child {
                                border-bottom: none !important;
                                justify-content: center !important;
                                padding-top: 15px !important;
                            }
                            .table-container-mobile-wrapper .pricing-row td::before {
                                content: attr(data-label) !important;
                                font-weight: 800 !important;
                                text-transform: uppercase !important;
                                font-size: 0.7rem !important;
                                color: #94a3b8 !important;
                                text-align: left !important;
                            }
                            .table-container-mobile-wrapper .pricing-row td:last-child::before {
                                content: none !important;
                            }
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

                <hr className="section-divider" style={{ margin: '40px auto 80px' }} />

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

                <hr className="section-divider" style={{ margin: '40px auto 80px' }} />

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

                <hr className="section-divider" style={{ margin: '80px auto' }} />

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
