import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        details: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // EmailJS Configuration
        // Replace these with your actual IDs from the EmailJS Dashboard
        const SERVICE_ID = "YOUR_SERVICE_ID";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.details,
            to_name: "North Wind Team"
        };

        try {
            const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

            if (res.status === 200) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 8000);
                setFormData({ name: '', email: '', subject: 'General Inquiry', details: '' });
            } else {
                throw new Error('Failed to send');
            }
        } catch (err) {
            console.error('Submission error:', err);
            alert('Could not send inquiry. Please check your EmailJS keys or try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content">
                    <span className="section-tag contact-tag">Let's Connect</span>
                    <h1>Expert Guidance for <br/> Your Island Journey</h1>
                </div>
            </div>

            <section className="contact-section">
                <ScrollReveal>
                    <div className="contact-form-container">
                        {submitted ? (
                            <div className="submission-success">
                                <i className="fa-solid fa-circle-check"></i>
                                <h2>Inquiry Received!</h2>
                                <p>One of our travel designers will be in touch shortly via the email you provided.</p>
                            </div>
                        ) : (
                            <>
                                <div className="form-header">
                                    <h2>Send us an Inquiry</h2>
                                    <p>Tell us about your dream vacation and our travel designers will be in touch within 24 hours.</p>
                                </div>

                                <form className="modern-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="John Doe" 
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                placeholder="john@example.com" 
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <select 
                                            className="form-control"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                        >
                                            <option>General Inquiry</option>
                                            <option>Tour Booking</option>
                                            <option>Custom Itinerary</option>
                                            <option>Partnership</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Details</label>
                                        <textarea 
                                            className="form-control" 
                                            rows="6" 
                                            placeholder="Tell us more about your interests..."
                                            required
                                            value={formData.details}
                                            onChange={(e) => setFormData({...formData, details: e.target.value})}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-modern btn-black contact-submit-btn" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </ScrollReveal>

                <div className="contact-info-container">
                    <ScrollReveal delay={0.1}>
                        <div className="contact-info-card">
                            <i className="fa-solid fa-location-dot"></i>
                            <h4>Our Island Office</h4>
                            <p>No 120, Galle Road, <br/> Colombo 03, Sri Lanka.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="contact-info-card">
                            <i className="fa-solid fa-phone-volume"></i>
                            <h4>Direct Lines</h4>
                            <p>Inquiries: +94 11 234 5678 <br/> 24/7 Support: +94 77 123 4567</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="contact-info-card">
                            <i className="fa-solid fa-paper-plane"></i>
                            <h4>Email Us</h4>
                            <p>hello@northwind.travel <br/> bookings@northwind.travel</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="contact-info-card contact-social-card">
                            <h4>Social Explorer</h4>
                            <div className="social-links-row">
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
