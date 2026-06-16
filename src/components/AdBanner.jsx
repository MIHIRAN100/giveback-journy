import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const AdBanner = ({ isScrolled }) => {
    const [visible, setVisible] = useState(true);
    const location = useLocation();
    const isTourDetails = location.pathname.startsWith('/package/');

    useEffect(() => {
        const closed = sessionStorage.getItem('ad_banner_closed');
        if (closed) {
            setVisible(false);
        }
    }, []);

    const handleClose = () => {
        setVisible(false);
        sessionStorage.setItem('ad_banner_closed', 'true');
    };

    return (
        <div className={`banner-wrapper ${(!visible || isTourDetails) ? 'banner-hidden' : ''}`}>
            <div className="banner">
                <div className="banner-stat">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>1000+ travelers since 2019</span>
                </div>
                <Link to="/volunteer" className="banner-cta">
                    Trusted volunteer programs + flexible booking! Apply today <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.55rem', marginLeft: '4px' }}></i>
                </Link>
                <div className="banner-close" onClick={handleClose}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    );
};

export default AdBanner;
