import React, { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policy-page-wrapper">
            <div className="policy-hero">
                <ScrollReveal>
                    <div className="policy-hero-content">
                        <button className="policy-share-btn" onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            alert('Link copied to clipboard!');
                        }}>
                            <i className="bi bi-share"></i> Share
                        </button>
                        <h1>Terms and Conditions of Service</h1>
                        <div className="policy-version-text">Version 5.24</div>
                        <p>Please read the Terms and Conditions of Give Back Journeys carefully before submitting your online application. By submitting your application, you confirm your acceptance of, and agree to be bound by the following Terms and Conditions of Service:</p>
                    </div>
                </ScrollReveal>
            </div>

            <div className="policy-content-section">
                <div className="policy-container">
                    <ScrollReveal>
                        <div className="policy-block">
                            <h2>Definitions</h2>
                            <ul>
                                <li>All prices referenced are in US dollars.</li>
                                <li>All timing referred to in these terms and conditions is based on Sri Lanka standard time (SLST).</li>
                                <li><strong>'Give Back Journeys'</strong> refers to the local Sri Lankan custom travel network which facilitates travel and social impact experiences.</li>
                                <li><strong>'Volunteer'</strong> refers to the traveler who has applied to participate in a sustainable volunteer program or journey.</li>
                                <li><strong>'Independent Local Team'</strong> refers to the local hosts, school leaders, and guides who facilitate the programs in chosen communities.</li>
                                <li>The <strong>'Give Back Journeys website'</strong> refers to <a href="https://www.givebackjourney.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>www.givebackjourney.com</a>.</li>
                            </ul>
                        </div>

                        <div className="policy-block">
                            <h2>Acceptance onto a Program</h2>
                            <p>Give Back Journeys reserves the right to refuse acceptance of any application.</p>
                            <p>The traveler certifies that all information provided to Give Back Journeys relating to their personal background, qualifications, experience, medical history, and current state of health is accurate and truthful, and that no information relating to the aforementioned areas is withheld. Give Back Journeys accepts no liability for errors or omission of information provided by the traveler.</p>
                        </div>

                        <div className="policy-block">
                            <h2>1. The Contract</h2>
                            <p>By booking a trip with Give Back Journeys, you are agreeing to these Terms and Conditions. A contract exists between us once we have received your deposit and sent a confirmation email. You must be at least 18 years of age to make a booking.</p>
                        </div>

                        <div className="policy-block">
                            <h2>2. Booking & Payments</h2>
                            <ul>
                                <li><strong>Deposit:</strong> A non-refundable deposit of 20% is required to secure your booking.</li>
                                <li><strong>Final Payment:</strong> The remaining balance must be paid no later than 30 days before your tour start date.</li>
                                <li><strong>Last-Minute Bookings:</strong> For bookings made within 30 days of departure, full payment is required at the time of confirmation.</li>
                            </ul>
                        </div>

                        <div className="policy-block">
                            <h2>3. Cancellation & Refunds</h2>
                            <p>Cancellations must be made in writing. Our standard cancellation fees for budget tours are as follows:</p>
                            <ul>
                                <li><strong>60+ Days before departure:</strong> Full refund of balance paid (deposit is non-refundable).</li>
                                <li><strong>30 - 59 Days before departure:</strong> 50% of the total tour price is forfeited.</li>
                                <li><strong>Less than 30 Days before departure:</strong> 100% of the total tour price is forfeited.</li>
                            </ul>
                            <p><em>Note: Special conditions may apply to train tickets and specific high-demand peak season hotel bookings.</em></p>
                        </div>

                        <div className="policy-block">
                            <h2>4. Travel Insurance</h2>
                            <p>It is a mandatory requirement that all travelers with Give Back Journeys have comprehensive travel insurance. This insurance must cover personal accident, medical expenses, emergency repatriation, and personal liability. We also strongly recommend coverage for trip cancellation and loss of luggage.</p>
                        </div>

                        <div className="policy-block">
                            <h2>5. Liability & Risk</h2>
                            <p>While we take every precaution to ensure your safety, adventure travel in Sri Lanka involves inherent risks. Give Back Journeys acts as an agent for transport providers, hotels, and other contractors. We are not liable for any injury, damage, loss, delay, or irregularity which may be occasioned by the error or negligence of any company or person engaged in conveying the passenger or carrying out the arrangements of the tour.</p>
                        </div>

                        <div className="policy-block">
                            <h2>6. Force Majeure</h2>
                            <p>Give Back Journeys shall not be liable for any failure to perform its obligations where such failure results from any cause beyond our reasonable control, including but not limited to: acts of God, strikes, pandemics, civil unrest, or changes in government regulations.</p>
                        </div>

                        <div className="policy-block">
                            <h2>7. Governing Law</h2>
                            <p>These terms and conditions are governed by and construed in accordance with the laws of Sri Lanka. Any disputes shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.</p>
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

export default TermsAndConditions;
