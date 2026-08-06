import React, { useRef } from 'react';
import { tourPackages } from '../data/tours';
import { useNavigate } from 'react-router-dom';

const PromotedExperiences = () => {
    const scrollContainerRef = useRef(null);
    const navigate = useNavigate();

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 180, behavior: 'smooth' });
        }
    };

    // Grab exactly 3 tours to promote
    const promotedTours = tourPackages.slice(2, 5);

    return (
        <div style={{ marginTop: '20px', width: '100%', minWidth: 0, boxSizing: 'border-box' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111', marginBottom: '12px' }}>
                Explore our promoted experiences
            </h3>
            
            <div style={{ position: 'relative', width: '100%', minWidth: 0 }}>
                <div 
                    ref={scrollContainerRef}
                    style={{
                        display: 'flex',
                        gap: '10px',
                        overflowX: 'auto',
                        paddingBottom: '12px',
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none', // IE/Edge
                        width: '100%'
                    }}
                    className="no-scrollbar"
                >
                    {promotedTours.map((tour) => (
                        <div 
                            key={tour.id} 
                            onClick={() => navigate(`/tour/${tour.id}`)}
                            style={{
                            flex: '0 0 170px',
                            background: '#fff',
                            borderRadius: '10px',
                            border: '1px solid #e2e8f0',
                            overflow: 'hidden',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer'
                        }}>
                            {/* Image Section */}
                            <div style={{ position: 'relative', height: '110px' }}>
                                <img 
                                    src={tour.image} 
                                    alt={tour.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '8px',
                                    right: '8px',
                                    width: '24px',
                                    height: '24px',
                                    background: '#fff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                                }}>
                                    <i className="bi bi-heart" style={{ color: '#111', fontSize: '0.7rem', fontWeight: 'bold' }}></i>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748b', fontSize: '0.65rem', marginBottom: '4px' }}>
                                    <i className="bi bi-globe"></i>
                                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tour.location || 'Sri Lanka'}</span>
                                </div>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px', fontSize: '0.75rem' }}>
                                    <i className="bi bi-star-fill" style={{ color: '#10b981', fontSize: '0.7rem' }}></i>
                                    <span style={{ fontWeight: 700, color: '#111' }}>{tour.rating || '4.8'}</span>
                                    <span style={{ color: '#64748b' }}>({tour.reviews?.length || 15})</span>
                                </div>
                                
                                <h4 style={{ 
                                    fontSize: '0.8rem', 
                                    fontWeight: 700, 
                                    color: '#0f172a', 
                                    margin: '0 0 8px 0',
                                    lineHeight: 1.3,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>
                                    {tour.name}
                                </h4>

                                <div style={{ marginTop: 'auto' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#475569' }}>
                                        from <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111' }}>{tour.price}</span>
                                    </div>
                                    <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: '2px' }}>
                                        Price varies by group size
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow Button */}
                <button 
                    onClick={scrollRight}
                    style={{
                        position: 'absolute',
                        right: '2px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#fff',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 2
                    }}
                >
                    <i className="bi bi-chevron-right" style={{ color: '#111', fontWeight: 'bold', fontSize: '0.8rem' }}></i>
                </button>
            </div>
            
            {/* CSS to hide scrollbar */}
            <style>
                {`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                `}
            </style>
        </div>
    );
};

export default PromotedExperiences;
