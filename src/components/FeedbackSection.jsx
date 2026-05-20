import React, { useRef } from 'react';

const FeedbackSection = () => {
    const scrollRef = useRef(null);
    
    const testimonials = [
        {
            name: "Charlotte Saunders",
            profile: "British, 19",
            trip: "7-Day Essential Sri Lanka",
            text: "I have gained so many experiences from this program. It pushed me out of my comfort zone, I connected with new people, learnt new things, experienced a new culture and so much more!",
            rating: 5,
            color: "#e8f5e9" 
        },
        {
            name: "Forrest Dores",
            profile: "German, 22",
            trip: "Southern Sun & Beach Escape",
            text: "The opportunity to explore Sri Lanka is something I have wanted to experience for years now. Thanks to this amazing experience I now have more self confidence and necessary skills.",
            rating: 5,
            color: "#e3f2fd" 
        },
        {
            name: "Emma Robertson",
            profile: "Australian, 20",
            trip: "Cultural Triangle Discovery",
            text: "Managing a budget while wanting a premium experience was tough until I found this team. They handled every detail perfectly and the heritage sites were so welcoming!",
            rating: 5,
            color: "#fff3e0" 
        },
        {
            name: "Michael Ross",
            profile: "Canadian, 25",
            trip: "Wild Safari & Highland Explorer",
            text: "The safari in Yala was perfectly timed. We avoided the crowds and saw three leopards in one afternoon. Truly a magical experience for any nature lover.",
            rating: 5,
            color: "#f3e5f5" 
        },
        {
            name: "Sofia Martinez",
            profile: "Spanish, 21",
            trip: "7-Day Essential Sri Lanka",
            text: "The heritage tour was so insightful. Learning about the ancient kingdoms made the history come alive. Climbing Sigiriya at sunrise was the highlight of my trip.",
            rating: 5,
            color: "#e0f2f1" 
        },
        {
            name: "Lucas Berger",
            profile: "German, 24",
            trip: "Scenic Highlands & Tea Trails",
            text: "Fast Wi-Fi in the most beautiful places. I worked from Ella for a week and it was the most scenic office I've ever had. Truly productive and peaceful.",
            rating: 5,
            color: "#fbe9e7" 
        }
    ];

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.offsetWidth;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="feedback-section" style={{ background: '#fcfcfc', padding: '100px 5%' }}>
            <div className="feedback-container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                
                <div className="feedback-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="about-tag">Traveler Experiences</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '20px', color: '#111' }}>What Our Travelers Say.</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#666' }}>
                        Authentic reviews from our global community of adventurers who explored our tour plans.
                    </p>
                </div>
                
                <div style={{ position: 'relative', padding: '0 40px' }}>
                    {/* Navigation Buttons */}
                    <button 
                        onClick={() => scroll('left')}
                        style={{ 
                            position: 'absolute', left: '-10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                            width: '45px', height: '45px', borderRadius: '50%', border: 'none', background: 'white', 
                            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transition: 'all 0.3s ease'
                        }}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    
                    <button 
                        onClick={() => scroll('right')}
                        style={{ 
                            position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                            width: '45px', height: '45px', borderRadius: '50%', border: 'none', background: 'white', 
                            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transition: 'all 0.3s ease'
                        }}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>

                        <div 
                            ref={scrollRef}
                            style={{ 
                                display: 'flex', 
                                flexWrap: 'nowrap',
                                gap: '20px', 
                                overflowX: 'auto', 
                                padding: '10px 0 40px 0',
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                                scrollSnapType: 'x mandatory',
                                width: '100%'
                            }}
                            className="feedback-scroll-row"
                        >
                            {testimonials.map((item, index) => (
                                <div key={index} className="feedback-card">
                                    <div>
                                    {/* Header with Initials Badge */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                                        <div style={{ 
                                            width: '50px', height: '50px', background: item.color, 
                                            color: '#333', borderRadius: '50%', display: 'flex', 
                                            alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.1rem', fontWeight: 800, border: '1px solid rgba(0,0,0,0.05)'
                                        }}>
                                            {getInitials(item.name)}
                                        </div>
                                        <div>
                                            <h4 style={{ margin: '0 0 3px 0', fontSize: '0.95rem', fontWeight: 800, color: '#111' }}>{item.name}</h4>
                                            <div style={{ display: 'flex', gap: '2px', color: 'var(--primary-green)' }}>
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <i key={i} className="fa-solid fa-star" style={{ fontSize: '0.7rem' }}></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#555', margin: '0 0 20px 0' }}>
                                        "{item.text}"
                                    </p>
                                </div>
                                
                                {/* Footer Details */}
                                <div style={{ borderTop: '1px solid #f5f5f5', paddingTop: '15px' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '4px' }}>
                                        <strong>Profile:</strong> {item.profile}
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: '#888' }}>
                                        <strong>Tour Plan:</strong> <span style={{ color: 'var(--primary-green)', fontWeight: 600 }}>{item.trip}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
            <style dangerouslySetInnerHTML={{ __html: `
                .feedback-card {
                    flex: 0 0 calc(33.333% - 14px);
                    scroll-snap-align: start;
                    background: white;
                    padding: 30px;
                    border-radius: 28px;
                    border: 1px solid #f1f5f9;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.02);
                    display: flex;
                    flex-direction: column;
                    height: auto;
                    min-height: 280px;
                    justify-content: space-between;
                    box-sizing: border-box;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .feedback-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.06);
                    border-color: rgba(29, 185, 84, 0.15);
                }

                @media (max-width: 1024px) {
                    .feedback-card {
                        flex: 0 0 calc(50% - 10px);
                        padding: 25px;
                    }
                }

                @media (max-width: 600px) {
                    .feedback-card {
                        flex: 0 0 calc(100% - 10px);
                        padding: 20px;
                    }
                }
            `}} />
            </div>
        </section>
    );
};

export default FeedbackSection;
