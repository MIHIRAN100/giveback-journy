import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { tourPackages } from '../data/tours';
import img1 from '../assets/kevin-olson-ScBHbYokiQE-unsplash.jpg';
import img2 from '../assets/praveen-maleesha-gCjCxFUugoQ-unsplash.jpg';
import img3 from '../assets/matt-dany-FOYmbDX-sTs-unsplash.jpg';

import heroVideo from '../assets/SRI LANKA - Pearl Of The Indian Ocean  Cinematic Travel Film - JRDY Films (720p, h264).mp4';

const mobileImages = [img1, img2, img3];

const Hero = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMuted, setIsMuted] = useState(true);

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
                    className="hero-video"
                    src={`https://www.youtube.com/embed/TlypXY8OOIQ?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=TlypXY8OOIQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
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
