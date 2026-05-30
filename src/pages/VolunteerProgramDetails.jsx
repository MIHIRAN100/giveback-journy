import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { volunteerPrograms } from '../data/volunteerPrograms';
import stayEatBg from '../assets/548331228.jpg';
import { volunteerReviews } from '../data/volunteerReviews';
import { useCurrency } from '../context/CurrencyContext';

const VolunteerProgramDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { formatPrice } = useCurrency();

    const program = volunteerPrograms.find(p => p.id === id);
    const reviews = volunteerReviews[id] || [];

    const [selectedSkills, setSelectedSkills] = useState([]);

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

    return (
        <div className="volunteer-details-page" style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '120px' }}>
            
            {/* Apple Style Sticky Subnav */}
            <div className="local-subnav" style={{
                position: 'sticky',
                top: '0',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'saturate(180%) blur(20px)',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                zIndex: 999
            }}>
                <div style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '14px 5%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <span className="subnav-location">{program.location}</span>
                        <h2 className="subnav-title">{program.title}</h2>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                        <a href="#overview" style={{ textDecoration: 'none', color: '#86868b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '-0.01em' }} className="subnav-link">Overview</a>
                        {program.highlights && <a href="#highlights" style={{ textDecoration: 'none', color: '#86868b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '-0.01em' }} className="subnav-link">Highlights</a>}
                        {program.accommodation && <a href="#accommodation" style={{ textDecoration: 'none', color: '#86868b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '-0.01em' }} className="subnav-link">Accommodation</a>}
                        {program.mealsInfo && <a href="#meals" style={{ textDecoration: 'none', color: '#86868b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '-0.01em' }} className="subnav-link">Meals</a>}
                        <Link 
                            to={getInquiryUrl()}
                            className="subnav-cta"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Immersive Apple-Style Hero */}
            <div className="hero-apple" style={{
                position: 'relative',
                height: '45vh',
                minHeight: '300px',
                background: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.65)), url(${program.image}) ${program.bgPosition || 'center'}/cover no-repeat`,
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
                        display: 'inline-block',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                        ✨ {program.location}
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

            {/* Compact Specs Strip */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 5% 0' }}>
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
                            background: 'rgba(29, 185, 84, 0.08)',
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
                            background: 'rgba(29, 185, 84, 0.08)',
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
                            background: 'rgba(29, 185, 84, 0.08)',
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
                            background: 'rgba(29, 185, 84, 0.08)',
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
                    borderBottom: '1px solid #eaeaea'
                }}>
                    <div style={{ marginBottom: '24px' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>Overview</span>
                        <h2 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.04em', margin: 0, background: 'linear-gradient(135deg, #121212 30%, #4f4f4f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>About This Program</h2>
                    </div>
                    <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444444', fontWeight: 400, margin: 0 }}>
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{
                                width: '4px',
                                height: '28px',
                                borderRadius: '4px',
                                background: 'var(--primary-green)'
                            }}></div>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.04em', margin: 0, background: 'linear-gradient(135deg, #121212 30%, #4f4f4f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>Photo Gallery</h2>
                        </div>
                        <div className="vol-gallery-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gridTemplateRows: '200px',
                            gap: '12px'
                        }}>
                            {program.galleryImages.map((img, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="vol-gallery-item" 
                                    initial={{ opacity: 0, y: 35, scale: 0.94 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                    style={{
                                        position: 'relative',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <img 
                                        src={img.src} 
                                        alt={img.caption}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'
                                        }}
                                        className="vol-gallery-img"
                                    />
                                    <div className="vol-gallery-caption" style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: '24px 16px 12px',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                        color: 'white',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.02em',
                                        opacity: 0,
                                        transform: 'translateY(8px)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {img.caption}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Program Highlights Spec Grid */}
                {program.highlights && program.highlights.length > 0 && (
                    <div id="highlights" className="section-card" style={{
                        background: 'transparent',
                        padding: '45px 0',
                        marginBottom: '45px',
                        borderBottom: '1px solid #eaeaea'
                    }}>
                        <div style={{ marginBottom: '24px' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>Key Details</span>
                            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.04em', margin: 0, background: 'linear-gradient(135deg, #121212 30%, #4f4f4f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>Program Highlights</h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '20px' }}>
                            {program.highlights.map((highlight, idx) => (
                                <div key={idx} style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '16px', 
                                    padding: '16px 20px', 
                                    borderRadius: '16px', 
                                    background: '#f5f5f7', 
                                    border: '1px solid rgba(0,0,0,0.02)'
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
                )}

                {/* Dynamic Sections & Timeline Itinerary */}
                {program.sections && program.sections.filter(s => !s.title.toLowerCase().includes('impact')).map((section, idx, filteredArr) => {
                    const isItinerary = section.title.toLowerCase().includes('itinerary');
                    const isExperienceCategories = section.title.toLowerCase().includes('experience categories');
                    const isLast = idx === filteredArr.length - 1;
                    return (
                        <div key={idx} id={isItinerary ? "itinerary" : `section-${idx}`} className="section-card" style={{
                            background: 'transparent',
                            padding: '45px 0',
                            marginBottom: '45px',
                            borderBottom: isLast && !program.accommodation && !program.mealsInfo ? 'none' : '1px solid #eaeaea'
                        }}>
                            <div style={{ marginBottom: '24px' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>{isItinerary ? "Schedule" : "Experience"}</span>
                                <h2 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.04em', margin: 0, background: 'linear-gradient(135deg, #121212 30%, #4f4f4f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>{section.title}</h2>
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
                                                    background: '#f5f5f7',
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
                                        background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, rgba(29, 185, 84, 0.05) 100%)',
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
                                                                     background: isSelected ? 'white' : '#f5f5f7', 
                                                                     border: `1px solid ${isSelected ? 'var(--primary-green)' : 'rgba(0,0,0,0.02)'}`,
                                                                     boxShadow: isSelected ? '0 10px 30px rgba(29, 185, 84, 0.08)' : 'none',
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
                                                                                 background: isSelected ? 'rgba(29, 185, 84, 0.1)' : 'rgba(29, 185, 84, 0.08)',
                                                                                 padding: '3px 10px',
                                                                                 borderRadius: '50px',
                                                                                 whiteSpace: 'nowrap',
                                                                                 letterSpacing: '0.3px',
                                                                                 flexShrink: 0,
                                                                                 border: isSelected ? '1px solid rgba(29, 185, 84, 0.2)' : '1px solid transparent',
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
                                <div>
                                    {section.paragraphs.map((para, pIdx) => {
                                        if (para.startsWith('**')) {
                                            const parts = para.split('**');
                                            return (
                                                <p key={pIdx} style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444444', marginBottom: '20px' }}>
                                                    <strong style={{ color: '#1d1d1f', fontWeight: 700 }}>{parts[1]}</strong>{parts[2]}
                                                </p>
                                            );
                                        }
                                        return (
                                            <p key={pIdx} style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444444', marginBottom: '20px' }}>
                                                {para}
                                            </p>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* Cinematic Image Break */}
                {program.galleryImages && program.galleryImages.length > 1 && (
                    <div style={{
                        margin: '20px 0 50px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        position: 'relative',
                        height: '280px'
                    }}>
                        <img 
                            src={stayEatBg} 
                            alt="Program experience"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: '40px'
                        }}>
                            <span style={{
                                fontSize: '0.7rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                color: 'rgba(255,255,255,0.7)',
                                marginBottom: '8px'
                            }}>Your Journey</span>
                            <h3 style={{
                                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                                fontWeight: 900,
                                color: 'white',
                                margin: 0,
                                letterSpacing: '-0.03em',
                                lineHeight: 1.15,
                                textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                            }}>Where you'll stay & what you'll eat</h3>
                        </div>
                    </div>
                )}

                {/* Accommodation Configurator Section */}
                {program.accommodation && (
                    <div id="accommodation" className="section-card" style={{
                        background: 'transparent',
                        padding: '45px 0',
                        marginBottom: '45px',
                        borderBottom: !program.mealsInfo ? 'none' : '1px solid #eaeaea'
                    }}>
                        <div style={{ marginBottom: '24px' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>Where You'll Stay</span>
                            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.04em', margin: 0, background: 'linear-gradient(135deg, #121212 30%, #4f4f4f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>Accommodation Options</h2>
                        </div>
                        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444444', marginBottom: '35px' }}>{program.accommodation.description}</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '45px' }}>
                            {program.accommodation.options.map((opt, idx) => (
                                <div key={idx} style={{ 
                                    padding: '30px 35px', 
                                    borderRadius: '24px', 
                                    background: '#ffffff', 
                                    border: '2px solid rgba(0,0,0,0.03)',
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

                        <div style={{ background: '#f5f5f7', padding: '30px 35px', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.01)' }}>
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
                            border: '1px solid rgba(29,185,84,0.2)'
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
                                    We collect all arriving volunteers from <strong style={{ color: '#fff' }}>Bandaranaike International Airport (CMB)</strong> as a group — we do <strong style={{ color: '#fff' }}>not</strong> offer individual pickups. Our group transfer window is{' '}
                                    <strong style={{ background: 'rgba(29,185,84,0.3)', color: '#4ade80', padding: '1px 8px', borderRadius: '5px' }}>2:00 PM – 5:00 PM Sri Lankan Time (SLST) on Sunday</strong>.
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
                )}

                {/* Meals Specs Section */}
                {program.mealsInfo && (
                    <div id="meals" className="section-card" style={{
                        background: 'transparent',
                        padding: '45px 0',
                        marginBottom: '60px'
                    }}>
                        <div style={{ marginBottom: '24px' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>What You'll Eat</span>
                            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.04em', margin: 0, background: 'linear-gradient(135deg, #121212 30%, #4f4f4f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>Meals</h2>
                        </div>
                        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444444', marginBottom: '35px' }}>{program.mealsInfo.description}</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            <div style={{ padding: '30px', borderRadius: '24px', background: 'rgba(255, 249, 230, 0.91)', border: '1px solid #ffe89e', display: 'flex', flexDirection: 'column', gap: '15px' }} className="meal-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="bi bi-sunrise-fill" style={{ fontSize: '1.8rem', color: '#664d00' }}></i>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#664d00', margin: 0 }}>Breakfast</h3>
                                </div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#806000', margin: 0, fontWeight: 550 }}>{program.mealsInfo.examples.breakfast}</p>
                            </div>
                            <div style={{ padding: '30px', borderRadius: '24px', background: 'rgba(230, 244, 234, 0.91)', border: '1px solid #a3d9b1', display: 'flex', flexDirection: 'column', gap: '15px' }} className="meal-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="bi bi-sun-fill" style={{ fontSize: '1.8rem', color: '#1a7332' }}></i>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a7332', margin: 0 }}>Lunch</h3>
                                </div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#114a20', margin: 0, fontWeight: 550 }}>{program.mealsInfo.examples.lunch}</p>
                            </div>
                            <div style={{ padding: '30px', borderRadius: '24px', background: 'rgba(250, 233, 233, 0.91)', border: '1px solid #f0b4b4', display: 'flex', flexDirection: 'column', gap: '15px' }} className="meal-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="bi bi-moon-stars-fill" style={{ fontSize: '1.8rem', color: '#c52828' }}></i>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c52828', margin: 0 }}>Dinner</h3>
                                </div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#7d1919', margin: 0, fontWeight: 550 }}>{program.mealsInfo.examples.dinner}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Your Impact Section - Bottom of Page */}
                {program.sections && program.sections.filter(s => s.title.toLowerCase().includes('impact')).map((section, idx) => (
                    <div key={`impact-${idx}`} className="section-card" style={{
                        background: 'transparent',
                        padding: '45px 0',
                        marginBottom: '60px',
                    }}>
                        <div style={{ marginBottom: '24px' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>Your Impact</span>
                            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.04em', margin: 0, background: 'linear-gradient(135deg, #121212 30%, #4f4f4f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>{section.title}</h2>
                        </div>
                        <div>
                            {section.paragraphs.map((para, pIdx) => {
                                if (para.startsWith('**')) {
                                    const parts = para.split('**');
                                    return (
                                        <p key={pIdx} style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444444', marginBottom: '20px' }}>
                                            <strong style={{ color: '#1d1d1f', fontWeight: 700 }}>{parts[1]}</strong>{parts[2]}
                                        </p>
                                    );
                                }
                                return (
                                    <p key={pIdx} style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444444', marginBottom: '20px' }}>
                                        {para}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>


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
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, marginTop: '10px', marginBottom: '24px', letterSpacing: '-0.03em', color: '#1d1d1f' }}>
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
                        <span className="desktop-spec-text" style={{ fontSize: '0.62rem', color: '#86868b', fontWeight: 600, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>* Includes accommodation, meals & pickup</span>
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
                    border-color: rgba(29, 185, 84, 0.4) !important;
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
                    border-color: rgba(29, 185, 84, 0.2) !important;
                }
                .skill-highlight-card:hover .skill-highlight-icon {
                    transform: scale(1.15) rotate(90deg);
                    background: #158a3d !important;
                    box-shadow: 0 4px 12px rgba(29, 185, 84, 0.3) !important;
                }
                .btn-bucket-apply {
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
                }
                .btn-bucket-apply:hover {
                    background: #158a3d !important;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 28px rgba(29, 185, 84, 0.35) !important;
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
            `}} />
        </div>
    );
};

export default VolunteerProgramDetails;
