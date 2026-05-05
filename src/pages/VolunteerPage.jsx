import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import puppyImg from '../assets/dominican puppy.jpg';
import effortImg from '../assets/This Moment Shows Effort Beyond Words.webp';
import hihiImg from '../assets/hihi.webp';
import VolunteerPackages from '../components/VolunteerPackages';

const VolunteerPage = () => {
    const testimonials = [
        {
            quote: "This wasn't just a trip; it was a transformation. Seeing the local communities thrive and being part of the wildlife conservation made me realize the power of small actions.",
            author: "Emma Mitchell",
            location: "Volunteer from London, UK",
            initials: "EM",
            image: puppyImg
        },
        {
            quote: "This moment showed me that some efforts go beyond words. Seeing the tangible impact of our work was incredibly rewarding.",
            author: "Elena Rossi",
            location: "Volunteer from Rome, Italy",
            initials: "ER",
            image: effortImg
        },
        {
            quote: "The connections I made with the local community will stay with me forever. Every smile made the hard work worth it.",
            author: "Yuki Tanaka",
            location: "Volunteer from Tokyo, Japan",
            initials: "YT",
            image: hihiImg
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                setIsFading(false);
            }, 600);
        }, 6000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="volunteer-page" style={{ background: '#fff' }}>
            {/* Hero Section */}
            <section className="volunteer-hero" style={{
                height: '65vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${effortImg}) no-repeat center/cover`,
                marginBottom: '80px'
            }}>
                <div className="hero-content" style={{ maxWidth: '900px', padding: '0 20px' }}>
                    <span style={{ 
                        textTransform: 'uppercase', 
                        letterSpacing: '4px', 
                        fontSize: '0.9rem', 
                        fontWeight: 800,
                        background: 'var(--primary-green)',
                        padding: '8px 25px',
                        borderRadius: '100px',
                        display: 'inline-block',
                        marginBottom: '25px'
                    }}>
                        Give Back to the Island
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.8rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
                        Volunteer <br/> Experiences<span style={{ color: 'var(--primary-green)' }}>.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', marginTop: '30px', opacity: 0.9, lineHeight: 1.6, fontWeight: 400, maxWidth: '700px', margin: '30px auto 0' }}>
                        Join our mission to empower local communities through education, sustainable development, and hands-on support.
                    </p>
                </div>
            </section>

            {/* In-Depth Information Container */}
            <div className="volunteer-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5% 120px' }}>
                
                {/* Introduction */}
                <section style={{ marginBottom: '100px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '35px', color: '#111' }}>
                        Make a Lasting Impact
                    </h2>
                    <div style={{ fontSize: '1.2rem', lineHeight: 1.9, color: '#444' }}>
                        <p style={{ marginBottom: '30px' }}>
                            Volunteering in Sri Lanka is a journey of the heart. At Giveback Journey, we connect passionate travelers with meaningful projects that address the island's most pressing needs. Whether you're teaching English to enthusiastic students, supporting woman empowerment initiatives, or providing care for those with special needs, your contribution creates a ripple effect of positive change.
                        </p>
                        <p>
                            We believe in "Responsible Volunteering." This means our projects are developed in close partnership with local leaders to ensure they are sustainable, ethical, and culturally sensitive. We don't just offer "voluntourism"—we offer a chance to work side-by-side with Sri Lankans, learning from each other and building bridges of empowerment that last a lifetime.
                        </p>
                    </div>
                </section>

                {/* Experience Focus Areas */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '100px' }}>
                    
                    {/* Woman Empowerment */}
                    <div style={{ borderTop: '1px solid #eee', paddingTop: '60px' }}>
                        <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '25px', color: 'var(--primary-green)' }}>Woman Empowerment</h3>
                        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444', marginBottom: '30px' }}>
                            Support local women in gaining financial independence and leadership skills. Our empowerment projects involve vocational training, small business workshops, and English literacy programs tailored for women in rural areas. You'll help build confidence and create sustainable pathways for local families.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                            {["Skills Training", "Economic Literacy", "Mentorship", "Business Workshops"].map((item, i) => (
                                <span key={i} style={{ background: '#f0fdf4', color: '#166534', padding: '8px 18px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 700 }}>{item}</span>
                            ))}
                        </div>
                    </div>

                    {/* Special Needs Care */}
                    <div style={{ borderTop: '1px solid #eee', paddingTop: '60px' }}>
                        <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '25px', color: '#111' }}>Special Needs Support</h3>
                        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444', marginBottom: '30px' }}>
                            Work in dedicated centers providing care and education for children and adults with special needs. Volunteers assist with physical therapy exercises, creative arts, and basic life skills training. Your presence provides essential support to local staff and brings joy and personalized attention to those who need it most.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                            {["Therapeutic Play", "Individual Care", "Art Therapy", "Skill Building"].map((item, i) => (
                                <span key={i} style={{ background: '#f8f9fa', color: '#475569', padding: '8px 18px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 700 }}>{item}</span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Project Locations */}
                <section style={{ marginBottom: '100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '-0.03em' }}>Where You’ll Make an Impact</h2>
                        <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '10px' }}>Our primary projects are concentrated in two of Sri Lanka’s most historic and beautiful districts.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                        <div style={{ 
                            background: '#f8f9fa', 
                            padding: '50px', 
                            borderRadius: '30px',
                            border: '1px solid #eee'
                        }}>
                            <h4 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px', color: '#111' }}>Kandy District</h4>
                            <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '25px' }}>
                                Nestled in the lush hill country, our Kandy projects focus on community development, English education in rural schools, and supporting local medical clinics and healthcare initiatives. It’s an ideal location for those who love mountain landscapes and rich cultural heritage.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {["Hill Country", "Education", "Rural Villages"].map((tag, i) => (
                                    <span key={i} style={{ fontSize: '0.8rem', fontWeight: 700, background: 'rgba(0,0,0,0.05)', padding: '5px 12px', borderRadius: '6px' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div style={{ 
                            background: '#f8f9fa', 
                            padding: '50px', 
                            borderRadius: '30px',
                            border: '1px solid #eee'
                        }}>
                            <h4 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px', color: 'var(--primary-green)' }}>Galle District</h4>
                            <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '25px' }}>
                                Along the historic southern coast, our Galle projects focus on renovation of ancient community buildings and supporting special needs education centers. It's a blend of heritage preservation and high-impact social work.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {["Coastal Region", "Renovation", "Special Needs"].map((tag, i) => (
                                    <span key={i} style={{ fontSize: '0.8rem', fontWeight: 700, background: 'rgba(0,0,0,0.05)', padding: '5px 12px', borderRadius: '6px' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Volunteer Features Grid */}
                <section style={{ 
                    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
                    padding: '80px 60px', 
                    borderRadius: '40px', 
                    color: 'var(--pitch-black)',
                    marginBottom: '100px',
                    border: '1px solid #e2e8f0'
                }}>
                    <h3 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '50px', textAlign: 'center', letterSpacing: '-0.03em' }}>
                        Volunteer Program Features
                    </h3>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                        gap: '50px' 
                    }}>
                        {[
                            { title: "Project Training", desc: "Full orientation and hands-on training provided by local experts for all volunteer tasks.", icon: "fa-chalkboard-user" },
                            { title: "Local Coordinator", desc: "24/7 support from our dedicated local coordinators who live in the same community.", icon: "fa-user-group" },
                            { title: "Shared Living", desc: "Stay in comfortable, secure volunteer houses or with carefully selected local host families.", icon: "fa-house-chimney" },
                            { title: "Certificate of Impact", desc: "Receive an official certificate documenting your contribution and the hours volunteered.", icon: "fa-certificate" },
                            { title: "Community Events", desc: "Regular social gatherings and cultural exchange nights with local community members.", icon: "fa-handshake" },
                            { title: "Sustainable Impact", desc: "Confidence that your work is part of a long-term, monitored sustainability plan.", icon: "fa-leaf" }
                        ].map((item, i) => (
                            <div key={i} style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
                                <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--primary-green)', fontSize: '2rem', marginBottom: '25px' }}></i>
                                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '15px', color: '#111' }}>{item.title}</h4>
                                <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '1rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Important Notice */}
                <section style={{ 
                    background: '#fff9f0', 
                    padding: '50px', 
                    borderRadius: '30px', 
                    border: '1px solid #ffedd5',
                    marginBottom: '150px'
                }}>
                    <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                        <div style={{ 
                            background: '#f59e0b', 
                            color: 'white', 
                            width: '50px', 
                            height: '50px', 
                            borderRadius: '12px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            flexShrink: 0
                        }}>
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '15px', color: '#92400e' }}>Ethical Volunteering Notice</h3>
                            <p style={{ color: '#b45309', lineHeight: 1.8, fontSize: '1.1rem' }}>
                                Volunteering is a serious commitment. We ask our volunteers to approach their projects with humility, patience, and a willingness to learn. It is important to remember that you are a guest in these communities. Respecting local cultural norms, dressing modestly, and following the guidance of our project leaders is mandatory. We prioritize the safety and well-being of the local children and wildlife above all else.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Volunteer Packages Section */}
                <VolunteerPackages />


                <section style={{ marginBottom: '100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>The Roadmap</span>
                        <h2 style={{ fontSize: '3.2rem', fontWeight: 900, letterSpacing: '-0.04em', marginTop: '10px' }}>Your Impact Journey</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                        {/* Impact Journey Cards */}
                        {[
                            { step: "01", title: "Apply Online", desc: "Select your project and share your passion through our simple application." },
                            { step: "02", title: "Personal Chat", desc: "Connect with our team to align your skills with the community's needs." },
                            { step: "03", title: "Preparation", desc: "Get equipped with cultural insights and essential project training." },
                            { step: "04", title: "Arrive & Act", desc: "Begin your journey side-by-side with our local team and partners." }
                        ].map((item, i) => (
                            <div key={i} className="journey-step-card" style={{ 
                                background: 'linear-gradient(135deg, #1DB954 0%, #0a2e1a 100%)', 
                                padding: '60px 45px', 
                                borderRadius: '40px', 
                                color: 'white',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}>
                                {/* Floating Number */}
                                <div style={{ 
                                    fontSize: '6rem', 
                                    fontWeight: 900, 
                                    color: 'rgba(255, 255, 255, 0.1)',
                                    position: 'absolute',
                                    bottom: '-20px',
                                    right: '20px',
                                    lineHeight: 1,
                                    zIndex: 1
                                }}>
                                    {item.step}
                                </div>

                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <div style={{ 
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '45px',
                                        height: '45px',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '12px',
                                        marginBottom: '35px',
                                        color: 'white',
                                        fontWeight: 900
                                    }}>
                                        {item.step}
                                    </div>
                                    <h4 style={{ fontSize: '1.7rem', fontWeight: 900, marginBottom: '20px', color: 'white', letterSpacing: '-0.02em' }}>{item.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '1.05rem', margin: 0 }}>{item.desc}</p>
                                </div>

                                {/* Shine Effect */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)',
                                    zIndex: 1
                                }}></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section style={{ marginBottom: '100px' }}>
                    <div style={{ 
                        background: '#111', 
                        borderRadius: '40px', 
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        minHeight: '500px',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
                    }}>
                        {/* Image Side */}
                        <div style={{ 
                            background: `url(${testimonials[currentIndex].image}) no-repeat center/cover`,
                            minHeight: '400px',
                            transition: 'all 0.8s ease',
                            opacity: isFading ? 0.7 : 1,
                            transform: isFading ? 'scale(1.05)' : 'scale(1)'
                        }}></div>

                        {/* Content Side */}
                        <div style={{ 
                            padding: '80px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, #1DB954 0%, #0a2e1a 100%)',
                            color: 'white',
                            position: 'relative'
                        }}>
                            <div style={{
                                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                opacity: isFading ? 0 : 1,
                                transform: isFading ? 'translateY(20px)' : 'translateY(0)'
                            }}>
                                <i className="fa-solid fa-quote-left" style={{ fontSize: '3rem', opacity: 0.3, marginBottom: '30px' }}></i>
                                <h3 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '40px', lineHeight: 1.4 }}>
                                    "{testimonials[currentIndex].quote}"
                                </h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        borderRadius: '50%', 
                                        background: 'rgba(255,255,255,0.2)', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        fontWeight: 900, 
                                        fontSize: '1.2rem',
                                        border: '1px solid rgba(255,255,255,0.3)'
                                    }}>
                                        {testimonials[currentIndex].initials}
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <p style={{ fontWeight: 800, fontSize: '1.1rem', margin: 0 }}>{testimonials[currentIndex].author}</p>
                                        <p style={{ opacity: 0.7, fontSize: '0.9rem', margin: 0 }}>{testimonials[currentIndex].location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Slider Indicators */}
                            <div style={{ 
                                position: 'absolute', 
                                bottom: '40px', 
                                left: '80px', 
                                display: 'flex', 
                                gap: '10px' 
                            }}>
                                {testimonials.map((_, i) => (
                                    <div key={i} style={{ 
                                        width: i === currentIndex ? '30px' : '8px', 
                                        height: '8px', 
                                        borderRadius: '4px', 
                                        background: i === currentIndex ? 'white' : 'rgba(255,255,255,0.3)',
                                        transition: 'all 0.4s ease'
                                    }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px' }}>Start Your Impact Journey</h2>
                    <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '40px' }}>Join us in making a real difference in the pearl of the Indian Ocean.</p>
                    <Link to="/contact" className="btn-modern" style={{ 
                        padding: '22px 70px', 
                        background: 'var(--primary-green)', 
                        color: 'white', 
                        borderRadius: '500px',
                        fontWeight: 800,
                        fontSize: '1.15rem',
                        textDecoration: 'none',
                        display: 'inline-block',
                        boxShadow: '0 15px 35px rgba(16, 124, 65, 0.25)',
                        transition: 'var(--transition)'
                    }}>
                        Apply to Volunteer
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default VolunteerPage;
