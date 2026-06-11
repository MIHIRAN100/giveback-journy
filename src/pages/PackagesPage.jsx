import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TourPackages, { TourCard } from '../components/TourPackages';
import SriLankaGlance from '../components/SriLankaGlance';

import { tourPackages } from '../data/tours';
import heroBg from '../assets/praveen-maleesha-gCjCxFUugoQ-unsplash.jpg';

const PackagesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('search');
        if (query) {
            setSearchTerm(query);
        }
    }, [location]);

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

            <hr className="section-divider" />



            <SriLankaGlance />
            
            <hr className="section-divider" />
            
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Didn't find what you're looking for?</h2>
                    <p>Our travel designers can build a custom itinerary just for you.</p>
                    <button className="btn-modern btn-solid-green" onClick={() => navigate('/contact')}>Request Custom Plan</button>
                </div>
            </section>
        </div>
    );
};

export default PackagesPage;
