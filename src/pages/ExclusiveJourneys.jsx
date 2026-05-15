import React, { useEffect } from 'react';
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
                        <h1>Looking for a budget-friendly<br/>way to travel?</h1>
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
                                Looking for a budget-friendly way to explore Sri Lanka? Give Back Journey is more than just a travel platform; it's a bridge between passionate travelers and local communities. We specialize in combining low-cost, authentic island experiences with unique volunteering opportunities. We believe that everyone should have the chance to see the world's beauty while contributing to its preservation, which is why our journeys are designed to be as impactful as they are affordable. From the misty highlands to the golden southern shores, our mission is to ensure that your adventure leaves a lasting, positive legacy on the hearts of the people you meet and the land you explore.
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
                                We bridge the gap between global curiosity and local necessity by curating travel experiences that are intrinsically linked to social and environmental responsibility. We prove that you don't need a massive budget to make a tangible difference in the world. Whether it's assisting teachers in rural village schools, participating in reforestation efforts in the rainforests, or supporting sustainable farming initiatives, our journeys ensure that your presence in Sri Lanka directly translates into resources and support for the growth and well-being of local communities.
                            </p>
                            <p>
                                Our work goes far beyond simply organizing logistics; we are dedicated to fostering deep, long-term relationships between our travelers and our project partners on the ground. We don't believe in "voluntourism" that provides only surface-level interaction. Instead, we facilitate immersion that allows for genuine cultural exchange and skill-sharing. Many of our guests find themselves returning year after year, not just as tourists, but as mentors, friends, and active supporters, creating a powerful global network of "Givebackers" who are united by their love for the island and their commitment to its future.
                            </p>
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
                    .promise-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}} />
        </div>
    );
};

export default ExclusiveJourneys;
