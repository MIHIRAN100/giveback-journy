import React, { useState } from 'react';
import { TOURS_DATA } from '../data/tours';

const ToursGrid = ({ searchTerm }) => {
    const [filter, setFilter] = useState('All');

    // Filter by Category first, then by search term (title or category)
    const filteredTours = TOURS_DATA.filter(tour => {
        const matchesCategory = filter === 'All' || tour.category === filter;
        const matchesSearch = searchTerm === '' || 
                             tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             tour.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ['All', 'Historical', 'Nature', 'Adventure', 'Cultural'];

    return (
        <section id="tours" className="tours section">
            <div className="section-container">
                <div className="reveal active" style={{textAlign: 'center', marginBottom: '60px'}}>
                    <span className="section-tag">Packages</span>
                    <h2 style={{color: 'var(--pitch-black)', fontSize: '3rem'}}>Curated Experiences.</h2>
                    
                    <div className="filter-tabs" style={{display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '30px', flexWrap: 'wrap'}}>
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                                style={{
                                    padding: '10px 25px',
                                    borderRadius: '50px',
                                    border: '1px solid var(--spotify-green)',
                                    background: filter === cat ? 'var(--spotify-green)' : 'transparent',
                                    color: filter === cat ? 'var(--white)' : 'var(--spotify-green)',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'var(--transition)'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredTours.length > 0 ? (
                    <div className="tour-grid">
                        {filteredTours.map(tour => (
                            <div key={tour.id} className="tour-card reveal active">
                                <div className="tour-img" style={{backgroundImage: `url(${tour.image})`}}>
                                    <div className="tour-category">
                                        <span className="tile-tag" style={{position: 'absolute', top: '20px', left: '20px'}}>{tour.category}</span>
                                    </div>
                                </div>
                                <div className="tour-info">
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                                        <h4 style={{fontSize: '1.2rem', fontWeight: 800, color: 'var(--pitch-black)'}}>{tour.title}</h4>
                                        <span style={{color: 'var(--spotify-green)', fontWeight: 800}}>{tour.rating} <i className="bi bi-star-fill"></i></span>
                                    </div>
                                    <p style={{color: 'var(--dark-gray)', opacity: 0.7, fontSize: '0.9rem', marginBottom: '20px'}}>Experience the authentic charm and breathtaking landscapes of this {tour.category.toLowerCase()} gem.</p>
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '20px'}}>
                                        <div className="price-box">
                                            <label style={{fontSize: '0.7rem', fontWeight: 800, color: 'var(--light-gray)', textTransform: 'uppercase', display: 'block'}}>From</label>
                                            <span style={{fontSize: '1.3rem', fontWeight: 800, color: 'var(--pitch-black)'}}>{tour.price}</span>
                                        </div>
                                        <button className="btn-login" style={{padding: '10px 20px'}}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{textAlign: 'center', padding: '60px 0'}}>
                        <h3 style={{color: 'var(--light-gray)', fontWeight: 500}}>No packages found matching "{searchTerm}"</h3>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ToursGrid;
