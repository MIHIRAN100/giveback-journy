import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TourPackages from '../components/TourPackages';
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

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

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
