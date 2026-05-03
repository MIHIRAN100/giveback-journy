import React from 'react';
import WhoImage1 from '../assets/javier-saint-jean-r4pIcB2reug-unsplash.jpg';
import WhoImage2 from '../assets/f60e45b2-b97c-4817-8ce3-903aad9819e5.jpg';
import WhoImage3 from '../assets/lucija-ros-VC7P8p6dFIc-unsplash.jpg';
import WhoImage4 from '../assets/artem-beliaikin-pDiWpjV14F0-unsplash.jpg';
import WhoImage5 from '../assets/brian-kyed-8NpelZe-EzM-unsplash.jpg';
import WhoImage6 from '../assets/chathura-anuradha-subasinghe-isdvqf04MDk-unsplash.jpg';
import WhoImage7 from '../assets/praveen-maleesha-gCjCxFUugoQ-unsplash.jpg';
import WhoImage8 from '../assets/Tasting Sri Lankan Cuisine .jpg';

const WhoWeAre = () => {
    const moments = [
        {
            id: 1,
            user: "Dhvanil",
            avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100",
            image: WhoImage1,
            title: "11 Day Highlights of Japan Small Grou...",
            type: "tall"
        },
        {
            id: 3,
            user: "Kelvin",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
            image: WhoImage3,
            title: "Highlights of Turkey - 9 days",
            type: "small"
        },
        {
            id: 5,
            user: "梓",
            avatar: "梓",
            image: WhoImage5,
            title: "7 Days : the Best of Morocco...",
            type: "small"
        },
        {
            id: 4,
            user: "Kai",
            avatar: "K",
            image: WhoImage4,
            title: "From Marrakech: 3-Day Private Imperi...",
            type: "tall"
        },
        {
            id: 2,
            user: "Sandy",
            avatar: "S",
            image: WhoImage2,
            title: "10-Day Premium South Korea...",
            type: "small"
        },
        {
            id: 6,
            user: "Sushma",
            avatar: "S",
            image: WhoImage6,
            title: "Eternal and Traditional Japan",
            type: "small"
        },
        {
            id: 7,
            user: "Laura",
            avatar: "L",
            image: WhoImage7,
            title: "Pharaohs Nile Cruise Adventure...",
            type: "small"
        },
        {
            id: 8,
            user: "Sohan",
            avatar: "S",
            image: WhoImage8,
            title: "Tasting Sri Lankan Flavors",
            type: "small"
        }
    ];

    return (
        <section className="who-we-are-section">
            <div className="who-we-are-header">
                <h2>Traveler Moments</h2>
                <div className="who-header-actions">
                    <div className="who-nav-btns">
                        <button className="who-nav-btn"><i className="fa-solid fa-chevron-left"></i></button>
                        <button className="who-nav-btn"><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                    <button className="btn-modern btn-see-more">See More</button>
                </div>
            </div>

            <div className="who-moments-grid">
                {moments.map((moment) => (
                    <div key={moment.id} className={`moment-card ${moment.type}`}>
                        <div className="moment-user">
                            <div className="moment-avatar">
                                {moment.avatar.startsWith('http') ? (
                                    <img src={moment.avatar} alt={moment.user} style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
                                ) : (
                                    moment.avatar
                                )}
                            </div>
                            <span className="moment-username">{moment.user}</span>
                        </div>
                        
                        <img src={moment.image} alt={moment.title} />
                        
                        <div className="moment-play-btn">
                            <i className="fa-solid fa-play"></i>
                        </div>

                        <div className="moment-footer">
                            <span className="moment-title">{moment.title}</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhoWeAre;
