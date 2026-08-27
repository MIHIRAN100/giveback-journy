import React, { useRef } from 'react';
import Moment1 from '../assets/moments/traveler_moment_1_1778416676983.png';
import TravelerVideo3 from '../assets/feedback clip/WhatsApp Video 2026-05-23 at 20.09.28.mp4';
import TravelerVideo4 from '../assets/feedback clip/WhatsApp Video 2026-05-23 at 20.17.18.mp4';
import TravelerVideo5 from '../assets/feedback clip/WhatsApp Video 2026-05-30 at 11.02.50.mp4';
import TravelerVideo6 from '../assets/feedback clip/WhatsApp Video 2026-05-31 at 13.18.52.mp4';
import TravelerVideo7 from '../assets/feedback clip/WhatsApp Video 2026-05-31 at 13.37.40.mp4';
import TravelerVideoSam from '../assets/feedback clip/WhatsApp Video 2026-07-02 at 11.01.07.mp4';
import TravelerVideoAlex from '../assets/feedback clip/WhatsApp Video 2026-07-02 at 11.12.16.mp4';
import Volunteer1 from '../assets/volunteer_1.png';
import Volunteer2 from '../assets/volunteer_2.png';
import Volunteer3 from '../assets/volunteer_3.png';
import Volunteer4 from '../assets/volunteer_4.png';
import NewImg1 from '../assets/teaching volunteers/IMG-20241203-WA0041.jpg';
import NewImg2 from '../assets/volunteer-wildlife.png';
import NewImg3 from '../assets/culture_experience_sri_lanka_volunteer_1778936526264.png';
import NewImg4 from '../assets/yoga_meditation_temple_sri_lanka_1778936481374.png';
import gbRoundLogo from '../assets/gb_round_logo.png';

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
        <div key={moment.id} className={`moment-card shorts-card ${isPlaying ? 'is-playing' : ''}`} onClick={togglePlay}>
            {/* Top Large Bold Centered Title */}
            <div className="shorts-title-overlay">
                {moment.overlayTitle || moment.title}
            </div>

            {/* Mute button overlay */}
            {moment.video && !moment.disablePlay && (
                <div className="mute-button-overlay" onClick={toggleMute}>
                    <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
                </div>
            )}

            {/* Center Circular Play Button */}
            {!moment.disablePlay && (
                <div className="shorts-play-button" onClick={togglePlay}>
                    <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                </div>
            )}

            {/* Video / Photo background */}
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
            
            {/* Bottom Centered Social Handle */}
            <div className="shorts-handle-overlay">
                {moment.handle}
            </div>
        </div>
    );
};

