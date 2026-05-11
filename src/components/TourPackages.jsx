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
        const factors = [0.65, 0.75, 0.8, 0.7, 0.85]; // Different discount levels
        return factors[pkg.id % factors.length];
    };

    const originalPrice = Math.floor(getPriceVal() / getDiscountFactor());
    const discountPercent = Math.round((1 - getPriceVal() / originalPrice) * 100);

    const getPrice = () => `$${getPriceVal()}`;
    const getOriginalPrice = () => `$${originalPrice}`;

    const getTags = () => {
        if (pkg.itinerary) {
            // Flatten all activities and get unique ones, limit to 3
            const allActivities = pkg.itinerary.flatMap(day => day.activities || []);
            const uniqueActivities = [...new Set(allActivities)];
            if (uniqueActivities.length > 0) return uniqueActivities.slice(0, 3);
        }
        return ['Nature', 'Cultural', 'Explore'];
    };

    return (
        <div className={`package-card ${isExactMatch ? 'exact-match' : ''} ${isRecommendation ? 'recommendation-card' : ''}`}>
            <div className="card-img-wrapper">
                <img src={pkg.image} alt={pkg.name} className="card-img" />
                
                {/* Modern Day Indicator */}
                <div className="modern-day-indicator" style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(18, 18, 18, 0.8)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    zIndex: 10,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    animation: 'fadeInUp 0.6s ease-out'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.4rem', fontWeight: 900, lineHeight: 1, color: 'var(--primary-green)' }}>{pkg.days.split(' ')[0]}</span>
                        <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800, opacity: 0.8 }}>Days</span>
                    </div>
                    <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.4rem', fontWeight: 900, lineHeight: 1, color: '#fff' }}>{parseInt(pkg.days) - 1}</span>
                        <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800, opacity: 0.8 }}>Nights</span>
                    </div>
                </div>

                {isExactMatch && <div className="result-badge" style={{position: 'absolute', top: '20px', left: '20px', background: 'var(--primary-green)', color: 'var(--pitch-black)', padding: '6px 15px', borderRadius: '50px', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px'}}>Top Result</div>}
                {isRecommendation && <div className="result-badge" style={{position: 'absolute', top: '20px', left: '20px', background: 'var(--pitch-black)', color: 'var(--white)', padding: '6px 15px', borderRadius: '50px', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px'}}>You May Also Like</div>}
                
                <div className="sale-badge" style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    background: '#ff4757',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    zIndex: 10,
                    boxShadow: '0 4px 15px rgba(255, 71, 87, 0.3)'
                }}>-{discountPercent}% OFF</div>
            </div>
            <div className="card-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary-green)', marginBottom: '10px', fontSize: '0.8rem' }}>
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fa-solid fa-star${i + 1 > pkg.rating ? (i < pkg.rating ? '-half-stroke' : '-o') : ''}`} style={{ color: i + 1 > pkg.rating && i >= pkg.rating ? '#ccc' : 'var(--primary-green)' }}></i>
                    ))}
                    <span style={{ color: '#888', fontWeight: 700, marginLeft: '6px', fontSize: '0.75rem' }}>{pkg.rating} ({pkg.ratingLabel})</span>
                </div>
                <h3 style={{marginTop: 0, fontSize: '1.2rem', marginBottom: '8px'}}>{pkg.name}</h3>
                <p style={{ 
                    fontSize: '0.85rem', 
                    color: '#666', 
                    lineHeight: 1.5, 
                    marginBottom: '15px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>{pkg.description.split('\n')[0]}</p>
                
                <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    {getTags().map((tag, i) => (
                        <span key={i} style={{ 
                            fontSize: '0.6rem', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.5px', 
                            padding: '4px 8px', 
                            background: i === 1 ? 'rgba(29,185,84,0.1)' : 'rgba(0,0,0,0.03)', 
                            color: i === 1 ? 'var(--primary-green)' : '#666', 
                            border: i !== 1 ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
                            borderRadius: '4px' 
                        }}>{tag}</span>
                    ))}
                </div>
                
                <div className="card-footer" style={{marginTop: 'auto', display: 'flex', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px'}}>
                    <div className="price-label" style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{fontSize: '0.6rem', opacity: 0.6, textTransform: 'uppercase', fontWeight: 800}}>Starting From</span>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                            <span className="price-val" style={{fontSize: '1.25rem', color: 'var(--primary-green)'}}>{getPrice()}</span>
                            <span style={{fontSize: '0.85rem', color: '#aaa', textDecoration: 'line-through', fontWeight: 600}}>{getOriginalPrice()}</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexShrink: 0}}>
                        <Link to={`/package/${pkg.id}`} className="btn-black" style={{padding: '10px 20px', borderRadius: '500px', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px', textDecoration: 'none', display: 'inline-block', whiteSpace: 'nowrap'}}>
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
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
