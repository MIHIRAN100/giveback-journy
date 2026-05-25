import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const offers = [
    {
        tag: "Special Offer",
        title: "Bring a Friend Discount",
        text: "Travel with a partner and get a special discount on your journey.",
        icon: "bi-gift-fill",
        link: "/packages"
    },
    {
        tag: "Transparent",
        title: "No Hidden Fees",
        text: "No registration fees or hidden charges. Pay only for your program.",
        icon: "bi-shield-check",
        link: "/packages"
    },
    {
        tag: "Group Booking",
        title: "Custom Group Plans",
        text: "Traveling with 3 or more people? Contact us for custom team rates.",
        icon: "bi-people-fill",
        link: "/contact"
    }
];

const HeroPromoBadge = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
    const [prevOfferIndex, setPrevOfferIndex] = useState(-1);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [manuallyOpened, setManuallyOpened] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentOfferIndex((prev) => {
                setPrevOfferIndex(prev);
                return (prev + 1) % offers.length;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const isHomePage = location.pathname === '/';

    // Auto-collapse on scroll for subpages
    useEffect(() => {
        if (isHomePage) return;

        const handleScroll = () => {
            if (window.scrollY > 80) {
                if (!manuallyOpened) {
                    setIsCollapsed(true);
                }
            } else {
                setIsCollapsed(false);
                setManuallyOpened(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage, manuallyOpened]);

    if (isHomePage) {
        return (
            <div className="hero-promo-badge" onClick={() => navigate(offers[currentOfferIndex].link)}>
                {offers.map((offer, index) => {
                    let className = "hero-promo-slide-wrapper";
                    if (index === currentOfferIndex) {
                        className += " active";
                    } else if (index === prevOfferIndex) {
                        className += " exit";
                    }

                    return (
                        <div key={index} className={className}>
                            <div className="hero-promo-icon">
                                <i className={`bi ${offer.icon}`}></i>
                            </div>
                            <div className="hero-promo-details">
                                <div className="hero-promo-tag">
                                    {offer.tag}
                                </div>
                                <h4>{offer.title}</h4>
                                <p>{offer.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className={`hero-promo-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            {/* Collapsed Trigger Arrow Button */}
            <div className="promo-badge-trigger" onClick={(e) => {
                e.stopPropagation();
                setIsCollapsed(false);
                setManuallyOpened(true);
            }} title="Expand">
                <i className="bi bi-chevron-right"></i>
            </div>

            {/* Collapse Button (outside badge to prevent overflow:hidden clipping) */}
            <button className="promo-close-btn" onClick={(e) => {
                e.stopPropagation();
                setIsCollapsed(true);
                setManuallyOpened(false);
            }} title="Collapse">
                <i className="bi bi-chevron-left"></i>
            </button>

            {/* Main Badge Card */}
            <div className="hero-promo-badge" onClick={() => navigate(offers[currentOfferIndex].link)}>

                {offers.map((offer, index) => {
                    let className = "hero-promo-slide-wrapper";
                    if (index === currentOfferIndex) {
                        className += " active";
                    } else if (index === prevOfferIndex) {
                        className += " exit";
                    }

                    return (
                        <div key={index} className={className}>
                            <div className="hero-promo-icon">
                                <i className={`bi ${offer.icon}`}></i>
                            </div>
                            <div className="hero-promo-details">
                                <div className="hero-promo-tag">
                                    {offer.tag}
                                </div>
                                <h4>{offer.title}</h4>
                                <p>{offer.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HeroPromoBadge;
