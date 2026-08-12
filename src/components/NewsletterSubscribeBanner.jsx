import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import defaultBgImage from '../assets/newsletter_beach_bg.png';
import medicalBgImage from '../assets/medical_gallery_new_1.jpg';
import supportAgentImg from '../assets/support_agent_headshot.png';

const NewsletterSubscribeBanner = ({ bgImage = medicalBgImage }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloaded, setDownloaded] = useState(false);

    const handleDownloadPDF = (e) => {
        e.preventDefault();
        setIsDownloading(true);

        try {
            const doc = new jsPDF('p', 'pt', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();

            // Page 1 Header
            doc.setFillColor(27, 163, 82); // Primary Green
            doc.rect(0, 0, pageWidth, 90, 'F');

            doc.setTextColor(255, 255, 255);
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.text('GIVEBACK JOURNEY - SRI LANKA', 40, 42);

            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            doc.text('Official Volunteer Programs & Pricing Breakdown 2026', 40, 65);

            // Metadata Bar
            doc.setTextColor(100, 116, 139);
            doc.setFontSize(9);
            const userRef = email ? email : 'Valued Volunteer';
            doc.text(`Requested by: ${userRef}`, 40, 110);
            doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - 140, 110);

            doc.setDrawColor(226, 232, 240);
            doc.setLineWidth(1);
            doc.line(40, 120, pageWidth - 40, 120);

            // Intro Text
            doc.setTextColor(30, 41, 59);
            doc.setFontSize(13);
            doc.setFont('helvetica', 'bold');
            doc.text('Official Volunteer Project Pricing Matrix', 40, 142);

            doc.setFontSize(9.5);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(71, 85, 105);
            doc.text('All prices are in USD ($) and reflect direct website rates. Programs include 3 daily meals, lodging, airport pickup, and 24/7 dedicated support.', 40, 158, { maxWidth: pageWidth - 80 });

            let y = 185;

            const programs = [
                {
                    title: "Medical Volunteer Program",
                    location: "Kandy District (Teaching Hospital Placement)",
                    desc: "Shadow senior Sri Lankan doctors in surgery, pediatrics, OB-GYN, and emergency medicine.",
                    pricing: "1 Wk: $240  |  2 Wks: $410  |  3 Wks: $580  |  4 Wks: $750  (+$170/extra wk)"
                },
                {
                    title: "Teaching Volunteer Program",
                    location: "Kandy District (Local Primary Schools)",
                    desc: "Teach conversational English, IT, and creative arts in rural community centers.",
                    pricing: "1 Wk: $175  |  2 Wks: $225  |  3 Wks: $275  |  4 Wks: $325  (+$50/extra wk)"
                },
                {
                    title: "Village School Construction & Renovation",
                    location: "Kandy District",
                    desc: "Build and restore classrooms, playgrounds, and community facilities alongside locals.",
                    pricing: "1 Wk: $175  |  2 Wks: $225  |  3 Wks: $275  |  4 Wks: $325  (+$50/extra wk)"
                },
                {
                    title: "Special Needs Support Program",
                    location: "Kandy District",
                    desc: "Provide care, physical therapy support, and creative activities for children with special needs.",
                    pricing: "1 Wk: $175  |  2 Wks: $225  |  3 Wks: $275  |  4 Wks: $325  (+$50/extra wk)"
                },
                {
                    title: "Body & Mind Wellness Week",
                    location: "Hikkaduwa, Southern Coast",
                    desc: "Temple yoga, meditation sessions, beach wellness, and cultural immersion.",
                    pricing: "1 Wk: $175  |  2 Wks: $225  (+$50/extra wk)"
                },
                {
                    title: "Breathe Sri Lanka (The Real Experience)",
                    location: "Kandy & Southern Coast",
                    desc: "27-Day full immersion across wildlife, medical, teaching, and heritage projects.",
                    pricing: "Fixed 27 Days (4 Weeks): $1,400 USD Complete Package"
                }
            ];

            programs.forEach((prog) => {
                doc.setFillColor(248, 250, 252);
                doc.setDrawColor(226, 232, 240);
                doc.roundedRect(40, y, pageWidth - 80, 68, 6, 6, 'FD');

                doc.setTextColor(27, 163, 82);
                doc.setFontSize(11);
                doc.setFont('helvetica', 'bold');
                doc.text(prog.title, 52, y + 20);

                doc.setTextColor(100, 116, 139);
                doc.setFontSize(8.5);
                doc.setFont('helvetica', 'normal');
                doc.text(`Location: ${prog.location}`, pageWidth - 260, y + 20);

                doc.setTextColor(71, 85, 105);
                doc.setFontSize(9);
                doc.text(prog.desc, 52, y + 36, { maxWidth: pageWidth - 104 });

                doc.setTextColor(15, 23, 42);
                doc.setFontSize(9.5);
                doc.setFont('helvetica', 'bold');
                doc.text(`Official Pricing: ${prog.pricing}`, 52, y + 54);

                y += 76;
            });

            // What's Included Section
            y += 10;
            doc.setTextColor(30, 41, 59);
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text('What Is Included in All Volunteer Programs:', 40, y);

            y += 16;
            const inclusions = [
                '✔ Airport Pick-up & Transport to Housing',
                '✔ Clean Accommodation in Locally Owned Hostels',
                '✔ 3 Daily Sri Lankan Meals (Breakfast, Lunch & Dinner)',
                '✔ In-Country Orientation & Cultural Training',
                '✔ 24/7 Dedicated Emergency & Program Support',
                '✔ Official Certificate of Completion & Work Letter'
            ];

            doc.setFontSize(8.5);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(51, 65, 85);
            
            // Render inclusions in 2 columns
            inclusions.forEach((item, index) => {
                const colX = index % 2 === 0 ? 45 : 300;
                const rowY = y + Math.floor(index / 2) * 16;
                doc.text(item, colX, rowY);
            });

            // Contact Footer Box
            y += 56;
            doc.setFillColor(240, 253, 244);
            doc.setDrawColor(27, 163, 82);
            doc.roundedRect(40, y, pageWidth - 80, 44, 6, 6, 'FD');

            doc.setTextColor(27, 163, 82);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.text('Questions or Ready to Book Your Placement?', 52, y + 18);

            doc.setTextColor(51, 65, 85);
            doc.setFontSize(8.5);
            doc.setFont('helvetica', 'normal');
            doc.text('Email: Hello@givebackjourney.com  |  WhatsApp / Call: +94 77 494 4909', 52, y + 32);

            // Save PDF immediately
            doc.save('GiveBack_Journey_Volunteer_Pricing_Guide_2026.pdf');

            setIsDownloading(false);
            setDownloaded(true);
            setTimeout(() => {
                setDownloaded(false);
            }, 5000);
        } catch (err) {
            console.error('Failed to generate PDF:', err);
            setIsDownloading(false);
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
                    padding: 42px 190px 42px 6%;
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
                    max-width: 580px;
                    min-width: 280px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
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
                    background: var(--primary-green, #10b981);
                    color: #ffffff;
                    border: none;
                    padding: 16px 28px;
                    font-weight: 800;
                    font-size: 0.98rem;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .subscribe-submit-btn:hover {
                    filter: brightness(0.9);
                }

                .subscribe-disclaimer {
                    margin: 0;
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.9);
                    line-height: 1.4;
                    text-align: center;
                    width: 100%;
                }

                .subscribe-need-help-card {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    background: #ffffff;
                    border-radius: 16px 0 0 16px;
                    padding: 18px 24px 18px 22px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    box-shadow: -4px 8px 25px rgba(0,0,0,0.18);
                    cursor: pointer;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    min-width: 125px;
                    z-index: 2;
                }

                .subscribe-need-help-card:hover {
                    transform: translateY(-50%) translateX(-4px);
                    box-shadow: -8px 12px 30px rgba(0,0,0,0.25);
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
                    .subscribe-need-help-card {
                        position: relative;
                        right: auto;
                        top: auto;
                        transform: none;
                        border-radius: 16px;
                        margin-top: 15px;
                    }
                    .subscribe-need-help-card:hover {
                        transform: translateY(-3px);
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
                                <path d="M2 9C40 3 140 2 198 8" stroke="var(--primary-green, #10b981)" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                        <br />
                        Make an Impact
                    </h2>
                </div>

                {/* Center Form with Real-Time PDF Download */}
                <div className="subscribe-form-box">
                    {downloaded ? (
                        <div style={{ background: 'rgba(16, 185, 129, 0.3)', border: '1px solid var(--primary-green, #10b981)', padding: '14px 20px', borderRadius: '8px', color: '#fff', fontWeight: 700, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                            <i className="bi bi-file-earmark-check-fill" style={{ fontSize: '1.3rem', color: 'var(--primary-green, #10b981)' }}></i>
                            <span>✓ Volunteer Pricing Guide PDF Downloaded Successfully!</span>
                        </div>
                    ) : (
                        <form onSubmit={handleDownloadPDF} className="subscribe-input-group">
                            <input 
                                type="email" 
                                placeholder="Enter email to Download Volunteer Pricing Guide" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="subscribe-input-field"
                            />
                            <button type="submit" className="subscribe-submit-btn" disabled={isDownloading}>
                                <i className={isDownloading ? "bi bi-hourglass-split" : "bi bi-file-earmark-pdf-fill"}></i>
                                <span>{isDownloading ? 'Generating...' : 'Download Guide & Pricing'}</span>
                            </button>
                        </form>
                    )}
                    <p className="subscribe-disclaimer">
                        Instantly download official medical, teaching & wildlife project pricings. Read our <Link to="/privacy-policy" style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 600 }}>Privacy Policy</Link> and <Link to="/terms-and-conditions" style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 600 }}>Terms & Conditions</Link>.
                    </p>
                </div>

                {/* Right Floating Need Help Card */}
                <div className="subscribe-need-help-card" onClick={() => navigate('/contact')}>
                    <img 
                        src={supportAgentImg} 
                        alt="Customer Support Agent" 
                        style={{ width: '54px', height: '54px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
                    />
                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#222', whiteSpace: 'nowrap', marginTop: '2px' }}>Need Help?</span>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSubscribeBanner;