const TravelerMoments = () => {
    const scrollRef = useRef(null);
    const [activeCardId, setActiveCardId] = React.useState(null);
    const [filterOpen, setFilterOpen] = React.useState(false);
    const [activeFilter, setActiveFilter] = React.useState(null);

    const moments = [
        {
            id: 1,
            user: "Natasha",
            handle: "@NELLYAROUNDTHEWORLD",
            avatar: "fa-solid fa-hands-holding-child",
            image: Moment1,
            video: TravelerVideo3,
            title: "Volunteer Experience in Kandy",
            overlayTitle: "GIVING BACK TO GAIN SO MUCH MORE",
            description: "Giving back to gain so much more. The local children and warm community in Kandy captured my heart completely.",
            rating: "5.0"
        },
        {
            id: 2,
            user: "Piper",
            handle: "@JIMMY__OUTDOORS",
            avatar: "fa-solid fa-hand-holding-heart",
            image: Volunteer1,
            video: TravelerVideo4,
            title: "Special Need Care Volunteer",
            overlayTitle: "PROTECTING THE SMALLEST CREATURES",
            description: "Every child deserves a chance. Working at the special needs center was the most fulfilling month of my life.",
            rating: "5.0"
        },
        {
            id: 3,
            user: "Nick",
            handle: "@ARIELBREE_UNDERTHESEA",
            avatar: "fa-solid fa-chalkboard-user",
            image: Volunteer2,
            video: TravelerVideo5,
            title: "Teaching in Kandy",
            overlayTitle: "SAVING OUR OCEANS",
            description: "Teaching with heart! Sharing English and learning so much from these inspiring, bright Sri Lankan students.",
            rating: "4.9"
        },
        {
            id: 4,
            user: "Lara",
            handle: "@ALEXANDRA.LAFOREST",
            avatar: "fa-solid fa-hands-praying",
            image: Volunteer3,
            video: TravelerVideo6,
            title: "Culture Immersion in Hikkaduwa",
            overlayTitle: "TRAVELING WITH PURPOSE",
            description: "Experiencing true Sri Lankan culture. From peaceful temple morning rituals to cooking traditional meals with local families.",
            rating: "5.0"
        },
        {
            id: 5,
            user: "Mia",
            handle: "@MIA_AROUNDTHEWORLD",
            avatar: "fa-solid fa-house-chimney",
            image: Volunteer4,
            video: TravelerVideo7,
            disablePlay: true,
            title: "Village Life Experience",
            overlayTitle: "EMBRACING AUTHENTIC VILLAGE LIFE",
            description: "Embracing authentic village life. Waking up to mountain views and genuine, heartfelt local hospitality every single day.",
            rating: "5.0"
        },
        {
            id: 6,
            user: "Emma & Annie",
            handle: "@EMMA_AND_ANNIE",
            avatar: "fa-solid fa-users",
            image: NewImg1,
            video: TravelerVideoSam,
            title: "Special Needs Care",
            overlayTitle: "SPECIAL NEEDS CARE SUPPORT",
            description: "Special needs support brought us so close to the community. An unforgettable bond with the children and local staff!",
            rating: "5.0"
        },
        {
            id: 7,
            user: "Alex",
            handle: "@ALEX_TEACHES",
            avatar: "fa-solid fa-chalkboard-user",
            image: NewImg2,
            video: TravelerVideoAlex,
            title: "Teaching Volunteers",
            overlayTitle: "TEACHING WITH HEART",
            description: "Teaching volunteers making a real impact. An incredible experience that changed my perspective on life forever.",
            rating: "4.9"
        }
    ];

    const uniqueProjects = Array.from(new Set(moments.map(m => m.title)));
    const filteredMoments = activeFilter ? moments.filter(m => m.title === activeFilter) : moments;

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
                    <h2>Volunteer Feedback Shorts</h2>
                    <p style={{ marginTop: '10px', color: '#666', fontSize: '1.05rem', maxWidth: '600px', lineHeight: '1.6' }}>
                        Watch <span style={{ color: '#3B7FBA', fontWeight: 700 }}>real moments</span> captured by our travelers. Discover authentic experiences and unforgettable adventures in Sri Lanka.
                    </p>
                </div>
                <div style={{ alignSelf: 'center', position: 'relative' }}>
                    <button 
                        className="btn-modern btn-white" 
                        onClick={() => setFilterOpen(!filterOpen)}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '500px', border: `1px solid ${activeFilter ? '#3B7FBA' : '#e5e7eb'}`, cursor: 'pointer', background: activeFilter ? '#f0f7ff' : '#fff', color: activeFilter ? '#3B7FBA' : '#111', fontWeight: '600', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                    >
                        <i className="fa-solid fa-filter" style={{ color: '#3B7FBA' }}></i> 
                        {activeFilter ? activeFilter : 'Filter Projects'}
                    </button>

                    {filterOpen && (
                        <div style={{ position: 'absolute', top: '110%', right: 0, background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 100, width: '240px', maxHeight: '300px', overflowY: 'auto', border: '1px solid #e5e7eb' }}>
                            <div 
                                style={{ padding: '12px 20px', cursor: 'pointer', borderBottom: '1px solid #f3f4f6', fontWeight: activeFilter === null ? '700' : '500', color: activeFilter === null ? 'var(--primary-green)' : '#444' }}
                                onClick={() => { setActiveFilter(null); setFilterOpen(false); }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                            >
                                All Projects
                            </div>
                            {uniqueProjects.map((project, idx) => (
                                <div 
                                    key={project}
                                    style={{ padding: '12px 20px', cursor: 'pointer', borderBottom: idx === uniqueProjects.length - 1 ? 'none' : '1px solid #f3f4f6', fontWeight: activeFilter === project ? '700' : '500', color: activeFilter === project ? 'var(--primary-green)' : '#444' }}
                                    onClick={() => { setActiveFilter(project); setFilterOpen(false); }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                >
                                    {project}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <button 
                    className="who-nav-btn" 
                    onClick={() => scroll('left')}
                    style={{ flexShrink: 0, boxShadow: '0 4px 15px rgba(0,0,0,0.15)', backgroundColor: '#1a2332', color: '#ffffff', zIndex: 10 }}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <div 
                    className={`who-moments-grid scroll-row ${activeCardId !== null ? 'has-active-video' : ''}`} 
                    ref={scrollRef}
                    style={{ flex: 1, minWidth: 0, ...(filteredMoments.length === 1 ? { justifyContent: 'center' } : {}) }}
                >                {filteredMoments.map((moment) => (
                        <MomentCard 
                            key={moment.id} 
                            moment={moment} 
                            activeCardId={activeCardId}
                            setActiveCardId={setActiveCardId}
                        />
                    ))}
                </div>

                <button 
                    className="who-nav-btn" 
                    onClick={() => scroll('right')}
                    style={{ flexShrink: 0, boxShadow: '0 4px 15px rgba(0,0,0,0.15)', backgroundColor: '#1a2332', color: '#ffffff', zIndex: 10 }}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </section>
    );
};

export default TravelerMoments;
