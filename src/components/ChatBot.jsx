import React, { useState } from 'react';

const ChatBot = ({ cookieVisible, isTourDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    const whatsappNumber = "94754154119";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi!%20I'm%20interested%20in%20your%20Sri%20Lanka%20tour%20packages.`;

    const messages = [
        "Hi 👋 Need help?",
        "Ready for adventure? 🌴",
        "Plan your trip now! ✨",
        "Have any questions? 🤔",
        "Discover Sri Lanka! 🇱🇰"
    ];

    const [msgIndex, setMsgIndex] = useState(0);
    const [isMsgFading, setIsMsgFading] = useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIsMsgFading(true);
            setTimeout(() => {
                setMsgIndex((prev) => (prev + 1) % messages.length);
                setIsMsgFading(false);
            }, 600); // Wait for fade out
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="chat-container" style={{ bottom: (cookieVisible || isTourDetails) ? '160px' : '30px' }}>
            {/* Popup Window */}
            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="chat-avatar" style={{background: 'var(--primary-green)'}}>
                        <i className="fa-brands fa-whatsapp" style={{fontSize: '1.2rem'}}></i>
                    </div>
                    <div>
                        <div className="chat-title">Giveback Concierge</div>
                        <div className="chat-status">
                            <div className="status-dot"></div> Online — Typically replies instantly
                        </div>
                    </div>
                </div>

                <div style={{padding: '30px 25px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    {/* Bot greeting */}
                    <div className="msg-bubble msg-bot">
                        Ayubowan! 🙏 Welcome to <strong>Giveback journny.</strong> I'm here to help you plan your perfect Sri Lankan getaway. Tap below to chat with our travel expert directly on WhatsApp!
                    </div>

                    {/* Quick action buttons */}
                    <div className="chat-actions">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                            <i className="fa-brands fa-whatsapp"></i>
                            Chat on WhatsApp
                        </a>
                        <div className="chat-phone">
                            <i className="fa-solid fa-phone"></i>
                            +94 75 415 4119
                        </div>
                    </div>

                    {/* Quick topic chips */}
                    <div className="chat-topics">
                        {['Tour Packages', 'Custom Itinerary', 'Group Booking', 'Pricing'].map(topic => (
                            <a key={topic} href={`https://wa.me/${whatsappNumber}?text=Hi!%20I'd%20like%20to%20know%20about%20${encodeURIComponent(topic)}.`}
                               target="_blank" rel="noopener noreferrer" className="topic-chip">
                                {topic}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hi greeting bubble */}
            {!isOpen && (
                <div 
                    className="hi-bubble" 
                    onClick={() => setIsOpen(true)}
                    style={{
                        opacity: isMsgFading ? 0 : 1,
                        transform: isMsgFading ? 'translateY(10px)' : 'translateY(0)',
                        transition: 'all 0.6s ease'
                    }}
                >
                    {messages[msgIndex]}
                </div>
            )}

            {/* Floating WhatsApp Toggle Button */}
            <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)} title="Chat with us">
                {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-brands fa-whatsapp" style={{fontSize: '1.8rem'}}></i>}
            </button>
        </div>
    );
};

export default ChatBot;
