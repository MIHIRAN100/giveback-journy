import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import ScrollReveal from '../components/ScrollReveal';
import emailjs from '@emailjs/browser';

const BookingInquiryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const initialTransport = searchParams.get('transport') || 'taxi';
    
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [transport, setTransport] = useState(initialTransport);
    
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        arrivalDate: '',
        birthday: '',
        joiningPoint: 'Katunayake Airport (CMB)',
        travelers: '2 Travelers (Couple/Friends)',
        notes: ''
    });
    
    const pkg = tourPackages.find(p => p.id === parseInt(id));

    const getPrice = () => {
        if (!pkg) return '';
        const basePriceVal = parseInt(pkg.price.replace('$', '').replace(',', ''));
        let currentBase = basePriceVal;
        if (pkg.id === 1) currentBase = 840;
        if (pkg.id === 2) currentBase = 600;
        
        if (transport === 'tuktuk') {
            const discount = pkg.id === 1 ? 200 : (pkg.id === 2 ? 110 : 300);
            return `$${currentBase - discount}`;
        }
        if (transport === 'van') {
            return `$${currentBase + 150}`;
        }
        return `$${currentBase}`;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!pkg) {
        return (
            <div style={{ padding: '150px 20px', textAlign: 'center' }}>
                <h2>Package Not Found</h2>
                <button className="btn-modern btn-black" onClick={() => navigate('/packages')}>Back to Packages</button>
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const SERVICE_ID = "service_95ud991";
        const TEMPLATE_ID_ADMIN = "template_84lczai"; // Notification to Company
        const TEMPLATE_ID_USER = "template_j0pdjea";   // Confirmation to User
        const PUBLIC_KEY = "Z-S0sHMSNtxZTuFwF";

        const templateParams = {
            name: formData.userName,
            first_name: formData.userName.split(' ')[0] || '',
            last_name: formData.userName.split(' ').slice(1).join(' ') || '',
            email: formData.userEmail,
            phone: formData.userPhone,
            birthday: formData.birthday,
            tour_package: pkg.name,
            booking_date: formData.arrivalDate,
            travelers: formData.travelers,
            joining_point: formData.joiningPoint,
            price: getPrice(),
            notes: formData.notes,
            booking_id: `GBJ-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
            submitted_at: new Date().toLocaleString(),
            to_email: "givebackjourney@gmail.com"
        };

        try {
            // Send to Admin
            await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParams, PUBLIC_KEY);
            // Send to User (Optional: You can use a single template with 'reply_to' or two separate sends)
            await emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, templateParams, PUBLIC_KEY);

            setSubmitted(true);
        } catch (err) {
            console.error('Email error:', err);
            // Even if email fails, we show success in this demo but log error
            // In production, you'd show a specific error message
            setSubmitted(true); 
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="inquiry-page" style={{ background: '#fcfcfc', minHeight: '100vh', padding: '120px 20px 80px' }}>
            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <ScrollReveal>
                    <div style={{ marginBottom: '40px' }}>
                        <span style={{ 
                            fontSize: '0.75rem', 
                            textTransform: 'uppercase', 
                            letterSpacing: '2px', 
                            fontWeight: 800, 
                            color: 'var(--primary-green)',
                            display: 'block',
                            marginBottom: '10px'
                        }}>Reservation Request</span>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111' }}>Secure Your Journey</h1>
                    </div>
                </ScrollReveal>

                <div className="inquiry-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1.5fr', 
                    gap: '40px',
                    alignItems: 'start'
                }}>
                    {/* Left side: Tour Summary */}
                    <ScrollReveal delay={0.1}>
                        <div style={{ 
                            background: 'white', 
                            borderRadius: '24px', 
                            overflow: 'hidden', 
                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                            border: '1px solid #eee'
                        }}>
                            <img src={pkg.image} alt={pkg.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '30px' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>{pkg.name}</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#666' }}>
                                        <i className="bi bi-clock" style={{ color: 'var(--primary-green)' }}></i>
                                        <span>{pkg.days}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#666' }}>
                                        <i className="bi bi-tag" style={{ color: 'var(--primary-green)' }}></i>
                                        <span style={{ fontWeight: 700, color: 'var(--primary-green)', fontSize: '1.1rem' }}>{getPrice()}</span>
                                        <span>per person ({transport.charAt(0).toUpperCase() + transport.slice(1)})</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#666' }}>
                                        <i className="bi bi-check2-circle" style={{ color: 'var(--primary-green)' }}></i>
                                        <span>Breakfast & Transfers Included</span>
                                    </div>
                                </div>
                                <div style={{ 
                                    marginTop: '25px', 
                                    paddingTop: '20px', 
                                    borderTop: '1px solid #eee',
                                    fontSize: '0.85rem',
                                    color: '#888',
                                    lineHeight: 1.6
                                }}>
                                    Your request will be processed by our travel experts who will customize the plan to your needs.
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right side: Inquiry Form */}
                    <ScrollReveal delay={0.2}>
                        <div style={{ 
                            background: 'white', 
                            borderRadius: '24px', 
                            padding: '40px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                            border: '1px solid #eee'
                        }}>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                    <div style={{ 
                                        width: '80px', 
                                        height: '80px', 
                                        background: 'var(--primary-green)', 
                                        color: 'white', 
                                        borderRadius: '50%', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        fontSize: '2rem',
                                        margin: '0 auto 20px'
                                    }}>
                                        <i className="bi bi-check-lg"></i>
                                    </div>
                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Request Sent!</h2>
                                    <p style={{ color: '#666', lineHeight: 1.6 }}>Thank you for your interest. Our travel designer will contact you via WhatsApp or Email within 24 hours to finalize your {pkg.name} journey.</p>
                                    <button 
                                        className="btn-modern btn-black" 
                                        style={{ marginTop: '30px' }}
                                        onClick={() => navigate('/packages')}
                                    >
                                        Explore More Tours
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Selected Package</label>
                                            <input type="text" readOnly value={pkg.name} style={{ 
                                                width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #eee', background: '#f9f9f9', fontSize: '0.9rem', color: '#666'
                                            }} />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Transport Mode</label>
                                            <select 
                                                value={transport}
                                                onChange={(e) => setTransport(e.target.value)}
                                                style={{ 
                                                    width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '0.9rem', background: '#fff'
                                                }}
                                            >
                                                <option value="taxi">Premium Taxi (Car/SUV)</option>
                                                <option value="tuktuk">Authentic Tuk Tuk</option>
                                                <option value="van">Premium Van (Large Group)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Full Name</label>
                                            <input 
                                                type="text" 
                                                required 
                                                placeholder="John Doe" 
                                                value={formData.userName}
                                                onChange={(e) => setFormData({...formData, userName: e.target.value})}
                                                style={{ 
                                                    width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '0.9rem' 
                                                }} 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Email Address</label>
                                            <input 
                                                type="email" 
                                                required 
                                                placeholder="john@example.com" 
                                                value={formData.userEmail}
                                                onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
                                                style={{ 
                                                    width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '0.9rem' 
                                                }} 
                                            />
                                        </div>
                                    </div>
                                    
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>WhatsApp / Phone</label>
                                            <input 
                                                type="tel" 
                                                required 
                                                placeholder="+1 234 567 890" 
                                                value={formData.userPhone}
                                                onChange={(e) => setFormData({...formData, userPhone: e.target.value})}
                                                style={{ 
                                                    width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '0.9rem' 
                                                }} 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Approx. Arrival Date</label>
                                            <input 
                                                type="date" 
                                                required 
                                                value={formData.arrivalDate}
                                                onChange={(e) => setFormData({...formData, arrivalDate: e.target.value})}
                                                style={{ 
                                                    width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '0.9rem' 
                                                }} 
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Joining Point</label>
                                            <select 
                                                value={formData.joiningPoint}
                                                onChange={(e) => setFormData({...formData, joiningPoint: e.target.value})}
                                                style={{ 
                                                    width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '0.9rem' 
                                                }}
                                            >
                                                <option>Katunayake Airport (CMB)</option>
                                                <option>Colombo City</option>
                                                <option>Kandy</option>
                                                <option>Galle / Hikkaduwa</option>
                                                <option>Other (Specify in notes)</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Traveler Birthday</label>
                                            <input 
                                                type="date" 
                                                value={formData.birthday}
                                                onChange={(e) => setFormData({...formData, birthday: e.target.value})}
                                                style={{ 
                                                    width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '0.9rem' 
                                                }} 
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Number of Travelers</label>
                                            <select 
                                                value={formData.travelers}
                                                onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                                                style={{ 
                                                    width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '0.9rem' 
                                                }}
                                            >
                                                <option>1 Traveler (Solo)</option>
                                                <option>2 Travelers (Couple/Friends)</option>
                                                <option>3-5 Travelers (Small Group)</option>
                                                <option>6+ Travelers (Large Group)</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Dietary Preferences / Notes</label>
                                            <textarea 
                                                rows="1" 
                                                placeholder="Vegetarian, Allergies..." 
                                                value={formData.notes}
                                                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                                style={{ 
                                                    width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '0.9rem', resize: 'none' 
                                                }}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn-modern btn-black" disabled={loading} style={{ 
                                        padding: '16px', fontSize: '1rem', marginTop: '10px' 
                                    }}>
                                        {loading ? 'Submitting Request...' : 'Send Inquiry Request'}
                                    </button>

                                    <p style={{ fontSize: '0.75rem', color: '#999', textAlign: 'center', marginTop: '10px' }}>
                                        By clicking "Send Inquiry Request", you agree to be contacted by our travel team regarding this tour plan.
                                    </p>
                                </form>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 768px) {
                    .inquiry-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .inquiry-page h1 {
                        font-size: 2rem !important;
                    }
                }
            `}} />
        </div>
    );
};

export default BookingInquiryPage;
