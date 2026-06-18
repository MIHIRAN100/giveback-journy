import React, { useRef } from 'react';
import Moment1 from '../assets/moments/traveler_moment_1_1778416676983.png';
import TravelerVideo3 from '../assets/feedback clip/WhatsApp Video 2026-05-23 at 20.09.28.mp4';
import TravelerVideo4 from '../assets/feedback clip/WhatsApp Video 2026-05-23 at 20.17.18.mp4';
import TravelerVideo5 from '../assets/feedback clip/WhatsApp Video 2026-05-30 at 11.02.50.mp4';
import TravelerVideo6 from '../assets/feedback clip/WhatsApp Video 2026-05-31 at 13.18.52.mp4';
import TravelerVideo7 from '../assets/feedback clip/WhatsApp Video 2026-05-31 at 13.37.40.mp4';
import Volunteer1 from '../assets/volunteer_1.png';
import Volunteer2 from '../assets/volunteer_2.png';
import Volunteer3 from '../assets/volunteer_3.png';
import Volunteer4 from '../assets/volunteer_4.png';
import NewImg1 from '../assets/teaching volunteers/IMG-20241203-WA0041.jpg';
import NewImg2 from '../assets/volunteer-wildlife.png';
import NewImg3 from '../assets/culture_experience_sri_lanka_volunteer_1778936526264.png';
import NewImg4 from '../assets/yoga_meditation_temple_sri_lanka_1778936481374.png';

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
                        <i className={moment.avatar} style={{ fontSize: '0.85rem', color: 'white' }}></i>
                    )}
                </div>
                <span className="moment-username">{moment.user}</span>
            </div>
            
            <div 
                className="play-button-overlay" 
                onClick={(e) => {
                    if (!moment.disablePlay) togglePlay(e);
                }}
                style={moment.disablePlay ? { cursor: 'not-allowed', opacity: 0.7 } : {}}
            >
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </div>

            {moment.video && !moment.disablePlay && (
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
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 90%' }}
                    />
                )
            ) : (
                <img src={moment.image} alt={moment.title} />
            )}
            
            {moment.overlayTitle && (
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 3,
                    color: 'white',
                    fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    lineHeight: 1.15,
                    letterSpacing: '0.02em',
                    padding: '0 20px',
                    width: '85%',
                    textShadow: '0 2px 15px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)',
                    pointerEvents: 'none',
                    transition: 'opacity 0.4s ease',
                    opacity: isPlaying ? 0 : 1,
                }}>
                    {moment.overlayTitle}
                </div>
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
            user: "Natasha",
            avatar: "fa-solid fa-hands-holding-child",
            image: Moment1,
            video: TravelerVideo3,
            title: "Volunteer Experience in Kandy",
            overlayTitle: "GIVING BACK TO GAIN SO MUCH MORE",
        },
        {
            id: 2,
            user: "Piper",
            avatar: "fa-solid fa-hand-holding-heart",
            image: Volunteer1,
            video: TravelerVideo4,
            title: "Special Need Care Volunteer",
            overlayTitle: "EVERY CHILD DESERVES A CHANCE",
        },
        {
            id: 3,
            user: "Nick",
            avatar: "fa-solid fa-chalkboard-user",
            image: Volunteer2,
            video: TravelerVideo5,
            title: "Teaching in Kandy",
            overlayTitle: "TEACHING WITH HEART",
        },
        {
            id: 4,
            user: "Lara",
            avatar: "fa-solid fa-hands-praying",
            image: Volunteer3,
            video: TravelerVideo6,
            title: "Culture Immersion in Hikkaduwa",
            overlayTitle: "EXPERIENCING TRUE SRI LANKAN CULTURE",
        },
        {
            id: 5,
            user: "Mia",
            avatar: "fa-solid fa-house-chimney",
            image: Volunteer4,
            video: TravelerVideo7,
            disablePlay: true,
            title: "Village Life Experience",
            overlayTitle: "EMBRACING AUTHENTIC VILLAGE LIFE",
        },
        {
            id: 6,
            user: "Sam",
            avatar: "fa-solid fa-users",
            image: NewImg1,
            title: "Community Outreach",
            overlayTitle: "SUPPORTING LOCAL COMMUNITIES",
        },
        {
            id: 7,
            user: "Alex",
            avatar: "fa-solid fa-leaf",
            image: NewImg2,
            title: "Wildlife Conservation",
            overlayTitle: "PRESERVING NATURE'S BEAUTY",
        },
        {
            id: 8,
            user: "Emma",
            avatar: "fa-solid fa-masks-theater",
            image: NewImg3,
            title: "Cultural Exchange",
            overlayTitle: "LEARNING ANCIENT TRADITIONS",
        },
        {
            id: 9,
            user: "David",
            avatar: "fa-solid fa-om",
            image: NewImg4,
            title: "Yoga & Meditation",
            overlayTitle: "FINDING INNER PEACE",
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
        <section id="feedback-shorts" className="who-we-are-section">
            <div className="who-we-are-header" style={{ alignItems: 'flex-start' }}>
                <div>
                    <h2>Traveler Feedback Shorts</h2>
                    <p style={{ marginTop: '10px', color: '#666', fontSize: '1.05rem', maxWidth: '600px', lineHeight: '1.6' }}>
                        Watch <span style={{ color: 'var(--primary-green)', fontWeight: 600 }}>real moments</span> captured by our travelers. Discover authentic experiences and unforgettable adventures in Sri Lanka.
                    </p>
                </div>
                <div className="who-nav-btns" style={{ alignSelf: 'center' }}>
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
