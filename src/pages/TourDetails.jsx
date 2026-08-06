import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourPackages, BUDGET_PROMO_IMG } from '../data/tours';
import { useCurrency } from '../context/CurrencyContext';
import SriLankaGlance from '../components/SriLankaGlance';
import gallerySlide5 from '../assets/e00c2772910971201b0e48853af8577a.jpg';
import gallerySlide6 from '../assets/galle.jpg';
import gallerySlide3 from '../assets/87fd5839db5c013598d55c1c41ee72d5.jpg';
import gallerySlide4 from '../assets/24b02737e3f0ac7e69426d35da060e5a.jpg';
import budgetPromoImg from '../assets/rajiv-perera-b1jeQiJwYQI-unsplash.jpg';
import essentialSlide2 from '../assets/c9643fab2024fdb4eb79ec69b070e545.jpg';
import kandySlide2 from '../assets/a6a35641f1b21f4c5585af9940d2ff7f.jpg';
import kandySlide3 from '../assets/fdc18fa1b8e4c9e72b6d4bbb0e0f44d0.jpg';
import kandySlide4 from '../assets/736c6e4f09706ca19260e0514ce7e05e.jpg';
import kandySlide5 from '../assets/caf37462014cf60348a30fa5d872b724.jpg';
import kandySlide6 from '../assets/288dd8aa9ab1823a1b4254e697d9ec75.jpg';
import southernSlide2 from '../assets/d352c66205dac0176dc451521ba72546.jpg';
import southernSlide3 from '../assets/8eeee338cd666554a60655b357eaa8a8.jpg';
import southernSlide4 from '../assets/1f8f75930498b2c5d3372acb2b1846b7.jpg';
import southernSlide5 from '../assets/a735dcb73a82a89825015f4d36176403.jpg';
import southernSlide6 from '../assets/054ff48fcfa601cd27a05ae96c945843.jpg';
import SpotifyAdCard from '../components/SpotifyAdCard';
import NewsletterSubscribeBanner from '../components/NewsletterSubscribeBanner';
import PromotedExperiences from '../components/PromotedExperiences';
import { useCompare } from '../context/CompareContext';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import highlandsSlide2 from '../assets/f0c858e7c16fbcb3fec67bc7621d7404.jpg';
import highlandsSlide3 from '../assets/ebb55250bfaa890711555fdacda07ae0.jpg';
import highlandsSlide4 from '../assets/6fda26557bbf868bf4ea7cf71dfffe7b.jpg';
import highlandsSlide5 from '../assets/c6470c698cb4fdc62c70539afaff8c54.jpg';
import highlandsSlide6 from '../assets/91ec19edd6e57a947efb3641d58dcfc8.jpg';
import mistSlide2 from '../assets/f95d0cbf13dea94618f645a39d10331e (1).jpg';
import mistSlide3 from '../assets/6dcd6aa51e0c0ec70dff43924b8a235c.jpg';
import mistSlide4 from '../assets/675f3b08f47062cb4c31998d09993803.jpg';
import mistSlide5 from '../assets/028f7ad83600396f7a8e50286b0ba78c.jpg';
import mistSlide6 from '../assets/e264a63d548ae7618df7c7db0cd9245c.jpg';
import galleSlide2 from '../assets/28eed5ff4a30f860780f5251798d342f.jpg';
import galleSlide3 from '../assets/29b450ea3ff426a308ac44a4b6566ebf.jpg';
import galleSlide4 from '../assets/f4441febd0999a390c407b9cfd5422ae.jpg';
import galleSlide5 from '../assets/71e3007dc13ff2793d406e8cc25e96d5.jpg';
import galleSlide6 from '../assets/0d84aa0af7fa47f94946ed5cb1896cd6.jpg';
import kandyHighSlide2 from '../assets/WhatsApp Image 2026-05-24 at 15.59.15.jpeg';
import kandyHighSlide3 from '../assets/0b244be2033db8d252c09ac5952fd2ec.jpg';
import kandyHighSlide4 from '../assets/190b19efa26222b1d393a6085b5d6d3e.jpg';
import kandyHighSlide6 from '../assets/ccabf7721ab68bb424228db7bdb2e13d.jpg';
import adamsPeakSlide2 from '../assets/6323104ee871047c8192d2d3fbe9a5f4.jpg';
import adamsPeakSlide3 from '../assets/96b8916547406115ee3f1240359a92af.jpg';
import adamsPeakSlide4 from '../assets/548ca78544e5070b59f558a0b02cf606.jpg';
import adamsPeakSlide5 from '../assets/0c3aa6595f8fa9d7304e54d629d024c5.jpg';
import adamsPeakSlide6 from '../assets/c826dc63ec0b07b44bbfd80e148a8f03.jpg';
import southernSlide2_new from '../assets/a41fa4f67a6e315638179b50d03d0198.jpg';
import kitulgalaSlide6 from '../assets/LK771D0200-04-E-1280-720.jpg';
import kitulgalaSlide5 from '../assets/fa.jpg';
import kitulgalaSlide4 from '../assets/26.jpg';
import kitulgalaSlide3 from '../assets/dayouting1.jpg';
import kitulgalaSlide2 from '../assets/14914765974.jpg';
import sigiriyaSlide2 from '../assets/IMG_6137-1-scaled.jpeg';
import sigiriyaSlide3 from '../assets/5dfd3f2e2111aba1b9961f042aa21f8a (1).jpg';
import sigiriyaSlide4 from '../assets/28a582f6df4e8171994a22a76540650e.jpg';
import sigiriyaSlide5 from '../assets/2f6794a88ebd86969fb2356ec82057d3.jpg';
import sigiriyaSlide6 from '../assets/f4c352cefadc1549bea9f8a06c016afa.jpg';
import sigiriyaEscapeSlide2 from '../assets/df96c62c290b0f7cb51288e1a6cdbb25 (1).jpg';
import sigiriyaEscapeSlide3 from '../assets/10616d78083ff17e45530b47e969f4a4.jpg';
import sigiriyaEscapeSlide4 from '../assets/d382f4efe9231656c4f21a04ff5e36b9.jpg';
import sigiriyaEscapeSlide5 from '../assets/f98be6281003c7c7e80fcf331faa3e1a.jpg';
import sigiriyaEscapeSlide6 from '../assets/e5a6a83faee0d03f0e2aae72baabba0c.jpg';
import medicalVolunteersCardBg from '../assets/medical_gallery_new_1.jpg';

