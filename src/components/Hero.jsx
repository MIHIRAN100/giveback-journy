import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import img1 from '../assets/kevin-olson-ScBHbYokiQE-unsplash.jpg';
import img2 from '../assets/praveen-maleesha-gCjCxFUugoQ-unsplash.jpg';
import img3 from '../assets/matt-dany-FOYmbDX-sTs-unsplash.jpg';


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
    const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
    const [prevOfferIndex, setPrevOfferIndex] = useState(-1);
    const [activeVideo, setActiveVideo] = useState(0);
    const player1Ref = React.useRef(null);
    const player2Ref = React.useRef(null);

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

    // Rotate between the first and second background videos every 1 minute
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveVideo((prev) => (prev === 0 ? 1 : 0));
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        // Load YouTube API if not already loaded
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        const initPlayer = () => {
            new window.YT.Player('hero-youtube-player-1', {
                events: {
                    'onReady': (event) => {
                        player1Ref.current = event.target;
                        if (isMuted) event.target.mute();
                        else event.target.unMute();
                        event.target.playVideo();
                    }
                }
            });
            new window.YT.Player('hero-youtube-player-2', {
                events: {
                    'onReady': (event) => {
                        player2Ref.current = event.target;
                        if (isMuted) event.target.mute();
                        else event.target.unMute();
                        // Pause initially if not active
                        if (activeVideo === 1) {
                            event.target.playVideo();
                        } else {
                            event.target.pauseVideo();
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
    }, []);

    // Sync mute state with players
    React.useEffect(() => {
        if (player1Ref.current) {
            if (isMuted) player1Ref.current.mute();
            else player1Ref.current.unMute();
        }
        if (player2Ref.current) {
            if (isMuted) player2Ref.current.mute();
            else player2Ref.current.unMute();
        }
    }, [isMuted]);

    // Handle play/pause transitions and reset to start when active video changes
    React.useEffect(() => {
        if (activeVideo === 1) {
            if (player1Ref.current) {
                player1Ref.current.pauseVideo();
            }
            if (player2Ref.current) {
                try {
                    player2Ref.current.seekTo(0);
                } catch (e) {
                    console.error("Error seeking video 2:", e);
                }
                player2Ref.current.playVideo();
            }
        } else {
            if (player2Ref.current) {
                player2Ref.current.pauseVideo();
            }
            if (player1Ref.current) {
                try {
                    player1Ref.current.seekTo(0);
                } catch (e) {
                    console.error("Error seeking video 1:", e);
                }
                player1Ref.current.playVideo();
            }
        }
    }, [activeVideo]);

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
                    id="hero-youtube-player-1"
                    className={`hero-video ${activeVideo === 0 ? 'active' : 'inactive'}`}
                    src={`https://www.youtube.com/embed/OxFOuZCokLk?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${window.location.origin}&playlist=OxFOuZCokLk&loop=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Hero Background Video 1"
                ></iframe>
                <iframe 
                    id="hero-youtube-player-2"
                    className={`hero-video ${activeVideo === 1 ? 'active' : 'inactive'}`}
                    src={`https://www.youtube.com/embed/1ueifvk7oBU?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${window.location.origin}&playlist=1ueifvk7oBU&loop=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Hero Background Video 2"
                ></iframe>
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
