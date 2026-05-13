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
    const [currentStep, setCurrentStep] = useState(1);
    
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        arrivalDate: '',
        birthday: '',
        joiningPoint: 'Katunayake Airport (CMB)',
        travelers: '2 Travelers (Couple/Friends)',
        notes: '',
        additionalInfo: '',
        wantsVolunteering: false
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

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentStep < 3) {
            nextStep();
            return;
        }
        
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
            additional_info: formData.additionalInfo,
            wants_volunteering: formData.wantsVolunteering ? 'Yes' : 'No',
            booking_id: `GBJ-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
            submitted_at: new Date().toLocaleString(),
            to_email: "hello@givebackjourney.com"
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParams, PUBLIC_KEY);
            await emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, templateParams, PUBLIC_KEY);
            setSubmitted(true);
        } catch (err) {
            console.error('Email error:', err);
            setSubmitted(true); 
        } finally {
            setLoading(false);
        }
    };

    const renderStepIndicator = () => (
        <div className="step-indicator" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: '#eee', zIndex: 0, transform: 'translateY(-50%)' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: 0, width: `${(currentStep - 1) * 50}%`, height: '2px', background: 'var(--primary-green)', zIndex: 0, transform: 'translateY(-50%)', transition: 'width 0.3s ease' }}></div>
            {[1, 2, 3].map(step => (
                <div key={step} style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: currentStep >= step ? 'var(--primary-green)' : 'white',
                    border: `2px solid ${currentStep >= step ? 'var(--primary-green)' : '#eee'}`,
                    color: currentStep >= step ? 'white' : '#999',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    zIndex: 1,
                    transition: 'all 0.3s ease'
                }}>
                    {currentStep > step ? <i className="bi bi-check-lg"></i> : step}
                </div>
            ))}
        </div>
    );

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
                        }}>Your Personalized Journey</span>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111' }}>Let's Design Your Experience</h1>
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
                            border: '1px solid #eee',
                            minHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '40px 0', margin: 'auto' }}>
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
                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Your Journey Begins Here!</h2>
                                    <p style={{ color: '#666', lineHeight: 1.6 }}>Awesome! Our travel designers are now reviewing your request. We'll be in touch via WhatsApp or Email within 24 hours to craft your perfect {pkg.name} adventure.</p>
                                    <button 
                                        className="btn-modern btn-black" 
                                        style={{ marginTop: '30px' }}
                                        onClick={() => navigate('/packages')}
                                    >
                                        Explore More Tours
                                    </button>
                                </div>
                            ) : (
                                <>
                                    {renderStepIndicator()}
                                    
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <div className="step-content" style={{ flex: 1 }}>
                                            {currentStep === 1 && (
                                                <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                                    <h3 style={{ marginBottom: '10px' }}>Step 1: Your Details</h3>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '10px', color: '#111' }}>Full Name</label>
                                                        <input 
                                                            type="text" 
                                                            required 
                                                            placeholder="John Doe" 
                                                            value={formData.userName}
                                                            onChange={(e) => setFormData({...formData, userName: e.target.value})}
                                                            style={{ 
                                                                width: '100%', 
                                                                padding: '14px 20px', 
                                                                borderRadius: '12px', 
                                                                border: '1px solid #e0e0e0', 
                                                                fontSize: '1rem',
                                                                fontFamily: 'inherit',
                                                                background: '#fcfcfc',
                                                                transition: 'all 0.3s ease',
                                                                outline: 'none'
                                                            }}
                                                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary-green)'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 8px 15px rgba(29, 185, 84, 0.05)'; }}
                                                            onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fcfcfc'; e.target.style.boxShadow = 'none'; }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '10px', color: '#111' }}>Email Address</label>
                                                        <input 
                                                            type="email" 
                                                            required 
                                                            placeholder="john@example.com" 
                                                            value={formData.userEmail}
                                                            onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
                                                            style={{ 
                                                                width: '100%', 
                                                                padding: '14px 20px', 
                                                                borderRadius: '12px', 
                                                                border: '1px solid #e0e0e0', 
                                                                fontSize: '1rem',
                                                                fontFamily: 'inherit',
                                                                background: '#fcfcfc',
                                                                transition: 'all 0.3s ease',
                                                                outline: 'none'
                                                            }}
                                                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary-green)'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 8px 15px rgba(29, 185, 84, 0.05)'; }}
                                                            onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fcfcfc'; e.target.style.boxShadow = 'none'; }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '10px', color: '#111' }}>WhatsApp / Phone</label>
                                                        <input 
                                                            type="tel" 
                                                            required 
                                                            placeholder="+1 234 567 890" 
                                                            value={formData.userPhone}
                                                            onChange={(e) => setFormData({...formData, userPhone: e.target.value})}
                                                            style={{ 
                                                                width: '100%', 
                                                                padding: '14px 20px', 
                                                                borderRadius: '12px', 
                                                                border: '1px solid #e0e0e0', 
                                                                fontSize: '1rem',
                                                                fontFamily: 'inherit',
                                                                background: '#fcfcfc',
                                                                transition: 'all 0.3s ease',
                                                                outline: 'none'
                                                            }}
                                                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary-green)'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 8px 15px rgba(29, 185, 84, 0.05)'; }}
                                                            onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fcfcfc'; e.target.style.boxShadow = 'none'; }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Vehicle Type</label>
                                                        <select 
                                                            value={transport}
                                                            onChange={(e) => setTransport(e.target.value)}
                                                            style={{ 
                                                                width: '100%', 
                                                                padding: '14px 20px', 
                                                                borderRadius: '12px', 
                                                                border: '1px solid #e0e0e0', 
                                                                fontSize: '1rem',
                                                                fontFamily: 'inherit',
                                                                background: '#fcfcfc url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 15px center',
                                                                backgroundSize: '15px',
                                                                appearance: 'none',
                                                                transition: 'all 0.3s ease',
                                                                outline: 'none',
                                                                cursor: 'pointer'
                                                            }}
                                                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary-green)'; e.target.style.background = '#fff url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 15px center'; e.target.style.backgroundSize = '15px'; e.target.style.boxShadow = '0 8px 15px rgba(29, 185, 84, 0.05)'; }}
                                                            onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fcfcfc url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 15px center'; e.target.style.backgroundSize = '15px'; e.target.style.boxShadow = 'none'; }}
                                                        >
                                                            <option value="taxi">Private Car (Standard)</option>
                                                            <option value="van">Private Van (Large Group)</option>
                                                            <option value="tuktuk">Tuk Tuk Adventure</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            )}

                                            {currentStep === 2 && (
                                                <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                                    <h3 style={{ marginBottom: '10px' }}>Step 2: The Plan</h3>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '10px', color: '#111' }}>Approx. Arrival Date</label>
                                                        <input 
                                                            type="date" 
                                                            required 
                                                            value={formData.arrivalDate}
                                                            onChange={(e) => setFormData({...formData, arrivalDate: e.target.value})}
                                                            style={{ 
                                                                width: '100%', 
                                                                padding: '14px 20px', 
                                                                borderRadius: '12px', 
                                                                border: '1px solid #e0e0e0', 
                                                                fontSize: '1rem',
                                                                fontFamily: 'inherit',
                                                                background: '#fcfcfc',
                                                                transition: 'all 0.3s ease',
                                                                outline: 'none',
                                                                cursor: 'text'
                                                            }} 
                                                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary-green)'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 8px 15px rgba(29, 185, 84, 0.05)'; }}
                                                            onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fcfcfc'; e.target.style.boxShadow = 'none'; }}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Joining Point</label>
                                                        <select 
                                                            value={formData.joiningPoint}
                                                            onChange={(e) => setFormData({...formData, joiningPoint: e.target.value})}
                                                            style={{ 
                                                                width: '100%', 
                                                                padding: '14px 20px', 
                                                                borderRadius: '12px', 
                                                                border: '1px solid #e0e0e0', 
                                                                fontSize: '1rem',
                                                                fontFamily: 'inherit',
                                                                background: '#fcfcfc url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 15px center',
                                                                backgroundSize: '15px',
                                                                appearance: 'none',
                                                                transition: 'all 0.3s ease',
                                                                outline: 'none',
                                                                cursor: 'pointer'
                                                            }}
                                                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary-green)'; e.target.style.background = '#fff url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 15px center'; e.target.style.backgroundSize = '15px'; e.target.style.boxShadow = '0 8px 15px rgba(29, 185, 84, 0.05)'; }}
                                                            onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fcfcfc url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 15px center'; e.target.style.backgroundSize = '15px'; e.target.style.boxShadow = 'none'; }}
                                                        >
                                                            <option>Katunayake Airport (CMB)</option>
                                                            <option>Colombo City</option>
                                                            <option>Kandy</option>
                                                            <option>Galle / Hikkaduwa</option>
                                                            <option>Other (Specify in notes)</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '10px', color: '#111' }}>Traveler Birthday</label>
                                                        <input 
                                                            type="date" 
                                                            value={formData.birthday}
                                                            onChange={(e) => setFormData({...formData, birthday: e.target.value})}
                                                            style={{ 
                                                                width: '100%', 
                                                                padding: '14px 20px', 
                                                                borderRadius: '12px', 
                                                                border: '1px solid #e0e0e0', 
                                                                fontSize: '1rem',
                                                                fontFamily: 'inherit',
                                                                background: '#fcfcfc',
                                                                transition: 'all 0.3s ease',
                                                                outline: 'none',
                                                                cursor: 'text'
                                                            }} 
                                                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary-green)'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 8px 15px rgba(29, 185, 84, 0.05)'; }}
                                                            onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fcfcfc'; e.target.style.boxShadow = 'none'; }}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {currentStep === 3 && (
                                                <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                                    <h3 style={{ marginBottom: '10px' }}>Step 3: Your Preferences & Impact</h3>
                                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                                                        <div className="form-group">
                                                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', color: '#444' }}>Number of Travelers</label>
                                                            <select 
                                                                value={formData.travelers}
                                                                onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                                                                style={{ 
                                                                    width: '100%', 
                                                                    padding: '14px 20px', 
                                                                    borderRadius: '12px', 
                                                                    border: '1px solid #e0e0e0', 
                                                                    fontSize: '1rem',
                                                                    fontFamily: 'inherit',
                                                                    background: '#fcfcfc url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 15px center',
                                                                    backgroundSize: '15px',
                                                                    appearance: 'none',
                                                                    transition: 'all 0.3s ease',
                                                                    outline: 'none',
                                                                    cursor: 'pointer'
                                                                }}
                                                                onFocus={(e) => { e.target.style.borderColor = 'var(--primary-green)'; e.target.style.background = '#fff url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 15px center'; e.target.style.backgroundSize = '15px'; e.target.style.boxShadow = '0 8px 15px rgba(29, 185, 84, 0.05)'; }}
                                                                onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fcfcfc url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 15px center'; e.target.style.backgroundSize = '15px'; e.target.style.boxShadow = 'none'; }}
                                                            >
                                                                <option>1 Traveler (Solo)</option>
                                                                <option>2 Travelers (Couple/Friends)</option>
                                                                <option>3-5 Travelers (Small Group)</option>
                                                                <option>6+ Travelers (Large Group)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '10px', color: '#111' }}>Dietary Preferences & Health Notes</label>
                                                        <textarea 
                                                            placeholder="Vegetarian, Allergies, or specific health requirements..." 
                                                            value={formData.notes}
                                                            onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                                            style={{ 
                                                                width: '100%', 
                                                                padding: '18px 20px', 
                                                                borderRadius: '16px', 
                                                                border: '1px solid #e0e0e0', 
                                                                fontSize: '1rem', 
                                                                fontFamily: 'inherit',
                                                                lineHeight: '1.6',
                                                                background: '#fcfcfc',
                                                                color: '#333',
                                                                transition: 'all 0.3s ease',
                                                                minHeight: '120px',
                                                                outline: 'none'
                                                            }}
                                                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary-green)'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 10px 20px rgba(29, 185, 84, 0.05)'; }}
                                                            onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fcfcfc'; e.target.style.boxShadow = 'none'; }}
                                                        ></textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '10px', color: '#111' }}>Anything Else We Should Know?</label>
                                                        <textarea 
                                                            placeholder="Special requests, celebration notes, or any unique details that would make your journey perfect..." 
                                                            value={formData.additionalInfo}
                                                            onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                                                            style={{ 
                                                                width: '100%', 
                                                                padding: '18px 20px', 
                                                                borderRadius: '16px', 
                                                                border: '1px solid #e0e0e0', 
                                                                fontSize: '1rem', 
                                                                fontFamily: 'inherit',
                                                                lineHeight: '1.6',
                                                                background: '#fcfcfc',
                                                                color: '#333',
                                                                transition: 'all 0.3s ease',
                                                                minHeight: '150px',
                                                                outline: 'none'
                                                            }}
                                                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary-green)'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 10px 20px rgba(29, 185, 84, 0.05)'; }}
                                                            onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fcfcfc'; e.target.style.boxShadow = 'none'; }}
                                                        ></textarea>
                                                    </div>

                                                    <div className="form-group" style={{ marginTop: '10px' }}>
                                                        <label style={{ 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            gap: '12px', 
                                                            cursor: 'pointer', 
                                                            padding: '15px', 
                                                            background: 'rgba(29, 185, 84, 0.05)', 
                                                            borderRadius: '12px', 
                                                            border: '1px dashed rgba(29, 185, 84, 0.3)',
                                                            transition: 'all 0.3s ease'
                                                        }} className="impact-checkbox-label">
                                                            <input 
                                                                type="checkbox" 
                                                                checked={formData.wantsVolunteering}
                                                                onChange={(e) => setFormData({...formData, wantsVolunteering: e.target.checked})}
                                                                style={{ width: '20px', height: '20px', accentColor: 'var(--primary-green)', cursor: 'pointer' }}
                                                            />
                                                            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111' }}>
                                                                I would like to continue this journey in an impactful way with volunteering
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="form-footer" style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
                                            {currentStep > 1 && (
                                                <button type="button" onClick={prevStep} className="btn-modern btn-outline" style={{ flex: 1, padding: '14px' }}>
                                                    Back
                                                </button>
                                            )}
                                            <button type="submit" className="btn-modern btn-black" disabled={loading} style={{ flex: 2, padding: '14px' }}>
                                                {loading ? 'Submitting...' : (currentStep === 3 ? 'Send Inquiry Request' : 'Next Step')}
                                            </button>
                                        </div>

                                        <p style={{ fontSize: '0.75rem', color: '#999', textAlign: 'center', marginTop: '20px' }}>
                                            {currentStep === 3 && 'By clicking "Send Inquiry Request", you agree to be contacted by our travel team.'}
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .animate-fade-in {
                    animation: fadeIn 0.4s ease forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .btn-outline {
                    background: transparent;
                    border: 1px solid #ddd;
                    color: #666;
                }
                .btn-outline:hover {
                    background: #f9f9f9;
                    border-color: #ccc;
                }
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
