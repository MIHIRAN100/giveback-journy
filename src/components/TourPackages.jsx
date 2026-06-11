import React from 'react';
import { Link } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import { useCurrency } from '../context/CurrencyContext';

export const TourCard = ({ pkg, isExactMatch, isRecommendation }) => {
    const { formatPrice } = useCurrency();
    const getPriceVal = () => {
        const basePriceVal = parseInt(pkg.price.replace('$', '').replace(',', ''));
        if (pkg.id === 1) return 840;
        if (pkg.id === 2) return 600;
        return basePriceVal;
    };

    const getDiscountFactor = () => {
        const factors = [0.65, 0.75, 0.8, 0.7, 0.85];
        return factors[pkg.id % factors.length];
    };

    const originalPrice = Math.floor(getPriceVal() / getDiscountFactor());
    const discountPercent = Math.round((1 - getPriceVal() / originalPrice) * 100);
    const getPrice = () => formatPrice(getPriceVal());
    const getOriginalPrice = () => formatPrice(originalPrice);

    // Days & nights
    const daysNum = parseInt(pkg.days);
    const nightsNum = daysNum > 1 ? daysNum - 1 : 0;

    // Determine category & location from tour data
    const getCategory = () => {
        if (pkg.isVolunteer) return 'Volunteering & Impact';
        const name = (pkg.name + ' ' + pkg.description).toLowerCase();
        if (name.includes('safari') || name.includes('wild') || name.includes('leopard') || name.includes('elephant')) return 'Outdoor & sports activities';
        if (name.includes('beach') || name.includes('coast') || name.includes('surf') || name.includes('southern')) return 'Tours';
        if (name.includes('temple') || name.includes('cultural') || name.includes('heritage') || name.includes('kandy')) return 'Tours';
        if (name.includes('rainforest') || name.includes('trek') || name.includes('hike')) return 'Nature & adventure';
        return 'Tours';
    };

    const getLocation = () => {
        if (pkg.location) return pkg.location;
        const name = (pkg.name + ' ' + pkg.description).toLowerCase();
        if (name.includes('kandy')) return 'Kandy';
        if (name.includes('galle')) return 'Galle';
        if (name.includes('ella')) return 'Ella';
        if (name.includes('sigiriya') || name.includes('dambulla')) return 'Dambulla';
        if (name.includes('yala')) return 'Yala';
        if (name.includes('kitulgala')) return 'Kitulgala';
        if (name.includes('sinharaja')) return 'Sinharaja';
        return 'Sri Lanka';
    };

    // Generate booking popularity text
    const getBookingInfo = () => {
        if (pkg.rating >= 5.0) return 'New Activity';
        const booked = Math.floor(pkg.rating * 20 + pkg.id * 7);
        if (booked > 80) return `${Math.floor(booked / 10) * 10}+ booked`;
        return null;
    };

    const reviewCount = pkg.reviews ? pkg.reviews.length : Math.floor(pkg.rating * 3);

    return (
        <Link to={pkg.isVolunteer ? `/volunteer-program/real-sri-lanka-experience` : `/package/${pkg.id}`} className={`package-card gyg-card ${isExactMatch ? 'exact-match' : ''} ${isRecommendation ? 'recommendation-card' : ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="gyg-card-img-wrapper">
                <img src={pkg.image} alt={pkg.name} className="gyg-card-img" />
                {pkg.name.includes('Breathe Sri Lanka') && (
                    <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--primary-green)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', zIndex: 10, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                        Volunteer Combined
                    </div>
                )}
                {/* Days / Nights badge */}
                <div className="gyg-days-badge">
                    <span className="gyg-days-num">{daysNum}</span>
                    <span className="gyg-days-label">Days</span>
                    {nightsNum > 0 && (
                        <>
                            <span className="gyg-days-divider"></span>
                            <span className="gyg-days-num">{nightsNum}</span>
                            <span className="gyg-days-label">Nights</span>
                        </>
                    )}
                </div>
                {/* Discount badge */}
                {discountPercent > 0 && (
                    <div className="gyg-discount-badge" style={pkg.name.includes('Breathe Sri Lanka') ? { top: '44px', left: '10px' } : {}}>
                        -{discountPercent}%
                    </div>
                )}
            </div>
            <div className="gyg-card-body">
                {/* Category • Location */}
                <div className="gyg-card-category">
                    {getCategory()} • {getLocation()}
                </div>

                {/* Title */}
                <h3 className="gyg-card-title">{pkg.name}</h3>

                {/* Meta tags */}
                <div className="gyg-card-meta">
                    <span className="gyg-meta-tag">Book now for tomorrow</span>
                    <span className="gyg-meta-tag">{pkg.days.includes('Day') ? pkg.days : `${pkg.days.split(' ')[0]}-day tour`}</span>
                </div>

                {/* Rating row */}
                <div className="gyg-card-rating-row">
                    <span className="gyg-star">★</span>
                    <span className="gyg-rating-score">{pkg.rating}</span>
                    <span className="gyg-rating-count">({reviewCount})</span>
                    {getBookingInfo() && (
                        <>
                            <span className="gyg-rating-dot">·</span>
                            <span className="gyg-booking-info">{getBookingInfo()}</span>
                        </>
                    )}
                </div>

                {/* Price + More button */}
                <div className="gyg-card-footer">
                    <div className="gyg-card-price">
                        {originalPrice > getPriceVal() ? (
                            <>
                                <span className="gyg-price-current">{getPrice()}</span>
                                <span className="gyg-price-original">{getOriginalPrice()}</span>
                            </>
                        ) : (
                            <span className="gyg-price-from">From <strong>{getPrice()}</strong></span>
                        )}
                    </div>
                    <span className="gyg-more-btn">More</span>
                </div>
            </div>
        </Link>
    );
};

const TourPackages = ({ searchTerm }) => {
    const [filterCategory, setFilterCategory] = React.useState('all');

    // Sidebar Filter States
    const [minDuration, setMinDuration] = React.useState('any');
    const [maxDuration, setMaxDuration] = React.useState('any');
    const [minPrice, setMinPrice] = React.useState('');
    const [maxPrice, setMaxPrice] = React.useState('');
    const [tripsOnSale, setTripsOnSale] = React.useState(false);
    const [saleNowOn, setSaleNowOn] = React.useState(false);
    const [earlyBird, setEarlyBird] = React.useState(false);
    const [minRating, setMinRating] = React.useState('any');
    const [intensityEasy, setIntensityEasy] = React.useState(false);
    const [intensityModerate, setIntensityModerate] = React.useState(false);
    const [intensityChallenging, setIntensityChallenging] = React.useState(false);

    // Expandable sections
    const [durationExpanded, setDurationExpanded] = React.useState(true);
    const [priceExpanded, setPriceExpanded] = React.useState(true);
    const [dealsExpanded, setDealsExpanded] = React.useState(true);
    const [intensityExpanded, setIntensityExpanded] = React.useState(true);
    const [ratingExpanded, setRatingExpanded] = React.useState(true);

    const handleReset = () => {
        setFilterCategory('all');
        setMinDuration('any');
        setMaxDuration('any');
        setMinPrice('');
        setMaxPrice('');
        setTripsOnSale(false);
        setSaleNowOn(false);
        setEarlyBird(false);
        setMinRating('any');
        setIntensityEasy(false);
        setIntensityModerate(false);
        setIntensityChallenging(false);
    };

    // Check if the searchTerm is an exact match
    const searchLower = (searchTerm || "").toLowerCase();
    const exactMatch = searchLower.length > 2 
        ? tourPackages.find(pkg => pkg.name.toLowerCase().includes(searchLower))
        : null;

    const filteredPackages = tourPackages.filter(pkg => {
        // Search Filter
        const searchWords = searchLower.split(' ').filter(w => w.length > 0);
        const searchMatch = searchWords.every(word => {
            const inName = pkg.name.toLowerCase().includes(word);
            const inDesc = pkg.description.toLowerCase().includes(word);
            return inName || inDesc;
        });

        if (!searchMatch) return false;

        // Duration Filter
        const days = parseInt(pkg.days);
        if (minDuration !== 'any' && days < parseInt(minDuration)) return false;
        if (maxDuration !== 'any' && days > parseInt(maxDuration)) return false;

        // Price Filter
        const getPriceVal = () => {
            const basePriceVal = parseInt(pkg.price.replace('$', '').replace(',', ''));
            if (pkg.id === 1) return 840;
            if (pkg.id === 2) return 600;
            return basePriceVal;
        };
        const priceVal = getPriceVal();
        if (minPrice && priceVal < parseInt(minPrice)) return false;
        if (maxPrice && priceVal > parseInt(maxPrice)) return false;

        // Deals Filter
        const getDiscountFactor = () => {
            const factors = [0.65, 0.75, 0.8, 0.7, 0.85];
            return factors[pkg.id % factors.length];
        };
        const originalPrice = Math.floor(priceVal / getDiscountFactor());
        const discountPercent = Math.round((1 - priceVal / originalPrice) * 100);

        if (tripsOnSale && discountPercent <= 20) return false;
        if (saleNowOn && pkg.id !== 6 && pkg.id % 2 !== 0) return false;
        if (earlyBird && pkg.rating < 4.8) return false;

        // Review Rating Filter
        if (minRating !== 'any' && pkg.rating < parseFloat(minRating)) return false;

        // Physical Intensity Filter
        const intensity = pkg.physicalIntensity || 2;
        const isEasy = intensity <= 2;
        const isModerate = intensity === 3 || intensity === 4;
        const isChallenging = intensity === 5;
        const hasIntensityFilter = intensityEasy || intensityModerate || intensityChallenging;
        if (hasIntensityFilter) {
            if (intensityEasy && isEasy) {
                // match
            } else if (intensityModerate && isModerate) {
                // match
            } else if (intensityChallenging && isChallenging) {
                // match
            } else {
                return false;
            }
        }

        // Category Filter
        const tags = (pkg.name + pkg.description + (pkg.tags ? pkg.tags.join(' ') : '')).toLowerCase();
        if (filterCategory === 'wildlife' && !tags.includes('wild') && !tags.includes('nature') && !tags.includes('safari') && !tags.includes('elephant') && !tags.includes('leopard')) return false;
        if (filterCategory === 'cultural' && !tags.includes('temple') && !tags.includes('ancient') && !tags.includes('cultural') && !tags.includes('history') && !tags.includes('heritage')) return false;
        if (filterCategory === 'beach' && !tags.includes('beach') && !tags.includes('coast') && !tags.includes('shore') && !tags.includes('surf')) return false;
        if (filterCategory === 'adventure' && !tags.includes('hike') && !tags.includes('trek') && !tags.includes('mountain') && !tags.includes('adventure') && !tags.includes('rafting') && !tags.includes('rainforest') && !tags.includes('peak')) return false;
        if (filterCategory === 'volunteer' && !tags.includes('volunteer') && !tags.includes('impact') && !tags.includes('giveback') && !tags.includes('meaningful')) return false;

        return true;
    });

    const otherPackages = filteredPackages.filter(pkg => pkg.id !== (exactMatch ? exactMatch.id : null));

    return (
        <section className="premium-filter-section" id="tours">
            <style>
                {`
                .tours-page-layout {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: 30px;
                    align-items: start;
                    margin-top: 40px;
                    max-width: 1400px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .tours-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    position: sticky;
                    top: 110px;
                    z-index: 90;
                }
                .tours-listing-content {
                    flex: 1;
                }
                .tours-listing-content .packages-grid {
                    grid-template-columns: repeat(3, 1fr) !important;
                    width: 100% !important;
                    margin: 0 !important;
                    gap: 25px !important;
                }
                @media (max-width: 1200px) {
                    .tours-listing-content .packages-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 992px) {
                    .tours-page-layout {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                    .tours-sidebar {
                        position: static !important;
                    }
                }
                @media (max-width: 600px) {
                    .tours-listing-content .packages-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                `}
            </style>
            <div className="premium-filter-header">
                <span className="about-tag">Handpicked Journeys</span>
                <h1>All Sri Lanka Tours & Meaningful Experiences in 2026</h1>
            </div>

            {/* Results Meta Info */}
            <div className="results-meta">
                <span className="results-count">{filteredPackages.length} {filteredPackages.length === 1 ? 'Journey' : 'Journeys'} found in Sri Lanka</span>
                <div className="sort-dropdown">
                    Sort by: Featured <i className="fa-solid fa-chevron-down" style={{fontSize: '0.7rem'}}></i>
                </div>
            </div>

            {/* Premium Pill Filter Bar */}
            <div className="premium-filter-bar">
                {/* Interest Filters */}
                <button 
                    onClick={() => setFilterCategory('all')}
                    className={`filter-pill ${filterCategory === 'all' ? 'active' : ''}`}
                >
                    All Tours
                </button>

                <button 
                    onClick={() => setFilterCategory('wildlife')}
                    className={`filter-pill ${filterCategory === 'wildlife' ? 'active' : ''}`}
                >
                    Wildlife Safaris
                </button>

                <button 
                    onClick={() => setFilterCategory('cultural')}
                    className={`filter-pill ${filterCategory === 'cultural' ? 'active' : ''}`}
                >
                    Cultural Heritage
                </button>

                <button 
                    onClick={() => setFilterCategory('beach')}
                    className={`filter-pill ${filterCategory === 'beach' ? 'active' : ''}`}
                >
                    Beach & Surf
                </button>

                <button 
                    onClick={() => setFilterCategory('adventure')}
                    className={`filter-pill ${filterCategory === 'adventure' ? 'active' : ''}`}
                >
                    Nature & Adventure
                </button>



                <button 
                    onClick={handleReset}
                    className="filter-pill"
                    style={{marginLeft: 'auto'}}
                >
                    Reset
                </button>
            </div>

            {/* MAIN LAYOUT: Sidebar Filters + Tour Listings */}
            <div className="tours-page-layout">
                
                {/* Left Column: Sidebar Filters */}
                <aside className="tours-sidebar">
                    
                    {/* Duration Filter Card */}
                    <div style={{
                        background: 'white',
                        borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: durationExpanded ? '15px' : '0'
                    }}>
                        <div 
                            onClick={() => setDurationExpanded(!durationExpanded)}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                        >
                            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#111', fontFamily: 'inherit' }}>Duration</span>
                            <i className={`bi bi-chevron-${durationExpanded ? 'up' : 'down'}`} style={{ color: '#666' }}></i>
                        </div>
                        {durationExpanded && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', display: 'block', marginBottom: '4px' }}>Min</label>
                                    <select 
                                        value={minDuration} 
                                        onChange={(e) => setMinDuration(e.target.value)}
                                        style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.85rem', fontWeight: 600, outline: 'none', background: 'white' }}
                                    >
                                        <option value="any">Any</option>
                                        <option value="1">1 Day</option>
                                        <option value="2">2 Days</option>
                                        <option value="3">3 Days</option>
                                        <option value="5">5 Days</option>
                                        <option value="7">7 Days</option>
                                        <option value="10">10 Days</option>
                                    </select>
                                </div>
                                <span style={{ color: '#888', fontSize: '0.85rem', marginTop: '20px' }}>to</span>
                                <div style={{ flex: 1 }}>
                                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', display: 'block', marginBottom: '4px' }}>Max</label>
                                    <select 
                                        value={maxDuration} 
                                        onChange={(e) => setMaxDuration(e.target.value)}
                                        style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.85rem', fontWeight: 600, outline: 'none', background: 'white' }}
                                    >
                                        <option value="any">Any</option>
                                        <option value="1">1 Day</option>
                                        <option value="2">2 Days</option>
                                        <option value="3">3 Days</option>
                                        <option value="5">5 Days</option>
                                        <option value="7">7 Days</option>
                                        <option value="10">10 Days</option>
                                        <option value="15">15 Days</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Price Filter Card */}
                    <div style={{
                        background: 'white',
                        borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: priceExpanded ? '15px' : '0'
                    }}>
                        <div 
                            onClick={() => setPriceExpanded(!priceExpanded)}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                        >
                            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#111', fontFamily: 'inherit' }}>Price</span>
                            <i className={`bi bi-chevron-${priceExpanded ? 'up' : 'down'}`} style={{ color: '#666' }}></i>
                        </div>
                        {priceExpanded && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                <div style={{ flex: 1, position: 'relative' }}>
                                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', display: 'block', marginBottom: '4px' }}>Min</label>
                                    <span style={{ position: 'absolute', left: '12px', bottom: '9px', fontSize: '0.85rem', color: '#666', fontWeight: 600 }}>$</span>
                                    <input 
                                        type="number" 
                                        value={minPrice} 
                                        onChange={(e) => setMinPrice(e.target.value)}
                                        placeholder="Min" 
                                        style={{ width: '100%', padding: '8px 12px 8px 24px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.85rem', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                                    />
                                </div>
                                <span style={{ color: '#888', fontSize: '0.85rem', marginTop: '20px' }}>to</span>
                                <div style={{ flex: 1, position: 'relative' }}>
                                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', display: 'block', marginBottom: '4px' }}>Max</label>
                                    <span style={{ position: 'absolute', left: '12px', bottom: '9px', fontSize: '0.85rem', color: '#666', fontWeight: 600 }}>$</span>
                                    <input 
                                        type="number" 
                                        value={maxPrice} 
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                        placeholder="Max" 
                                        style={{ width: '100%', padding: '8px 12px 8px 24px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.85rem', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Travel Deals Filter Card */}
                    <div style={{
                        background: 'white',
                        borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: dealsExpanded ? '15px' : '0'
                    }}>
                        <div 
                            onClick={() => setDealsExpanded(!dealsExpanded)}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                        >
                            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#111', fontFamily: 'inherit' }}>Travel deals</span>
                            <i className={`bi bi-chevron-${dealsExpanded ? 'up' : 'down'}`} style={{ color: '#666' }}></i>
                        </div>
                        {dealsExpanded && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#333', cursor: 'pointer', fontWeight: 600 }}>
                                    <input 
                                        type="checkbox" 
                                        checked={tripsOnSale} 
                                        onChange={(e) => setTripsOnSale(e.target.checked)}
                                        style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
                                    />
                                    Trips on sale
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#333', cursor: 'pointer', fontWeight: 600 }}>
                                    <input 
                                        type="checkbox" 
                                        checked={saleNowOn} 
                                        onChange={(e) => setSaleNowOn(e.target.checked)}
                                        style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
                                    />
                                    Sale now on
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#333', cursor: 'pointer', fontWeight: 600 }}>
                                    <input 
                                        type="checkbox" 
                                        checked={earlyBird} 
                                        onChange={(e) => setEarlyBird(e.target.checked)}
                                        style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
                                    />
                                    Early bird
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Physical Intensity Filter Card */}
                    <div style={{
                        background: 'white',
                        borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: intensityExpanded ? '15px' : '0'
                    }}>
                        <div 
                            onClick={() => setIntensityExpanded(!intensityExpanded)}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                        >
                            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#111', fontFamily: 'inherit' }}>Physical intensity</span>
                            <i className={`bi bi-chevron-${intensityExpanded ? 'up' : 'down'}`} style={{ color: '#666' }}></i>
                        </div>
                        {intensityExpanded && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#333', cursor: 'pointer', fontWeight: 600 }}>
                                    <input 
                                        type="checkbox" 
                                        checked={intensityEasy} 
                                        onChange={(e) => setIntensityEasy(e.target.checked)}
                                        style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
                                    />
                                    Easy (1-2)
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#333', cursor: 'pointer', fontWeight: 600 }}>
                                    <input 
                                        type="checkbox" 
                                        checked={intensityModerate} 
                                        onChange={(e) => setIntensityModerate(e.target.checked)}
                                        style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
                                    />
                                    Moderate (3-4)
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#333', cursor: 'pointer', fontWeight: 600 }}>
                                    <input 
                                        type="checkbox" 
                                        checked={intensityChallenging} 
                                        onChange={(e) => setIntensityChallenging(e.target.checked)}
                                        style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
                                    />
                                    Challenging (5)
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Review Rating Filter Card */}
                    <div style={{
                        background: 'white',
                        borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: ratingExpanded ? '15px' : '0'
                    }}>
                        <div 
                            onClick={() => setRatingExpanded(!ratingExpanded)}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                        >
                            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#111', fontFamily: 'inherit' }}>Review rating</span>
                            <i className={`bi bi-chevron-${ratingExpanded ? 'up' : 'down'}`} style={{ color: '#666' }}></i>
                        </div>
                        {ratingExpanded && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#333', cursor: 'pointer', fontWeight: 600 }}>
                                    <input 
                                        type="radio" 
                                        name="ratingFilter"
                                        checked={minRating === 'any'} 
                                        onChange={() => setMinRating('any')}
                                        style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
                                    />
                                    Any rating
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#333', cursor: 'pointer', fontWeight: 600 }}>
                                    <input 
                                        type="radio" 
                                        name="ratingFilter"
                                        checked={minRating === '4.5'} 
                                        onChange={() => setMinRating('4.5')}
                                        style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
                                    />
                                    4.5★ and up
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#333', cursor: 'pointer', fontWeight: 600 }}>
                                    <input 
                                        type="radio" 
                                        name="ratingFilter"
                                        checked={minRating === '4.8'} 
                                        onChange={() => setMinRating('4.8')}
                                        style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
                                    />
                                    4.8★ and up
                                </label>
                            </div>
                        )}
                    </div>

                </aside>

                {/* Right Column: Tour Grid */}
                <div className="tours-listing-content">
                    <div className="packages-grid">
                        {exactMatch ? (
                            <>
                                <TourCard pkg={exactMatch} isExactMatch={true} />
                                {otherPackages.length > 0 && (
                                    otherPackages.map((pkg) => (
                                        <TourCard key={pkg.id} pkg={pkg} isRecommendation={true} />
                                    ))
                                )}
                            </>
                        ) : (
                            otherPackages.length > 0 ? (
                                otherPackages.map((pkg) => (
                                    <TourCard key={pkg.id} pkg={pkg} />
                                ))
                            ) : (
                                <div style={{gridColumn: '1/-1', textAlign: 'center', padding: '100px 0', opacity: 0.5}}>
                                    <i className="bi bi-search" style={{fontSize: '3rem', marginBottom: '20px', display: 'block'}}></i>
                                    <h3>No tours found matching filters</h3>
                                    <p>Try resetting the filters or adjusting your inputs.</p>
                                    <button className="btn-modern btn-itinerary-toggle" onClick={handleReset} style={{margin: '20px auto'}}>Reset Filters</button>
                                </div>
                            )
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TourPackages;
