import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tourPackages } from '../data/tours';

const ExclusiveExperiences = () => {
    const [activeTab, setActiveTab] = useState("Only Giveback experiences");

    const tabs = ["Only Giveback experiences", "New trips", "Popular trips"];

    // Mapping tourPackages to the experience card format
    const experiencesData = tourPackages.slice(0, 8).map((tour, index) => {
        // Assign categories based on index for variety
        let category = "Only Giveback experiences";
        if (index === 1 || index === 4) category = "New trips";
        if (index === 2 || index === 5) category = "Popular trips";

        const numericPrice = parseInt(tour.price.replace('$', '')) || 500;
        const originalPrice = Math.round(numericPrice * 1.25);
        
        // Extracting numeric days for the small badge
        const daysCount = tour.days.split(' ')[0] || "1";

        // Creating a "Host Text" using the first itinerary item's location
        const hostLocation = tour.itinerary[0]?.title.split(' ').pop() || "Sri Lanka";
        const hostText = `${tour.itinerary[0]?.title || tour.name} style`;

        return {
            id: tour.id,
            title: tour.name,
            hostText: hostText,
            days: daysCount,
            originalPrice: originalPrice,
            currentPrice: numericPrice,
            image: tour.image,
            category: category
        };
    });

    const filteredExperiences = experiencesData.filter(exp => 
        activeTab === "Only Giveback experiences" ? true : exp.category === activeTab
    );

    return (
        <section className="exclusive-exp-section">
            <div className="exp-container">
                <div className="exp-header">
                    <div className="exp-tabs">
                        {tabs.map(tab => (
                            <button 
                                key={tab}
                                className={`exp-tab-btn ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <Link to="/exclusive-journeys" className="exp-explore-btn">
                        Explore experiences
                    </Link>
                </div>

                <div className="exp-grid-scroll">
                    {filteredExperiences.map(exp => (
                        <div key={exp.id} className="exp-card-modern">
                            <div className="exp-card-img-box">
                                <img src={exp.image} alt={exp.title} />
                                <div className="exp-card-overlay-text">
                                    <h3>{exp.hostText}</h3>
                                </div>
                            </div>
                            <div className="exp-card-info">
                                <span className="exp-days">{exp.days} days</span>
                                <h4 className="exp-title">{exp.title}</h4>
                                <div className="exp-price-box">
                                    <span className="exp-price-from">From USD <del>${exp.originalPrice}</del></span>
                                    <span className="exp-price-current">USD ${exp.currentPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExclusiveExperiences;
