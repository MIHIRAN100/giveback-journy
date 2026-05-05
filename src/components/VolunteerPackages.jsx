import React from 'react';
import { Link } from 'react-router-dom';
import puppyImg from '../assets/dominican puppy.jpg';
import hihiImg from '../assets/hihi.webp';
import communityImg from '../assets/volunteer-community.png';
import wildlifeImg from '../assets/volunteer-wildlife.png';

const VolunteerPackages = ({ lightTheme = true }) => {
    const packages = [
        {
            duration: "1 Week",
            title: "Short-Term Impact",
            price: "$450",
            originalPrice: "$590",
            image: communityImg,
            features: ["Orientation & Training", "1 Primary Project", "Shared Volunteer House", "Airport Pickup"],
            color: "#1DB954",
            gradient: "linear-gradient(135deg, #1DB954 0%, #15803d 100%)"
        },
        {
            duration: "2 Weeks",
            title: "Community Connection",
            price: "$750",
            originalPrice: "$950",
            image: hihiImg,
            features: ["2 Project Rotations", "Host Family Stay", "Weekend Cultural Tour", "Local Language Basics"],
            color: "#111",
            popular: true,
            gradient: "linear-gradient(135deg, #111 0%, #333 100%)"
        },
        {
            duration: "4 Weeks",
            title: "Sustainable Immersion",
            price: "$1,250",
            originalPrice: "$1,600",
            image: puppyImg,
            features: ["Lead a Small Project", "Full Board (Meals)", "Community Internship Cert", "Weekly Language Lessons"],
            color: "#1DB954",
            gradient: "linear-gradient(135deg, #1DB954 0%, #15803d 100%)"
        },
        {
            duration: "8+ Weeks",
            title: "Impact Leader",
            price: "$2,200",
            originalPrice: "$2,800",
            image: wildlifeImg,
            features: ["Project Management Role", "Research Opportunities", "Advanced Impact Cert", "Private Room Option"],
            color: "#111",
            gradient: "linear-gradient(135deg, #111 0%, #333 100%)"
        }
    ];

    return (
        <section className={`volunteer-packages-section ${!lightTheme ? 'dark-theme' : ''}`} style={{ padding: '60px 0', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                <div>
                    <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Our Programs</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '10px', color: lightTheme ? '#111' : 'white' }}>Volunteer Packages</h2>
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
                            <img src={pkg.image} alt={pkg.title} className="card-img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} />
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
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(29, 185, 84, 0.1)', padding: '2px 8px', borderRadius: '6px' }}>
                                    <i className="fa-solid fa-star" style={{ color: 'var(--primary-green)', fontSize: '0.7rem' }}></i>
                                    <span style={{ fontWeight: 800, fontSize: '0.75rem', color: 'var(--primary-green)' }}>4.9</span>
                                </div>
                            </div>
                            
                            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ccc', textDecoration: 'line-through' }}>{pkg.originalPrice}</span>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#aaa' }}>USD</span>
                                        <span style={{ 
                                            fontSize: '2.2rem', 
                                            fontWeight: 900, 
                                            background: pkg.gradient,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            lineHeight: 1
                                        }}>{pkg.price.replace('$', '')}</span>
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

                                    <Link to={`/contact?subject=Volunteer Inquiry: ${pkg.title}`} className="modern-card-btn" style={{ 
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
