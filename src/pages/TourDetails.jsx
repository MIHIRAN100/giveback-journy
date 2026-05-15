import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourPackages, BUDGET_PROMO_IMG } from '../data/tours';
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
import kandyHighSlide2 from '../assets/4a4f12055e9bf982ad73fb490bebaf15.jpg';
import kandyHighSlide3 from '../assets/0b244be2033db8d252c09ac5952fd2ec.jpg';
import kandyHighSlide4 from '../assets/190b19efa26222b1d393a6085b5d6d3e.jpg';
import kandyHighSlide6 from '../assets/ccabf7721ab68bb424228db7bdb2e13d.jpg';
import adamsPeakSlide2 from '../assets/6323104ee871047c8192d2d3fbe9a5f4.jpg';
import adamsPeakSlide3 from '../assets/96b8916547406115ee3f1240359a92af.jpg';
import adamsPeakSlide4 from '../assets/548ca78544e5070b59f558a0b02cf606.jpg';
import adamsPeakSlide5 from '../assets/0c3aa6595f8fa9d7304e54d629d024c5.jpg';
import adamsPeakSlide6 from '../assets/c826dc63ec0b07b44bbfd80e148a8f03.jpg';
import southernSlide2_new from '../assets/a41fa4f67a6e315638179b50d03d0198.jpg';

