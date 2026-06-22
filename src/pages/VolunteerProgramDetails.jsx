import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { volunteerPrograms } from '../data/volunteerPrograms';
import stayEatBg from '../assets/548331228.jpg';
import stayImg1 from '../assets/823542472.jpg';
import stayImg2 from '../assets/bhliddcrgzqq8yrfvels.webp';
import stayImg3 from '../assets/caption.jpg';
import { volunteerReviews } from '../data/volunteerReviews';
import { useCurrency } from '../context/CurrencyContext';
import { publicHolidays } from '../data/holidays';
import brandLogo from '../assets/brand_logo.png';

const VolunteerProgramDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { formatPrice } = useCurrency();

    const program = volunteerPrograms.find(p => p.id === id);
    const reviews = volunteerReviews[id] || [];

    const [selectedSkills, setSelectedSkills] = useState([]);
    const [showImportantNotes, setShowImportantNotes] = useState(true);
    const [showWhatsIncluded, setShowWhatsIncluded] = useState(true);
    const [showHolidaysModal, setShowHolidaysModal] = useState(false);
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);

    useEffect(() => {
        if (showHolidaysModal || showGalleryModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showHolidaysModal, showGalleryModal]);

    const toggleSkill = (skillTitle, skillPrice) => {
        setSelectedSkills(prev => {
            if (prev.some(s => s.title === skillTitle)) {
                return prev.filter(s => s.title !== skillTitle);
            } else {
                return [...prev, { title: skillTitle, price: skillPrice || '0' }];
            }
        });
    };

    const getInquiryUrl = () => {
        if (!program) return '';
        let url = `/volunteer-inquiry?program=${encodeURIComponent(program.title)}`;
        if (selectedSkills.length > 0) {
            url += `&skills=${encodeURIComponent(selectedSkills.map(s => s.title).join(', '))}`;
        }
        return url;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!program) {
        return (
            <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#ffffff' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px', color: '#1d1d1f', letterSpacing: '-0.02em' }}>Program Not Found</h2>
                <button className="btn-apple-solid" style={{ background: '#1d1d1f', color: 'white', padding: '12px 28px', borderRadius: '50px', fontSize: '1rem', fontWeight: 700, border: 'none', cursor: 'pointer' }} onClick={() => navigate('/volunteer')}>Return to Volunteer Hub</button>
            </div>
        );
    }

    let isGray = false;
    const getNextBgClass = () => {
        const bgClass = isGray ? 'gray-bg' : 'white-bg';
        isGray = !isGray;
        return bgClass;
    };

    return (
        <div className="volunteer-details-page" style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '120px' }}>
            
            {/* Immersive Apple-Style Hero */}
            <div className="hero-apple" style={{
                position: 'relative',
                height: '45vh',
                minHeight: '300px',
                background: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.65)), url(${program.coverImage || program.image}) ${program.bgPosition || 'center'}/cover no-repeat`,
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: '40px',
                color: 'white',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%', padding: '0 5%', position: 'relative', zIndex: 2 }}>
                    <span style={{ 
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        padding: '6px 16px',
                        borderRadius: '50px',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                        <i className="fa-solid fa-location-dot" style={{ fontSize: '0.75rem' }}></i> {program.location}
                    </span>
                    <h1 style={{ 
                        fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', 
                        fontWeight: 900, 
                        lineHeight: 1.05, 
                        letterSpacing: '-0.04em', 
                        margin: '0 0 12px 0',
                        textShadow: '0 4px 30px rgba(0,0,0,0.3)'
                    }}>
                        {program.title}
                    </h1>
                    <p style={{ 
                        fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)', 
                        maxWidth: '650px', 
                        lineHeight: 1.5, 
                        color: 'rgba(255,255,255,0.92)', 
                        fontWeight: 500,
                        margin: 0,
                        textShadow: '0 2px 15px rgba(0,0,0,0.25)'
                    }}>
                        {program.shortDesc}
                    </p>
                </div>
            </div>

            {/* Sticky Subnav (IVHQ Style) */}
            <div className="local-subnav-wrapper" style={{
                position: '-webkit-sticky',
                position: 'sticky', /* eslint-disable-line */
                top: '90px',
                zIndex: 999,
                background: '#f9f9f9',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
            }}>
                <div className="local-subnav" style={{
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '16px 5%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '30px'
                    }}>
                        <a href="#overview" style={{ textDecoration: 'none', color: '#1d1d1f', fontWeight: 600, fontSize: '0.85rem' }} className="subnav-link">Overview</a>
                        {program.highlights && <a href="#highlights" style={{ textDecoration: 'none', color: '#1d1d1f', fontWeight: 600, fontSize: '0.85rem' }} className="subnav-link">Highlights</a>}
                        {program.accommodation && <a href="#accommodation" style={{ textDecoration: 'none', color: '#1d1d1f', fontWeight: 600, fontSize: '0.85rem' }} className="subnav-link">Accommodation & Meals</a>}
                        <a href="#pricing" style={{ textDecoration: 'none', color: '#1d1d1f', fontWeight: 600, fontSize: '0.85rem' }} className="subnav-link">Pricing</a>
                        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#1d1d1f' }} onClick={() => window.scrollTo(0,0)}>
                                Top <i className="bi bi-chevron-up"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 1: Specs, Overview & Gallery */}
            <div className={`detail-section ${getNextBgClass()}`} style={{ paddingTop: '30px' }}>
                <div className="detail-section-inner">
                    <div className="bento-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '12px',
                        marginBottom: '40px'
                    }}>
                    <div className="bento-card" style={{
                        background: '#f5f5f7',
                        padding: '16px 20px',
                        borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                    }}>
                        <div style={{ 
                            color: 'var(--primary-green)', 
                            fontSize: '1.2rem',
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            background: 'rgba(27, 163, 82, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <i className="bi bi-clock"></i>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.65rem', color: '#86868b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1px' }}>Duration</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{program.duration}</div>
                        </div>
                    </div>

                    <div className="bento-card" style={{
                        background: '#f5f5f7',
                        padding: '16px 20px',
                        borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                    }}>
                        <div style={{ 
                            color: 'var(--primary-green)', 
                            fontSize: '1.2rem',
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            background: 'rgba(27, 163, 82, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <i className="bi bi-house"></i>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.65rem', color: '#86868b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1px' }}>Housing</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{program.housing}</div>
                        </div>
                    </div>

                    <div className="bento-card" style={{
                        background: '#f5f5f7',
                        padding: '16px 20px',
                        borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                    }}>
                        <div style={{ 
                            color: 'var(--primary-green)', 
                            fontSize: '1.2rem',
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            background: 'rgba(27, 163, 82, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <i className="bi bi-tag"></i>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.65rem', color: '#86868b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1px' }}>Program Fee</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary-green)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>From {formatPrice(program.price)}</div>
                            <div style={{ fontSize: '0.58rem', color: '#86868b', fontWeight: 600, marginTop: '2px', lineHeight: 1.1 }}>No registration fee • No hidden fee</div>
                        </div>
                    </div>

                    <div className="bento-card" style={{
                        background: '#f5f5f7',
                        padding: '16px 20px',
                        borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                    }}>
                        <div style={{ 
                            color: 'var(--primary-green)', 
                            fontSize: '1.2rem',
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            background: 'rgba(27, 163, 82, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <i className="bi bi-shield-check"></i>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.65rem', color: '#86868b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1px' }}>Min Age</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{program.minAge}</div>
                        </div>
                    </div>
                </div>

                {/* About Dynamic Section */}

                <div id="overview" className="section-card" style={{
                    background: 'transparent',
                    padding: '45px 0',
                    marginBottom: '45px',
                    borderBottom: (program.galleryImages && program.galleryImages.length > 0) ? '1px solid #eaeaea' : 'none',
                    textAlign: 'left'
                }}>
                    <div style={{ marginBottom: '24px' }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1d1d1f', margin: 0 }}>About This Program</h2>
                    </div>
                    <p style={{ margin: 0, color: '#424245', fontSize: '1.05rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                        {program.description}
                    </p>
                </div>

                {/* Photo Gallery */}
                {program.galleryImages && program.galleryImages.length > 0 && (
                    <div className="section-card" style={{
                        background: 'transparent',
                        padding: '0 0 45px 0',
                        marginBottom: '45px',
                        borderBottom: '1px solid #eaeaea'
                    }}>
                        <style>
                            {`
                                .modern-vol-gallery {
                                    display: grid;
                                    grid-template-columns: 2.5fr 4fr 2.5fr 1.5fr;
                                    grid-template-rows: repeat(4, 120px);
                                    gap: 8px;
                                    border-radius: 16px;
                                    overflow: hidden;
                                }
                                .modern-vol-gallery-item {
                                    position: relative;
                                    overflow: hidden;
                                    cursor: pointer;
                                }
                                .modern-vol-gallery-item:nth-child(1) { grid-column: 1; grid-row: 1 / span 4; }
                                .modern-vol-gallery-item:nth-child(2) { grid-column: 2; grid-row: 1 / span 4; }
                                .modern-vol-gallery-item:nth-child(3) { grid-column: 3; grid-row: 1 / span 2; }
                                .modern-vol-gallery-item:nth-child(4) { grid-column: 3; grid-row: 3 / span 2; }
                                .modern-vol-gallery-item:nth-child(5) { grid-column: 4; grid-row: 1; }
                                .modern-vol-gallery-item:nth-child(6) { grid-column: 4; grid-row: 2; }
                                .modern-vol-gallery-item:nth-child(7) { grid-column: 4; grid-row: 3; }
                                .modern-vol-gallery-item:nth-child(8) { grid-column: 4; grid-row: 4; }
                                
                                .modern-vol-gallery-item img, .modern-vol-gallery-item video {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                    transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
                                    display: block;
                                }
                                .modern-vol-gallery-item:hover img, .modern-vol-gallery-item:hover video {
                                    transform: scale(1.05);
                                }
                                
                                @media (max-width: 900px) {
                                    .modern-vol-gallery {
                                        grid-template-columns: repeat(4, 1fr);
                                        grid-template-rows: repeat(4, 150px);
                                    }
                                    .modern-vol-gallery-item:nth-child(1) { grid-column: 1 / span 2; grid-row: 1 / span 2; }
                                    .modern-vol-gallery-item:nth-child(2) { grid-column: 3 / span 2; grid-row: 1 / span 2; }
                                    .modern-vol-gallery-item:nth-child(3) { grid-column: 1 / span 2; grid-row: 3; }
                                    .modern-vol-gallery-item:nth-child(4) { grid-column: 3 / span 2; grid-row: 3; }
                                    .modern-vol-gallery-item:nth-child(5) { grid-column: 1; grid-row: 4; }
                                    .modern-vol-gallery-item:nth-child(6) { grid-column: 2; grid-row: 4; }
                                    .modern-vol-gallery-item:nth-child(7) { grid-column: 3; grid-row: 4; }
                                    .modern-vol-gallery-item:nth-child(8) { grid-column: 4; grid-row: 4; }
                                }
                                @media (max-width: 600px) {
                                    .modern-vol-gallery {
                                        grid-template-columns: repeat(2, 1fr);
                                        grid-auto-rows: 150px;
                                    }
                                    .modern-vol-gallery-item:nth-child(1) { grid-column: 1 / span 2; grid-row: 1 / span 2; }
                                    .modern-vol-gallery-item:nth-child(n+2) { grid-column: span 1; grid-row: span 1; }
                                }
                            `}
                        </style>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{
                                width: '4px',
                                height: '28px',
                                borderRadius: '4px',
                                background: 'var(--primary-green)'
                            }}></div>
                            <h2 className="section-heading-modern" style={{ margin: 0 }}>Photo Gallery</h2>
                        </div>
                        <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.6', marginTop: '10px', marginBottom: '20px', maxWidth: '800px' }}>
                            Get a glimpse into the everyday life, community connections, and unforgettable moments you'll experience during your Giveback Journey in Sri Lanka.
                        </p>
                        
                        {/* Meta Info Bar */}
                        <div style={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            alignItems: 'center', 
                            justifyContent: 'space-between', 
                            paddingBottom: '20px', 
                            marginBottom: '24px', 
                            borderBottom: '1px solid #eaeaea',
                            color: '#222222',
                            fontSize: '0.95rem',
                            gap: '16px'
                        }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', fontWeight: 500 }}>
                                <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>Excellent 4.15<i className="bi bi-star-fill" style={{ marginLeft: '4px', fontSize: '0.85rem' }}></i></span>
                                <span style={{ color: '#717171' }}>·</span>
                                <a href="#reviews" style={{ textDecoration: 'underline', color: 'inherit', cursor: 'pointer', fontWeight: 600 }}>75+ reviews</a>
                                <span style={{ color: '#717171' }}>·</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary-green)' }}><i className="bi bi-patch-check"></i> Verified</span>
                                <span style={{ color: '#717171' }}>·</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'underline', cursor: 'pointer', fontWeight: 500 }}>
                                    <i className="bi bi-geo-alt-fill" style={{ color: '#717171' }}></i> {program.location}
                                </span>
                            </div>
                            
                        </div>

                        <div className="modern-vol-gallery">
                            {program.galleryImages.slice(0, 8).map((img, idx) => {
                                const isLastImg = idx === 7 && program.galleryImages.length > 8;
                                return (
                                <motion.div 
                                    key={idx} 
                                    className="modern-vol-gallery-item" 
                                    initial={{ opacity: 0, y: 35, scale: 0.94 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    onClick={() => {
                                        setActiveGalleryIdx(idx);
                                        setShowGalleryModal(true);
                                    }}
                                >
                                    {img.type === 'video' || (typeof img.src === 'string' && (img.src.toLowerCase().endsWith('.mov') || img.src.toLowerCase().endsWith('.mp4'))) ? (
                                        <>
                                            <video
                                                src={img.src}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)'
                                                }}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                width: '64px',
                                                height: '64px',
                                                borderRadius: '50%',
                                                background: 'rgba(0,0,0,0.4)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                zIndex: 1,
                                                backdropFilter: 'blur(4px)',
                                                border: '2px solid rgba(255,255,255,0.8)'
                                            }}>
                                                <i className="bi bi-play-fill" style={{ fontSize: '2.5rem', marginLeft: '6px' }}></i>
                                            </div>
                                            <div style={{
                                                position: 'absolute',
                                                top: '16px',
                                                left: '16px',
                                                zIndex: 3,
                                                background: 'rgba(255, 255, 255, 0.15)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                                padding: '6px 14px',
                                                borderRadius: '30px',
                                                color: '#ffffff',
                                                fontWeight: 700,
                                                fontSize: '0.85rem',
                                                letterSpacing: '0.5px',
                                                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                            }}>
                                                Giveback Journey
                                            </div>
                                        </>
                                    ) : (
                                        <img 
                                            src={img.src} 
                                            alt={img.caption}
                                        />
                                    )}
                                    
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '50%',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                                        pointerEvents: 'none',
                                        zIndex: 1
                                    }}></div>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '16px',
                                        left: '16px',
                                        right: '16px',
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        zIndex: 2,
                                        textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                                        pointerEvents: 'none'
                                    }}>
                                        <span style={{ 
                                            display: 'block',
                                            overflow: 'hidden', 
                                            textOverflow: 'ellipsis', 
                                            whiteSpace: 'nowrap',
                                            maxWidth: isLastImg ? 'calc(100% - 110px)' : '100%'
                                        }}>
                                            {img.caption}
                                        </span>
                                    </div>
                                    {isLastImg && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '12px',
                                            right: '12px',
                                            background: 'rgba(0,0,0,0.8)',
                                            color: 'white',
                                            padding: '8px 14px',
                                            borderRadius: '6px',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            zIndex: 2,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                                        }}>
                                            <i className="bi bi-images"></i>
                                            {program.galleryImages.length} Photos
                                        </div>
                                    )}
                                </motion.div>
                                );
                            })}
                        </div>
                    </div>
                )}
                </div>
            </div>

            {/* Section 2: Program Highlights */}
            {program.highlights && program.highlights.length > 0 && (
                <div className={`detail-section ${getNextBgClass()}`} id="highlights">
                    <div className="detail-section-inner">
                        <div className="section-card" style={{
                            background: 'transparent',
                            padding: '0',
                            marginBottom: '0'
                        }}>
                            <div style={{ marginBottom: '24px' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>Key Details</span>
                                <h2 className="section-heading-modern" style={{ margin: 0 }}>Program Highlights</h2>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px' }}>
                                {program.highlights.map((highlight, idx) => (
                                    <div key={idx} style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '16px', 
                                        padding: '16px 20px', 
                                        borderRadius: '16px', 
                                        background: '#ffffff',
                                        border: '1px solid rgba(0,0,0,0.02)',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                                    }}>
                                    <div style={{
                                        background: 'var(--primary-green)',
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        flexShrink: 0,
                                        fontSize: '0.9rem'
                                    }}>
                                        <i className="bi bi-check-lg"></i>
                                    </div>
                                    <span style={{ fontSize: '1rem', fontWeight: 600, color: '#1d1d1f', lineHeight: 1.4 }}>{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            )}

            {/* Dynamic Sections & Timeline Itinerary */}
            {program.sections && program.sections.filter(s => !s.title.toLowerCase().includes('impact')).map((section, idx, filteredArr) => {
                const isTeachingOptions = section.title === 'Teaching Placement Options';
                const isItinerary = section.title.toLowerCase().includes('itinerary');
                const isExperienceCategories = section.title.toLowerCase().includes('experience categories');
                const sectionBg = getNextBgClass();
                return (
                    <div key={idx} id={isItinerary ? "itinerary" : `section-${idx}`} className={`detail-section ${sectionBg}`}>
                        <div className="detail-section-inner">
                            <div className="section-card" style={{ background: 'transparent', padding: '0', marginBottom: '0', textAlign: 'left' }}>
                                <div style={{ marginBottom: '24px' }}>
                                    {isItinerary && <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>Schedule</span>}
                                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1d1d1f', margin: 0 }}>{section.title}</h2>
                                </div>
                            
                            {isItinerary ? (
                                <div className="itinerary-timeline" style={{ position: 'relative', paddingLeft: '30px' }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: '11px',
                                        top: '15px',
                                        bottom: '15px',
                                        width: '2px',
                                        background: '#e5e5ea'
                                    }}></div>
                                    
                                    {section.paragraphs.map((para, pIdx) => {
                                        let day = "";
                                        let details = "";
                                        if (para.startsWith('**')) {
                                            const parts = para.split('**');
                                            day = parts[1];
                                            details = parts[2]?.replace(/^[\s-–:]+/, '') || "";
                                        } else {
                                            day = `Day ${pIdx + 1}`;
                                            details = para;
                                        }
                                        
                                        return (
                                            <div key={pIdx} style={{ position: 'relative', marginBottom: '30px' }} className="timeline-item">
                                                <div style={{
                                                    position: 'absolute',
                                                    left: '-30px',
                                                    top: '6px',
                                                    width: '24px',
                                                    height: '24px',
                                                    borderRadius: '50%',
                                                    background: 'white',
                                                    border: '4px solid var(--primary-green)',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                                    zIndex: 2,
                                                    transition: 'all 0.3s ease'
                                                }} className="timeline-node"></div>
                                                
                                                <div style={{
                                                    background: sectionBg === 'white-bg' ? '#f5f5f7' : '#ffffff',
                                                    padding: '20px 25px',
                                                    borderRadius: '20px',
                                                    border: '1px solid rgba(0,0,0,0.02)',
                                                    transition: 'all 0.3s ease'
                                                }} className="timeline-content">
                                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1d1d1f', margin: '0 0 6px 0', letterSpacing: '-0.01em' }}>{day}</h3>
                                                    <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#444444', margin: 0 }}>{details}</p>
                                                </div>
                                            </div>
                                        );
                                     })}
                                </div>
                            ) : isExperienceCategories ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                                    {/* Educational Banner */}
                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, rgba(27, 163, 82, 0.05) 100%)',
                                        border: '1px solid rgba(13, 148, 136, 0.2)',
                                        borderRadius: '24px',
                                        padding: '30px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '16px',
                                        boxShadow: '0 10px 30px rgba(13, 148, 136, 0.04)',
                                        lineHeight: 1.6,
                                        marginBottom: '10px'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{
                                                background: 'var(--primary-green)',
                                                color: 'white',
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.4rem'
                                            }}>
                                                <i className="bi bi-info-circle-fill"></i>
                                            </div>
                                            <div>
                                                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900, color: '#1d1d1f' }}>Design Your Custom 7-Day Tour</h4>
                                                <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: 600 }}>Immersive Learning & Custom Itinerary Mapping</span>
                                            </div>
                                        </div>
                                        <p style={{ margin: 0, color: '#444', fontSize: '1rem', lineHeight: 1.6 }}>
                                            The <strong>Ceylon Skill Odyssey</strong> is a fully customized 7-day program built specifically around your interests. To ensure a comprehensive and rich itinerary, <strong>you must select a minimum of 10 skills</strong> from the categories below. 
                                        </p>
                                        <div style={{ 
                                            display: 'grid', 
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
                                            gap: '12px', 
                                            background: 'rgba(255,255,255,0.6)', 
                                            padding: '16px 20px', 
                                            borderRadius: '16px', 
                                            border: '1px solid rgba(0,0,0,0.02)' 
                                        }}>
                                            <div style={{ display: 'flex', gap: '8px', fontSize: '0.9rem', color: '#333' }}>
                                                <i className="bi bi-check-circle-fill" style={{ color: 'var(--primary-green)' }}></i>
                                                <span><strong>10 Skills Minimum:</strong> Required to build a complete 7-day schedule.</span>
                                            </div>
                                            <div style={{ display: 'flex', gap: '8px', fontSize: '0.9rem', color: '#333' }}>
                                                <i className="bi bi-geo-alt-fill" style={{ color: 'var(--primary-green)' }}></i>
                                                <span><strong>Custom Routing:</strong> Locations and local instructors are arranged specifically for your selected skills.</span>
                                            </div>
                                        </div>
                                    </div>

                                    {(() => {
                                         const categories = [];
                                         for (let i = 0; i < section.paragraphs.length; i += 2) {
                                            const headerRaw = section.paragraphs[i];
                                            const itemsRaw = section.paragraphs[i + 1];
                                            if (headerRaw && itemsRaw) {
                                                const header = headerRaw.replace(/\*\*/g, '').trim();
                                                const items = itemsRaw.split('\n').map(line => {
                                                    const cleanLine = line.replace(/^[•\s\-]+/, '').trim();
                                                    let title = "";
                                                    let description = "";
                                                    let price = "";
                                                    // Extract price tag [USD XX]
                                                    const priceMatch = cleanLine.match(/\[USD\s+(\d+)\]/);
                                                    if (priceMatch) {
                                                        price = priceMatch[1];
                                                    }
                                                    const lineWithoutPrice = cleanLine.replace(/\s*\[USD\s+\d+\]/, '').trim();
                                                    if (lineWithoutPrice.startsWith('**')) {
                                                        const parts = lineWithoutPrice.split('**');
                                                        title = parts[1] || "";
                                                        description = parts[2]?.replace(/^[\s-–—:]+/, '') || "";
                                                    } else {
                                                        const idx = lineWithoutPrice.indexOf(' – ');
                                                        if (idx !== -1) {
                                                            title = lineWithoutPrice.substring(0, idx);
                                                            description = lineWithoutPrice.substring(idx + 3);
                                                        } else {
                                                            const idx2 = lineWithoutPrice.indexOf(' - ');
                                                            if (idx2 !== -1) {
                                                                title = lineWithoutPrice.substring(0, idx2);
                                                                description = lineWithoutPrice.substring(idx2 + 3);
                                                            } else {
                                                                title = lineWithoutPrice;
                                                            }
                                                        }
                                                    }
                                                    return { title, description, price };
                                                });
                                                categories.push({ header, items });
                                            }
                                        }

                                        return categories.map((cat, catIdx) => (
                                            <div key={catIdx} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                                <h3 style={{ 
                                                    fontSize: '1.4rem', 
                                                    fontWeight: 800, 
                                                    color: '#1d1d1f', 
                                                    letterSpacing: '-0.02em', 
                                                    margin: '0',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px'
                                                }}>
                                                    {cat.header.toLowerCase().includes('kandy') ? (
                                                        <i className="bi bi-bank" style={{ color: 'var(--primary-green)', fontSize: '1.25rem' }}></i>
                                                    ) : cat.header.toLowerCase().includes('galle') ? (
                                                        <i className="bi bi-water" style={{ color: 'var(--primary-green)', fontSize: '1.25rem' }}></i>
                                                    ) : null}
                                                    {cat.header}
                                                </h3>
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px' }}>
                                                    {cat.items.map((item, itemIdx) => {
                                                         const isSelected = selectedSkills.some(s => s.title === item.title);
                                                         return (
                                                             <div key={itemIdx} 
                                                                 className="skill-highlight-card" 
                                                                 onClick={() => toggleSkill(item.title, item.price)}
                                                                 style={{ 
                                                                     display: 'flex', 
                                                                     alignItems: 'flex-start', 
                                                                     gap: '16px', 
                                                                     padding: '16px 20px', 
                                                                     borderRadius: '16px', 
                                                                     background: isSelected ? 'white' : (sectionBg === 'white-bg' ? '#f5f5f7' : '#ffffff'), 
                                                                     border: `1px solid ${isSelected ? 'var(--primary-green)' : 'rgba(0,0,0,0.02)'}`,
                                                                     boxShadow: isSelected ? '0 10px 30px rgba(27, 163, 82, 0.08)' : 'none',
                                                                     cursor: 'pointer',
                                                                     transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                                                                 }}
                                                             >
                                                                 <div className="skill-highlight-icon" style={{
                                                                     background: isSelected ? '#158a3d' : 'var(--primary-green)',
                                                                     width: '28px',
                                                                     height: '28px',
                                                                     borderRadius: '50%',
                                                                     display: 'flex',
                                                                     alignItems: 'center',
                                                                     justifyContent: 'center',
                                                                     color: 'white',
                                                                     flexShrink: 0,
                                                                     fontSize: '0.95rem',
                                                                     marginTop: '2px',
                                                                     transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                                                                 }}>
                                                                     <i className={`bi ${isSelected ? 'bi-check-lg' : 'bi-plus-lg'}`}></i>
                                                                 </div>
                                                                 <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                                                                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                                                                         <span style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f', lineHeight: 1.3 }}>{item.title}</span>
                                                                         {item.price && (
                                                                             <span style={{
                                                                                 fontSize: '0.75rem',
                                                                                 fontWeight: 800,
                                                                                 color: 'var(--primary-green)',
                                                                                 background: isSelected ? 'rgba(27, 163, 82, 0.1)' : 'rgba(27, 163, 82, 0.08)',
                                                                                 padding: '3px 10px',
                                                                                 borderRadius: '50px',
                                                                                 whiteSpace: 'nowrap',
                                                                                 letterSpacing: '0.3px',
                                                                                 flexShrink: 0,
                                                                                 border: isSelected ? '1px solid rgba(27, 163, 82, 0.2)' : '1px solid transparent',
                                                                                 transition: 'all 0.3s ease'
                                                                             }}>
                                                                                 ${item.price}
                                                                             </span>
                                                                         )}
                                                                     </div>
                                                                     {item.description && (
                                                                         <span style={{ fontSize: '0.88rem', color: '#555555', lineHeight: 1.45 }}>{item.description}</span>
                                                                     )}
                                                                 </div>
                                                             </div>
                                                         );
                                                     })}
                                                </div>
                                            </div>
                                        ));
                                    })()}
                                </div>
                            ) : (
                                <div style={{ color: '#424245', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'left' }}>
                                    {(() => {
                                        const elements = [];
                                        let currentList = [];
                                        const flushList = () => {
                                            if (currentList.length > 0) {
                                                elements.push(<ul key={`ul-${elements.length}`} style={{ paddingLeft: '20px', marginBottom: '10px' }}>{[...currentList]}</ul>);
                                                currentList = [];
                                            }
                                        };
                                        section.paragraphs.forEach((para, pIdx) => {
                                            if (para.startsWith('- ')) {
                                                currentList.push(<li key={`li-${pIdx}`} style={{ marginBottom: '4px' }}>{para.substring(2)}</li>);
                                            } else {
                                                flushList();
                                                if (para.startsWith('**')) {
                                                    const parts = para.split('**');
                                                    const isTeachingOptions = section.title === 'Teaching Placement Options';
                                                    const hasNumber = /^\d+\./.test(parts[1].trim());
                                                    
                                                    // Default to green, unless it's a non-numbered item in the Teaching Options section
                                                    const textColor = (isTeachingOptions && !hasNumber) ? '#1d1d1f' : 'var(--primary-green)';
                                                    
                                                    elements.push(
                                                        <p key={`p-${pIdx}`} style={{ marginBottom: '10px' }}>
                                                            <strong style={{ color: textColor }}>{parts[1]}</strong>{parts[2]}
                                                        </p>
                                                    );
                                                } else {
                                                    elements.push(
                                                        <p key={`p-${pIdx}`} style={{ marginBottom: '10px' }}>
                                                            {para}
                                                        </p>
                                                    );
                                                }
                                            }
                                        });
                                        flushList();
                                        return elements;
                                    })()}
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Volunteer Schedule Example */}
            <div className={`detail-section ${getNextBgClass()}`}>
                <div className="detail-section-inner">
                    <div className="section-card" style={{ background: 'transparent', padding: '0', marginBottom: '0', textAlign: 'left' }}>
                        <div style={{ marginBottom: '24px' }}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1d1d1f', margin: 0 }}>Volunteer schedule example</h2>
                        </div>
                        <div style={{ color: '#424245', fontSize: '1.05rem', lineHeight: 1.7 }}>
                            <p style={{ marginBottom: '16px', fontWeight: 700, color: 'var(--primary-green)' }}>Weekdays:</p>
                            <p style={{ marginBottom: '16px' }}>Volunteers generally spend around 4–6 hours per day at their project placements. Most placements operate with a morning session followed by a lunch break and an afternoon session. Exact working hours may vary depending on the project, local conditions, and the needs of the community.</p>
                            <p style={{ marginBottom: '24px' }}>A typical weekday may look like this:</p>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 160px) 1fr', gap: '16px' }}>
                                    <div style={{ fontWeight: 800, color: '#424245', fontSize: '0.95rem' }}>07:00 – 08:00 AM</div>
                                    <div>Enjoy breakfast with fellow volunteers at the accommodation and prepare for the day ahead.</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 160px) 1fr', gap: '16px' }}>
                                    <div style={{ fontWeight: 800, color: '#424245', fontSize: '0.95rem' }}>08:30 – 08:45 AM</div>
                                    <div>Travel to the project site with the local team and receive instructions for the day's activities.</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 160px) 1fr', gap: '16px' }}>
                                    <div style={{ fontWeight: 800, color: '#424245', fontSize: '0.95rem' }}>09:00 AM – 12:00 PM</div>
                                    <div>Morning project session. Volunteers participate in activities alongside local staff and community members. Duties will vary depending on the chosen project and may include teaching, childcare, renovation work, community outreach, or observational experiences.</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 160px) 1fr', gap: '16px' }}>
                                    <div style={{ fontWeight: 800, color: '#424245', fontSize: '0.95rem' }}>12:00 PM – 01:00 PM</div>
                                    <div>Lunch break. Volunteers may return to the accommodation or enjoy lunch near the placement, depending on the location.</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 160px) 1fr', gap: '16px' }}>
                                    <div style={{ fontWeight: 800, color: '#424245', fontSize: '0.95rem' }}>01:30 PM – 03:30 PM</div>
                                    <div>Break for lesson planning if required or you will be able to relax a bit.</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 160px) 1fr', gap: '16px' }}>
                                    <div style={{ fontWeight: 800, color: '#424245', fontSize: '0.95rem' }}>03:30 PM – 05:30 PM</div>
                                    <div>Afternoon project session. Continue working with local staff and contribute to ongoing activities and community initiatives. Return to the volunteer accommodation. Free time can be used to relax, explore the local area, or spend time with other participants.</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 160px) 1fr', gap: '16px' }}>
                                    <div style={{ fontWeight: 800, color: '#424245', fontSize: '0.95rem' }}>07:00 PM – 08:00 PM</div>
                                    <div>Dinner is served at the volunteer accommodation, providing an opportunity to share experiences and connect with volunteers from around the world.</div>
                                </div>
                            </div>
                            
                            <p style={{ marginBottom: '24px', fontStyle: 'italic', fontSize: '0.95rem' }}>Please note that daily schedules may vary depending on weather conditions, public holidays, school holidays, local festivals, and the requirements of individual placements. Some projects may operate with slightly different hours or schedules. We recommend checking your travel dates in advance to determine whether they coincide with any <span onClick={() => setShowHolidaysModal(true)} style={{ fontWeight: 'bold', color: '#007aff', textDecoration: 'underline', cursor: 'pointer' }}>local holidays</span>, as these may affect project activities.</p>
                            
                            <p style={{ marginBottom: '16px', fontWeight: 700, color: 'var(--primary-green)' }}>Weekends:</p>
                            <p style={{ marginBottom: '16px' }}>Weekends are free for volunteers to relax and discover more of Sri Lanka. Participants often use this time to travel independently, join optional excursions, or simply enjoy the local surroundings.</p>
                            
                            <p style={{ marginBottom: '12px', fontWeight: 600 }}>Popular weekend activities include:</p>
                            <ul style={{ marginBottom: '24px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li>Visiting beautiful beaches and coastal towns.</li>
                                <li>Exploring ancient temples and cultural sites.</li>
                                <li>Hiking and nature walks.</li>
                                <li>Wildlife safaris and national parks.</li>
                                <li>Shopping at local markets.</li>
                                <li>Experiencing traditional Sri Lankan cuisine.</li>
                                <li>Taking part in cultural activities and village visits.</li>
                                <li>Joining organized tours and weekend excursions offered by the local team.</li>
                            </ul>
                            
                            <p style={{ marginBottom: '0' }}>Weekends provide an excellent opportunity to experience Sri Lanka's rich culture, natural beauty, and warm hospitality while creating lasting memories with fellow volunteers.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cinematic Image Break */}
            {program.galleryImages && program.galleryImages.length > 1 && (
                <div style={{
                    position: 'relative',
                    minHeight: '420px',
                    width: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'stretch'
                }}>
                    <img 
                        src={stayEatBg} 
                        alt="Program experience"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 1
                        }}
                    />
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.6) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '50px 5%',
                        zIndex: 2
                    }}>
                        <div style={{ 
                            maxWidth: '1200px', 
                            margin: '0 auto', 
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '40px',
                            flexWrap: 'wrap'
                        }}>
                            {/* Left side info */}
                            <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    color: 'rgba(255,255,255,0.85)',
                                    marginBottom: '10px',
                                    display: 'block'
                                }}>Your Journey</span>
                                <h3 style={{
                                    fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                                    fontWeight: 900,
                                    color: 'white',
                                    margin: 0,
                                    letterSpacing: '-0.03em',
                                    lineHeight: 1.15,
                                    textShadow: '0 2px 20px rgba(0,0,0,0.4)'
                                }}>Where you'll stay & what you'll eat</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '28px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: 600, fontSize: '0.98rem' }}>
                                        <i className="bi bi-house-door" style={{ fontSize: '1.35rem', color: 'var(--primary-green)' }}></i> Private & Shared Rooms
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: 600, fontSize: '0.98rem' }}>
                                        <i className="bi bi-cup-hot" style={{ fontSize: '1.35rem', color: 'var(--primary-green)' }}></i> 3 Local Meals
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: 600, fontSize: '0.98rem' }}>
                                        <i className="bi bi-droplet-half" style={{ fontSize: '1.35rem', color: 'var(--primary-green)' }}></i> Hot Showers
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: 600, fontSize: '0.98rem' }}>
                                        <i className="bi bi-shield-check" style={{ fontSize: '1.35rem', color: 'var(--primary-green)' }}></i> 24/7 Security
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: 600, fontSize: '0.98rem' }}>
                                        <i className="bi bi-badge-wc" style={{ fontSize: '1.35rem', color: 'var(--primary-green)' }}></i> Western Bathroom
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: 600, fontSize: '0.98rem' }}>
                                        <i className="bi bi-headset" style={{ fontSize: '1.35rem', color: 'var(--primary-green)' }}></i> 24h Support
                                    </div>
                                </div>
                            </div>

                            {/* Right side: 3 small image cards */}
                            <div style={{ 
                                display: 'flex', 
                                gap: '20px',
                                flex: '0 1 auto',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px 20px',
                                flexWrap: 'wrap'
                            }} className="stay-eat-cards-container">
                                {/* Card 1 */}
                                <div style={{
                                    position: 'relative',
                                    width: '150px',
                                    height: '210px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.35)',
                                    border: '1px solid rgba(255,255,255,0.25)'
                                }} className="stay-eat-card">
                                    <img src={stayImg1} alt="Breakfast" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="stay-eat-card-img" />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '14px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'rgba(0, 0, 0, 0.65)',
                                        backdropFilter: 'blur(8px)',
                                        WebkitBackdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        whiteSpace: 'nowrap',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                    }}>
                                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'white', letterSpacing: '0.5px' }}>Shared Rooms</span>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div style={{
                                    position: 'relative',
                                    width: '150px',
                                    height: '210px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 45px rgba(0,0,0,0.4)',
                                    border: '1px solid rgba(255,255,255,0.3)'
                                }} className="stay-eat-card">
                                    <img src={stayImg2} alt="Accommodation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="stay-eat-card-img" />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '14px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'rgba(0, 0, 0, 0.65)',
                                        backdropFilter: 'blur(8px)',
                                        WebkitBackdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        whiteSpace: 'nowrap',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                    }}>
                                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'white', letterSpacing: '0.5px' }}>Private Rooms</span>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div style={{
                                    position: 'relative',
                                    width: '150px',
                                    height: '210px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.35)',
                                    border: '1px solid rgba(255,255,255,0.25)'
                                }} className="stay-eat-card">
                                    <img src={stayImg3} alt="Local Cuisine" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="stay-eat-card-img" />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '14px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'rgba(0, 0, 0, 0.65)',
                                        backdropFilter: 'blur(8px)',
                                        WebkitBackdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        whiteSpace: 'nowrap',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                    }}>
                                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'white', letterSpacing: '0.5px' }}>Bathroom</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Accommodation Configurator Section */}
            {program.accommodation && (() => {
                const sectionBg = getNextBgClass();
                return (
                    <div className={`detail-section ${sectionBg}`} id="accommodation">
                        <div className="detail-section-inner" style={{ maxWidth: '1200px' }}>
                            <div className="section-card" style={{
                                background: 'transparent',
                                padding: '0',
                                marginBottom: '0'
                            }}>
                        <div style={{ marginBottom: '24px' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>Where You'll Stay</span>
                            <h2 className="section-heading-modern" style={{ margin: 0 }}>Accommodation Options</h2>
                        </div>
                        <p className="section-text-modern" style={{ marginBottom: '35px' }}>{program.accommodation.description}</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px', marginBottom: '45px' }}>
                            {program.accommodation.options.map((opt, idx) => (
                                <div key={idx} style={{ 
                                    padding: '30px 35px', 
                                    borderRadius: '24px', 
                                    background: '#ffffff', 
                                    border: '2px solid rgba(0,0,0,0.03)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }} className="config-tile">
                                    <div>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--primary-green)' }}><i className={`bi ${opt.icon}`}></i></div>
                                        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '6px', letterSpacing: '-0.01em' }}>{opt.title}</h3>
                                        <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>{opt.subtitle}</div>
                                        <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#444444', margin: 0 }}>{opt.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ background: sectionBg === 'white-bg' ? '#f5f5f7' : '#ffffff', padding: '30px 35px', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.01)' }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '15px', letterSpacing: '-0.01em' }}>At a glance specs</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px' }}>
                                {program.accommodation.features.map((feat, idx) => (
                                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e5e5ea' }}>
                                        <span style={{ color: '#86868b', fontWeight: 600, fontSize: '0.95rem' }}>{feat.label}</span>
                                        <span style={{ fontWeight: 800, color: '#1d1d1f', fontSize: '0.95rem' }}>{feat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 🚌 Transport Notice — under Accommodation */}
                        <div style={{
                            marginTop: '32px',
                            background: 'linear-gradient(135deg, #0a2e1a 0%, #0f3d22 100%)',
                            borderRadius: '20px',
                            padding: '28px 32px',
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'flex-start',
                            border: '1px solid rgba(27,163,82,0.2)'
                        }}>
                            {/* Icon */}
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'var(--primary-green)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <i className="fa-solid fa-bus" style={{ color: '#fff', fontSize: '1.1rem' }}></i>
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    <span style={{
                                        fontSize: '0.62rem',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        color: '#0a2e1a',
                                        background: 'var(--primary-green)',
                                        padding: '3px 11px',
                                        borderRadius: '50px'
                                    }}>Important Transport Notice</span>
                                </div>

                                <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
                                    🛬 Airport Pickup — Group Transfer Only
                                </h3>

                                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.8)', margin: '0 0 16px 0', fontWeight: 400 }}>
                                    {program.id !== 'real-sri-lanka-experience' && program.id !== 'professional-impact-program' && (
                                        <span style={{ display: 'block', background: 'rgba(234, 88, 12, 0.2)', borderLeft: '4px solid #ea580c', padding: '10px 15px', borderRadius: '8px', marginBottom: '15px', fontSize: '0.88rem', color: '#ffedd5' }}>
                                            <strong style={{ color: '#fff' }}>Note for 1-Week Stays:</strong> Airport arrival pickup is <strong style={{ color: '#fff' }}>not included</strong> for 1-week volunteering. However, you can request it through us and we will arrange it for an additional fee.
                                        </span>
                                    )}
                                    We collect all arriving volunteers from <strong style={{ color: '#fff' }}>Bandaranaike International Airport (CMB)</strong> as a group — we do <strong style={{ color: '#fff' }}>not</strong> offer individual pickups. Our group transfer window is{' '}
                                    <strong style={{ background: 'rgba(27,163,82,0.3)', color: '#4ade80', padding: '1px 8px', borderRadius: '5px' }}>2:00 PM – 5:00 PM Sri Lankan Time (SLST) on Sunday</strong>.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <div style={{
                                        display: 'flex', gap: '12px', alignItems: 'flex-start',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '12px',
                                        padding: '14px 16px'
                                    }}>
                                        <i className="fa-solid fa-calendar-days" style={{ color: 'var(--primary-green)', fontSize: '0.9rem', marginTop: '3px', flexShrink: 0 }}></i>
                                        <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, lineHeight: 1.65 }}>
                                            Programs start on <strong style={{ color: '#fff' }}>every other Monday</strong>. You need to arrive in the country and at the accommodation on <strong style={{ color: '#fff' }}>Sunday</strong> (the day before your program starts).
                                        </span>
                                    </div>
                                    <div style={{
                                        display: 'flex', gap: '12px', alignItems: 'flex-start',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '12px',
                                        padding: '14px 16px'
                                    }}>
                                        <i className="fa-solid fa-circle-info" style={{ color: 'var(--primary-green)', fontSize: '0.9rem', marginTop: '3px', flexShrink: 0 }}></i>
                                        <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, lineHeight: 1.65 }}>
                                            If your flight arrivals do <strong style={{ color: '#fff' }}>not match this Sunday window</strong>, or you prefer to travel independently, you will need to arrange your own taxi.
                                        </span>
                                    </div>
                                    <div style={{
                                        display: 'flex', gap: '12px', alignItems: 'flex-start',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '12px',
                                        padding: '14px 16px'
                                    }}>
                                        <i className="fa-solid fa-taxi" style={{ color: 'var(--primary-green)', fontSize: '0.9rem', marginTop: '3px', flexShrink: 0 }}></i>
                                        <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, lineHeight: 1.65 }}>
                                            We <strong style={{ color: '#fff' }}>can arrange a private taxi</strong> for arrivals outside the group window — however an <strong style={{ color: '#fff' }}>additional fee applies</strong> and must be paid and arranged with our team in advance before your departure.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })()}

            {/* Meals Specs Section */}
            {program.mealsInfo && (() => {
                return (
                    <div className="detail-section" id="meals" style={{ background: '#f5f5f7' }}>
                        <div className="detail-section-inner">
                            <div className="section-card" style={{
                                background: 'transparent',
                                padding: '0',
                                marginBottom: '0'
                            }}>
                        <div style={{ marginBottom: '24px' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>What You'll Eat</span>
                            <h2 className="section-heading-modern" style={{ margin: 0, color: '#1d1d1f' }}>Meals</h2>
                        </div>
                        <p className="section-text-modern" style={{ marginBottom: '35px', color: '#424245' }}>{program.mealsInfo.description}</p>
                        
                        <div className="meals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            <div style={{ padding: '30px', borderRadius: '24px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%), url(/images/sril-lanka-volunteer-breakfast-ivhq.jpg) center/cover no-repeat', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '320px', justifyContent: 'flex-end', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} className="meal-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="bi bi-sunrise-fill" style={{ fontSize: '1.8rem', color: 'var(--primary-green)' }}></i>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>Breakfast</h3>
                                </div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.95)', margin: 0, fontWeight: 500, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>{program.mealsInfo.examples.breakfast}</p>
                            </div>
                            <div style={{ padding: '30px', borderRadius: '24px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%), url(/images/photo-1743674453123-93356ade2891.jpg) center/cover no-repeat', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '320px', justifyContent: 'flex-end', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} className="meal-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="bi bi-sun-fill" style={{ fontSize: '1.8rem', color: 'var(--primary-green)' }}></i>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>Lunch</h3>
                                </div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.95)', margin: 0, fontWeight: 500, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>{program.mealsInfo.examples.lunch}</p>
                            </div>
                            <div style={{ padding: '30px', borderRadius: '24px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%), url(/images/ivhq-sri-lanka-lunch.jpg) center/cover no-repeat', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '320px', justifyContent: 'flex-end', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} className="meal-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="bi bi-moon-stars-fill" style={{ fontSize: '1.8rem', color: 'var(--primary-green)' }}></i>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>Dinner</h3>
                                </div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.95)', margin: 0, fontWeight: 500, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>{program.mealsInfo.examples.dinner}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })()}

            {/* Pricing Section */}
            <div className="detail-section" style={{ background: '#f4f7f8' }} id="pricing">
                <div className="detail-section-inner">
                    <div style={{ marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1d1d1f', margin: 0 }}>Pricing</h2>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', marginBottom: '40px' }}>
                        {/* Desktop Layout Uses CSS Grid or Flex, we use flex wrap for responsiveness */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                            {/* Left Column: Pricing Table */}
                            <div style={{ flex: '1 1 500px', background: 'white', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
                                <div style={{ 
                                    background: '#2c3e50', 
                                    padding: '24px 32px', 
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '16px', width: '100%' }}>
                                        <div style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Duration</div>
                                        <div>
                                            <div style={{ fontWeight: 800, marginBottom: '4px', fontSize: '1rem', color: '#ffffff' }}>Program Fee</div>
                                            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.4 }}>Due 30 days before start, or within 48h if registering inside 30 days.</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style={{ background: '#ffffff' }}>
                                    {[1, 2, 3, 4].map((week, idx) => {
                                        const basePrice = parseInt(program.price) || 190;
                                        const extraWeekPrice = parseInt(program.extraWeekPrice) || 50;
                                        const fee = week === 1 ? basePrice : basePrice + ((week - 1) * extraWeekPrice);
                                        const perDay = Math.round(fee / (week * 7));
                                        return (
                                            <div key={week} style={{ 
                                                display: 'grid', 
                                                gridTemplateColumns: '120px 1fr', 
                                                gap: '16px', 
                                                padding: '24px 32px',
                                                borderBottom: week < 4 ? '1px solid #f5f5f7' : 'none',
                                                background: '#ffffff',
                                                alignItems: 'center',
                                                transition: 'background 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = '#fcfcfc'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = '#ffffff'}
                                            >
                                                <div style={{ color: '#1d1d1f', fontSize: '1.1rem', fontWeight: 800 }}>{week} {week === 1 ? 'week' : 'weeks'}</div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                                                        <div style={{ fontWeight: 800, color: '#1d1d1f', fontSize: '1.3rem', letterSpacing: '-0.02em' }}>{formatPrice ? formatPrice(fee) : `$${fee}`}</div>
                                                        <div style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 800, background: 'rgba(27, 163, 82, 0.1)', padding: '6px 12px', borderRadius: '50px', letterSpacing: '0.5px' }}>Eq. {formatPrice ? formatPrice(perDay) : `$${perDay}`}/day</div>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: '#86868b', fontWeight: 500, marginTop: '4px' }}>
                                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                            <i className="bi bi-check-circle-fill" style={{ color: 'var(--primary-green)' }}></i> No Reg Fee
                                                        </span>
                                                        {week === 1 ? (
                                                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                <i className="bi bi-info-circle-fill" style={{ color: '#007aff' }}></i> Airport pickup available for an extra fee
                                                            </span>
                                                        ) : (
                                                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                <i className="bi bi-check-circle-fill" style={{ color: 'var(--primary-green)' }}></i> Airport Pickup Included
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Right Column: Important Notes */}
                            <div style={{ flex: '1 1 300px' }}>
                                <div 
                                    onClick={() => setShowImportantNotes(!showImportantNotes)}
                                    style={{ borderBottom: showImportantNotes ? '1px solid #eaeaea' : '1px solid transparent', paddingBottom: '16px', marginBottom: showImportantNotes ? '20px' : '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }}
                                >
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0, color: '#1d1d1f' }}>Important things to note</h3>
                                    <div style={{ background: '#f5f5f7', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease', transform: showImportantNotes ? 'rotate(0deg)' : 'rotate(180deg)' }}>
                                        <i className="bi bi-chevron-up" style={{ fontSize: '0.9rem', color: '#1d1d1f' }}></i>
                                    </div>
                                </div>
                                <div style={{ 
                                    maxHeight: showImportantNotes ? '500px' : '0', 
                                    overflow: 'hidden', 
                                    transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
                                    opacity: showImportantNotes ? 1 : 0
                                }}>
                                    <ul style={{ paddingLeft: '20px', color: '#424245', fontSize: '1rem', lineHeight: 1.6, margin: 0, paddingBottom: '20px' }}>
                                        <li style={{ marginBottom: '12px' }}>
                                            <span style={{ fontWeight: 700, color: 'var(--primary-green)' }}>No Registration Fee:</span> Unlike other platforms, Giveback Journeys does not charge an extra application or registration fee. 
                                        </li>
                                        <li style={{ marginBottom: '12px' }}>
                                            <span style={{ fontWeight: 700 }}>Transparent Pricing:</span> We believe in keeping costs clear. Your fee directly supports our grassroots community projects, your accommodation, and local staff in Sri Lanka.
                                        </li>
                                        <li style={{ marginBottom: '12px' }}>
                                            <span style={{ fontWeight: 700, color: 'var(--primary-green)' }}>Flexible Dates:</span> You have the freedom to arrive and start your volunteer journey on any Monday of the year.
                                        </li>
                                        <li style={{ marginBottom: '12px' }}>
                                            <span style={{ fontWeight: 700 }}>Pre-departure Support:</span> Once booked, you will receive a comprehensive guide and personal support to ensure you are fully prepared for your trip to Sri Lanka.
                                        </li>
                                        <li style={{ marginBottom: '12px' }}>
                                            <span style={{ fontWeight: 700, color: 'var(--primary-green)' }}>Weekend Free Time:</span> Your weekends are completely free to travel, explore stunning beaches, go on safaris, or visit historic sites.
                                        </li>
                                        <li>
                                            <span style={{ fontWeight: 700 }}>Immersive Experience:</span> Live and work closely with local communities, gaining an authentic understanding of Sri Lankan culture.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What's Included */}
                    <div style={{ background: '#fafafa', padding: '30px', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                        <div 
                            onClick={() => setShowWhatsIncluded(!showWhatsIncluded)}
                            style={{ borderBottom: showWhatsIncluded ? '1px solid #eaeaea' : '1px solid transparent', paddingBottom: '16px', marginBottom: showWhatsIncluded ? '24px' : '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: '#1d1d1f' }}>What's included</h3>
                            <div style={{ background: '#ffffff', border: '1px solid #eaeaea', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease', transform: showWhatsIncluded ? 'rotate(0deg)' : 'rotate(180deg)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                                <i className="bi bi-chevron-up" style={{ fontSize: '1rem', color: '#1d1d1f' }}></i>
                            </div>
                        </div>
                        <div style={{ 
                            maxHeight: showWhatsIncluded ? '800px' : '0', 
                            overflow: 'hidden', 
                            transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
                            opacity: showWhatsIncluded ? 1 : 0
                        }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                                {[
                                    "Breakfast, lunch and dinner",
                                    "Airport pick-up",
                                    "Transport to and from your volunteer placement each day",
                                    "Accommodation",
                                    "Pre-departure support from your Program Manager",
                                    "Personalized preparation tools, guides and check lists",
                                    "Access to Giveback Journeys's preferred insurance and flights partners",
                                    "Comprehensive in-country day to day support and guidance"
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                        <div style={{ 
                                            background: 'rgba(27, 163, 82, 0.1)', 
                                            color: 'var(--primary-green)', 
                                            borderRadius: '50%', 
                                            width: '24px', 
                                            height: '24px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            fontSize: '0.8rem',
                                            flexShrink: 0
                                        }}>
                                            <i className="bi bi-check-lg" style={{ fontWeight: 900 }}></i>
                                        </div>
                                        <span style={{ color: '#1d1d1f', fontSize: '0.95rem', fontWeight: 500 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Your Impact Section - Bottom of Page */}
            {program.sections && program.sections.filter(s => s.title.toLowerCase().includes('impact')).map((section, idx) => {
                const sectionBg = getNextBgClass();
                return (
                    <div key={`impact-${idx}`} className={`detail-section ${sectionBg}`}>
                        <div className="detail-section-inner">
                            <div className="section-card" style={{
                                background: 'transparent',
                                padding: '0',
                                marginBottom: '0',
                            }}>
                        <div style={{ marginBottom: '24px' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>Your Impact</span>
                            <h2 className="section-heading-modern" style={{ margin: 0 }}>{section.title}</h2>
                        </div>
                        <div>
                            {section.paragraphs.map((para, pIdx) => {
                                if (para.startsWith('**')) {
                                    const parts = para.split('**');
                                    return (
                                        <p key={pIdx} className="section-text-modern" style={{ marginBottom: '20px' }}>
                                            <span style={{ color: 'var(--primary-green)', fontWeight: 'normal' }}>{parts[1]}</span>{parts[2]}
                                        </p>
                                    );
                                }
                                return (
                                    <p key={pIdx} className="section-text-modern" style={{ marginBottom: '20px' }}>
                                        {para}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    })}


            {/* Reviews Section */}
            <div style={{
                padding: '80px 0 70px',
                background: '#fafafa',
                borderTop: '1px solid #f0f0f0',
                overflow: 'hidden'
            }}>
                {/* Header + Badge — centered */}
                <div style={{ textAlign: 'center', marginBottom: '18px', padding: '0 5%' }}>
                    <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem' }}>What Volunteers Say</span>
                    <h2 className="section-heading-modern" style={{ marginTop: '10px', marginBottom: '24px' }}>
                        Trusted by Volunteers Worldwide
                    </h2>

                    {/* Rating Badge — top */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
                        <span style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>Great</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', background: '#00b67a', padding: '7px 11px', borderRadius: '7px' }}>
                            {[1,2,3,4].map(i => (
                                <i key={i} className="fa-solid fa-star" style={{ color: '#fff', fontSize: '0.9rem' }}></i>
                            ))}
                            <i className="fa-solid fa-star-half-stroke" style={{ color: '#fff', fontSize: '0.9rem' }}></i>
                        </div>
                        <span style={{ fontSize: '0.9rem', color: '#555', fontWeight: 500 }}>
                            4.6 out of 5 based on{' '}
                            <a href="https://www.trustpilot.com/review/givebackjourney.com" target="_blank" rel="noopener noreferrer"
                                style={{ color: '#1d1d1f', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                                250 reviews
                            </a>
                        </span>
                        <a href="https://www.trustpilot.com/review/givebackjourney.com" target="_blank" rel="noopener noreferrer"
                            style={{ display: 'flex', alignItems: 'center', gap: '7px', background: '#f5f5f7', border: '1px solid rgba(0,0,0,0.08)', padding: '7px 16px 7px 12px', borderRadius: '9px', textDecoration: 'none', transition: 'all 0.25s ease' }}
                            onMouseEnter={e => e.currentTarget.style.background = '#eaeaea'}
                            onMouseLeave={e => e.currentTarget.style.background = '#f5f5f7'}
                        >
                            <i className="fa-solid fa-star" style={{ color: '#00b67a', fontSize: '1rem' }}></i>
                            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1d1d1f', letterSpacing: '0.2px' }}>Trustpilot</span>
                        </a>
                    </div>
                </div>

                {/* Horizontal Scrollable Review Cards */}
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 5%' }}>
                <div style={{
                    display: 'flex',
                    overflowX: 'auto',
                    gap: '20px',
                    padding: '10px 0 24px',
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}>
                    {reviews.map((r, idx) => (
                        <div key={idx} style={{
                            flex: '0 0 300px',
                            background: '#ffffff',
                            borderRadius: '20px',
                            padding: '26px',
                            border: '1px solid rgba(0,0,0,0.06)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '14px',
                            scrollSnapAlign: 'start',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.09)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'; }}
                        >
                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '3px' }}>
                                {[...Array(r.rating)].map((_, i) => (
                                    <div key={i} style={{ background: '#00b67a', width: '22px', height: '22px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fa-solid fa-star" style={{ color: '#fff', fontSize: '0.7rem' }}></i>
                                    </div>
                                ))}
                            </div>

                            {/* Title */}
                            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1d1d1f', margin: 0, letterSpacing: '-0.01em' }}>{r.title}</h4>

                            {/* Review text */}
                            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#555', margin: 0, flexGrow: 1 }}>"{r.review}"</p>

                            {/* Reviewer info */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '12px', borderTop: '1px solid #f0f0f0' }}>
                                <div style={{
                                    width: '38px', height: '38px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary-green), #0d7a3e)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#fff', fontWeight: 800, fontSize: '0.9rem', flexShrink: 0
                                }}>
                                    {r.name.charAt(0)}
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1d1d1f' }}>{r.name}</div>
                                    <div style={{ fontSize: '0.73rem', color: '#888', fontWeight: 500 }}>{r.country} · {r.date}</div>
                                </div>
                                <div style={{ marginLeft: 'auto' }}>
                                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--primary-green)', fontSize: '1rem' }}></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>


            <div className="floating-bottom-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%', justifyContent: 'space-between' }}>
                    <div className="bottom-price-info" style={{ display: 'flex', flexDirection: 'column', gap: '3px', textAlign: 'left' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                            <span className="bottom-price-label" style={{ fontSize: '0.65rem', color: '#86868b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>From</span>
                            <span className="bottom-price-amount" style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--primary-green)', lineHeight: 1 }}>{formatPrice(program.price)}</span>
                        </div>
                        {program.id !== 'real-sri-lanka-experience' && program.id !== 'professional-impact-program' ? (
                            <span className="desktop-spec-text" style={{ fontSize: '0.62rem', color: '#86868b', fontWeight: 600, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
                                * Includes accommodation, meals & pickup (2+ wks stays only)
                            </span>
                        ) : (
                            <span className="desktop-spec-text" style={{ fontSize: '0.62rem', color: '#86868b', fontWeight: 600, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
                                * Includes accommodation, meals & pickup
                            </span>
                        )}
                        <span className="desktop-spec-text" style={{ fontSize: '0.58rem', color: 'var(--primary-green)', fontWeight: 700, letterSpacing: '0.2px', textTransform: 'uppercase', whiteSpace: 'nowrap', marginTop: '1px' }}>No Registration & Hidden Fees</span>
                        <span className="mobile-spec-text">23kg luggage allowance inc.</span>
                    </div>
                    <Link 
                        to={getInquiryUrl()} 
                        className="btn-apple-solid bottom-bar-btn" 
                        style={{ 
                            background: '#1d1d1f', 
                            color: 'white',
                            padding: '14px 34px', 
                            fontSize: '0.95rem', 
                            fontWeight: 700,
                            borderRadius: '50px',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        <span className="desktop-btn-text">Apply to Volunteer</span>
                        <span className="mobile-btn-text">Apply Now</span>
                        <i className="bi bi-arrow-right" style={{ fontSize: '1rem' }}></i>
                    </Link>
                </div>
            </div>

            
            {/* Global Scoped Premium CSS rules */}
            <style dangerouslySetInnerHTML={{ __html: `
                .section-heading-modern {
                    font-size: clamp(2rem, 3.5vw, 2.8rem) !important;
                    font-weight: 700 !important;
                    color: #2d2d2d !important;
                    line-height: 1.25 !important;
                    letter-spacing: -0.01em !important;
                }
                
                .section-text-modern {
                    font-size: 1.05rem !important;
                    color: #4a4a4a !important;
                    line-height: 1.75 !important;
                    font-weight: 400 !important;
                }

                .detail-section {
                    width: 100% !important;
                    padding: 60px 0 !important;
                    box-sizing: border-box !important;
                }
                .detail-section.white-bg {
                    background: #ffffff !important;
                }
                .detail-section.gray-bg {
                    background: #f5f5f7 !important;
                }
                .detail-section-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 5%;
                }
                .meals-grid {
                    display: grid !important;
                    grid-template-columns: repeat(3, 1fr) !important;
                    gap: 24px !important;
                }
                @media (max-width: 768px) {
                    .detail-section {
                        padding: 40px 0 !important;
                    }
                    .meals-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .teaching-options-card {
                        padding: 40px 0 !important;
                    }
                }

                .volunteer-details-page {
                    font-family: "DM Sans", -apple-system, BlinkMacSystemFont, sans-serif !important;
                    -webkit-font-smoothing: antialiased;
                }
                .subnav-location {
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: var(--primary-green);
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    display: block;
                    margin-bottom: 2px;
                }
                .subnav-title {
                    font-size: 1.25rem;
                    font-weight: 900;
                    margin: 0;
                    color: #1d1d1f;
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                }
                .subnav-cta {
                    background: #1d1d1f;
                    color: white;
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                    display: inline-block;
                }
                .floating-bottom-bar {
                    display: block;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0.75);
                    backdrop-filter: blur(30px) saturate(200%);
                    -webkit-backdrop-filter: blur(30px) saturate(200%);
                    padding: 15px 5%;
                    box-shadow: 0 -10px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6);
                    z-index: 10000;
                    border-top: 1px solid rgba(255, 255, 255, 0.4);
                    width: 100%;
                    max-width: none;
                    border-radius: 0;
                    box-sizing: border-box;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .floating-bottom-bar > div {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .mobile-btn-text {
                    display: none;
                }
                
                /* Ensure Chat Bot is not covered by Sticky Bar */
                .chat-container {
                    bottom: 100px !important;
                }
                .desktop-btn-text {
                    display: inline;
                }
                .mobile-spec-text {
                    display: none;
                }
                .desktop-spec-text {
                    display: inline;
                }
                .volunteer-details-page h1,
                .volunteer-details-page h2,
                .volunteer-details-page h3,
                .volunteer-details-page h4,
                .volunteer-details-page strong,
                .volunteer-details-page .subnav-cta,
                .volunteer-details-page .btn-apple-solid {
                    font-family: "DM Sans", -apple-system, BlinkMacSystemFont, sans-serif !important;
                    font-weight: 800 !important;
                    letter-spacing: -0.035em !important;
                }
                .subnav-link {
                    transition: color 0.3s ease !important;
                }
                .subnav-link:hover {
                    color: #1d1d1f !important;
                }
                .bento-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 45px rgba(0,0,0,0.05) !important;
                }
                .config-tile:hover {
                    background: white !important;
                    box-shadow: 0 15px 45px rgba(0,0,0,0.04) !important;
                    transform: translateY(-3px);
                }
                .timeline-item:hover .timeline-node {
                    transform: scale(1.2);
                    border-color: #1d1d1f !important;
                }
                .timeline-item:hover .timeline-content {
                    background: white !important;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.03) !important;
                    border-color: rgba(0,0,0,0.04) !important;
                }
                .btn-apple-solid.bottom-bar-btn {
                    background: linear-gradient(135deg, #2c2c2e 0%, #1c1c1e 100%) !important;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,0.12) !important;
                    border: 1px solid rgba(0,0,0,0.9) !important;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
                }
                .btn-apple-solid.bottom-bar-btn:hover {
                    background: linear-gradient(135deg, #3c3c3e 0%, #1c1c1e 100%) !important;
                    transform: translateY(-2px) scale(1.02) !important;
                    box-shadow: 0 14px 32px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.2) !important;
                }
                .btn-apple-solid:hover {
                    background: #000000 !important;
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.2) !important;
                }
                .subnav-cta:hover {
                    background: #000000 !important;
                    transform: translateY(-1px);
                }
                .vol-gallery-item:hover .vol-gallery-img {
                    transform: scale(1.08);
                }
                .vol-gallery-item:hover .vol-gallery-caption {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
                .meal-card {
                    transition: all 0.3s ease !important;
                }
                .meal-card:hover {
                    transform: scale(1.02);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03) !important;
                }
                .skill-highlight-card:hover {
                    transform: translateY(-3px);
                    background: white !important;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.04) !important;
                    border-color: rgba(27, 163, 82, 0.2) !important;
                }
                .skill-highlight-card:hover .skill-highlight-icon {
                    transform: scale(1.15) rotate(90deg);
                    background: #158a3d !important;
                    box-shadow: 0 4px 12px rgba(27, 163, 82, 0.3) !important;
                }
                .btn-bucket-apply {
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
                }
                .btn-bucket-apply:hover {
                    background: #158a3d !important;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 28px rgba(27, 163, 82, 0.35) !important;
                }
                .skills-bucket-list::-webkit-scrollbar {
                    width: 4px;
                }
                .skills-bucket-list::-webkit-scrollbar-track {
                    background: rgba(0,0,0,0.02);
                    border-radius: 10px;
                }
                .skills-bucket-list::-webkit-scrollbar-thumb {
                    background: rgba(0,0,0,0.15);
                    border-radius: 10px;
                }
                
                @media (max-width: 768px) {
                    .subnav-location {
                        font-size: 0.65rem !important;
                        letter-spacing: 1px !important;
                    }
                    .subnav-title {
                        font-size: 1.05rem !important;
                        letter-spacing: -0.02em !important;
                    }
                    .subnav-cta {
                        padding: 6px 14px !important;
                        font-size: 0.75rem !important;
                    }
                    .skills-bucket-widget {
                        bottom: 105px !important;
                        right: 5% !important;
                        left: 5% !important;
                        width: auto !important;
                        max-width: none !important;
                        box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
                        border-radius: 20px !important;
                        padding: 16px !important;
                    }
                    .local-subnav > div {
                        padding: 10px 4% !important;
                    }
                    .subnav-link {
                        display: none !important;
                    }
                    .section-card {
                        padding: 30px 0 !important;
                    }
                    .floating-bottom-bar {
                        padding: 12px 20px !important;
                        margin: 0 !important;
                        width: 100vw !important;
                        max-width: 100vw !important;
                        left: 50% !important;
                        right: auto !important;
                        transform: translateX(-50%) !important;
                        bottom: 0 !important;
                        border-radius: 30px 30px 0 0 !important;
                        border-left: none !important;
                        border-right: none !important;
                        border-bottom: none !important;
                        border-top: 1px solid rgba(255, 255, 255, 0.4) !important;
                        justify-content: space-between !important;
                        box-sizing: border-box !important;
                    }
                    .bottom-price-info {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 1px !important;
                        text-align: left !important;
                    }
                    .desktop-spec-text {
                        display: none !important;
                    }
                    .mobile-spec-text {
                        display: block !important;
                        font-size: 0.6rem !important;
                        color: #64748b !important;
                        font-weight: 700 !important;
                        white-space: nowrap !important;
                        letter-spacing: -0.01em !important;
                    }
                    .bottom-price-amount {
                        font-size: 1.15rem !important;
                    }
                    .bottom-price-label {
                        font-size: 0.58rem !important;
                    }
                    .mobile-btn-text {
                        display: inline !important;
                        font-size: 0.75rem !important;
                    }
                    .desktop-btn-text {
                        display: none !important;
                    }
                    .btn-apple-solid.bottom-bar-btn {
                        width: auto !important;
                        max-width: none !important;
                        padding: 10px 20px !important;
                        justify-content: center !important;
                        gap: 6px !important;
                    }
                    .btn-apple-solid.bottom-bar-btn i {
                        font-size: 0.8rem !important;
                    }
                    .bento-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 8px !important;
                        margin-bottom: 30px !important;
                    }
                    .vol-gallery-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        grid-template-rows: 150px !important;
                    }
                    .btn-apple-solid:not(.bottom-bar-btn) {
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                }
                @media (max-width: 480px) {
                    .subnav-location {
                        font-size: 0.6rem !important;
                    }
                    .subnav-title {
                        font-size: 0.9rem !important;
                    }
                    .subnav-cta {
                        padding: 5px 12px !important;
                        font-size: 0.68rem !important;
                    }
                    .floating-bottom-bar {
                        padding: 8px 14px !important;
                        width: calc(100% - 20px) !important;
                    }
                    .bottom-price-amount {
                        font-size: 1.05rem !important;
                    }
                    .bottom-price-label {
                        font-size: 0.55rem !important;
                    }
                    .mobile-spec-text {
                        font-size: 0.52rem !important;
                    }
                    .mobile-btn-text {
                        font-size: 0.68rem !important;
                    }
                    .btn-apple-solid.bottom-bar-btn {
                        padding: 8px 14px !important;
                        gap: 4px !important;
                    }
                    .btn-apple-solid.bottom-bar-btn i {
                        font-size: 0.75rem !important;
                    }
                }
                @media (min-width: 768px) {
                    .bottom-bar-info {
                        display: block !important;
                    }
                    .btn-apple-solid {
                        margin: 0 !important;
                    }
                    .bottom-bar-actions {
                        width: auto !important;
                    }
                }
                
                @keyframes volunteerFloat {
                    0% {
                        transform: translateX(-50%) translateY(0);
                    }
                    50% {
                        transform: translateX(-50%) translateY(-6px);
                    }
                    100% {
                        transform: translateX(-50%) translateY(0);
                    }
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(0, 0, 0, 0.3);
                }
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
                }
                
                /* Stay & Eat cards styling */
                .stay-eat-card {
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
                    cursor: pointer;
                }
                .stay-eat-card-img {
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
                }
                .stay-eat-card:hover {
                    transform: translateY(-15px) scale(1.06) !important;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 25px rgba(255,255,255,0.15) !important;
                    border-color: rgba(255, 255, 255, 0.8) !important;
                    z-index: 10 !important;
                }
                .stay-eat-card:hover .stay-eat-card-img {
                    transform: scale(1.12) !important;
                }
                
                @media (max-width: 768px) {
                    .stay-eat-cards-container {
                        margin-top: 30px !important;
                        justify-content: center !important;
                        width: 100% !important;
                        padding: 10px 0 !important;
                        gap: 12px !important;
                    }
                    .stay-eat-card {
                        width: 110px !important;
                        height: 155px !important;
                        border-radius: 18px !important;
                    }
                    .stay-eat-card:hover {
                        transform: translateY(-10px) scale(1.06) !important;
                    }
                }
            `}} />

            {/* Local Holidays Modal */}
            <AnimatePresence>
                {showHolidaysModal && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowHolidaysModal(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(4px)',
                            WebkitBackdropFilter: 'blur(4px)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px'
                        }}
                    >
                        <motion.div 
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: '#ffffff',
                                borderRadius: '24px',
                                padding: '30px',
                                maxWidth: '800px',
                                width: '100%',
                                maxHeight: '65vh',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="bi bi-calendar-event" style={{ fontSize: '1.5rem', color: '#007aff' }}></i>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0, color: '#1d1d1f' }}>Local Holidays</h3>
                                </div>
                                <button onClick={() => setShowHolidaysModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.8rem', color: '#86868b', lineHeight: 1 }}>&times;</button>
                            </div>
                            <p style={{ color: '#424245', lineHeight: 1.6, marginBottom: '24px', fontSize: '0.95rem', flexShrink: 0 }}>
                                Sri Lanka observes several public and religious holidays throughout the year, including monthly Poya Days (full moon days). Please note that the government may occasionally announce additional ad-hoc holidays due to special situations. During these times, schools, public institutions, and some volunteer placements may be closed or operate on a limited schedule.
                            </p>
                            
                            <div className="custom-scrollbar" style={{ overflowY: 'auto', flex: 1, paddingRight: '12px', marginBottom: '24px' }}>
                                {[2026, 2027, 2028].map(year => {
                                    const yearHolidays = publicHolidays.filter(h => h.year === year);
                                    if (yearHolidays.length === 0) return null;
                                    return (
                                        <div key={year} style={{ marginBottom: '24px' }}>
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '12px', paddingBottom: '8px', borderBottom: '2px solid #f5f5f7' }}>{year} Public Holidays</h4>
                                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                                                <thead>
                                                    <tr style={{ background: '#f9f9f9' }}>
                                                        <th style={{ textAlign: 'left', padding: '10px', fontWeight: 700, color: '#86868b', width: '25%', borderRadius: '8px 0 0 8px' }}>Date</th>
                                                        <th style={{ textAlign: 'left', padding: '10px', fontWeight: 700, color: '#86868b', width: '20%' }}>Day</th>
                                                        <th style={{ textAlign: 'left', padding: '10px', fontWeight: 700, color: '#86868b', borderRadius: '0 8px 8px 0' }}>Holiday</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {yearHolidays.map((holiday, idx) => (
                                                        <tr key={idx} style={{ borderBottom: '1px solid #f5f5f7' }}>
                                                            <td style={{ padding: '12px 10px', color: '#1d1d1f', fontWeight: 700 }}>{holiday.date}</td>
                                                            <td style={{ padding: '12px 10px', color: '#424245' }}>{holiday.day}</td>
                                                            <td style={{ padding: '12px 10px', color: '#424245' }}>{holiday.name}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    );
                                })}
                            </div>

                            <button 
                                onClick={() => setShowHolidaysModal(false)}
                                style={{
                                    background: '#f5f5f7',
                                    color: '#1d1d1f',
                                    border: 'none',
                                    padding: '12px 24px',
                                    borderRadius: '50px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    width: '100%',
                                    transition: 'background 0.2s ease',
                                    flexShrink: 0
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#e8e8ed'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#f5f5f7'}
                            >
                                Got it
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Gallery Lightbox Modal */}
            <AnimatePresence>
                {showGalleryModal && program.galleryImages && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.95)',
                            zIndex: 10000,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* Close button */}
                        <div 
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '30px',
                                color: 'white',
                                fontSize: '2rem',
                                cursor: 'pointer',
                                zIndex: 10001
                            }}
                            onClick={() => setShowGalleryModal(false)}
                        >
                            <i className="bi bi-x-lg"></i>
                        </div>

                        {/* Navigation Prev */}
                        <div 
                            style={{
                                position: 'absolute',
                                left: '30px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'white',
                                fontSize: '2.5rem',
                                cursor: 'pointer',
                                zIndex: 10001,
                                display: program.galleryImages.length > 1 ? 'block' : 'none',
                                opacity: activeGalleryIdx > 0 ? 1 : 0.3
                            }}
                            onClick={() => {
                                if (activeGalleryIdx > 0) setActiveGalleryIdx(activeGalleryIdx - 1);
                            }}
                        >
                            <i className="bi bi-chevron-left"></i>
                        </div>

                        {/* Main Image or Video */}
                        {program.galleryImages[activeGalleryIdx].type === 'video' || (typeof program.galleryImages[activeGalleryIdx].src === 'string' && (program.galleryImages[activeGalleryIdx].src.toLowerCase().endsWith('.mov') || program.galleryImages[activeGalleryIdx].src.toLowerCase().endsWith('.mp4'))) ? (
                            <motion.video
                                key={activeGalleryIdx}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                src={program.galleryImages[activeGalleryIdx].src}
                                autoPlay
                                controls
                                playsInline
                                style={{
                                    maxWidth: '90%',
                                    maxHeight: '80vh',
                                    objectFit: 'contain',
                                    borderRadius: '8px'
                                }}
                            />
                        ) : (
                            <motion.img
                                key={activeGalleryIdx}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                src={program.galleryImages[activeGalleryIdx].src}
                                alt={program.galleryImages[activeGalleryIdx].caption}
                                style={{
                                    maxWidth: '90%',
                                    maxHeight: '80vh',
                                    objectFit: 'contain',
                                    borderRadius: '8px'
                                }}
                            />
                        )}

                        {/* Caption */}
                        <div style={{
                            color: 'white',
                            marginTop: '20px',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            letterSpacing: '1px'
                        }}>
                            {program.galleryImages[activeGalleryIdx].caption} ({activeGalleryIdx + 1} / {program.galleryImages.length})
                        </div>

                        {/* Navigation Next */}
                        <div 
                            style={{
                                position: 'absolute',
                                right: '30px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'white',
                                fontSize: '2.5rem',
                                cursor: 'pointer',
                                zIndex: 10001,
                                display: program.galleryImages.length > 1 ? 'block' : 'none',
                                opacity: activeGalleryIdx < program.galleryImages.length - 1 ? 1 : 0.3
                            }}
                            onClick={() => {
                                if (activeGalleryIdx < program.galleryImages.length - 1) setActiveGalleryIdx(activeGalleryIdx + 1);
                            }}
                        >
                            <i className="bi bi-chevron-right"></i>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default VolunteerProgramDetails;
