import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturesScroll from '../components/FeaturesScroll';
import PartnerSlider from '../components/PartnerSlider';
import WelcomeSriLanka from '../components/WelcomeSriLanka';
import WhoWeAre from '../components/WhoWeAre';
import TravelerMoments from '../components/TravelerMoments';
import ExclusiveExperiences from '../components/ExclusiveExperiences';
import FAQSection from '../components/FAQSection';
import VolunteerSection from '../components/VolunteerSection';
import FeedbackSection from '../components/FeedbackSection';
import ScrollReveal from '../components/ScrollReveal';

import PackageHighlight from '../components/PackageHighlight';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <PartnerSlider />
            <ScrollReveal><WelcomeSriLanka /></ScrollReveal>
            <ScrollReveal><FeaturesScroll /></ScrollReveal>
            <ScrollReveal><WhoWeAre /></ScrollReveal>
            <ScrollReveal><PackageHighlight /></ScrollReveal>
            <ScrollReveal><TravelerMoments /></ScrollReveal>
            <ScrollReveal><ExclusiveExperiences /></ScrollReveal>
            <ScrollReveal><VolunteerSection /></ScrollReveal>

            <ScrollReveal><FeedbackSection /></ScrollReveal>
            <ScrollReveal><FAQSection /></ScrollReveal>
            
            <ScrollReveal>
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to Begin Your Journey?</h2>
                        <p>Connect with our expert travel designers to create a bespoke itinerary tailored exclusively for you.</p>
                        <Link to="/contact" className="btn-modern btn-black cta-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            Talk to an Expert
                        </Link>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
};

export default Home;