const ItineraryDay = ({ step, index, forceOpen, isLastDay }) => {
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
            background: isOpen ? 'rgba(29, 185, 84, 0.02)' : 'transparent',
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
                boxShadow: isOpen ? '0 0 0 4px rgba(29, 185, 84, 0.2)' : 'none',
                transition: 'all 0.3s ease'
            }} />

            <div 
                onClick={() => setIsOpen(!isOpen)}
                style={{ 
                    padding: '22px 0', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    cursor: 'pointer' 
                }}
            >
                <div style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ 
                        background: 'var(--primary-green)', 
                        color: '#fff', 
                        padding: '2px 10px', 
                        borderRadius: '6px', 
                        fontSize: '0.8rem', 
                        fontWeight: 800 
                    }}>DAY {step.day}</span>
                    <span style={{ color: '#111' }}>{step.title}</span>
                </div>
                <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`} style={{ color: 'var(--primary-green)', fontWeight: 800, fontSize: '1.1rem' }}></i>
            </div>
            {isOpen && (
                <div style={{ padding: '0 0 30px 0', color: '#555', lineHeight: 1.8, fontSize: '1.05rem', whiteSpace: 'pre-line' }}>
                    <div className="itinerary-desc-content" dangerouslySetInnerHTML={{ __html: step.desc }} />
                    {step.activities && (
                        <div style={{ 
                            marginTop: '25px', 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
                            gap: '12px',
                            background: '#fcfcfc',
                            padding: '20px',
                            borderRadius: '16px',
                            border: '1px solid #eee'
                        }}>
                            {step.activities.map((act, i) => (
                                <div key={i} style={{ 
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontSize: '0.9rem', 
                                    fontWeight: 700,
                                    color: '#333'
                                }}>
                                    <i className="bi bi-check2-circle" style={{ 
                                        color: 'var(--primary-green)', 
                                        fontSize: '1.1rem',
                                        fontWeight: 900
                                    }}></i>
                                    {act}
                                </div>
                            ))}
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
                                        {step.optionalActivities.map((act, i) => (
                                            <li key={i} style={{ 
                                                marginBottom: '12px', 
                                                display: 'flex', 
                                                gap: '15px', 
                                                alignItems: 'flex-start',
                                                fontSize: '0.95rem',
                                                color: '#444'
                                            }}>
                                                <i className="bi bi-plus-circle" style={{ color: 'var(--primary-green)', marginTop: '4px', fontSize: '0.9rem' }}></i>
                                                <span style={{ fontWeight: 500 }}>{act}</span>
                                            </li>
                                        ))}
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
                            border: '1px solid rgba(29, 185, 84, 0.3)',
                            boxShadow: '0 10px 25px rgba(29, 185, 84, 0.05)',
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
                                    boxShadow: '0 4px 12px rgba(29, 185, 84, 0.2)'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(29, 185, 84, 0.3)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(29, 185, 84, 0.2)'; }}
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
        (pkg?.id === 8) ? kandySlide2 : (pkg?.id === 2 ? southernSlide2_new : (pkg?.id === 3 ? highlandsSlide2 : (pkg?.id === 4 ? mistSlide2 : (pkg?.id === 6 ? galleSlide2 : (pkg?.id === 9 ? kandyHighSlide2 : (pkg?.id === 10 ? adamsPeakSlide2 : essentialSlide2)))))), 
        (pkg?.id === 8) ? kandySlide3 : (pkg?.id === 2 ? southernSlide3 : (pkg?.id === 3 ? highlandsSlide3 : (pkg?.id === 4 ? mistSlide3 : (pkg?.id === 6 ? galleSlide3 : (pkg?.id === 9 ? kandyHighSlide3 : (pkg?.id === 10 ? adamsPeakSlide3 : gallerySlide3)))))), 
        (pkg?.id === 8) ? kandySlide4 : (pkg?.id === 2 ? southernSlide4 : (pkg?.id === 3 ? highlandsSlide4 : (pkg?.id === 4 ? mistSlide4 : (pkg?.id === 6 ? galleSlide4 : (pkg?.id === 9 ? kandyHighSlide4 : (pkg?.id === 10 ? adamsPeakSlide4 : gallerySlide4)))))), 
        (pkg?.id === 8) ? kandySlide5 : (pkg?.id === 2 ? southernSlide2 : (pkg?.id === 3 ? highlandsSlide5 : (pkg?.id === 4 ? mistSlide5 : (pkg?.id === 6 ? galleSlide5 : (pkg?.id === 10 ? adamsPeakSlide5 : gallerySlide5))))), 
        (pkg?.id === 8) ? kandySlide6 : (pkg?.id === 2 ? southernSlide6 : (pkg?.id === 3 ? highlandsSlide6 : (pkg?.id === 4 ? mistSlide6 : (pkg?.id === 6 ? galleSlide6 : (pkg?.id === 10 ? adamsPeakSlide6 : gallerySlide6)))))
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
        if (pkg.id === 2) currentBase = 650;
        
        if (transport === 'tuktuk') {
            const discount = pkg.id === 1 ? 200 : (pkg.id === 2 ? 110 : (pkg.id === 3 ? 200 : (pkg.id === 8 ? 35 : (pkg.id === 9 ? 30 : (pkg.id === 10 ? 90 : 300)))));
            return `$${currentBase - discount}`;
        }
        if (transport === 'van') {
            return `$${currentBase + 150}`;
        }
        return `$${currentBase}`;
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
        
        return `$${currentBase}`;
    };

    return (
        <div className="tour-details-page">
            <style>
                {`
                .tour-details-page {
                    background: #fff;
                    padding-top: 20px;
                }
                .itinerary-desc-content {
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: #555;
                }
                .itinerary-desc-content b, .itinerary-desc-content strong {
                    color: #111;
                    font-weight: 800;
                }
                .itinerary-desc-content ul {
                    margin-top: 15px !important;
                    padding-left: 5px !important;
                    list-style: none !important;
                }
                .itinerary-desc-content li {
                    margin-bottom: 12px !important;
                    position: relative !important;
                    padding-left: 28px !important;
                    line-height: 1.6 !important;
                }
                .itinerary-desc-content li::before {
                    content: '•';
                    position: absolute;
                    left: 0;
                    color: var(--primary-green);
                    font-weight: 900;
                    font-size: 1.8rem;
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
                    box-shadow: 0 0 15px rgba(29, 185, 84, 0.6);
                }

                .mobile-sticky-bar {
                    display: block;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: #ffffff;
                    padding: 15px 5%;
                    box-shadow: 0 -10px 40px rgba(0,0,0,0.1);
                    z-index: 10000;
                    border-top: 1px solid #eee;
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
                    background: var(--primary-green);
                    color: white;
                    padding: 15px 45px;
                    border-radius: 14px;
                    font-weight: 900;
                    font-size: 1.1rem;
                    border: none;
                    box-shadow: 0 8px 25px rgba(29, 185, 84, 0.3);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .sticky-book-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(12, 93, 49, 0.4);
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
                    border: 1px solid rgba(29, 185, 84, 0.1);
                    border-radius: 24px;
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    transition: all 0.3s ease;
                }
                .impact-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(29, 185, 84, 0.08);
                    border-color: rgba(29, 185, 84, 0.3);
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
                    box-shadow: 0 10px 20px rgba(29, 185, 84, 0.2);
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
                    box-shadow: 0 8px 20px rgba(29, 185, 84, 0.3);
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
                        border-left: 5px solid var(--primary-green) !important;
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
                        background: #ffffff !important;
                        padding: 15px 5% !important;
                        box-shadow: 0 -10px 40px rgba(0,0,0,0.1) !important;
                        z-index: 10000 !important;
                        border-top: 1px solid #eee !important;
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
                        background: #111 !important;
                        color: white !important;
                        padding: 12px 28px !important;
                        border-radius: 12px !important;
                        font-weight: 900 !important;
                        font-size: 0.9rem !important;
                        border: none !important;
                        box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
                        transition: all 0.3s ease !important;
                    }
                }

                /* Review Section Styles */
                .reviews-container {
                    margin-top: 80px;
                    border-top: 1px solid #eee;
                    padding-top: 80px;
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
                    background: var(--primary-green);
                    border-radius: 10px;
                }
                @keyframes infiniteRising {
                    0% { width: 70%; }
                    50% { width: 85%; }
                    100% { width: 70%; }
                }
                @keyframes shimmerGradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .breakdown-bar.animated-rising {
                    animation: infiniteRising 3s ease-in-out infinite, shimmerGradient 3s linear infinite;
                    background: linear-gradient(-45deg, var(--primary-green), #81c784, var(--primary-green));
                    background-size: 200% 200%;
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

                @media (max-width: 768px) {
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
                }
                .also-bought-title {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 30px;
                }
                .also-bought-grid {
                    display: flex;
                    gap: 20px;
                    overflow-x: auto;
                    padding: 10px 0 30px 0;
                    scrollbar-width: none;
                    ms-overflow-style: none;
                }
                .also-bought-grid::-webkit-scrollbar {
                    display: none;
                }
                .tour-card-mini {
                    flex: 0 0 280px;
                    background: white;
                    border-radius: 12px;
                    border: 1px solid #eee;
                    overflow: hidden;
                    transition: transform 0.3s, box-shadow 0.3s;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                }
                .tour-card-mini:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
                }
                .card-image-wrapper {
                    position: relative;
                    height: 180px;
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
                    width: 32px;
                    height: 32px;
                    background: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    color: #666;
                }
                .category-tag {
                    position: absolute;
                    bottom: 12px;
                    left: 12px;
                    background: rgba(0,0,0,0.6);
                    color: white;
                    padding: 4px 10px;
                    border-radius: 4px;
                    font-size: 0.75rem;
                    font-weight: 600;
                }
                .card-content {
                    padding: 15px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .card-location {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 0.8rem;
                    color: #666;
                    margin-bottom: 8px;
                }
                .card-rating {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 0.85rem;
                    color: #111;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .card-rating i {
                    color: var(--primary-green);
                }
                .card-title {
                    font-size: 0.95rem;
                    font-weight: 800;
                    color: #111;
                    line-height: 1.4;
                    margin-bottom: 15px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    height: 2.8em;
                }
                .card-features {
                    margin-bottom: 15px;
                }
                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.8rem;
                    color: #555;
                    margin-bottom: 5px;
                }
                .card-price {
                    margin-top: auto;
                    font-size: 0.9rem;
                    color: #111;
                }
                .card-price strong {
                    font-size: 1.1rem;
                    font-weight: 800;
                }

                @media (max-width: 1024px) {
                    .tour-card-mini {
                        flex: 0 0 260px;
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
                        textTransform: 'lowercase',
                        boxShadow: '0 4px 12px rgba(16, 124, 65, 0.2)'
                    }}>Sale now on</span>
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
                    </div>

                    {/* Summary Card Section */}
                    <div className="summary-card-container">
                        <div className="summary-card" style={{
                            background: 'white',
                            padding: '35px',
                            borderRadius: '24px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(0,0,0,0.05)',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ color: 'var(--primary-green)', fontSize: '1.2rem' }}><i className="fa-solid fa-star"></i></span>
                                    <span style={{ fontSize: '1.4rem', fontWeight: 900 }}>{pkg.rating}</span>
                                    <a href="#reviews" style={{ fontSize: '0.85rem', color: '#0066cc', textDecoration: 'underline', fontWeight: 600 }}>{reviews.length} reviews</a>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '0.65rem', color: '#999', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px' }}>Trip code: HPKS</span>
                                </div>
                            </div>

                            <div style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                                <div style={{ marginBottom: '15px' }}>
                                    <span style={{ fontSize: '0.85rem', color: '#555', fontWeight: 700 }}>Start: </span>
                                    <span style={{ fontSize: '0.85rem', color: '#111', fontWeight: 800 }}>{pkg.startLocation || pkg.itinerary[0].title.split(',')[0]}, Sri Lanka</span>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <span style={{ fontSize: '0.85rem', color: '#555', fontWeight: 700 }}>End: </span>
                                    <span style={{ fontSize: '0.85rem', color: '#111', fontWeight: 800 }}>{pkg.endLocation || pkg.itinerary[pkg.itinerary.length-1].title.split(',')[0]}, Sri Lanka</span>
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
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Style</span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>Simple Stay</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Theme</span>
                                    <span style={{ fontSize: '1rem', fontWeight: 900 }}>Explorer</span>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Intensity</span>
                                    <div style={{ display: 'flex', gap: '6px', marginTop: '5px' }}>
                                        {[1, 2, 3].map(i => {
                                            const rawIntensity = pkg.physicalIntensity || 2;
                                            // Map 1-5 scale to 1-3
                                            const intensity = rawIntensity <= 2 ? 1 : (rawIntensity <= 4 ? 2 : 3);
                                            const colors = ['#27ae60', '#f39c12', '#e74c3c'];
                                            const activeColor = colors[intensity - 1];
                                            
                                            return (
                                                <div key={i} style={{ 
                                                    width: '20px', 
                                                    height: '5px', 
                                                    background: i <= intensity ? activeColor : '#eee', 
                                                    borderRadius: '3px',
                                                    transition: 'all 0.3s ease'
                                                }}></div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '10px', marginBottom: '25px' }}>
                                <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: 700, marginBottom: '8px' }}>From</span>
                                <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#111', lineHeight: 1 }}>USD {getPrice()}</span>
                            </div>

                            {/* Vehicle Type Selector Row */}
                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: '10px', letterSpacing: '1px' }}>
                                    Select Vehicle Type
                                </label>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                    {[
                                        { id: 'taxi', label: 'Car', icon: 'bi bi-car-front-fill', modifier: 'Standard' },
                                        { id: 'van', label: 'Van', icon: 'bi bi-truck-front-fill', modifier: '+$150' },
                                        { id: 'tuktuk', label: 'Tuk Tuk', icon: 'fa-solid fa-motorcycle', modifier: pkg.id === 8 ? '-$35' : (pkg.id === 1 ? '-$200' : (pkg.id === 2 ? '-$110' : (pkg.id === 3 ? '-$200' : (pkg.id === 9 ? '-$30' : '-$300')))) }
                                    ].map(v => (
                                        <div
                                            key={v.id}
                                            onClick={() => setTransport(v.id)}
                                            style={{
                                                padding: '12px 8px',
                                                background: transport === v.id ? 'var(--primary-green)' : '#fcfcfc',
                                                color: transport === v.id ? 'white' : '#333',
                                                borderRadius: '14px',
                                                border: `2px solid ${transport === v.id ? 'var(--primary-green)' : '#eee'}`,
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                boxShadow: transport === v.id ? '0 8px 20px rgba(29, 185, 84, 0.25)' : 'none',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '4px'
                                            }}
                                        >
                                            {v.id === 'tuktuk' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor" style={{ color: transport === v.id ? 'white' : 'var(--primary-green)' }}>
                                                    <path d="M5 11V8c0-1.66 1.34-3 3-3h8c1.66 0 3 1.34 3 3v3h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H10v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1zm2-3v2h10V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1zm0 5v3h2v-3H7zm8 0v3h2v-3h-2z"/>
                                                </svg>
                                            ) : (
                                                <i className={v.icon} style={{ fontSize: '1.3rem', color: transport === v.id ? 'white' : 'var(--primary-green)' }}></i>
                                            )}
                                            <span style={{ fontSize: '0.85rem', fontWeight: 800, lineHeight: 1.1 }}>{v.label}</span>
                                            <span style={{ fontSize: '0.65rem', fontWeight: 700, opacity: transport === v.id ? 0.9 : 0.6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                                {v.id === 'taxi' ? 'Standard' : (v.id === 'van' ? 'Budget Friendly' : 'Economic')}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ 
                                    marginTop: '12px', 
                                    padding: '10px 15px', 
                                    background: '#f8f9fa', 
                                    borderRadius: '10px', 
                                    border: '1px dashed #ddd',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <i className="bi bi-briefcase-fill" style={{ color: 'var(--primary-green)' }}></i>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#555' }}>
                                        Baggage Allowance: <span style={{ color: '#111' }}>{getBaggageInfo()}</span>
                                    </span>
                                </div>
                            </div>

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
                <div className="details-grid content-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '50px' }}>
                    
                    {/* Left Column */}
                    <div className="tour-overview">
                        <h2 className="section-title" style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px' }}>Overview</h2>
                        <div className="overview-content">
                            {pkg.description.split('\n').map((para, i) => (
                                <p key={i} className="overview-text" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
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

                        {/* Vehicle selector moved to Summary Card */}

                        {/* Why You'll Love This Trip */}
                        <div className="why-love-section" style={{
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

                        {/* Responsible Travel Pledge Card */}
                        <div className="responsible-travel-card" style={{
                            marginTop: '30px',
                            padding: '30px',
                            background: 'linear-gradient(145deg, #ffffff 0%, #f9fdfa 100%)',
                            borderRadius: '20px',
                            border: '1px solid rgba(29, 185, 84, 0.15)',
                            boxShadow: '0 10px 30px rgba(29, 185, 84, 0.04)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                                <div style={{ 
                                    background: 'rgba(29, 185, 84, 0.1)', 
                                    color: 'var(--primary-green)', 
                                    width: '36px', 
                                    height: '36px', 
                                    borderRadius: '10px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontSize: '1.2rem'
                                }}>
                                    <i className="fa-solid fa-hand-holding-heart"></i>
                                </div>
                                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#111' }}>
                                    Travel with Purpose
                                </h4>
                            </div>
                            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, margin: 0 }}>
                                A portion of your trip directly supports our ongoing community-driven and wildlife conservation projects across Sri Lanka. Experience the real culture while leaving a lasting positive footprint.
                            </p>
                            <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-green)' }}>
                                <i className="bi bi-arrow-right-circle-fill"></i>
                                <span>100% Locally Owned & Operated</span>
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
                    <div className="itinerary-header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
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

                    <div ref={itineraryRef} className="itinerary-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', padding: '20px', background: 'white' }}>
                        {/* Left Column: Map */}
                        <div>
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

                        {/* Right Column: Accordion */}
                        <div>
                            {pkg.itinerary.map((step, index) => (
                                <ItineraryDay 
                                    key={step.day} 
                                    step={step} 
                                    index={index} 
                                    forceOpen={allOpen} 
                                    isLastDay={index === pkg.itinerary.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Impactful Way Section */}
                <div className="impact-section">
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
                        <div className="impact-icon" style={{ background: '#111' }}>
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
                    <div className="important-notes-section" style={{ marginTop: '80px', padding: '20px 0' }}>
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
                    <div className="reviews-container" id="reviews">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111', marginBottom: '50px' }}>Reviews</h2>
                        
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
                                                    className={`breakdown-bar ${star === 5 ? 'animated-rising' : ''}`} 
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
                                .map((review) => (
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
                                    <div className="review-actions">
                                        <div className="review-action">
                                            <i className="bi bi-flag"></i>
                                        </div>
                                        <div 
                                            className="review-action" 
                                            onClick={() => setLikedReviews(prev => ({ ...prev, [review.id]: (prev[review.id] || 0) + 1 }))}
                                            style={{ color: likedReviews[review.id] ? 'var(--primary-green)' : 'inherit', opacity: likedReviews[review.id] ? 1 : 0.7 }}
                                        >
                                            <i className={`bi bi-hand-thumbs-up${likedReviews[review.id] ? '-fill' : ''}`}></i>
                                            {likedReviews[review.id] > 0 && <span style={{ fontSize: '0.9rem', fontWeight: 700, marginLeft: '5px' }}>{likedReviews[review.id]}</span>}
                                        </div>
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
                )}

                {/* Customers Who Bought This Tour Also Bought */}
                <div className="also-bought-container">
                    <h2 className="also-bought-title">Customers Who Bought This Tour Also Bought</h2>
                    <div className="also-bought-grid">
                        {tourPackages
                            .filter(t => t.id !== pkg.id)
                            .slice(0, 6)
                            .map((tour) => (
                            <div key={tour.id} className="tour-card-mini" onClick={() => { navigate(`/package/${tour.id}`); window.scrollTo(0, 0); }}>
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
                                    <div className="category-tag">Day Trips</div>
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
                                        from <strong>USD {tour.price.replace('$', '')}</strong>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                                <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.85rem', fontWeight: 600 }}>USD {getOriginalPrice().replace('$', '')}</span>
                            )}
                            <span className="price-amount" style={{ fontSize: '1.4rem' }}>USD {getPrice().replace('$', '')}</span>
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
