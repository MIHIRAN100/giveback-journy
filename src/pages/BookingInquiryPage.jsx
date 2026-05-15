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
    const [currentStep, setCurrentStep] = useState(1);
    
    const [formData, setFormData] = useState({
        // Step 1: The Traveler
        travelerType: 'Couple / Friends',
        userName: '',
        userEmail: '',
        userPhone: '',
        emergencyContact: '',
        
        // Step 2: Logistics & Timing
        arrivalDate: '',
        flightNumber: '',
        joiningPoint: 'Katunayake Airport (CMB)',
        joiningTime: '',
        transport: initialTransport,
        
        // Step 3: Group & Stay
        adults: 2,
        kids: 0, // 5-10 years (50% off)
        infants: 0, // 1-5 years (Free)
        roomPreference: 'Double Room',
        
        // Step 4: Requirements & Impact
        dietary: '',
        fitnessLevel: 'Moderate',
        specialOccasion: '',
        wantsVolunteering: false,
        additionalInfo: '',
        referral: ''
    });
    
    const pkg = tourPackages.find(p => p.id === parseInt(id));

    const getPriceData = () => {
        if (!pkg) return { perAdult: 0, total: 0 };
        const basePriceVal = parseInt(pkg.price.replace('$', '').replace(',', ''));
        let currentBase = basePriceVal;
        if (pkg.id === 1) currentBase = 840;
        if (pkg.id === 2) currentBase = 600;
        
        let perAdult = currentBase;
        if (formData.transport === 'tuktuk') {
            const discount = pkg.id === 1 ? 200 : (pkg.id === 2 ? 110 : 300);
            perAdult -= discount;
        } else if (formData.transport === 'van') {
            perAdult += 150;
        }

        const total = (formData.adults * perAdult) + (formData.kids * perAdult * 0.5) + (formData.infants * 0);
        return { perAdult, total };
    };

    const priceData = getPriceData();

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
        if (currentStep < 4) {
            nextStep();
            return;
        }
        
        setLoading(true);

        const SERVICE_ID = "service_95ud991";
        const TEMPLATE_ID_ADMIN = "template_84lczai"; 
        const TEMPLATE_ID_USER = "template_j0pdjea";   
        const PUBLIC_KEY = "Z-S0sHMSNtxZTuFwF";

        const templateParams = {
            name: formData.userName,
            email: formData.userEmail,
            phone: formData.userPhone,
            emergency_contact: formData.emergencyContact,
            traveler_type: formData.travelerType,
            
            tour_package: pkg.name,
            booking_date: formData.arrivalDate,
            flight_number: formData.flightNumber,
            joining_point: formData.joiningPoint,
            joining_time: formData.joiningTime,
            transport: formData.transport,
            
            adults: formData.adults,
            children: formData.children,
            children_ages: formData.childrenAges,
            room_preference: formData.roomPreference,
            
            dietary: formData.dietary,
            fitness_level: formData.fitnessLevel,
            special_occasion: formData.specialOccasion,
            wants_volunteering: formData.wantsVolunteering ? 'Yes' : 'No',
            additional_info: formData.additionalInfo,
            referral: formData.referral,
            
            price: priceData.total,
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
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', justifyContent: 'center' }}>
            {[1, 2, 3, 4].map(step => (
                <div 
                    key={step} 
                    className={`step-dot ${currentStep === step ? 'active' : ''}`}
                />
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
                        }}>Very Detailed Booking Inquiry</span>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111' }}>Craft Your Perfect Journey</h1>
                    </div>
                </ScrollReveal>

                <div className="inquiry-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1.8fr', 
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
                            border: '1px solid #eee',
                            position: 'sticky',
                            top: '120px'
                        }}>
                            <img src={pkg.image} alt={pkg.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '30px' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>{pkg.name}</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#666' }}>
                                        <i className="bi bi-calendar3" style={{ color: 'var(--primary-green)' }}></i>
                                        <span>{pkg.days}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#666' }}>
                                        <i className="bi bi-person-check" style={{ color: 'var(--primary-green)' }}></i>
                                        <span>{formData.travelerType}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#666' }}>
                                        <i className="bi bi-tag" style={{ color: 'var(--primary-green)' }}></i>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontWeight: 700, color: 'var(--primary-green)', fontSize: '1.2rem' }}>${priceData.total}</span>
                                            <span style={{ fontSize: '0.75rem' }}>Total Estimated Price</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style={{ marginTop: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '12px', fontSize: '0.8rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                        <span>{formData.adults} Adults</span>
                                        <span>${formData.adults * priceData.perAdult}</span>
                                    </div>
                                    {formData.kids > 0 && (
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                            <span>{formData.kids} Kids (50% Off)</span>
                                            <span>${formData.kids * priceData.perAdult * 0.5}</span>
                                        </div>
                                    )}
                                    {formData.infants > 0 && (
                                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--primary-green)' }}>
                                            <span>{formData.infants} Infants (Free)</span>
                                            <span>$0</span>
                                        </div>
                                    )}
                                </div>
                                <div style={{ 
                                    marginTop: '25px', 
                                    paddingTop: '20px', 
                                    borderTop: '1px solid #eee',
                                    fontSize: '0.8rem',
                                    color: '#888',
                                    lineHeight: 1.6
                                }}>
                                    <p><i className="bi bi-info-circle" style={{ marginRight: '5px' }}></i> This detailed form helps us tailor every aspect of your trip, from pick-up times to room preferences.</p>
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
                            minHeight: '600px',
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
                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Request Received!</h2>
                                    <p style={{ color: '#666', lineHeight: 1.6 }}>Thank you for providing such detailed information. Our travel experts are now crafting your perfect {pkg.name} itinerary. We'll be in touch via WhatsApp or Email within 24 hours.</p>
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
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                                        <div style={{ width: '40px', height: '40px', background: '#121212', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                            <i className="bi bi-person"></i>
                                                        </div>
                                                        <h3 style={{ margin: 0, fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em' }}>Traveler Profile</h3>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="modern-label">Who are you traveling as?</label>
                                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                                                            {['Solo Traveler', 'Couple / Friends', 'Family', 'Small Group', 'Large Group'].map(type => (
                                                                <div 
                                                                    key={type}
                                                                    onClick={() => setFormData({...formData, travelerType: type})}
                                                                    style={{
                                                                        padding: '14px',
                                                                        borderRadius: '8px',
                                                                        border: `2px solid ${formData.travelerType === type ? '#1DB954' : '#727272'}`,
                                                                        background: formData.travelerType === type ? 'rgba(29, 185, 84, 0.05)' : 'white',
                                                                        cursor: 'pointer',
                                                                        textAlign: 'center',
                                                                        fontSize: '0.85rem',
                                                                        fontWeight: 700,
                                                                        color: formData.travelerType === type ? '#1DB954' : '#121212',
                                                                        transition: 'all 0.2s ease'
                                                                    }}
                                                                >
                                                                    {type}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="modern-label">Lead Traveler Full Name</label>
                                                        <input 
                                                            type="text" required placeholder="Enter your full name" 
                                                            value={formData.userName}
                                                            onChange={(e) => setFormData({...formData, userName: e.target.value})}
                                                            className="modern-input"
                                                        />
                                                    </div>

                                                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                                        <div className="form-group">
                                                            <label className="modern-label">Email Address</label>
                                                            <input 
                                                                type="email" required placeholder="email@example.com" 
                                                                value={formData.userEmail}
                                                                onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
                                                                className="modern-input"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="modern-label">WhatsApp / Phone</label>
                                                            <input 
                                                                type="tel" required placeholder="+1 234 567 890" 
                                                                value={formData.userPhone}
                                                                onChange={(e) => setFormData({...formData, userPhone: e.target.value})}
                                                                className="modern-input"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="modern-label">Emergency Contact Info</label>
                                                        <input 
                                                            type="text" placeholder="Name & Number (Relationship)" 
                                                            value={formData.emergencyContact}
                                                            onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                                                            className="modern-input"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {currentStep === 2 && (
                                                <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                                        <div style={{ width: '40px', height: '40px', background: '#121212', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                            <i className="bi bi-geo-alt"></i>
                                                        </div>
                                                        <h3 style={{ margin: 0, fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em' }}>Logistics & Timing</h3>
                                                    </div>

                                                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                                        <div className="form-group">
                                                            <label className="modern-label">Arrival Date</label>
                                                            <input 
                                                                type="date" required 
                                                                value={formData.arrivalDate}
                                                                onChange={(e) => setFormData({...formData, arrivalDate: e.target.value})}
                                                                className="modern-input"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="modern-label">Flight Number</label>
                                                            <input 
                                                                type="text" placeholder="e.g. EK650" 
                                                                value={formData.flightNumber}
                                                                onChange={(e) => setFormData({...formData, flightNumber: e.target.value})}
                                                                className="modern-input"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="modern-label">Where should we pick you up?</label>
                                                        <select 
                                                            value={formData.joiningPoint}
                                                            onChange={(e) => setFormData({...formData, joiningPoint: e.target.value})}
                                                            className="modern-select"
                                                        >
                                                            <option>Katunayake Airport (CMB)</option>
                                                            <option>Negombo Hotel</option>
                                                            <option>Colombo Hotel</option>
                                                            <option>Other (Please specify in notes)</option>
                                                        </select>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="modern-label">Transport Preference</label>
                                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                                            {[
                                                                { id: 'taxi', label: 'Private Car / SUV', icon: 'bi-car-front' },
                                                                { id: 'van', label: 'Private Van', icon: 'bi-bus-front' },
                                                                { id: 'tuktuk', label: 'Tuk Tuk', icon: 'bi-bicycle' }
                                                            ].map(opt => (
                                                                <div 
                                                                    key={opt.id}
                                                                    onClick={() => setFormData({...formData, transport: opt.id})}
                                                                    style={{
                                                                        padding: '15px 10px',
                                                                        borderRadius: '8px',
                                                                        border: `2px solid ${formData.transport === opt.id ? '#1DB954' : '#727272'}`,
                                                                        background: formData.transport === opt.id ? 'rgba(29, 185, 84, 0.05)' : 'white',
                                                                        cursor: 'pointer',
                                                                        textAlign: 'center',
                                                                        transition: 'all 0.2s ease'
                                                                    }}
                                                                >
                                                                    <i className={`bi ${opt.icon}`} style={{ display: 'block', fontSize: '1.2rem', marginBottom: '5px', color: formData.transport === opt.id ? '#1DB954' : '#121212' }}></i>
                                                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: formData.transport === opt.id ? '#1DB954' : '#121212' }}>{opt.label}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {currentStep === 3 && (
                                                <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                                        <div style={{ width: '40px', height: '40px', background: '#121212', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                            <i className="bi bi-people"></i>
                                                        </div>
                                                        <h3 style={{ margin: 0, fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em' }}>Group & Stay</h3>
                                                    </div>

                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', background: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #727272' }}>
                                                        {[
                                                            { id: 'adults', label: 'Adults', sub: '10 years and above', count: formData.adults, min: 1 },
                                                            { id: 'kids', label: 'Children', sub: '5 - 10 years (50% Off)', count: formData.kids, min: 0 },
                                                            { id: 'infants', label: 'Infants', sub: '1 - 5 years (Free)', count: formData.infants, min: 0 }
                                                        ].map(item => (
                                                            <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                <div>
                                                                    <div style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em' }}>{item.label}</div>
                                                                    <div style={{ fontSize: '0.75rem', color: '#727272', fontWeight: 700 }}>{item.sub}</div>
                                                                </div>
                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                                                                    <button 
                                                                        type="button"
                                                                        onClick={() => setFormData({...formData, [item.id]: Math.max(item.min, item.count - 1)})}
                                                                        style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #727272', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700 }}
                                                                    >-</button>
                                                                    <span style={{ fontWeight: 800, minWidth: '24px', textAlign: 'center', fontSize: '1.1rem' }}>{item.count}</span>
                                                                    <button 
                                                                        type="button"
                                                                        onClick={() => setFormData({...formData, [item.id]: item.count + 1})}
                                                                        style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid #1DB954', background: 'white', color: '#1DB954', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700 }}
                                                                    >+</button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="modern-label">Room Preference</label>
                                                        <select 
                                                            value={formData.roomPreference}
                                                            onChange={(e) => setFormData({...formData, roomPreference: e.target.value})}
                                                            className="modern-select"
                                                        >
                                                            <option>Double Room</option>
                                                            <option>Twin Room (2 Single Beds)</option>
                                                            <option>Single Room (Solo)</option>
                                                            <option>Triple Room</option>
                                                            <option>Family Room (Large)</option>
                                                            <option>Suite / Premium</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            )}

                                            {currentStep === 4 && (
                                                <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                                        <div style={{ width: '40px', height: '40px', background: '#121212', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                                            <i className="bi bi-heart"></i>
                                                        </div>
                                                        <h3 style={{ margin: 0, fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em' }}>Requirements & Impact</h3>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="modern-label">Dietary & Health Notes</label>
                                                        <textarea 
                                                            placeholder="Vegetarian, Allergies, or specific health requirements..." 
                                                            value={formData.dietary}
                                                            onChange={(e) => setFormData({...formData, dietary: e.target.value})}
                                                            className="modern-textarea"
                                                            style={{ minHeight: '80px' }}
                                                        ></textarea>
                                                    </div>

                                                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                                        <div className="form-group">
                                                            <label className="modern-label">Physical Fitness Level</label>
                                                            <select 
                                                                value={formData.fitnessLevel}
                                                                onChange={(e) => setFormData({...formData, fitnessLevel: e.target.value})}
                                                                className="modern-select"
                                                            >
                                                                <option>Low (Easy walks)</option>
                                                                <option>Moderate (Standard hikes)</option>
                                                                <option>High (Challenging treks)</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="modern-label">Special Occasion?</label>
                                                            <input 
                                                                type="text" placeholder="Honeymoon, Birthday..." 
                                                                value={formData.specialOccasion}
                                                                onChange={(e) => setFormData({...formData, specialOccasion: e.target.value})}
                                                                className="modern-input"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: '16px', border: '1px solid #727272', borderRadius: '8px' }}>
                                                            <input 
                                                                type="checkbox" checked={formData.wantsVolunteering}
                                                                onChange={(e) => setFormData({...formData, wantsVolunteering: e.target.checked})}
                                                                style={{ width: '20px', height: '20px', accentColor: '#1DB954' }}
                                                            />
                                                            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#121212' }}>
                                                                I'm interested in impactful volunteering activities during my journey.
                                                            </span>
                                                        </label>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="modern-label">Additional Information</label>
                                                        <textarea 
                                                            placeholder="Anything else we should know to make your trip perfect..." 
                                                            value={formData.additionalInfo}
                                                            onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                                                            className="modern-textarea"
                                                            style={{ minHeight: '100px' }}
                                                        ></textarea>
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
                                                {loading ? 'Submitting...' : (currentStep === 4 ? 'Confirm & Send Detailed Inquiry' : 'Continue to Next Step')}
                                            </button>
                                        </div>
                                        <p style={{ fontSize: '0.75rem', color: '#999', textAlign: 'center', marginTop: '20px' }}>
                                            {currentStep === 4 && 'By clicking "Confirm & Send Detailed Inquiry", you agree to be contacted by our travel team.'}
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
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Spotify-inspired Form Styles */
                .modern-input, .modern-select, .modern-textarea {
                    width: 100%;
                    padding: 14px 18px;
                    background: #ffffff;
                    border: 1px solid #727272;
                    border-radius: 4px;
                    font-size: 1rem;
                    color: #121212;
                    transition: all 0.2s ease;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .modern-input:hover, .modern-select:hover, .modern-textarea:hover {
                    border-color: #111;
                }

                .modern-input:focus, .modern-select:focus, .modern-textarea:focus {
                    outline: none;
                    border: 2px solid #1DB954;
                    padding: 13px 17px; /* Adjust for border width change */
                }

                .modern-label {
                    display: block;
                    font-size: 0.875rem;
                    font-weight: 700;
                    margin-bottom: 8px;
                    color: #121212;
                    letter-spacing: -0.02em;
                }

                .btn-modern {
                    border-radius: 500px; /* Spotify Pill Shape */
                    font-weight: 700;
                    text-transform: none;
                    letter-spacing: 0.5px;
                    transition: transform 0.1s ease, background 0.2s ease;
                    cursor: pointer;
                    border: none;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .btn-modern:active {
                    transform: scale(0.95);
                }

                .btn-black {
                    background: #121212;
                    color: white;
                }

                .btn-black:hover {
                    background: #282828;
                }

                .btn-outline {
                    background: transparent;
                    border: 1px solid #727272 !important;
                    color: #121212;
                }

                .btn-outline:hover {
                    border-color: #121212 !important;
                    background: #f6f6f6;
                }

                .btn-modern:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                /* Step Indicators */
                .step-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #b3b3b3;
                    transition: all 0.3s ease;
                }
                .step-dot.active {
                    background: #1DB954;
                    transform: scale(1.3);
                }

                @media (max-width: 768px) {
                    .inquiry-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                    .inquiry-page h1 {
                        font-size: 2.2rem !important;
                    }
                    .modern-input, .modern-select, .modern-textarea {
                        font-size: 16px; /* Prevent zoom on iOS */
                    }
                }
            `}} />
        </div>
    );
};

export default BookingInquiryPage;
