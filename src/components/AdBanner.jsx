import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AdBanner = () => {
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
        <div className={`banner-wrapper ${!visible || isTourDetails ? 'banner-hidden' : ''}`}>
            <div className="banner">
                <span className="banner-tag">NEW</span>
                <p className="banner-text">
                    New volunteering projects available - Join the impact today!
                </p>
                <div className="banner-close" onClick={handleClose}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    );
};

export default AdBanner;
