import React from 'react';
import { Link } from 'react-router-dom';

const AdBanner = () => {
    return (
        <div className="banner-wrapper">
            <div className="banner">
                <div className="banner-stat">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>1000+ travelers since 2019</span>
                </div>
                <Link to="/volunteer" className="banner-cta">
                    Trusted volunteer programs + flexible booking! Apply today <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.55rem', marginLeft: '4px' }}></i>
                </Link>
            </div>
        </div>
    );
};

export default AdBanner;
