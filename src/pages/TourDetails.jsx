import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import SriLankaGlance from '../components/SriLankaGlance';
import gallery1 from '../assets/Galle Fort, Sri Lanka.jpg';
import gallery2 from '../assets/Hurulu Eco Park.jpg';
import { useCompare } from '../context/CompareContext';

const ItineraryDay = ({ step, index, forceOpen }) => {
    const [isOpen, setIsOpen] = useState(index === 0);

    React.useEffect(() => {
        setIsOpen(forceOpen);
    }, [forceOpen]);

    return (
        <div style={{ borderBottom: '1px solid #eee' }}>
            <div 
                onClick={() => setIsOpen(!isOpen)}
                style={{ 
                    padding: '25px 0', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    cursor: 'pointer' 
                }}
            >
                <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    <span style={{ color: '#666', marginRight: '10px' }}>Day {step.day} ·</span>
                    <span>{step.title}</span>
                </div>
                <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`} style={{ color: '#666' }}></i>
            </div>
            {isOpen && (
                <div style={{ padding: '0 0 30px 0', color: '#555', lineHeight: 1.8, fontSize: '1.05rem' }}>
                    {step.desc}
                    {step.activities && (
                        <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {step.activities.map((act, i) => (
                                <span key={i} style={{ 
                                    background: '#f8f9fa', 
                                    padding: '6px 15px', 
                                    borderRadius: '50px', 
                                    fontSize: '0.85rem', 
                                    fontWeight: 600,
                                    border: '1px solid #eee'
                                }}>
                                    {act}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const TourDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCompare } = useCompare();
    const [transport, setTransport] = useState('taxi');
    const [activeBookingTab, setActiveBookingTab] = useState('Is this trip right for you?');
    const [allOpen, setAllOpen] = useState(false);
    
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pkg = tourPackages.find(p => p.id === parseInt(id));

    if (!pkg) {
        return (
            <div style={{ padding: '150px 20px', textAlign: 'center' }}>
                <h2>Tour Package Not Found</h2>
                <p>We couldn't find the tour you're looking for.</p>
                <button className="btn-modern btn-black" onClick={() => navigate('/packages')}>Back to Packages</button>
            </div>
        );
    }

    const getPrice = () => {
        const basePriceVal = parseInt(pkg.price.replace('$', '').replace(',', ''));
        let currentBase = basePriceVal;
        if (pkg.id === 1) currentBase = 840;
        if (pkg.id === 2) currentBase = 600;
        
        if (transport === 'tuktuk') {
            const discount = pkg.id === 1 ? 200 : (pkg.id === 2 ? 110 : 300);
            return `$${currentBase - discount}`;
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
        <div className="tour-details-page" style={{ background: '#fff', paddingTop: '100px' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 5%' }}>
                
                {/* Header: Title & Sale Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#111', margin: 0 }}>
                        {pkg.name}
                    </h1>
                    <span style={{ 
                        background: '#107c41', 
                        color: 'white', 
                        padding: '8px 20px', 
                        borderRadius: '50px', 
                        fontSize: '0.75rem', 
                        fontWeight: 800, 
                        textTransform: 'lowercase',
                        boxShadow: '0 4px 12px rgba(16, 124, 65, 0.2)'
                    }}>Sale now on</span>
                </div>

                {/* Gallery & Summary Card Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '40px', marginBottom: '60px' }}>
                    
                    {/* Gallery Section */}
                    <div>
                        <div style={{ borderRadius: '24px', overflow: 'hidden', height: '500px', marginBottom: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <img src={pkg.image} alt={pkg.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                            <div style={{ height: '100px', borderRadius: '12px', overflow: 'hidden' }}>
                                <img src={pkg.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ height: '100px', borderRadius: '12px', overflow: 'hidden' }}>
                                <img src={gallery1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ height: '100px', borderRadius: '12px', overflow: 'hidden' }}>
                                <img src={gallery2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ height: '100px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                                <img src={pkg.image} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
                                <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 800, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>All photos (19)</span>
                            </div>
                        </div>
                    </div>

                    {/* Summary Card Section */}
                    <div>
                        <div style={{
                            background: 'white',
                            padding: '35px',
                            borderRadius: '24px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(0,0,0,0.05)',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ color: '#f39c12', fontSize: '1.2rem' }}><i className="fa-solid fa-star"></i></span>
                                    <span style={{ fontSize: '1.4rem', fontWeight: 900 }}>4.9</span>
                                    <a href="#" style={{ fontSize: '0.85rem', color: '#0066cc', textDecoration: 'underline', fontWeight: 600 }}>100 reviews</a>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '0.65rem', color: '#999', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px' }}>Trip code: HPKS</span>
                                </div>
                            </div>

                            <div style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                                <div style={{ marginBottom: '15px' }}>
                                    <span style={{ fontSize: '0.85rem', color: '#555', fontWeight: 700 }}>Start: </span>
                                    <span style={{ fontSize: '0.85rem', color: '#111', fontWeight: 800 }}>{pkg.itinerary[0].title.split(',')[0]}, Sri Lanka</span>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <span style={{ fontSize: '0.85rem', color: '#555', fontWeight: 700 }}>End: </span>
                                    <span style={{ fontSize: '0.85rem', color: '#111', fontWeight: 800 }}>{pkg.itinerary[pkg.itinerary.length-1].title.split(',')[0]}, Sri Lanka</span>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px 15px', marginBottom: '35px' }}>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Duration</span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>{pkg.days}</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Group size</span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>1 to 12</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Minimum age</span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>15 years old</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Style <i className="bi bi-info-circle" style={{ fontSize: '0.65rem' }}></i></span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>Comfort</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Theme <i className="bi bi-info-circle" style={{ fontSize: '0.65rem' }}></i></span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>Explorer</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Physical rating <i className="bi bi-info-circle" style={{ fontSize: '0.65rem' }}></i></span>
                                    <div style={{ display: 'flex', gap: '4px', marginTop: '5px' }}>
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} style={{ width: '12px', height: '4px', background: i <= 2 ? '#333' : '#eee', borderRadius: '2px' }}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '10px', marginBottom: '25px' }}>
                                <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 700, marginBottom: '8px' }}>From</span>
                                <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#111', lineHeight: 1 }}>USD {getPrice()}</span>
                            </div>

                            <button 
                                className="btn-modern" 
                                style={{ 
                                    width: '100%', 
                                    fontSize: '1rem', 
                                    padding: '18px', 
                                    background: 'var(--primary-green)', 
                                    color: 'white', 
                                    borderRadius: '12px', 
                                    border: 'none', 
                                    fontWeight: 800, 
                                    textTransform: 'none', 
                                    marginBottom: '20px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }} 
                                onClick={() => navigate(`/contact?package=${pkg.name}`)}
                            >
                                Contact Us to Book
                            </button>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '25px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                                <button 
                                    onClick={() => addToCompare(pkg)}
                                    style={{ background: 'none', border: 'none', color: '#444', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                                >
                                    <i className="bi bi-plus-lg"></i> Add to compare
                                </button>
                                <button style={{ background: 'none', border: 'none', color: '#444', fontSize: '1.2rem', cursor: 'pointer' }}>
                                    <i className="bi bi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rest of the Content */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '50px' }}>
                    
                    {/* Left Column: Overview & Inclusions */}
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px' }}>Overview</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555', marginBottom: '40px' }}>
                            {pkg.description}
                        </p>

                        {/* Before You Book Section */}
                        <div style={{ marginTop: '40px', marginBottom: '60px', padding: '40px', background: '#fdfdfd', borderRadius: '32px', border: '1px solid #f0f0f0' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111', marginBottom: '30px' }}>Before you book you should know</h2>
                            <div className="booking-tabs-container">
                                <div style={{ 
                                    display: 'flex', 
                                    gap: '30px', 
                                    borderBottom: '1px solid #eee', 
                                    marginBottom: '35px',
                                    overflowX: 'auto',
                                    paddingBottom: '2px'
                                }}>
                                    {['Is this trip right for you?', 'Accommodation', 'Joining point'].map((tab) => (
                                        <div 
                                            key={tab}
                                            onClick={() => setActiveBookingTab(tab)}
                                            style={{
                                                padding: '12px 0',
                                                fontSize: '1rem',
                                                fontWeight: 700,
                                                color: activeBookingTab === tab ? '#ff4d4d' : '#111',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                whiteSpace: 'nowrap',
                                                transition: 'all 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px'
                                            }}
                                        >
                                            <i className={
                                                tab === 'Is this trip right for you?' ? 'bi bi-flag' : 
                                                tab === 'Accommodation' ? 'bi bi-houses' : 'bi bi-geo-alt'
                                            } style={{ fontSize: '1.1rem', color: activeBookingTab === tab ? '#ff4d4d' : '#666' }}></i>
                                            {tab}
                                            {activeBookingTab === tab && (
                                                <div style={{ 
                                                    position: 'absolute', 
                                                    bottom: '-1px', 
                                                    left: 0, 
                                                    right: 0, 
                                                    height: '4px', 
                                                    background: '#ff4d4d',
                                                    borderRadius: '2px'
                                                }}></div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div style={{ minHeight: '180px' }}>
                                    {activeBookingTab === 'Is this trip right for you?' && (
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                            <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', color: '#444', lineHeight: 1.7 }}>
                                                <div style={{ color: 'var(--primary-green)', fontWeight: 900 }}>•</div>
                                                Though its equatorial position means fairly constant year-round temperatures, the summer months in Sri Lanka are very hot with short, sharp monsoons in the south-west of the country. Be sure to use adequate sun protection and drink plenty of water.
                                            </li>
                                            <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', color: '#444', lineHeight: 1.7 }}>
                                                <div style={{ color: 'var(--primary-green)', fontWeight: 900 }}>•</div>
                                                Beaches in Sri Lanka may be unpatrolled, so please seek local advice on where to swim safely.
                                            </li>
                                            <li style={{ display: 'flex', gap: '15px', color: '#444', lineHeight: 1.7 }}>
                                                <div style={{ color: 'var(--primary-green)', fontWeight: 900 }}>•</div>
                                                Some temples on this trip require your head to be uncovered when visiting. You can opt out of temple visits if this requirement doesn't suit you.
                                            </li>
                                        </ul>
                                    )}
                                    {activeBookingTab === 'Accommodation' && (
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                            <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', color: '#444', lineHeight: 1.7 }}>
                                                <div style={{ color: 'var(--primary-green)', fontWeight: 900 }}>•</div>
                                                We handpick a mix of boutique hotels, colonial-era bungalows, and high-quality eco-lodges that reflect the authentic character of the region.
                                            </li>
                                            <li style={{ display: 'flex', gap: '15px', color: '#444', lineHeight: 1.7 }}>
                                                <div style={{ color: 'var(--primary-green)', fontWeight: 900 }}>•</div>
                                                Most accommodations feature air conditioning and Wi-Fi in common areas, though some remote eco-stays focus on natural ventilation and digital detox.
                                            </li>
                                        </ul>
                                    )}
                                    {activeBookingTab === 'Joining point' && (
                                        <div>
                                            <p style={{ color: '#666', marginBottom: '20px' }}>This trip can be joined at any of the following locations:</p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                                {['Kandy', 'Galle', 'Hikkaduwa', 'Katunayake Airport'].map((point) => (
                                                    <div key={point} style={{ 
                                                        padding: '10px 20px', 
                                                        background: '#fcfcfc', 
                                                        borderRadius: '50px', 
                                                        border: '1px solid #eee',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px',
                                                        fontWeight: 800,
                                                        color: '#111',
                                                        fontSize: '0.9rem'
                                                    }}>
                                                        <i className="bi bi-geo-alt-fill" style={{ color: 'var(--primary-green)' }}></i>
                                                        {point}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="transport-selector-box" style={{
                            padding: '25px', 
                            background: 'rgba(29, 185, 84, 0.05)', 
                            borderRadius: '16px', 
                            border: '1px solid rgba(29, 185, 84, 0.1)'
                        }}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                                <label style={{fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-green)', margin: 0, letterSpacing: '1px'}}>Vehicle Type</label>
                            </div>
                            <select 
                                className="form-control" 
                                value={transport}
                                onChange={(e) => setTransport(e.target.value)}
                                style={{
                                    width: '100%',
                                    background: 'white',
                                    border: '1px solid rgba(0,0,0,0.1)',
                                    borderRadius: '10px',
                                    padding: '15px',
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    outline: 'none'
                                }}
                            >
                                <option value="taxi">Private Car (Standard)</option>
                                <option value="van">Private Van (+ $150)</option>
                                <option value="tuktuk">Tuk Tuk Adventure (- $300)</option>
                            </select>
                        </div>

                        {/* Why You'll Love This Trip */}
                        <div style={{
                            marginTop: '30px',
                            padding: '30px',
                            background: 'white',
                            borderRadius: '20px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                        }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px' }}>
                                Why you'll love this trip
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}><i className="fa-solid fa-camera-retro"></i></div>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}><strong>Stunning Photo Ops:</strong> Capture the iconic Nine Arches Bridge and sunrise at Sigiriya.</p>
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}><i className="fa-solid fa-leaf"></i></div>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}><strong>Authentic Stays:</strong> Relax in hand-picked boutique villas and eco-lodges.</p>
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}><i className="fa-solid fa-user-shield"></i></div>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}><strong>Expert Drivers:</strong> Navigate the island safely with our professional, local knowledge experts.</p>
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}><i className="fa-solid fa-gem"></i></div>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}><strong>Hidden Gems:</strong> Go beyond the guidebook with exclusive local village experiences.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Inclusions & Exclusions */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {/* Inclusions */}
                        <div className="inclusions-box" style={{ background: 'white', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', padding: '30px', borderRadius: '20px' }}>
                            <h5 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 800 }}>
                                <i className="bi bi-check-circle-fill" style={{ color: 'var(--primary-green)', marginRight: '10px' }}></i> What's Included
                            </h5>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {pkg.inclusions.map((item, i) => (
                                    <li key={i} style={{ fontSize: '0.95rem', color: '#555', marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                                        <i className="bi bi-check" style={{ color: 'var(--primary-green)', marginRight: '10px', fontWeight: 900 }}></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Exclusions */}
                        <div className="exclusions-box" style={{ background: '#fff9f9', border: '1px solid rgba(255, 0, 0, 0.05)', padding: '30px', borderRadius: '20px' }}>
                            <h5 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 800, color: '#c0392b' }}>
                                <i className="bi bi-x-circle-fill" style={{ marginRight: '10px' }}></i> Not Included
                            </h5>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {pkg.exclusions && pkg.exclusions.map((item, i) => (
                                    <li key={i} style={{ fontSize: '0.95rem', color: '#666', marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                                        <i className="bi bi-x" style={{ color: '#c0392b', marginRight: '10px', fontWeight: 900 }}></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Itinerary Section */}
                <div style={{ marginTop: '80px', borderTop: '1px solid #eee', paddingTop: '60px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111' }}>Itinerary</h2>
                        <button 
                            onClick={() => setAllOpen(!allOpen)}
                            style={{ 
                                background: 'white', 
                                border: '1px solid #ddd', 
                                padding: '8px 20px', 
                                borderRadius: '8px', 
                                fontWeight: 700, 
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer'
                            }}
                        >
                            <i className={`bi bi-chevron-${allOpen ? 'up' : 'down'}`}></i> {allOpen ? 'Hide all' : 'Show all'}
                        </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px' }}>
                        {/* Left Column: Map & Sustainability */}
                        <div>
                            <div style={{ 
                                background: '#f0f9ff', 
                                borderRadius: '24px', 
                                height: '350px', 
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}>
                                <img src={pkg.routeMap || pkg.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Sri Lanka Route Map" />
                            </div>

                            <div style={{ 
                                padding: '25px', 
                                border: '1px solid #eee', 
                                borderRadius: '20px', 
                                background: '#fff' 
                            }}>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#444', lineHeight: 1.6 }}>
                                    This trip generates <strong style={{ borderBottom: '2px solid #333' }}>50 kg</strong> of CO<sub>2</sub>-e per person per day. 
                                    <i className="bi bi-info-circle" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i> 
                                    <a href="#" style={{ color: '#0066cc', textDecoration: 'underline', marginLeft: '5px' }}>Learn more about our climate commitment.</a>
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Accordion Itinerary */}
                        <div>
                            {pkg.itinerary.map((step, index) => (
                                <ItineraryDay key={step.day} step={step} index={index} forceOpen={allOpen} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Important Notes Section */}
                {pkg.importantNotes && (
                    <div style={{ marginTop: '80px', padding: '50px', background: 'rgba(0,0,0,0.02)', borderRadius: '32px', border: '1px solid rgba(0,0,0,0.03)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '35px' }}>
                            <div style={{ width: '40px', height: '40px', background: '#111', color: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="bi bi-exclamation-lg"></i>
                            </div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0 }}>Important Notes</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
                            {pkg.importantNotes.map((note, i) => {
                                const [title, ...rest] = note.split(':');
                                const description = rest.join(':');
                                return (
                                    <div key={i} style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                                        <div style={{ 
                                            fontSize: '1.2rem', 
                                            fontWeight: 900, 
                                            color: 'var(--primary-green)', 
                                            minWidth: '35px',
                                            height: '35px',
                                            border: '2px solid var(--primary-green)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '10px', color: '#111' }}>{title}</h4>
                                            <p style={{ margin: 0, fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>{description.trim()}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Guest Reviews Section */}
                {pkg.reviews && (
                    <div style={{ marginTop: '80px', borderTop: '1px solid #eee', paddingTop: '80px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111', marginBottom: '10px' }}>Guest Reviews</h2>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', color: '#FFD700', fontSize: '1.2rem' }}>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <span style={{ color: '#666', fontSize: '1rem', fontWeight: 700, marginLeft: '10px' }}>5.0 / 5.0 Rating</span>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            {pkg.reviews.map((review) => (
                                <div key={review.id} style={{ 
                                    background: '#fff', 
                                    padding: '35px', 
                                    borderRadius: '32px', 
                                    border: '1px solid #f0f0f0',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                        <div style={{ 
                                            width: '50px', 
                                            height: '50px', 
                                            background: 'rgba(29, 185, 84, 0.1)', 
                                            color: 'var(--primary-green)', 
                                            borderRadius: '50%', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            fontSize: '1.5rem'
                                        }}>
                                            <i className={review.icon || "bi bi-person-fill"}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>{review.name}</h4>
                                            <span style={{ fontSize: '0.85rem', color: '#999', fontWeight: 600 }}>{review.date}</span>
                                        </div>
                                        <div style={{ marginLeft: 'auto', display: 'flex', gap: '3px', color: '#FFD700' }}>
                                            {[...Array(review.rating)].map((_, i) => <i key={i} className="bi bi-star-fill" style={{ fontSize: '0.85rem' }}></i>)}
                                        </div>
                                    </div>
                                    <p style={{ margin: 0, color: '#555', lineHeight: 1.7, fontStyle: 'italic' }}>"{review.comment}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <SriLankaGlance />
        </div>
    );
};

export default TourDetails;
