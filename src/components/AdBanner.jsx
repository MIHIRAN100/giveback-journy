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

    if (!visible || isTourDetails) return null;

    return (
        <div className="bottom-ad-banner">
            <div className="bottom-ad-inner">
                <div className="bottom-ad-content">
                    <span className="bottom-ad-tag">NEW</span>
                    <p className="bottom-ad-text">
                        New volunteering projects available - Join the impact today!
                    </p>
                </div>
                <div className="bottom-ad-close" onClick={handleClose}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    );
};

export default AdBanner;
