import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import heritageCover from '../assets/brian-kyed-8NpelZe-EzM-unsplash.jpg';
import anuradhapuraImg from '../assets/ivani-de-silva-7SPIdNscD4I-unsplash.jpg';
import polonnaruwaImg from '../assets/filiz-elaerts-I9N8rE3tzq8-unsplash.jpg';
import sigiriyaImg from '../assets/jannes-jacobs-8x3mdrB3x5A-unsplash.jpg';
import kandyImg from '../assets/chathura-anuradha-subasinghe-isdvqf04MDk-unsplash.jpg';
import dambullaImg from '../assets/agnieszka-stankiewicz-OMgi4DfiO3c-unsplash.jpg';
import galleImg from '../assets/matt-dany-FOYmbDX-sTs-unsplash.jpg';

const HeritageSection = ({ title, subtitle, description, sites }) => (
    <section className="heritage-site-group section">
        <div className="section-container">
            <ScrollReveal>
                <div className="group-header">
                    <span className="section-tag">{subtitle}</span>
                    <h2 className="group-title">{title}</h2>
                    <p className="group-desc">{description}</p>
                </div>
            </ScrollReveal>

            <div className="heritage-detailed-grid">
                {sites.map((site, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                        <div className="detailed-site-card">
                            <div className="site-image-wrapper">
                                <img src={site.image} alt={site.title} />
                                <div className="site-meta">
                                    <span>{site.period}</span>
                                </div>
                            </div>
                            <div className="site-info">
                                <h3>{site.title}</h3>
                                <p className="site-long-desc">{site.description}</p>
                                <div className="site-highlights">
                                    <h4>Don't Miss:</h4>
                                    <ul>
                                        {site.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </section>
);

const SriLanka = () => {
    const ancientCities = [
        {
            title: "Anuradhapura: The Sacred Metropolis",
            period: "3rd Century BC",
            image: anuradhapuraImg,
            description: "The first capital of Sri Lanka and one of the oldest continuously inhabited cities in the world. It was the center of Theravada Buddhism for many centuries and remains a massive complex of soaring stupas and ancient ruins.",
            highlights: ["Ruwanwelisaya (The Great Stupa)", "The Sacred Jaya Sri Maha Bodhi Tree", "Isurumuniya Rock Temple"]
        },
        {
            title: "Polonnaruwa: The Medieval Kingdom",
            period: "11th Century AD",
            image: polonnaruwaImg,
            description: "After the fall of Anuradhapura, Polonnaruwa became the second capital. It is famous for its well-preserved urban layout and the incredible stone carvings of the Gal Vihara.",
            highlights: ["Gal Vihara (Four Giant Buddha Statues)", "The Royal Palace of King Parakramabahu", "The Quadrangle (Dalada Maluva)"]
        },
        {
            title: "Sigiriya: The Citadel in the Sky",
            period: "5th Century AD",
            image: sigiriyaImg,
            description: "Built by King Kasyapa as a fortress-palace on top of a 200-meter high rock. It features sophisticated urban planning, stunning frescoes of 'heavenly maidens', and the massive Lion's Paws guarding the final ascent.",
            highlights: ["The Mirror Wall with ancient graffiti", "The Water Gardens", "Cobra Hood Cave"]
        }
    ];

    const centralHeritage = [
        {
            title: "Kandy: The Last Kingdom",
            period: "16th Century AD",
            image: kandyImg,
            description: "The cultural capital of Sri Lanka, nestled among misty hills. It houses the nation's most precious relic, a tooth of the Lord Buddha, within a magnificent golden-roofed temple.",
            highlights: ["Temple of the Sacred Tooth Relic", "Peradeniya Royal Botanical Gardens", "Kandyan Cultural Dance Performance"]
        },
        {
            title: "Dambulla: The Golden Cave Temple",
            period: "1st Century BC",
            image: dambullaImg,
            description: "A spectacular cave monastery that has been a sacred pilgrimage site for 22 centuries. Five separate caves contain about 150 statues and some of the most vibrant Buddhist mural art in the world.",
            highlights: ["The Cave of the Divine King", "The Cave of the Great Kings", "The Golden Buddha Statue"]
        }
    ];

    const southernHeritage = [
        {
            title: "Galle Fort: Colonial Grandeur",
            period: "16th Century AD",
            image: galleImg,
            description: "Originally built by the Portuguese and later fortified by the Dutch, the Galle Fort is a living heritage site. Its narrow cobblestone streets are lined with Dutch-era villas, museums, and boutique cafes.",
            highlights: ["The Galle Lighthouse", "Dutch Reformed Church", "The Old Dutch Hospital"]
        }
    ];

    return (
        <div className="heritage-page">
            {/* Descriptive Hero */}
            <section className="heritage-hero" style={{ backgroundImage: `url(${heritageCover})` }}>
                <div className="heritage-hero-overlay"></div>
                <div className="heritage-hero-content">
                    <ScrollReveal>
                        <span className="about-tag" style={{borderColor: 'white', color: 'white'}}>The Ultimate Guide</span>
                        <h1>Unveiling the Wonders <br/> of Sri Lanka</h1>
                        <p>A comprehensive journey through the most iconic historical, spiritual, and colonial landmarks of the Pearl of the Indian Ocean.</p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Ancient Cities Section */}
            <HeritageSection 
                title="The Cultural Triangle"
                subtitle="The Heart of Ancient Ceylon"
                description="The epicenter of Sri Lankan civilization where great kings ruled for over 1500 years. This region is home to three of the world's most impressive archaeological sites."
                sites={ancientCities}
            />

            {/* Central Highlands Section */}
            <HeritageSection 
                title="Sacred Peaks & Hill Capitals"
                subtitle="Spiritual Heritage"
                description="Venture into the misty mountains where spirituality meets nature. These sites represent the later periods of the Sri Lankan monarchy and the deep-rooted Buddhist traditions."
                sites={centralHeritage}
            />

            {/* Colonial Legacy Section */}
            <HeritageSection 
                title="The Southern Fortress"
                subtitle="European Influence"
                description="Discover the architectural fusion created by centuries of colonial interaction along the strategic southern coastline."
                sites={southernHeritage}
            />

            {/* Travel Tips Section */}
            <section className="heritage-tips section">
                <div className="section-container">
                    <ScrollReveal>
                        <div className="tips-box">
                            <h2>Traveler's Guide to Heritage Sites</h2>
                            <div className="tips-grid">
                                <div className="tip-item">
                                    <i className="fa-solid fa-shirt"></i>
                                    <h4>Dress Code</h4>
                                    <p>When visiting temples, ensure your shoulders and knees are covered. White clothing is preferred as a sign of respect.</p>
                                </div>
                                <div className="tip-item">
                                    <i className="fa-solid fa-clock"></i>
                                    <h4>Best Time to Visit</h4>
                                    <p>Most sites are best explored in the early morning (6 AM - 9 AM) to avoid the heat and the crowds.</p>
                                </div>
                                <div className="tip-item">
                                    <i className="fa-solid fa-ticket"></i>
                                    <h4>Entry Permits</h4>
                                    <p>Cultural Triangle sites usually require separate tickets. Consider the 'Round Ticket' for better value if visiting multiple sites.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Heritage CTA */}
            <section className="heritage-cta">
                <div className="cta-overlay"></div>
                <div className="cta-content">
                    <ScrollReveal>
                        <h2>Book Your Heritage Journey</h2>
                        <p>Let our expert guides take you through the hidden stories of these ancient wonders.</p>
                        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px'}}>
                            <a href="/packages" className="btn-modern btn-solid-green">View Heritage Tours</a>
                            <a href="/contact" className="btn-modern btn-white-outline">Request Custom Itinerary</a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default SriLanka;
