import React, { useRef } from 'react';
import Moment1 from '../assets/moments/traveler_moment_1_1778416676983.png';
import Moment2 from '../assets/moments/traveler_moment_2_1778416701947.png';
import Moment3 from '../assets/moments/traveler_moment_3_1778416724035.png';
import Moment4 from '../assets/moments/traveler_moment_4_1778416747167.png';
import Moment5 from '../assets/moments/traveler_moment_5_1778416936594.png';
import Moment6 from '../assets/moments/traveler_moment_6_1778416969804.png';
import TravelerVideo1 from '../assets/WhatsApp Video 2026-05-11 at 11.24.51.mp4';
import TravelerVideo2 from '../assets/WhatsApp Video 2026-05-11 at 11.38.28.mp4';

const MomentCard = ({ moment, activeCardId, setActiveCardId }) => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = React.useState(true);
    const isPlaying = activeCardId === moment.id;

    React.useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(err => console.log("Autoplay blocked", err));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    const togglePlay = (e) => {
        e.stopPropagation();
        if (isPlaying) {
            setActiveCardId(null);
        } else {
            setActiveCardId(moment.id);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div key={moment.id} className={`moment-card feedback-video ${isPlaying ? 'is-playing' : ''}`}>
            <div className="moment-user">
                <div className="moment-avatar">
                    {typeof moment.avatar === 'string' && moment.avatar.startsWith('http') ? (
                        <img src={moment.avatar} alt={moment.user} style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
                    ) : (
                        moment.avatar
                    )}
                </div>
                <span className="moment-username">{moment.user}</span>
            </div>
            
            <div className="play-button-overlay" onClick={togglePlay}>
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </div>

            {moment.video && (
                <div className="mute-button-overlay" onClick={toggleMute}>
                    <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                </div>
            )}
            
            {moment.video ? (
                <video 
                    ref={videoRef}
                    src={moment.video} 
                    muted={isMuted}
                    loop 
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            ) : (
                <img src={moment.image} alt={moment.title} />
            )}
            
            <div className="moment-footer">
                <span className="moment-title">{moment.title}</span>
                <i className="fa-solid fa-video" style={{fontSize: '0.8rem', opacity: 0.7}}></i>
            </div>
        </div>
    );
};

const TravelerMoments = () => {
    const scrollRef = useRef(null);
    const [activeCardId, setActiveCardId] = React.useState(null);

    const moments = [
        {
            id: 1,
            user: "Dhvanil",
            avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100",
            image: Moment1,
            video: TravelerVideo1,
            title: "7-Day Essential Sri Lanka",
        },
        {
            id: 2,
            user: "Kelvin",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
            image: Moment2,
            video: TravelerVideo2,
            title: "Scenic Highlands Train",
        },
        {
            id: 3,
            user: "Sarah",
            avatar: "S",
            image: Moment3,
            title: "Tropical Beach Bliss",
        },
        {
            id: 4,
            user: "Kai",
            avatar: "K",
            image: Moment4,
            title: "Authentic Village Life",
        },
        {
            id: 5,
            user: "Elena",
            avatar: "E",
            image: Moment5,
            title: "Traditional Fishing Experience",
        },
        {
            id: 6,
            user: "Marcus",
            avatar: "M",
            image: Moment6,
            title: "Nuwara Eliya Tea Retreat",
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 350;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="who-we-are-section">
            <div className="who-we-are-header">
                <h2>Traveler Feedback</h2>
                <div className="who-nav-btns">
                    <button className="who-nav-btn" onClick={() => scroll('left')}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="who-nav-btn" onClick={() => scroll('right')}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div className={`who-moments-grid scroll-row ${activeCardId !== null ? 'has-active-video' : ''}`} ref={scrollRef}>
                {moments.map((moment) => (
                    <MomentCard 
                        key={moment.id} 
                        moment={moment} 
                        activeCardId={activeCardId}
                        setActiveCardId={setActiveCardId}
                    />
                ))}
            </div>
        </section>
    );
};

export default TravelerMoments;
