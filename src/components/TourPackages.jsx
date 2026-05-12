import React from 'react';
import { Link } from 'react-router-dom';
import { tourPackages } from '../data/tours';

export const TourCard = ({ pkg, isExactMatch, isRecommendation }) => {
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
    const getPrice = () => `US$ ${getPriceVal().toLocaleString()}.00`;
    const getOriginalPrice = () => `US$ ${originalPrice.toLocaleString()}.00`;

    // Days & nights
    const daysNum = parseInt(pkg.days);
    const nightsNum = daysNum > 1 ? daysNum - 1 : 0;

    // Determine category & location from tour data
    const getCategory = () => {
        const name = (pkg.name + ' ' + pkg.description).toLowerCase();
        if (name.includes('safari') || name.includes('wild') || name.includes('leopard') || name.includes('elephant')) return 'Outdoor & sports activities';
        if (name.includes('beach') || name.includes('coast') || name.includes('surf') || name.includes('southern')) return 'Tours';
        if (name.includes('temple') || name.includes('cultural') || name.includes('heritage') || name.includes('kandy')) return 'Tours';
        if (name.includes('rainforest') || name.includes('trek') || name.includes('hike')) return 'Nature & adventure';
        return 'Tours';
    };

    const getLocation = () => {
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
        <Link to={`/package/${pkg.id}`} className={`package-card gyg-card ${isExactMatch ? 'exact-match' : ''} ${isRecommendation ? 'recommendation-card' : ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="gyg-card-img-wrapper">
                <img src={pkg.image} alt={pkg.name} className="gyg-card-img" />
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
                    <div className="gyg-discount-badge">-{discountPercent}%</div>
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
    const [filterDuration, setFilterDuration] = React.useState('all');
    const [filterCategory, setFilterCategory] = React.useState('all');

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
        if (filterDuration === 'short' && days >= 5) return false;
        if (filterDuration === 'medium' && (days < 5 || days > 7)) return false;
        if (filterDuration === 'long' && days <= 7) return false;

        // Category Filter
        const tags = (pkg.name + pkg.description + (pkg.tags ? pkg.tags.join(' ') : '')).toLowerCase();
        if (filterCategory === 'wildlife' && !tags.includes('wild') && !tags.includes('nature') && !tags.includes('safari') && !tags.includes('elephant') && !tags.includes('leopard')) return false;
        if (filterCategory === 'cultural' && !tags.includes('temple') && !tags.includes('ancient') && !tags.includes('cultural') && !tags.includes('history') && !tags.includes('heritage')) return false;
        if (filterCategory === 'beach' && !tags.includes('beach') && !tags.includes('coast') && !tags.includes('shore') && !tags.includes('surf')) return false;
        if (filterCategory === 'volunteer' && !tags.includes('volunteer') && !tags.includes('impact') && !tags.includes('giveback') && !tags.includes('meaningful')) return false;

        return true;
    });

    const otherPackages = filteredPackages.filter(pkg => pkg.id !== (exactMatch ? exactMatch.id : null));

    return (
        <section className="premium-filter-section" id="tours">
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
                    onClick={() => setFilterCategory('volunteer')}
                    className={`filter-pill ${filterCategory === 'volunteer' ? 'active' : ''}`}
                >
                    Volunteering & Impact
                </button>



                {/* Duration Filters */}
                <button 
                    onClick={() => setFilterDuration('short')}
                    className={`filter-pill ${filterDuration === 'short' ? 'active' : ''}`}
                >
                    1-4 Days
                </button>
                <button 
                    onClick={() => setFilterDuration('medium')}
                    className={`filter-pill ${filterDuration === 'medium' ? 'active' : ''}`}
                >
                    5-7 Days
                </button>
                <button 
                    onClick={() => setFilterDuration('long')}
                    className={`filter-pill ${filterDuration === 'long' ? 'active' : ''}`}
                >
                    8+ Days
                </button>

                <button 
                    onClick={() => {setFilterCategory('all'); setFilterDuration('all');}}
                    className="filter-pill"
                    style={{marginLeft: 'auto'}}
                >
                    Reset
                </button>
            </div>

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
                            <h3>No tours found for "{searchTerm}"</h3>
                            <p>Try searching for something else or explore our all signature plans below.</p>
                            <button className="btn-modern btn-itinerary-toggle" onClick={() => window.location.href='/packages'} style={{margin: '20px auto'}}>View All Tours</button>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default TourPackages;
