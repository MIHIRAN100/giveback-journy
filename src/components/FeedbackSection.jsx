import React from 'react';

const FeedbackSection = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Adventure Traveler",
            text: "The budget luxury experience is real. I saw more of Sri Lanka in 10 days than I ever thought possible, all without breaking the bank. Highly recommended!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
        },
        {
            name: "David Chen",
            role: "Solo Backpacker",
            text: "Exceptional local knowledge. They took me to spots that weren't on any map. The volunteer experience was the highlight of my entire trip.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
        },
        {
            name: "Emma Robertson",
            role: "Family Vacation",
            text: "Managing a family budget while wanting a premium experience was tough until I found this team. They handled every detail perfectly.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
        }
    ];

    return (
        <section className="feedback-section">
            <div className="feedback-container">
                <div className="feedback-header">
                    <span className="about-tag">Testimonials</span>
                    <h2>What Our <br/> Travelers Say.</h2>
                    <p>Real stories from adventurers who explored Sri Lanka with us.</p>
                </div>

                <div className="feedback-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="feedback-card">
                            <div className="feedback-stars">
                                {[...Array(item.rating)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star"></i>
                                ))}
                            </div>
                            <p className="feedback-text">"{item.text}"</p>
                            <div className="feedback-user">
                                <img src={item.image} alt={item.name} />
                                <div className="user-info">
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
