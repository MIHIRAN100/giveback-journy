import React from 'react';

const PartnerSlider = () => {
    const stats = [
        { id: 1, name: "500+ HAPPY TRAVELERS", icon: "fa-users" },
        { id: 2, name: "SIGNATURE IMPACT TOURS", icon: "fa-map-location-dot" },
        { id: 3, name: "4.9/5 USER RATING", icon: "fa-star" },
        { id: 4, name: "10+ YEARS EXPERIENCE", icon: "fa-award" },
        { id: 5, name: "24/7 ISLAND SUPPORT", icon: "fa-headset" },
        { id: 6, name: "VOLUNTEER INTEGRATED", icon: "fa-hand-holding-heart" },
        { id: 7, name: "COMMUNITY DRIVEN", icon: "fa-people-group" }
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
