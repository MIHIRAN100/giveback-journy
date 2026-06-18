import React from 'react';

import { Link } from 'react-router-dom';

const WelcomeSriLanka = () => {
    return (
        <section className="welcome-sri-lanka">
            <div className="section-container">
                <div className="welcome-content-centered">
                    <div className="welcome-text">
                        <span className="welcome-tag">Ayubowan</span>
                        <h2><span style={{ color: '#1a2332' }}>Welcome to</span> <span className="text-highlight">Sri Lanka</span></h2>
                        <div className="welcome-description">
                            <p>
                                Experience the Pearl of the Indian Ocean, a land of emerald tea plantations, ancient stone fortresses, and golden shores. Sri Lanka is not just a destination; it's a sensory symphony where the scent of cinnamon mingles with the salty sea breeze, and the rhythmic chanting from ancient temples echoes through misty mountain peaks.
                            </p>
                            <p>
                                Journey from the mist-covered highlands of Ella and Nuwara Eliya, where endless rows of tea bushes carpet the hills, to the Cultural Triangle where history spans over two millennia. Stand in awe before the majestic Sigiriya Rock, explore the sacred city of Kandy, and witness the largest gathering of wild Asian elephants in the plains of Minneriya.
                            </p>
                            <p>
                                Beyond the breathtaking vistas, Sri Lanka’s true heart lies in its people. Through our curated experiences, we invite you to connect deeply with local communities, participate in meaningful conservation efforts, and discover the authentic soul of the island. Whether you're seeking serenity on a secluded southern beach or adventure in the rugged wilderness, your journey here will be as impactful as it is unforgettable.
                            </p>
                        </div>
                        <Link to="/sri-lanka" className="btn-modern btn-black" style={{ display: 'inline-block' }}>Explore the Island</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSriLanka;
