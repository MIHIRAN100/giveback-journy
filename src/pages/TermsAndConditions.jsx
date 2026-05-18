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
                        <h1>Terms and Conditions of Service</h1>
                        <p>
                            Please read the Booking Terms and Conditions of Giveback Journeys carefully. By submitting your online application, making a deposit, or booking a trip, you confirm your acceptance of, and agree to be bound by, the following Terms and Conditions of Service:
                        </p>
                        <div className="policy-meta-row">
                            <span className="policy-version-text">Version 6.00 (Revised May 2026)</span>
                            <button className="policy-share-btn" onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert('Link copied to clipboard!');
                            }}>
                                <i className="bi bi-share"></i> Share
                            </button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <div className="policy-content-section">
                <div className="policy-container">
                    <ScrollReveal>
                        <div className="policy-block">
                            <h2>Definitions</h2>
                            <ul>
                                <li>All prices referenced across our platform, invoices, and communication are in US Dollars (USD).</li>
                                <li>All timing referred to in these terms and conditions is based on Sri Lanka Standard Time (SLST).</li>
                                <li><strong>'Giveback Journeys'</strong> (also referred to as "Giveback Journey" or "Giveback Journey (Pvt) Ltd.") refers to the local Sri Lankan custom travel network and registered social enterprise which facilitates custom travel, adventure tours, and social impact/volunteering experiences.</li>
                                <li><strong>'Volunteer'</strong> or <strong>'Client'</strong> refers to the traveler who has booked a tour or applied to participate in a sustainable volunteer program or custom journey.</li>
                                <li><strong>'Independent Local Team'</strong> refers to the local hosts, school leaders, village guides, independent transport operators, and curators who facilitate the programs in chosen communities.</li>
                                <li>The <strong>'Giveback Journeys website'</strong> refers to <a href="https://www.givebackjourney.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>www.givebackjourney.com</a>.</li>
                            </ul>
                        </div>

                        <div className="policy-block">
                            <h2>Your Travel Partner</h2>
                            <p>
                                Giveback Journey (Pvt) Ltd. is a local Sri Lankan travel company registered with the Sri Lanka Tourism Development Authority (SLTDA), the official governing body for Sri Lanka tourism. The planning, execution, and organization of custom tours and social impact volunteer packages is carried out by Giveback Journey on behalf of guests and our travel partners. The terms "Giveback Journey," "Giveback Journeys," "we," "our," or "us" in these Booking Terms and Conditions refer directly to Giveback Journey (Pvt) Ltd.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Acceptance & Booking Confirmation</h2>
                            <p>
                                Giveback Journeys reserves the right to refuse acceptance of any booking or volunteer application at our sole discretion.
                            </p>
                            <p>
                                Your booking is officially confirmed and a binding contract exists when Giveback Journey (Pvt) Ltd. issues a written Confirmation Invoice and Travel Voucher after receipt of the applicable deposit. Please check your confirmation invoice carefully and report any incorrect or incomplete information to your Tour Consultant immediately. It is your responsibility to ensure that all names are provided exactly as stated in the relevant valid passport.
                            </p>
                            <p>
                                For all standard budget bookings, a non-refundable deposit of 20% is required to secure the reservation. In the case of custom-made or tailor-made holidays, your booking will be confirmed upon receipt of a 50% upfront advance. A Confirmation Invoice and Travel Voucher will be issued when all reservations are completed, and the remaining full payment must be settled at least 7 days prior to your arrival in Sri Lanka.
                            </p>
                            <p>
                                <strong>Payment Notes:</strong>
                            </p>
                            <ul>
                                <li>Initial deposit/payment is required at the time of booking to secure reservations.</li>
                                <li>The client must cover all bank charges, intermediary fees, or transaction costs in the case of wire or bank transfers.</li>
                                <li>There are no additional postage fees, booking fees, or other hidden charges on our invoices.</li>
                                <li>Exchange rates are calculated based on the official rates provided by the Central Bank of Sri Lanka (CBSL) at the exact time of booking and are not subject to changes after confirmation.</li>
                            </ul>
                        </div>

                        <div className="policy-block">
                            <h2>Cancellation & Refunds Policy</h2>
                            <p>
                                Clients wishing to cancel a booking with Giveback Journey (Pvt) Ltd. must immediately notify their designated Tour Consultant in writing via email, quoting their Invoice Number. In the event of a group cancellation, the tour leader and each individual member will be held equally liable for cancellation costs.
                            </p>
                            <p>
                                <strong>a) Cancellation by Client (You)</strong>
                            </p>
                            <p>
                                Cancellation fees are determined based on the date on which written notice of cancellation is received by your Tour Consultant, and are expressed as a percentage of the total payments made:
                            </p>
                            <ul>
                                <li><strong>60 days or more before arrival:</strong> 100% of the payments made in respect of the cancelled tour will be refunded (deposit is non-refundable for standard budget package bookings unless stated otherwise in custom contracts).</li>
                                <li><strong>Between 30 to 59 days before arrival:</strong> An amount equal to 95% of payments made in respect of the cancelled tour will be refunded.</li>
                                <li><strong>Less than 30 days before arrival:</strong> An amount equal to 90% of payments made in respect of the cancelled tour will be refunded.</li>
                                <li><strong>7 days or less before arrival (or No-Show / Early Checkout):</strong> All payments are non-refundable (0% refund). No refunds will be provided for early checkouts or no-shows.</li>
                                <li>Other cancellation refunds are determined on a strict case-by-case basis, whether provided directly or indirectly by our suppliers.</li>
                            </ul>
                            <p>
                                <strong>b) Pandemic Exception Clause</strong>
                            </p>
                            <p>
                                If there is an unfortunate, verified reason in which the tour cannot take place due to pandemic-related borders closures or national travel bans, Giveback Journey will refund 100% of your payment if cancelled within 21 days prior to your arrival in Sri Lanka.
                            </p>
                            <p>
                                <strong>c) Cancellation by Giveback Journey</strong>
                            </p>
                            <p>
                                Giveback Journey is committed to the highest levels of professionalism to protect your booking. However, we reserve the right to cancel your booking in any incidence of Force Majeure (see section below). In this highly unlikely event, we will return all money paid by you in full and, wherever possible, offer an alternative booking of a comparable type and quality for your consideration. We cannot be held liable for any incidental or personal expenses (such as flights, visa fees, vaccinations, or insurance) that you may incur in arrangements for a booking that is subsequently cancelled by us.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Personal Safety & Travel Advisories Override</h2>
                            <p>
                                Your personal safety is our primary concern. If an official travel advisory issued by a client's home country government instructs against travel to Sri Lanka or specific regions stated on your custom itinerary, we guarantee the following refunds in the event of a cancellation by you. <strong>This safety clause explicitly overrides other standard cancellation clauses:</strong>
                            </p>
                            <ul>
                                <li><strong>30 days or more before the date of your first booking:</strong> A minimum of 90% of the total booking cost will be refunded.</li>
                                <li><strong>Within 30 days of the first booking date and during your holiday:</strong> All recoverable costs will be refunded in full.</li>
                            </ul>
                        </div>

                        <div className="policy-block">
                            <h2>Itinerary Adjustments & Accuracy</h2>
                            <p>
                                <strong>a) Itinerary Changes Made by Giveback Journey</strong><br />
                                We are committed to high levels of professionalism. Adjustments to confirmed itineraries will only be made in unavoidable or overriding circumstances. All efforts will be made to ensure that these adjustments are in the spirit of the original itinerary and will be properly discussed with you beforehand. If exceptional circumstances (such as an overbooking of a hotel or local road closures) demand an emergency change of accommodation while you are on tour, we will refund you appropriately if the replacement hotel is cheaper, and we will cover all additional transfer and transport costs.
                            </p>
                            <p>
                                <strong>b) Itinerary Changes Requested by Client</strong><br />
                                Giveback Journey aims to offer highly flexible and customized itineraries. Once an itinerary is finalized, requests for changes to a group or individual itinerary will always be considered. We will inform you in detail of any additional charges or booking fees incurred with respect to those custom modifications.
                            </p>
                            <p>
                                <strong>c) Information Accuracy & Local Subjectivity</strong><br />
                                We use all reasonable endeavors to ensure that information provided on our website and in travel documents is free from errors and omissions and will correct any errors once notified. We cannot, however, be held responsible for misinformation that a reasonable person could not have expected us to know. Our opinions, recommendations, and reviews are our own. While we rigorously strive for accuracy, these opinions are necessarily subjective to some degree. Occasionally, temporary local circumstances (such as emergency road maintenance, national grid power cuts, water shortages, or off-season closure) can make advertised facilities temporarily unavailable.
                            </p>
                            <p>
                                <strong>d) Content Moderation</strong><br />
                                We do not take responsibility for consumer reviews, feedback, or comments made in interactive areas of our website, but we reserve the right to moderate, edit, or remove comments to comply with required statutes of the law or maintain brand safety.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Information Integrity & Privacy</h2>
                            <p>
                                The traveler certifies that all information provided to Giveback Journeys relating to their personal background, qualifications, experience, medical history, and current state of health is accurate and truthful. We accept no liability for errors or omissions of information provided by you. We treat all personal data with strict confidentiality under our Privacy Policy. We do not spam, supply mailing lists, or use your data in any way other than to secure your booking. We maintain a strict anti-fraud policy and take responsible technical steps to protect personal information, such as secure billing and credit card details.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Customer Care & Complaints Procedure</h2>
                            <p>
                                Giveback Journey is fully committed to high levels of customer care at all stages of your travel. This includes solving any problems at the source to the benefit and contentment of all parties.
                            </p>
                            <p>
                                In the event of a dispute or service issue during your tour, any complaints must be pursued immediately at the source with the direct supplier of the service (e.g., hotel manager, transport provider, or guide) and our local representatives. If the matter is not satisfactorily resolved on-site, you <strong>MUST</strong> notify Giveback Journey via email within 24 hours of the incident in a further effort to rectify the situation amicably. Giveback Journey provides you with appropriate emergency local contact numbers before your travel, and it is your responsibility to keep them safely. We reserve the right to refuse any liability or compensation if this arbitration and notification procedure is not strictly adhered to.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Checklist for Essentials</h2>
                            <p>
                                It is your sole responsibility to ensure that all your travel documents, passports (with at least 6 months validity from departure), visas (ETA), international driving licenses, and currencies are in order. You must inform us immediately regarding your finalized arrival and departure times so that we can organize your airport transfers correctly.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Special Requests</h2>
                            <p>
                                Any special requests must be advised to us at the time of booking (e.g., dietary requirements, room location, bedding type i.e. twin/double, or specific hotel facilities such as a swimming pool or gym). You must confirm these requests by email. While every effort will be made by us and our suppliers to arrange reasonable special requests, we cannot guarantee that they will be fulfilled. The fact that a special request has been noted on your confirmation itinerary or passed on to a hotel supplier is not confirmation that the request will be met. Failure to meet any special request will not be a breach of contract on our part, and we do not accept bookings that are conditional upon any special request being met.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Force Majeure</h2>
                            <p>
                                The Tour Operator (Giveback Journey) will not be liable in any way for death, bodily injury, illness, damage, delay, or other loss or detriment to person or property, or financial costs both direct and indirect incurred, or for the failure to commence, perform, or complete any duty owed to you if such death, delay, bodily injury (including emotional distress or injury), illness, damage, or other loss is caused by an Act of God, war or war-like operations, mechanical breakdowns, terrorist activities or threat thereof, civil commotions, labor difficulties, interference by authorities, political disturbance, riot, insurrection and government restraint, fire, extreme weather, epidemics, pandemics, national health emergencies, or any other cause whatsoever beyond the reasonable control of the Tour Operator; or an event which the Tour Operator or the Third Party Supplier of services, even with all due care, could not foresee, any and all of which constitute "Force Majeure".
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Independent Travel & Partially-Booked Itineraries</h2>
                            <p>
                                In the event of an itinerary that is only partially booked by Giveback Journey, we cannot be held responsible for the failure, safety, or quality of any component of the holiday for which we do not have direct responsibility. This includes any difficulty in finding hotels, or the reservation of train tickets, if customers choose to book accommodation-only deals and independently arrange their own transport or tours.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Flight Tickets & Travel Insurance Exclusion (Not Provided)</h2>
                            <p>
                                Giveback Journey (Pvt) Ltd. is a local land-tour operator and sustainable travel network. <strong>We do not arrange, book, sell, or provide international flight tickets or travel insurance.</strong> Booking flight tickets and securing travel insurance is entirely the passenger's own responsibility.
                            </p>
                            <p>
                                For your safety and peace of mind, we strongly recommend that every traveler possesses valid, comprehensive travel insurance for the entire duration of their journey. This insurance should cover personal accident, medical expenses, emergency repatriation, trip cancellation, loss of baggage, and personal liability.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Required Medical Information, Age & Fitness Limits</h2>
                            <p>
                                You are solely responsible for assessing whether a tour or volunteer package is suitable for you. You should consult your physician to confirm your fitness for travel and participation in any planned physical activities. We do not provide medical advice. It is your responsibility to assess the risks and requirements of each aspect of the tour based on your unique circumstances, limitations, fitness level, and medical requirements.
                            </p>
                            <p>
                                To help ascertain if a tour or volunteer itinerary is suitable and safe, clients who fall into the following criteria are <strong>required to complete our Tour Suitability Form:</strong>
                            </p>
                            <ol>
                                <li><strong>Pre-existing medical conditions:</strong> Any person with a pre-existing medical condition, who requires regular care by a doctor, or who has medical or physical circumstances that we should be aware of.</li>
                                <li><strong>Age 70 or over:</strong> All persons aged 70 or over by the tour start date. We may request further information or a signed letter from your doctor confirming you are fully able to undertake your chosen tour.</li>
                                <li><strong>Pregnancy:</strong> Pregnancy is considered a medical condition and must be disclosed to the Tour Operator at the time of booking. Giveback Journey reserves the right to refuse to carry women who are over 24 weeks pregnant by the tour end date.</li>
                            </ol>
                            <p>
                                Giveback Journey may refuse to carry anyone with certain medical conditions or physical limitations if reasonable accommodation or safe alternatives cannot be arranged. Where considered necessary due to participation requirements, conditions or upgrades may apply, or we may recommend providing the holiday on a private tour basis (additional supplements apply).
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Tropical Travel Realities & Pre-Overseas Checklist</h2>
                            <p>
                                Bookings arranged by Giveback Journey range from luxury boutique stays to budget homestays. We make every effort to ensure that planning is meticulous and suppliers are high quality. However, clients must acknowledge that amenities, roads, and general infrastructure in developing tropical regions can at times be comparatively underdeveloped. Delays, moments of discomfort, and risk can naturally occur in all travel. In the tropics, the presence of insects in rooms and outdoor areas is common. A booking with us constitutes an implicit acceptance of these environmental facts. Clients are strongly advised to take sensible tropical precautions at all times and familiarize themselves with up-to-date travel information from independent, reliable sources.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Breach of Contract & Negligence</h2>
                            <p>
                                We will only accept liability for incidents that arise as a direct result of our proven negligence, or that of our direct suppliers, in respect of arrangements forming part of your holiday itinerary, in cases where all your holiday accommodation, transport, and transfers are arranged by us for the entire extent of your stay in Sri Lanka. This applies directly to cases of illness, injury, and/or death.
                            </p>
                            <p>
                                Should you or any member of your group suffer loss (such as baggage or valuables), serious illness, personal injury, or death during your holiday, we, or our stated ground representatives, will provide sympathetic advice and guidance at our/their discretion. This must be carried out in conjunction with your personal travel insurance policy.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Price Guarantee</h2>
                            <p>
                                We guarantee that your confirmed holiday will not be subjected to surcharges, except in rare events where our operational costs rise because of direct changes in Government policy or tax structures. We will never surcharge for exchange-rate fluctuations.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Accommodation Rules & Finality</h2>
                            <p>
                                Giveback Journey guarantees agreed accommodation for the tour package selected by the Client. Clients are provided with detailed information beforehand on selected hotels based on their budget and package. <strong>Clients are requested to thoroughly research the selected hotels before confirming a booking.</strong>
                            </p>
                            <p>
                                Once a booking has been confirmed, we will make reservations at the selected hotels, and these reservations cannot be changed under any circumstance before or after the guest arrives in Sri Lanka. If, however, the guest insists on changing a hotel booking during the tour, Giveback Journey will try our best to arrange another hotel in the selected category; however, all additional costs, cancellation charges, and transfer fees incurred will have to be undertaken entirely by the guests themselves.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Shopping & Third-Party Purchases Disclaimer</h2>
                            <p>
                                Sri Lanka is famous for local crafts, gems, spices, garments, and tea. However, Giveback Journey never, under any circumstances, recommends, endorses, or guarantees the value, authenticity, or quality of any additional product not clearly itemized on the Travel Voucher and which may be purchased by the client during an itinerary arranged in part or whole by us. This applies even in cases where the product or shop may have been discussed between a client and an guide, driver, employee, or representative of Giveback Journey.
                            </p>
                            <p>
                                Determining the value, legality, and quality of a product is entirely the client’s responsibility. Giveback Journey has no duty to intervene in such circumstances. We are not responsible for the quality, functionality, guarantee, or warranty of any product you may purchase during your tour.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Citations & References</h2>
                            <p>
                                The content and local tourism data on this website has been thoroughly researched through official government resources including the official website of the Sri Lanka Tourism Development Authority (SLTDA), Wikipedia, Lonely Planet, TripAdvisor, and official websites belonging to each accommodation provider. Giveback Journey does not confirm nor deny the veracity of third-party data which has been used solely as reference points.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>Governing Law & Dispute Resolution</h2>
                            <p>
                                These Booking Terms and Conditions are governed by and construed in accordance with the laws of Sri Lanka. Any disputes, claims, or arbitration arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.
                            </p>
                        </div>

                        <div className="policy-last-updated">
                            Last Updated: May 18, 2026
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
