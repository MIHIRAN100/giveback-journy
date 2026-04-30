import React, { useState } from 'react';
import { tourPackages } from '../data/tours';

const TourCard = ({ pkg, isExactMatch, isRecommendation }) => {
    const [showItinerary, setShowItinerary] = useState(false);
    const [transport, setTransport] = useState('taxi');

    const getPrice = () => {
        const basePriceVal = parseInt(pkg.price.replace('$', '').replace(',', ''));
        // Hardcoded override for pkg.id 1 as requested previously
        let currentBase = pkg.id === 1 ? 900 : basePriceVal;
        
        if (transport === 'tuktuk') {
            return `$${currentBase - 300}`;
        }
        if (transport === 'van') {
            return `$${currentBase + 150}`;
        }
        return `$${currentBase}`;
    };

    const getLuggageInfo = () => {
        switch(transport) {
            case 'tuktuk': return { text: "2 Small Backpacks", icon: "bi-bag-x" };
            case 'van': return { text: "6 Large Suitcases", icon: "bi-suitcases" };
            default: return { text: "2 Large + 2 Small Bags", icon: "bi-briefcase" };
        }
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
            </div>
            <div className="card-body">
                <h3>{pkg.name}</h3>
                <p style={{marginBottom: '20px'}}>{pkg.description}</p>
                
                <div className="transport-selector-box" style={{
                    marginBottom: '25px', 
                    padding: '15px', 
                    background: 'rgba(29, 185, 84, 0.05)', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(29, 185, 84, 0.1)',
                    position: 'relative',
                    zIndex: 40,
                    pointerEvents: 'auto'
                }}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                        <label style={{fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-green)', margin: 0, letterSpacing: '1px'}}>Vehicle Type</label>
                        <div style={{fontSize: '0.7rem', fontWeight: 700, color: '#666', background: 'rgba(0,0,0,0.05)', padding: '2px 8px', borderRadius: '4px'}}>
                            <i className={`bi ${getLuggageInfo().icon}`} style={{marginRight: '5px', color: 'var(--primary-green)'}}></i>
                            {getLuggageInfo().text}
                        </div>
                    </div>
                    <select 
                        className="form-control" 
                        value={transport}
                        onChange={(e) => setTransport(e.target.value)}
                        style={{
                            width: '100%',
                            background: 'white',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            padding: '10px',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            outline: 'none',
                            position: 'relative',
                            zIndex: 50,
                            pointerEvents: 'auto'
                        }}
                    >
                        <option value="taxi">Private Car</option>
                        <option value="van">Private Van (+ $150)</option>
                        <option value="tuktuk">Tuk Tuk Adventure (- $300)</option>
                    </select>
                </div>

                <div className="card-highlights" style={{
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '15px 20px', 
                    marginBottom: '30px', 
                    borderTop: '1px solid rgba(0,0,0,0.05)', 
                    borderBottom: '1px solid rgba(0,0,0,0.05)', 
                    padding: '15px 0'
                }}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-green)', fontSize: '0.9rem'}}>
                            <i className="bi bi-geo-alt"></i>
                            <span style={{fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', color: '#888'}}>Destinations</span>
                        </div>
                        <span style={{fontSize: '0.85rem', fontWeight: 600}}>{pkg.itinerary.length} Major Stops</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-green)', fontSize: '0.9rem'}}>
                            <i className="bi bi-shield-check"></i>
                            <span style={{fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', color: '#888'}}>Type</span>
                        </div>
                        <span style={{fontSize: '0.85rem', fontWeight: 600}}>{transport === 'tuktuk' ? 'Rustic Adventure' : 'Private Guided'}</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-green)', fontSize: '0.9rem'}}>
                            <i className="bi bi-person-badge"></i>
                            <span style={{fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', color: '#888'}}>Service</span>
                        </div>
                        <span style={{fontSize: '0.85rem', fontWeight: 600}}>Driver Provided</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-green)', fontSize: '0.9rem'}}>
                            <i className="bi bi-stars"></i>
                            <span style={{fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', color: '#888'}}>Includes</span>
                        </div>
                        <span style={{fontSize: '0.85rem', fontWeight: 600}}>All Breakfasts</span>
                    </div>
                </div>
                
                <button 
                    className="btn-itinerary-toggle" 
                    onClick={() => setShowItinerary(!showItinerary)}
                >
                    {showItinerary ? 'Hide Detailed Plan' : 'View Full Itinerary'}
                    <i className="bi bi-chevron-down" style={{transform: showItinerary ? 'rotate(180deg)' : 'none'}}></i>
                </button>

                {showItinerary && (
                    <div className="itinerary-detailed-view">
                        <div className="itinerary-section">
                            <h4>Day-by-Day Itinerary</h4>
                            <div className="itinerary-timeline">
                                {pkg.itinerary.map((step) => (
                                    <div key={step.day} className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-content">
                                            <div className="timeline-header">
                                                <span className="day-label">DAY {step.day}</span>
                                                <strong className="day-title">{step.title}</strong>
                                            </div>
                                            <p className="day-desc">{step.desc}</p>
                                            {step.activities && (
                                                <div className="activities-list">
                                                    {step.activities.map((act, i) => (
                                                        <span key={i} className="activity-tag">
                                                            <i className="bi bi-check2"></i>
                                                            {act}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="inclusions-exclusions-grid">
                            <div className="inclusions-box">
                                <h5>
                                    <i className="bi bi-check-circle-fill"></i> What's Included
                                </h5>
                                <ul>
                                    {pkg.inclusions.map((item, i) => (
                                        <li key={i}>
                                            <i className="bi bi-plus"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="exclusions-box">
                                <h5>
                                    <i className="bi bi-x-circle-fill"></i> Not Included
                                </h5>
                                <ul>
                                    {pkg.exclusions.map((item, i) => (
                                        <li key={i}>
                                            <i className="bi bi-dash"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                <div className="card-footer" style={{marginTop: 'auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '15px'}}>
                    <div className="price-label">
                        <span style={{fontSize: '0.65rem', opacity: 0.6, textTransform: 'uppercase', fontWeight: 800}}>Starting From</span>
                        <span className="price-val" style={{fontSize: '1.4rem', color: 'var(--primary-green)'}}>{getPrice()}</span>
                    </div>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <a href="/contact" className="btn-black" style={{padding: '12px 25px', borderRadius: '500px', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', textDecoration: 'none', display: 'inline-block'}}>
                            Contact for Booking
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TourPackages = ({ searchTerm }) => {
    // Check if the searchTerm is an exact match
    const searchLower = (searchTerm || "").toLowerCase();
    const exactMatch = searchLower.length > 2 
        ? tourPackages.find(pkg => pkg.name.toLowerCase().includes(searchLower))
        : null;

    const otherPackages = tourPackages.filter(pkg => {
        const searchLower = (searchTerm || "").toLowerCase();
        if (!searchLower) return true;
        
        const searchWords = searchLower.split(' ').filter(w => w.length > 0);
        
        // Check if all search words match something in the package
        const isMatch = searchWords.every(word => {
            const inName = pkg.name.toLowerCase().includes(word);
            const inDesc = pkg.description.toLowerCase().includes(word);
            const inDays = pkg.days.toLowerCase().includes(word);
            const inItinerary = pkg.itinerary.some(step => 
                step.title.toLowerCase().includes(word) || 
                step.desc.toLowerCase().includes(word) ||
                (step.activities && step.activities.some(act => act.toLowerCase().includes(word)))
            );
            const inInclusions = pkg.inclusions.some(inc => inc.toLowerCase().includes(word));
            
            return inName || inDesc || inDays || inItinerary || inInclusions;
        });
        
        return pkg.id !== (exactMatch ? exactMatch.id : null) && isMatch;
    });

    return (
        <section className="packages-section" id="tours">
            <div className="packages-header">
                <span className="about-tag">Handpicked Journeys</span>
                <h2>Curated Tour Plans.</h2>
                <p>From misty emerald tea plantations to pristine azure shores, find the perfect itinerary for your island escape.</p>
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
