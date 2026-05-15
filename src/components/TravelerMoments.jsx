import React, { useRef } from 'react';
import Moment1 from '../assets/moments/traveler_moment_1_1778416676983.png';
import TravelerVideo3 from '../assets/IMG_5706 (1).MOV';
import Volunteer1 from '../assets/volunteer_1.png';
import Volunteer2 from '../assets/volunteer_2.png';
import Volunteer3 from '../assets/volunteer_3.png';
import Volunteer4 from '../assets/volunteer_4.png';

const getYouTubeId = (url) => {
    if (!url) return null;
    const shortsMatch = url.match(/shorts\/([^?]+)/);
    if (shortsMatch) return shortsMatch[1];
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

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
                getYouTubeId(moment.video) ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${getYouTubeId(moment.video)}?autoplay=${isPlaying ? 1 : 0}&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${getYouTubeId(moment.video)}&modestbranding=1&rel=0`}
                        style={{ width: '100%', height: '100%', border: 'none', objectFit: 'cover' }}
                        allow="autoplay; encrypted-media"
                        title={moment.title}
                    />
                ) : (
                    <video 
                        ref={videoRef}
                        src={moment.video} 
                        muted={isMuted}
                        loop 
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                )
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
            user: "Piper",
            avatar: "P",
            image: Moment1,
            video: TravelerVideo3,
            title: "Volunteer Experience in Kandy",
        },
        {
            id: 2,
            user: "Jake",
            avatar: "J",
            image: Volunteer1,
            title: "My Journey in Ella",
        },
        {
            id: 3,
            user: "Chloe",
            avatar: "C",
            image: Volunteer2,
            title: "Teaching in Galle",
        },
        {
            id: 4,
            user: "Noah",
            avatar: "N",
            image: Volunteer3,
            title: "Wildlife Rescue Story",
        },
        {
            id: 5,
            user: "Mia",
            avatar: "M",
            image: Volunteer4,
            title: "Village Life Experience",
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
                <h2>Traveler Feedback Shorts</h2>
                <div className="who-nav-btns">
                    <button className="who-nav-btn" onClick={() => scroll('left')}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="who-nav-btn" onClick={() => scroll('right')}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div 
                className={`who-moments-grid scroll-row ${activeCardId !== null ? 'has-active-video' : ''}`} 
                ref={scrollRef}
                style={moments.length === 1 ? { justifyContent: 'center' } : {}}
            >                {moments.map((moment) => (
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
