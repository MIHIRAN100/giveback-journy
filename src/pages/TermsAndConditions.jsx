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
                        <h1>Terms & Conditions</h1>
                        <p>The clear agreement between you and Give Back Journeys for a safe and fair travel experience.</p>
                    </div>
                </ScrollReveal>
            </div>

            <div className="policy-content-section">
                <div className="policy-container">
                    <ScrollReveal>
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
