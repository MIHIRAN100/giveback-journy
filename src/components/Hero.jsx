import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import img1 from '../assets/kevin-olson-ScBHbYokiQE-unsplash.jpg';
import img2 from '../assets/praveen-maleesha-gCjCxFUugoQ-unsplash.jpg';
import img3 from '../assets/matt-dany-FOYmbDX-sTs-unsplash.jpg';
import HeroPromoBadge from './HeroPromoBadge';
import heroLogo from '../assets/WhatsApp_Image_2026-07-27_at_11.04.19-removebg-preview.png';


const mobileImages = tourPackages.map(pkg => ({
    image: pkg.image,
    title: pkg.name,
    snippet: pkg.description.split('\n')[0]
}));


const supportTexts = [
    { icon: "bi-chat-square-text-fill", bold: "24/7 customer support", text: "to help with bookings and on-tour support" },
    { icon: "bi-shield-check", bold: "Guaranteed departures", text: "with 100% transparent pricing and zero hidden fees" },
    { icon: "bi-star-fill", bold: "4.9/5 rated journeys", text: "curated for solo travelers, couples & small groups" },
    { icon: "bi-heart-fill", bold: "Travel with Purpose", text: "incorporating authentic local community & wildlife programs" }
];

const Hero = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [currentSupportIndex, setCurrentSupportIndex] = useState(0);
    const [tickerStatus, setTickerStatus] = useState('idle');
    const playerRef = React.useRef(null);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTickerStatus('exiting');
            setTimeout(() => {
                setCurrentSupportIndex((prev) => (prev + 1) % supportTexts.length);
                setTickerStatus('entering');
                setTimeout(() => {
                    setTickerStatus('idle');
                }, 40);
            }, 350);
        }, 4000);
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
            new window.YT.Player('hero-youtube-player', {
                events: {
                    'onReady': (event) => {
                        playerRef.current = event.target;
                        if (isMuted) event.target.mute();
                        else event.target.unMute();
                        event.target.playVideo();
                    },
                    'onStateChange': (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            event.target.playVideo();
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

    // Sync mute state with player
    React.useEffect(() => {
        if (playerRef.current) {
            if (isMuted) playerRef.current.mute();
            else playerRef.current.unMute();
        }
    }, [isMuted]);

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
                const inItinerary = p.itinerary && p.itinerary.some(step => 
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
        <div className="hero-container-outer">
            <section className="hero">
                <div className="hero-video-container">
                <iframe 
                    id="hero-youtube-player"
                    className="hero-video active"
                    src={`https://www.youtube.com/embed/S4RR9WHn5Ik?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${window.location.origin}&playlist=S4RR9WHn5Ik&loop=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Hero Background Video"
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
            <HeroPromoBadge />

            <div className="mobile-hero-slideshow">
                {mobileImages.map((slide, index) => {
                    const isPrev = index === (currentSlide - 1 + mobileImages.length) % mobileImages.length;
                    return (
                        <div 
                            key={index}
                            className={`hero-slide ${index === currentSlide ? 'active' : ''} ${isPrev ? 'prev' : ''}`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '55%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: '20px 20px 45px',
                            color: 'white',
                            textAlign: 'left'
                        }}>
                            <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.3, textShadow: '0 1px 3px rgba(0,0,0,0.9)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{slide.snippet}</p>
                        </div>
                    </div>
                    );
                })}
            </div>
            
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <div className="reveal active">
                    <h1>Journey Through the <br/> Soul of the Island</h1>
                    <p>From misty emerald tea plantations to pristine azure shores, we curate authentic experiences that reveal the hidden magic of Sri Lanka.</p>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '-15px', marginBottom: '25px' }} className="hero-travelers-stats">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://i.pravatar.cc/150?img=47" alt="Traveler" style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid white', objectFit: 'cover', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }} />
                            <img src="https://i.pravatar.cc/150?img=11" alt="Traveler" style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid white', objectFit: 'cover', marginLeft: '-9px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }} />
                            <img src="https://i.pravatar.cc/150?img=32" alt="Traveler" style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid white', objectFit: 'cover', marginLeft: '-9px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }} />
                        </div>
                        <span 
                            onClick={() => document.getElementById('feedback-shorts')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            style={{ fontSize: '0.8rem', fontWeight: '400', color: 'rgba(255,255,255,0.95)', textShadow: '0 2px 4px rgba(0,0,0,0.6)', textDecoration: 'underline', textUnderlineOffset: '3px', cursor: 'pointer', transition: 'color 0.2s ease' }}
                            onMouseOver={(e) => e.target.style.color = '#fff'}
                            onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.95)'}
                        >
                            100+ confirmed travelers around the world! &gt;
                        </span>
                    </div>
                    
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
                            <button className="hero-search-btn" onClick={(e) => {
                                // Ripple effect
                                const btn = e.currentTarget;
                                const ripple = document.createElement('span');
                                ripple.className = 'btn-ripple';
                                const rect = btn.getBoundingClientRect();
                                ripple.style.left = (e.clientX - rect.left) + 'px';
                                ripple.style.top = (e.clientY - rect.top) + 'px';
                                btn.appendChild(ripple);
                                setTimeout(() => ripple.remove(), 600);
                                handleSearchSubmit();
                            }}>
                                <span className="btn-shimmer"></span>
                                <span className="btn-text">Find Journey</span>
                                <i className="bi bi-arrow-right btn-arrow"></i>
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

                    <div className="hero-support-ticker">
                        <div className={`support-ticker-item ${tickerStatus}`}>
                            <i className={`bi ${supportTexts[currentSupportIndex].icon}`}></i>
                            <span>
                                <strong>{supportTexts[currentSupportIndex].bold}</strong> {supportTexts[currentSupportIndex].text}
                            </span>
                        </div>
                    </div>

                    <div className="hero-mobile-actions">
                        <Link to="/packages" className="btn-modern btn-solid-green">View Our Packages</Link>
                    </div>

                    <div className="mobile-slideshow-dots" style={{
                        display: 'none',
                        justifyContent: 'center',
                        gap: '8px',
                        marginTop: '25px',
                        zIndex: 100,
                        position: 'relative'
                    }}>
                        {mobileImages.map((_, idx) => (
                            <div 
                                key={idx} 
                                onClick={() => setCurrentSlide(idx)}
                                style={{
                                    width: idx === currentSlide ? '24px' : '8px',
                                    height: '8px',
                                    borderRadius: '4px',
                                    background: idx === currentSlide ? 'var(--primary-green)' : 'rgba(255,255,255,0.4)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                            />
                        ))}
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
    </div>
    );
};

export default Hero;
