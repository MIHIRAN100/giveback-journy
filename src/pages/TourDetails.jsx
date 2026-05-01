import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourPackages } from '../data/tours';

const TourDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [transport, setTransport] = useState('taxi');
    
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
        <div className="tour-details-page">
            {/* Hero Section */}
            <div style={{
                height: '60vh',
                minHeight: '400px',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${pkg.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '60px 5%',
                color: 'white'
            }}>
                <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                        <span className="about-tag" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', border: 'none', margin: 0 }}>
                            {pkg.days}
                        </span>
                        <span style={{ 
                            background: '#ff4757', 
                            color: 'white', 
                            padding: '6px 15px', 
                            borderRadius: '6px', 
                            fontSize: '0.7rem', 
                            fontWeight: 900, 
                            textTransform: 'uppercase', 
                            letterSpacing: '1.5px',
                            boxShadow: '0 4px 15px rgba(255, 71, 87, 0.4)'
                        }}>Sale Now On</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '10px' }}>
                        {pkg.name}
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
                
                {/* Left Column: Description & Highlights */}
                <div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px' }}>Overview</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555', marginBottom: '40px' }}>
                        {pkg.description}
                    </p>

                    <div className="transport-selector-box" style={{
                        marginBottom: '40px', 
                        padding: '25px', 
                        background: 'rgba(29, 185, 84, 0.05)', 
                        borderRadius: '16px', 
                        border: '1px solid rgba(29, 185, 84, 0.1)'
                    }}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                            <label style={{fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-green)', margin: 0, letterSpacing: '1px'}}>Vehicle Type</label>
                            <div style={{fontSize: '0.85rem', fontWeight: 700, color: '#666', background: 'rgba(0,0,0,0.05)', padding: '5px 12px', borderRadius: '6px'}}>
                                <i className={`bi ${getLuggageInfo().icon}`} style={{marginRight: '8px', color: 'var(--primary-green)'}}></i>
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

                    <div className="card-highlights" style={{
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '25px', 
                        padding: '25px',
                        background: '#f9f9f9',
                        borderRadius: '16px'
                    }}>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-green)', fontSize: '1.1rem'}}>
                                <i className="bi bi-geo-alt"></i>
                                <span style={{fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', color: '#888'}}>Destinations</span>
                            </div>
                            <span style={{fontSize: '1rem', fontWeight: 700}}>{pkg.itinerary.length} Major Stops</span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-green)', fontSize: '1.1rem'}}>
                                <i className="bi bi-shield-check"></i>
                                <span style={{fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', color: '#888'}}>Type</span>
                            </div>
                            <span style={{fontSize: '1rem', fontWeight: 700}}>{transport === 'tuktuk' ? 'Rustic Adventure' : 'Private Guided'}</span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-green)', fontSize: '1.1rem'}}>
                                <i className="bi bi-person-badge"></i>
                                <span style={{fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', color: '#888'}}>Service</span>
                            </div>
                            <span style={{fontSize: '1rem', fontWeight: 700}}>Driver Provided</span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-green)', fontSize: '1.1rem'}}>
                                <i className="bi bi-stars"></i>
                                <span style={{fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', color: '#888'}}>Includes</span>
                            </div>
                            <span style={{fontSize: '1rem', fontWeight: 700}}>All Breakfasts</span>
                        </div>
                    </div>

                    {/* Inclusions & Exclusions */}
                    <div className="inclusions-exclusions-grid" style={{ marginTop: '40px', gridTemplateColumns: '1fr' }}>
                        <div className="inclusions-box" style={{ background: 'white', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                            <h5 style={{ fontSize: '1.2rem' }}>
                                <i className="bi bi-check-circle-fill"></i> What's Included
                            </h5>
                            <ul>
                                {pkg.inclusions.map((item, i) => (
                                    <li key={i} style={{ fontSize: '1rem' }}>
                                        <i className="bi bi-plus"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="exclusions-box" style={{ background: 'white', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                            <h5 style={{ fontSize: '1.2rem' }}>
                                <i className="bi bi-x-circle-fill"></i> Not Included
                            </h5>
                            <ul>
                                {pkg.exclusions.map((item, i) => (
                                    <li key={i} style={{ fontSize: '1rem' }}>
                                        <i className="bi bi-dash"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Column: Itinerary */}
                <div style={{ position: 'relative' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '30px' }}>Full Itinerary</h2>
                    
                    <div className="itinerary-detailed-view" style={{ background: 'transparent', padding: 0, marginTop: 0 }}>
                        <div className="itinerary-timeline" style={{ marginLeft: '10px' }}>
                            {pkg.itinerary.map((step) => (
                                <div key={step.day} className="timeline-item" style={{ paddingBottom: '40px' }}>
                                    <div className="timeline-dot" style={{ width: '20px', height: '20px', left: '-29px' }}></div>
                                    <div className="timeline-content" style={{ padding: '25px', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.02)' }}>
                                        <div className="timeline-header" style={{ marginBottom: '15px' }}>
                                            <span className="day-label" style={{ fontSize: '0.8rem', padding: '5px 12px' }}>DAY {step.day}</span>
                                            <strong className="day-title" style={{ fontSize: '1.2rem', color: 'var(--pitch-black)' }}>{step.title}</strong>
                                        </div>
                                        <p className="day-desc" style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>{step.desc}</p>
                                        {step.activities && (
                                            <div className="activities-list" style={{ marginTop: '20px' }}>
                                                {step.activities.map((act, i) => (
                                                    <span key={i} className="activity-tag" style={{ fontSize: '0.9rem', padding: '6px 15px', background: '#f5f5f5', color: '#444' }}>
                                                        <i className="bi bi-check2" style={{ color: 'var(--primary-green)' }}></i>
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

                    {/* Sticky Booking Action */}
                    <div style={{
                        position: 'sticky',
                        bottom: '30px',
                        marginTop: '50px',
                        background: 'white',
                        padding: '30px',
                        borderRadius: '20px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        zIndex: 100,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <span style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', color: '#888', letterSpacing: '1px' }}>Total Price</span>
                            <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary-green)', lineHeight: 1 }}>{getPrice()}</span>
                        </div>
                        <button className="btn-modern btn-black" style={{ width: '100%', fontSize: '1.1rem', padding: '18px' }} onClick={() => window.location.href='/contact'}>
                            Book This Journey
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TourDetails;
