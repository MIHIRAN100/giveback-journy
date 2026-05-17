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
            <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Program Not Found</h2>
                <button className="btn-modern btn-black" onClick={() => navigate('/volunteer')}>Return to Volunteer Hub</button>
            </div>
        );
    }

    return (
        <div className="volunteer-details-page" style={{ background: '#fcfcfc', minHeight: '100vh', paddingBottom: '100px' }}>
            <div 
                className="hero-section" 
                style={{ 
                    height: '60vh', 
                    minHeight: '400px',
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${program.image}) center/cover no-repeat`,
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '60px 5%'
                }}
            >
                <div style={{ color: 'white', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                    <span style={{ 
                        background: program.color, 
                        padding: '6px 16px', 
                        borderRadius: '50px', 
                        fontSize: '0.8rem', 
                        fontWeight: 800, 
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '20px',
                        display: 'inline-block'
                    }}>
                        {program.location}
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1 }}>
                        {program.title}
                    </h1>
                </div>
            </div>

            <div style={{ maxWidth: '1000px', margin: '60px auto 0', padding: '0 5%' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '60px' }}>
                    <div style={{ background: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                        <div style={{ fontSize: '0.8rem', color: '#666', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Duration</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#111' }}>{program.duration}</div>
                    </div>
                    <div style={{ background: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                        <div style={{ fontSize: '0.8rem', color: '#666', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Housing</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#111' }}>{program.housing}</div>
                    </div>
                    <div style={{ background: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                        <div style={{ fontSize: '0.8rem', color: '#666', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Program Fee</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--primary-green)' }}>From {formatPrice(program.price)}</div>
                    </div>
                    <div style={{ background: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                        <div style={{ fontSize: '0.8rem', color: '#666', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Min Age</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#111' }}>{program.minAge}</div>
                    </div>
                </div>

                <div style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '25px' }}>About This Program</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                        {program.description}
                    </p>
                </div>

                {program.highlights && program.highlights.length > 0 && (
                    <div style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '25px' }}>Program Highlights</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {program.highlights.map((highlight, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
                                    <i className="bi bi-check-circle-fill" style={{ color: 'var(--primary-green)', fontSize: '1.3rem', marginTop: '3px' }}></i>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {program.sections && program.sections.map((section, idx) => (
                    <div key={idx} style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '25px' }}>{section.title}</h2>
                        {section.paragraphs.map((para, pIdx) => {
                            if (para.startsWith('**')) {
                                const parts = para.split('**');
                                return (
                                    <p key={pIdx} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '20px' }}>
                                        <strong>{parts[1]}</strong>{parts[2]}
                                    </p>
                                );
                            }
                            return (
                                <p key={pIdx} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '20px' }}>
                                    {para}
                                </p>
                            );
                        })}
                    </div>
                ))}

                {program.accommodation && (
                    <div style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '25px' }}>Accommodation Options</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '30px' }}>{program.accommodation.description}</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                            {program.accommodation.options.map((opt, idx) => (
                                <div key={idx} style={{ padding: '30px', borderRadius: '20px', background: '#fcfcfc', border: '1px solid #eee' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{opt.icon}</div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '5px' }}>{opt.title}</h3>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-green)', textTransform: 'uppercase', marginBottom: '20px' }}>{opt.subtitle}</div>
                                    <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#555' }}>{opt.description}</p>
                                </div>
                            ))}
                        </div>

                        <div style={{ background: '#f5f7f9', padding: '30px', borderRadius: '20px' }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px' }}>At a glance</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                                {program.accommodation.features.map((feat, idx) => (
                                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eaeaea' }}>
                                        <span style={{ color: '#666', fontWeight: 600 }}>{feat.label}</span>
                                        <span style={{ fontWeight: 800, color: '#111' }}>{feat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {program.mealsInfo && (
                    <div style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '25px' }}>Meals</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '30px' }}>{program.mealsInfo.description}</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <div style={{ padding: '25px', borderRadius: '20px', background: '#fff9e6', border: '1px solid #ffe89e' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '10px', color: '#b38600' }}>🍳 Breakfast</h3>
                                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#664d00', margin: 0 }}>{program.mealsInfo.examples.breakfast}</p>
                            </div>
                            <div style={{ padding: '25px', borderRadius: '20px', background: '#e6f4ea', border: '1px solid #a3d9b1' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '10px', color: '#1a7332' }}>🥗 Lunch</h3>
                                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#0d3919', margin: 0 }}>{program.mealsInfo.examples.lunch}</p>
                            </div>
                            <div style={{ padding: '25px', borderRadius: '20px', background: '#fae9e9', border: '1px solid #f0b4b4' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '10px', color: '#c52828' }}>🥘 Dinner</h3>
                                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#621414', margin: 0 }}>{program.mealsInfo.examples.dinner}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Sticky Bottom Apply Bar */}
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(0,0,0,0.1)',
                padding: '20px 5%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                boxShadow: '0 -10px 30px rgba(0,0,0,0.05)'
            }}>
                <div style={{ maxWidth: '1000px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="bottom-bar-info" style={{ display: 'none' }}>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900 }}>{program.title}</h4>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', fontWeight: 600 }}>Secure your spot today.</p>
                    </div>
                    <Link 
                        to={`/volunteer-inquiry?program=${encodeURIComponent(program.title)}`} 
                        className="btn-modern btn-solid-green" 
                        style={{ 
                            padding: '16px 40px', 
                            fontSize: '1.1rem', 
                            width: '100%', 
                            maxWidth: '400px', 
                            textAlign: 'center', 
                            margin: '0 auto',
                            display: 'block' 
                        }}
                    >
                        Apply to Volunteer
                    </Link>
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                @media (min-width: 768px) {
                    .bottom-bar-info {
                        display: block !important;
                    }
                    .btn-solid-green {
                        margin: 0 !important;
                    }
                }
            `}} />
        </div>
    );
};

export default VolunteerProgramDetails;
