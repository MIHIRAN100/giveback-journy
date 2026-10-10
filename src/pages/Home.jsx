import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TopDealsSection from '../components/TopDealsSection';
import HomeMetricsSection from '../components/HomeMetricsSection';
import PartnerSlider from '../components/PartnerSlider';
import WelcomeSriLanka from '../components/WelcomeSriLanka';
import TravelerMoments from '../components/TravelerMoments';
import ExclusiveExperiences from '../components/ExclusiveExperiences';
import FAQSection from '../components/FAQSection';
import VolunteerSection from '../components/VolunteerSection';
import FeedbackSection from '../components/FeedbackSection';
import ScrollReveal from '../components/ScrollReveal';

import PackageHighlight from '../components/PackageHighlight';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFade(true);
        }, 1500);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2200);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {loading && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#ffffff',
                    zIndex: 99999,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                    opacity: fade ? 0 : 1,
                    transition: 'opacity 0.7s cubic-bezier(0.65, 0, 0.35, 1)'
                }}>
                    <h2 style={{ 
                        margin: 0, 
                        color: '#1d1d1f', 
                        fontWeight: 600, 
                        fontSize: '28px', 
                        letterSpacing: '-0.5px',
                        animation: 'fadeInOut 2s cubic-bezier(0.65, 0, 0.35, 1) forwards'
                    }}>
                        Giveback Journey<span style={{ color: 'var(--primary-green, #1ba352)' }}>.</span>
                    </h2>
                    <div style={{
                        marginTop: '30px',
                        width: '140px',
                        height: '2px',
                        backgroundColor: 'rgba(0,0,0,0.08)',
                        borderRadius: '2px',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#007aff',
                            transformOrigin: 'left',
                            animation: 'progress 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards'
                        }}></div>
                    </div>
                    <style>{`
                        @keyframes fadeInOut {
                            0% { opacity: 0; transform: translateY(15px); filter: blur(4px); }
                            25% { opacity: 1; transform: translateY(0); filter: blur(0); }
                            85% { opacity: 1; transform: translateY(0); filter: blur(0); }
                            100% { opacity: 0; transform: translateY(-10px); filter: blur(2px); }
                        }
                        @keyframes progress {
                            0% { transform: scaleX(0); }
                            100% { transform: scaleX(1); }
                        }
                    `}</style>
                </div>
            )}
            
            <div className="home-page" style={{ display: loading ? 'none' : 'block' }}>
                <Hero />
                <ScrollReveal><TopDealsSection /></ScrollReveal>
                <ScrollReveal><HomeMetricsSection /></ScrollReveal>
                <ScrollReveal><WelcomeSriLanka /></ScrollReveal>
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
        </>
    );
};

export default Home;
