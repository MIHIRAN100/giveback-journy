import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TourCard } from './TourPackages';
import { tourPackages } from '../data/tours';

const PackageHighlight = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Wildlife', 'Culture', 'Beaches', 'Adventure'];

    const getFilteredPackages = () => {
        if (activeFilter === 'All') return tourPackages.slice(0, 4);
        const filtered = tourPackages.filter(pkg => {
            const text = (pkg.name + ' ' + pkg.description).toLowerCase();
            if (activeFilter === 'Wildlife') return text.includes('safari') || text.includes('wild') || text.includes('elephant') || text.includes('yala');
            if (activeFilter === 'Culture') return text.includes('kandy') || text.includes('sigiriya') || text.includes('culture') || text.includes('temple');
            if (activeFilter === 'Beaches') return text.includes('beach') || text.includes('coast') || text.includes('southern');
            if (activeFilter === 'Adventure') return text.includes('rafting') || text.includes('peak') || text.includes('hike') || text.includes('quest');
            return true;
        });
        return filtered.length > 0 ? filtered.slice(0, 4) : tourPackages.slice(0, 4);
    };

    const featuredPackages = getFilteredPackages();

    return (
        <section className="packages-section" style={{ padding: '80px 5%', background: '#fcfcfc' }}>
            <style>
                {`
                .packages-section .packages-grid {
                    grid-template-columns: repeat(4, 1fr) !important;
                    gap: 24px !important;
                }

                .mobile-only-filter-wrapper {
                    display: none;
                }

                @media (max-width: 1200px) {
                    .packages-section .packages-grid {
                        display: flex !important;
                        overflow-x: auto !important;
                        flex-wrap: nowrap !important;
                        scroll-snap-type: x mandatory;
                        -webkit-overflow-scrolling: touch;
                        gap: 20px !important;
                        padding: 10px 5px 30px !important;
                        width: 100% !important;
                        margin: 0 !important;
                        justify-content: flex-start !important;
                    }
                    
                    .packages-section .packages-grid::-webkit-scrollbar {
                        height: 6px;
                    }
                    
                    .packages-section .packages-grid::-webkit-scrollbar-track {
                        background: rgba(0, 0, 0, 0.05);
                        border-radius: 10px;
                    }
                    
                    .packages-section .packages-grid::-webkit-scrollbar-thumb {
                        background: var(--primary-green);
                        border-radius: 10px;
                    }
                    
                    .packages-section .packages-grid .package-card {
                        flex: 0 0 280px !important;
                        scroll-snap-align: start;
                    }
                }

                @media (max-width: 768px) {
                    .packages-header {
                        margin-bottom: 20px !important;
                    }
                    .mobile-only-filter-wrapper {
                        display: block;
                        margin-bottom: 25px;
                    }
                    .mobile-filter-container {
                        display: flex;
                        overflow-x: auto;
                        gap: 10px;
                        padding: 5px 5% 15px 5%;
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                        margin: 0 -5%;
                    }
                    .mobile-filter-container::-webkit-scrollbar {
                        display: none;
                    }
                    .mobile-filter-btn {
                        white-space: nowrap;
                        padding: 8px 18px;
                        border-radius: 100px;
                        background: #f1f5f9;
                        color: #64748b;
                        font-size: 0.85rem;
                        font-weight: 700;
                        border: none;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    }
                    .mobile-filter-btn.active {
                        background: var(--primary-green);
                        color: white;
                        box-shadow: 0 4px 12px rgba(27, 163, 82, 0.25);
                    }
                    
                    .packages-section .packages-grid {
                        gap: 15px !important;
                        padding-bottom: 20px !important;
                    }
                    
                    .packages-section .packages-grid .package-card {
                        flex: 0 0 250px !important;
                    }
                }
                `}
            </style>

            <div className="packages-header" style={{ marginBottom: '30px', textAlign: 'center' }}>
                <span className="about-tag">Signature Collections</span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px' }}>Our Most Loved Journeys.</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666' }}>
                    Carefully curated itineraries designed to reveal the true soul of the island. 
                    From ancient heritage to wild jungles.
                </p>
            </div>

            {/* Mobile Filter Section */}
            <div className="mobile-only-filter-wrapper">
                <div className="mobile-filter-container">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`mobile-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="packages-grid">
                {featuredPackages.map((pkg) => (
                    <TourCard key={pkg.id} pkg={pkg} />
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <Link to="/packages" className="btn-modern btn-black" style={{ padding: '15px 40px', fontSize: '0.9rem' }}>
                    View All Collections
                </Link>
            </div>
        </section>
    );
};

export default PackageHighlight;
