import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import HeroImg from '../assets/tom-paisley-v2zEiziFb44-unsplash.jpg';

const ExclusiveJourneys = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="exclusive-joy-page">
            {/* Centered Hero with Decorative Shapes */}
            <section className="joy-hero" style={{ backgroundImage: `url("${HeroImg}")` }}>
                <div className="joy-hero-overlay"></div>
                
                {/* Decorative Elements - Green Themed */}
                <div className="joy-shape joy-shape-green-light"></div>
                <div className="joy-shape joy-shape-green-dark"></div>
                <div className="joy-squiggle">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80C33.4315 80 20 66.5685 20 50Z" stroke="#1DB954" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 20"/>
                        <path d="M50 10C50 10 70 30 50 50C30 70 50 90 50 90" stroke="#1DB954" strokeWidth="6" strokeLinecap="round"/>
                    </svg>
                </div>

                <div className="joy-hero-content">
                    <ScrollReveal>
                        <h1>Looking for a budget friendly<br/>way to travel?</h1>
                        <p>You're in the right place</p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 1: What is Give Back Journey? */}
            <section className="joy-about-section">
                <div className="joy-container">
                    <ScrollReveal>
                        <h2 className="joy-about-title">What is Give Back Journey?</h2>
                        <h3 className="joy-about-subtitle">
                            Give Back Journey is where affordable adventure meets meaningful impact.
                        </h3>
                        <div className="joy-about-text">
                            <p>
                                Looking for a budget friendly way to explore Sri Lanka? Give Back Journey is more than just a travel platform; it's a bridge between passionate travelers and local communities. We specialize in combining low-cost, authentic island experiences with unique volunteering opportunities. We believe that everyone should have the chance to see the world's beauty while contributing to its preservation, which is why our journeys are designed to be as impactful as they are affordable. From the misty highlands to the golden southern shores, our mission is to ensure that your adventure leaves a lasting, positive legacy on the hearts of the people you meet and the land you explore.
                            </p>
                            <p>
                                Our approach is rooted in transparency and local expertise. By working directly with grassroots organizations and local families, we cut out the middleman, ensuring that more of your travel funds reach the people who need it most. This allows us to provide you with an unfiltered, raw look at the island's culture while maintaining the high safety and comfort standards that every traveler deserves.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 2: What we do - with dashed background */}
            <section className="what-we-do-section">
                <div className="dashed-bg"></div>
                <div className="joy-container">
                    <ScrollReveal>
                        <h2 className="joy-about-title">What we do</h2>
                        <h3 className="joy-about-subtitle" style={{ maxWidth: '700px', margin: '0 auto 25px' }}>
                            We bring the world closer together by making impactful travel accessible to everyone.
                        </h3>
                        <div className="joy-about-text">
                            <p>
                                We bridge the gap between global curiosity and local necessity by curating travel experiences that are intrinsically linked to social and environmental responsibility. We prove that you don't need a massive budget to make a tangible difference in the world. Whether it's assisting teachers in rural village schools, participating in reforestation efforts in the rainforests, or supporting sustainable farming initiatives, our journeys ensure that your presence in Sri Lanka directly translates into resources and support for the growth and well being of local communities.
                            </p>
                            <p>
                                Our work goes far beyond simply organizing logistics; we are dedicated to fostering deep, long term relationships between our travelers and our project partners on the ground. We don't believe in "voluntourism" that provides only surface level interaction. Instead, we facilitate immersion that allows for genuine cultural exchange and skill sharing. Many of our guests find themselves returning year after year, not just as tourists, but as mentors, friends, and active supporters, creating a powerful global network of "Givebackers" who are united by their love for the island and their commitment to its future.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section: Important Notice */}
            <section className="joy-notice-section">
                <div className="joy-container-narrow">
                    <ScrollReveal>
                        <div className="notice-header-simple">
                            <span className="notice-badge-simple">Important Notice</span>
                            <h2 className="notice-main-title">Expectations & Travel Philosophy</h2>
                            <p className="notice-lead">
                                Please read this carefully before deciding to join our journeys. We believe in transparency and aligning expectations for a truly life changing experience.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="notice-content-simple">
                        <ScrollReveal>
                            <div className="notice-section-block">
                                <h3>Mindset & Growth</h3>
                                <p>This experience is designed for open minded travelers who are willing to step outside their comfort zone, embrace new cultures, and grow as individuals through meaningful real life experiences.</p>
                                <p>If you are looking for personal growth, authentic human connection, cultural exchange, and the opportunity to make a positive impact while learning from local communities, we would love to welcome you on this journey.</p>
                                <p>This can become a once in a lifetime experience where you do not feel like a visitor, but rather a part of the culture, the people, and the community itself. Throughout your journey, you will experience the true grassroots level of Sri Lankan community life, with the real stories, real smiles, real struggles, and real human connections that many travelers never get the chance to see.</p>
                                <p>This is not a program where you simply travel around taking photographs as souvenirs. It is an experience where you live among local communities, share moments with people, and take those memories, emotions, and life lessons back home with you, not only in pictures, but within yourself forever.</p>
                                <p>Along this journey, you may witness beautiful moments that inspire happiness and gratitude, as well as situations that may touch your heart and change your perspective on life. Overall, this experience is designed to give a balanced and meaningful understanding of the world around you. Many participants return home with a deeper appreciation for the simple things they may once have overlooked in their own lives.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="notice-section-block">
                                <h3>Travel & Lodging Style</h3>
                                <p>Our programs focus more on experience, community, learning, and connection rather than luxury tourism or resort style travel. While we provide comfortable support and dedicated assistance throughout your stay, this experience may not be ideal for travelers whose main priority is high end luxury accommodation or traditional tourist style services.</p>
                                <p>Another important part of this experience is the way you travel throughout Sri Lanka. Whenever possible, participants are encouraged to travel like locals and experience the country in a more authentic and meaningful way rather than as high end luxury tourists. Depending on the location and activity, transportation may include local trains, public buses, tuk tuks, or other locally used transport methods. This allows participants to connect more closely with everyday Sri Lankan life, culture, and people while also helping support local communities directly.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="notice-section-block">
                                <h3>Direct Impact & Support</h3>
                                <p>What makes us different is the unmatched level of personalized support, flexibility, and genuine care we provide to every participant. From the moment you arrive until the end of your journey, our local team is available to assist, guide, and support you throughout your experience in Sri Lanka.</p>
                                <p>As one of the Give Back Journey ambassadors, you have the right to know where your hard earned contribution is allocated.</p>
                                <p>Your contribution helps support many important areas of the program, including:</p>
                                <ul className="notice-list">
                                    <li>Accommodation and daily living facilities</li>
                                    <li>Food and meal preparations</li>
                                    <li>Local transportation and project related travel</li>
                                    <li>Community projects and grassroots initiatives</li>
                                    <li>Support for local families, instructors, and community members</li>
                                    <li>Project coordination and local staffing</li>
                                    <li>Cultural exchange activities and educational experiences</li>
                                    <li>Maintenance and improvement of volunteer and community spaces</li>
                                    <li>Support for sustainable and responsible tourism initiatives</li>
                                    <li>Operational and administrative costs required to safely and effectively manage programs, staff coordination, participant support, logistics, and day to day operations</li>
                                </ul>
                                <p>A large portion of the funds goes directly back into local communities and helps create meaningful opportunities for the people who are part of these experiences.</p>
                                <p>At Give Back Journey, we believe in transparency, fairness, and responsible travel. Our goal is not only to create life changing experiences for participants, but also to ensure that local communities genuinely benefit from every journey.</p>
                                <p>This is designed as a meaningful way of travel where participants are not just “tourists,” but active contributors to local communities, offering more value, respect, and direct support to the people who make these experiences possible.</p>
                                <p>Every person who joins us to create an impact becomes an ambassador of Give Back Journeys, helping spread kindness, cultural understanding, responsible travel, and meaningful human connection across the world.</p>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </section>

            {/* Section: Our Goal & Vision */}
            <section className="joy-vision-section">
                <div className="joy-container">
                    <ScrollReveal>
                        <div className="vision-grid">
                            <div className="vision-left">
                                <span className="vision-tag">Our Philosophy</span>
                                <h2 className="vision-title">Our Goal & Vision</h2>
                            </div>
                            <div className="vision-right">
                                <p className="vision-lead">
                                    We are not simply another travel or voluntourism provider. Our goal is to work closely with grassroots level community needs while creating real human connections, meaningful cultural exchange, and life-changing experiences for both participants and local communities alike.
                                </p>
                                <p className="vision-body">
                                    There may be many organizations offering similar style programs, but we strongly believe that the level of personalized service, local connection, flexibility, community impact, and overall value we provide is difficult to match.
                                </p>
                                <div className="vision-cta-box">
                                    <p>If this sounds like the kind of meaningful journey you have been searching for, we invite you to take the next step and become part of the experience.</p>
                                    <Link to="/contact" className="vision-btn-modern">
                                        Join the Experience <i className="fa-solid fa-arrow-right-long"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 3: What we promise */}
            <section className="promise-section">
                <div className="joy-container">
                    <ScrollReveal>
                        <h2 className="joy-about-title">What we promise</h2>
                    </ScrollReveal>

                    <div className="promise-grid">
                        <ScrollReveal>
                            <div className="promise-card">
                                <div className="promise-icon-box">
                                    <div className="promise-blob"></div>
                                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                                </div>
                                <h4>Simplicity</h4>
                                <p>From discovering to booking and taking part, we're here to make the journey easy.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="promise-card">
                                <div className="promise-icon-box">
                                    <div className="promise-blob"></div>
                                    <i className="fa-solid fa-compass"></i>
                                </div>
                                <h4>Authenticity</h4>
                                <p>Our local teams have the inside knowledge for must-dos across thousands of destinations.</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="promise-card">
                                <div className="promise-icon-box">
                                    <div className="promise-blob"></div>
                                    <i className="fa-solid fa-camera"></i>
                                </div>
                                <h4>Curiosity</h4>
                                <p>We're always on the lookout for new and unique experiences for you to enjoy.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>


            <style dangerouslySetInnerHTML={{ __html: `
                .exclusive-joy-page {
                    background: #ffffff;
                }
                
                /* Hero Styles */
                .joy-hero {
                    position: relative;
                    height: 380px;
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    text-align: center;
                    color: white;
                }
                .joy-hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.2);
                    z-index: 1;
                }
                .joy-hero-content {
                    position: relative;
                    z-index: 5;
                }
                .joy-hero-content h1 {
                    font-size: clamp(2rem, 4.5vw, 3.5rem);
                    font-weight: 800;
                    margin: 0 0 10px 0;
                    letter-spacing: -1px;
                }
                .joy-hero-content p {
                    font-size: 1.15rem;
                    font-weight: 500;
                    opacity: 0.95;
                }

                /* Decorative Shapes */
                .joy-shape {
                    position: absolute;
                    z-index: 2;
                }
                .joy-shape-green-light {
                    top: 15%;
                    left: -50px;
                    width: 150px;
                    height: 200px;
                    background: #A5D6A7;
                    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
                    transform: rotate(-15deg);
                    opacity: 0.6;
                }
                .joy-shape-green-dark {
                    bottom: 10%;
                    right: -40px;
                    width: 200px;
                    height: 300px;
                    background: #1DB954;
                    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                    transform: rotate(10deg);
                    opacity: 0.7;
                }
                .joy-squiggle {
                    position: absolute;
                    top: 10%;
                    right: 15%;
                    z-index: 3;
                    opacity: 0.8;
                }

                /* General Section Styles */
                .joy-about-section, .what-we-do-section, .promise-section, .investors-section {
                    padding: 80px 5%;
                    text-align: center;
                    background: #fff;
                    position: relative;
                }
                .joy-container {
                    max-width: 1100px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }
                .joy-about-title {
                    color: #1DB954;
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                }
                .joy-about-subtitle {
                    font-size: 1.3rem;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 20px;
                    line-height: 1.4;
                }
                .joy-about-text p {
                    font-size: 1.05rem;
                    color: #555;
                    line-height: 1.7;
                    margin-bottom: 20px;
                }

                /* Dashed Background Section */
                .what-we-do-section {
                    background: #fafafa;
                    overflow: hidden;
                }
                .dashed-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    opacity: 0.2;
                    background-image: url("data:image/svg+xml,%3Csvg width='1000' height='400' viewBox='0 0 1000 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-100 100C100 50 300 150 500 100C700 50 900 150 1100 100' stroke='%231DB954' stroke-width='1.5' stroke-dasharray='10 15'/%3E%3Cpath d='M-100 300C100 250 300 350 500 300C700 250 900 350 1100 300' stroke='%231DB954' stroke-width='1.5' stroke-dasharray='10 15'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                /* Notice Section Styles (Minimal Typographic Document) */
                .joy-notice-section {
                    padding: 90px 5%;
                    background: #ffffff;
                    text-align: left;
                }
                .joy-container-narrow {
                    max-width: 800px;
                    margin: 0 auto;
                }
                .notice-header-simple {
                    margin-bottom: 50px;
                    border-bottom: 1px solid #e5e5e7;
                    padding-bottom: 35px;
                }
                .notice-badge-simple {
                    display: inline-block;
                    color: #1DB954;
                    font-size: 0.85rem;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    margin-bottom: 12px;
                    text-transform: uppercase;
                }
                .notice-main-title {
                    font-size: clamp(2rem, 3.5vw, 2.5rem);
                    font-weight: 700;
                    color: #1d1d1f;
                    margin: 0 0 15px 0;
                    letter-spacing: -0.5px;
                }
                .notice-lead {
                    font-size: 1.15rem;
                    color: #515154;
                    line-height: 1.6;
                    margin: 0;
                }
                .notice-content-simple {
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                }
                .notice-section-block h3 {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #1d1d1f;
                    margin: 0 0 18px 0;
                    letter-spacing: -0.2px;
                    border-left: 3px solid #1DB954;
                    padding-left: 12px;
                }
                .notice-section-block p {
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: #424245;
                    margin: 0 0 20px 0;
                }
                .notice-section-block p:last-child {
                    margin-bottom: 0;
                }
                .notice-list {
                    list-style-type: none;
                    padding-left: 0;
                    margin: 0 0 25px 0;
                }
                .notice-list li {
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: #424245;
                    margin-bottom: 12px;
                    position: relative;
                    padding-left: 24px;
                }
                .notice-list li::before {
                    content: "•";
                    color: #1DB954;
                    font-size: 1.4rem;
                    position: absolute;
                    left: 4px;
                    top: -2px;
                }

                /* Vision Section Styles */
                .joy-vision-section {
                    padding: 100px 5%;
                    background: #f5f5f7;
                    border-top: 1px solid #e5e5e7;
                }
                .vision-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 60px;
                    text-align: left;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .vision-left {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .vision-tag {
                    font-size: 0.85rem;
                    font-weight: 800;
                    color: #1DB954;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                }
                .vision-title {
                    font-size: clamp(2rem, 3.5vw, 2.8rem);
                    font-weight: 800;
                    color: #1d1d1f;
                    line-height: 1.2;
                    letter-spacing: -0.5px;
                }
                .vision-right {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                }
                .vision-lead {
                    font-size: 1.25rem;
                    line-height: 1.8;
                    color: #1d1d1f;
                    font-weight: 500;
                    margin: 0;
                }
                .vision-body {
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: #515154;
                    margin: 0;
                }
                .vision-cta-box {
                    background: #ffffff;
                    border: 1px solid rgba(29, 185, 84, 0.15);
                    border-radius: 20px;
                    padding: 35px;
                    margin-top: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
                }
                .vision-cta-box p {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: #1d1d1f;
                    font-weight: 600;
                    margin: 0 0 20px 0;
                }
                .vision-btn-modern {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 30px;
                    background: #1DB954;
                    color: #ffffff !important;
                    border-radius: 100px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-size: 0.95rem;
                    box-shadow: 0 10px 20px rgba(29, 185, 84, 0.15);
                }
                .vision-btn-modern:hover {
                    transform: translateY(-2px);
                    background: #158a3d;
                    box-shadow: 0 15px 25px rgba(29, 185, 84, 0.25);
                }
                .vision-btn-modern i {
                    transition: transform 0.3s ease;
                }
                .vision-btn-modern:hover i {
                    transform: translateX(4px);
                }

                /* Promise Section */
                .promise-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                    margin-top: 50px;
                }
                .promise-icon-box {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    margin: 0 auto 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .promise-blob {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80px;
                    height: 80px;
                    background: #f0f7f2;
                    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
                    z-index: 1;
                }
                .promise-icon-box i {
                    position: relative;
                    z-index: 2;
                    font-size: 2.2rem;
                    color: #1DB954;
                }
                .promise-card h4 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 15px;
                }
                .promise-card p {
                    font-size: 0.95rem;
                    color: #666;
                }

                @media (max-width: 900px) {
                    .vision-grid {
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }
                    .joy-vision-section {
                        padding: 70px 5%;
                    }
                    .vision-cta-box {
                        padding: 25px;
                    }
                    .promise-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}} />
        </div>
    );
};

export default ExclusiveJourneys;

