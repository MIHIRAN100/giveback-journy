import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TourPackages, { TourCard } from '../components/TourPackages';
import NewsletterSubscribeBanner from '../components/NewsletterSubscribeBanner';
import SriLankaGlance from '../components/SriLankaGlance';

import { tourPackages } from '../data/tours';
import heroBg from '../assets/praveen-maleesha-gCjCxFUugoQ-unsplash.jpg';
import brandLogo from '../assets/WhatsApp_Image_2026-07-27_at_11.04.19-removebg-preview.png';

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
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '22px' }}>
                        <img 
                            src={brandLogo} 
                            alt="Give Back Journey Logo" 
                            style={{ height: '110px', width: 'auto', display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.5))' }} 
                        />
                    </div>
                    <h1>Our Curated Collections.</h1>
                    <p>Discover every corner of the island with our signature tour plans.</p>
                </div>
            </div>
            
            <TourPackages searchTerm={searchTerm} />

            <NewsletterSubscribeBanner />

            <SriLankaGlance />
            
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
