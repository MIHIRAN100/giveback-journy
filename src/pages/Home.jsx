import React, { useState } from 'react';
import Hero from '../components/Hero';
import FeaturesScroll from '../components/FeaturesScroll';
import PartnerSlider from '../components/PartnerSlider';
import WhoWeAre from '../components/WhoWeAre';
import TravelerMoments from '../components/TravelerMoments';
import ExclusiveExperiences from '../components/ExclusiveExperiences';
import FAQSection from '../components/FAQSection';
import MapSection from '../components/MapSection';
import VolunteerSection from '../components/VolunteerSection';
import FeedbackSection from '../components/FeedbackSection';
import ScrollReveal from '../components/ScrollReveal';

import PackageHighlight from '../components/PackageHighlight';
import VolunteerPackages from '../components/VolunteerPackages';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ScrollReveal><PartnerSlider /></ScrollReveal>
            <ScrollReveal><FeaturesScroll /></ScrollReveal>
            <ScrollReveal><WhoWeAre /></ScrollReveal>
            <ScrollReveal><PackageHighlight /></ScrollReveal>
            <ScrollReveal><TravelerMoments /></ScrollReveal>
            <ScrollReveal><ExclusiveExperiences /></ScrollReveal>
            <ScrollReveal><VolunteerSection /></ScrollReveal>
            <ScrollReveal>
                <div className="home-volunteer-packages" style={{ background: '#f8f9fa', padding: '0 5% 100px' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <VolunteerPackages lightTheme={true} />
                    </div>
                </div>
            </ScrollReveal>
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
