import React, { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policy-page-wrapper">
            <div className="policy-hero">
                <ScrollReveal>
                    <div className="policy-hero-content">
                        <h1>Privacy Policy</h1>
                        <p>How we protect your personal data and ensure your peace of mind at Giveback Journeys.</p>
                    </div>
                </ScrollReveal>
            </div>

            <div className="policy-content-section">
                <div className="policy-container">
                    <ScrollReveal>
                        <div className="policy-block">
                            <h2>1. Introduction</h2>
                            <p>Giveback Journeys ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy informs you how we look after your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you.</p>
                        </div>

                        <div className="policy-block">
                            <h2>2. Data We Collect</h2>
                            <p>We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                            <ul>
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, and passport number (specifically required for Sri Lankan train ticket bookings).</li>
                                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
                                <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
                                <li><strong>Travel Data:</strong> includes details about your travel preferences, dietary requirements, and health information necessary for tour safety.</li>
                            </ul>
                        </div>

                        <div className="policy-block">
                            <h2>3. How We Use Your Data</h2>
                            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                            <ul>
                                <li>To register you as a new customer and process your booking.</li>
                                <li>To manage our relationship with you (e.g., notifying you about changes to our terms or privacy policy).</li>
                                <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you.</li>
                                <li>To use data analytics to improve our website, services, marketing, customer relationships, and experiences.</li>
                            </ul>
                        </div>

                        <div className="policy-block">
                            <h2>4. Third-Party Disclosures</h2>
                            <p>To provide our specialized travel services, we must share your data with specific third parties:</p>
                            <ul>
                                <li><strong>Local Partners:</strong> Selected hotels, homestay hosts, and activity providers in Sri Lanka.</li>
                                <li><strong>Logistics:</strong> Private drivers, guides, and Sri Lanka Railways for ticket reservations.</li>
                                <li><strong>Service Providers:</strong> IT and administration services (e.g., booking engines, payment processors).</li>
                            </ul>
                            <p>We require all third parties to respect the security of your personal data and to treat it in accordance with the law.</p>
                        </div>

                        <div className="policy-block">
                            <h2>5. Data Security</h2>
                            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
                        </div>

                        <div className="policy-block">
                            <h2>6. Your Legal Rights</h2>
                            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.</p>
                            <p>If you wish to exercise any of the rights set out above, please contact us through our official contact channels.</p>
                        </div>

                        <div className="policy-last-updated">
                            Last Updated: May 1, 2026
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
