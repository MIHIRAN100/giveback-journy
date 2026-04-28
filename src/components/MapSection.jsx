import React from 'react';

const MapSection = () => {
    return (
        <section className="map-section">
            <div className="map-container">
                <div className="map-header">
                    <span className="about-tag">Island Explorer</span>
                    <h2>Map of Sri Lanka.</h2>
                    <p>Navigate through the Pearl of the Indian Ocean and find your next destination.</p>
                </div>

                <div className="map-wrapper">
                    <iframe 
                        title="Map of Sri Lanka"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047230.134907994!2d78.0772481079361!3d7.857731776856003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb007d3597dc3d%3A0xc3911f42289c0260!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
                        width="100%" 
                        height="600" 
                        style={{ border: 0, borderRadius: '24px' }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    
                    <div className="map-overlay-info">
                        <div className="info-card">
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <h4>Popular Hubs</h4>
                                <p>Colombo, Kandy, Galle, Ella</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
