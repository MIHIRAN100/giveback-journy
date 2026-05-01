import React from 'react';

const FeaturesScroll = () => {
    const features = [
        { id: 1, title: 'Bespoke Itineraries', icon: 'fa-solid fa-map-location-dot', color: 'linear-gradient(135deg, #1DB954 0%, #158b3e 100%)' },
        { id: 2, title: 'Curated Stays', icon: 'fa-solid fa-bed', color: 'linear-gradient(135deg, #2b2b2b 0%, #111 100%)' },
        { id: 3, title: 'Expert Guides', icon: 'fa-solid fa-compass', color: 'linear-gradient(135deg, #1DB954 0%, #158b3e 100%)' },
        { id: 4, title: 'Private Transport', icon: 'fa-solid fa-car', color: 'linear-gradient(135deg, #2b2b2b 0%, #111 100%)' },
        { id: 5, title: '24/7 Support', icon: 'fa-solid fa-headset', color: 'linear-gradient(135deg, #1DB954 0%, #158b3e 100%)' },
        { id: 6, title: 'Eco-Friendly', icon: 'fa-solid fa-leaf', color: 'linear-gradient(135deg, #2b2b2b 0%, #111 100%)' },
        { id: 7, title: 'Local Impact', icon: 'fa-solid fa-hand-holding-heart', color: 'linear-gradient(135deg, #1DB954 0%, #158b3e 100%)' },
    ];

    return (
        <section className="features-scroll-section">
            <div className="features-scroll-container">
                {features.map((feature) => (
                    <div key={feature.id} className="feature-circle-item">
                        <div className="feature-circle" style={{ background: feature.color }}>
                            <i className={feature.icon}></i>
                        </div>
                        <span className="feature-circle-title">{feature.title}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesScroll;
