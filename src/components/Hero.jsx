import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import img1 from '../assets/kevin-olson-ScBHbYokiQE-unsplash.jpg';
import img2 from '../assets/praveen-maleesha-gCjCxFUugoQ-unsplash.jpg';
import img3 from '../assets/matt-dany-FOYmbDX-sTs-unsplash.jpg';
import heroLocalVideo from '../assets/IMG_5769.MOV';


const mobileImages = [img1, img2, img3];

const offers = [
    {
        tag: "Special Offer",
        title: "Bring a Friend Discount",
        text: "Travel with a partner and get a special discount on your journey.",
        icon: "bi-gift-fill",
        link: "/packages"
    },
    {
        tag: "Transparent",
        title: "No Hidden Fees",
        text: "No registration fees or hidden charges. Pay only for your program.",
        icon: "bi-shield-check",
        link: "/packages"
    },
    {
        tag: "Group Booking",
        title: "Custom Group Plans",
        text: "Traveling with 3 or more people? Contact us for custom team rates.",
        icon: "bi-people-fill",
        link: "/contact"
    }
];

const Hero = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [activeVideo, setActiveVideo] = useState('youtube'); // 'youtube' or 'local'
    const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
    const [prevOfferIndex, setPrevOfferIndex] = useState(-1);
    const playerRef = React.useRef(null);
    const localVideoRef = React.useRef(null);
    const activeVideoRef = React.useRef(activeVideo);

    // Auto-rotate promotional offers every 5 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentOfferIndex((prev) => {
                setPrevOfferIndex(prev);
                return (prev + 1) % offers.length;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Sync activeVideo ref to avoid stale closures in the timer loop
    React.useEffect(() => {
        activeVideoRef.current = activeVideo;
    }, [activeVideo]);

    React.useEffect(() => {
        // Load YouTube API if not already loaded
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        const initPlayer = () => {
            new window.YT.Player('hero-youtube-player', {
                events: {
                    'onReady': (event) => {
                        playerRef.current = event.target;
                        if (isMuted) event.target.mute();
                        else event.target.unMute();
                        
                        if (activeVideoRef.current === 'youtube') {
                            event.target.playVideo();
                        } else {
                            event.target.pauseVideo();
                        }
                    },
                    'onStateChange': (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            if (activeVideoRef.current === 'youtube') {
                                event.target.seekTo(0);
                                event.target.playVideo();
                            }
                        }
                    }
                }
            });
        };

        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            window.onYouTubeIframeAPIReady = initPlayer;
        }

        // Precision timer loop to transition after 12 seconds of YouTube video playback
        const checkTime = setInterval(() => {
            if (activeVideoRef.current === 'youtube' && playerRef.current && playerRef.current.getCurrentTime) {
                const currentTime = playerRef.current.getCurrentTime();
                if (currentTime >= 12) {
                    playerRef.current.pauseVideo();
                    setActiveVideo('local');
                }
            }
        }, 250);

        return () => {
            clearInterval(checkTime);
        };
    }, []);

    // Sync mute state with player and local video
    React.useEffect(() => {
        if (playerRef.current) {
            if (isMuted) playerRef.current.mute();
            else playerRef.current.unMute();
        }
        if (localVideoRef.current) {
            localVideoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    // Handle local video playback based on active video state
    React.useEffect(() => {
        if (activeVideo === 'local') {
            if (localVideoRef.current) {
                localVideoRef.current.currentTime = 0;
                localVideoRef.current.play().catch(err => console.log("Local video play failed:", err));
            }
        } else {
            if (localVideoRef.current) {
                localVideoRef.current.pause();
            }
        }
    }, [activeVideo]);

    const handleLocalVideoEnded = () => {
        if (playerRef.current && playerRef.current.seekTo) {
            playerRef.current.seekTo(0);
            playerRef.current.playVideo();
        }
        setActiveVideo('youtube');
    };

    const handleLocalVideoTimeUpdate = (e) => {
        if (activeVideo === 'local' && e.target.currentTime >= 3) {
            if (localVideoRef.current) {
                localVideoRef.current.pause();
            }
            if (playerRef.current && playerRef.current.seekTo) {
                playerRef.current.seekTo(0);
                playerRef.current.playVideo();
            }
            setActiveVideo('youtube');
        }
    };

    const navigate = useNavigate();
    const location = useLocation();



    const handleSearchChange = (e) => {
        const val = e.target.value;
        setSearchTerm(val);
        
        if (val.length > 1) {
            const matches = tourPackages.filter(p => {
                const searchLower = val.toLowerCase();
                const inName = p.name.toLowerCase().includes(searchLower);
                const inDesc = p.description.toLowerCase().includes(searchLower);
                const inItinerary = p.itinerary.some(step => 
                    step.title.toLowerCase().includes(searchLower) || 
                    (step.activities && step.activities.some(act => act.toLowerCase().includes(searchLower)))
                );
                return inName || inDesc || inItinerary;
            }).slice(0, 5);
            setSuggestions(matches);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
        
        if (onSearch) onSearch(val);
    };

    const executeSearch = (term) => {
        if (location.pathname !== '/packages') {
            navigate(`/packages?search=${encodeURIComponent(term)}`);
        } else {
            if (onSearch) onSearch(term);
            const toursSection = document.getElementById('tours');
            if (toursSection) {
                toursSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const handleSuggestionClick = (name) => {
        setSearchTerm(name);
        setShowSuggestions(false);
        executeSearch(name);
    };

    const searchRef = React.useRef(null);

    // Close suggestions on click outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Mobile slideshow logic
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % mobileImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleSearchSubmit = () => {
        executeSearch(searchTerm);
        setShowSuggestions(false);
    };



    return (
        <section className="hero">
            <div className="hero-video-container">
                <iframe 
                    id="hero-youtube-player"
                    className={`hero-video ${activeVideo === 'youtube' ? 'active' : 'inactive'}`}
                    src={`https://www.youtube.com/embed/Rr6hg_2Imwc?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${window.location.origin}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Hero Background Video"
                ></iframe>
                <video
                    ref={localVideoRef}
                    className={`hero-video ${activeVideo === 'local' ? 'active' : 'inactive'}`}
                    src={heroLocalVideo}
                    muted={isMuted}
                    playsInline
                    onTimeUpdate={handleLocalVideoTimeUpdate}
                    onEnded={handleLocalVideoEnded}
                />
                <button 
                    className="video-mute-toggle" 
                    onClick={() => setIsMuted(!isMuted)}
                    title={isMuted ? "Unmute" : "Mute"}
                >
                    <i className={isMuted ? "bi bi-volume-mute" : "bi bi-volume-up"}></i>
                </button>
            </div>

            {/* Bring a Friend Promo Banner Overlaying Video */}
            <div className="hero-promo-badge" onClick={() => navigate(offers[currentOfferIndex].link)}>
                {offers.map((offer, index) => {
                    let className = "hero-promo-slide-wrapper";
                    if (index === currentOfferIndex) {
                        className += " active";
                    } else if (index === prevOfferIndex) {
                        className += " exit";
                    }

                    return (
                        <div key={index} className={className}>
                            <div className="hero-promo-icon">
                                <i className={`bi ${offer.icon}`}></i>
                            </div>
                            <div className="hero-promo-details">
                                <div className="hero-promo-tag">
                                    {offer.tag}
                                </div>
                                <h4>{offer.title}</h4>
                                <p>{offer.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mobile-hero-slideshow">
                {mobileImages.map((img, index) => (
                    <div 
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>
            
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <div className="reveal active">
                    <h1>Journey Through the <br/> Soul of the Island</h1>
                    <p>From misty emerald tea plantations to pristine azure shores, we curate authentic experiences that reveal the hidden magic of Sri Lanka.</p>
                    
                    <div className="hero-search-container" ref={searchRef}>
                        <div className="hero-search-bar">
                            <i className="bi bi-search"></i>
                            <input 
                                type="text" 
                                placeholder="Search for 'Sigiriya', '7 Days', 'Coastal Soul'..." 
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                            />
                            <button className="hero-search-btn" onClick={handleSearchSubmit}>
                                <span>Find Journey</span>
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>

                        {showSuggestions && suggestions.length > 0 && (
                            <div className="search-suggestions">
                                {suggestions.map((pkg) => (
                                    <div 
                                        key={pkg.id} 
                                        className="suggestion-item"
                                        onClick={() => handleSuggestionClick(pkg.name)}
                                    >
                                        <i className="bi bi-geo-alt"></i>
                                        <div className="suggestion-info">
                                            <span className="suggestion-title">{pkg.name}</span>
                                            <span className="suggestion-meta">{pkg.days} • {pkg.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="hero-mobile-actions">
                        <Link to="/packages" className="btn-modern btn-solid-green">View Our Packages</Link>
                    </div>
                </div>
            </div>

            <div className="hero-bottom-icons">
                <div className="hero-icon-circle" title="Volunteer Experiences">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <div className="hero-icon-circle" title="Local Experiences">
                    <i className="fa-solid fa-compass"></i>
                </div>
                <div className="hero-icon-circle" title="Pristine Beaches">
                    <i className="fa-solid fa-umbrella-beach"></i>
                </div>
                <div className="hero-icon-circle" title="Memorable Captures">
                    <i className="fa-solid fa-camera"></i>
                </div>
            </div>
        </section>
    );
};

export default Hero;
