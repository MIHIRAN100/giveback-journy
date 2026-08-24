import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import puppyImg from '../assets/dominican puppy.jpg';
import effortImg from '../assets/IMG_5892.JPG.jpeg';
import yukiImg from '../assets/IMG_4378.jpg';
import impactJourneyImg from '../assets/WhatsApp Image 2026-05-20 at 11.50.00.jpeg';
import VolunteerOpportunities from '../components/VolunteerOpportunities';
import NewsletterSubscribeBanner from '../components/NewsletterSubscribeBanner';
import ReadySaveGoBanner from '../components/ReadySaveGoBanner';
import { useCurrency } from '../context/CurrencyContext';

// Section assets
import constructionImg from '../assets/construction volunteer/WhatsApp Image 2026-06-02 at 17.36.37.jpeg';
import constructionImg2 from '../assets/construction volunteer/WhatsApp Image 2026-06-01 at 15.37.50.jpeg';
import educationImg from '../assets/IMG_5894.JPG.jpeg';
import educationImg2 from '../assets/teaching volunteers/WhatsApp Image 2026-06-20 at 08.17.53.jpeg';
import kandyImg from '../assets/photo-1642095012245-bda8033e8ee3.jpg';
import galleImg from '../assets/photo-1547818832-470a7998a99a.jpg';
import Volunteer1 from '../assets/volunteer_1.png';
import Volunteer2 from '../assets/volunteer_2.png';
import Volunteer3 from '../assets/volunteer_3.png';
import nuweraEliyaImg from '../assets/Nuwera Eliya day tour.jpg';

