import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/newsletter_beach_bg.png';

const phrases = [
    "you can't find anywhere else",
    "customized by local travel experts",
    "handcrafted for unforgettable memories",
    "tailored for your dream journey"
];

const NewsletterSubscribeBanner = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                setFade(true);
            }, 300); // 300ms fade out before swapping text
        }, 3500); // cycle every 3.5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="newsletter-banner-wrapper">
            <style>{`
                .newsletter-banner-container {
                    position: relative;
                    width: 100%;
                    max-width: 100%;
                    margin: 40px 0 20px 0;
                    border-radius: 0;
                    overflow: hidden;
                    background-image: linear-gradient(90deg, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(15, 23, 42, 0.25) 100%), url(${bgImage});
                    background-size: cover;
                    background-position: center bottom;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
                    padding: 55px 5%;
                    box-sizing: border-box;
                    color: #ffffff;
                    font-family: inherit;
                }

                .newsletter-banner-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 30px;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .newsletter-text-side {
                    flex: 1;
                    min-width: 300px;
                }

                .newsletter-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    line-height: 1.2;
                    margin: 0;
                    color: #ffffff;
                    letter-spacing: -0.5px;
                }

                .newsletter-title-line1 {
                    position: relative;
                    display: inline-block;
                    margin-bottom: 6px;
                }

                /* Cyan curved underline accent */
                .cyan-underline-svg {
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 100%;
                    height: 12px;
                    pointer-events: none;
                }

                .newsletter-title-line2 {
                    display: block;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    min-height: 1.3em;
                    color: rgba(255, 255, 255, 0.95);
                }

                .newsletter-title-line2.fade-in {
                    opacity: 1;
                    transform: translateY(0px);
                }

                .newsletter-title-line2.fade-out {
                    opacity: 0;
                    transform: translateY(-8px);
                }

                .banner-action-btn {
                    background-color: #3b7fba;
                    color: #ffffff;
                    border: none;
                    padding: 16px 42px;
                    font-size: 1.1rem;
                    font-weight: 700;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    font-family: inherit;
                    white-space: nowrap;
                    box-shadow: 0 8px 24px rgba(59, 127, 186, 0.4);
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                }

                .banner-action-btn:hover {
                    background-color: #24527a;
                    transform: translateY(-2px);
                    box-shadow: 0 12px 28px rgba(36, 82, 122, 0.5);
                }

                @media (max-width: 992px) {
                    .newsletter-banner-container {
                        padding: 40px 5%;
                        border-radius: 0;
                        margin: 30px 0;
                        width: 100%;
                    }
                    .newsletter-title {
                        font-size: 2rem;
                    }
                }

                @media (max-width: 600px) {
                    .newsletter-banner-container {
                        padding: 30px 20px;
                        text-align: center;
                    }
                    .newsletter-banner-content {
                        justify-content: center;
                    }
                    .newsletter-title {
                        font-size: 1.65rem;
                    }
                    .banner-action-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>

            <div className="newsletter-banner-container">
                <div className="newsletter-banner-content">
                    {/* Left Title Text */}
                    <div className="newsletter-text-side">
                        <h2 className="newsletter-title">
                            <span className="newsletter-title-line1">
                                Best tours in{' '}
                                <span style={{ position: 'relative', display: 'inline-block' }}>
                                    Sri Lanka
                                    <svg className="cyan-underline-svg" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 9C40 3 140 2 198 8" stroke="#3b7fba" strokeWidth="4" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </span>
                            <span className={`newsletter-title-line2 ${fade ? 'fade-in' : 'fade-out'}`}>
                                {phrases[index]}
                            </span>
                        </h2>
                    </div>

                    {/* Right Button */}
                    <div className="newsletter-btn-side">
                        <button className="banner-action-btn" onClick={() => navigate('/contact')}>
                            <span>Explore Tours</span>
                            <i className="bi bi-arrow-right" style={{ fontSize: '1.1rem' }}></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSubscribeBanner;
