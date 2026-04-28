import React, { useState } from 'react';
import Hero from '../components/Hero';
import PartnerSlider from '../components/PartnerSlider';
import AboutSriLanka from '../components/AboutSriLanka';
import WhoWeAre from '../components/WhoWeAre';
import TourPackages from '../components/TourPackages';
import FAQSection from '../components/FAQSection';
import MapSection from '../components/MapSection';
import VolunteerSection from '../components/VolunteerSection';
import FeedbackSection from '../components/FeedbackSection';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className="home-page">
            <Hero onSearch={handleSearch} />
            <ScrollReveal><PartnerSlider /></ScrollReveal>
            <ScrollReveal><WhoWeAre /></ScrollReveal>
            <ScrollReveal><AboutSriLanka /></ScrollReveal>
            <ScrollReveal><VolunteerSection /></ScrollReveal>
            <ScrollReveal><FeedbackSection /></ScrollReveal>
            <ScrollReveal><MapSection /></ScrollReveal>
            <ScrollReveal><FAQSection /></ScrollReveal>
            
            <ScrollReveal>
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to Begin Your Journey?</h2>
                        <p>Connect with our expert travel designers to create a bespoke itinerary tailored exclusively for you.</p>
                        <button className="btn-modern btn-black cta-btn">Talk to an Expert</button>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
};

export default Home;
