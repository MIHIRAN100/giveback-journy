import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultBgImage from '../assets/newsletter_beach_bg.png';
import medicalBgImage from '../assets/medical_gallery_new_1.jpg';
import supportAgentImg from '../assets/support_agent_headshot.png';

const NewsletterSubscribeBanner = ({ bgImage = medicalBgImage }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail('');
            }, 4000);
        }
    };

    return (
        <section className="newsletter-subscribe-banner-wrapper" style={{ width: '100%', margin: '40px 0 20px 0' }}>
            <style>{`
                .subscribe-banner-container {
                    position: relative;
                    width: 100%;
                    background-image: linear-gradient(90deg, rgba(15, 23, 42, 0.78) 0%, rgba(15, 23, 42, 0.52) 55%, rgba(15, 23, 42, 0.25) 100%), url(${bgImage});
                    background-size: cover;
                    background-position: center 58%;
                    background-attachment: fixed;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
                    padding: 42px 6%;
                    box-sizing: border-box;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 30px;
                }

                .subscribe-left-title {
                    font-size: 2.3rem;
                    font-weight: 800;
                    line-height: 1.15;
                    margin: 0;
                    color: #ffffff;
                    letter-spacing: -0.5px;
                }

                .subscribe-cyan-underline {
                    position: absolute;
                    bottom: -6px;
                    left: 0;
                    width: 100%;
                    height: 10px;
                    pointer-events: none;
                }

                .subscribe-form-box {
                    flex: 1;
                    max-width: 560px;
                    min-width: 280px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .subscribe-input-group {
                    display: flex;
                    width: 100%;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
                }

                .subscribe-input-field {
                    flex: 1;
                    padding: 16px 22px;
                    border: none;
                    outline: none;
                    font-size: 0.95rem;
                    color: #222;
                    background: #ffffff;
                }

                .subscribe-submit-btn {
                    background: #00bcda;
                    color: #ffffff;
                    border: none;
                    padding: 16px 30px;
                    font-weight: 800;
                    font-size: 1rem;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: background 0.3s ease;
                }

                .subscribe-submit-btn:hover {
                    background: #009cb5;
                }

                .subscribe-disclaimer {
                    margin: 0;
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.9);
                    line-height: 1.4;
                }

                .subscribe-need-help-card {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 16px 22px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.18);
                    cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    min-width: 130px;
                }

                .subscribe-need-help-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 14px 30px rgba(0,0,0,0.25);
                }

                @media (max-width: 992px) {
                    .subscribe-banner-container {
                        padding: 35px 5%;
                        justify-content: center;
                        text-align: center;
                    }
                    .subscribe-left-title {
                        font-size: 1.9rem;
                    }
                    .subscribe-form-box {
                        max-width: 100%;
                    }
                }
            `}</style>

            <div className="subscribe-banner-container">
                {/* Left Title */}
                <div>
                    <h2 className="subscribe-left-title">
                        <span style={{ position: 'relative', display: 'inline-block' }}>
                            Volunteer &
                            <svg className="subscribe-cyan-underline" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 9C40 3 140 2 198 8" stroke="#00bcda" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                        <br />
                        Make an Impact
                    </h2>
                </div>

                {/* Center Form */}
                <div className="subscribe-form-box">
                    {subscribed ? (
                        <div style={{ background: 'rgba(0, 188, 218, 0.25)', border: '1px solid #00bcda', padding: '14px 20px', borderRadius: '8px', color: '#fff', fontWeight: 700, textAlign: 'center' }}>
                            ✓ Thank you! We've sent the Volunteer Project Guide & Pricings to your email.
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="subscribe-input-group">
                            <input 
                                type="email" 
                                placeholder="Enter email for Volunteer Guide & Pricing" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="subscribe-input-field"
                            />
                            <button type="submit" className="subscribe-submit-btn">
                                Get Info Guide
                            </button>
                        </form>
                    )}
                    <p className="subscribe-disclaimer">
                        Get detailed medical, teaching & wildlife project pricings and dates. Read our <a href="/terms" style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 600 }}>Privacy Policy</a> and <a href="/terms" style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 600 }}>Terms & Conditions</a>.
                    </p>
                </div>

                {/* Right Floating Need Help Card */}
                <div className="subscribe-need-help-card" onClick={() => navigate('/volunteer')}>
                    <img 
                        src={supportAgentImg} 
                        alt="Volunteer Support Advisor" 
                        style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #00bcda' }} 
                    />
                    <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#111', whiteSpace: 'nowrap' }}>Volunteer Advisor</span>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSubscribeBanner;
