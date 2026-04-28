import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policy-page-wrapper">
            <div className="policy-hero">
                <div className="reveal active">
                    <h1>Privacy Policy</h1>
                    <p>How we protect your journey and your data at Giveback journny.</p>
                </div>
            </div>

            <div className="policy-content-section">
                <div className="policy-container">
                    <div className="policy-block">
                        <h2>1. Introduction</h2>
                        <p>Welcome to Giveback journny. We are committed to protecting your personal data and your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.</p>
                    </div>

                    <div className="policy-block">
                        <h2>2. Information We Collect</h2>
                        <p>We may collect personal information such as your name, email address, phone number, and travel preferences when you make a booking, subscribe to our newsletter, or contact us through our website.</p>
                    </div>

                    <div className="policy-block">
                        <h2>3. How We Use Your Information</h2>
                        <p>Your information is used primarily to process bookings, provide customer support, and send you relevant travel updates. We do not sell or rent your personal information to third parties.</p>
                    </div>

                    <div className="policy-block">
                        <h2>4. Data Security</h2>
                        <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored in secure networks and is only accessible by a limited number of persons who have special access rights.</p>
                    </div>

                    <div className="policy-block">
                        <h2>5. Cookies</h2>
                        <p>Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect certain features of our site.</p>
                    </div>

                    <div className="policy-block">
                        <h2>6. Contact Us</h2>
                        <p>If you have any questions regarding this Privacy Policy, you may contact us using the information on our Contact page.</p>
                    </div>

                    <div className="policy-last-updated">
                        Last Updated: April 27, 2026
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
