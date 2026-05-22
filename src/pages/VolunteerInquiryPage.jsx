import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import emailjs from '@emailjs/browser';
import DocuSignModal from '../components/DocuSignModal';
import { useCurrency } from '../context/CurrencyContext';
import { getProgramPriceDetails } from './VolunteerPage';

const VolunteerInquiryPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { formatPrice } = useCurrency();
    const initialProgram = searchParams.get('program') || 'Short-Term Impact (1 Week)';
    const initialSkills = searchParams.get('skills') || '';
    
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 6;
    const isSending = useRef(false);
    
    const [formData, setFormData] = useState({
        // Step 1: Personal
        userName: '',
        userEmail: '',
        userPhone: '',
        userCountry: '',
        userGender: 'Select Gender',
        userAge: '',
        userOccupation: '',
        
        // Step 2: Program
        program: initialProgram,
        volunteerProject: initialProgram || '',
        startDate: '',
        duration: (initialProgram === 'Breathe Sri Lanka') ? '27 Days (Full Program)' : (initialProgram === 'Ceylon Skill Odyssey') ? '7 Days (Full Program)' : '1 Week',
        projectFocus: '',
        arrivalMethod: 'Flight',
        flightNumber: '',
        arrivalTime: '',
        airline: '',
        flightNotes: '',
        overlandNotes: '',
        
        // Step 3: Emergency
        emergencyName: '',
        emergencyRelation: '',
        emergencyPhone: '',
        
        // Step 4: Skills & Motivation
        skills: initialSkills,
        motivation: '',
        referral: 'Social Media',
        
        // Step 5: Declarations
        hasBackgroundCheck: false,
        hasInsurance: false,
        dietary: '',
        medicalNotes: ''
    });

    const [termsAccepted, setTermsAccepted] = useState(false);
    const [ndaAccepted, setNdaAccepted] = useState(false);
    const [isNdaModalOpen, setIsNdaModalOpen] = useState(false);
    const [ndaDetails, setNdaDetails] = useState({ signed: false, envelopeId: '' });
    const [durationCategory, setDurationCategory] = useState('weeks');
    const [mixMonths, setMixMonths] = useState('3 Months');
    const [mixWeeks, setMixWeeks] = useState('2 Weeks');

    useEffect(() => {
        if (durationCategory === 'mix') {
            setFormData(prev => ({
                ...prev,
                duration: `${mixMonths}, ${mixWeeks}`
            }));
        }
    }, [durationCategory, mixMonths, mixWeeks]);

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


    const nextStep = () => {
        if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
    };
    const prevStep = () => setCurrentStep(prev => prev - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (currentStep < totalSteps) {
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

        // Auto-fix typos
        let cleanEmail = formData.userEmail.trim().toLowerCase();
        if (cleanEmail.endsWith('@gmai.com')) cleanEmail = cleanEmail.replace('@gmai.com', '@gmail.com');

        const SERVICE_ID = "service_95ud991";
        const TEMPLATE_ID_ADMIN = "template_isr2x0x"; 
        const TEMPLATE_ID_USER = "template_88vx3ml";   
        const PUBLIC_KEY = "Z-S0sHMSNtxZTuFwF";

        const ndaSignedName = localStorage.getItem('nda_signed_name') || '';
        const ndaSignedDate = localStorage.getItem('nda_signed_date') || '';
        const ndaEnvelopeId = localStorage.getItem('nda_docusign_envelope') || '';
        
        const ndaManifest = `
                --- MUTUAL NDA AGREEMENT ---
                Status: SIGNED & SECURE
                Signer Legal Name: ${ndaSignedName}
                Signature Timestamp: ${ndaSignedDate}
                DocuSign Envelope ID: ${ndaEnvelopeId}
        `;

        const templateParams = {
            name: formData.userName,
            email: cleanEmail,
            reply_to: cleanEmail,
            admin_email: "hello@givebackjourney.com",
            phone: formData.userPhone,
            tour_package: `VOLUNTEER APPLICATION: ${formData.program}`,
            booking_date: `${formData.startDate} (${formData.arrivalMethod === 'Flight' ? `Flight: ${formData.flightNumber}${formData.airline ? ` (${formData.airline})` : ''}` : `Overland${formData.overlandNotes ? ` - Notes: ${formData.overlandNotes}` : ''}`} at ${formData.arrivalTime})`,
            submitted_at: new Date().toLocaleString(),
            to_email: "hello@givebackjourney.com",

            // Detailed granular parameters
            user_name: formData.userName,
            user_email: cleanEmail,
            user_phone: formData.userPhone,
            user_country: formData.userCountry,
            user_gender: formData.userGender,
            user_age: formData.userAge,
            user_occupation: formData.userOccupation,
            
            program_project: formData.volunteerProject,
            program_duration: formData.duration,
            program_fee: priceDetails ? formatPrice(priceDetails.total) : '—',
            
            arrival_date: formData.startDate,
            arrival_method: formData.arrivalMethod,
            arrival_time: formData.arrivalTime,
            flight_airline: formData.airline || 'N/A',
            flight_number: formData.flightNumber || 'N/A',
            flight_notes: formData.flightNotes || 'N/A',
            overland_notes: formData.overlandNotes || 'N/A',
            
            emergency_name: formData.emergencyName,
            emergency_relation: formData.emergencyRelation,
            emergency_phone: formData.emergencyPhone,
            
            motivation: formData.motivation,
            skills: formData.skills || 'N/A',
            referral: formData.referral,
            
            background_check: formData.hasBackgroundCheck ? 'YES' : 'NO',
            travel_insurance: formData.hasInsurance ? 'YES' : 'NO',
            dietary: formData.dietary || 'None',
            medical_notes: formData.medicalNotes || 'None',
            
            nda_signed_name: ndaSignedName || 'N/A',
            nda_signed_date: ndaSignedDate || 'N/A',
            nda_envelope_id: ndaEnvelopeId || 'N/A',

            additional_info: `
                --- PERSONAL ---
                Country: ${formData.userCountry}
                Gender: ${formData.userGender}
                Age: ${formData.userAge}
                Occupation: ${formData.userOccupation}

                --- PROGRAM ---
                Project: ${formData.projectFocus}
                Duration: ${formData.duration}
                Arrival Date: ${formData.startDate}
                Arrival Method: ${formData.arrivalMethod}
                Arrival Time: ${formData.arrivalTime}
                ${formData.arrivalMethod === 'Flight' ? `Airline: ${formData.airline || 'N/A'}
                Flight Number: ${formData.flightNumber || 'N/A'}
                Flight Details: ${formData.flightNotes || 'None'}` : `Overland Transfer${formData.overlandNotes ? ` (Notes: ${formData.overlandNotes})` : ''}`}

                --- EMERGENCY ---
                Contact: ${formData.emergencyName} (${formData.emergencyRelation})
                Phone: ${formData.emergencyPhone}

                --- EXPERIENCE ---
                Motivation: ${formData.motivation}
                Skills: ${formData.skills}
                Referral: ${formData.referral}

                --- DECLARATIONS ---
                Background Check: ${formData.hasBackgroundCheck ? 'YES' : 'NO'}
                Insurance: ${formData.hasInsurance ? 'YES' : 'NO'}
                Dietary: ${formData.dietary}
                Medical: ${formData.medicalNotes}
                ${ndaManifest}
            `
        };

        try {
            await Promise.all([
                emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParams, PUBLIC_KEY),
                emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, templateParams, PUBLIC_KEY)
            ]);
            setSubmitted(true);
        } catch (err) {
            console.error('Email error:', err);
            setSubmitted(true); 
        } finally {
            setLoading(false);
            isSending.current = false;
        }
    };

    // Map volunteerProject to programWeeklyRates ID
    const projectToRateKey = {
        'Breathe Sri Lanka': 'real-sri-lanka-experience',
        'Teaching Volunteer Program': 'sri-lanka-childcare',
        'Special Needs Support': 'special-needs-support',
        'Construction & Renovation': 'village-school-renovation',
        'Sri Lanka Dog Volunteers': 'sri-lanka-dog-rescue',
        'Body & Mind Wellness Week': 'zen-and-temple-yoga',
        'Medical Volunteer': 'medical-volunteer',
        'Ceylon Skill Odyssey': 'ceylon-skill-odyssey'
    };

    const getDurationWeeks = (durationStr) => {
        if (!durationStr) return 0;
        if (durationStr.includes('27 Days')) return 4;
        if (durationStr.includes('7 Days')) return 1;
        
        let totalWeeks = 0;
        
        // Match months
        const monthMatch = durationStr.match(/(\d+)\s*Month/i);
        if (monthMatch) {
            totalWeeks += parseInt(monthMatch[1], 10) * 4;
        }
        
        // Match weeks
        const weekMatch = durationStr.match(/(\d+)\s*Week/i);
        if (weekMatch) {
            totalWeeks += parseInt(weekMatch[1], 10);
        } else if (!monthMatch) {
            // Fallback to match just a number if no "Month" or "Week" label matches directly
            const simpleMatch = durationStr.match(/^(\d+)/);
            if (simpleMatch) {
                totalWeeks = parseInt(simpleMatch[1], 10);
            }
        }
        
        return totalWeeks;
    };

    const rateKey = projectToRateKey[formData.volunteerProject];
    const weeks = getDurationWeeks(formData.duration);
    const priceDetails = rateKey ? getProgramPriceDetails(rateKey, weeks) : null;

    const renderProgressBar = () => (
        <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.8rem', fontWeight: 700, color: '#666' }}>
                <span>Application Progress</span>
                <span>Step {currentStep} of {totalSteps}</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ 
                    width: `${(currentStep / totalSteps) * 100}%`, 
                    height: '100%', 
                    background: 'var(--primary-green)', 
                    transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
                }} />
            </div>
        </div>
    );

    const stepTitles = [
        "Personal Information",
        "Program Details",
        "Arrival Details",
        "Emergency Contact",
        "Skills & Motivation",
        "Declarations & Health"
    ];

    return (
        <div className="volunteer-inquiry-page" style={{ background: '#fcfcfc', minHeight: '100vh', padding: '120px 20px 80px' }}>
            <div className="container" style={{ maxWidth: submitted ? '600px' : '1200px', margin: '0 auto', transition: 'max-width 0.3s ease' }}>
                <ScrollReveal>
                    <div style={{ textAlign: 'center', marginBottom: submitted ? '30px' : '50px' }}>
                        <span style={{ 
                            fontSize: '0.75rem', 
                            textTransform: 'uppercase', 
                            letterSpacing: '2px', 
                            fontWeight: 800, 
                            color: 'var(--primary-green)',
                            display: 'block',
                            marginBottom: '10px'
                        }}>Global Impact Network</span>
                        <h1 style={{ fontSize: submitted ? '1.8rem' : '2.5rem', fontWeight: 900, color: '#111', letterSpacing: '-0.02em', transition: 'font-size 0.3s ease' }}>Volunteer Application Form</h1>
                    </div>
                </ScrollReveal>

                <div className={submitted ? "" : "form-layout-grid"} style={submitted ? { display: 'block' } : undefined}>
                    <div style={{ 
                    background: 'white', 
                    borderRadius: submitted ? '30px' : '40px', 
                    padding: submitted ? '45px 30px' : '60px',
                    boxShadow: '0 30px 100px rgba(0,0,0,0.05)',
                    border: '1px solid #f0f0f0',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                }}>
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '10px 0' }}>
                            <div style={{ 
                                width: '80px', 
                                height: '80px', 
                                background: 'var(--primary-green)', 
                                color: 'white', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                fontSize: '2.4rem',
                                margin: '0 auto 24px',
                                boxShadow: '0 15px 30px rgba(29, 185, 84, 0.25)'
                            }}>
                                <i className="bi bi-check-lg"></i>
                            </div>
                            <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '16px', color: '#111' }}>Application Submitted</h2>
                            <p style={{ color: '#555', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto', fontSize: '0.95rem' }}>
                                Your application has been successfully logged with our Global Impact Team. We follow a rigorous vetting process similar to IVHQ to ensure the best experience for both our volunteers and local communities. You will receive an email confirmation shortly.
                            </p>
                            <button 
                                className="btn-modern btn-black" 
                                style={{ marginTop: '35px', padding: '14px 40px', borderRadius: '100px', background: '#111', color: 'white', border: 'none', fontWeight: 800, cursor: 'pointer', fontSize: '0.95rem' }}
                                onClick={() => navigate('/volunteer')}
                            >
                                Return to Volunteer Hub
                            </button>
                        </div>
                    ) : (
                        <>
                            {renderProgressBar()}
                            
                            <form onSubmit={handleSubmit} style={{ minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '30px', color: '#111' }}>{stepTitles[currentStep-1]}</h3>
                                
                                <div style={{ flex: 1 }}>
                                    {currentStep === 1 && (
                                        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                            <div className="form-group">
                                                <label className="prof-label">Full Legal Name</label>
                                                <input type="text" required placeholder="As shown on passport" value={formData.userName} onChange={(e) => setFormData({...formData, userName: e.target.value})} className="prof-input" />
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                                <div className="form-group">
                                                    <label className="prof-label">Email Address</label>
                                                    <input type="email" required placeholder="primary@email.com" value={formData.userEmail} onChange={(e) => setFormData({...formData, userEmail: e.target.value})} className="prof-input" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="prof-label">Phone (WhatsApp Preferred)</label>
                                                    <input type="tel" required placeholder="+1 234 567 890" value={formData.userPhone} onChange={(e) => setFormData({...formData, userPhone: e.target.value})} className="prof-input" />
                                                </div>
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                                                <div className="form-group">
                                                    <label className="prof-label">Gender</label>
                                                    <select value={formData.userGender} onChange={(e) => setFormData({...formData, userGender: e.target.value})} className="prof-input prof-select">
                                                        <option>Select Gender</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Non-binary</option>
                                                        <option>Prefer not to say</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="prof-label">Age</label>
                                                    <input type="number" required min="16" placeholder="Min 16+" value={formData.userAge} onChange={(e) => setFormData({...formData, userAge: e.target.value})} className="prof-input" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="prof-label">Current Occupation</label>
                                                    <input type="text" required placeholder="Student, Teacher, etc" value={formData.userOccupation} onChange={(e) => setFormData({...formData, userOccupation: e.target.value})} className="prof-input" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="prof-label">Country of Residence</label>
                                                <input type="text" required placeholder="e.g. United States" value={formData.userCountry} onChange={(e) => setFormData({...formData, userCountry: e.target.value})} className="prof-input" />
                                            </div>
                                        </div>
                                    )}

                                    {currentStep === 2 && (() => {
                                        const isBreathe = formData.volunteerProject === 'Breathe Sri Lanka';
                                        const isCeylon = formData.volunteerProject === 'Ceylon Skill Odyssey';
                                        const isFixed = isBreathe || isCeylon;

                                        const projects = [
                                            { id: 'Breathe Sri Lanka', label: 'Breathe Sri Lanka', icon: 'fa-solid fa-earth-asia', desc: 'Cultural immersion journey — 27 days', special: true },
                                            { id: 'Ceylon Skill Odyssey', label: 'Ceylon Skill Odyssey', icon: 'fa-solid fa-compass', desc: '7-Day custom skill journey — 250 USD' },
                                            { id: 'Teaching Volunteer Program', label: 'Teaching Volunteer', icon: 'fa-solid fa-chalkboard-user', desc: 'Teach English in rural schools & temples' },
                                            { id: 'Special Needs Support', label: 'Special Needs Support', icon: 'fa-solid fa-hands-holding-child', desc: 'Care & support for children with special needs' },
                                            { id: 'Sri Lanka Dog Volunteers', label: 'Dog Rescue', icon: 'fa-solid fa-paw', desc: 'Rescue & rehabilitation of street dogs' },
                                            { id: 'Construction & Renovation', label: 'Construction & Renovation', icon: 'fa-solid fa-hammer', desc: 'Build & renovate schools and community spaces' },
                                            { id: 'Body & Mind Wellness Week', label: 'Body & Mind Wellness Week', icon: 'fa-solid fa-spa', desc: 'Yoga, meditation & massages in Hikkaduwa' },
                                            { id: 'Medical Volunteer', label: 'Medical Volunteer', icon: 'fa-solid fa-kit-medical', desc: 'Healthcare placements in rural clinics' },
                                        ];

                                        return (
                                            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                                                {/* Volunteer Project Selector */}
                                                <div className="form-group">
                                                    <label className="prof-label">Select Volunteer Project</label>
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                                                        {projects.map(p => (
                                                            <div
                                                                key={p.id}
                                                                onClick={() => {
                                                                    const isBreatheProject = p.id === 'Breathe Sri Lanka';
                                                                    const isCeylonProject = p.id === 'Ceylon Skill Odyssey';
                                                                    setDurationCategory('weeks');
                                                                    setFormData({
                                                                        ...formData,
                                                                        volunteerProject: p.id,
                                                                        program: p.id,
                                                                        duration: isBreatheProject ? '27 Days (Full Program)' : isCeylonProject ? '7 Days (Full Program)' : '1 Week',
                                                                        projectFocus: p.id
                                                                    });
                                                                }}
                                                                style={{
                                                                    padding: '16px 18px',
                                                                    borderRadius: '16px',
                                                                    border: formData.volunteerProject === p.id ? '2px solid var(--primary-green)' : '2px solid #eee',
                                                                    background: formData.volunteerProject === p.id ? 'rgba(29,185,84,0.06)' : '#fafafa',
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.25s ease',
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    gap: '8px',
                                                                    position: 'relative',
                                                                    overflow: 'hidden'
                                                                }}
                                                            >
                                                                {p.special && (
                                                                    <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--primary-green)', color: '#fff', fontSize: '0.6rem', fontWeight: 800, padding: '2px 8px', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Signature</span>
                                                                )}
                                                                <i className={p.icon} style={{ fontSize: '1.3rem', color: formData.volunteerProject === p.id ? 'var(--primary-green)' : '#888' }}></i>
                                                                <span style={{ fontWeight: 800, fontSize: '0.88rem', color: '#111', lineHeight: 1.3 }}>{p.label}</span>
                                                                <span style={{ fontSize: '0.75rem', color: '#888', lineHeight: 1.4 }}>{p.desc}</span>
                                                                {formData.volunteerProject === p.id && (
                                                                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--primary-green)', position: 'absolute', bottom: '12px', right: '14px', fontSize: '1rem' }}></i>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Duration (Full Width) */}
                                                {formData.volunteerProject && (
                                                    <div className="form-group animate-fade-in" style={{ maxWidth: '600px' }}>
                                                        <label className="prof-label">Program Duration</label>
                                                        {isFixed ? (
                                                            <input
                                                                type="text"
                                                                value={isBreathe ? "27 Days (Full Program)" : "7 Days (Full Program)"}
                                                                readOnly
                                                                className="prof-input"
                                                                style={{ background: '#f5f5f7', color: '#555', cursor: 'not-allowed' }}
                                                            />
                                                        ) : (
                                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                                {/* Category selector */}
                                                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            setDurationCategory('weeks');
                                                                            setFormData({ ...formData, duration: '1 Week' });
                                                                        }}
                                                                        style={{
                                                                            flex: '1 1 120px',
                                                                            padding: '10px 16px',
                                                                            borderRadius: '12px',
                                                                            border: durationCategory === 'weeks' ? '2px solid var(--primary-green)' : '2px solid #eee',
                                                                            background: durationCategory === 'weeks' ? 'rgba(29,185,84,0.06)' : 'white',
                                                                            fontWeight: 700,
                                                                            fontSize: '0.85rem',
                                                                            cursor: 'pointer',
                                                                            transition: 'all 0.25s ease',
                                                                            color: durationCategory === 'weeks' ? '#111' : '#666'
                                                                        }}
                                                                    >
                                                                        Weeks (1 - 24 Weeks)
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            setDurationCategory('months');
                                                                            setFormData({ ...formData, duration: '1 Month' });
                                                                        }}
                                                                        style={{
                                                                            flex: '1 1 120px',
                                                                            padding: '10px 16px',
                                                                            borderRadius: '12px',
                                                                            border: durationCategory === 'months' ? '2px solid var(--primary-green)' : '2px solid #eee',
                                                                            background: durationCategory === 'months' ? 'rgba(29,185,84,0.06)' : 'white',
                                                                            fontWeight: 700,
                                                                            fontSize: '0.85rem',
                                                                            cursor: 'pointer',
                                                                            transition: 'all 0.25s ease',
                                                                            color: durationCategory === 'months' ? '#111' : '#666'
                                                                        }}
                                                                    >
                                                                        Months (1 - 6 Months)
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            setDurationCategory('mix');
                                                                        }}
                                                                        style={{
                                                                            flex: '1 1 150px',
                                                                            padding: '10px 16px',
                                                                            borderRadius: '12px',
                                                                            border: durationCategory === 'mix' ? '2px solid var(--primary-green)' : '2px solid #eee',
                                                                            background: durationCategory === 'mix' ? 'rgba(29,185,84,0.06)' : 'white',
                                                                            fontWeight: 700,
                                                                            fontSize: '0.85rem',
                                                                            cursor: 'pointer',
                                                                            transition: 'all 0.25s ease',
                                                                            color: durationCategory === 'mix' ? '#111' : '#666'
                                                                        }}
                                                                    >
                                                                        Months & Weeks Mix
                                                                    </button>
                                                                </div>

                                                                {/* Select list based on category */}
                                                                {durationCategory !== 'mix' ? (
                                                                    <select
                                                                        required
                                                                        value={formData.duration}
                                                                        onChange={e => setFormData({ ...formData, duration: e.target.value })}
                                                                        className="prof-input prof-select"
                                                                    >
                                                                        <option value="">Select Duration Option</option>
                                                                        {durationCategory === 'weeks' ? (
                                                                            Array.from({ length: 24 }, (_, i) => `${i + 1} ${i === 0 ? 'Week' : 'Weeks'}`).map(d => (
                                                                                <option key={d} value={d}>{d}</option>
                                                                            ))
                                                                        ) : (
                                                                            Array.from({ length: 6 }, (_, i) => `${i + 1} ${i === 0 ? 'Month' : 'Months'}`).map(d => (
                                                                                <option key={d} value={d}>{d}</option>
                                                                            ))
                                                                        )}
                                                                    </select>
                                                                ) : (
                                                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', animation: 'profFadeIn 0.3s ease forwards' }}>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                                            <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>Months</label>
                                                                            <select
                                                                                value={mixMonths}
                                                                                onChange={e => setMixMonths(e.target.value)}
                                                                                className="prof-input prof-select"
                                                                                style={{ padding: '12px 18px', borderRadius: '12px' }}
                                                                            >
                                                                                {Array.from({ length: 5 }, (_, i) => `${i + 1} ${i === 0 ? 'Month' : 'Months'}`).map(m => (
                                                                                    <option key={m} value={m}>{m}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                                            <label style={{ fontSize: '0.75rem', fontWeight: 800, color: '#666', textTransform: 'uppercase' }}>Weeks</label>
                                                                            <select
                                                                                value={mixWeeks}
                                                                                onChange={e => setMixWeeks(e.target.value)}
                                                                                className="prof-input prof-select"
                                                                                style={{ padding: '12px 18px', borderRadius: '12px' }}
                                                                            >
                                                                                {Array.from({ length: 3 }, (_, i) => `${i + 1} ${i === 0 ? 'Week' : 'Weeks'}`).map(w => (
                                                                                    <option key={w} value={w}>{w}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}

                                    {currentStep === 3 && (
                                        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                            {/* Arrival Date and Arrival Time */}
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                                <div className="form-group">
                                                    <label className="prof-label">Arrival Date *</label>
                                                    <input 
                                                        type="date" 
                                                        required 
                                                        value={formData.startDate} 
                                                        onChange={e => setFormData({ ...formData, startDate: e.target.value })} 
                                                        className="prof-input"
                                                        style={{
                                                            padding: '18px 24px',
                                                            borderRadius: '16px',
                                                            borderColor: '#eee',
                                                            background: 'white'
                                                        }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="prof-label">Arrival Time *</label>
                                                    <input 
                                                        type="time" 
                                                        required 
                                                        value={formData.arrivalTime} 
                                                        onChange={e => setFormData({ ...formData, arrivalTime: e.target.value })} 
                                                        className="prof-input" 
                                                        style={{ padding: '18px 24px', borderRadius: '16px' }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Arrival Method selector as 2 cards */}
                                            <div className="form-group">
                                                <label className="prof-label">Arrival Method *</label>
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                                                    {/* Card 1: By Air */}
                                                    <div
                                                        onClick={() => setFormData({ ...formData, arrivalMethod: 'Flight', overlandNotes: '' })}
                                                        style={{
                                                            padding: '24px 20px',
                                                            borderRadius: '20px',
                                                            border: formData.arrivalMethod === 'Flight' ? '2px solid var(--primary-green)' : '2px solid #eee',
                                                            background: formData.arrivalMethod === 'Flight' ? 'rgba(29,185,84,0.06)' : '#fafafa',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.25s ease',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '10px',
                                                            position: 'relative',
                                                            overflow: 'hidden'
                                                        }}
                                                        className="arrival-card"
                                                    >
                                                        <i className="fa-solid fa-plane" style={{ fontSize: '1.6rem', color: formData.arrivalMethod === 'Flight' ? 'var(--primary-green)' : '#888' }}></i>
                                                        <span style={{ fontWeight: 800, fontSize: '1rem', color: '#111' }}>By Air / Flight</span>
                                                        <span style={{ fontSize: '0.8rem', color: '#888', lineHeight: 1.4 }}>Arriving at Bandaranaike International Airport (CMB) with flight details.</span>
                                                        {formData.arrivalMethod === 'Flight' && (
                                                            <i className="fa-solid fa-circle-check" style={{ color: 'var(--primary-green)', position: 'absolute', bottom: '15px', right: '15px', fontSize: '1.2rem' }}></i>
                                                        )}
                                                    </div>

                                                    {/* Card 2: Overland */}
                                                    <div
                                                        onClick={() => setFormData({ ...formData, arrivalMethod: 'Overland', flightNumber: '', airline: '', flightNotes: '' })}
                                                        style={{
                                                            padding: '24px 20px',
                                                            borderRadius: '20px',
                                                            border: formData.arrivalMethod === 'Overland' ? '2px solid var(--primary-green)' : '2px solid #eee',
                                                            background: formData.arrivalMethod === 'Overland' ? 'rgba(29,185,84,0.06)' : '#fafafa',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.25s ease',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '10px',
                                                            position: 'relative',
                                                            overflow: 'hidden'
                                                        }}
                                                        className="arrival-card"
                                                    >
                                                        <i className="fa-solid fa-bus" style={{ fontSize: '1.6rem', color: formData.arrivalMethod === 'Overland' ? 'var(--primary-green)' : '#888' }}></i>
                                                        <span style={{ fontWeight: 800, fontSize: '1rem', color: '#111' }}>Overland Transfer</span>
                                                        <span style={{ fontSize: '0.8rem', color: '#888', lineHeight: 1.4 }}>Arriving via taxi, train, bus, or private transport from another location.</span>
                                                        {formData.arrivalMethod === 'Overland' && (
                                                            <i className="fa-solid fa-circle-check" style={{ color: 'var(--primary-green)', position: 'absolute', bottom: '15px', right: '15px', fontSize: '1.2rem' }}></i>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Flight conditional inputs */}
                                            {formData.arrivalMethod === 'Flight' && (
                                                <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                                        <div className="form-group">
                                                            <label className="prof-label">Airline Name *</label>
                                                            <input 
                                                                type="text"
                                                                required 
                                                                placeholder="e.g. Emirates, Qatar Airways" 
                                                                value={formData.airline || ''} 
                                                                onChange={e => setFormData({ ...formData, airline: e.target.value })} 
                                                                className="prof-input" 
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="prof-label">Flight Number *</label>
                                                            <input 
                                                                type="text" 
                                                                required 
                                                                placeholder="e.g. EK 348" 
                                                                value={formData.flightNumber} 
                                                                onChange={e => setFormData({ ...formData, flightNumber: e.target.value })} 
                                                                className="prof-input" 
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="prof-label">Flight Additional Details</label>
                                                        <textarea 
                                                            placeholder="e.g. Connecting flights, special requests, luggage info, or layover details" 
                                                            value={formData.flightNotes || ''} 
                                                            onChange={e => setFormData({ ...formData, flightNotes: e.target.value })} 
                                                            className="prof-textarea" 
                                                            style={{ minHeight: '120px' }}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Overland conditional inputs */}
                                            {formData.arrivalMethod === 'Overland' && (
                                                <div className="form-group animate-fade-in">
                                                    <label className="prof-label">Overland Arrival Notes *</label>
                                                    <textarea 
                                                        required 
                                                        placeholder="Describe your overland travel plans (e.g., bus from Colombo, train, taxi, etc.)" 
                                                        value={formData.overlandNotes || ''} 
                                                        onChange={e => setFormData({ ...formData, overlandNotes: e.target.value })} 
                                                        className="prof-textarea" 
                                                        style={{ minHeight: '120px' }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {currentStep === 4 && (
                                        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                            <div className="form-group">
                                                <label className="prof-label">Emergency Contact Full Name</label>
                                                <input type="text" required placeholder="Full Name" value={formData.emergencyName} onChange={(e) => setFormData({...formData, emergencyName: e.target.value})} className="prof-input" />
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                                <div className="form-group">
                                                    <label className="prof-label">Relationship to You</label>
                                                    <input type="text" required placeholder="Parent, Spouse, etc" value={formData.emergencyRelation} onChange={(e) => setFormData({...formData, emergencyRelation: e.target.value})} className="prof-input" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="prof-label">Emergency Phone Number</label>
                                                    <input type="tel" required placeholder="+1 234..." value={formData.emergencyPhone} onChange={(e) => setFormData({...formData, emergencyPhone: e.target.value})} className="prof-input" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {currentStep === 5 && (
                                        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                            {formData.volunteerProject === 'Ceylon Skill Odyssey' && formData.skills && (
                                                <div style={{
                                                    background: 'rgba(29, 185, 84, 0.05)',
                                                    border: '1px dashed rgba(29, 185, 84, 0.4)',
                                                    borderRadius: '12px',
                                                    padding: '16px',
                                                    marginBottom: '5px'
                                                }}>
                                                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <i className="bi bi-stars"></i> Prefilled Odyssey Skills ({formData.skills.split(', ').length})
                                                    </div>
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                                        {formData.skills.split(', ').map((skill, sIdx) => (
                                                            <span key={sIdx} style={{
                                                                background: 'white',
                                                                color: '#1d1d1f',
                                                                border: '1px solid rgba(29, 185, 84, 0.15)',
                                                                borderRadius: '20px',
                                                                padding: '4px 12px',
                                                                fontSize: '0.8rem',
                                                                fontWeight: 600,
                                                                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                                                            }}>
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="form-group">
                                                <label className="prof-label">Motivation for Volunteering</label>
                                                <textarea required placeholder="What do you hope to achieve and contribute during your journey?" value={formData.motivation} onChange={(e) => setFormData({...formData, motivation: e.target.value})} className="prof-textarea" style={{ minHeight: '120px' }} />
                                            </div>
                                            <div className="form-group">
                                                <label className="prof-label">Relevant Skills & Experience</label>
                                                <textarea placeholder="List any skills, qualifications or previous volunteer experience..." value={formData.skills} onChange={(e) => setFormData({...formData, skills: e.target.value})} className="prof-textarea" style={{ minHeight: '100px' }} />
                                            </div>
                                            <div className="form-group">
                                                <label className="prof-label">How did you hear about us?</label>
                                                <select value={formData.referral} onChange={(e) => setFormData({...formData, referral: e.target.value})} className="prof-input prof-select">
                                                    <option>Social Media</option>
                                                    <option>Search Engine (Google)</option>
                                                    <option>Word of Mouth</option>
                                                    <option>Travel Blog/Article</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}

                                    {currentStep === 6 && (
                                        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                            <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '15px', border: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', cursor: 'pointer' }}>
                                                    <input type="checkbox" checked={formData.hasBackgroundCheck} onChange={(e) => setFormData({...formData, hasBackgroundCheck: e.target.checked})} style={{ width: '20px', height: '20px', marginTop: '2px', accentColor: 'var(--primary-green)', cursor: 'pointer' }} />
                                                    <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>I confirm that I can provide a Criminal Background Check if requested.</span>
                                                </label>
                                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', cursor: 'pointer' }}>
                                                    <input type="checkbox" checked={formData.hasInsurance} onChange={(e) => setFormData({...formData, hasInsurance: e.target.checked})} style={{ width: '20px', height: '20px', marginTop: '2px', accentColor: 'var(--primary-green)', cursor: 'pointer' }} />
                                                    <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>I understand that Travel Insurance is mandatory for all volunteers.</span>
                                                </label>

                                                <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '10px 0' }} />

                                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', cursor: 'pointer' }}>
                                                    <input 
                                                        type="checkbox" 
                                                        checked={termsAccepted} 
                                                        onChange={(e) => setTermsAccepted(e.target.checked)} 
                                                        required 
                                                        style={{ width: '20px', height: '20px', marginTop: '2px', accentColor: 'var(--primary-green)', cursor: 'pointer' }} 
                                                    />
                                                    <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>I agree to the <Link to="/terms-and-conditions" target="_blank" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>Terms & Conditions</Link> and <Link to="/privacy-policy" target="_blank" style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>Privacy Policy</Link>. *</span>
                                                </label>

                                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', cursor: 'pointer' }}>
                                                    <input 
                                                        type="checkbox" 
                                                        checked={ndaAccepted} 
                                                        onChange={(e) => setNdaAccepted(e.target.checked)} 
                                                        disabled={ndaDetails.signed} 
                                                        required 
                                                        style={{ width: '20px', height: '20px', marginTop: '2px', accentColor: 'var(--primary-green)', cursor: 'pointer' }} 
                                                    />
                                                    {ndaDetails.signed ? (
                                                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#15803d', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                            <i className="fa-solid fa-circle-check"></i> Verified DocuSign Signature Applied <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', opacity: 0.8 }}>({ndaDetails.envelopeId.slice(0, 11)}...)</span>
                                                        </span>
                                                    ) : (
                                                        <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>I agree to the <Link to="/nda" target="_blank" onClick={(e) => { e.preventDefault(); setIsNdaModalOpen(true); }} style={{ color: 'var(--primary-green)', textDecoration: 'underline' }}>Non-Disclosure Agreement (NDA)</Link> (DocuSign Required). *</span>
                                                    )}
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <label className="prof-label">Dietary Requirements or Allergies</label>
                                                <input type="text" placeholder="Vegetarian, Nut Allergy, etc" value={formData.dietary} onChange={(e) => setFormData({...formData, dietary: e.target.value})} className="prof-input" />
                                            </div>
                                            <div className="form-group">
                                                <label className="prof-label">Medical Notes or Physical Requirements</label>
                                                <textarea placeholder="Any health conditions or physical considerations we should be aware of?" value={formData.medicalNotes} onChange={(e) => setFormData({...formData, medicalNotes: e.target.value})} className="prof-textarea" style={{ minHeight: '80px' }} />
                                            </div>
                                        </div>
                                    )}

                                </div>

                                <div style={{ display: 'flex', gap: '20px', marginTop: '50px' }}>
                                    {currentStep > 1 && (
                                        <button type="button" onClick={prevStep} style={{ flex: 1, padding: '18px', borderRadius: '100px', border: '2px solid #111', background: 'transparent', fontWeight: 800, cursor: 'pointer', transition: '0.3s' }}>
                                            Back
                                        </button>
                                    )}
                                    <button type="submit" disabled={loading} style={{ 
                                        flex: 2, 
                                        padding: '18px', 
                                        borderRadius: '100px', 
                                        border: 'none', 
                                        background: '#111', 
                                        color: 'white', 
                                        fontWeight: 800, 
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {loading ? 'Processing...' : (currentStep === totalSteps ? 'Finalize My Application' : 'Continue to Next Step')}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
                
                {!submitted && (
                    <div className="summary-card">
                        <h3 className="summary-title">Application Summary</h3>
                        
                        <div className="summary-content">
                            <div className="summary-section">
                                <div className="summary-section-title"><i className="fa-solid fa-earth-asia"></i> Program</div>
                                <div className="summary-item">
                                    <span className="summary-label">Project:</span>
                                    <span className="summary-value highlight">{formData.volunteerProject || '—'}</span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">Duration:</span>
                                    <span className="summary-value">{formData.duration || '—'}</span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">Arrival Date:</span>
                                    <span className="summary-value">
                                        {formData.startDate ? (() => {
                                            const date = new Date(formData.startDate + 'T00:00:00');
                                            return date.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
                                        })() : 'Not selected'}
                                    </span>
                                </div>
                                {formData.startDate && (
                                    <>
                                        <div className="summary-item">
                                            <span className="summary-label">Arrival Method:</span>
                                            <span className="summary-value">{formData.arrivalMethod}</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="summary-label">Arrival Time:</span>
                                            <span className="summary-value">{formData.arrivalTime || '—'}</span>
                                        </div>
                                        {formData.arrivalMethod === 'Flight' && (
                                            <>
                                                {formData.airline && (
                                                    <div className="summary-item">
                                                        <span className="summary-label">Airline:</span>
                                                        <span className="summary-value">{formData.airline}</span>
                                                    </div>
                                                )}
                                                {formData.flightNumber && (
                                                    <div className="summary-item">
                                                        <span className="summary-label">Flight Number:</span>
                                                        <span className="summary-value">{formData.flightNumber}</span>
                                                    </div>
                                                )}
                                                {formData.flightNotes && (
                                                    <div className="summary-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                                                        <span className="summary-label">Flight Details:</span>
                                                        <span className="summary-value" style={{ textAlign: 'left', maxWidth: '100%', fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
                                                            {formData.flightNotes}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                        {formData.arrivalMethod === 'Overland' && formData.overlandNotes && (
                                            <div className="summary-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                                                <span className="summary-label">Overland Notes:</span>
                                                <span className="summary-value" style={{ textAlign: 'left', maxWidth: '100%', fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic' }}>
                                                    {formData.overlandNotes}
                                                </span>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>

                            {priceDetails && (
                                <div className="summary-section" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
                                    <div className="summary-section-title"><i className="fa-solid fa-credit-card"></i> Program Fee</div>
                                    <div className="summary-item" style={{ alignItems: 'baseline' }}>
                                        <span className="summary-label">Total Fee:</span>
                                        <span className="summary-value highlight" style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff' }}>
                                            {formatPrice(priceDetails.total)}
                                        </span>
                                    </div>
                                    {!priceDetails.isFixed && (
                                        <div className="summary-item">
                                            <span className="summary-label">Weekly Average:</span>
                                            <span className="summary-value">
                                                {formatPrice(priceDetails.average)}/wk
                                            </span>
                                        </div>
                                    )}
                                    {priceDetails.isMinLimit && (
                                        <div style={{ fontSize: '0.75rem', color: '#ffedd5', background: 'rgba(234, 88, 12, 0.25)', padding: '8px 12px', borderRadius: '10px', marginTop: '10px', fontWeight: 700 }}>
                                            <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: '6px' }}></i>
                                            {priceDetails.minWeeks} Week Minimum Required
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="summary-section">
                                <div className="summary-section-title"><i className="fa-solid fa-user"></i> Personal</div>
                                <div className="summary-item">
                                    <span className="summary-label">Name:</span>
                                    <span className="summary-value">{formData.userName || '—'}</span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">Country:</span>
                                    <span className="summary-value">{formData.userCountry || '—'}</span>
                                </div>
                            </div>

                            <div className="summary-section">
                                <div className="summary-section-title"><i className="fa-solid fa-clipboard-check"></i> Checklist</div>
                                <div className="summary-item">
                                    <span className="summary-label">Emergency Contact:</span>
                                    <span className="summary-value">
                                        {formData.emergencyName && formData.emergencyPhone ? 
                                            <i className="fa-solid fa-check" style={{color: '#fff'}}></i> : 
                                            <span style={{opacity: 0.5}}>Pending</span>}
                                    </span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">Declarations:</span>
                                    <span className="summary-value">
                                        {formData.hasBackgroundCheck && formData.hasInsurance ? 
                                            <i className="fa-solid fa-check" style={{color: '#fff'}}></i> : 
                                            <span style={{opacity: 0.5}}>Pending</span>}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>
                
                {!submitted && (
                    <div style={{ marginTop: '40px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '30px', opacity: 0.6 }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700 }}><i className="bi bi-shield-check" style={{ marginRight: '5px' }}></i> SSL Encrypted</div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700 }}><i className="bi bi-lock" style={{ marginRight: '5px' }}></i> Secure Data</div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700 }}><i className="bi bi-people" style={{ marginRight: '5px' }}></i> Global Standards</div>
                    </div>
                )}
            </div>

            <DocuSignModal 
                isOpen={isNdaModalOpen} 
                onClose={() => setIsNdaModalOpen(false)} 
                onSignComplete={handleNdaSignComplete} 
                defaultName={formData.userName}
                defaultEmail={formData.userEmail}
            />

            <style dangerouslySetInnerHTML={{ __html: `
                .prof-label {
                    display: block;
                    font-size: 0.85rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 10px;
                    color: #444;
                }
                .prof-input, .prof-textarea {
                    width: 100%;
                    padding: 18px 24px;
                    border-radius: 16px;
                    border: 2px solid #eee;
                    font-size: 1rem;
                    color: #111;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }
                .prof-input:focus, .prof-textarea:focus {
                    outline: none;
                    border-color: var(--primary-green);
                    background: #fdfdfd;
                    box-shadow: 0 10px 30px rgba(29, 185, 84, 0.05);
                }
                .prof-select {
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 24px center;
                }
                .animate-fade-in {
                    animation: profFadeIn 0.5s ease forwards;
                }
                @keyframes profFadeIn {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .form-layout-grid {
                    display: grid;
                    grid-template-columns: 1fr 380px;
                    gap: 40px;
                    align-items: start;
                }
                
                .arrival-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                .arrival-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.06);
                    border-color: #ccc !important;
                }
                
                .summary-card {
                    background: linear-gradient(145deg, #1DB954 0%, #0a2e1a 100%);
                    border-radius: 35px;
                    padding: 45px 35px;
                    color: white;
                    position: sticky;
                    top: 120px;
                    box-shadow: 0 20px 50px rgba(29, 185, 84, 0.2);
                }

                .summary-title {
                    font-size: 1.6rem;
                    font-weight: 900;
                    margin-bottom: 30px;
                    padding-bottom: 25px;
                    border-bottom: 1px solid rgba(255,255,255,0.15);
                }

                .summary-section {
                    margin-bottom: 30px;
                }

                .summary-section-title {
                    font-size: 0.85rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: rgba(255,255,255,0.6);
                    margin-bottom: 18px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .summary-item {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 12px;
                    font-size: 0.95rem;
                    line-height: 1.4;
                }

                .summary-label {
                    color: rgba(255,255,255,0.7);
                    font-weight: 600;
                }

                .summary-value {
                    font-weight: 800;
                    text-align: right;
                    max-width: 60%;
                }

                .summary-value.highlight {
                    color: #fff;
                }

                @media (max-width: 1024px) {
                    .form-layout-grid {
                        grid-template-columns: 1fr;
                    }
                    .summary-card {
                        position: static;
                    }
                }
            `}} />
        </div>
    );
};

export default VolunteerInquiryPage;
