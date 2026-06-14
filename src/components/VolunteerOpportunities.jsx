import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import { volunteerPrograms as opportunities } from '../data/volunteerPrograms';

const VolunteerOpportunities = () => {
    const { formatPrice } = useCurrency();
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="volunteer-opp-section" style={{ padding: '80px 0', background: '#f2f9f5', position: 'relative' }}>
            <div style={{ maxWidth: '1920px', margin: '0 auto', padding: '0 6%', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                    <div>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Open Positions</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#111', letterSpacing: '-0.04em', marginTop: '10px' }}>
                            Volunteer & Travel Opportunities
                        </h2>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button 
                            onClick={() => scroll('left')}
                            style={{ 
                                width: '45px', 
                                height: '45px', 
                                borderRadius: '50%', 
                                border: '1px solid #eee', 
                                background: 'white', 
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                            }}
                            className="scroll-nav-btn"
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            style={{ 
                                width: '45px', 
                                height: '45px', 
                                borderRadius: '50%', 
                                border: '1px solid #eee', 
                                background: 'white', 
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                            }}
                            className="scroll-nav-btn"
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <div 
                    ref={scrollRef}
                    style={{ 
                        display: 'flex', 
                        gap: '24px', 
                        overflowX: 'auto', 
                        padding: '10px 10px 40px 10px',
                        margin: '0 -10px',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }} className="no-scrollbar"
                >
                    <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
                    {opportunities.map((opp, i) => (
                        <div key={i} className="opp-card-modern" style={{ 
                            flex: '0 0 calc((100% - 72px) / 4.2)',
                            minWidth: '290px',
                            background: 'white',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
                            border: '1px solid rgba(0,0,0,0.04)',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            position: 'relative'
                        }}>
                            <div style={{ height: '135px', overflow: 'hidden', position: 'relative' }}>
                                <img src={opp.image} alt={opp.title} className="card-img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: opp.bgPosition || 'center', transition: 'transform 0.8s ease' }} />
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '12px', 
                                    left: '12px', 
                                    background: opp.id === 'professional-impact-program' ? 'var(--accent-gold, #3b7fba)' : 'rgba(27, 163, 82, 0.9)', 
                                    backdropFilter: 'blur(10px)',
                                    color: opp.id === 'professional-impact-program' ? '#111' : 'white', 
                                    padding: '4px 10px', 
                                    borderRadius: '6px', 
                                    fontSize: '0.65rem', 
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    boxShadow: opp.id === 'professional-impact-program' ? '0 4px 10px rgba(212, 175, 55, 0.25)' : 'none'
                                }}>
                                    {opp.id === 'professional-impact-program' ? (
                                        <>
                                            <i className="fa-solid fa-crown"></i> Exclusive Giveback
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa-solid fa-circle-check"></i> Verified
                                        </>
                                    )}
                                </div>
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '12px', 
                                    right: '12px', 
                                    background: 'rgba(255, 255, 255, 0.2)', 
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    color: 'white', 
                                    padding: '4px 10px', 
                                    borderRadius: '100px', 
                                    fontSize: '0.65rem', 
                                    fontWeight: 800
                                }}>
                                    {opp.duration}
                                </div>
                            </div>
                            
                            <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px' }}>
                                    <i className="fa-solid fa-location-dot" style={{ color: opp.color, fontSize: '0.7rem' }}></i>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: opp.color, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{opp.location}</span>
                                </div>
                                <h3 style={{ fontSize: '0.95rem', fontWeight: 900, marginBottom: '10px', color: '#111', lineHeight: 1.2, height: '2.4em', display: 'flex', alignItems: 'center' }}>{opp.title}</h3>
                                
                                {/* Professional Metadata Grid */}
                                <div style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: '1fr 1fr', 
                                    gap: '8px', 
                                    marginBottom: '10px',
                                    padding: '8px',
                                    background: '#f8fafc',
                                    borderRadius: '12px',
                                    border: '1px solid #f1f5f9'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa-solid fa-user-check" style={{ color: '#64748b', fontSize: '0.7rem' }}></i>
                                        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#475569' }}>Age {opp.minAge}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa-solid fa-utensils" style={{ color: '#64748b', fontSize: '0.7rem' }}></i>
                                        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#475569' }}>{opp.meals} Meals</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa-solid fa-plane-arrival" style={{ color: '#64748b', fontSize: '0.7rem' }}></i>
                                        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#475569' }}>Pickup</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa-solid fa-house-chimney" style={{ color: '#64748b', fontSize: '0.7rem' }}></i>
                                        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#475569' }}>Housing</span>
                                    </div>
                                </div>
 
                                <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: 1.4, marginBottom: '10px', height: '2.8em', overflow: 'hidden' }}>
                                    {opp.shortDesc}
                                </p>
 
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                                    <div>
                                        <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>Program Fee</div>
                                        <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#111' }}>
                                            <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginRight: '4px' }}>From</span>
                                            {formatPrice(opp.price)}
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '0.6rem', color: '#1ba352', fontWeight: 800, background: 'rgba(27, 163, 82, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                                        USD / Program
                                    </div>
                                </div>
 
                                <Link to={`/volunteer-program/${opp.id}`} className="opp-card-btn" style={{
                                    marginTop: 'auto',
                                    background: '#111',
                                    color: 'white',
                                    textAlign: 'center',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    fontWeight: 800,
                                    textDecoration: 'none',
                                    fontSize: '0.8rem',
                                    display: 'block',
                                    transition: 'all 0.3s ease'
                                }}>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .opp-card-modern:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.1) !important;
                    border-color: rgba(27, 163, 82, 0.2);
                }
                .opp-card-modern:hover .card-img-zoom {
                    transform: scale(1.1);
                }
                .opp-card-btn:hover {
                    background: var(--primary-green);
                    transform: scale(1.02);
                    box-shadow: 0 15px 30px rgba(27, 163, 82, 0.3);
                }
                .scroll-nav-btn:hover {
                    background: #111 !important;
                    color: white !important;
                    border-color: #111 !important;
                    transform: scale(1.1);
                }
            `}} />
        </section>
    );
};

export default VolunteerOpportunities;
