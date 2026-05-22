import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const BottomAdBanner = ({ isCookieVisible }) => {
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const closed = sessionStorage.getItem('bottom_ad_banner_closed');
        if (!closed) {
            // Show after a slight delay for better UX
            const timer = setTimeout(() => {
                setVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setVisible(false);
        sessionStorage.setItem('bottom_ad_banner_closed', 'true');
    };

    if (!visible || !isHomePage) return null;

    // Calculate bottom position based on cookie bar visibility
    const bottomPos = isCookieVisible ? '80px' : '0px';

    return (
        <div className="bottom-ad-banner" style={{ bottom: window.innerWidth > 768 ? bottomPos : undefined }}>
            <div className="bottom-ad-inner">
                <div className="bottom-ad-content">
                    <span className="bottom-ad-tag">LIMITED OFFER</span>
                    <p className="bottom-ad-text">
                        Book your summer journey now and get 15% off on all signature tours! 
                    </p>
                    <Link to="/packages" className="btn-modern btn-white" style={{ padding: '6px 15px', fontSize: '0.7rem', marginLeft: '10px' }}>
                        View Deals
                    </Link>
                </div>
                <div className="bottom-ad-close" onClick={handleClose}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    );
};

export default BottomAdBanner;
