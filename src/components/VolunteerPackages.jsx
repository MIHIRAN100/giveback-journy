import React from 'react';
import { Link } from 'react-router-dom';
import specialNeedsImg from '../assets/c6031e1f-c623-47b3-9ff1-1602cad6772f.jpg';
import teachingImg from '../assets/teaching volunteers/IMG-20241203-WA0044.jpg';
import yogaImg from '../assets/yoga_meditation_temple_sri_lanka_1778936481374.png';
import renovationImg from '../assets/construction volunteer/WhatsApp Image 2026-06-03 at 17.39.33.jpeg';
import cultureImg from '../assets/culture_experience_sri_lanka_volunteer_1778936526264.png';
import wildlifeImg from '../assets/volunteer-wildlife.png';
import { useCurrency } from '../context/CurrencyContext';

const VolunteerPackages = ({ lightTheme = true }) => {
    const { formatPrice } = useCurrency();
    const packages = [
        {
            duration: "2 Weeks",
            title: "Special Needs Care",
            price: "$320",
            originalPrice: "$480",
            image: specialNeedsImg,
            features: ["School Support", "Therapy Assistance", "Home Visits", "Daily Orientation"],
            color: "#1ba352",
            rating: 4.9,
            gradient: "linear-gradient(135deg, #1ba352 0%, #168a45 100%)"
        },
        {
            duration: "2-4 Weeks",
            title: "Teaching in Rural Villages",
            price: "$290",
            originalPrice: "$450",
            image: teachingImg,
            features: ["Preschool Teaching", "Conversational English", "School Renovation", "Village Immersion"],
            color: "#111",
            popular: true,
            rating: 4.8,
            gradient: "linear-gradient(135deg, #111 0%, #333 100%)"
        },
        {
            duration: "1-2 Weeks",
            title: "Community Renovation",
            price: "$250",
            originalPrice: "$380",
            image: renovationImg,
            features: ["Painting & Repairs", "Community Centers", "School Building", "Skill Workshops"],
            color: "#1ba352",
            rating: 4.7,
            gradient: "linear-gradient(135deg, #1ba352 0%, #168a45 100%)"
        },

        {
            duration: "1 Week",
            title: "Ancient Temple Experience",
            price: "$220",
            originalPrice: "$340",
            image: wildlifeImg, // Reuse or replace if needed
            features: ["Temple Maintenance", "Buddhist Teachings", "Local Ceremony Help", "Monastic Life Intro"],
            color: "#1ba352",
            rating: 4.6,
            gradient: "linear-gradient(135deg, #1ba352 0%, #168a45 100%)"
        },
        {
            duration: "2 Weeks",
            title: "Cultural Immersion",
            price: "$380",
            originalPrice: "$550",
            image: cultureImg,
            features: ["Artisan Crafts", "Village Cooking", "Farming Support", "Traditional Arts"],
            color: "#111",
            rating: 4.9,
            gradient: "linear-gradient(135deg, #111 0%, #333 100%)"
        }
    ];

    return (
        <section className={`volunteer-packages-section ${!lightTheme ? 'dark-theme' : ''}`} style={{ padding: '60px 0', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                <div>
                    <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Our Programs</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '10px', color: lightTheme ? '#111' : 'white' }}>Volunteer Packages</h2>
                    <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '5px' }}>
                        <i className="fa-solid fa-tag" style={{ color: 'var(--primary-green)', marginRight: '5px' }}></i>
                        <b>Budget-Friendly Guarantee:</b> 100% of your fee goes directly to local project support and your basic living costs.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '10px', paddingBottom: '10px' }}>
                    <div style={{ color: lightTheme ? '#999' : 'rgba(255,255,255,0.6)', fontSize: '0.9rem', fontWeight: 600 }}>Scroll for more <i className="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>

            <div style={{ 
                display: 'flex', 
                gap: '30px', 
                overflowX: 'auto', 
                padding: '10px 10px 40px 10px',
                margin: '0 -10px',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
            }} className="no-scrollbar">
                <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
                {packages.map((pkg, i) => (
                    <div key={i} className="volunteer-card-modern" style={{ 
                        flex: '0 0 360px',
                        background: 'white',
                        borderRadius: '30px',
                        padding: '0',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                        border: '1px solid rgba(0,0,0,0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        overflow: 'hidden',
                        cursor: 'pointer'
                    }}>
                        <div style={{ height: '170px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                            <img src={pkg.image} alt={pkg.title} className="card-img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pkg.bgPosition || 'center', transition: 'transform 0.8s ease' }} />
                            <div style={{ 
                                position: 'absolute', 
                                top: '15px', 
                                left: '15px', 
                                background: 'rgba(255, 255, 255, 0.2)', 
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                color: 'white', 
                                padding: '4px 12px', 
                                borderRadius: '50px', 
                                fontSize: '0.75rem', 
                                fontWeight: 800
                            }}>
                                {pkg.duration}
                            </div>
                            {pkg.popular && (
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '15px', 
                                    right: '15px', 
                                    background: 'var(--primary-green)', 
                                    color: 'white', 
                                    padding: '4px 12px', 
                                    borderRadius: '50px', 
                                    fontSize: '0.65rem', 
                                    fontWeight: 900,
                                    textTransform: 'uppercase'
                                }}>Best Value</div>
                            )}
                        </div>
                        
                        <div style={{ padding: '25px 30px 30px', position: 'relative', display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111', lineHeight: 1.1, margin: 0 }}>{pkg.title}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(27, 163, 82, 0.1)', padding: '2px 8px', borderRadius: '6px' }}>
                                    <i className="fa-solid fa-star" style={{ color: 'var(--primary-green)', fontSize: '0.7rem' }}></i>
                                    <span style={{ fontWeight: 800, fontSize: '0.75rem', color: 'var(--primary-green)' }}>{pkg.rating}</span>
                                </div>
                            </div>
                            
                            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ccc', textDecoration: 'line-through' }}>{formatPrice(pkg.originalPrice)}</span>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#aaa' }}></span>
                                        <span style={{ 
                                            fontSize: '2.2rem', 
                                            fontWeight: 900, 
                                            background: pkg.gradient,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            lineHeight: 1
                                        }}>{formatPrice(pkg.price)}</span>
                                    </div>
                                </div>
                                <span style={{ color: '#bbb', fontSize: '0.75rem', fontWeight: 700 }}>Total program fee</span>
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {pkg.features.slice(0, 3).map((feat, idx) => (
                                        <li key={idx} style={{ marginBottom: '10px', display: 'flex', gap: '10px', color: '#555', fontSize: '0.9rem', alignItems: 'center' }}>
                                            <i className="fa-solid fa-check" style={{ color: pkg.color, fontSize: '0.7rem' }}></i>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                                    <Link to={`/volunteer-inquiry?program=${pkg.title}`} className="modern-card-btn" style={{ 
                                        background: '#111',
                                        color: 'white',
                                        textAlign: 'center',
                                        padding: '14px',
                                        borderRadius: '15px',
                                        fontWeight: 900,
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        display: 'block',
                                        transition: 'all 0.3s ease',
                                        marginTop: 'auto',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                                    }}>
                                        Start Journey
                                    </Link>
                        </div>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .volunteer-card-modern:hover {
                    transform: translateY(-15px);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.12) !important;
                }
                .volunteer-card-modern:hover .card-img-zoom {
                    transform: scale(1.1);
                }
                .modern-card-btn:hover {
                    transform: scale(1.02);
                    filter: brightness(1.1);
                }
            `}} />
        </section>
    );
};

export default VolunteerPackages;
