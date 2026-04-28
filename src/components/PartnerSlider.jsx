import React from 'react';

const PartnerSlider = () => {
    const stats = [
        { id: 1, name: "10K+ HAPPY TRAVELERS", icon: "fa-users" },
        { id: 2, name: "500+ EXCLUSIVE TOURS", icon: "fa-map-location-dot" },
        { id: 3, name: "4.9/5 USER RATING", icon: "fa-star" },
        { id: 4, name: "15+ YEARS EXPERIENCE", icon: "fa-award" },
        { id: 5, name: "24/7 ISLAND SUPPORT", icon: "fa-headset" },
        { id: 6, name: "CERTIFIED SUSTAINABLE", icon: "fa-leaf" },
        { id: 7, name: "BOUTIQUE LUXURY", icon: "fa-crown" },
        { id: 8, name: "VOTED BEST AGENCY 2024", icon: "fa-trophy" }
    ];

    return (
        <section className="partner-slider-section">
            <div className="partner-slider">
                <div className="slider-track">
                    {/* Double the array for seamless infinite loop */}
                    {[...stats, ...stats].map((stat, index) => (
                        <div key={index} className="partner-logo">
                            <i className={`fa-solid ${stat.icon}`}></i>
                            <span>{stat.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerSlider;
