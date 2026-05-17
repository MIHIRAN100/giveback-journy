import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import realExpImg from '../assets/real_sri_lanka_exp_volunteer_1778937381707.png';
import childcareImg from '../assets/sri_lanka_childcare_volunteer_1778937399157.png';
import dogImg from '../assets/sri_lanka_dog_volunteer_1778937417628.png';
import specialNeedsImg from '../assets/special_needs_care_volunteer_1778936443201.png';
import renovationImg from '../assets/renovation_volunteer_sri_lanka_1778936508752.png';
import yogaImg from '../assets/yoga_meditation_temple_sri_lanka_1778936481374.png';

const VolunteerOpportunities = () => {
    const { formatPrice } = useCurrency();
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const opportunities = [
        {
            title: "Real Sri Lanka Experience",
            location: "Kandy District",
            duration: "4 Weeks",
            housing: "Shared Rooms",
            price: "1,155",
            image: realExpImg,
            minAge: "18+",
            pickup: "Included",
            meals: "3 Daily",
            shortDesc: "A complete island immersion combining culture, adventure, and meaningful community work.",
            color: "#1DB954"
        },
        {
            title: "Sri Lanka Childcare Volunteers",
            location: "Galle District",
            duration: "1-24 Weeks",
            housing: "Shared or Private",
            price: "270",
            image: childcareImg,
            minAge: "16+",
            pickup: "Included",
            meals: "3 Daily",
            shortDesc: "Support local preschools and community centers in the vibrant southern coast.",
            color: "#ff6b6b"
        },
        {
            title: "Special Needs Support",
            location: "Kandy District",
            duration: "2-8 Weeks",
            housing: "Private or Shared",
            price: "320",
            image: specialNeedsImg,
            minAge: "18+",
            pickup: "Included",
            meals: "3 Daily",
            shortDesc: "Provide essential assistance and therapy support for children with special needs.",
            color: "#4e73df"
        },
        {
            title: "Sri Lanka Dog Volunteers",
            location: "Galle District",
            duration: "1-24 Weeks",
            housing: "Shared or Private",
            price: "300",
            image: dogImg,
            minAge: "18+",
            pickup: "Included",
            meals: "3 Daily",
            shortDesc: "Work with local clinics to rescue, treat, and rehabilitate street dogs.",
            color: "#ffd93d"
        },
        {
            title: "Village School Renovation",
            location: "Kandy District",
            duration: "1-4 Weeks",
            housing: "Shared Village Stay",
            price: "250",
            image: renovationImg,
            minAge: "18+",
            pickup: "Included",
            meals: "3 Daily",
            shortDesc: "Help transform rural school environments through painting and repair work.",
            color: "#f6ad55"
        },
        {
            title: "Zen & Temple: Yoga",
            location: "Kandy District",
            duration: "1-2 Weeks",
            housing: "Traditional Temple Stay",
            price: "350",
            image: yogaImg,
            minAge: "18+",
            pickup: "Included",
            meals: "2 Daily",
            shortDesc: "Combine mindfulness with temple service in the heart of the cultural triangle.",
            color: "#9b59b6"
        }
    ];

    return (
        <section className="volunteer-opp-section" style={{ padding: '80px 0', background: '#fff', position: 'relative' }}>
            <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 4%', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                    <div>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Open Positions</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#111', letterSpacing: '-0.04em', marginTop: '10px' }}>
                            Volunteer & Travel Opportunities
                        </h2>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button 
                            onClick={() => scroll('left')}
                            style={{ 
                                width: '45px', 
                                height: '45px', 
                                borderRadius: '50%', 
                                border: '1px solid #eee', 
                                background: 'white', 
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                            }}
                            className="scroll-nav-btn"
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            style={{ 
                                width: '45px', 
                                height: '45px', 
                                borderRadius: '50%', 
                                border: '1px solid #eee', 
                                background: 'white', 
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                            }}
                            className="scroll-nav-btn"
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <div 
                    ref={scrollRef}
                    style={{ 
                        display: 'flex', 
                        gap: '24px', 
                        overflowX: 'auto', 
                        padding: '10px 10px 40px 10px',
                        margin: '0 -10px',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }} className="no-scrollbar"
                >
                    <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
                    {opportunities.map((opp, i) => (
                        <div key={i} className="opp-card-modern" style={{ 
                            flex: '0 0 calc((100% - 96px) / 4.2)',
                            minWidth: '280px',
                            background: 'white',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
                            border: '1px solid rgba(0,0,0,0.04)',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            position: 'relative'
                        }}>
                            <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                                <img src={opp.image} alt={opp.title} className="card-img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} />
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '12px', 
                                    left: '12px', 
                                    background: 'rgba(29, 185, 84, 0.9)', 
                                    backdropFilter: 'blur(10px)',
                                    color: 'white', 
                                    padding: '4px 10px', 
                                    borderRadius: '6px', 
                                    fontSize: '0.65rem', 
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px'
                                }}>
                                    <i className="fa-solid fa-circle-check"></i> Verified
                                </div>
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '12px', 
                                    right: '12px', 
                                    background: 'rgba(255, 255, 255, 0.2)', 
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    color: 'white', 
                                    padding: '4px 10px', 
                                    borderRadius: '100px', 
                                    fontSize: '0.65rem', 
                                    fontWeight: 800
                                }}>
                                    {opp.duration}
                                </div>
                            </div>
                            
                            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px' }}>
                                    <i className="fa-solid fa-location-dot" style={{ color: opp.color, fontSize: '0.7rem' }}></i>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: opp.color, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{opp.location}</span>
                                </div>
                                <h3 style={{ fontSize: '1.15rem', fontWeight: 900, marginBottom: '15px', color: '#111', lineHeight: 1.2, height: '2.4em', display: 'flex', alignItems: 'center' }}>{opp.title}</h3>
                                
                                {/* Professional Metadata Grid */}
                                <div style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: '1fr 1fr', 
                                    gap: '12px', 
                                    marginBottom: '15px',
                                    padding: '12px',
                                    background: '#f8fafc',
                                    borderRadius: '16px',
                                    border: '1px solid #f1f5f9'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa-solid fa-user-check" style={{ color: '#64748b', fontSize: '0.75rem' }}></i>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Age {opp.minAge}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa-solid fa-utensils" style={{ color: '#64748b', fontSize: '0.75rem' }}></i>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>{opp.meals} Meals</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa-solid fa-plane-arrival" style={{ color: '#64748b', fontSize: '0.75rem' }}></i>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Pickup</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa-solid fa-house-chimney" style={{ color: '#64748b', fontSize: '0.75rem' }}></i>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Housing</span>
                                    </div>
                                </div>

                                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '20px', height: '3em', overflow: 'hidden' }}>
                                    {opp.shortDesc}
                                </p>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>Program Fee</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#111' }}>
                                            <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginRight: '4px' }}>From</span>
                                            {formatPrice(opp.price)}
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '0.65rem', color: '#1DB954', fontWeight: 800, background: 'rgba(29, 185, 84, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                                        USD / Program
                                    </div>
                                </div>

                                <Link to={`/volunteer-inquiry?program=${opp.title}`} className="opp-card-btn" style={{
                                    marginTop: 'auto',
                                    background: '#111',
                                    color: 'white',
                                    textAlign: 'center',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    fontWeight: 800,
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    display: 'block',
                                    transition: 'all 0.3s ease'
                                }}>
                                    Apply to Volunteer
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .opp-card-modern:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.1) !important;
                    border-color: rgba(29, 185, 84, 0.2);
                }
                .opp-card-modern:hover .card-img-zoom {
                    transform: scale(1.1);
                }
                .opp-card-btn:hover {
                    background: var(--primary-green);
                    transform: scale(1.02);
                    box-shadow: 0 15px 30px rgba(29, 185, 84, 0.3);
                }
                .scroll-nav-btn:hover {
                    background: #111 !important;
                    color: white !important;
                    border-color: #111 !important;
                    transform: scale(1.1);
                }
            `}} />
        </section>
    );
};

export default VolunteerOpportunities;