const pricingPrograms = [
    {
        name: "Breathe Sri Lanka",
        price: 1400,
        duration: "27 Days",
        location: "Kandy & Coast",
        housing: "Shared Rooms",
        meals: "3 Daily",
        pickup: "Included",
        support: "24/7 Support",
        id: "real-sri-lanka-experience",
        color: "#1ba352"
    },
    {
        name: "Teaching Volunteer Program",
        price: 175,
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
        price: 175,
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
        price: 175,
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
        name: "Body & Mind Wellness Week",
        price: 175,
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
        name: "Medical Elective Project",
        price: 240,
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

export const programWeeklyRates = {
    "real-sri-lanka-experience": {
        fixed: true,
        total: 1400,
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
        basePrice: 175,
        extraWeekPrice: 50
    },
    "special-needs-support": {
        baseWeeks: 1,
        basePrice: 175,
        extraWeekPrice: 50
    },
    "village-school-renovation": {
        baseWeeks: 1,
        basePrice: 175,
        extraWeekPrice: 50
    },
    "zen-and-temple-yoga": {
        baseWeeks: 1,
        basePrice: 175,
        extraWeekPrice: 50
    },
    "medical-volunteer": {
        baseWeeks: 1,
        basePrice: 240,
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
    
    // Calculate total based on basePrice and extraWeekPrice
    const total = actualWeeks === 1 ? rate.basePrice : rate.basePrice + (actualWeeks - rate.baseWeeks) * rate.extraWeekPrice;
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
            image: yukiImg
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [zoomedMap, setZoomedMap] = useState(null);

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
                .section-heading-modern {
                    font-size: clamp(2rem, 3.5vw, 2.8rem) !important;
                    font-weight: 700 !important;
                    color: #2d2d2d !important;
                    line-height: 1.25 !important;
                    letter-spacing: -0.01em !important;
                }
                
                .section-text-modern {
                    font-size: 1.05rem !important;
                    color: #4a4a4a !important;
                    line-height: 1.75 !important;
                    font-weight: 400 !important;
                }

                .volunteer-page {
                    background: #fff;
                    overflow-x: hidden;
                }
                
                .giveback-hero-redesign {
                    position: relative;
                    min-height: 82vh;
                    display: flex;
                    align-items: center;
                    background: linear-gradient(90deg, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.78) 45%, rgba(15, 23, 42, 0.25) 100%), url(${effortImg}) no-repeat center 35%/cover;
                    color: #ffffff;
                    box-sizing: border-box;
                    overflow: hidden;
                    margin-bottom: 20px;
                }

                .giveback-hero-inner {
                    max-width: 1350px;
                    width: 100%;
                    margin: auto;
                    padding: 80px 5% 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    gap: 40px;
                    position: relative;
                    z-index: 2;
                    box-sizing: border-box;
                }

                .giveback-hero-copy {
                    max-width: 580px;
                    text-align: left;
                }

                .carenest-hero-title {
                    font-size: clamp(2.5rem, 5.5vw, 4.2rem);
                    font-weight: 800;
                    color: #ffffff;
                    line-height: 1.1;
                    margin: 0 0 20px 0;
                    letter-spacing: -0.02em;
                }

                .carenest-hero-desc {
                    font-size: 0.92rem;
                    line-height: 1.6;
                    color: rgba(255, 255, 255, 0.8);
                    max-width: 460px;
                    margin-bottom: 30px;
                    font-weight: 400;
                }

                .carenest-hero-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background: rgba(0, 0, 0, 0.4);
                    border: 1.5px solid rgba(255, 255, 255, 0.35);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    padding: 8px 10px 8px 24px;
                    border-radius: 50px;
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    margin-bottom: 110px;
                }

                .carenest-hero-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: #ffffff;
                    transform: translateY(-2px);
                }

                .carenest-btn-icon {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background: var(--primary-green);
                    color: #0f172a;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                }

                .carenest-hero-trust-bar {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-top: 25px;
                }

                .carenest-avatar-group {
                    display: flex;
                    align-items: center;
                }

                .carenest-avatar-group img {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid #ffffff;
                    margin-left: -12px;
                }

                .carenest-avatar-group img:first-child {
                    margin-left: 0;
                }

                .carenest-trust-text {
                    font-size: 0.88rem;
                    color: rgba(255, 255, 255, 0.9);
                    font-weight: 500;
                }

                .carenest-hero-card-right {
                    position: absolute;
                    right: 15px;
                    bottom: 10px;
                    z-index: 3;
                    background: rgba(15, 23, 42, 0.72);
                    backdrop-filter: blur(18px);
                    -webkit-backdrop-filter: blur(18px);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    border-radius: 20px;
                    padding: 20px;
                    max-width: 380px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    text-align: left;
                }

                .carenest-card-avatar {
                    width: 85px;
                    height: 105px;
                    border-radius: 14px;
                    object-fit: cover;
                    flex-shrink: 0;
                }

                .carenest-card-content {
                    display: flex;
                    flex-direction: column;
                }

                .carenest-card-quote {
                    font-size: 0.78rem;
                    line-height: 1.45;
                    color: rgba(255, 255, 255, 0.9);
                    margin: 0 0 10px 0;
                    font-style: normal;
                }

                .carenest-card-author {
                    font-size: 0.85rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin: 0;
                }

                .carenest-card-role {
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.6);
                }

                @media (max-width: 992px) {
                    .giveback-hero-inner {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 40px;
                    }
                    .carenest-hero-card-right {
                        position: relative;
                        right: auto;
                        bottom: auto;
                        max-width: 100%;
                        width: 100%;
                    }
                }

                .hero-avatar-stack {
                    display: flex;
                    align-items: center;
                }

                .hero-avatar-stack img {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid #ffffff;
                    margin-left: -10px;
                }

                .hero-avatar-stack img:first-child {
                    margin-left: 0;
                }

                .hero-trust-stars {
                    display: flex;
                    gap: 2px;
                    color: var(--primary-green);
                    font-size: 0.75rem;
                    margin-bottom: 2px;
                }

                .hero-trust-text {
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.88);
                }

                .giveback-hero-card-float {
                    background: rgba(15, 23, 42, 0.65);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 20px;
                    padding: 16px;
                    max-width: 420px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    text-align: left;
                    margin-bottom: 10px;
                }

                .hero-card-thumb {
                    width: 100px;
                    height: 90px;
                    border-radius: 12px;
                    object-fit: cover;
                    flex-shrink: 0;
                }

                .hero-card-info {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .hero-card-title {
                    font-size: 0.92rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin: 0;
                    line-height: 1.3;
                }

                .hero-card-desc {
                    font-size: 0.76rem;
                    color: rgba(255, 255, 255, 0.75);
                    margin: 0 0 6px 0;
                    line-height: 1.35;
                }

                .hero-card-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(255, 255, 255, 0.15);
                    color: #ffffff;
                    padding: 5px 12px;
                    border-radius: 50px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    text-decoration: none;
                    align-self: flex-start;
                    transition: background 0.2s ease;
                }

                .hero-card-btn:hover {
                    background: var(--primary-green);
                }

                .giveback-hero-footer-bar {
                    width: 100%;
                    border-top: 1px solid rgba(255, 255, 255, 0.15);
                    padding: 16px 5%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.65);
                    font-weight: 500;
                    box-sizing: border-box;
                    z-index: 2;
                }

                @media (max-width: 992px) {
                    .giveback-hero-inner {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 30px;
                        padding-bottom: 20px;
                    }
                    .giveback-hero-card-float {
                        max-width: 100%;
                        width: 100%;
                    }
                    .giveback-hero-footer-bar {
                        flex-direction: column;
                        gap: 8px;
                        text-align: center;
                    }
                }

                .volunteer-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 5% 60px;
                }

                .section-intro {
                    margin-bottom: 40px;
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
                    margin-bottom: 50px;
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
                    margin-bottom: 60px;
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
                    padding: 60px 5%;
                    border-radius: 60px;
                    margin-bottom: 60px;
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
                    background: radial-gradient(circle, rgba(27, 163, 82, 0.05) 0%, transparent 70%);
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
                    border-color: rgba(27, 163, 82, 0.2);
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
                    box-shadow: 0 10px 20px rgba(27, 163, 82, 0.25);
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
                    margin-bottom: 60px;
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
                    background: linear-gradient(135deg, #1ba352 0%, #0a2e1a 100%);
                    color: white;
                    position: relative;
                }

                .journey-steps {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    margin-bottom: 60px;
                }

                .progress-report-layout {
                    display: grid;
                    grid-template-columns: 1.6fr 1fr;
                    gap: 60px;
                }

                .progress-report-card {
                    background: #ffffff;
                    border: 1px solid #edf2f7;
                    border-radius: 28px;
                    padding: 30px;
                    box-shadow: 0 15px 45px rgba(0,0,0,0.02);
                }

                .philosophy-layout {
                    display: grid;
                    grid-template-columns: 1.6fr 1fr;
                    gap: 60px;
                    align-items: center;
                }

                .stat-card-mini {
                    background: #f8fafc;
                    border: 1px solid #edf2f7;
                    border-radius: 20px;
                    padding: 16px 20px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .stat-card-mini:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.03);
                    border-color: var(--primary-green);
                    background: #fff;
                }

                    @media (max-width: 1024px) {
                    .philosophy-layout {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .progress-report-layout {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .progress-report-sidebar {
                        position: static !important;
                        margin-top: 40px;
                    }

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
                    gap: 24px;
                    position: relative;
                    margin-bottom: 50px;
                    padding: 0;
                }

                .journey-timeline::before {
                    display: none !important;
                }

                .journey-step {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    text-align: left;
                    padding: 48px 36px;
                    position: relative;
                    z-index: 1;
                    background: #f5f5f7; /* Apple's signature light grey */
                    border-radius: 28px;
                    transition: all 0.5s cubic-bezier(0.15, 0.85, 0.45, 1);
                    border: none;
                    box-shadow: none;
                }

                .journey-step-number {
                    position: absolute;
                    top: 40px;
                    right: 36px;
                    font-size: 3.2rem;
                    font-weight: 800;
                    color: #1d1d1f;
                    opacity: 0.12;
                    line-height: 1;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    user-select: none;
                    transition: all 0.5s ease;
                }

                .journey-step:hover .journey-step-number {
                    opacity: 0.28;
                    transform: translateY(-2px);
                }

                .journey-step-icon {
                    width: 46px;
                    height: 46px;
                    border-radius: 14px;
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 28px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
                    transition: all 0.5s cubic-bezier(0.15, 0.85, 0.45, 1);
                    position: relative;
                }

                .journey-step-icon i {
                    font-size: 1.15rem;
                    color: #1d1d1f;
                    transition: all 0.3s ease;
                }

                .journey-step:hover {
                    transform: translateY(-6px);
                    background: #e8e8ed; /* Apple's hover state grey */
                    box-shadow: 0 20px 40px rgba(0,0,0,0.04);
                }

                .journey-step:hover .journey-step-icon {
                    background: var(--primary-green);
                    transform: scale(1.05);
                }

                .journey-step:hover .journey-step-icon i {
                    color: white;
                }

                .journey-step-tag {
                    display: inline-block;
                    padding: 4px 12px;
                    border-radius: 100px;
                    font-size: 0.68rem;
                    font-weight: 800;
                    letter-spacing: 0.2px;
                    margin-bottom: 15px;
                    text-transform: uppercase;
                }

                .journey-step-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #1d1d1f;
                    margin-bottom: 12px;
                    letter-spacing: -0.01em;
                }

                .journey-step-desc {
                    font-size: 0.95rem;
                    line-height: 1.5;
                    color: #86868b;
                    font-weight: 500;
                }

                @media (max-width: 1024px) {
                    .journey-timeline {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }
                }

                @media (max-width: 600px) {
                    .journey-timeline {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                    .journey-step {
                        padding: 36px 28px;
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
                    box-shadow: 0 4px 10px rgba(27, 163, 82, 0.25) !important;
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
                .modern-dest-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 32px;
                    margin-bottom: 40px;
                }
                
                .modern-dest-card {
                    background: #fff;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    display: flex;
                    flex-direction: column;
                    border: 1px solid rgba(0,0,0,0.04);
                    position: relative;
                }

                .modern-dest-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 48px rgba(0,0,0,0.12);
                    border-color: rgba(22, 163, 74, 0.2);
                }

                .modern-dest-img-wrapper {
                    width: 100%;
                    height: 280px;
                    overflow: hidden;
                    position: relative;
                }

                .modern-dest-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .modern-dest-card:hover .modern-dest-img {
                    transform: scale(1.06);
                }

                .modern-dest-content {
                    padding: 32px;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                .modern-dest-title {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #1d1d1f;
                    margin: 0 0 12px 0;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    letter-spacing: -0.02em;
                }

                .modern-dest-text {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: #515154;
                    margin-bottom: 24px;
                }

                .modern-dest-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: auto;
                    padding-top: 24px;
                    border-top: 1px solid #f0f0f0;
                }

                .modern-dest-tag {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: var(--primary-green, #166534);
                    background: #f0fdf4;
                    padding: 6px 14px;
                    border-radius: 100px;
                }

                @media (max-width: 768px) {
                    .modern-dest-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    .modern-dest-img-wrapper {
                        height: 200px;
                    }
                    .modern-dest-content {
                        padding: 20px;
                    }
                    .modern-dest-title {
                        font-size: 1.4rem;
                        margin-bottom: 8px;
                    }
                    .modern-dest-text {
                        font-size: 0.95rem;
                        margin-bottom: 16px;
                    }
                    .modern-dest-tags {
                        padding-top: 16px;
                    }
                    .modern-dest-tag {
                        padding: 4px 10px;
                        font-size: 0.75rem;
                    }
                }
                
                .modern-dest-header {
                    text-align: center;
                    margin-bottom: 48px;
                }

                .scrolling-activities-wrapper {
                    overflow: hidden;
                    height: 250px;
                    position: relative;
                    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
                    mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
                }

                @keyframes verticalScroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }

                .scrolling-activities-content {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    animation: verticalScroll 30s linear infinite;
                }

                .scrolling-activities-wrapper:hover .scrolling-activities-content {
                    animation-play-state: paused;
                }

                .volunteer-grid-img-wrapper img {
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
                }
                .volunteer-grid-img-wrapper:hover img {
                    transform: scale(1.08) !important;
                }

                .volunteer-section-wrapper {
                    width: 100%;
                    padding: 80px 0;
                    box-sizing: border-box;
                }
                
                .volunteer-section-wrapper.bg-white {
                    background-color: #ffffff;
                }
                
                .volunteer-section-wrapper.bg-soft-green {
                    background-color: #f4f8f5;
                }
                
                .volunteer-section-wrapper.bg-soft-blue {
                    background-color: #f3f7fa;
                }

                .volunteer-section-wrapper.bg-soft-gray {
                    background-color: #f7fafc;
                }

                @media (max-width: 768px) {
                    .volunteer-section-wrapper {
                        padding: 50px 0;
                    }
                }
                `}
            </style>

            {/* Hero Section - Matching Carenest Reference Design */}
            <section className="giveback-hero-redesign">
                <div className="giveback-hero-inner">
                    {/* Left Column: Title, Subtitle, Button & Trust Bar */}
                    <div className="giveback-hero-copy">
                        <h1 className="carenest-hero-title">
                            Volunteering That<br />
                            Helps Children
                        </h1>
                        <p className="carenest-hero-desc">
                            Giveback Journey is a volunteer and community initiative committed to supporting local Sri Lankan children through education, special needs care, protection, and village development.
                        </p>

                        {/* Action Pill Button with Accent Arrow Badge */}
                        <Link to="/volunteer-inquiry" className="carenest-hero-btn">
                            <span>Apply Now</span>
                            <div className="carenest-btn-icon">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </Link>

                        {/* Overlapping Avatars Trust Bar */}
                        <div className="carenest-hero-trust-bar">
                            <div className="carenest-avatar-group">
                                <img src={Volunteer1} alt="Volunteer 1" />
                                <img src={Volunteer2} alt="Volunteer 2" />
                                <img src={Volunteer3} alt="Volunteer 3" />
                                <img src={yukiImg} alt="Volunteer 4" />
                            </div>
                            <span className="carenest-trust-text">
                                Over <strong>1K+ volunteers</strong> have made an impact.
                            </span>
                        </div>
                    </div>

                    {/* Right Floating Supporter Testimonial Card */}
                    <div className="carenest-hero-card-right">
                        <img src={nuweraEliyaImg} alt="Supporter Volunteer" className="carenest-card-avatar" />
                        <div className="carenest-card-content">
                            <p className="carenest-card-quote">
                                "This organization makes it easy to understand where support goes. Knowing that my contribution directly helps local children is deeply fulfilling."
                            </p>
                            <h5 className="carenest-card-author">Emma Mitchell</h5>
                            <span className="carenest-card-role">Volunteer Traveler, UK</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="volunteer-section-wrapper bg-white" style={{ padding: '40px 0 20px' }}>
                <div className="volunteer-container" style={{ paddingBottom: 0 }}>
                    {/* Expectations & Travel Philosophy Style Section */}
                    <section className="philosophy-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0' }}>
                    <div className="philosophy-layout">
                        {/* Left Column: Our Mission */}
                        <div>
                            <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', display: 'block', marginBottom: '12px' }}>OUR MISSION</span>
                            <h2 className="section-heading-modern" style={{ margin: '0 0 24px 0' }}>Making a Lasting Impact.</h2>
                            <p className="section-text-modern" style={{ marginBottom: '20px' }}>
                                Volunteering in Sri Lanka is a journey of the heart. At Giveback Journey, we connect passionate travelers with meaningful projects that address the island's most pressing needs.
                            </p>
                            <p className="section-text-modern" style={{ marginBottom: 0 }}>
                                Whether you're teaching English to enthusiastic students, supporting women's empowerment initiatives, or providing care for those with special needs, your contribution creates a ripple effect of positive change.
                            </p>
                        </div>
                        
                        {/* Right Column: Volunteer Status Cards */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div className="stat-card-mini">
                                <div style={{ 
                                    width: '45px', 
                                    height: '45px', 
                                    borderRadius: '12px', 
                                    background: '#e0f2fe', 
                                    color: '#0284c7', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    flexShrink: 0
                                }}>
                                    <i className="bi bi-people-fill"></i>
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>500+ Volunteers</h4>
                                    <p style={{ margin: '2px 0 0', fontSize: '0.78rem', color: '#64748b', fontWeight: 550 }}>Meaningful connections</p>
                                </div>
                            </div>

                            <div className="stat-card-mini">
                                <div style={{ 
                                    width: '45px', 
                                    height: '45px', 
                                    borderRadius: '12px', 
                                    background: '#dcfce7', 
                                    color: '#16a34a', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    flexShrink: 0
                                }}>
                                    <i className="bi bi-shield-check"></i>
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>Safe &amp; Supported</h4>
                                    <p style={{ margin: '2px 0 0', fontSize: '0.78rem', color: '#64748b', fontWeight: 550 }}>Trusted by our community</p>
                                </div>
                            </div>

                            <div className="stat-card-mini">
                                <div style={{ 
                                    width: '45px', 
                                    height: '45px', 
                                    borderRadius: '12px', 
                                    background: '#fef3c7', 
                                    color: '#d97706', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    flexShrink: 0
                                }}>
                                    <i className="bi bi-headset"></i>
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>24/7 On-Site Support</h4>
                                    <p style={{ margin: '2px 0 0', fontSize: '0.78rem', color: '#64748b', fontWeight: 550 }}>Experienced local team</p>
                                </div>
                            </div>

                            <div className="stat-card-mini">
                                <div style={{ 
                                    width: '45px', 
                                    height: '45px', 
                                    borderRadius: '12px', 
                                    background: '#fce7f3', 
                                    color: '#db2777', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    flexShrink: 0
                                }}>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>4.9/5 Rating</h4>
                                    <p style={{ margin: '2px 0 0', fontSize: '0.78rem', color: '#64748b', fontWeight: 550 }}>Highly rated experiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </section>
                </div>
            </div>

            {/* Section 2: Construction & Community */}
            <div className="volunteer-section-wrapper bg-soft-green">
                <div className="volunteer-container" style={{ paddingBottom: 0 }}>
                    {/* Focus Area 1: Construction & Community */}
                    <div className="progress-report-layout" style={{ marginBottom: 0 }}>
                        {/* Left Column: Focus Area Info */}
                        <div>
                            <div style={{ marginBottom: '20px' }}>
                                <h3 style={{ borderLeft: '4px solid var(--primary-green)', paddingLeft: '16px', fontSize: '1.5rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.02em', margin: '0 0 18px 0' }}>
                                    Construction &amp; Community
                                </h3>
                                <div style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                                    gap: '16px', 
                                    marginBottom: '20px' 
                                }}>
                                    <div className="volunteer-grid-img-wrapper" style={{ overflow: 'hidden', borderRadius: '16px', height: '280px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
                                        <img 
                                            src={constructionImg} 
                                            alt="Construction &amp; Community volunteering in Sri Lanka 1" 
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'cover'
                                            }} 
                                        />
                                    </div>
                                    <div className="volunteer-grid-img-wrapper" style={{ overflow: 'hidden', borderRadius: '16px', height: '280px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
                                        <img 
                                            src={constructionImg2} 
                                            alt="Construction &amp; Community volunteering in Sri Lanka 2" 
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'cover'
                                            }} 
                                        />
                                    </div>
                                </div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '16px' }}>
                                    Help rebuild and beautify community spaces, giving local families spaces they can be proud of. Volunteers work hand-in-hand with local masons and community members, engaging in painting, repairing furniture, planting community gardens, and renovating structures.
                                </p>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '20px' }}>
                                    Through these efforts, you directly help enhance the daily lives of families and children, providing them with spaces that foster community pride, learning, and celebration. No prior construction experience is required.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {["Painting & Repairs", "School Rebuilding", "Community Spaces", "Playground Building", "Temple Restoration"].map((item, i) => (
                                        <span key={i} style={{ background: '#f0fdf4', color: '#166534', padding: '7px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700 }}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Sticky Key Benefits Panel */}
                        <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }} className="progress-report-sidebar">
                            <div className="progress-report-card" style={{ border: '1px solid rgba(27, 163, 82, 0.15)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        background: 'rgba(27, 163, 82, 0.1)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'var(--primary-green)'
                                    }}>
                                        <i className="fa-solid fa-circle-check" style={{ fontSize: '1rem' }}></i>
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#111', letterSpacing: '-0.02em' }}>Why Join This Project?</h3>
                                </div>
                                <p style={{ margin: '0 0 25px 0', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                                    Discover how your hands-on contribution directly impacts local communities and enriches your journey.
                                </p>

                                {/* Benefits List */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {[
                                        { title: "Immediate Visual Impact", desc: "See a building, classroom, or public space transform from start to finish with your own eyes.", icon: "fa-eye" },
                                        { title: "Learn Local Craft Skills", desc: "Gain practical experience in traditional Sri Lankan painting, masonry, and sustainable landscaping.", icon: "fa-hammer" },
                                        { title: "Authentic Integration", desc: "Work side-by-side with experienced Sri Lankan masons, fostering deep, direct cultural exchange.", icon: "fa-handshake" },
                                        { title: "Community Pride", desc: "Provide local families and kids with clean, safe spaces that encourage learning and gathering.", icon: "fa-heart-circle-check" }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                            <div style={{ 
                                                width: '36px', 
                                                height: '36px', 
                                                borderRadius: '50%', 
                                                background: '#f0fdf4', 
                                                color: 'var(--primary-green)', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                fontSize: '0.9rem',
                                                flexShrink: 0,
                                                border: '1px solid rgba(27, 163, 82, 0.15)'
                                            }}>
                                                <i className={`fa-solid ${item.icon}`}></i>
                                            </div>
                                            <div style={{ textAlign: 'left' }}>
                                                <h5 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', fontWeight: 800, color: '#1e293b' }}>{item.title}</h5>
                                                <p style={{ margin: 0, fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4 }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Recent Activity Card */}
                            <div className="progress-report-card" style={{ marginTop: '20px', border: '1px solid rgba(27, 163, 82, 0.15)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e293b', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Recent Giveback Impacts</h4>
                                <div className="scrolling-activities-wrapper">
                                    <div className="scrolling-activities-content">
                                        {[
                                            { time: "May 26", text: "Matale School classroom painting finished by Kandy team.", icon: "fa-paint-roller" },
                                            { time: "May 18", text: "10 new handmade bookshelves installed in village library.", icon: "fa-book-open" },
                                            { time: "May 12", text: "Completed structural roofing repairs on community center hall.", icon: "fa-hammer" },
                                            { time: "May 05", text: "Renovation work started on library room at local monastery.", icon: "fa-building" },
                                            { time: "Apr 29", text: "Painted 3 new murals at the Kandy community hall.", icon: "fa-palette" },
                                            { time: "Apr 20", text: "Fixed broken desks and chairs for the rural school.", icon: "fa-chair" },
                                            { time: "Apr 14", text: "Installed 5 new water filters in the village center.", icon: "fa-faucet-drip" },
                                            { time: "Apr 08", text: "Cleared the temple gardens and planted 20 new trees.", icon: "fa-tree" },
                                            { time: "Mar 30", text: "Repaired the playground swings at the local preschool.", icon: "fa-child-reaching" },
                                            { time: "Mar 22", text: "Built a new community gathering pavilion from recycled wood.", icon: "fa-house" },
                                            // Duplicate for seamless loop
                                            { time: "May 26", text: "Matale School classroom painting finished by Kandy team.", icon: "fa-paint-roller" },
                                            { time: "May 18", text: "10 new handmade bookshelves installed in village library.", icon: "fa-book-open" },
                                            { time: "May 12", text: "Completed structural roofing repairs on community center hall.", icon: "fa-hammer" },
                                            { time: "May 05", text: "Renovation work started on library room at local monastery.", icon: "fa-building" },
                                            { time: "Apr 29", text: "Painted 3 new murals at the Kandy community hall.", icon: "fa-palette" },
                                            { time: "Apr 20", text: "Fixed broken desks and chairs for the rural school.", icon: "fa-chair" },
                                            { time: "Apr 14", text: "Installed 5 new water filters in the village center.", icon: "fa-faucet-drip" },
                                            { time: "Apr 08", text: "Cleared the temple gardens and planted 20 new trees.", icon: "fa-tree" },
                                            { time: "Mar 30", text: "Repaired the playground swings at the local preschool.", icon: "fa-child-reaching" },
                                            { time: "Mar 22", text: "Built a new community gathering pavilion from recycled wood.", icon: "fa-house" }
                                        ].map((act, idx) => (
                                            <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#f0fdf4', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', flexShrink: 0 }}>
                                                    <i className={`fa-solid ${act.icon}`}></i>
                                                </div>
                                                <div style={{ textAlign: 'left' }}>
                                                    <div style={{ fontSize: '0.78rem', color: '#1e293b', lineHeight: 1.4, fontWeight: 700 }}>{act.text}</div>
                                                    <span style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 700 }}>{act.time}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Education & Childcare */}
            <div className="volunteer-section-wrapper bg-white">
                <div className="volunteer-container" style={{ paddingBottom: 0 }}>
                    {/* Focus Area 2: Education & Childcare */}
                    <div className="progress-report-layout" style={{ marginBottom: 0 }}>
                        {/* Left Column: Focus Area Info */}
                        <div>
                            <div style={{ marginBottom: '20px' }}>
                                <h3 style={{ borderLeft: '4px solid var(--primary-green)', paddingLeft: '16px', fontSize: '1.5rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.02em', margin: '0 0 18px 0' }}>
                                    Education &amp; Childcare
                                </h3>
                                <div style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                                    gap: '16px', 
                                    marginBottom: '20px' 
                                }}>
                                    <div className="volunteer-grid-img-wrapper" style={{ overflow: 'hidden', borderRadius: '16px', height: '280px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
                                        <img 
                                            src={educationImg} 
                                            alt="Education &amp; Childcare volunteering in Sri Lanka 1" 
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'cover'
                                            }} 
                                        />
                                    </div>
                                    <div className="volunteer-grid-img-wrapper" style={{ overflow: 'hidden', borderRadius: '16px', height: '280px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
                                        <img 
                                            src={educationImg2} 
                                            alt="Education &amp; Childcare volunteering in Sri Lanka 2" 
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'cover'
                                            }} 
                                        />
                                    </div>
                                </div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '16px' }}>
                                    Make a direct impact in rural village preschools and special needs centers. Assist with conversational English teaching, creative play, drawing, music, and basic physical/sensory therapy.
                                </p>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#424245', marginBottom: '20px' }}>
                                    By bringing creativity, warmth, and attention to classrooms that are often under-resourced, you'll help build kids' confidence and open up future learning pathways. Your presence acts as a powerful catalyst for cultural exchange and long-term educational growth.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {["Rural Teaching", "Special Needs", "School Support", "English Teaching", "Preschool Assistance", "Creative Arts"].map((item, i) => (
                                        <span key={i} style={{ background: '#f8f9fa', color: '#475569', padding: '7px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700 }}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Sticky Key Benefits Panel */}
                        <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }} className="progress-report-sidebar">
                            <div className="progress-report-card" style={{ border: '1px solid rgba(27, 163, 82, 0.15)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        background: 'rgba(27, 163, 82, 0.1)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'var(--primary-green)'
                                    }}>
                                        <i className="fa-solid fa-circle-check" style={{ fontSize: '1rem' }}></i>
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#111', letterSpacing: '-0.02em' }}>Why Join This Project?</h3>
                                </div>
                                <p style={{ margin: '0 0 25px 0', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                                    Discover how your energy and support can shape children's futures while expanding your perspective.
                                </p>

                                {/* Benefits List */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {[
                                        { title: "Inspire Young Minds", desc: "Help rural preschool children build confidence in their conversational English and communication skills.", icon: "fa-face-smile-beam" },
                                        { title: "Support Underfunded Centers", desc: "Provide essential resource relief to understaffed schools and local special needs care centers.", icon: "fa-school-circle-check" },
                                        { title: "Bi-directional Exchange", desc: "Share your own culture and stories while learning local Sri Lankan songs, games, and customs.", icon: "fa-earth-asia" },
                                        { title: "Heartfelt Connections", desc: "Develop lasting, heart-warming bonds with the children and teachers you assist daily.", icon: "fa-people-roof" }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                            <div style={{ 
                                                width: '36px', 
                                                height: '36px', 
                                                borderRadius: '50%', 
                                                background: '#f0fdf4', 
                                                color: 'var(--primary-green)', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                fontSize: '0.9rem',
                                                flexShrink: 0,
                                                border: '1px solid rgba(27, 163, 82, 0.15)'
                                            }}>
                                                <i className={`fa-solid ${item.icon}`}></i>
                                            </div>
                                            <div style={{ textAlign: 'left' }}>
                                                <h5 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', fontWeight: 800, color: '#1e293b' }}>{item.title}</h5>
                                                <p style={{ margin: 0, fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4 }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Activity Card */}
                            <div className="progress-report-card" style={{ marginTop: '20px', border: '1px solid rgba(27, 163, 82, 0.15)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e293b', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Recent Giveback Impacts</h4>
                                <div className="scrolling-activities-wrapper">
                                    <div className="scrolling-activities-content">
                                        {[
                                            { time: "May 28", text: "New conversational English curriculum introduced in Kandy preschools.", icon: "fa-book" },
                                            { time: "May 20", text: "Art & music workshop materials distributed to 5 rural centers.", icon: "fa-music" },
                                            { time: "May 14", text: "Special needs center in Kandy completed 20 sensory therapy sessions.", icon: "fa-hands-holding-child" },
                                            { time: "May 08", text: "Teacher training completed for local village volunteers.", icon: "fa-chalkboard-user" },
                                            { time: "Apr 30", text: "Hosted a community sports day for 150 local children.", icon: "fa-volleyball" },
                                            { time: "Apr 22", text: "Delivered 200 new English storybooks to the Galle library.", icon: "fa-book-open-reader" },
                                            { time: "Apr 15", text: "Conducted a successful hygiene and health workshop for kids.", icon: "fa-soap" },
                                            { time: "Apr 10", text: "Celebrated the traditional New Year with cultural games and songs.", icon: "fa-masks-theater" },
                                            { time: "Apr 02", text: "Initiated an after-school tutoring program for older students.", icon: "fa-user-graduate" },
                                            { time: "Mar 25", text: "Organized a field trip to the local botanical gardens for 40 students.", icon: "fa-bus" },
                                            // Duplicate for seamless loop
                                            { time: "May 28", text: "New conversational English curriculum introduced in Kandy preschools.", icon: "fa-book" },
                                            { time: "May 20", text: "Art & music workshop materials distributed to 5 rural centers.", icon: "fa-music" },
                                            { time: "May 14", text: "Special needs center in Kandy completed 20 sensory therapy sessions.", icon: "fa-hands-holding-child" },
                                            { time: "May 08", text: "Teacher training completed for local village volunteers.", icon: "fa-chalkboard-user" },
                                            { time: "Apr 30", text: "Hosted a community sports day for 150 local children.", icon: "fa-volleyball" },
                                            { time: "Apr 22", text: "Delivered 200 new English storybooks to the Galle library.", icon: "fa-book-open-reader" },
                                            { time: "Apr 15", text: "Conducted a successful hygiene and health workshop for kids.", icon: "fa-soap" },
                                            { time: "Apr 10", text: "Celebrated the traditional New Year with cultural games and songs.", icon: "fa-masks-theater" },
                                            { time: "Apr 02", text: "Initiated an after-school tutoring program for older students.", icon: "fa-user-graduate" },
                                            { time: "Mar 25", text: "Organized a field trip to the local botanical gardens for 40 students.", icon: "fa-bus" }
                                        ].map((act, idx) => (
                                            <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#f0fdf4', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', flexShrink: 0 }}>
                                                    <i className={`fa-solid ${act.icon}`}></i>
                                                </div>
                                                <div style={{ textAlign: 'left' }}>
                                                    <div style={{ fontSize: '0.78rem', color: '#1e293b', lineHeight: 1.4, fontWeight: 700 }}>{act.text}</div>
                                                    <span style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 700 }}>{act.time}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4: Destinations Section */}
            <div className="volunteer-section-wrapper bg-soft-blue" style={{ background: '#f8fafc' }}>
                <div className="volunteer-container" style={{ paddingBottom: 0 }}>
                    {/* Destinations Section */}
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0' }}>
                        <div className="modern-dest-header" style={{ textAlign: 'left' }}>
                            <span style={{ 
                                display: 'inline-block',
                                color: 'var(--primary-green)', 
                                background: 'rgba(27, 163, 82, 0.1)',
                                padding: '8px 20px',
                                borderRadius: '100px',
                                fontWeight: 800, 
                                textTransform: 'uppercase', 
                                letterSpacing: '2px', 
                                fontSize: '0.85rem'
                            }}>Our Locations</span>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginTop: '40px' }}>
                            {/* Kandy Location */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
                                <div>
                                    <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                                        Volunteer in Kandy District
                                    </h3>
                                    <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#424245', marginBottom: '24px' }}>
                                        Nestled in the lush, mist covered hill country, Kandy is the cultural capital of Sri Lanka. Our projects focus heavily on community development and English education in rural, mountain side schools. Volunteers live in a vibrant, community oriented setting, experiencing the traditional Sri Lankan way of life.
                                    </p>
                                    
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '16px' }}>Highlights:</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#424245', lineHeight: 1.5 }}>
                                            <div style={{ color: 'var(--primary-green)', marginTop: '4px', fontSize: '0.6rem' }}><i className="fa-solid fa-circle"></i></div>
                                            Focus on pre school teaching, monk teaching, sports coaching, yoga, and rural community development
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#424245', lineHeight: 1.5 }}>
                                            <div style={{ color: 'var(--primary-green)', marginTop: '4px', fontSize: '0.6rem' }}><i className="fa-solid fa-circle"></i></div>
                                            Includes airport pick up, orientation, accommodation, meals, and 24/7 in country support
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#424245', lineHeight: 1.5 }}>
                                            <div style={{ color: 'var(--primary-green)', marginTop: '4px', fontSize: '0.6rem' }}><i className="fa-solid fa-circle"></i></div>
                                            Accommodation in shared volunteer houses with mountain views
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#424245', lineHeight: 1.5 }}>
                                            <div style={{ color: 'var(--primary-green)', marginTop: '4px', fontSize: '0.6rem' }}><i className="fa-solid fa-circle"></i></div>
                                            Immersive cultural experiences and weekend trips to historic temples
                                        </li>
                                    </ul>
                                    
                                    <button style={{
                                        background: 'var(--primary-green)',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '14px 28px',
                                        borderRadius: '8px',
                                        fontWeight: 800,
                                        fontSize: '0.95rem',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}
                                    onClick={() => {
                                        const el = document.getElementById('opportunities');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = '#15803d'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'var(--primary-green)'}
                                    >
                                        Explore Projects
                                    </button>
                                </div>
                                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                                    <img 
                                        src={kandyImg} 
                                        alt="Volunteer in Kandy" 
                                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }} 
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                                        padding: '40px 24px 24px 24px',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px'
                                    }}>
                                        {['Pre School Teaching', 'Monk Teaching', 'Sports', 'Yoga', 'Community Development'].map((label, i) => (
                                            <span key={i} style={{
                                                background: 'rgba(255, 255, 255, 0.95)',
                                                backdropFilter: 'blur(10px)',
                                                color: '#111',
                                                padding: '6px 14px',
                                                borderRadius: '100px',
                                                fontSize: '0.75rem',
                                                fontWeight: 800,
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px'
                                            }}>
                                                <i className="fa-solid fa-check" style={{ color: 'var(--primary-green)' }}></i>
                                                {label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div style={{ height: '1px', background: '#e2e8f0', width: '100%' }}></div>

                            {/* Galle Location */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
                                <div>
                                    <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                                        Volunteer in Galle District
                                    </h3>
                                    <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#424245', marginBottom: '24px' }}>
                                        Along the historic southern coast, Galle provides a beautiful blend of colonial history and coastal biodiversity. Our projects focus on environmental conservation and women's empowerment initiatives, from beach cleanups to self reliance workshops.
                                    </p>
                                    
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '16px' }}>Highlights:</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#424245', lineHeight: 1.5 }}>
                                            <div style={{ color: 'var(--primary-green)', marginTop: '4px', fontSize: '0.6rem' }}><i className="fa-solid fa-circle"></i></div>
                                            Focus on pre school teaching, monk teaching, sports coaching, and yoga
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#424245', lineHeight: 1.5 }}>
                                            <div style={{ color: 'var(--primary-green)', marginTop: '4px', fontSize: '0.6rem' }}><i className="fa-solid fa-circle"></i></div>
                                            Includes airport pick up, orientation, accommodation, meals, and 24/7 in country support
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#424245', lineHeight: 1.5 }}>
                                            <div style={{ color: 'var(--primary-green)', marginTop: '4px', fontSize: '0.6rem' }}><i className="fa-solid fa-circle"></i></div>
                                            Accommodation in volunteer houses located near beautiful southern beaches
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#424245', lineHeight: 1.5 }}>
                                            <div style={{ color: 'var(--primary-green)', marginTop: '4px', fontSize: '0.6rem' }}><i className="fa-solid fa-circle"></i></div>
                                            Opportunities to explore historic forts and vibrant coastal towns
                                        </li>
                                    </ul>
                                    
                                    <button style={{
                                        background: 'var(--primary-green)',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '14px 28px',
                                        borderRadius: '8px',
                                        fontWeight: 800,
                                        fontSize: '0.95rem',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}
                                    onClick={() => {
                                        const el = document.getElementById('opportunities');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = '#15803d'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'var(--primary-green)'}
                                    >
                                        Explore Projects
                                    </button>
                                </div>
                                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                                    <img 
                                        src={galleImg} 
                                        alt="Volunteer in Galle" 
                                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }} 
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                                        padding: '40px 24px 24px 24px',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px'
                                    }}>
                                        {['Pre School Teaching', 'Monk Teaching', 'Sports', 'Yoga', 'Community Empowerment'].map((label, i) => (
                                            <span key={i} style={{
                                                background: 'rgba(255, 255, 255, 0.95)',
                                                backdropFilter: 'blur(10px)',
                                                color: '#111',
                                                padding: '6px 14px',
                                                borderRadius: '100px',
                                                fontSize: '0.75rem',
                                                fontWeight: 800,
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px'
                                            }}>
                                                <i className="fa-solid fa-check" style={{ color: 'var(--primary-green)' }}></i>
                                                {label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5: Program Features */}
            <div className="volunteer-section-wrapper bg-soft-green">
                <div className="volunteer-container" style={{ paddingBottom: '60px' }}>
                    {/* Features */}
                    <section className="features-section-modern">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <span style={{ 
                                display: 'inline-block',
                                color: 'var(--primary-green)', 
                                background: 'rgba(27, 163, 82, 0.1)',
                                padding: '8px 20px',
                                borderRadius: '100px',
                                fontWeight: 800, 
                                textTransform: 'uppercase', 
                                letterSpacing: '2px', 
                                fontSize: '0.85rem' 
                            }}>Experience Excellence</span>
                            <h3 style={{ 
                                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                                fontWeight: 900, 
                                color: '#111', 
                                letterSpacing: '-0.03em', 
                                margin: '20px 0 0 0' 
                            }}>Program Features</h3>
                        </div>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
                            gap: '30px' 
                        }}>
                            {[
                                { title: "Project Training", icon: "fa-chalkboard-user", desc: "Comprehensive orientation and hands-on skill training before you start.", color: "#3b82f6", bg: "#eff6ff" },
                                { title: "Local Coordinator", icon: "fa-user-group", desc: "24/7 dedicated support from our experienced on-site leaders.", color: "#10b981", bg: "#ecfdf5" },
                                { title: "Shared Living", icon: "fa-house-chimney", desc: "Safe, comfortable accommodation in volunteer houses or host families.", color: "#f59e0b", bg: "#fffbeb" },
                                { title: "Impact Certificate", icon: "fa-certificate", desc: "Official recognition of your volunteer hours and community contributions.", color: "#8b5cf6", bg: "#f5f3ff" }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: '#fff',
                                    borderRadius: '24px',
                                    padding: '40px 30px',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.04)',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.04)';
                                }}
                                >
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '16px',
                                        background: item.bg,
                                        color: item.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.5rem',
                                        marginBottom: '24px'
                                    }}>
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>
                                    <h4 style={{ 
                                        fontSize: '1.25rem', 
                                        fontWeight: 800, 
                                        color: '#1d1d1f', 
                                        marginBottom: '12px',
                                        letterSpacing: '-0.01em'
                                    }}>{item.title}</h4>
                                    <p style={{ 
                                        fontSize: '0.95rem', 
                                        color: '#64748b', 
                                        lineHeight: 1.6,
                                        margin: 0
                                    }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Ready, Save, GO! Promotional Countdown Banner */}
            <ReadySaveGoBanner />

            {/* Volunteer Opportunities */}
            <VolunteerOpportunities />

            {/* Newsletter Subscription Banner */}
            <NewsletterSubscribeBanner />

            {/* Section 6: Transparent Pricing */}
            <div className="volunteer-section-wrapper bg-soft-gray" id="pricing">
                <div className="volunteer-container" style={{ paddingBottom: 0 }}>
                    {/* Pricing Table Section */}
                    <section style={{ margin: '0 0 40px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Transparent Pricing</span>
                        <h2 className="section-heading-modern" style={{ marginTop: '10px' }}>Program Fees & Comparison</h2>
                        <p className="section-text-modern" style={{ marginTop: '15px', maxWidth: '600px', margin: '15px auto 0' }}>
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
                    <div className="table-container-mobile-wrapper" style={{ overflowX: 'auto', background: '#fff', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.04)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '820px' }}>
                            <thead>
                                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                                    <th style={{ padding: '16px 24px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.5px' }}>Program</th>
                                    <th style={{ padding: '16px 16px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.5px' }}>Stay & Inclusions</th>
                                    <th style={{ padding: '16px 16px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.5px' }}>Total Price</th>
                                    <th style={{ padding: '16px 24px', textAlign: 'right' }}></th>
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
                                            <td data-label="Program" style={{ padding: '14px 24px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: prog.color, flexShrink: 0 }}></div>
                                                    <div style={{ textAlign: 'left' }}>
                                                        <span style={{ fontWeight: 800, fontSize: '0.92rem', color: '#1e293b', display: 'block' }}>{prog.name}</span>
                                                        <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                                                            <span><i className="fa-solid fa-location-dot" style={{ color: 'var(--primary-green)', marginRight: '4px', fontSize: '0.75rem' }}></i>{prog.location}</span>
                                                            <span style={{ color: '#cbd5e1' }}>•</span>
                                                            <span>{prog.support}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-label="Inclusions" style={{ padding: '14px 16px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
                                                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#334155' }}>
                                                        <i className="fa-regular fa-clock" style={{ color: '#64748b', marginRight: '6px', fontSize: '0.75rem' }}></i>{details.isFixed ? `${prog.duration}` : `${selectedWeeks} ${selectedWeeks === 1 ? 'Week' : 'Weeks'}`}
                                                    </span>
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                                        <span style={{ 
                                                            fontSize: '0.68rem', 
                                                            fontWeight: 700, 
                                                            color: '#475569', 
                                                            background: '#f1f5f9', 
                                                            padding: '2px 8px', 
                                                            borderRadius: '6px',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '3px'
                                                        }}>
                                                            <i className="fa-solid fa-house" style={{ marginRight: '4px', fontSize: '0.62rem', color: '#64748b' }}></i>{prog.housing.split(' / ')[0]}
                                                        </span>
                                                        <span style={{ 
                                                            fontSize: '0.68rem', 
                                                            fontWeight: 700, 
                                                            color: '#475569', 
                                                            background: '#f1f5f9', 
                                                            padding: '2px 8px', 
                                                            borderRadius: '6px',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '3px'
                                                        }}>
                                                            <i className="fa-solid fa-utensils" style={{ marginRight: '4px', fontSize: '0.62rem', color: '#64748b' }}></i>{prog.meals}
                                                        </span>
                                                        {(!details.isFixed && selectedWeeks === 1) ? (
                                                            <span style={{ 
                                                                fontSize: '0.68rem', 
                                                                fontWeight: 700, 
                                                                color: '#b45309',
                                                                background: '#fffbeb',
                                                                padding: '2px 8px',
                                                                borderRadius: '6px',
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '3px'
                                                            }}>
                                                                <i className="fa-solid fa-plane" style={{ marginRight: '4px', fontSize: '0.62rem', color: '#b45309' }}></i>Pickup Extra
                                                            </span>
                                                        ) : (
                                                            <span style={{ 
                                                                fontSize: '0.68rem', 
                                                                fontWeight: 700, 
                                                                color: prog.pickup === 'Included' ? '#166534' : '#991b1b',
                                                                background: prog.pickup === 'Included' ? '#f0fdf4' : '#fef2f2',
                                                                padding: '2px 8px',
                                                                borderRadius: '6px',
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '3px'
                                                            }}>
                                                                <i className="fa-solid fa-plane" style={{ marginRight: '4px', fontSize: '0.62rem', color: prog.pickup === 'Included' ? '#166534' : '#991b1b' }}></i>Pickup {prog.pickup}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-label="Price" style={{ padding: '14px 16px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                                        <span style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--primary-green)' }}>
                                                            {formatPrice(details.total)}
                                                        </span>
                                                        {!details.isFixed && (
                                                            <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
                                                                ({formatPrice(details.average)}/wk)
                                                            </span>
                                                        )}
                                                    </div>
                                                    {details.savingPercent > 0 && (
                                                        <span style={{ fontSize: '0.62rem', color: '#166534', fontWeight: 700, background: '#dcfce7', padding: '1px 6px', borderRadius: '4px', marginTop: '2px' }}>
                                                            Save {details.savingPercent}%/wk
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td style={{ padding: '14px 24px', textAlign: 'right' }}>
                                                <Link 
                                                    to={`/volunteer-program/${prog.id}`} 
                                                    className="table-btn"
                                                    style={{ 
                                                        padding: '8px 16px', 
                                                        background: '#f1f5f9', 
                                                        color: '#334155', 
                                                        borderRadius: '10px', 
                                                        fontWeight: 800, 
                                                        fontSize: '0.78rem', 
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
                            box-shadow: 0 4px 12px rgba(27, 163, 82, 0.2);
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
                                    selectedWeeks === 1 ? "Airport Arrival Pickup (Conditions Apply)" : "Airport Arrival Pickup",
                                    "Clean, Safe Accommodation",
                                    "3 Fresh Local Meals Daily",
                                    "24/7 In-Country Support",
                                    "Program Orientation",
                                    "Hands-on Project Training",
                                    "Official Impact Certificate"
                                ].map((inc, i) => (
                                    <li key={i} style={{ 
                                        fontSize: '0.88rem', 
                                        color: '#475569', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '10px', 
                                        fontWeight: 600
                                    }}>
                                        <i className="fa-solid fa-check" 
                                           style={{ color: 'var(--primary-green)', fontSize: '0.85rem' }}></i> {inc}
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
                                    selectedWeeks === 1 ? "Airport Arrival Pickup (1-wk stays)" : null,
                                    "Daily Personal Expenses",
                                    "Weekend Excursion Budgets",
                                    "Some meals mentioned in the itinerary"
                                ].filter(Boolean).map((exc, i) => (
                                    <li key={i} style={{ fontSize: '0.88rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                                        <i className="fa-solid fa-xmark" style={{ color: '#cbd5e1', fontSize: '0.85rem' }}></i> {exc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            </div>

            {/* Section 7: Journey Steps */}
            <div className="volunteer-section-wrapper bg-white">
                <div className="volunteer-container" style={{ paddingBottom: 0 }}>
                    {/* Journey Steps */}
                    <section style={{ margin: '0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem' }}>How It Works</span>
                        <h2 className="section-heading-modern" style={{ marginTop: '12px' }}>Your Impact Journey</h2>
                        <p className="section-text-modern" style={{ marginTop: '16px', maxWidth: '560px', margin: '16px auto 0' }}>
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
                                <span className="journey-step-number">{`0${i + 1}`}</span>
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
            </div>
            </div>

            {/* Section 8: Testimonial Slider */}
            <div className="volunteer-section-wrapper bg-soft-green">
                <div className="volunteer-container" style={{ paddingBottom: 0 }}>
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
            </div>
            </div>

            {/* Final CTA Card */}
            <section className="volunteer-final-cta" style={{
                background: 'linear-gradient(135deg, #111 0%, #061f11 100%)',
                borderRadius: '0px',
                padding: '100px 5%',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
                {/* Glowing background bubble */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(27, 163, 82, 0.08) 0%, transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
                    <span style={{ 
                        color: 'var(--primary-green)', 
                        fontWeight: 800, 
                        textTransform: 'uppercase', 
                        letterSpacing: '2px', 
                        fontSize: '0.85rem',
                        display: 'inline-block',
                        marginBottom: '15px'
                    }}>
                        Get Involved Today
                    </span>
                    
                    <h2 style={{ 
                        fontSize: 'clamp(2rem, 5vw, 3.2rem)', 
                        fontWeight: 900, 
                        marginBottom: '20px', 
                        color: 'white',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1
                    }}>
                        Ready to Make a Difference?
                    </h2>
                    
                    <p style={{ 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        fontSize: '1.1rem', 
                        lineHeight: 1.6, 
                        marginBottom: '40px',
                        fontWeight: 400
                    }}>
                        Join our community of conscious travelers. Take the first step towards a journey that will transform both your life and the communities you touch.
                    </p>
                    
                    <Link to="/volunteer-inquiry" className="btn-modern volunteer-cta-btn" style={{ 
                        padding: '18px 50px', 
                        background: 'var(--primary-green)', 
                        color: 'white', 
                        borderRadius: '100px',
                        fontWeight: 800,
                        fontSize: '1.05rem',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        boxShadow: '0 15px 30px rgba(27, 163, 82, 0.35)',
                        transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        <span>Apply to Volunteer</span>
                        <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.9rem', transition: 'transform 0.3s ease' }}></i>
                    </Link>
                </div>
            </section>

            {/* Map Zoom Modal */}
            {zoomedMap && (
                <div 
                    onClick={() => setZoomedMap(null)}
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 99999,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '20px', backdropFilter: 'blur(5px)', cursor: 'zoom-out'
                    }}
                >
                    <div style={{ position: 'relative', maxWidth: '95%', maxHeight: '95vh' }}>
                        <button 
                            onClick={(e) => { e.stopPropagation(); setZoomedMap(null); }}
                            style={{ position: 'absolute', top: '-40px', right: '0', background: 'transparent', border: 'none', color: '#fff', fontSize: '2.5rem', cursor: 'pointer', lineHeight: 1 }}
                        >
                            &times;
                        </button>
                        <img 
                            src={zoomedMap} 
                            alt="Zoomed Map" 
                            style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', backgroundColor: '#fff' }} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VolunteerPage;
