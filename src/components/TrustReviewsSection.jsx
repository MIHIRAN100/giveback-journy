import React from 'react';

const TrustReviewsSection = () => {
    return (
        <section className="trust-reviews-section">
            <div className="trust-reviews-container">
                <div className="trust-reviews-grid">
                    {/* Real Traveler Reviews */}
                    <div className="trust-reviews-card">
                        <div className="trust-reviews-text">
                            <h3>Real Traveler Reviews</h3>
                            <p>
                                Book your Sri Lankan journey with complete peace of mind, backed by <span className="highlight-link">genuine reviews from fellow travelers & volunteers</span>. Explore firsthand accounts of curated tours, community projects, and island destinations to ensure your next adventure is exactly what you're looking for. Real experiences, real feedback, real impact.
                            </p>
                        </div>
                        <div className="trust-reviews-icon">
                            <svg width="120" height="120" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 42L16 56L32 50L48 56L42 42" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="32" cy="27" r="17" fill="#ffffff" stroke="#1e293b" strokeWidth="3.5"/>
                                <path d="M32 16L35.2 23.2L43 24.2L37.2 29.5L38.8 37.2L32 33.4L25.2 37.2L26.8 29.5L21 24.2L28.8 23.2L32 16Z" fill="#90c7e3" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    {/* Trust and Confidence */}
                    <div className="trust-reviews-card">
                        <div className="trust-reviews-text">
                            <h3>Trust and Confidence</h3>
                            <p>
                                Plan your dream Sri Lanka tour or volunteer placement with our dedicated local team, featuring direct messaging, flexible booking protection, transparent pricing, 24/7 on-ground support, and personalized itineraries. <span className="highlight-link">We've got your back every step of the way</span>
                            </p>
                        </div>
                        <div className="trust-reviews-icon">
                            <svg width="120" height="120" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 10C32 10 48 12 50 24C52 36 32 52 32 52C32 52 12 36 14 24C16 12 32 10 32 10Z" fill="#ffffff" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M32 23C32 23 26 18 22 23C18 28 32 37 32 37C32 37 46 28 42 23C38 18 32 23 32 23Z" fill="#90c7e3" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 14V8M9 11H15" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round"/>
                                <path d="M52 46V40M49 43H55" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustReviewsSection;
