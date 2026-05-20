import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { volunteerPrograms } from '../data/volunteerPrograms';
import { useCurrency } from '../context/CurrencyContext';

const VolunteerProgramDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { formatPrice } = useCurrency();

    const program = volunteerPrograms.find(p => p.id === id);

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
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '2px' }}>{program.location}</span>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0, color: '#1d1d1f', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{program.title}</h2>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                        <a href="#overview" style={{ textDecoration: 'none', color: '#86868b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '-0.01em' }} className="subnav-link">Overview</a>
                        {program.highlights && <a href="#highlights" style={{ textDecoration: 'none', color: '#86868b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '-0.01em' }} className="subnav-link">Highlights</a>}
                        {program.accommodation && <a href="#accommodation" style={{ textDecoration: 'none', color: '#86868b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '-0.01em' }} className="subnav-link">Accommodation</a>}
                        {program.mealsInfo && <a href="#meals" style={{ textDecoration: 'none', color: '#86868b', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '-0.01em' }} className="subnav-link">Meals</a>}
                        <Link 
                            to={`/volunteer-inquiry?program=${encodeURIComponent(program.title)}`}
                            style={{
                                background: '#1d1d1f',
                                color: 'white',
                                padding: '8px 20px',
                                borderRadius: '50px',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}
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
                background: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.65)), url(${program.image}) center/cover no-repeat`,
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
                    <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.03em', marginBottom: '20px' }}>About This Program</h2>
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
                            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.03em', margin: 0 }}>Gallery</h2>
                        </div>
                        <div className="vol-gallery-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gridTemplateRows: '200px',
                            gap: '12px'
                        }}>
                            {program.galleryImages.map((img, idx) => (
                                <div key={idx} className="vol-gallery-item" style={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                }}>
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
                                </div>
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
                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.03em', marginBottom: '30px' }}>Program Highlights</h2>
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
                    const isLast = idx === filteredArr.length - 1;
                    return (
                        <div key={idx} id={isItinerary ? "itinerary" : `section-${idx}`} className="section-card" style={{
                            background: 'transparent',
                            padding: '45px 0',
                            marginBottom: '45px',
                            borderBottom: isLast && !program.accommodation && !program.mealsInfo ? 'none' : '1px solid #eaeaea'
                        }}>
                            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.03em', marginBottom: '30px' }}>{section.title}</h2>
                            
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
                            src={program.galleryImages[1].src} 
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
                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.03em', marginBottom: '20px' }}>Accommodation Options</h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444444', marginBottom: '35px' }}>{program.accommodation.description}</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '45px' }}>
                            {program.accommodation.options.map((opt, idx) => (
                                <div key={idx} style={{ 
                                    padding: '30px 35px', 
                                    borderRadius: '24px', 
                                    background: '#f5f5f7', 
                                    border: '2px solid rgba(0,0,0,0.03)',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }} className="config-tile">
                                    <div>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{opt.icon}</div>
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
                    </div>
                )}

                {/* Meals Specs Section */}
                {program.mealsInfo && (
                    <div id="meals" className="section-card" style={{
                        background: 'transparent',
                        padding: '45px 0',
                        marginBottom: '60px'
                    }}>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.03em', marginBottom: '20px' }}>Meals</h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444444', marginBottom: '35px' }}>{program.mealsInfo.description}</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            <div style={{ padding: '30px', borderRadius: '24px', background: '#fff9e6', border: '1px solid #ffe89e', display: 'flex', flexDirection: 'column', gap: '15px' }} className="meal-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '1.8rem' }}>🍳</span>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#664d00', margin: 0 }}>Breakfast</h3>
                                </div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#806000', margin: 0, fontWeight: 550 }}>{program.mealsInfo.examples.breakfast}</p>
                            </div>
                            <div style={{ padding: '30px', borderRadius: '24px', background: '#e6f4ea', border: '1px solid #a3d9b1', display: 'flex', flexDirection: 'column', gap: '15px' }} className="meal-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '1.8rem' }}>🥗</span>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a7332', margin: 0 }}>Lunch</h3>
                                </div>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#114a20', margin: 0, fontWeight: 550 }}>{program.mealsInfo.examples.lunch}</p>
                            </div>
                            <div style={{ padding: '30px', borderRadius: '24px', background: '#fae9e9', border: '1px solid #f0b4b4', display: 'flex', flexDirection: 'column', gap: '15px' }} className="meal-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '1.8rem' }}>🥘</span>
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
                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1d1d1f', letterSpacing: '-0.03em', marginBottom: '30px' }}>{section.title}</h2>
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

            {/* Modern Floating Bottom Bar */}
            <div style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'calc(100% - 60px)',
                maxWidth: '580px',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '50px',
                padding: '14px 16px 14px 30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                boxShadow: '0 12px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.03)',
                boxSizing: 'border-box'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%', justifyContent: 'space-between' }}>
                    <div className="bottom-price-info" style={{ display: 'flex', flexDirection: 'column', gap: '3px', textAlign: 'left' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                            <span style={{ fontSize: '0.65rem', color: '#86868b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>From</span>
                            <span style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--primary-green)', lineHeight: 1 }}>{formatPrice(program.price)}</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', color: '#86868b', fontWeight: 600, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>* Includes accommodation, meals & pickup</span>
                    </div>
                    <Link 
                        to={`/volunteer-inquiry?program=${encodeURIComponent(program.title)}`} 
                        className="btn-apple-solid" 
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
                        <span>Apply to Volunteer</span>
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
                
                @media (max-width: 768px) {
                    .local-subnav > div {
                        padding: 10px 4% !important;
                    }
                    .subnav-link {
                        display: none !important;
                    }
                    .section-card {
                        padding: 30px 0 !important;
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
                    .bottom-price-info {
                        display: none !important;
                    }
                    .bottom-bar-actions {
                        width: 100% !important;
                        justify-content: center !important;
                        gap: 0 !important;
                    }
                    .btn-apple-solid {
                        width: 100% !important;
                        max-width: 100% !important;
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
            `}} />
        </div>
    );
};

export default VolunteerProgramDetails;
