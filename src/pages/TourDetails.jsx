import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourPackages, BUDGET_PROMO_IMG } from '../data/tours';
import SriLankaGlance from '../components/SriLankaGlance';
import gallery1 from '../assets/Galle Fort, Sri Lanka.jpg';
import gallery2 from '../assets/Hurulu Eco Park.jpg';
import surfImg from '../assets/Surfin in Sri Lanka.webp';
import polhenaImg from '../assets/Polhena.jpg';
import budgetPromoImg from '../assets/rajiv-perera-b1jeQiJwYQI-unsplash.jpg';
import SpotifyAdCard from '../components/SpotifyAdCard';
import { useCompare } from '../context/CompareContext';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const ItineraryDay = ({ step, index, forceOpen }) => {
    const [isOpen, setIsOpen] = useState(index === 0);

    React.useEffect(() => {
        setIsOpen(forceOpen);
    }, [forceOpen]);

    return (
        <div style={{ borderBottom: '1px solid #eee' }}>
            <div 
                onClick={() => setIsOpen(!isOpen)}
                style={{ 
                    padding: '25px 0', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    cursor: 'pointer' 
                }}
            >
                <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    <span style={{ color: '#666', marginRight: '10px' }}>Day {step.day} ·</span>
                    <span>{step.title}</span>
                </div>
                <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`} style={{ color: '#666' }}></i>
            </div>
            {isOpen && (
                <div style={{ padding: '0 0 30px 0', color: '#555', lineHeight: 1.8, fontSize: '1.05rem', whiteSpace: 'pre-line' }}>
                    <div dangerouslySetInnerHTML={{ __html: step.desc }} />
                    {step.activities && (
                        <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {step.activities.map((act, i) => (
                                <span key={i} style={{ 
                                    background: 'rgba(29, 185, 84, 0.1)', 
                                    color: 'var(--primary-green)',
                                    padding: '8px 18px', 
                                    borderRadius: '50px', 
                                    fontSize: '0.8rem', 
                                    fontWeight: 800,
                                    border: '1px solid rgba(29, 185, 84, 0.2)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}>
                                    <i className="bi bi-star-fill" style={{ fontSize: '0.6rem' }}></i>
                                    {act}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const TourDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCompare } = useCompare();

    const pkg = tourPackages.find(p => p.id === parseInt(id));

    const [transport, setTransport] = useState('taxi');
    const [activeBookingTab, setActiveBookingTab] = useState('Is this trip right for you?');
    const [allOpen, setAllOpen] = useState(false);
    const [isMapZoomed, setIsMapZoomed] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const itineraryRef = React.useRef(null);
    const reviewsRef = React.useRef(null);
    
    const [activeImage, setActiveImage] = useState(pkg ? pkg.image : '');
    
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
        if (pkg) setActiveImage(pkg.image);
    }, [id, pkg]);

    if (!pkg) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Tour Package Not Found</h2>
                <p>We couldn't find the tour you're looking for.</p>
                <button className="btn-modern btn-black" onClick={() => navigate('/packages')}>Back to Packages</button>
            </div>
        );
    }

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const handleDownloadPDF = async () => {
        if (!itineraryRef.current) return;
        setIsDownloading(true);
        
        try {
            // Force all items open for the PDF capture
            setAllOpen(true);
            
            // Wait for items to expand
            await new Promise(resolve => setTimeout(resolve, 500));

            const canvas = await html2canvas(itineraryRef.current, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save(`${pkg.name.replace(/\s+/g, '_')}_Itinerary.pdf`);
        } catch (err) {
            console.error('PDF generation failed:', err);
        } finally {
            setIsDownloading(false);
        }
    };

    const getPrice = () => {
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

    return (
        <div className="tour-details-page" style={{ background: '#fff', paddingTop: '20px' }}>
            <style>
                {`
                @media (max-width: 768px) {
                    .tour-details-page > div:nth-child(2) {
                        padding: 0 20px !important;
                    }
                    
                    /* Header Responsiveness */
                    .tour-details-page h1 {
                        font-size: 2.2rem !important;
                        margin-bottom: 10px !important;
                    }
                    .tour-details-page div[style*="justify-content: space-between"][style*="align-items: flex-start"] {
                        flex-direction: column !important;
                        gap: 10px !important;
                    }

                    /* Main Grids */
                    .tour-details-page div[style*="display: grid"] {
                        grid-template-columns: 1fr !important;
                        gap: 30px !important;
                    }

                    /* Gallery Section */
                    .tour-details-page div[style*="height: 500px"] {
                        height: 300px !important;
                    }
                    .tour-details-page div[style*="grid-template-columns: repeat(5, 1fr)"] {
                        grid-template-columns: repeat(5, 1fr) !important;
                        gap: 8px !important;
                    }
                    .tour-details-page div[style*="height: 80px"] {
                        height: 60px !important;
                    }

                    /* Summary Card */
                    .tour-details-page div[style*="padding: 35px"] {
                        padding: 25px !important;
                    }
                    .tour-details-page span[style*="font-size: 2.2rem"] {
                        font-size: 1.8rem !important;
                    }

                    /* Itinerary Map & Accordion */
                    .tour-details-page div[style*="grid-template-columns: 1fr 2fr"] {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                        padding: 10px !important;
                    }
                    .tour-details-page div[style*="height: 400px"] {
                        height: 280px !important;
                    }

                    /* Review Section */
                    .reviews-scroll-container div[style*="flex: 0 0 calc(25% - 16px)"] {
                        flex: 0 0 85% !important;
                    }
                    
                    /* Itinerary Header */
                    .tour-details-page div[style*="display: flex"][style*="justify-content: space-between"][style*="align-items: center"] {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 20px !important;
                    }
                    
                    /* Important Notes */
                    .tour-details-page h2[style*="font-size: 2.5rem"] {
                        font-size: 1.8rem !important;
                    }
                    
                    /* Before You Book Tabs */
                    .booking-tabs-container div[style*="display: flex"][style*="gap: 30px"] {
                        gap: 20px !important;
                        padding-bottom: 10px !important;
                    }
                }
                `}
            </style>
            {/* Map Zoom Modal */}
            {isMapZoomed && (
                <div 
                    onClick={() => setIsMapZoomed(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.9)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'zoom-out',
                        padding: '40px'
                    }}
                >
                    <img 
                        src={pkg.routeMap || pkg.image} 
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '12px' }} 
                        alt="Zoomed Map"
                    />
                    <button style={{ position: 'absolute', top: '30px', right: '30px', background: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.2rem' }}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>
            )}

            <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 5%' }}>
                
                {/* Header: Title & Sale Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#111', margin: 0 }}>
                        {pkg.name}
                    </h1>
                    <span style={{ 
                        background: '#107c41', 
                        color: 'white', 
                        padding: '8px 20px', 
                        borderRadius: '50px', 
                        fontSize: '0.75rem', 
                        fontWeight: 800, 
                        textTransform: 'lowercase',
                        boxShadow: '0 4px 12px rgba(16, 124, 65, 0.2)'
                    }}>Sale now on</span>
                </div>

                {/* Gallery & Summary Card Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '40px', marginBottom: '60px' }}>
                    
                    {/* Gallery Section */}
                    <div>
                        <div style={{ borderRadius: '24px', overflow: 'hidden', height: '500px', marginBottom: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', transition: 'all 0.5s ease' }}>
                            <img src={activeImage} alt={pkg.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px' }}>
                            {[pkg.image, surfImg, polhenaImg, gallery1, gallery2].map((img, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => setActiveImage(img)}
                                    style={{ 
                                        height: '80px', 
                                        borderRadius: '12px', 
                                        overflow: 'hidden', 
                                        cursor: 'pointer',
                                        border: activeImage === img ? '3px solid var(--primary-green)' : '3px solid transparent',
                                        transition: 'all 0.2s ease',
                                        position: 'relative'
                                    }}
                                >
                                    <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: activeImage === img ? 1 : 0.7 }} />
                                    {i === 4 && (
                                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.7rem', textAlign: 'center', padding: '5px' }}>
                                            All photos (19)
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary Card Section */}
                    <div>
                        <div style={{
                            background: 'white',
                            padding: '35px',
                            borderRadius: '24px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(0,0,0,0.05)',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ color: '#f39c12', fontSize: '1.2rem' }}><i className="fa-solid fa-star"></i></span>
                                    <span style={{ fontSize: '1.4rem', fontWeight: 900 }}>4.9</span>
                                    <a href="#" style={{ fontSize: '0.85rem', color: '#0066cc', textDecoration: 'underline', fontWeight: 600 }}>100 reviews</a>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '0.65rem', color: '#999', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px' }}>Trip code: HPKS</span>
                                </div>
                            </div>

                            <div style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                                <div style={{ marginBottom: '15px' }}>
                                    <span style={{ fontSize: '0.85rem', color: '#555', fontWeight: 700 }}>Start: </span>
                                    <span style={{ fontSize: '0.85rem', color: '#111', fontWeight: 800 }}>{pkg.itinerary[0].title.split(',')[0]}, Sri Lanka</span>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <span style={{ fontSize: '0.85rem', color: '#555', fontWeight: 700 }}>End: </span>
                                    <span style={{ fontSize: '0.85rem', color: '#111', fontWeight: 800 }}>{pkg.itinerary[pkg.itinerary.length-1].title.split(',')[0]}, Sri Lanka</span>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px 15px', marginBottom: '35px' }}>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Duration</span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>{pkg.days}</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Group size</span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>1 to 12</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Minimum age</span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>10 years old</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Style <i className="bi bi-info-circle" style={{ fontSize: '0.65rem' }}></i></span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>Comfort</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Theme <i className="bi bi-info-circle" style={{ fontSize: '0.65rem' }}></i></span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>Explorer</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Physical rating <i className="bi bi-info-circle" style={{ fontSize: '0.65rem' }}></i></span>
                                    <div style={{ display: 'flex', gap: '4px', marginTop: '5px' }}>
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} style={{ width: '12px', height: '4px', background: i <= 2 ? '#333' : '#eee', borderRadius: '2px' }}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '10px', marginBottom: '25px' }}>
                                <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 700, marginBottom: '8px' }}>From</span>
                                <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#111', lineHeight: 1 }}>USD {getPrice()}</span>
                            </div>

                            <button 
                                className="btn-modern" 
                                style={{ 
                                    width: '100%', 
                                    fontSize: '1.2rem', 
                                    padding: '20px', 
                                    background: 'var(--primary-green)', 
                                    color: 'white', 
                                    borderRadius: '15px', 
                                    border: 'none', 
                                    fontWeight: 900, 
                                    textTransform: 'none', 
                                    marginBottom: '20px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 10px 30px rgba(29, 185, 84, 0.2)'
                                }} 
                                onClick={() => navigate(`/inquiry/${pkg.id}?transport=${transport}`)}
                            >
                                Book Now
                            </button>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '25px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                                <button 
                                    onClick={() => addToCompare(pkg)}
                                    style={{ background: 'none', border: 'none', color: '#444', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                                >
                                    <i className="bi bi-plus-lg"></i> Add to compare
                                </button>
                                <button style={{ background: 'none', border: 'none', color: '#444', fontSize: '1.2rem', cursor: 'pointer' }}>
                                    <i className="bi bi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '50px' }}>
                    
                    {/* Left Column */}
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px' }}>Overview</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555', marginBottom: '40px' }}>
                            {pkg.description}
                        </p>

                        {/* Before You Book Section */}
                        <div style={{ marginTop: '40px', marginBottom: '60px', padding: '40px', background: '#fdfdfd', borderRadius: '32px', border: '1px solid #f0f0f0' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111', marginBottom: '30px' }}>Before you book you should know</h2>
                            <div className="booking-tabs-container">
                                <div style={{ 
                                    display: 'flex', 
                                    gap: '30px', 
                                    borderBottom: '1px solid #eee', 
                                    marginBottom: '35px',
                                    overflowX: 'auto',
                                    paddingBottom: '2px'
                                }}>
                                    {['Is this trip right for you?', 'Accommodation', 'Joining point'].map((tab) => (
                                        <div 
                                            key={tab}
                                            onClick={() => setActiveBookingTab(tab)}
                                            style={{
                                                padding: '12px 0',
                                                fontSize: '1rem',
                                                fontWeight: 700,
                                                color: activeBookingTab === tab ? '#ff4d4d' : '#111',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                whiteSpace: 'nowrap',
                                                transition: 'all 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px'
                                            }}
                                        >
                                            <i className={
                                                tab === 'Is this trip right for you?' ? 'bi bi-flag' : 
                                                tab === 'Accommodation' ? 'bi bi-houses' : 'bi bi-geo-alt'
                                            } style={{ fontSize: '1.1rem', color: activeBookingTab === tab ? '#ff4d4d' : '#666' }}></i>
                                            {tab}
                                            {activeBookingTab === tab && (
                                                <div style={{ 
                                                    position: 'absolute', 
                                                    bottom: '-1px', 
                                                    left: 0, 
                                                    right: 0, 
                                                    height: '4px', 
                                                    background: '#ff4d4d',
                                                    borderRadius: '2px'
                                                }}></div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div style={{ minHeight: '180px' }}>
                                    {activeBookingTab === 'Is this trip right for you?' && (
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                            <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', color: '#444', lineHeight: 1.7 }}>
                                                <div style={{ color: 'var(--primary-green)', fontWeight: 900 }}>•</div>
                                                Though its equatorial position means fairly constant year-round temperatures, the summer months in Sri Lanka are very hot with short, sharp monsoons in the south-west of the country. Be sure to use adequate sun protection and drink plenty of water.
                                            </li>
                                            <li style={{ marginBottom: '20px', display: 'flex', gap: '15px', color: '#444', lineHeight: 1.7 }}>
                                                <div style={{ color: 'var(--primary-green)', fontWeight: 900 }}>•</div>
                                                Beaches in Sri Lanka may be unpatrolled, so please seek local advice on where to swim safely.
                                            </li>
                                            <li style={{ display: 'flex', gap: '15px', color: '#444', lineHeight: 1.7 }}>
                                                <div style={{ color: 'var(--primary-green)', fontWeight: 900 }}>•</div>
                                                Some temples on this trip require your head to be uncovered when visiting. You can opt out of temple visits if this requirement doesn't suit you.
                                            </li>
                                        </ul>
                                    )}
                                    {activeBookingTab === 'Accommodation' && (
                                        <div style={{ color: '#444', lineHeight: 1.8 }}>
                                            <p style={{ marginBottom: '20px' }}>
                                                Our accommodation is based on clean, comfortable budget stays that provide all the essential amenities for a pleasant and relaxed experience. These are not boutique hotels or colonial-style luxury properties, but carefully selected places that offer good value, convenience, and a local feel.
                                            </p>
                                            <p style={{ marginBottom: '20px' }}>
                                                Most accommodations include private rooms, attached western bathrooms, and basic comforts such as Wi-Fi and air conditioning or fan options, depending on the location.
                                            </p>
                                            <p style={{ fontWeight: 600, color: '#111' }}>
                                                If you are able to travel with one or more (friends/partners), the cost per person will be lower, as transport and accommodation expenses can be shared. This makes the program more cost-effective while still enjoying the same experiences.
                                            </p>
                                        </div>
                                    )}
                                    {activeBookingTab === 'Joining point' && (
                                        <div>
                                            <p style={{ color: '#666', marginBottom: '20px' }}>This trip can be joined at any of the following locations:</p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                                {['Kandy', 'Galle', 'Hikkaduwa', 'Katunayake Airport'].map((point) => (
                                                    <div key={point} style={{ 
                                                        padding: '10px 20px', 
                                                        background: '#fcfcfc', 
                                                        borderRadius: '50px', 
                                                        border: '1px solid #eee',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px',
                                                        fontWeight: 800,
                                                        color: '#111',
                                                        fontSize: '0.9rem'
                                                    }}>
                                                        <i className="bi bi-geo-alt-fill" style={{ color: 'var(--primary-green)' }}></i>
                                                        {point}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="transport-selector-box" style={{
                            padding: '25px', 
                            background: 'rgba(29, 185, 84, 0.05)', 
                            borderRadius: '24px', 
                            border: '1px solid rgba(29, 185, 84, 0.1)',
                            marginTop: '40px'
                        }}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                                <label style={{fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-green)', margin: 0, letterSpacing: '1px'}}>Vehicle Type</label>
                            </div>
                            <select 
                                className="form-control" 
                                value={transport}
                                onChange={(e) => setTransport(e.target.value)}
                                style={{
                                    width: '100%',
                                    background: 'white',
                                    border: '1px solid rgba(0,0,0,0.1)',
                                    borderRadius: '15px',
                                    padding: '15px',
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    outline: 'none'
                                }}
                            >
                                <option value="taxi">Private Car (Standard)</option>
                                <option value="van">Private Van (+ $150)</option>
                                <option value="tuktuk">Tuk Tuk Adventure (- $300)</option>
                            </select>
                        </div>

                        {/* Why You'll Love This Trip */}
                        <div style={{
                            marginTop: '30px',
                            padding: '30px',
                            background: 'white',
                            borderRadius: '20px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                        }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px' }}>
                                Why you'll love this trip
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}><i className="fa-solid fa-camera-retro"></i></div>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}><strong>Stunning Photo Ops:</strong> Capture the iconic Nine Arches Bridge and sunrise at Sigiriya.</p>
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}><i className="fa-solid fa-leaf"></i></div>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}><strong>Value Stays:</strong> Relax in hand-picked, clean and comfortable local guesthouses.</p>
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}><i className="fa-solid fa-user-shield"></i></div>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}><strong>Expert Drivers:</strong> Navigate the island safely with our professional, local knowledge experts.</p>
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}><i className="fa-solid fa-gem"></i></div>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}><strong>Hidden Gems:</strong> Go beyond the guidebook with exclusive local village experiences.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {/* Inclusions */}
                        <div className="inclusions-box" style={{ background: 'white', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', padding: '30px', borderRadius: '20px' }}>
                            <h5 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 800 }}>
                                <i className="bi bi-check-circle-fill" style={{ color: 'var(--primary-green)', marginRight: '10px' }}></i> What's Included
                            </h5>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {pkg.inclusions && pkg.inclusions.map((item, i) => (
                                    <li key={i} style={{ fontSize: '0.95rem', color: '#555', marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                                        <i className="bi bi-check" style={{ color: 'var(--primary-green)', marginRight: '10px', fontWeight: 900 }}></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Exclusions */}
                        <div className="exclusions-box" style={{ background: '#fff9f9', border: '1px solid rgba(255, 0, 0, 0.05)', padding: '30px', borderRadius: '20px' }}>
                            <h5 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 800, color: '#c0392b' }}>
                                <i className="bi bi-x-circle-fill" style={{ marginRight: '10px' }}></i> Not Included
                            </h5>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {pkg.exclusions && pkg.exclusions.map((item, i) => (
                                    <li key={i} style={{ fontSize: '0.95rem', color: '#666', marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                                        <i className="bi bi-x" style={{ color: '#c0392b', marginRight: '10px', fontWeight: 900 }}></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <SpotifyAdCard margin="10px 0 0 0" />

                        {/* Cost-Benefit Travel Card */}
                        <div style={{
                            padding: '35px',
                            background: '#f0fdf4',
                            borderRadius: '24px',
                            border: '1px solid rgba(29, 185, 84, 0.1)',
                            marginTop: '20px'
                        }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '15px' }}>
                                <i className="bi bi-people-fill" style={{ marginRight: '10px' }}></i>
                                Travel Together, Save More
                            </h4>
                            <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: 0 }}>
                                If you are able to travel with one or more (friends/partners), the cost per person will be lower, as transport and accommodation expenses can be shared. This makes the program more cost-effective while still enjoying the same experiences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Itinerary Section */}
                <div style={{ marginTop: '80px', borderTop: '1px solid #eee', paddingTop: '60px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111' }}>Itinerary</h2>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <button 
                                onClick={handleDownloadPDF}
                                disabled={isDownloading}
                                style={{ 
                                    background: 'var(--primary-green)', 
                                    color: 'white',
                                    border: 'none', 
                                    padding: '8px 25px', 
                                    borderRadius: '8px', 
                                    fontWeight: 800, 
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    cursor: isDownloading ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    opacity: isDownloading ? 0.7 : 1
                                }}
                            >
                                <i className={isDownloading ? "bi bi-hourglass-split" : "bi bi-file-earmark-pdf"}></i> 
                                {isDownloading ? 'Generating...' : 'Download PDF'}
                            </button>
                            <button 
                                onClick={() => setAllOpen(!allOpen)}
                                style={{ 
                                    background: 'white', 
                                    border: '1px solid #ddd', 
                                    padding: '8px 20px', 
                                    borderRadius: '8px', 
                                    fontWeight: 700, 
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                <i className={`bi bi-chevron-${allOpen ? 'up' : 'down'}`}></i> {allOpen ? 'Hide all' : 'Show all'}
                            </button>
                        </div>
                    </div>

                    <div ref={itineraryRef} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', padding: '20px', background: 'white' }}>
                        {/* Left Column: Map */}
                        <div>
                            <div 
                                onClick={() => setIsMapZoomed(true)}
                                style={{ 
                                    background: '#f0f9ff', 
                                    borderRadius: '24px', 
                                    height: '400px', 
                                    marginBottom: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    cursor: 'zoom-in',
                                    position: 'relative'
                                }}
                            >
                                <img src={pkg.routeMap || pkg.image} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Sri Lanka Route Map" />
                                <div style={{ 
                                    position: 'absolute', 
                                    bottom: '20px', 
                                    right: '20px', 
                                    background: 'rgba(255,255,255,0.9)', 
                                    padding: '8px 12px', 
                                    borderRadius: '8px', 
                                    fontSize: '0.8rem', 
                                    fontWeight: 700, 
                                    color: '#333',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                }}>
                                    <i className="bi bi-zoom-in"></i> Click to zoom
                                </div>
                            </div>

                            <div style={{ 
                                padding: '25px', 
                                border: '1px solid #eee', 
                                borderRadius: '20px', 
                                background: '#fff' 
                            }}>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#444', lineHeight: 1.6 }}>
                                    This trip generates <strong style={{ borderBottom: '2px solid #333' }}>50 kg</strong> of CO<sub>2</sub>-e per person per day. 
                                    <i className="bi bi-info-circle" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i> 
                                    <a href="#" style={{ color: '#0066cc', textDecoration: 'underline', marginLeft: '5px' }}>Learn more about our climate commitment.</a>
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Accordion */}
                        <div>
                            {pkg.itinerary.map((step, index) => (
                                <ItineraryDay key={step.day} step={step} index={index} forceOpen={allOpen} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Important Notes */}
                {pkg.importantNotes && (
                    <div style={{ marginTop: '80px', padding: '20px 0' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 500, color: '#222', marginBottom: '30px', fontFamily: 'inherit' }}>Important notes</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            {pkg.importantNotes.map((note, i) => (
                                <div key={i} style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.6, display: 'flex', gap: '8px' }}>
                                    <span style={{ fontWeight: 400 }}>{i + 1}.</span>
                                    <span>{note}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Guest Reviews */}
                {pkg.reviews && (
                    <div style={{ marginTop: '80px', borderTop: '1px solid #eee', paddingTop: '80px', position: 'relative' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111', marginBottom: '10px' }}>Guest Reviews</h2>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', color: '#FFD700', fontSize: '1.1rem' }}>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <span style={{ color: '#666', fontSize: '1rem', fontWeight: 700, marginLeft: '10px' }}>5.0 Rating</span>
                            </div>
                        </div>
                        
                        <div style={{ position: 'relative' }}>
                            <button 
                                onClick={() => reviewsRef.current.scrollBy({ left: -reviewsRef.current.offsetWidth, behavior: 'smooth' })}
                                style={{ 
                                    position: 'absolute', left: '-25px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                                    width: '45px', height: '45px', borderRadius: '50%', border: 'none', background: 'white', 
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="bi bi-chevron-left" style={{ fontSize: '1.2rem' }}></i>
                            </button>
                            <button 
                                onClick={() => reviewsRef.current.scrollBy({ left: reviewsRef.current.offsetWidth, behavior: 'smooth' })}
                                style={{ 
                                    position: 'absolute', right: '-25px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                                    width: '45px', height: '45px', borderRadius: '50%', border: 'none', background: 'white', 
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="bi bi-chevron-right" style={{ fontSize: '1.2rem' }}></i>
                            </button>

                            <div ref={reviewsRef} style={{ 
                                display: 'flex', 
                                flexWrap: 'nowrap',
                                gap: '20px', 
                                overflowX: 'auto', 
                                padding: '10px 0 40px 0',
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                                scrollSnapType: 'x mandatory',
                                width: '100%'
                            }} className="reviews-scroll-container">
                                {pkg.reviews.map((review) => (
                                    <div key={review.id} style={{ 
                                        flex: '0 0 calc(25% - 16px)', 
                                        scrollSnapAlign: 'start',
                                        background: 'white',
                                        padding: '20px',
                                        borderRadius: '24px',
                                        border: '1px solid #eee',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 'auto',
                                        minHeight: '320px',
                                        justifyContent: 'space-between',
                                        boxSizing: 'border-box'
                                    }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                                                <div style={{ 
                                                    width: '50px', height: '50px', 
                                                    background: review.color || 'rgba(29, 185, 84, 0.1)', 
                                                    color: '#333', borderRadius: '50%', 
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    fontSize: '1.1rem', fontWeight: 800, border: '1px solid rgba(0,0,0,0.05)'
                                                }}>
                                                    {getInitials(review.name)}
                                                </div>
                                                <div>
                                                    <h4 style={{ margin: '0 0 3px 0', fontSize: '0.95rem', fontWeight: 800, color: '#111' }}>{review.name}</h4>
                                                    <div style={{ display: 'flex', gap: '2px', color: '#FFD700' }}>
                                                        {[...Array(review.rating)].map((_, i) => <i key={i} className="bi bi-star-fill" style={{ fontSize: '0.7rem' }}></i>)}
                                                    </div>
                                                </div>
                                            </div>
                                            <p style={{ margin: '0 0 20px 0', color: '#555', lineHeight: 1.6, fontSize: '0.9rem', fontStyle: 'italic' }}>"{review.comment}"</p>
                                        </div>
                                        <div style={{ borderTop: '1px solid #f5f5f5', paddingTop: '15px' }}>
                                            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '4px' }}>
                                                <strong>Profile:</strong> {review.profile || 'Traveler'}
                                            </div>
                                            <div style={{ fontSize: '0.75rem', color: '#888' }}>
                                                <strong>Tour Plan:</strong> <span style={{ color: 'var(--primary-green)', fontWeight: 600 }}>{review.trip || pkg.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Mobile Sticky Booking Bar */}
            <div className="mobile-booking-bar" style={{
                display: 'none',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'white',
                padding: '15px 25px',
                boxShadow: '0 -10px 30px rgba(0,0,0,0.1)',
                zIndex: 1000,
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #eee'
            }}>
                <div>
                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 800, display: 'block' }}>Starting from</span>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#111' }}>{getPrice()}</span>
                </div>
                <button 
                    onClick={() => navigate(`/inquiry/${pkg.id}?transport=${transport}`)}
                    style={{ 
                        background: 'var(--primary-green)', 
                        color: 'white', 
                        border: 'none', 
                        padding: '12px 30px', 
                        borderRadius: '12px', 
                        fontWeight: 800, 
                        fontSize: '1rem' 
                    }}
                >
                    Book Now
                </button>
            </div>

            <style>
                {`
                @media (max-width: 768px) {
                    .tour-details-page {
                        background: #fdfdfd !important;
                        padding-top: 0 !important;
                        padding-bottom: 100px !important;
                    }
                    
                    /* Glassmorphic Sticky Bar */
                    .mobile-booking-bar {
                        display: flex !important;
                        background: rgba(255, 255, 255, 0.85) !important;
                        backdrop-filter: blur(15px) !important;
                        -webkit-backdrop-filter: blur(15px) !important;
                        padding: 15px 25px !important;
                        border-radius: 20px 20px 0 0 !important;
                        box-shadow: 0 -10px 40px rgba(0,0,0,0.08) !important;
                    }
                    .mobile-booking-bar button {
                        border-radius: 14px !important;
                        padding: 12px 25px !important;
                        box-shadow: 0 8px 20px rgba(29, 185, 84, 0.25) !important;
                    }

                    .tour-details-page > div:nth-child(3) {
                        padding: 0 !important;
                        max-width: 100% !important;
                    }

                    /* Full-width Hero with Overlap Card */
                    .tour-details-page div[style*="height: 500px"] {
                        height: 350px !important;
                        border-radius: 0 !important;
                        margin-bottom: -20px !important;
                    }
                    
                    /* Header Overlay Card */
                    .tour-details-page h1 {
                        position: relative !important;
                        z-index: 10 !important;
                        font-size: 1.7rem !important;
                        background: white !important;
                        border-radius: 30px 30px 0 0 !important;
                        padding: 30px 25px 5px 25px !important;
                        margin: 0 !important;
                    }
                    .tour-details-page div[style*="justify-content: space-between"][style*="align-items: flex-start"] {
                        background: white !important;
                        padding: 0 25px 25px 25px !important;
                        margin-bottom: 15px !important;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.02) !important;
                        border-bottom: 1px solid #f5f5f5 !important;
                    }

                    /* Section Floating Cards */
                    .tour-details-page div[style*="padding: 35px"],
                    .tour-details-page div[style*="padding: 40px"],
                    .inclusions-box, .exclusions-box, .transport-selector-box,
                    .tour-details-page div[style*="padding: 20px 0"] {
                        margin: 0 15px 20px 15px !important;
                        padding: 25px !important;
                        background: white !important;
                        border-radius: 24px !important;
                        border: 1px solid #f0f0f0 !important;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.02) !important;
                    }

                    /* Gallery Thumbnails */
                    .tour-details-page div[style*="grid-template-columns: repeat(5, 1fr)"] {
                        padding: 0 20px 20px 20px !important;
                        background: white !important;
                        margin-bottom: 20px !important;
                        overflow-x: auto !important;
                        display: flex !important;
                        gap: 12px !important;
                    }
                    .tour-details-page div[style*="height: 80px"] {
                        flex: 0 0 65px !important;
                        height: 65px !important;
                        border-radius: 12px !important;
                    }

                    /* Hide Laptop-only pricing/booking */
                    .tour-details-page div[style*="USD"],
                    .tour-details-page button[style*="width: 100%"] {
                        display: none !important;
                    }

                    /* Itinerary Overhaul - Mobile Timeline */
                    .tour-details-page div[style*="grid-template-columns: 1fr 2fr"] {
                        grid-template-columns: 1fr !important;
                        background: white !important;
                        margin: 0 15px 20px 15px !important;
                        padding: 20px !important;
                        border-radius: 24px !important;
                        border: 1px solid #f0f0f0 !important;
                    }
                    .tour-details-page div[style*="height: 400px"] {
                        height: 240px !important;
                        border-radius: 16px !important;
                        margin-bottom: 15px !important;
                    }
                    
                    /* Review Section */
                    .reviews-scroll-container div[style*="flex: 0 0 calc(25% - 16px)"] {
                        flex: 0 0 85% !important;
                        border-radius: 24px !important;
                        margin-left: 15px !important;
                    }
                    .tour-details-page div[style*="scroll-snap-type: x mandatory"] {
                        padding-left: 0 !important;
                        padding-right: 20px !important;
                    }

                    /* Typography Scaling */
                    .tour-details-page h2 {
                        font-size: 1.5rem !important;
                        padding-left: 25px !important;
                        margin-bottom: 15px !important;
                    }
                    .tour-details-page p {
                        font-size: 0.95rem !important;
                        line-height: 1.7 !important;
                    }
                    
                    /* Tabs Scaling */
                    .booking-tabs-container div[style*="display: flex"][style*="gap: 30px"] {
                        gap: 15px !important;
                    }
                    .booking-tabs-container div[style*="font-size: 1rem"] {
                        font-size: 0.9rem !important;
                    }
                }
                `}
            </style>
            <SriLankaGlance />
        </div>
    );
};

export default TourDetails;