const ItineraryDay = ({ step, index, forceOpen, isLastDay, isSingleDayTour }) => {
    const [isOpen, setIsOpen] = useState(index === 0);
    const [showOptional, setShowOptional] = useState(false);

    React.useEffect(() => {
        setIsOpen(forceOpen);
    }, [forceOpen]);

    return (
        <div style={{ 
            position: 'relative', 
            paddingLeft: '35px', 
            paddingRight: '10px',
            borderLeft: '3px solid var(--primary-green)',
            marginLeft: '15px',
            borderBottom: '1px solid #f4f4f4',
            background: isOpen ? 'rgba(27, 163, 82, 0.02)' : 'transparent',
            transition: 'background 0.3s ease'
        }}>
            {/* Timeline Node Dot */}
            <div style={{
                position: 'absolute',
                left: '-9px',
                top: '30px',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                background: isOpen ? 'var(--primary-green)' : '#fff',
                border: '3px solid var(--primary-green)',
                boxShadow: isOpen ? '0 0 0 4px rgba(27, 163, 82, 0.2)' : 'none',
                transition: 'all 0.3s ease'
            }} />

            <div 
                onClick={() => setIsOpen(!isOpen)}
                style={{ 
                    padding: '16px 0', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    cursor: 'pointer' 
                }}
            >
                <div style={{ fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ 
                        background: 'var(--primary-green)', 
                        color: '#fff', 
                        padding: '2px 8px', 
                        borderRadius: '6px', 
                        fontSize: '0.75rem', 
                        fontWeight: 800 
                    }}>{isSingleDayTour ? `STOP ${index + 1}` : `DAY ${step.day}`}</span>
                    <span style={{ color: '#111' }}>{step.title.replace(/\s*[–—\-]\s*/g, ' ')}</span>
                </div>
                <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`} style={{ color: 'var(--primary-green)', fontWeight: 800, fontSize: '0.9rem' }}></i>
            </div>
            {isOpen && (
                <div style={{ padding: '0 0 24px 0', color: '#555', lineHeight: 1.6, fontSize: '0.86rem', whiteSpace: 'pre-line' }}>
                    <div className="itinerary-desc-content" dangerouslySetInnerHTML={{ __html: step.desc }} />
                    {step.activities && (
                        <div style={{ 
                            marginTop: '20px', 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', 
                            gap: '10px',
                            background: '#f8fdf9',
                            padding: '16px',
                            borderRadius: '14px',
                            border: '1px solid rgba(27, 163, 82, 0.18)',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                        }}>
                            {step.activities.map((act, i) => {
                                const getIcon = (t) => {
                                    const text = t.toLowerCase();
                                    if (text.includes('breakfast') || text.includes('dining') || text.includes('food') || text.includes('seafood') || text.includes('meal') || text.includes('cooking')) return 'bi bi-cup-hot-fill';
                                    if (text.includes('overnight') || text.includes('hotel') || text.includes('stay') || text.includes('accommodation')) return 'bi bi-house-door-fill';
                                    if (text.includes('beach') || text.includes('coastal') || text.includes('ocean') || text.includes('sunset') || text.includes('viewpoint') || text.includes('sun')) return 'bi bi-sun-fill';
                                    if (text.includes('fort') || text.includes('galle') || text.includes('colonial') || text.includes('history') || text.includes('heritage') || text.includes('temple') || text.includes('culture')) return 'bi bi-bank2';
                                    if (text.includes('safari') || text.includes('elephant') || text.includes('wildlife') || text.includes('park') || text.includes('animal')) return 'bi bi-compass-fill';
                                    if (text.includes('mountain') || text.includes('peak') || text.includes('hike') || text.includes('hill') || text.includes('falls') || text.includes('waterfall') || text.includes('adam')) return 'bi bi-geo-alt-fill';
                                    if (text.includes('train') || text.includes('rail') || text.includes('journey')) return 'bi bi-train-front-fill';
                                    if (text.includes('marine') || text.includes('snorkel') || text.includes('surf') || text.includes('turtle') || text.includes('river') || text.includes('water')) return 'bi bi-water';
                                    if (text.includes('tea') || text.includes('plantation')) return 'bi bi-tree-fill';
                                    if (text.includes('give back') || text.includes('volunteer') || text.includes('community')) return 'bi bi-heart-fill';
                                    if (text.includes('transport') || text.includes('transfer') || text.includes('drive')) return 'bi bi-car-front-fill';
                                    return 'bi bi-check-circle-fill';
                                };
                                return (
                                    <div key={i} style={{ 
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontSize: '0.8rem', 
                                        fontWeight: 700,
                                        color: '#1a2332',
                                        background: '#ffffff',
                                        padding: '8px 12px',
                                        borderRadius: '10px',
                                        border: '1px solid #eef6f0',
                                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)'
                                    }}>
                                        <i className={getIcon(act)} style={{ 
                                            color: 'var(--primary-green)', 
                                            fontSize: '0.9rem'
                                        }}></i>
                                        {act}
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {step.optionalActivities && (
                        <div style={{ marginTop: '25px' }}>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowOptional(!showOptional);
                                }}
                                style={{ 
                                    padding: '10px 22px', 
                                    fontSize: '0.8rem', 
                                    background: '#fff', 
                                    color: '#333', 
                                    border: '1.5px solid #e0e0e0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    borderRadius: '100px',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    outline: 'none'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.background = '#f5f5f5'; e.currentTarget.style.borderColor = '#999'; }}
                                onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e0e0e0'; }}
                            >
                                <i className={`bi bi-${showOptional ? 'dash' : 'plus'}-lg`} style={{ color: 'var(--primary-green)', fontWeight: 900 }}></i>
                                {showOptional ? 'Hide' : 'Show'} Optional Activities
                            </button>
                            
                            {showOptional && (
                                <div style={{ 
                                    marginTop: '15px', 
                                    padding: '24px', 
                                    background: '#f9f9f9', 
                                    borderRadius: '20px',
                                    border: '1px dashed #ddd',
                                    animation: 'fadeInUp 0.4s ease'
                                }}>
                                    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                        {step.optionalActivities.map((act, i) => {
                                            const getOptIcon = (t) => {
                                                const text = t.toLowerCase();
                                                if (text.includes('safari') || text.includes('elephant') || text.includes('park') || text.includes('national')) return 'bi bi-compass';
                                                if (text.includes('surf') || text.includes('snorkel') || text.includes('scuba') || text.includes('river') || text.includes('marine')) return 'bi bi-water';
                                                if (text.includes('turtle')) return 'bi bi-life-preserver';
                                                if (text.includes('whale')) return 'bi bi-water';
                                                if (text.includes('tea') || text.includes('tasting')) return 'bi bi-cup-hot';
                                                if (text.includes('zipline') || text.includes('hike') || text.includes('adventure') || text.includes('walk')) return 'bi bi-signpost-split';
                                                if (text.includes('cooking') || text.includes('dining')) return 'bi bi-egg-fried';
                                                if (text.includes('ayurvedic') || text.includes('massage')) return 'bi bi-flower1';
                                                return 'bi bi-plus-circle';
                                            };
                                            return (
                                                <li key={i} style={{ 
                                                    marginBottom: '12px', 
                                                    display: 'flex', 
                                                    gap: '12px', 
                                                    alignItems: 'center',
                                                    fontSize: '0.95rem',
                                                    color: '#333',
                                                    fontWeight: 500
                                                }}>
                                                    <i className={getOptIcon(act)} style={{ color: 'var(--primary-green)', fontSize: '1rem' }}></i>
                                                    <span>{act}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                    {isLastDay && (
                        <div style={{
                            marginTop: '35px',
                            padding: '30px',
                            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                            borderRadius: '24px',
                            border: '1px solid rgba(27, 163, 82, 0.3)',
                            boxShadow: '0 10px 25px rgba(27, 163, 82, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ 
                                    background: 'var(--primary-green)', 
                                    color: 'white', 
                                    width: '32px', 
                                    height: '32px', 
                                    borderRadius: '50%', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontSize: '1rem'
                                }}>
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900, color: '#111' }}>Continue in an Impactful Way</h4>
                            </div>
                            <p style={{ margin: 0, fontSize: '1rem', color: '#444', lineHeight: 1.6, fontWeight: 500 }}>
                                Join our community-driven volunteering programs to make a real difference. From wildlife conservation to local education, your journey can leave a lasting legacy.
                            </p>
                            <a 
                                href="/volunteer"
                                style={{
                                    alignSelf: 'flex-start',
                                    background: 'var(--primary-green)',
                                    color: 'white',
                                    textDecoration: 'none',
                                    padding: '12px 25px',
                                    borderRadius: '12px',
                                    fontWeight: 800,
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 12px rgba(27, 163, 82, 0.2)'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(27, 163, 82, 0.3)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(27, 163, 82, 0.2)'; }}
                            >
                                Explore Volunteering Programs <i className="bi bi-arrow-right"></i>
                            </a>
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
    const { addToCompare, compareList, removeFromCompare } = useCompare();
    const { formatPrice } = useCurrency();

    const pkg = tourPackages.find(p => p.id === parseInt(id));
    const reviews = pkg?.reviews || [];

    const [transport, setTransport] = useState('taxi');
    const [activeBookingTab, setActiveBookingTab] = useState('Is this trip right for you?');
    const [allOpen, setAllOpen] = useState(false);
    const [isMapZoomed, setIsMapZoomed] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const itineraryRef = React.useRef(null);
    const reviewsRef = React.useRef(null);
    const [reviewSearch, setReviewSearch] = useState('');
    const [reviewSort, setReviewSort] = useState('Most insightful');
    const [likedReviews, setLikedReviews] = useState({});
    const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);
    
    const [activeImage, setActiveImage] = useState(pkg ? pkg.image : '');
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const galleryImages = [
        pkg?.image || '', 
        (pkg?.id === 13) ? sigiriyaEscapeSlide2 : ((pkg?.id === 12) ? sigiriyaSlide2 : ((pkg?.id === 8) ? kandySlide2 : (pkg?.id === 11 ? kitulgalaSlide2 : (pkg?.id === 2 ? southernSlide2_new : (pkg?.id === 3 ? highlandsSlide2 : (pkg?.id === 4 ? mistSlide2 : (pkg?.id === 6 ? galleSlide2 : (pkg?.id === 9 ? kandyHighSlide2 : (pkg?.id === 10 ? adamsPeakSlide2 : essentialSlide2))))))))), 
        (pkg?.id === 13) ? sigiriyaEscapeSlide3 : ((pkg?.id === 12) ? sigiriyaSlide3 : ((pkg?.id === 8) ? kandySlide3 : (pkg?.id === 11 ? kitulgalaSlide3 : (pkg?.id === 2 ? southernSlide3 : (pkg?.id === 3 ? highlandsSlide3 : (pkg?.id === 4 ? mistSlide3 : (pkg?.id === 6 ? galleSlide3 : (pkg?.id === 9 ? kandyHighSlide3 : (pkg?.id === 10 ? adamsPeakSlide3 : gallerySlide3))))))))), 
        (pkg?.id === 13) ? sigiriyaEscapeSlide4 : ((pkg?.id === 12) ? sigiriyaSlide4 : ((pkg?.id === 8) ? kandySlide4 : (pkg?.id === 11 ? kitulgalaSlide4 : (pkg?.id === 2 ? southernSlide4 : (pkg?.id === 3 ? highlandsSlide4 : (pkg?.id === 4 ? mistSlide4 : (pkg?.id === 6 ? galleSlide4 : (pkg?.id === 9 ? kandyHighSlide4 : (pkg?.id === 10 ? adamsPeakSlide4 : gallerySlide4))))))))), 
        (pkg?.id === 13) ? sigiriyaEscapeSlide5 : ((pkg?.id === 12) ? sigiriyaSlide5 : ((pkg?.id === 8) ? kandySlide5 : (pkg?.id === 11 ? kitulgalaSlide5 : (pkg?.id === 2 ? southernSlide2 : (pkg?.id === 3 ? highlandsSlide5 : (pkg?.id === 4 ? mistSlide5 : (pkg?.id === 6 ? galleSlide5 : (pkg?.id === 10 ? adamsPeakSlide5 : gallerySlide5)))))))), 
        (pkg?.id === 13) ? sigiriyaEscapeSlide6 : ((pkg?.id === 12) ? sigiriyaSlide6 : ((pkg?.id === 8) ? kandySlide6 : (pkg?.id === 11 ? kitulgalaSlide6 : (pkg?.id === 2 ? southernSlide6 : (pkg?.id === 3 ? highlandsSlide6 : (pkg?.id === 4 ? mistSlide6 : (pkg?.id === 6 ? galleSlide6 : (pkg?.id === 10 ? adamsPeakSlide6 : gallerySlide6))))))))
    ];
    const sliderRef = React.useRef(null);
    
    // Auto-slide effect - resets on activeImageIndex change (manual or auto)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [galleryImages.length, activeImageIndex]);

    // Sync active image when index changes
    useEffect(() => {
        setActiveImage(galleryImages[activeImageIndex]);
        
        // Auto-scroll the mobile slider
        if (sliderRef.current && window.innerWidth <= 768) {
            const slideWidth = sliderRef.current.offsetWidth;
            sliderRef.current.scrollTo({
                left: slideWidth * activeImageIndex,
                behavior: 'smooth'
            });
        }
    }, [activeImageIndex, galleryImages]);
    
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
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
            const discount = pkg.id === 1 ? 200 : (pkg.id === 2 ? 110 : (pkg.id === 3 ? 200 : (pkg.id === 6 ? 100 : (pkg.id === 8 ? 35 : (pkg.id === 9 ? 40 : (pkg.id === 10 ? 90 : (pkg.id === 12 ? 90 : (pkg.id === 13 ? 110 : 300))))))));
            return currentBase - discount;
        }
        if (transport === 'van') {
            return currentBase + (pkg.id === 9 ? 140 : (pkg.id === 12 ? 40 : (pkg.id === 13 ? 65 : 150)));
        }
        return currentBase;
    };

    const getBaggageInfo = () => {
        if (transport === 'van') return "Up to 7 large bags + 5 small bags";
        if (transport === 'tuktuk') return "Up to 2 large bags OR 3 small bags";
        return "Up to 3 large bags + 2 small bags"; // Default for Car
    };

    const getOriginalPrice = () => {
        const basePriceVal = parseInt(pkg.price.replace('$', '').replace(',', ''));
        let currentBase = basePriceVal;
        if (pkg.id === 1) currentBase = 1050;
        if (pkg.id === 2) currentBase = 750;
        
        // If not hardcoded, default to +25%
        if (pkg.id !== 1 && pkg.id !== 2) {
            currentBase = Math.round(basePriceVal * 1.25);
        }
        
        return currentBase;
    };

    return (
        <div className="tour-details-page">
            <style>
                {`
                .tour-details-page {
                    background: #fff;
                    padding-top: 20px;
                }
                .itinerary-scroll-container::-webkit-scrollbar {
                    width: 6px;
                }
                .itinerary-scroll-container::-webkit-scrollbar-track {
                    background: #f1f8f3;
                    border-radius: 10px;
                }
                .itinerary-scroll-container::-webkit-scrollbar-thumb {
                    background: var(--primary-green);
                    border-radius: 10px;
                }
                .itinerary-scroll-container::-webkit-scrollbar-thumb:hover {
                    background: #128240;
                }
                .itinerary-desc-content {
                    font-size: 0.86rem;
                    line-height: 1.6;
                    color: #555;
                }
                .itinerary-desc-content b, .itinerary-desc-content strong {
                    color: #111;
                    font-weight: 800;
                }
                .itinerary-desc-content ul {
                    margin-top: 10px !important;
                    padding-left: 5px !important;
                    list-style: none !important;
                }
                .itinerary-desc-content li {
                    margin-bottom: 8px !important;
                    position: relative !important;
                    padding-left: 22px !important;
                    line-height: 1.5 !important;
                    font-size: 0.86rem !important;
                }
                .itinerary-desc-content li::before {
                    content: '•';
                    position: absolute;
                    left: 0;
                    color: var(--primary-green);
                    font-weight: 900;
                    font-size: 1.4rem;
                    line-height: 1;
                    top: -2px;
                }
                .tour-details-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 30px;
                }
                .details-grid {
                    display: grid;
                    grid-template-columns: 1.4fr 1fr;
                    gap: 40px;
                    margin-bottom: 60px;
                    align-items: start;
                }
                .summary-card-container {
                    position: sticky;
                    top: 100px;
                    align-self: start;
                    z-index: 100;
                }
                .tour-gallery-container {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .main-gallery-slider {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    height: 500px;
                    margin-bottom: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    background: #f0f0f0;
                }
                .gallery-slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    pointer-events: none;
                    z-index: 1;
                }
                .gallery-slide.active {
                    opacity: 1;
                    pointer-events: auto;
                    z-index: 2;
                }
                .gallery-slide img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .gallery-nav-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 45px;
                    height: 45px;
                    background: rgba(255, 255, 255, 0.9);
                    border: none;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 10;
                    color: #111;
                    font-size: 1.2rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                    opacity: 0;
                }
                .main-gallery-slider:hover .gallery-nav-btn {
                    opacity: 1;
                }
                .gallery-nav-btn:hover {
                    background: var(--primary-green);
                    color: white;
                    transform: translateY(-50%) scale(1.1);
                }
                .gallery-nav-prev { left: 20px; }
                .gallery-nav-next { right: 20px; }
                .gallery-thumbnails {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 15px;
                }
                .thumb-item {
                    height: 80px;
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: pointer;
                    border: 3px solid transparent;
                    transition: all 0.2s ease;
                    position: relative;
                }
                .thumb-item.active {
                    border-color: var(--primary-green);
                }
                .thumb-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.7;
                }
                .thumb-item.active img {
                    opacity: 1;
                }
                .thumb-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 800;
                    font-size: 0.7rem;
                    text-align: center;
                    padding: 5px;
                }

                .slider-dots {
                    position: absolute;
                    bottom: 25px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 8px;
                    z-index: 20;
                    padding: 8px 12px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 50px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .dot.active {
                    background: var(--primary-green);
                    width: 24px;
                    border-radius: 10px;
                    box-shadow: 0 0 15px rgba(27, 163, 82, 0.6);
                }

                .mobile-sticky-bar {
                    display: block;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(40px) saturate(200%);
                    -webkit-backdrop-filter: blur(40px) saturate(200%);
                    padding: 15px 5%;
                    box-shadow: 0 -10px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6);
                    z-index: 10000;
                    border-top: 1px solid rgba(255, 255, 255, 0.4);
                    width: 100%;
                }
                .sticky-bar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .price-tag {
                    display: flex;
                    flex-direction: column;
                }
                .from-text {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #666;
                    font-weight: 700;
                    margin-bottom: 2px;
                }
                .price-amount {
                    font-size: 1.6rem;
                    font-weight: 900;
                    color: #111;
                }
                .sticky-book-btn {
                    background: #1a2332;
                    color: white;
                    padding: 15px 45px;
                    border-radius: 14px;
                    font-weight: 900;
                    font-size: 1.1rem;
                    border: none;
                    box-shadow: 0 8px 25px rgba(26, 35, 50, 0.3);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .sticky-book-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(26, 35, 50, 0.4);
                }

                /* Ensure Chat Bot is not covered by Sticky Bar */
                .chat-container {
                    bottom: 100px !important;
                }

                .impact-section {
                    margin-top: 60px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-bottom: 60px;
                }
                .impact-card {
                    background: #f8fcf9;
                    border: 1px solid rgba(27, 163, 82, 0.1);
                    border-radius: 24px;
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    transition: all 0.3s ease;
                }
                .impact-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(27, 163, 82, 0.08);
                    border-color: rgba(27, 163, 82, 0.3);
                }
                .impact-icon {
                    width: 60px;
                    height: 60px;
                    background: var(--primary-green);
                    color: white;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.8rem;
                    margin-bottom: 25px;
                    box-shadow: 0 10px 20px rgba(27, 163, 82, 0.2);
                }
                .impact-card h3 {
                    font-size: 1.6rem;
                    font-weight: 800;
                    margin: 0 0 15px 0;
                    color: #111;
                }
                .impact-card p {
                    font-size: 1.05rem;
                    line-height: 1.6;
                    color: #555;
                    margin: 0 0 30px 0;
                }
                .impact-btn {
                    margin-top: auto;
                    padding: 14px 30px;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 1rem;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                }
                .btn-green {
                    background: var(--primary-green);
                    color: white;
                }
                .btn-green:hover {
                    background: #107c41;
                    box-shadow: 0 8px 20px rgba(27, 163, 82, 0.3);
                }
                .btn-outline {
                    background: white;
                    color: #111;
                    border: 1px solid #ddd;
                }
                .btn-outline:hover {
                    border-color: #111;
                    background: #f9f9f9;
                }

                @media (max-width: 768px) {
                    .impact-section {
                        grid-template-columns: 1fr;
                        margin-bottom: 40px;
                    }
                    .impact-card {
                        padding: 30px;
                    }
                }

                @media (max-width: 1024px) {
                    * {
                        box-sizing: border-box !important;
                    }
                    .tour-details-page {
                        padding-top: 0 !important;
                        overflow-x: hidden !important;
                    }
                    .details-main-content {
                        padding: 0 10px !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .details-grid, .content-grid {
                        grid-template-columns: 1fr !important;
                        display: block !important;
                        width: 100% !important;
                    }
                    .tour-overview, .summary-card-container {
                        width: 100% !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        position: static !important;
                    }
                    .before-you-book-box {
                        padding: 20px !important;
                        border-radius: 20px !important;
                        margin-top: 30px !important;
                        width: auto !important;
                        margin-left: 5px !important;
                        margin-right: 5px !important;
                    }
                    .overview-text {
                        padding: 0 10px !important;
                        font-size: 1rem !important;
                        line-height: 1.6 !important;
                    }
                    .section-title {
                        padding: 0 10px !important;
                        font-size: 1.8rem !important;
                        margin-bottom: 15px !important;
                    }
                    .tour-details-header {
                        display: flex !important;
                        flex-direction: row !important;
                        align-items: center !important;
                        justify-content: space-between !important;
                        gap: 10px !important;
                        padding: 20px 15px !important;
                        margin: 0 !important;
                    }
                    .tour-title {
                        font-size: 1.1rem !important;
                        margin: 0 !important;
                        line-height: 1.2 !important;
                        flex: 1 !important;
                    }
                    .sale-badge {
                        padding: 4px 10px !important;
                        font-size: 0.55rem !important;
                        white-space: nowrap !important;
                        flex-shrink: 0 !important;
                    }
                    /* Mobile Slider Fix */
                    .tour-gallery-container {
                        width: auto !important;
                        padding: 0 !important;
                        margin: 0 15px 15px 15px !important;
                    }
                    .main-gallery-slider {
                        display: flex !important;
                        overflow-x: auto !important;
                        scroll-snap-type: x mandatory;
                        height: 450px !important;
                        border-radius: 20px !important;
                        background: #f0f0f0;
                    }
                    .gallery-slide {
                        display: block !important;
                        position: relative !important;
                        flex: 0 0 100% !important;
                        scroll-snap-align: start;
                        opacity: 1 !important;
                        pointer-events: auto !important;
                        transition: none !important;
                    }
                    .gallery-nav-btn {
                        display: none !important;
                    }
                    .gallery-thumbnails {
                        display: none !important;
                    }
                    .slider-dots {
                        bottom: 40px !important;
                    }
                    p, span, h1, h2, h3, h4, h5 {
                        overflow-wrap: break-word !important;
                        word-wrap: break-word !important;
                    }
                }

                /* Itinerary & Buttons Mobile Fix */
                @media (max-width: 1024px) {
                    .itinerary-header-container {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 20px !important;
                        margin-bottom: 30px !important;
                        padding: 0 20px !important;
                    }
                    .itinerary-header-container h2 {
                        font-size: 1.8rem !important;
                        margin: 0 !important;
                    }
                    .itinerary-header-container > div {
                        width: 100% !important;
                        display: flex !important;
                        gap: 10px !important;
                    }
                    .itinerary-header-container button {
                        flex: 1 !important;
                        padding: 12px 10px !important;
                        font-size: 0.8rem !important;
                        justify-content: center !important;
                        border-radius: 12px !important;
                    }
                    .itinerary-content-grid {
                        grid-template-columns: 1fr !important;
                        gap: 30px !important;
                        padding: 10px 15px !important;
                    }
                    .important-notes-section {
                        padding: 20px 20px !important;
                        margin-top: 50px !important;
                    }
                    .important-notes-section h2 {
                        font-size: 1.8rem !important;
                        margin-bottom: 20px !important;
                    }
                    .why-love-section {
                        display: none !important;
                    }
                    .inclusions-box, .exclusions-box, .transport-selector-box {
                        padding: 25px !important;
                        margin: 20px 15px !important;
                        width: auto !important;
                        border-radius: 20px !important;
                    }
                    .inclusions-box h5, .exclusions-box h5 {
                        font-size: 1.15rem !important;
                        margin-bottom: 15px !important;
                    }
                    .transport-selector-box {
                        background: white !important;
                        color: #111 !important;
                        padding: 20px !important;
                        margin: 20px 15px !important;
                        width: auto !important;
                        border-radius: 16px !important;
                        border: 1px solid #eee !important;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.05) !important;
                    }
                    .transport-selector-box label {
                        font-size: 0.8rem !important;
                        font-weight: 800 !important;
                        margin-bottom: 8px !important;
                        display: block !important;
                        color: #111 !important;
                        text-transform: uppercase !important;
                        letter-spacing: 0.5px !important;
                    }
                    .transport-selector-box select {
                        background: #fcfcfc !important;
                        color: #333 !important;
                        padding: 12px 15px !important;
                        font-size: 0.95rem !important;
                        border: 1px solid #eee !important;
                        border-radius: 12px !important;
                        width: 100% !important;
                        outline: none !important;
                        cursor: pointer !important;
                        font-weight: 700 !important;
                        appearance: none !important;
                        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
                        background-repeat: no-repeat !important;
                        background-position: right 15px center !important;
                        background-size: 15px !important;
                    }
                    .transport-selector-box select option {
                        background: white !important;
                        color: #333 !important;
                    }

                    /* Solid Full-Width Sticky Bar */
                    .mobile-sticky-bar {
                        display: block !important;
                        position: fixed !important;
                        bottom: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        background: rgba(255, 255, 255, 0.4) !important;
                        backdrop-filter: blur(40px) saturate(200%) !important;
                        -webkit-backdrop-filter: blur(40px) saturate(200%) !important;
                        padding: 15px 5% !important;
                        box-shadow: 0 -10px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6) !important;
                        z-index: 10000 !important;
                        border-top: 1px solid rgba(255, 255, 255, 0.4) !important;
                        width: 100% !important;
                        border-radius: 0 !important;
                        max-width: none !important;
                        margin: 0 !important;
                    }
                    .sticky-bar-content {
                        display: flex !important;
                        justify-content: space-between !important;
                        align-items: center !important;
                        width: 100% !important;
                    }
                    .price-tag {
                        display: flex !important;
                        flex-direction: column !important;
                    }
                    .from-text {
                        font-size: 0.65rem !important;
                        text-transform: uppercase !important;
                        letter-spacing: 1px !important;
                        color: #666 !important;
                        font-weight: 800 !important;
                    }
                    .price-amount {
                        font-size: 1.2rem !important;
                        font-weight: 900 !important;
                        color: #111 !important;
                    }
                    .sticky-book-btn {
                        background: #1a2332 !important;
                        color: white !important;
                        padding: 12px 28px !important;
                        border-radius: 12px !important;
                        font-weight: 900 !important;
                        font-size: 0.9rem !important;
                        border: none !important;
                        box-shadow: 0 8px 20px rgba(26, 35, 50, 0.2) !important;
                        transition: all 0.3s ease !important;
                    }
                }

                /* Review Section Styles */
                .reviews-container {
                    margin-top: 80px;
                    border-top: 1px solid #eee;
                    padding-top: 80px;
                    padding-left: 60px;
                    padding-right: 60px;
                    max-width: 1100px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .reviews-summary {
                    display: grid;
                    grid-template-columns: 250px 1fr;
                    gap: 60px;
                    margin-bottom: 40px;
                    align-items: center;
                }
                .rating-large {
                    text-align: center;
                }
                .rating-large h1 {
                    font-size: 4rem;
                    font-weight: 800;
                    margin: 0;
                    line-height: 1;
                    color: #111;
                }
                .rating-large .stars {
                    color: var(--primary-green);
                    font-size: 1.8rem;
                    margin: 15px 0;
                    display: flex;
                    justify-content: center;
                    gap: 4px;
                }
                .rating-large p {
                    color: #555;
                    font-size: 0.95rem;
                    margin: 0;
                    font-weight: 500;
                }
                .rating-breakdown {
                    max-width: 500px;
                }
                .breakdown-title {
                    font-size: 0.9rem;
                    color: #666;
                    margin-bottom: 20px;
                }
                .breakdown-row {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 12px;
                }
                .breakdown-label {
                    min-width: 60px;
                    font-size: 0.9rem;
                    color: #111;
                    font-weight: 500;
                }
                .breakdown-bar-container {
                    flex: 1;
                    height: 8px;
                    background: #eee;
                    border-radius: 10px;
                    overflow: hidden;
                }
                .breakdown-bar {
                    height: 100%;
                    border-radius: 10px;
                    position: relative;
                    overflow: hidden;
                }
                .breakdown-bar.star-5 { background: #1ba352; }
                .breakdown-bar.star-4 { background: #84cc16; }
                .breakdown-bar.star-3 { background: #eab308; }
                .breakdown-bar.star-2 { background: #f97316; }
                .breakdown-bar.star-1 { background: #ef4444; }
                
                @keyframes sleekShimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .breakdown-bar.star-5::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
                    animation: sleekShimmer 2.2s infinite cubic-bezier(0.4, 0, 0.2, 1);
                }
                .breakdown-count {
                    min-width: 30px;
                    text-align: right;
                    font-size: 0.9rem;
                    color: #111;
                    font-weight: 500;
                }
                .trust-badge {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 30px;
                    font-size: 0.95rem;
                    color: #111;
                    font-weight: 600;
                }
                .trust-badge i.bi-patch-check-fill {
                    color: #111;
                }
                .reviews-controls {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 40px 0;
                    padding-top: 30px;
                    border-top: 1px solid #eee;
                    gap: 20px;
                }
                .search-reviews {
                    flex: 1;
                    max-width: 500px;
                    position: relative;
                }
                .search-reviews input {
                    width: 100%;
                    padding: 14px 20px 14px 45px;
                    border: 1px solid #ddd;
                    border-radius: 100px;
                    font-size: 1rem;
                    outline: none;
                    transition: border-color 0.3s;
                }
                .search-reviews input:focus {
                    border-color: var(--primary-green);
                }
                .search-reviews i {
                    position: absolute;
                    left: 18px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #666;
                    font-size: 1.1rem;
                }
                .sort-reviews {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .sort-reviews select {
                    padding: 12px 20px;
                    border: 1px solid #ddd;
                    border-radius: 100px;
                    font-size: 0.95rem;
                    font-weight: 600;
                    outline: none;
                    cursor: pointer;
                    appearance: none;
                    background: #fff url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 15px center;
                    background-size: 15px;
                    min-width: 200px;
                }
                .review-card-vertical {
                    padding: 30px 0;
                    border-bottom: 1px solid #eee;
                }
                .review-card-vertical:last-child {
                    border-bottom: none;
                }
                .review-stars {
                    color: var(--primary-green);
                    font-size: 0.9rem;
                    margin-bottom: 12px;
                    display: flex;
                    gap: 2px;
                }
                .review-title {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: #111;
                    margin: 0 0 8px 0;
                }
                .review-meta {
                    font-size: 0.95rem;
                    color: #666;
                    margin-bottom: 20px;
                }
                .review-text {
                    font-size: 1.05rem;
                    line-height: 1.6;
                    color: #333;
                    margin: 0 0 20px 0;
                }
                .review-actions {
                    display: flex;
                    gap: 25px;
                    color: #111;
                }
                .review-action {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 1.1rem;
                    cursor: pointer;
                    opacity: 0.7;
                    transition: opacity 0.2s;
                }
                .review-action:hover {
                    opacity: 1;
                }
                .review-images-container {
                    display: flex;
                    gap: 15px;
                    margin-top: 15px;
                    margin-bottom: 20px;
                }
                .review-img-wrapper {
                    width: 180px;
                    height: 120px;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(0,0,0,0.06);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.04);
                    cursor: pointer;
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
                }
                .review-img-wrapper:hover {
                    transform: translateY(-4px) scale(1.02);
                    box-shadow: 0 12px 25px rgba(0,0,0,0.08);
                }
                .review-img-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .review-img-wrapper:hover img {
                    transform: scale(1.05);
                }

                @media (max-width: 768px) {
                    .reviews-container, .also-bought-container {
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                    .reviews-summary {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .reviews-controls {
                        flex-direction: column;
                        align-items: stretch;
                    }
                }

                /* Also Bought Section Styles */
                .also-bought-container {
                    margin-top: 80px;
                    border-top: 1px solid #eee;
                    padding-top: 60px;
                    margin-bottom: 60px;
                    padding-left: 0;
                    padding-right: 0;
                    max-width: 1300px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .also-bought-title {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 25px;
                }
                .also-bought-grid {
                    display: flex;
                    gap: 25px;
                    overflow-x: auto;
                    padding: 10px 0 35px 0;
                    scrollbar-width: none;
                    ms-overflow-style: none;
                }
                .also-bought-grid::-webkit-scrollbar {
                    display: none;
                }
                .tour-card-mini {
                    flex: 0 0 320px;
                    background: white;
                    border-radius: 16px;
                    border: 1px solid #eee;
                    overflow: hidden;
                    transition: transform 0.3s, box-shadow 0.3s;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
                }
                .tour-card-mini:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 16px 35px rgba(0,0,0,0.1);
                }
                .card-image-wrapper {
                    position: relative;
                    height: 200px;
                }
                .card-image-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .heart-icon {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    width: 34px;
                    height: 34px;
                    background: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
                    color: #666;
                    font-size: 0.95rem;
                }
                .category-tag {
                    position: absolute;
                    bottom: 12px;
                    left: 12px;
                    background: rgba(0,0,0,0.7);
                    backdrop-filter: blur(4px);
                    color: white;
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.3px;
                }
                .card-content {
                    padding: 18px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .card-location {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.8rem;
                    color: #666;
                    margin-bottom: 6px;
                }
                .card-rating {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.85rem;
                    color: #111;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .card-rating i {
                    color: var(--primary-green);
                }
                .card-title {
                    font-size: 1.0rem;
                    font-weight: 800;
                    color: #111;
                    line-height: 1.4;
                    margin-bottom: 12px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    height: 2.8em;
                }
                .card-features {
                    margin-bottom: 12px;
                }
                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.8rem;
                    color: #555;
                    margin-bottom: 5px;
                }
                .card-price {
                    margin-top: auto;
                    font-size: 0.88rem;
                    color: #555;
                }
                .card-price strong {
                    font-size: 1.15rem;
                    font-weight: 900;
                    color: #111;
                }
 
                @media (max-width: 1024px) {
                    .tour-card-mini {
                        flex: 0 0 180px;
                    }
                    .card-image-wrapper {
                        height: 110px;
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

            <div className="tour-details-section" style={{ background: '#ffffff', padding: '40px 0 60px 0' }}>
                <div className="details-main-content" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 5%' }}>
                    {/* Header: Title & Sale Badge */}
                <div className="tour-details-header">
                    <h1 className="tour-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#111', margin: 0 }}>
                        {pkg.name}
                    </h1>
                    <span className="sale-badge" style={{ 
                        background: '#107c41', 
                        color: 'white', 
                        padding: '8px 20px', 
                        borderRadius: '50px', 
                        fontSize: '0.75rem', 
                        fontWeight: 800, 
                        textTransform: pkg.id === 6 ? 'none' : 'lowercase',
                        boxShadow: '0 4px 12px rgba(16, 124, 65, 0.2)'
                    }}>{pkg.id === 6 ? 'Sale now on tuk tuk 220usd' : 'Sale now on'}</span>
                </div>

                {/* Gallery & Summary Card Grid */}
                <div className="details-grid hero-grid">
                    
                    {/* Gallery Section */}
                    <div className="tour-gallery-container">
                        <div className="main-gallery-slider" ref={sliderRef}>
                            {galleryImages.map((img, i) => (
                                <div 
                                    key={i} 
                                    className={`gallery-slide ${activeImageIndex === i ? 'active' : ''}`}
                                    onClick={() => setActiveImageIndex(i)}
                                >
                                    <img src={img} alt={`${pkg.name} ${i + 1}`} />
                                </div>
                            ))}
                            
                            {/* Navigation Arrows for Laptop */}
                            <button 
                                className="gallery-nav-btn gallery-nav-prev"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                                }}
                            >
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button 
                                className="gallery-nav-btn gallery-nav-next"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
                                }}
                            >
                                <i className="bi bi-chevron-right"></i>
                            </button>

                            {/* Sliding Dots Indicator */}
                            <div className="slider-dots">
                                {galleryImages.map((_, i) => (
                                    <div 
                                        key={i} 
                                        className={`dot ${activeImageIndex === i ? 'active' : ''}`}
                                        onClick={() => setActiveImageIndex(i)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Desktop Thumbnails */}
                        <div className="gallery-thumbnails">
                            {galleryImages.map((img, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => setActiveImageIndex(i)}
                                    className={`thumb-item ${activeImageIndex === i ? 'active' : ''}`}
                                >
                                    <img src={img} />
                                </div>
                            ))}
                        </div>

                        {/* Book Ahead Banner */}
                        <div style={{
                            marginTop: '20px',
                            background: '#f2f2f2',
                            borderRadius: '8px',
                            padding: '12px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <i className="bi bi-fire" style={{ color: 'var(--primary-green)', fontSize: '1.2rem', display: 'flex', marginTop: '-2px' }}></i>
                            <div style={{ fontSize: '0.95rem', color: '#111' }}>
                                <strong style={{ fontWeight: 800 }}>Book ahead!</strong> <span style={{ fontWeight: 500 }}>On average, this is booked 7 days in advance.</span>
                            </div>
                        </div>

                        {/* Volunteering Banner */}
                        <div style={{
                            marginTop: '25px',
                            background: '#ffffff',
                            borderRadius: '20px',
                            border: '1px solid #e2e8f0',
                            padding: '24px 28px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                            gap: '20px'
                        }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                    <span style={{ background: 'rgba(27, 163, 82, 0.1)', color: 'var(--primary-green)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Give Back</span>
                                    <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 600 }}>Make Your Trip Meaningful</span>
                                </div>
                                <h3 style={{ color: '#0f172a', fontSize: '1.25rem', fontWeight: 800, margin: '0 0 6px 0', lineHeight: 1.3 }}>
                                    Add Volunteering to Your Journey
                                </h3>
                                <p style={{ color: '#475569', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
                                    Make a real impact during your stay in Sri Lanka with our community and wildlife programs.
                                </p>
                            </div>
                            
                            <div style={{ flexShrink: 0 }}>
                                <a href="/volunteer" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'var(--primary-green)',
                                    color: 'white',
                                    padding: '12px 22px',
                                    borderRadius: '12px',
                                    textDecoration: 'none',
                                    fontWeight: 800,
                                    fontSize: '0.88rem',
                                    transition: 'all 0.2s ease',
                                    boxShadow: '0 4px 12px rgba(27,163,82,0.2)',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    Explore Programs <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Summary Card Section */}
                    <div className="summary-card-container">
                        <div className="summary-card" style={{
                            background: 'linear-gradient(180deg, #ffffff 0%, #fafcff 100%)',
                            padding: '32px 28px',
                            borderRadius: '28px',
                            boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(0, 0, 0, 0.02)',
                            border: '1px solid rgba(226, 232, 240, 0.9)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>


                            {/* Header: Rating Badge & Trip Code */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px', paddingTop: '4px' }}>
                                <div style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '6px'
                                }}>
                                    <span style={{ color: '#d97706', fontSize: '1rem' }}><i className="fa-solid fa-star"></i></span>
                                    <span style={{ fontSize: '1rem', fontWeight: 800, color: '#111' }}>{pkg.rating}</span>
                                    <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>•</span>
                                    <a href="#reviews" style={{ fontSize: '0.9rem', color: '#64748b', textDecoration: 'underline', fontWeight: 500 }}>{reviews.length} reviews</a>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#f1f5f9', padding: '5px 12px', borderRadius: '20px' }}>
                                    <i className="bi bi-shield-check" style={{ color: 'var(--primary-green)', fontSize: '0.85rem' }}></i>
                                    <span style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Verified Agency</span>
                                </div>
                            </div>

                            {/* Route Flow Card */}
                            <div style={{ 
                                background: '#f8fafc', 
                                padding: '16px 18px', 
                                borderRadius: '18px', 
                                border: '1px solid #e2e8f0', 
                                marginBottom: '24px' 
                            }}>
                                <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.8px', marginBottom: '10px' }}>
                                    Trip Route Flow
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <i className="bi bi-geo-alt-fill" style={{ color: 'var(--primary-green)', fontSize: '0.95rem' }}></i>
                                        <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>{pkg.startLocation || pkg.itinerary[0].title.split(',')[0]}</span>
                                    </div>
                                    <i className="bi bi-arrow-right" style={{ color: '#94a3b8', fontSize: '0.85rem' }}></i>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <i className="bi bi-pin-map-fill" style={{ color: 'var(--primary-green)', fontSize: '0.95rem' }}></i>
                                        <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>{pkg.endLocation || pkg.itinerary[pkg.itinerary.length-1].title.split(',')[0]}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats 2x3 Micro-Cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '26px' }}>
                                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '12px 14px', boxShadow: '0 2px 4px rgba(0,0,0,0.01)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.75rem', fontWeight: 700, marginBottom: '4px' }}>
                                        <i className="bi bi-clock-history" style={{ color: 'var(--primary-green)' }}></i> Duration
                                    </div>
                                    <span style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0f172a' }}>{pkg.days}</span>
                                </div>

                                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '12px 14px', boxShadow: '0 2px 4px rgba(0,0,0,0.01)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.75rem', fontWeight: 700, marginBottom: '4px' }}>
                                        <i className="bi bi-people-fill" style={{ color: 'var(--primary-green)' }}></i> Group Size
                                    </div>
                                    <span style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0f172a' }}>1 to 12 Guests</span>
                                </div>

                                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '12px 14px', boxShadow: '0 2px 4px rgba(0,0,0,0.01)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.75rem', fontWeight: 700, marginBottom: '4px' }}>
                                        <i className="bi bi-person-check-fill" style={{ color: 'var(--primary-green)' }}></i> Minimum Age
                                    </div>
                                    <span style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0f172a' }}>10+ years old</span>
                                </div>

                                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '12px 14px', boxShadow: '0 2px 4px rgba(0,0,0,0.01)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.75rem', fontWeight: 700, marginBottom: '4px' }}>
                                        <i className="bi bi-award-fill" style={{ color: 'var(--primary-green)' }}></i> Tour Style
                                    </div>
                                    <span style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0f172a' }}>Private Transfer</span>
                                </div>

                                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '12px 14px', boxShadow: '0 2px 4px rgba(0,0,0,0.01)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.75rem', fontWeight: 700, marginBottom: '4px' }}>
                                        <i className="bi bi-compass-fill" style={{ color: 'var(--primary-green)' }}></i> Theme
                                    </div>
                                    <span style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0f172a' }}>Explorer & Nature</span>
                                </div>

                                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '12px 14px', boxShadow: '0 2px 4px rgba(0,0,0,0.01)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px' }}>
                                        <i className="bi bi-lightning-charge-fill" style={{ color: 'var(--primary-green)' }}></i> Intensity
                                    </div>
                                    <div style={{ display: 'flex', gap: '5px' }}>
                                        {[1, 2, 3].map(i => {
                                            const rawIntensity = pkg.physicalIntensity || 2;
                                            const intensity = rawIntensity <= 2 ? 1 : (rawIntensity <= 4 ? 2 : 3);
                                            const activeColor = 'var(--primary-green)';
                                            return (
                                                <div key={i} style={{ 
                                                    width: '24px', 
                                                    height: '6px', 
                                                    background: i <= intensity ? activeColor : '#e2e8f0', 
                                                    borderRadius: '4px',
                                                    transition: 'all 0.3s ease'
                                                }}></div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Modern Price Display Box */}
                            <div style={{ 
                                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
                                padding: '18px 22px', 
                                borderRadius: '18px', 
                                color: 'white',
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                marginBottom: '22px',
                                boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.25)'
                            }}>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700, display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Package Rate</span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--primary-green)', fontWeight: 800 }}>Best Price Guarantee</span>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontWeight: 600, marginRight: '4px' }}>From</span>
                                    <span style={{ fontSize: '2.1rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>{formatPrice(getPrice())}</span>
                                </div>
                            </div>

                            {/* Vehicle Type Selector Row */}
                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#475569', letterSpacing: '0.8px' }}>
                                        Select Vehicle Type
                                    </label>
                                    <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>Private Chauffeur</span>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                    {[
                                        { id: 'taxi', label: 'Car', icon: 'bi bi-car-front-fill', modifier: pkg.id === 9 ? 'Standard' : 'Standard' },
                                        { id: 'van', label: 'Van', icon: 'bi bi-truck-front-fill', modifier: pkg.id === 9 ? '+$140' : (pkg.id === 12 ? '+$40' : (pkg.id === 13 ? '+$65' : '+$150')) },
                                        { id: 'tuktuk', label: 'Tuk Tuk', icon: 'fa-solid fa-motorcycle', modifier: pkg.id === 8 ? '-$35' : (pkg.id === 1 ? '-$200' : (pkg.id === 2 ? '-$110' : (pkg.id === 3 ? '-$200' : (pkg.id === 6 ? '-$100' : (pkg.id === 9 ? '-$40' : (pkg.id === 12 ? '-$90' : (pkg.id === 13 ? '-$110' : '-$300'))))))) }
                                    ].map(v => (
                                        <div
                                            key={v.id}
                                            onClick={() => setTransport(v.id)}
                                            style={{
                                                padding: '12px 8px',
                                                background: transport === v.id ? '#1a2332' : '#ffffff',
                                                color: transport === v.id ? 'white' : '#334155',
                                                borderRadius: '16px',
                                                border: `2px solid ${transport === v.id ? '#1a2332' : '#e2e8f0'}`,
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                boxShadow: transport === v.id ? '0 10px 25px -5px rgba(26, 35, 50, 0.3)' : '0 2px 4px rgba(0,0,0,0.02)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '4px'
                                            }}
                                        >
                                            {v.id === 'tuktuk' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: transport === v.id ? 'white' : 'var(--primary-green)' }}>
                                                    <path d="M6 7c0-2 2-3 6-3s6 1 6 3v4H6V7z" />
                                                    <rect x="7" y="7" width="10" height="4" rx="0.5" />
                                                    <path d="M5 11h14l-2 7H7l-2-7z" />
                                                    <rect x="11.2" y="18" width="1.6" height="4" rx="0.5" fill="currentColor" stroke="none" />
                                                    <rect x="4.5" y="17" width="1.6" height="4" rx="0.5" fill="currentColor" stroke="none" />
                                                    <rect x="17.9" y="17" width="1.6" height="4" rx="0.5" fill="currentColor" stroke="none" />
                                                    <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
                                                </svg>
                                            ) : (
                                                <i className={v.icon} style={{ fontSize: '1.25rem', color: transport === v.id ? 'white' : 'var(--primary-green)' }}></i>
                                            )}
                                            <span style={{ fontSize: '0.85rem', fontWeight: 800, lineHeight: 1.1 }}>{v.label}</span>
                                            <span style={{ fontSize: '0.65rem', fontWeight: 700, opacity: transport === v.id ? 0.9 : 0.6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                                {v.id === 'taxi' ? 'Standard' : (v.id === 'van' ? 'Spacious' : 'Friendly')}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ 
                                    marginTop: '12px', 
                                    padding: '10px 14px', 
                                    background: '#f8fafc', 
                                    borderRadius: '12px', 
                                    border: '1px dashed #cbd5e1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <i className="bi bi-briefcase-fill" style={{ color: 'var(--primary-green)' }}></i>
                                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#475569' }}>
                                        Baggage Allowance: <span style={{ color: '#0f172a', fontWeight: 800 }}>{getBaggageInfo()}</span>
                                    </span>
                                </div>
                            </div>

                            {/* Card Footer Actions */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '18px' }}>
                                <button 
                                    onClick={() => addToCompare(pkg)}
                                    style={{ 
                                        background: '#f1f5f9', 
                                        border: 'none', 
                                        color: '#334155', 
                                        fontWeight: 800, 
                                        fontSize: '0.82rem', 
                                        padding: '8px 16px', 
                                        borderRadius: '12px', 
                                        cursor: 'pointer', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '6px',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <i className="bi bi-arrow-left-right" style={{ color: 'var(--primary-green)' }}></i> Add to Compare
                                </button>
                                <button style={{ 
                                    background: '#f8fafc', 
                                    border: '1px solid #e2e8f0', 
                                    color: '#ef4444', 
                                    width: '38px', 
                                    height: '38px', 
                                    borderRadius: '12px', 
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.1rem',
                                    transition: 'all 0.2s ease'
                                }} title="Save to wishlist">
                                    <i className="bi bi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/* Section 2: Overview & Inclusions */}
            <div className="tour-details-section" style={{ background: '#f8f9fa', padding: '60px 0', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
                <div className="details-main-content" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 5%' }}>
                    {/* Content Section */}
                    <div className="details-grid content-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '50px' }}>
                    
                    {/* Left Column */}
                    <div className="tour-overview">
                        <h2 className="section-title" style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px' }}>Overview</h2>
                        <div className="overview-content">
                            {pkg.description.split('\n').map((para, i) => (
                                <p key={i} className="overview-text" style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#475569', marginBottom: '18px' }}>
                                    {para.trim()}
                                </p>
                            ))}
                        </div>

                        {/* Before You Book Section */}
                        <div className="before-you-book-box" style={{ marginTop: '40px', marginBottom: '60px', padding: '40px', background: '#fdfdfd', borderRadius: '32px', border: '1px solid #f0f0f0' }}>
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
                                                color: activeBookingTab === tab ? 'var(--primary-green)' : '#111',
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
                                                tab === 'Is this trip right for you?' ? 'bi bi-flag-fill' : 
                                                tab === 'Accommodation' ? 'bi bi-houses-fill' : 'bi bi-geo-alt-fill'
                                            } style={{ fontSize: '1.1rem', color: 'var(--primary-green)' }}></i>
                                            {tab}
                                            {activeBookingTab === tab && (
                                                <div style={{ 
                                                    position: 'absolute', 
                                                    bottom: '-1px', 
                                                    left: 0, 
                                                    right: 0, 
                                                    height: '4px', 
                                                    background: 'var(--primary-green)',
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
                                                <strong>Trip Type:</strong> This journey is a small group trip experience, carefully designed for solo travelers, couples, and friends who want to discover Sri Lanka together in an authentic and social environment.
                                            </li>
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
                                                Our accommodation is arranged in comfortable local guesthouses and budget hotels. <strong>The focus is on comfort, cleanliness, location, and supporting locally owned businesses.</strong>
                                            </p>
                                            <p style={{ marginBottom: '20px' }}>
                                                Most accommodations include shared or private rooms, attached western bathrooms, and essential comforts such as Wi-Fi and air conditioning or fan options, depending on the destination.
                                            </p>
                                            <p style={{ fontWeight: 600, color: '#111' }}>
                                                If you are able to travel with one or more (friends/partners), the cost per person will be lower, as transport and accommodation expenses can be shared. This makes the program more cost-effective while still enjoying the same authentic experiences.
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

                        {/* Vehicle selector moved to Summary Card */}

                        {/* Why You'll Love This Trip Card */}
                        <div className="why-love-section" style={{
                            marginTop: '30px',
                            padding: '24px 28px',
                            background: '#ffffff',
                            borderRadius: '20px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                        }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 16px 0', color: '#0f172a' }}>
                                Why You'll Love This Trip
                            </h3>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    'Capture iconic sights like Nine Arches Bridge & Sigiriya sunrise',
                                    'Relax in hand-picked, comfortable local guesthouses',
                                    'Travel safely with our professional, local drivers',
                                    'Discover hidden gems with authentic village experiences'
                                ].map((point, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: '#334155', fontWeight: 600 }}>
                                        <i className="bi bi-check-circle-fill" style={{ color: 'var(--primary-green)', fontSize: '1.15rem', flexShrink: 0 }}></i>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Travel with Purpose Card */}
                        <div className="responsible-travel-card" style={{
                            marginTop: '24px',
                            padding: '24px 28px',
                            background: '#ffffff',
                            borderRadius: '20px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <i className="fa-solid fa-hand-holding-heart" style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}></i>
                                    Travel with Purpose
                                </h3>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    color: 'var(--primary-green)',
                                    background: 'rgba(27, 163, 82, 0.08)',
                                    padding: '4px 12px',
                                    borderRadius: '50px'
                                }}>
                                    100% Locally Owned
                                </span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                                A portion of your trip directly supports local community and wildlife conservation projects across Sri Lanka.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {/* Inclusions */}
                        <div className="inclusions-box" style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.04)', padding: '32px', borderRadius: '24px' }}>
                            <h5 style={{ fontSize: '1.25rem', marginBottom: '22px', fontWeight: 800, color: '#0f172a' }}>
                                <i className="bi bi-check-circle-fill" style={{ color: 'var(--primary-green)', marginRight: '10px' }}></i> What's Included
                            </h5>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {pkg.inclusions && pkg.inclusions.map((item, i) => (
                                    <li key={i} style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', lineHeight: 1.5 }}>
                                        <i className="bi bi-check2-circle" style={{ color: 'var(--primary-green)', marginRight: '10px', fontWeight: 900, fontSize: '1.1rem' }}></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Exclusions */}
                        <div className="exclusions-box" style={{ 
                            background: '#ffffff', 
                            border: '1px solid #e2e8f0', 
                            boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.04)', 
                            padding: '28px 32px', 
                            borderRadius: '24px' 
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <h5 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        background: 'rgba(239, 68, 68, 0.08)',
                                        color: '#ef4444',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.1rem'
                                    }}>
                                        <i className="bi bi-x-circle-fill"></i>
                                    </div>
                                    Not Included
                                </h5>
                                <span style={{ 
                                    fontSize: '0.75rem', 
                                    fontWeight: 800, 
                                    color: '#64748b', 
                                    background: '#f8fafc', 
                                    padding: '4px 12px', 
                                    borderRadius: '50px',
                                    border: '1px solid #e2e8f0',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>Exclusions</span>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {pkg.exclusions && pkg.exclusions.map((item, i) => (
                                    <li key={i} style={{ 
                                        fontSize: '0.92rem', 
                                        color: '#475569', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '12px',
                                        background: '#f8fafc',
                                        padding: '10px 14px',
                                        borderRadius: '12px',
                                        border: '1px solid #f1f5f9',
                                        fontWeight: 500
                                    }}>
                                        <i className="bi bi-x-lg" style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 900, flexShrink: 0 }}></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                                <li style={{ 
                                    fontSize: '0.92rem', 
                                    color: '#475569', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '12px',
                                    background: '#f8fafc',
                                    padding: '10px 14px',
                                    borderRadius: '12px',
                                    border: '1px solid #f1f5f9',
                                    fontWeight: 500
                                }}>
                                    <i className="bi bi-x-lg" style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 900, flexShrink: 0 }}></i>
                                    <span>Some meals mentioned in the itinerary</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Departure Airport Transfer Note */}
                        <div style={{
                            marginTop: '24px',
                            padding: '20px',
                            background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                            borderRadius: '20px',
                            border: '1px solid rgba(226, 232, 240, 0.8)',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{
                                width: '46px',
                                height: '46px',
                                borderRadius: '14px',
                                background: 'rgba(34, 197, 94, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <i className="bi bi-airplane-fill" style={{ color: 'var(--primary-green)', fontSize: '1.4rem' }}></i>
                            </div>
                            <div>
                                <h5 style={{ fontSize: '1.05rem', margin: '0 0 8px 0', color: '#0f172a', fontWeight: 800 }}>
                                    Departure Airport Transfer
                                </h5>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                                    Please note that on departure dates, airport transfer is <b>not included</b> in the package. You can arrange your own transport, or we can easily arrange a private transfer for you for an additional fee.
                                </p>
                            </div>
                        </div>

                        <SpotifyAdCard margin="10px 0 0 0" />

                        {/* Cost-Benefit Travel Card */}
                        <div style={{
                            padding: '24px 28px',
                            background: '#ffffff',
                            borderRadius: '20px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                        }}>
                            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="bi bi-people-fill" style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}></i>
                                Travel Together, Save More
                            </h4>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                                Travel with friends or family to share transport and accommodation costs, reducing the per-person rate for your trip.
                            </p>
                        </div>
                        
                        <PromotedExperiences />
                    </div>
                </div>
            </div>

            {/* Newsletter Subscribe Banner under Tour Details */}
            <NewsletterSubscribeBanner />
        </div>

            {/* Section 3: Itinerary */}
            <div className="tour-details-section" style={{ background: '#ffffff', padding: '60px 0', borderBottom: '1px solid #eaeaea' }}>
                <div className="details-main-content" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 5%' }}>
                    <div style={{ marginTop: '0', paddingTop: '0' }}>
                    <div className="itinerary-header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.0rem', fontWeight: 800, color: '#111' }}>Itinerary</h2>
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

                    <div ref={itineraryRef} className="itinerary-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '40px', padding: '20px', background: 'white' }}>
                        {/* Left Column: Map (Sticky) */}
                        <div style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
                            <div 
                                onClick={() => setIsMapZoomed(true)}
                                style={{ 
                                    background: '#fff', 
                                    borderRadius: '24px', 
                                    width: '100%',
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
                                <img src={pkg.routeMap || pkg.image} style={{ width: '100%', height: 'auto', display: 'block' }} alt="Sri Lanka Route Map" />
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
                                    This trip generates <strong style={{ borderBottom: '2px solid #333' }}>{pkg.co2 || (42 + (pkg.id * 7) % 25)} kg</strong> of CO<sub>2</sub>-e per person per day. <span style={{ color: '#2e7d32', fontWeight: 600 }}>Fact:</span> We locally offset 100% of these emissions by planting native trees and restoring critical elephant corridors in Sri Lanka.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Accordion with Internal Scroll */}
                        <div 
                            className="itinerary-scroll-container"
                            style={{ 
                                maxHeight: '680px', 
                                overflowY: 'auto', 
                                paddingRight: '12px',
                                border: '1px solid #eef3f0',
                                borderRadius: '24px',
                                padding: '20px',
                                background: '#ffffff',
                                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)'
                            }}
                        >
                            {pkg.itinerary && pkg.itinerary.length > 0 ? (
                                pkg.itinerary.map((step, index) => (
                                    <ItineraryDay 
                                        key={index} 
                                        step={step} 
                                        index={index} 
                                        forceOpen={allOpen} 
                                        isLastDay={index === pkg.itinerary.length - 1}
                                        isSingleDayTour={pkg.days.includes('1 Day')}
                                    />
                                ))
                            ) : (
                                <div style={{ padding: '30px', background: '#f8f9fa', borderRadius: '16px', color: '#555', textAlign: 'center', border: '1px dashed #ddd' }}>
                                    <i className="bi bi-compass" style={{ fontSize: '2rem', color: 'var(--primary-green)', display: 'block', marginBottom: '10px' }}></i>
                                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color: '#111' }}>Custom & Flexible Tour</p>
                                    <p style={{ margin: '6px 0 0 0', fontSize: '0.9rem', color: '#666' }}>The itinerary for this tour is fully flexible and arranged directly with your private driver according to your preferences.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/* Section 4: Volunteering & Notes */}
            <div className="tour-details-section" style={{ background: '#fafaf9', padding: '60px 0', borderBottom: '1px solid #eaeaea' }}>
                <div className="details-main-content" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 5%' }}>
                    <div className="impact-section" style={{ marginTop: '0' }}>
                    <div className="impact-card">
                        <div className="impact-icon">
                            <i className="fa-solid fa-hand-holding-heart"></i>
                        </div>
                        <h3>Continue in an Impactful Way</h3>
                        <p>Join our community-driven volunteering programs to make a real difference. From wildlife conservation to local education, your journey can leave a lasting legacy.</p>
                        <button className="impact-btn btn-green" onClick={() => navigate('/volunteer')}>
                            Explore Volunteering <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>

                    <div className="impact-card" style={{ background: '#fff' }}>
                        <div className="impact-icon" style={{ background: 'var(--primary-green)' }}>
                            <i className="fa-solid fa-envelope-open-text"></i>
                        </div>
                        <h3>Customized Journeys</h3>
                        <p>Have a specific vision for your trip? Our travel experts are here to help you craft a personalized itinerary that matches your heart's desire perfectly.</p>
                        <button className="impact-btn btn-outline" onClick={() => navigate('/contact')}>
                            Contact Us <i className="bi bi-chat-dots"></i>
                        </button>
                    </div>
                </div>

                {/* Important Notes */}
                {pkg.importantNotes && (
                    <div className="important-notes-section" style={{ marginTop: '40px', padding: '20px 0 0 0', borderTop: '1px solid #eaeaea' }}>
                        <h2 style={{ fontSize: '2.0rem', fontWeight: 800, color: '#111', marginBottom: '20px', fontFamily: 'inherit' }}>Important notes</h2>
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
                </div>
            </div>

            {/* Section 5: Reviews */}
            {pkg.reviews && (
                <div className="tour-details-section" style={{ background: '#f4f6f8', padding: '60px 0', borderBottom: '1px solid #eaeaea' }}>
                    <div className="details-main-content" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 5%' }}>
                        <div className="reviews-container" id="reviews" style={{ marginTop: '0' }}>
                        <h2 style={{ fontSize: '2.0rem', fontWeight: 800, color: '#111', marginBottom: '30px' }}>Reviews</h2>
                        
                        <div className="reviews-summary">
                            <div className="rating-large">
                                <h1>{pkg.rating}</h1>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className={`bi bi-star${i < Math.floor(pkg.rating) ? '-fill' : (i < pkg.rating ? '-half' : '')}`} style={{ color: i < pkg.rating ? 'var(--primary-green)' : '#ddd' }}></i>
                                    ))}
                                </div>
                                <p>based on {reviews.length} reviews</p>
                            </div>
                            
                            <div className="rating-breakdown">
                                <div className="breakdown-title">Total reviews and rating from Give Back Journey</div>
                                {[5, 4, 3, 2, 1].map((star) => {
                                    const count = reviews.filter(r => r.rating === star).length;
                                    const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                                    return (
                                        <div key={star} className="breakdown-row">
                                            <div className="breakdown-label">{star} stars</div>
                                            <div className="breakdown-bar-container">
                                                <div 
                                                    className={`breakdown-bar star-${star}`} 
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                            <div className="breakdown-count">{count}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="trust-badge">
                            <i className="bi bi-patch-check-fill"></i>
                            <span>We perform checks on reviews</span>
                        </div>

                        <div className="reviews-controls">
                            <div className="search-reviews">
                                <i className="bi bi-search"></i>
                                <input 
                                    type="text" 
                                    placeholder="Search reviews (e.g. guide)" 
                                    value={reviewSearch}
                                    onChange={(e) => setReviewSearch(e.target.value)}
                                />
                            </div>
                            <div className="sort-reviews">
                                <span>Sort by:</span>
                                <select value={reviewSort} onChange={(e) => setReviewSort(e.target.value)}>
                                    <option>Most insightful</option>
                                    <option>Most recent</option>
                                    <option>Highest rating</option>
                                    <option>Lowest rating</option>
                                </select>
                                <i className="bi bi-info-circle" style={{ color: '#999' }}></i>
                            </div>
                        </div>

                        <div className="reviews-list">
                            {pkg.reviews
                                .filter(r => r.comment.toLowerCase().includes(reviewSearch.toLowerCase()) || r.name.toLowerCase().includes(reviewSearch.toLowerCase()))
                                .sort((a, b) => {
                                    if (reviewSort === 'Highest rating') return b.rating - a.rating;
                                    if (reviewSort === 'Lowest rating') return a.rating - b.rating;
                                    if (reviewSort === 'Most recent') return b.id - a.id;
                                    return a.id - b.id;
                                })
                                .slice(0, visibleReviewsCount)
                                .map((review, idx) => (
                                <div key={review.id} className="review-card-vertical">
                                    <div className="review-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className={`bi bi-star${i < review.rating ? '-fill' : ''}`}></i>
                                        ))}
                                    </div>
                                    <h3 className="review-title">{review.comment.split('.')[0]}</h3>
                                    <div className="review-meta">
                                        {review.name}, {review.date}
                                    </div>
                                    <p className="review-text">{review.comment}</p>
                                    {((review.images && review.images.length > 0) || (idx === 0 && galleryImages && galleryImages.length >= 3)) && (
                                        <div className="review-images-container">
                                            {review.images && review.images.length > 0 ? (
                                                review.images.map((img, imgIdx) => (
                                                    <div key={imgIdx} className="review-img-wrapper">
                                                        <img src={img} alt={`Review photo ${imgIdx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </div>
                                                ))
                                            ) : (
                                                <>
                                                    <div className="review-img-wrapper">
                                                        <img src={galleryImages[1]} alt="Review photo 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </div>
                                                    <div className="review-img-wrapper">
                                                        <img src={galleryImages[2]} alt="Review photo 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )}
                                    <div className="review-actions">
                                        <div className="review-action">
                                            <i className="bi bi-flag"></i>
                                        </div>
                                        {(() => {
                                            const baseLikes = (review.id * 7 + 4) % 25 + 2;
                                            const totalLikes = baseLikes + (likedReviews[review.id] || 0);
                                            const hasLiked = likedReviews[review.id] > 0;
                                            return (
                                                <div 
                                                    className="review-action" 
                                                    onClick={() => setLikedReviews(prev => ({ ...prev, [review.id]: (prev[review.id] || 0) + 1 }))}
                                                    style={{ color: hasLiked ? 'var(--primary-green)' : 'inherit', opacity: hasLiked ? 1 : 0.7 }}
                                                >
                                                    <i className={`bi bi-hand-thumbs-up${hasLiked ? '-fill' : ''}`}></i>
                                                    <span style={{ fontSize: '0.9rem', fontWeight: 700, marginLeft: '5px' }}>{totalLikes}</span>
                                                </div>
                                            );
                                        })()}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {visibleReviewsCount < pkg.reviews.filter(r => r.comment.toLowerCase().includes(reviewSearch.toLowerCase()) || r.name.toLowerCase().includes(reviewSearch.toLowerCase())).length && (
                            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                                <button 
                                    onClick={() => setVisibleReviewsCount(prev => prev + 10)}
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid #ddd',
                                        padding: '12px 30px',
                                        borderRadius: '100px',
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        color: '#111',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    Show 10 more reviews
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}

            {/* Section 6: Recommendations */}
            <div className="tour-details-section" style={{ background: '#ffffff', padding: '60px 0' }}>
                <div className="details-main-content" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 5%' }}>
                    <div className="also-bought-container" style={{ marginTop: '0', paddingTop: '0', borderTop: 'none', paddingBottom: '0' }}>
                    <h2 className="also-bought-title">Customers Who Bought This Tour Also Bought</h2>
                    <div className="also-bought-grid">
                        {tourPackages
                            .filter(t => t.id !== pkg.id)
                            .slice(0, 6)
                            .map((tour) => (
                            <div key={tour.id} className="tour-card-mini" onClick={() => { navigate(tour.isVolunteer ? `/volunteer-program/real-sri-lanka-experience` : `/package/${tour.id}`); window.scrollTo(0, 0); }}>
                                <div className="card-image-wrapper">
                                    <img src={tour.image} alt={tour.name} />
                                    <div 
                                        className="heart-icon" 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const isInCompare = compareList?.some(item => item.id === tour.id);
                                            if (isInCompare) {
                                                removeFromCompare(tour.id);
                                            } else {
                                                addToCompare(tour);
                                            }
                                        }}
                                        style={{ color: compareList?.some(item => item.id === tour.id) ? 'var(--primary-green)' : '#666' }}
                                    >
                                        <i className={`bi bi-heart${compareList?.some(item => item.id === tour.id) ? '-fill' : ''}`}></i>
                                    </div>
                                    <div className="category-tag">
                                        {tour.isVolunteer 
                                            ? "Volunteering" 
                                            : (tour.days === "1 Day" || tour.days === "1 day" ? "Day Tour" : "Multi-day Tour")}
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-location">
                                        <i className="bi bi-geo-alt"></i>
                                        <span>Sri Lanka, South Asia</span>
                                    </div>
                                    <div className="card-rating">
                                        <i className="bi bi-star-fill"></i>
                                        <span>{tour.rating} ({tour.reviews?.length || 0})</span>
                                    </div>
                                    <h3 className="card-title">{tour.name}</h3>
                                    <div className="card-price">
                                        from <strong>{formatPrice(tour.price)}</strong>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

            <SriLankaGlance />

            {/* Solid Modern Sticky Bar */}
            <div className="mobile-sticky-bar">
                <div className="sticky-bar-content">
                    <div className="price-tag">
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                            <span className="from-text" style={{ margin: 0 }}>From</span>
                            {transport === 'tuktuk' && (
                                <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.85rem', fontWeight: 600 }}>{formatPrice(getOriginalPrice())}</span>
                            )}
                            <span className="price-amount" style={{ fontSize: '1.4rem' }}>{formatPrice(getPrice())}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px', fontSize: '0.7rem', color: '#888', fontWeight: 700, textDecoration: 'underline' }}>
                            <i className="bi bi-bag-check" style={{ fontSize: '0.7rem' }}></i>
                            <span>{getBaggageInfo()}</span>
                        </div>
                    </div>
                    <button className="sticky-book-btn" onClick={() => navigate(`/inquiry/${pkg.id}?transport=${transport}`)}>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;
