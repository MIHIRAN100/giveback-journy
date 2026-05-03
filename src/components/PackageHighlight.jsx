import React from 'react';
import { Link } from 'react-router-dom';
import { TourCard } from './TourPackages';
import { tourPackages } from '../data/tours';

const PackageHighlight = () => {
    // Select a few featured packages (e.g., first 4)
    const featuredPackages = tourPackages.slice(0, 4);

    return (
        <section className="packages-section" style={{ padding: '80px 5%', background: '#fcfcfc' }}>
            <div className="packages-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
                <span className="about-tag">Signature Collections</span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px' }}>Our Most Loved Journeys.</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666' }}>
                    Carefully curated itineraries designed to reveal the true soul of the island. 
                    From ancient heritage to wild jungles.
                </p>
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
