import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import { volunteerPrograms as opportunities } from '../data/volunteerPrograms';
import bannerCardImg from '../assets/b7f8179e-7e30-41bb-bb99-477f25c24d60.jpg';

const VolunteerOpportunities = () => {
    const { formatPrice, currency } = useCurrency();
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('All Projects');

    // Categorization helper
    const getCategory = (opp) => {
        if (opp.category) return opp.category;
        const title = (opp.title + ' ' + opp.id).toLowerCase();
        if (title.includes('women') || title.includes('female')) return 'Women Empowerment';
        if (title.includes('construction') || title.includes('renovation') || title.includes('village-school')) return 'Construction & Renovation';
        if (title.includes('teach') || title.includes('childcare') || title.includes('education')) return 'Teaching & Education';
        if (title.includes('special') || title.includes('needs')) return 'Special Needs Support';
        if (title.includes('medical') || title.includes('health')) return 'Medical & Healthcare';
        if (title.includes('combo') || title.includes('real-sri-lanka') || title.includes('breathe') || title.includes('professional')) return 'Combo & Impact';
        return 'Other';
    };

    const categories = [
        'All Projects',
        'Women Empowerment',
        'Construction & Renovation',
        'Teaching & Education',
        'Special Needs Support',
        'Medical & Healthcare',
        'Combo & Impact'
    ];

    const filteredOpportunities = opportunities.filter(opp => {
        if (activeCategory === 'All Projects') return true;
        return getCategory(opp) === activeCategory;
    });

    return (
        <section id="opportunities" className="volunteer-opp-section">
            <style>{`
                .volunteer-opp-section {
                    padding: 70px 5%;
                    background: #f4f8f6;
                    position: relative;
                }

                .volunteer-opp-container {
                    max-width: 1440px;
                    margin: 0 auto;
                }

                .volunteer-opp-header {
                    margin-bottom: 25px;
                }

                .volunteer-tag {
                    color: #1ba352;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.8rem;
                    display: block;
                    margin-bottom: 6px;
                }

                .volunteer-opp-title {
                    font-size: 2.4rem;
                    font-weight: 900;
                    color: #111827;
                    letter-spacing: -0.03em;
                    margin: 0;
                }

                /* Filter Tab Bar */
                .volunteer-tab-wrapper {
                    position: relative;
                    margin-bottom: 35px;
                    border-bottom: 1px solid #cbd5e1;
                }

                .volunteer-tab-list {
                    display: flex;
                    gap: 28px;
                    overflow-x: auto;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                    margin-bottom: -1px;
                }

                .volunteer-tab-list::-webkit-scrollbar {
                    display: none;
                }

                .volunteer-tab-item {
                    background: none;
                    border: none;
                    padding: 10px 0 14px 0;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #64748b;
                    cursor: pointer;
                    white-space: nowrap;
                    position: relative;
                    transition: color 0.2s ease;
                    font-family: inherit;
                }

                .volunteer-tab-item:hover {
                    color: #1ba352;
                }

                .volunteer-tab-item.active {
                    color: #0f172a;
                    font-weight: 800;
                }

                .tab-active-line {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background-color: #1ba352;
                    border-radius: 3px 3px 0 0;
                }

                /* Grid Layout */
                .volunteer-card-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                }

                @media (max-width: 1280px) {
                    .volunteer-card-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 920px) {
                    .volunteer-card-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 580px) {
                    .volunteer-card-grid {
                        grid-template-columns: 1fr;
                    }
                    .volunteer-opp-title {
                        font-size: 1.8rem;
                    }
                }

                /* Compact Modern Cards */
                .opp-card-modern {
                    background: #ffffff;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border: 1px solid rgba(0,0,0,0.06);
                    display: flex;
                    flex-direction: column;
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }

                .opp-card-modern:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
                    border-color: rgba(27, 163, 82, 0.25);
                }

                .opp-card-img-wrap {
                    height: 125px;
                    overflow: hidden;
                    position: relative;
                }

                .card-img-zoom {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }

                .opp-card-modern:hover .card-img-zoom {
                    transform: scale(1.08);
                }

                .opp-badge-tag {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    backdrop-filter: blur(8px);
                    padding: 3px 8px;
                    border-radius: 6px;
                    font-size: 0.62rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.4px;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    z-index: 2;
                }

                .opp-duration-pill {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.35);
                    color: white;
                    padding: 3px 8px;
                    border-radius: 100px;
                    font-size: 0.62rem;
                    font-weight: 700;
                    z-index: 2;
                }

                .opp-card-content {
                    padding: 14px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .opp-location-row {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-bottom: 6px;
                }

                .opp-location-text {
                    font-size: 0.68rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .opp-card-heading {
                    font-size: 0.92rem;
                    font-weight: 800;
                    margin: 0 0 8px 0;
                    color: #0f172a;
                    line-height: 1.25;
                    height: 2.5em;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                /* Metadata Grid */
                .opp-meta-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 6px;
                    margin-bottom: 10px;
                    padding: 6px 8px;
                    background: #f8fafc;
                    border-radius: 10px;
                    border: 1px solid #f1f5f9;
                }

                .opp-meta-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.68rem;
                    font-weight: 600;
                    color: #475569;
                }

                .opp-meta-item i {
                    color: #64748b;
                    font-size: 0.68rem;
                }

                /* Compact Price Box */
                .opp-price-box {
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    padding: 8px 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 12px;
                    background: #fafcff;
                }

                .opp-price-main {
                    flex: 1;
                }

                .opp-price-label {
                    font-size: 0.6rem;
                    color: #64748b;
                    font-weight: 600;
                    line-height: 1;
                    margin-bottom: 2px;
                }

                .opp-price-val {
                    font-size: 1.35rem;
                    font-weight: 900;
                    color: #0f172a;
                    line-height: 1;
                    display: flex;
                    align-items: flex-start;
                }

                .opp-price-symbol {
                    font-size: 0.75rem;
                    margin-top: 2px;
                    margin-right: 1px;
                    font-weight: 700;
                }

                .opp-price-was-wrap {
                    padding-left: 10px;
                    border-left: 1px solid #e2e8f0;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }

                .opp-price-was {
                    font-size: 0.6rem;
                    color: #94a3b8;
                    font-weight: 600;
                    text-decoration: line-through;
                    margin-bottom: 2px;
                }

                .opp-price-save {
                    font-size: 0.58rem;
                    color: #ef4444;
                    font-weight: 800;
                    background: #fee2e2;
                    padding: 2px 6px;
                    border-radius: 100px;
                }

                /* Promo Advertising Banner Card (matching reference screenshot) */
                .opp-banner-card {
                    background: #ffffff;
                    border-radius: 20px;
                    border: 1px solid #e2e8f0;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    display: flex;
                    flex-direction: column;
                    padding: 16px;
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .opp-banner-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
                    border-color: rgba(15, 23, 42, 0.3);
                }

                .banner-card-img-wrap {
                    height: 180px;
                    border-radius: 14px;
                    overflow: hidden;
                    margin-bottom: 16px;
                }

                .banner-card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }

                .opp-banner-card:hover .banner-card-img {
                    transform: scale(1.06);
                }

                .banner-card-content {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                .banner-card-title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    line-height: 1.25;
                    color: #0f172a;
                    margin: 0 0 10px 0;
                    letter-spacing: -0.3px;
                }

                .banner-card-text {
                    font-size: 0.86rem;
                    color: #475569;
                    line-height: 1.48;
                    margin: 0 0 18px 0;
                    flex: 1;
                }

                .banner-card-outline-btn {
                    background: #ffffff;
                    color: #0f172a;
                    border: 1.5px solid #0f172a;
                    padding: 12px 18px;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                    text-align: center;
                    width: 100%;
                    transition: all 0.25s ease;
                    font-family: inherit;
                    display: block;
                    box-sizing: border-box;
                }

                .banner-card-outline-btn:hover {
                    background: #0f172a;
                    color: #ffffff;
                    transform: translateY(-2px);
                }
            `}</style>

            <div className="volunteer-opp-container">
                {/* Header */}
                <div className="volunteer-opp-header">
                    <span className="volunteer-tag">Open Positions</span>
                    <h2 className="volunteer-opp-title">
                        Best {activeCategory === 'All Projects' ? 'Volunteer & Travel' : activeCategory} opportunities in Sri Lanka
                    </h2>
                </div>

                {/* Filter Tabs */}
                <div className="volunteer-tab-wrapper">
                    <div className="volunteer-tab-list">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`volunteer-tab-item ${activeCategory === cat ? 'active' : ''}`}
                            >
                                {cat}
                                {activeCategory === cat && <div className="tab-active-line" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Card Grid */}
                <div className="volunteer-card-grid">
                    {filteredOpportunities.map((opp, i) => {
                        const isExclusive = opp.id === 'professional-impact-program';
                        const badgeColor = isExclusive ? '#3b7fba' : 'rgba(27, 163, 82, 0.9)';
                        const locationColor = opp.color || '#1ba352';

                        const isLastCard = i === filteredOpportunities.length - 1;

                        const cardJSX = (
                            <Link key={i} to={`/volunteer-program/${opp.id}`} className="opp-card-modern" style={{ textDecoration: 'none', color: 'inherit' }}>
                                {/* Image Header */}
                                <div className="opp-card-img-wrap">
                                    <img
                                        src={opp.image}
                                        alt={opp.title}
                                        className="card-img-zoom"
                                        style={{ objectPosition: opp.bgPosition || 'center' }}
                                    />

                                    {/* Top Left Badge */}
                                    <div
                                        className="opp-badge-tag"
                                        style={{
                                            background: badgeColor,
                                            color: isExclusive ? '#ffffff' : '#ffffff',
                                            boxShadow: isExclusive ? '0 4px 10px rgba(59, 127, 186, 0.3)' : 'none'
                                        }}
                                    >
                                        {isExclusive ? (
                                            <>
                                                <i className="fa-solid fa-crown"></i> Exclusive
                                            </>
                                        ) : (
                                            <>
                                                <i className="fa-solid fa-circle-check"></i> Verified
                                            </>
                                        )}
                                    </div>

                                    {/* Top Right Duration Pill */}
                                    <div className="opp-duration-pill">
                                        {opp.duration}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="opp-card-content">
                                    {/* Location */}
                                    <div className="opp-location-row">
                                        <i className="fa-solid fa-location-dot" style={{ color: '#000000', fontSize: '0.68rem' }}></i>
                                        <span className="opp-location-text" style={{ color: '#000000' }}>
                                            {opp.location}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="opp-card-heading">
                                        {opp.title}
                                    </h3>

                                    {/* Rating & Bookings Row */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '0.72rem',
                                        margin: '0 0 8px 0',
                                        flexWrap: 'wrap'
                                    }}>
                                        <span style={{ color: '#1ba352', fontWeight: 800 }}>★ {opp.rating || '4.9'}</span>
                                        <span style={{ color: '#1ba352', fontWeight: 600 }}>({opp.reviewsCount || Math.floor(35 + (opp.id.length * 3.5))})</span>
                                        <span style={{ color: '#cbd5e1' }}>·</span>
                                        <span style={{ color: '#000000', fontWeight: 700, background: '#f8fafc', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                                            <i className="fa-solid fa-fire" style={{ fontSize: '0.65rem', color: '#1ba352' }}></i>
                                            {opp.bookedText || `${Math.floor(75 + (opp.id.length * 8))}+ booked`}
                                        </span>
                                    </div>

                                    {/* Short Description */}
                                    <p className="opp-card-desc" style={{
                                        fontSize: '0.76rem',
                                        color: '#64748b',
                                        lineHeight: 1.4,
                                        margin: '0 0 10px 0',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {opp.shortDesc}
                                    </p>

                                    {/* Compact Metadata Grid */}
                                    <div className="opp-meta-grid">
                                        <div className="opp-meta-item">
                                            <i className="fa-solid fa-user-check"></i>
                                            <span>Age {opp.minAge || '18+'}</span>
                                        </div>
                                        <div className="opp-meta-item">
                                            <i className="fa-solid fa-utensils"></i>
                                            <span>{opp.meals || '3'} Meals</span>
                                        </div>
                                        <div className="opp-meta-item">
                                            <i className="fa-solid fa-plane-arrival"></i>
                                            <span>Pickup</span>
                                        </div>
                                        <div className="opp-meta-item">
                                            <i className="fa-solid fa-house-chimney"></i>
                                            <span>Housing</span>
                                        </div>
                                    </div>

                                    {/* Price Box & Free Itinerary Customization Container (1-to-1 match with reference screenshot) */}
                                    <div style={{
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        marginTop: '12px',
                                        background: '#ffffff'
                                    }}>
                                        {/* Main Price Grid (2 Columns) */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'stretch',
                                            justifyContent: 'space-between',
                                            padding: '14px 14px'
                                        }}>
                                            {/* Left: Duration & Price */}
                                            <div style={{ flex: 1, paddingRight: '10px' }}>
                                                <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: 700, marginBottom: '4px' }}>
                                                    {opp.duration} from ({currency || 'USD'})
                                                </div>
                                                <div style={{ fontSize: '1.7rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>
                                                    {formatPrice(opp.price)}
                                                </div>
                                                <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>
                                                    Per person (all-inclusive)
                                                </div>
                                            </div>

                                            {/* Right: Regular Price & Discount Pill */}
                                            {opp.wasPrice && (
                                                <div style={{
                                                    paddingLeft: '12px',
                                                    borderLeft: '1px solid #e2e8f0',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'flex-start'
                                                }}>
                                                    <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>
                                                        Regular Price
                                                    </div>
                                                    <div style={{ fontSize: '0.9rem', color: '#334155', textDecoration: 'line-through', fontWeight: 700, margin: '2px 0 4px 0' }}>
                                                        {formatPrice(opp.wasPrice)}
                                                    </div>
                                                    <div style={{
                                                        background: '#fff1f2',
                                                        color: '#e11d48',
                                                        padding: '2px 8px',
                                                        borderRadius: '100px',
                                                        fontSize: '0.68rem',
                                                        fontWeight: 800
                                                    }}>
                                                        SAVE {Math.round(((parseInt(opp.wasPrice) - parseInt(opp.price)) / parseInt(opp.wasPrice)) * 100)}%
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Bottom Bar: Free Project Customization */}
                                        <div style={{
                                            background: '#f8fafc',
                                            borderTop: '1px solid #e2e8f0',
                                            padding: '10px 14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            color: '#334155',
                                            fontSize: '0.82rem',
                                            fontWeight: 700
                                        }}>
                                            <i className="fa-solid fa-sliders" style={{ fontSize: '0.88rem', color: '#16a34a' }}></i>
                                            <span>Free Project Customization</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );

                        if (isLastCard) {
                            return (
                                <React.Fragment key={i}>
                                    {/* Custom Promo Banner Card (inserted BEFORE last card) */}
                                    <div className="opp-banner-card">
                                        <div className="banner-card-img-wrap">
                                            <img src={bannerCardImg} alt="Custom Trip Banner" className="banner-card-img" />
                                        </div>
                                        <div className="banner-card-content">
                                            <h3 className="banner-card-title">
                                                Custom trip or volunteering? It's your choice!
                                            </h3>
                                            <p className="banner-card-text">
                                                Want more flexibility for your travel? You can now book select packages with or without community volunteer projects to suit your pace.
                                            </p>

                                            {/* Feature Checkmarks list (from reference screenshot) */}
                                            <ul style={{
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: '0 0 16px 0',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '8px'
                                            }}>
                                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: '#334155', fontWeight: 600, lineHeight: 1.35 }}>
                                                    <i className="fa-solid fa-check" style={{ color: '#0f172a', marginTop: '2px', fontSize: '0.72rem', fontWeight: 900 }}></i>
                                                    <span>Get expert advice at no extra cost</span>
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: '#334155', fontWeight: 600, lineHeight: 1.35 }}>
                                                    <i className="fa-solid fa-check" style={{ color: '#0f172a', marginTop: '2px', fontSize: '0.72rem', fontWeight: 900 }}></i>
                                                    <span>Discuss holiday packages and itineraries</span>
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: '#334155', fontWeight: 600, lineHeight: 1.35 }}>
                                                    <i className="fa-solid fa-check" style={{ color: '#0f172a', marginTop: '2px', fontSize: '0.72rem', fontWeight: 900 }}></i>
                                                    <span>Customize projects, add extra days, and more</span>
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: '#334155', fontWeight: 600, lineHeight: 1.35 }}>
                                                    <i className="fa-solid fa-check" style={{ color: '#0f172a', marginTop: '2px', fontSize: '0.72rem', fontWeight: 900 }}></i>
                                                    <span>Book over the phone or online</span>
                                                </li>
                                            </ul>

                                            {/* Website Brand Blue Call Button */}
                                            <button
                                                onClick={() => window.location.href = 'tel:+94774944909'}
                                                style={{
                                                    background: '#3b7fba',
                                                    color: '#ffffff',
                                                    border: 'none',
                                                    padding: '12px 18px',
                                                    borderRadius: '10px',
                                                    fontWeight: 800,
                                                    fontSize: '0.9rem',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '8px',
                                                    width: '100%',
                                                    boxShadow: '0 4px 14px rgba(59, 127, 186, 0.3)',
                                                    transition: 'all 0.25s ease',
                                                    fontFamily: 'inherit',
                                                    marginTop: 'auto'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.background = '#2c689c'}
                                                onMouseLeave={(e) => e.currentTarget.style.background = '#3b7fba'}
                                            >
                                                <i className="fa-solid fa-phone" style={{ fontSize: '0.85rem' }}></i>
                                                <span>Call +94 77 494 4909</span>
                                            </button>
                                        </div>
                                    </div>
                                    {cardJSX}
                                </React.Fragment>
                            );
                        }

                        return cardJSX;
                    })}
                </div>
            </div>
        </section>
    );
};

export default VolunteerOpportunities;
