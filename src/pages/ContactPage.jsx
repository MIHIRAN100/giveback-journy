import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import emailjs from '@emailjs/browser';
import DocuSignModal from '../components/DocuSignModal';


const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const isSending = useRef(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        details: ''
    });

    const [termsAccepted, setTermsAccepted] = useState(false);
    const [ndaAccepted, setNdaAccepted] = useState(false);
    const [isNdaModalOpen, setIsNdaModalOpen] = useState(false);
    const [ndaDetails, setNdaDetails] = useState({ signed: false, envelopeId: '' });

    useEffect(() => {
        window.scrollTo(0, 0);
        // Check NDA signed status
        const hasSigned = localStorage.getItem('nda_signed') === 'true';
        if (hasSigned) {
            setNdaAccepted(true);
            setNdaDetails({
                signed: true,
                envelopeId: localStorage.getItem('nda_docusign_envelope') || ''
            });
        }
    }, []);

    const handleNdaSignComplete = (envelopeId, signerName, signedDate) => {
        localStorage.setItem('nda_signed', 'true');
        localStorage.setItem('nda_signed_name', signerName);
        localStorage.setItem('nda_signed_date', signedDate);
        localStorage.setItem('nda_docusign_envelope', envelopeId);

        setNdaAccepted(true);
        setNdaDetails({
            signed: true,
            envelopeId: envelopeId
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert('Please agree to the Terms & Conditions and Privacy Policy.');
            return;
        }
        if (!ndaAccepted) {
            alert('Please review and sign the Non-Disclosure Agreement (NDA) using DocuSign.');
            return;
        }
        if (isSending.current) return;
        isSending.current = true;
        setLoading(true);
        
        // Auto-fix common email typos to prevent delivery failure
        let cleanEmail = formData.email.trim().toLowerCase();
        if (cleanEmail.endsWith('@gmai.com')) cleanEmail = cleanEmail.replace('@gmai.com', '@gmail.com');

        const SERVICE_ID = "service_95ud991";
        const TEMPLATE_ID = "template_84lczai";
        const PUBLIC_KEY = "Z-S0sHMSNtxZTuFwF";

        const ndaSignedName = localStorage.getItem('nda_signed_name') || '';
        const ndaSignedDate = localStorage.getItem('nda_signed_date') || '';
        const ndaEnvelopeId = localStorage.getItem('nda_docusign_envelope') || '';
        
        const ndaManifest = `
--- VERIFIED MUTUAL NDA DETAILS (DOCUSIGN COMPLIANCE) ---
Status: SIGNED & SECURE
Signer Legal Name: ${ndaSignedName}
Signature Timestamp: ${ndaSignedDate}
DocuSign Envelope ID: ${ndaEnvelopeId}
=========================================================
`;

        const templateParams = {
            name: formData.name,
            email: cleanEmail,
            reply_to: cleanEmail,
            admin_email: "journeygiveback@gmail.com",
            phone: 'N/A',
            birthday: 'N/A',
            notes: `${formData.details}\n\n${ndaManifest}`,
            tour_package: formData.subject,
            submitted_at: new Date().toLocaleString(),
            to_email: "journeygiveback@gmail.com"
        };

        try {
            const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            if (res.status === 200) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 8000);
                setFormData({ name: '', email: '', subject: 'General Inquiry', details: '' });
            }
        } catch (err) {
            console.error('Submission error:', err);
            alert('Could not send inquiry. Please try again later.');
        } finally {
            setLoading(false);
            isSending.current = false;
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content">
                    <span className="section-tag contact-tag">Contact Us</span>
                    <h1>We're here to help you <br/> plan your next adventure</h1>
                    <p className="hero-sub">Whether you have a specific question about a tour or just want some island inspiration, our team of experts is ready to assist.</p>
                </div>
            </div>

            <section className="contact-modern-container">
                <div className="contact-grid">
                    {/* Left Column: Info & Description */}
                    <div className="contact-details-column">
                        <ScrollReveal>
                            <div className="contact-desc-block">
                                <h2>Talk to a human</h2>
                                <p>No automated bots here. When you reach out, you'll speak directly with one of our experienced travel designers who knows Sri Lanka like the back of their hand.</p>
                            </div>

                            <div className="contact-channels">
                                <div className="channel-item">
                                    <div className="channel-icon"><i className="fa-brands fa-whatsapp"></i></div>
                                    <div className="channel-info">
                                        <h4>WhatsApp Support</h4>
                                        <p>Fastest for quick questions</p>
                                        <a href="https://wa.me/94771234567" target="_blank" rel="noreferrer">+94 77 123 4567</a>
                                    </div>
                                </div>

                                <div className="channel-item">
                                    <div className="channel-icon"><i className="fa-solid fa-phone"></i></div>
                                    <div className="channel-info">
                                        <h4>Call Us Directly</h4>
                                        <p>Mon-Fri, 9am - 6pm (SL Time)</p>
                                        <a href="tel:+94812345678">+94 81 234 5678</a>
                                    </div>
                                </div>

                                <div className="channel-item">
                                    <div className="channel-icon"><i className="fa-solid fa-envelope"></i></div>
                                    <div className="channel-info">
                                        <h4>Email Inquiries</h4>
                                        <p>Detailed plans & quotes</p>
                                        <a href="mailto:journeygiveback@gmail.com">journeygiveback@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="office-location">
                                <h4>Our Headquarters</h4>
                                <p>
                                    Give Back Journey (Pvt) Ltd.<br/>
                                    No. 45, Peradeniya Road, Kandy,<br/>
                                    Sri Lanka.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Form */}
                    <div className="contact-form-column">
                        <ScrollReveal delay={0.2}>
                            <div className="modern-form-card">
                                {submitted ? (
                                    <div className="submission-success">
                                        <div className="success-icon"><i className="fa-solid fa-paper-plane"></i></div>
                                        <h2>Message Sent!</h2>
                                        <p>Thank you for reaching out. A travel designer will review your inquiry and get back to you within 24 hours.</p>
                                        <button className="btn-modern btn-black" onClick={() => setSubmitted(false)}>Send Another Message</button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="form-header">
                                            <h3>Share your travel dreams</h3>
                                            <p>Fill out the form below and we'll start crafting your custom itinerary.</p>
                                        </div>
                                        <form onSubmit={handleSubmit} className="premium-form">
                                            <div className="input-group">
                                                <label>Your Name</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="e.g. Alexander Mitchell"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                    required
                                                />
                                            </div>
                                            <div className="input-group">
                                                <label>Email Address</label>
                                                <input 
                                                    type="email" 
                                                    placeholder="name@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                    required
                                                />
                                            </div>
                                            <div className="input-group">
                                                <label>What are you looking for?</label>
                                                <select 
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                                >
                                                    <option>General Inquiry</option>
                                                    <option>Booking a Tour</option>
                                                    <option>Customizing an Itinerary</option>
                                                    <option>Group Travel (8+ People)</option>
                                                    <option>Volunteering Projects</option>
                                                </select>
                                            </div>
                                            <div className="input-group">
                                                <label>How can we help?</label>
                                                <textarea 
                                                    rows="5"
                                                    placeholder="Tell us a bit about your group, preferred dates, or specific interests..."
                                                    value={formData.details}
                                                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="ds-form-agreements" style={{ margin: '25px 0', display: 'flex', flexDirection: 'column', gap: '15px', background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
                                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                                                    <input 
                                                        type="checkbox" 
                                                        checked={termsAccepted} 
                                                        onChange={(e) => setTermsAccepted(e.target.checked)} 
                                                        required 
                                                        style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: 'var(--primary-green)', cursor: 'pointer' }} 
                                                    />
                                                    <span>I agree to the <Link to="/terms-and-conditions" target="_blank" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>Terms & Conditions</Link> and <Link to="/privacy-policy" target="_blank" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>Privacy Policy</Link>. *</span>
                                                </label>

                                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                                                    <input 
                                                        type="checkbox" 
                                                        checked={ndaAccepted} 
                                                        onChange={(e) => setNdaAccepted(e.target.checked)} 
                                                        disabled={ndaDetails.signed} 
                                                        required 
                                                        style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: 'var(--primary-green)', cursor: 'pointer' }} 
                                                    />
                                                    {ndaDetails.signed ? (
                                                        <span style={{ color: '#15803d', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                            <i className="fa-solid fa-circle-check"></i> Verified DocuSign Signature Applied <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', opacity: 0.8 }}>({ndaDetails.envelopeId.slice(0, 11)}...)</span>
                                                        </span>
                                                    ) : (
                                                        <span>I agree to the <Link to="/nda" target="_blank" onClick={(e) => { e.preventDefault(); setIsNdaModalOpen(true); }} style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>Non-Disclosure Agreement (NDA)</Link> (DocuSign Required). *</span>
                                                    )}
                                                </label>
                                            </div>

                                            <button type="submit" className="btn-modern btn-black btn-block" disabled={loading}>
                                                {loading ? 'Sending...' : 'Send My Inquiry'}
                                            </button>

                                            <DocuSignModal 
                                                isOpen={isNdaModalOpen} 
                                                onClose={() => setIsNdaModalOpen(false)} 
                                                onSignComplete={handleNdaSignComplete} 
                                                defaultName={formData.name}
                                                defaultEmail={formData.email}
                                            />

                                        </form>
                                    </>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="contact-faq-preview">
                <ScrollReveal>
                    <div className="faq-header">
                        <span className="about-tag">Quick Answers</span>
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>Can I customize my tour?</h4>
                            <p>Absolutely! All our signature tours can be fully customized to match your pace, interests, and budget.</p>
                        </div>
                        <div className="faq-item">
                            <h4>When is the best time to visit?</h4>
                            <p>Sri Lanka is a year-round destination. The west/south is best from Dec-April, while the east is perfect from May-Sept.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What's included in the price?</h4>
                            <p>Typically, our tours include accommodation, private transport, breakfast, and all listed entrance fees.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Is it safe for solo travelers?</h4>
                            <p>Sri Lanka is very welcoming to solo travelers. Our private drivers act as guides and companions for added safety.</p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default ContactPage;
