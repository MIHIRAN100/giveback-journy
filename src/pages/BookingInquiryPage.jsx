import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import { useCurrency } from '../context/CurrencyContext';
import ScrollReveal from '../components/ScrollReveal';
import emailjs from '@emailjs/browser';
import DocuSignModal from '../components/DocuSignModal';


const BookingInquiryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { formatPrice } = useCurrency();
    const initialTransport = searchParams.get('transport') || 'taxi';
    
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const isSending = useRef(false);
    
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
        adults: 1,
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
            const discount = pkg.id === 1 ? 200 : (pkg.id === 2 ? 110 : (pkg.id === 3 ? 200 : (pkg.id === 8 ? 35 : (pkg.id === 9 ? 30 : (pkg.id === 10 ? 90 : (pkg.id === 12 ? 90 : (pkg.id === 13 ? 110 : 300)))))));
            perAdult -= discount;
        } else if (formData.transport === 'van') {
            perAdult += (pkg.id === 12 ? 40 : (pkg.id === 13 ? 65 : 150));
        }

        const total = (formData.adults * perAdult) + (formData.kids * perAdult * 0.5) + (formData.infants * 0);
        return { perAdult, total };
    };

    const priceData = getPriceData();

    const [termsAccepted, setTermsAccepted] = useState(false);
    const [ndaAccepted, setNdaAccepted] = useState(false);
    const [isNdaModalOpen, setIsNdaModalOpen] = useState(false);
    const [ndaDetails, setNdaDetails] = useState({ signed: false, envelopeId: '' });

    const getDerivedJoiningPoint = (tour) => {
        if (!tour) return 'Katunayake Airport (CMB)';
        const tourId = tour.id;
        if (tourId === 1) return 'Katunayake Airport (CMB)';
        if (tourId === 2) return 'Katunayake Airport, Hikkaduwa or Galle';
        if (tourId === 3) return 'Katunayake Airport (CMB) or Kitulgala';
        if (tourId === 4) return 'Kandy';
        if (tourId === 6) return 'Galle Fort';
        if (tourId === 8) return 'Kandy or Pinnawala';
        if (tourId === 9) return 'Kandy';
        if (tourId === 10) return 'Kandy';
        if (tourId === 11) return 'Kandy';
        return 'Katunayake Airport (CMB)';
    };

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

        // Pre-fill derived joining point
        if (pkg) {
            setFormData(prev => ({
                ...prev,
                joiningPoint: getDerivedJoiningPoint(pkg)
            }));
        }
    }, [pkg]);

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
        let cleanEmail = formData.userEmail.trim().toLowerCase();
        if (cleanEmail.endsWith('@gmai.com')) cleanEmail = cleanEmail.replace('@gmai.com', '@gmail.com');
        if (cleanEmail.endsWith('@yaho.com')) cleanEmail = cleanEmail.replace('@yaho.com', '@yahoo.com');

        const SERVICE_ID = "service_95ud991";
        const TEMPLATE_ID_ADMIN = "template_pnw73ln"; 
        const TEMPLATE_ID_USER = "template_xd7jlaq";   
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
            name: formData.userName,
            email: cleanEmail,
            reply_to: cleanEmail, // Used in Admin template
            admin_email: "hello@givebackjourney.com", // Use this in User template for Reply-To
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
            additional_info: `${formData.additionalInfo}\n\n${ndaManifest}`,
            referral: formData.referral,
            
            price: priceData.total,
            booking_id: `GBJ-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
            submitted_at: new Date().toLocaleString(),
            to_email: "hello@givebackjourney.com",
            terms_agreed: "Yes (Verified via Checkout)",
            nda_agreed: ndaDetails.signed ? "Yes (DocuSign Verified)" : "Yes (Agreed via Checkout)"
        };

        try {
            // Send to Admin
            await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParams, PUBLIC_KEY);
            // Send Confirmation to Customer
            await emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, templateParams, PUBLIC_KEY);
            setSubmitted(true);
        } catch (err) {
            console.error('Email error:', err);
            setSubmitted(true); 
        } finally {
            setLoading(false);
            isSending.current = false;
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

                {/* Bring a Friend Discount Notice Card */}
                <ScrollReveal>
                    <div style={{
                        background: 'linear-gradient(135deg, #f4fbf7 0%, #e8f7ee 100%)',
                        border: '1px solid rgba(27, 163, 82, 0.25)',
                        borderRadius: '24px',
                        padding: '24px 30px',
                        marginBottom: '40px',
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'flex-start',
                        boxShadow: '0 10px 30px rgba(27, 163, 82, 0.05)'
                    }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: '#1ba352',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '1.4rem',
                            flexShrink: 0,
                            boxShadow: '0 4px 15px rgba(27, 163, 82, 0.2)'
                        }}>
                            <i className="bi bi-gift-fill"></i>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111e15', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>
                                Bring a Friend Discount
                            </h3>
                            <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: '#2c3e35', margin: '0 0 16px 0', fontWeight: 550 }}>
                                If you bring one additional participant with you, you may be eligible for a special discount. Discount eligibility and the final offer will be decided by our local team based on availability and program conditions.
                            </p>
                            <div style={{ 
                                borderTop: '1px solid rgba(27, 163, 82, 0.15)', 
                                paddingTop: '14px', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                gap: '8px' 
                            }}>
                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                                    Please note:
                                </div>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1ba352', flexShrink: 0 }}></span>
                                    <span style={{ fontSize: '0.85rem', color: '#334139', fontWeight: 600 }}>
                                        This offer is applicable for one additional participant only.
                                    </span>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1ba352', flexShrink: 0 }}></span>
                                    <span style={{ fontSize: '0.85rem', color: '#334139', fontWeight: 600 }}>
                                        Special pricing and conditions for group bookings can be discussed directly with our team.
                                    </span>
                                </div>
                            </div>
                        </div>
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
                            background: 'linear-gradient(135deg, #111e15 0%, #0a0f0b 100%)', 
                            borderRadius: '30px', 
                            boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                            border: 'none',
                            position: 'sticky',
                            top: '120px',
                            color: 'white',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'relative', height: '240px' }}>
                                <img src={pkg.image} alt={pkg.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ 
                                    position: 'absolute', 
                                    inset: 0, 
                                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,15,11,0.9) 100%)' 
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'rgba(10, 15, 11, 0.75)',
                                    backdropFilter: 'blur(12px)',
                                    WebkitBackdropFilter: 'blur(12px)',
                                    padding: '6px 14px',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                                }}>
                                    <span style={{
                                        width: '6px',
                                        height: '6px',
                                        background: '#1ba352',
                                        borderRadius: '50%',
                                        display: 'inline-block',
                                        boxShadow: '0 0 8px #1ba352'
                                    }}></span>
                                    <span style={{
                                        color: '#ffffff',
                                        fontSize: '0.65rem',
                                        fontWeight: 800,
                                        letterSpacing: '1px',
                                        textTransform: 'uppercase'
                                    }}>Signature Tour</span>
                                </div>
                            </div>
                            
                            <div style={{ padding: '30px 24px 24px' }}>
                                <span style={{ 
                                    fontSize: '0.7rem', 
                                    fontWeight: 800, 
                                    color: '#1ba352', 
                                    letterSpacing: '2px', 
                                    textTransform: 'uppercase', 
                                    display: 'block', 
                                    marginBottom: '8px' 
                                }}>Selected Experience</span>
                                <h3 style={{ 
                                    fontSize: '1.5rem', 
                                    fontWeight: 900, 
                                    marginBottom: '20px', 
                                    letterSpacing: '-0.03em',
                                    lineHeight: 1.25,
                                    background: 'linear-gradient(135deg, #ffffff 0%, #a2b0a7 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>{pkg.name}</h3>
                                
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '8px', 
                                        fontSize: '0.8rem', 
                                        background: 'rgba(255,255,255,0.06)', 
                                        padding: '8px 14px', 
                                        borderRadius: '100px',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        <i className="bi bi-calendar3" style={{ color: '#1ba352' }}></i>
                                        <span style={{ fontWeight: 600 }}>{pkg.days}</span>
                                    </div>
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '8px', 
                                        fontSize: '0.8rem', 
                                        background: 'rgba(255,255,255,0.06)', 
                                        padding: '8px 14px', 
                                        borderRadius: '100px',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        <i className="bi bi-people" style={{ color: '#1ba352' }}></i>
                                        <span style={{ fontWeight: 600 }}>{formData.travelerType}</span>
                                    </div>
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '8px', 
                                        fontSize: '0.8rem', 
                                        background: 'rgba(255,255,255,0.06)', 
                                        padding: '8px 14px', 
                                        borderRadius: '100px',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        <i className="bi bi-compass" style={{ color: '#1ba352' }}></i>
                                        <span style={{ fontWeight: 600, textTransform: 'capitalize' }}>
                                            {formData.transport === 'taxi' ? 'SUV Car' : (formData.transport === 'van' ? 'Private Van' : 'Tuk Tuk')}
                                        </span>
                                    </div>
                                </div>

                                <div style={{ 
                                    background: 'rgba(255, 255, 255, 0.03)', 
                                    borderRadius: '20px', 
                                    padding: '24px', 
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    marginBottom: '25px'
                                }}>
                                    <span style={{ 
                                        fontSize: '0.7rem', 
                                        fontWeight: 800, 
                                        textTransform: 'uppercase', 
                                        color: '#888', 
                                        letterSpacing: '1px', 
                                        display: 'block',
                                        marginBottom: '15px' 
                                    }}>Estimated Investment</span>
                                    
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ccc' }}>
                                            <span>{formData.adults} {formData.adults === 1 ? 'Adult' : 'Adults'}</span>
                                            <span style={{ fontWeight: 600 }}>{formatPrice(formData.adults * priceData.perAdult)}</span>
                                        </div>
                                        {formData.kids > 0 && (
                                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ccc' }}>
                                                <span>{formData.kids} Kids (50% Off)</span>
                                                <span style={{ fontWeight: 600 }}>{formatPrice(formData.kids * priceData.perAdult * 0.5)}</span>
                                            </div>
                                        )}
                                        {formData.infants > 0 && (
                                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#1ba352' }}>
                                                <span>{formData.infants} Infants (Free)</span>
                                                <span style={{ fontWeight: 700 }}>Free</span>
                                            </div>
                                        )}
                                        
                                        <div style={{ 
                                            margin: '15px 0 10px', 
                                            borderTop: '1px dashed rgba(255,255,255,0.1)' 
                                        }}></div>
                                        
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Total Price</span>
                                            <span style={{ 
                                                fontWeight: 900, 
                                                color: '#1ba352', 
                                                fontSize: '1.6rem',
                                                textShadow: '0 0 20px rgba(27, 163, 82, 0.25)' 
                                            }}>{formatPrice(priceData.total)}</span>
                                        </div>
                                    </div>
                                </div>

                                {formData.wantsVolunteering && (
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '12px', 
                                        background: 'rgba(27, 163, 82, 0.08)', 
                                        padding: '16px 20px', 
                                        borderRadius: '16px',
                                        border: '1px solid rgba(27, 163, 82, 0.15)',
                                        marginBottom: '25px',
                                        animation: 'pulseGlow 2s infinite ease-in-out'
                                    }}>
                                        <i className="bi bi-heart-fill" style={{ color: '#1ba352', fontSize: '1.2rem' }}></i>
                                        <div>
                                            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#fff' }}>Social Impact Included</div>
                                            <div style={{ fontSize: '0.7rem', color: '#aaa', marginTop: '2px' }}>A portion of your booking supports local community projects.</div>
                                        </div>
                                    </div>
                                )}

                                <div style={{ 
                                    borderTop: '1px solid rgba(255,255,255,0.08)', 
                                    paddingTop: '20px', 
                                    fontSize: '0.75rem', 
                                    color: '#888', 
                                    lineHeight: 1.6 
                                }}>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
                                        <i className="bi bi-shield-check" style={{ color: '#1ba352', fontSize: '0.9rem' }}></i>
                                        <span>Fully customizable. Our travel designers will tailor this route to your exact specifications.</span>
                                    </div>
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
                                                                        border: `2px solid ${formData.travelerType === type ? '#1ba352' : '#727272'}`,
                                                                        background: formData.travelerType === type ? 'rgba(27, 163, 82, 0.05)' : 'white',
                                                                        cursor: 'pointer',
                                                                        textAlign: 'center',
                                                                        fontSize: '0.85rem',
                                                                        fontWeight: 700,
                                                                        color: formData.travelerType === type ? '#1ba352' : '#121212',
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
                                                            <label className="modern-label">Flight Number (Optional)</label>
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
                                                        <input 
                                                            type="text" required
                                                            value={formData.joiningPoint}
                                                            onChange={(e) => setFormData({...formData, joiningPoint: e.target.value})}
                                                            className="modern-input"
                                                            placeholder="e.g. Katunayake Airport, Hotel name..."
                                                        />
                                                        <span style={{ fontSize: '0.75rem', color: '#666', marginTop: '6px', display: 'block' }}>
                                                            Derived from this journey's official start point. Feel free to customize your exact hotel or pickup address.
                                                        </span>
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
                                                                        border: `2px solid ${formData.transport === opt.id ? '#1ba352' : '#727272'}`,
                                                                        background: formData.transport === opt.id ? 'rgba(27, 163, 82, 0.05)' : 'white',
                                                                        cursor: 'pointer',
                                                                        textAlign: 'center',
                                                                        transition: 'all 0.2s ease'
                                                                    }}
                                                                >
                                                                    {opt.id === 'tuktuk' ? (
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto 5px auto', color: formData.transport === opt.id ? '#1ba352' : '#121212' }}>
                                                                            <path d="M6 7c0-2 2-3 6-3s6 1 6 3v4H6V7z" />
                                                                            <rect x="7" y="7" width="10" height="4" rx="0.5" />
                                                                            <path d="M5 11h14l-2 7H7l-2-7z" />
                                                                            <rect x="11.2" y="18" width="1.6" height="4" rx="0.5" fill="currentColor" stroke="none" />
                                                                            <rect x="4.5" y="17" width="1.6" height="4" rx="0.5" fill="currentColor" stroke="none" />
                                                                            <rect x="17.9" y="17" width="1.6" height="4" rx="0.5" fill="currentColor" stroke="none" />
                                                                            <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
                                                                        </svg>
                                                                    ) : (
                                                                        <i className={`bi ${opt.icon}`} style={{ display: 'block', fontSize: '1.2rem', marginBottom: '5px', color: formData.transport === opt.id ? '#1ba352' : '#121212' }}></i>
                                                                    )}
                                                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: formData.transport === opt.id ? '#1ba352' : '#121212' }}>{opt.label}</span>
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
                                                                        style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid #1ba352', background: 'white', color: '#1ba352', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700 }}
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
                                                                style={{ width: '20px', height: '20px', accentColor: '#1ba352' }}
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

                                                    <div className="ds-form-agreements" style={{ margin: '25px 0', display: 'flex', flexDirection: 'column', gap: '15px', background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
                                                        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                                                            <input 
                                                                type="checkbox" 
                                                                checked={termsAccepted} 
                                                                onChange={(e) => setTermsAccepted(e.target.checked)} 
                                                                required 
                                                                style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: '#1ba352', cursor: 'pointer' }} 
                                                            />
                                                            <span>I agree to the <Link to="/terms-and-conditions" target="_blank" style={{ color: '#1ba352', textDecoration: 'underline' }}>Terms & Conditions</Link> and <Link to="/privacy-policy" target="_blank" style={{ color: '#1ba352', textDecoration: 'underline' }}>Privacy Policy</Link>. *</span>
                                                        </label>

                                                        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                                                            <input 
                                                                type="checkbox" 
                                                                checked={ndaAccepted} 
                                                                onChange={(e) => setNdaAccepted(e.target.checked)} 
                                                                disabled={ndaDetails.signed} 
                                                                required 
                                                                style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: '#1ba352', cursor: 'pointer' }} 
                                                            />
                                                            {ndaDetails.signed ? (
                                                                <span style={{ color: '#168a45', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                    <i className="fa-solid fa-circle-check"></i> Verified DocuSign Signature Applied <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', opacity: 0.8 }}>({ndaDetails.envelopeId.slice(0, 11)}...)</span>
                                                                </span>
                                                            ) : (
                                                                <span>I agree to the <Link to="/nda" target="_blank" onClick={(e) => { e.preventDefault(); setIsNdaModalOpen(true); }} style={{ color: '#1ba352', textDecoration: 'underline' }}>Non-Disclosure Agreement (NDA)</Link> (DocuSign Required). *</span>
                                                            )}
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

            <DocuSignModal 
                isOpen={isNdaModalOpen} 
                onClose={() => setIsNdaModalOpen(false)} 
                onSignComplete={handleNdaSignComplete} 
                defaultName={formData.userName}
                defaultEmail={formData.userEmail}
            />

            <style dangerouslySetInnerHTML={{ __html: `
                .animate-fade-in {
                    animation: fadeIn 0.4s ease forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.95; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.01); box-shadow: 0 0 25px rgba(27, 163, 82, 0.18); }
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
                    border: 2px solid #1ba352;
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
                    background: #1ba352;
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
