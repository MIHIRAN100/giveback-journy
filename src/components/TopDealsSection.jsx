import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import brandLogo from '../assets/brand_logo.png';
import gbRoundLogo from '../assets/gb_round_logo.png';
import { useCurrency } from '../context/CurrencyContext';

const TopDealsSection = () => {
    const { formatPrice } = useCurrency();
    const scrollRef = useRef(null);
    const [activeTab, setActiveTab] = useState('Top deals');
    const [wishlist, setWishlist] = useState({});

    const tabs = [
        'Top deals',
        'Signature Deals',
        'Cultural Triangle',
        'Hill Country',
        'Wildlife Safaris',
        'Southern Coast'
    ];

    // Map discount percentages for featured deal cards
    const discounts = {
        1: 40,
        2: 32,
        3: 50,
        4: 30,
        6: 25,
        8: 50,
        9: 35,
        10: 28,
        11: 45,
        12: 50,
        13: 40,
        14: 35
    };

    const reviewCounts = {
        1: 245,
        2: 180,
        3: 290,
        4: 115,
        6: 95,
        8: 204,
        9: 160,
        10: 140,
        11: 175,
        12: 210,
        13: 195,
        14: 150
    };

    const ratings = {
        1: 5.0,
        2: 4.9,
        3: 4.8,
        4: 4.9,
        6: 4.7,
        8: 4.9,
        9: 4.8,
        10: 4.9,
        11: 5.0,
        12: 4.9,
        13: 5.0,
        14: 4.8
    };

    // Filter packages based on tab
    const getFilteredPackages = () => {
        if (activeTab === 'Top deals' || activeTab === 'Signature Deals') {
            return tourPackages;
        }
        return tourPackages.filter(pkg => {
            const text = (pkg.name + ' ' + pkg.description).toLowerCase();
            if (activeTab === 'Cultural Triangle') return text.includes('kandy') || text.includes('sigiriya') || text.includes('heritage');
            if (activeTab === 'Hill Country') return text.includes('ella') || text.includes('mountain') || text.includes('train') || text.includes('peak');
            if (activeTab === 'Wildlife Safaris') return text.includes('wild') || text.includes('safari') || text.includes('elephant');
            if (activeTab === 'Southern Coast') return text.includes('galle') || text.includes('hikkaduwa') || text.includes('coast') || text.includes('beach');
            return true;
        });
    };

    const filteredList = getFilteredPackages();

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 320;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const toggleWishlist = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section className="top-deals-section" style={{ padding: '35px 0 15px', maxWidth: '1280px', margin: '0 auto' }}>
            <div className="section-container" style={{ padding: '0 20px' }}>
                {/* Header with Category Filter Pills & Controls */}
                <div className="top-deals-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', flexWrap: 'wrap', marginBottom: '25px' }}>
                    {/* Left Scrollable Filter Tabs */}
                    <div className="top-deals-tabs" style={{ display: 'flex', alignItems: 'center', gap: '10px', overflowX: 'auto', paddingBottom: '5px', scrollbarWidth: 'none' }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    padding: '9px 20px',
                                    borderRadius: '500px',
                                    border: activeTab === tab ? 'none' : '1px solid #e2e8f0',
                                    background: activeTab === tab ? '#1e293b' : '#ffffff',
                                    color: activeTab === tab ? '#ffffff' : '#475569',
                                    fontWeight: 700,
                                    fontSize: '0.88rem',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.25s ease',
                                    boxShadow: activeTab === tab ? '0 4px 12px rgba(30, 41, 59, 0.25)' : 'none'
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Right Controls: Arrow Buttons & View All Link */}
                    <div className="top-deals-controls" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button
                            onClick={() => scroll('left')}
                            style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                border: '1px solid #e2e8f0',
                                background: '#ffffff',
                                color: '#1e293b',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                            }}
                            aria-label="Previous"
                        >
                            <i className="bi bi-chevron-left" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}></i>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                border: '1px solid #e2e8f0',
                                background: '#ffffff',
                                color: '#1e293b',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                            }}
                            aria-label="Next"
                        >
                            <i className="bi bi-chevron-right" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}></i>
                        </button>
                        <Link
                            to="/packages"
                            style={{
                                padding: '9px 20px',
                                borderRadius: '500px',
                                background: '#e0f2fe',
                                color: '#0284c7',
                                fontWeight: 800,
                                fontSize: '0.88rem',
                                textDecoration: 'none',
                                transition: 'all 0.25s ease',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                        >
                            View all deals
                        </Link>
                    </div>
                </div>

                {/* Tour Cards Grid Row / Slider */}
                <div
                    ref={scrollRef}
                    className="top-deals-grid"
                    style={{
                        display: 'flex',
                        gap: '20px',
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        paddingBottom: '15px',
                        scrollbarWidth: 'none'
                    }}
                >
                    {filteredList.map((pkg) => {
                        const numericPrice = parseInt((pkg.price || '$650').replace(/[^0-9]/g, ''), 10) || 650;
                        const discountPercent = discounts[pkg.id] || 35;
                        const originalPrice = Math.round(numericPrice / (1 - discountPercent / 100));
                        const rating = ratings[pkg.id] || 4.9;
                        const reviews = reviewCounts[pkg.id] || 120;
                        const durationText = pkg.days ? pkg.days.split(' / ')[0] : '7 Days';

                        return (
                            <Link
                                to={`/package/${pkg.id}`}
                                key={pkg.id}
                                className="top-deal-card"
                                style={{
                                    flex: '0 0 260px',
                                    scrollSnapAlign: 'start',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    borderRadius: '18px',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Card Image Container */}
                                <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '18px', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        className="top-deal-img"
                                    />
                                    {/* Discount Badge */}
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: '12px',
                                            left: '12px',
                                            background: '#ef4444',
                                            color: '#ffffff',
                                            padding: '4px 10px',
                                            borderRadius: '500px',
                                            fontSize: '0.75rem',
                                            fontWeight: 800,
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        -{discountPercent}% OFF
                                    </span>
                                    {/* Wishlist Heart Button */}
                                    <button
                                        onClick={(e) => toggleWishlist(e, pkg.id)}
                                        style={{
                                            position: 'absolute',
                                            top: '12px',
                                            right: '12px',
                                            width: '34px',
                                            height: '34px',
                                            borderRadius: '50%',
                                            background: '#ffffff',
                                            border: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                            transition: 'transform 0.2s ease'
                                        }}
                                        aria-label="Save to Wishlist"
                                    >
                                        <i
                                            className={`bi ${wishlist[pkg.id] ? 'bi-heart-fill' : 'bi-heart'}`}
                                            style={{ color: wishlist[pkg.id] ? '#ef4444' : '#475569', fontSize: '0.95rem' }}
                                        ></i>
                                    </button>
                                </div>

                                {/* Card Details */}
                                <div style={{ padding: '14px 4px 6px' }}>
                                    {/* Title */}
                                    <h3
                                        style={{
                                            fontSize: '1.05rem',
                                            fontWeight: 800,
                                            color: '#0f172a',
                                            margin: '0 0 6px 0',
                                            lineHeight: 1.3,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {pkg.name}
                                    </h3>

                                    {/* Duration & Rating */}
                                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, marginBottom: '8px' }}>
                                        {durationText} • {rating.toFixed(1)} <span style={{ color: '#0f172a' }}>★</span> ({reviews})
                                    </div>

                                    {/* Card Pricing Layout matching reference image 1-to-1 */}
                                    <div style={{ marginTop: '6px', marginBottom: '6px' }}>
                                        {/* Line 1: From OriginalPrice */}
                                        <div style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 500, marginBottom: '2px' }}>
                                            <span>From </span>
                                            <span style={{ textDecoration: 'line-through', color: '#dc2626' }}>
                                                {formatPrice(originalPrice)}
                                            </span>
                                        </div>

                                        {/* Line 2: DiscountedPrice per person */}
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
                                            <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a' }}>
                                                {formatPrice(numericPrice)}
                                            </span>
                                            <span style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>per person</span>
                                        </div>

                                        {/* Line 3: Circular GB Logo + Unlock Exclusive Savings */}
                                        <div style={{ fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <img src={gbRoundLogo} alt="GB Logo" style={{ height: '18px', width: '18px', objectFit: 'contain' }} />
                                            <span style={{ color: '#0284c7', fontWeight: 800 }}>Unlock</span>
                                            <span style={{ color: '#475569', fontWeight: 600 }}>Exclusive Savings</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TopDealsSection;
