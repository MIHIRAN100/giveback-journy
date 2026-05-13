import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TourPackages, { TourCard } from '../components/TourPackages';
import SriLankaGlance from '../components/SriLankaGlance';
import SpotifyAdCard from '../components/SpotifyAdCard';
import { tourPackages } from '../data/tours';
import heroBg from '../assets/praveen-maleesha-gCjCxFUugoQ-unsplash.jpg';

const PackagesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('search');
        if (query) {
            setSearchTerm(query);
        }
    }, [location]);

    const dayTrips = tourPackages.filter(p => p.days === '1 Day' || p.id === 10 || p.id === 11);

    return (
        <div className="packages-page">
            <div className="secondary-hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Our Curated Collections.</h1>
                    <p>Discover every corner of the island with our signature tour plans.</p>
                </div>
            </div>
            
            <TourPackages searchTerm={searchTerm} />

            {/* Short Day Trips Section */}
            {!searchTerm && dayTrips.length > 0 && (
                <section className="packages-section" style={{ background: '#f8f9fa', padding: '100px 5% 100px 5%' }}>
                    <div className="packages-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="about-tag">Quick Escapes</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Short Day Trips.</h2>
                        <p style={{ maxWidth: '700px', margin: '20px auto', color: '#666' }}>
                            Perfect for travelers with limited time who still want to experience the absolute highlights of Sri Lanka's cultural capital.
                        </p>
                    </div>
                    
                    <div className="packages-grid">
                        {dayTrips.map(pkg => (
                            <TourCard key={pkg.id} pkg={pkg} />
                        ))}
                    </div>
                </section>
            )}

            <SriLankaGlance />
            
            <section style={{ padding: '0 5% 100px 5%', background: '#fff' }}>
                <SpotifyAdCard />
            </section>
            
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Didn't find what you're looking for?</h2>
                    <p>Our travel designers can build a custom itinerary just for you.</p>
                    <button className="btn-modern btn-solid-green">Request Custom Plan</button>
                </div>
            </section>
        </div>
    );
};

export default PackagesPage;
