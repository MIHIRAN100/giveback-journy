import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const ExclusiveJourneys = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const bespokeServices = [
        {
            title: "Local Train Adventures",
            desc: "Experience the world's most scenic rail journeys with pre-booked tickets in observation classes at local prices.",
            icon: "fa-solid fa-train-subway",
            image: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Authentic Homestays",
            desc: "Stay with local families in handpicked guesthouses that offer comfort, safety, and real Sri Lankan hospitality.",
            icon: "fa-solid fa-house-user",
            image: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Budget Conscious Planning",
            desc: "Our local experts design itineraries that maximize your experience while keeping costs transparent and affordable.",
            icon: "fa-solid fa-wallet",
            image: "https://images.unsplash.com/photo-1590418606746-018840fb9cd0?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const eliteExperiences = [
        {
            id: 1,
            title: "Village Cooking & Dining",
            location: "Hiriwadunna",
            desc: "Learn the secrets of Sri Lankan spices from village elders and enjoy a traditional lunch in a humble mud-brick home.",
            image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Public Land Wildlife Spotting",
            location: "Wilpattu Borders",
            desc: "Experience the thrill of the wild in lesser-known buffer zones with local trackers who know every trail.",
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            title: "Local Market & Street Food Tour",
            location: "Colombo/Kandy",
            desc: "Navigate the vibrant Pettah markets and taste the best 'Kottu Roti' at authentic spots known only to locals.",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="exclusive-page">
            {/* Premium Hero */}
            <section className="exclusive-hero">
                <div className="exclusive-hero-overlay"></div>
                <div className="exclusive-hero-content">
                    <ScrollReveal>
                        <span className="exclusive-tag">Authentic & Affordable</span>
                        <h1>Real Journeys.<br/>True Local Value.</h1>
                        <p>Discover the soul of Sri Lanka without the tourist price tag. We specialize in handcrafted budget adventures that give back to local communities.</p>
                        <div className="exclusive-hero-btns">
                            <a href="#bespoke" className="btn-modern btn-white">View Budget Plans</a>
                            <Link to="/contact" className="btn-modern btn-solid-green">Plan Your Value Trip</Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Bespoke Services Section */}
            <section className="bespoke-services" id="bespoke">
                <div className="container">
                    <div className="section-header-centered">
                        <span className="about-tag">Value Driven</span>
                        <h2>Authentic Travel, Better Prices.</h2>
                        <p>We believe every traveler deserves an incredible journey. Our budget-friendly approach focuses on real experiences and sustainable travel.</p>
                    </div>

                    <div className="bespoke-grid">
                        {bespokeServices.map((service, index) => (
                            <ScrollReveal key={index}>
                                <div className="bespoke-card">
                                    <div className="bespoke-img">
                                        <img src={service.image} alt={service.title} />
                                        <div className="bespoke-icon">
                                            <i className={service.icon}></i>
                                        </div>
                                    </div>
                                    <div className="bespoke-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Elite Experiences */}
            <section className="elite-experiences">
                <div className="container">
                    <div className="experience-flex">
                        <div className="experience-text">
                            <span className="about-tag">Local Secrets</span>
                            <h2>Off-the-Beaten-Path.</h2>
                            <p>Luxury is in the connection, not just the thread count. Join us for unique experiences that showcase the true heart of our island home.</p>
                        </div>
                    </div>

                    <div className="experience-cards-container">
                        {eliteExperiences.map((exp, index) => (
                            <ScrollReveal key={exp.id}>
                                <div className="experience-book-card">
                                    <div className="exp-card-img">
                                        <img src={exp.image} alt={exp.title} />
                                        <div className="exp-card-number">{index + 1}</div>
                                        <div className="exp-card-location">
                                            <i className="fa-solid fa-location-dot"></i> {exp.location}
                                        </div>
                                    </div>
                                    <div className="exp-card-content">
                                        <h3>{exp.title}</h3>
                                        <p>{exp.desc}</p>
                                        <Link to="/contact" className="btn-modern btn-solid-green exp-book-btn">
                                            Book This Experience
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Private Stays Gallery */}
            <section className="private-gallery">
                <div className="gallery-header">
                    <h2>Eco-Stays & Hidden Gems.</h2>
                    <p>We partner with small-scale, sustainable accommodations that offer the best value for your stay.</p>
                </div>
                <div className="gallery-strip">
                    <div className="gallery-item"><img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" alt="Eco Stay 1" /></div>
                    <div className="gallery-item"><img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800" alt="Eco Stay 2" /></div>
                    <div className="gallery-item"><img src="https://images.unsplash.com/photo-1445013544690-d30045d04b1b?auto=format&fit=crop&q=80&w=800" alt="Eco Stay 3" /></div>
                    <div className="gallery-item"><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" alt="Eco Stay 4" /></div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="exclusive-cta">
                <div className="cta-glass-box">
                    <ScrollReveal>
                        <h2>Ready for an Authentic Adventure?</h2>
                        <p>Tell us your budget and interests, and we'll craft the perfect journey that maximizes your island experience.</p>
                        <Link to="/contact" className="btn-modern btn-black">Get a Custom Budget Quote</Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default ExclusiveJourneys;
