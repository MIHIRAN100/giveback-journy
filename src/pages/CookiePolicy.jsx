import React, { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const CookiePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policy-page-wrapper">
            <div className="policy-hero">
                <ScrollReveal>
                    <div className="policy-hero-content">
                        <h1>Cookie Policy</h1>
                        <p>How we utilize cookies to enhance your browsing experience and personalize your sustainable journey in Sri Lanka.</p>
                        <div className="policy-meta-row">
                            <span className="policy-version-text">Version 2.10 (Revised May 2026)</span>
                            <button className="policy-share-btn" onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert('Link copied to clipboard!');
                            }}>
                                <i className="bi bi-share"></i> Share
                            </button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <div className="policy-content-section">
                <div className="policy-container">
                    <ScrollReveal>
                        <div className="policy-block">
                            <h2>1. About our Cookie Policy</h2>
                            <p>
                                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                            </p>
                            <p>
                                When you visit our Website, we will ask you whether you agree to our use of cookies. You can indicate your acceptance of our use of cookies by clicking in the appropriate place on the banner that appears on the Website.
                            </p>
                            <p>
                                However, please note that if you do not click to accept but continue to browse the Website, you will be deemed to have accepted our use of cookies in accordance with this Privacy Policy and Cookie Policy.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>2. What are Cookies?</h2>
                            <p>
                                A cookie is a text file containing small amounts of information which is downloaded to your device (e.g. computer or mobile phone) when you access a website. The text file is then sent back to our server each time your browser requests a page from the server.
                            </p>
                            <p>
                                This enables us to operate the Website more effectively and load the Website in such a way as to reflect your personal preferences based on your previous browsing on the Website, as well as keywords we are able to gather from URLs of webpages from which you accessed the Website.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>3. Third-Party Embedded Content & Social Media Cookies</h2>
                            <p>
                                Sometimes, we embed images or videos from third party websites (such as YouTube, Vimeo, or local conservation documentary portals). As a result, when you visit a page featuring such content, you may be presented with cookies from these websites.
                            </p>
                            <p>
                                We do not control these cookies and cannot prevent these sites or domains from collecting information on your use of this content.
                            </p>
                            <p>
                                On some pages, we also feature embedded ‘Share’ buttons or widgets that enable you to share content with friends through a number of popular social networking sites (e.g. Twitter/X, Facebook ‘Like’, Instagram etc.). These sites set cookies which can identify you as an individual when you are also logged in to their services. We do not control these cookies and you should check the relevant third-party website to see how your information is used and how to opt out.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>4. Google Analytics & Platform Management</h2>
                            <p>
                                We use Google Analytics to collect information about how people use this site. This is to make sure it’s meeting its users’ needs and to help us understand how we can improve.
                            </p>
                            <p>
                                There are also secure system cookies that store basic session data on your interactions with the React app framework, currency selections, and the content management systems running this website.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>5. How do I turn Cookies off?</h2>
                            <p>
                                If you would like to opt out of cookies, you can change the settings on your internet browser to reject cookies. You can set your web browser (e.g. Chrome, Firefox, Safari, Edge etc.) to reject all cookies; allow only ‘trusted’ sites to set them; or to accept cookies from websites only for the duration of your visit.
                            </p>
                            <p>
                                Your browser’s ‘Help’ option will tell you how. Please note that if you do set your browser to reject all or some cookies, you may not be able to use all or some parts of our Website.
                            </p>
                            <p>
                                For more information please consult the “Help” section of your browser or visit <a href="https://www.aboutcookies.org" target="_blank" rel="noreferrer">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer">www.allaboutcookies.org</a>.
                            </p>
                        </div>

                        <div className="policy-block">
                            <h2>6. Contact Us</h2>
                            <p>
                                If you have any questions or concerns about our use of cookies, please email our sustainable travel operations team at: <a href="mailto:hello@givebackjourney.com">Hello@givebackjourney.com</a>.
                            </p>
                        </div>

                        <div className="policy-last-updated">
                            Last Updated: May 18, 2026
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
