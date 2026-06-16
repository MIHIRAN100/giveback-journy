import React, { useState } from 'react';

const ChatBot = ({ cookieVisible, isTourDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    const whatsappNumber = "94754154119";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi!%20I'm%20interested%20in%20your%20Sri%20Lanka%20tour%20packages.`;

    const messages = [
        "1 message received",
        "Hi! I'm Danushka, how can I help you?",
        "Ready for adventure?",
        "Plan your trip now!",
        "Have any questions?",
        "Discover Sri Lanka!",
        "Let's plan your dream trip! 🌴",
        "Exclusive deals available today!",
        "Need help choosing a tour?",
        "We reply within minutes! ⚡",
        "Custom itineraries available!",
        "Join 1000+ happy travelers!"
    ];

    const [msgIndex, setMsgIndex] = useState(0);
    const [isMsgFading, setIsMsgFading] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    React.useEffect(() => {
        // Pop up the notification badge and sound after 2 seconds
        const popupTimer = setTimeout(() => {
            setShowNotification(true);
            try {
                // Short, unobtrusive bubble pop sound
                const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3');
                audio.play().catch(err => console.log('Audio autoplay blocked by browser', err));
            } catch (e) {}
        }, 2000);

        const interval = setInterval(() => {
            setIsMsgFading(true);
            setTimeout(() => {
                setMsgIndex((prev) => (prev + 1) % messages.length);
                setIsMsgFading(false);
            }, 600); // Wait for fade out
        }, 5000); // Change every 5 seconds
        
        return () => {
            clearTimeout(popupTimer);
            clearInterval(interval);
        };
    }, [messages.length]);

    return (
        <div className="chat-container" style={{ bottom: (cookieVisible || isTourDetails) ? '160px' : '30px' }}>
            {/* Popup Window */}
            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="chat-avatar" style={{background: '#1a2332'}}>
                        <i className="fa-brands fa-whatsapp" style={{fontSize: '1.2rem'}}></i>
                    </div>
                    <div>
                        <div className="chat-title">Giveback Concierge</div>
                        <div className="chat-status">
                            <div className="status-dot"></div> Online: Typically replies instantly
                        </div>
                    </div>
                </div>

                <div style={{padding: '30px 25px', display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    {/* Bot greeting */}
                    <div className="msg-bubble msg-bot">
                        Ayubowan! Welcome to <strong>Giveback journny.</strong> I'm here to help you plan your perfect Sri Lankan getaway. Tap below to chat with our travel expert directly on WhatsApp!
                    </div>
                    <div className="msg-bubble msg-bot" style={{ marginTop: '-5px' }}>
                        We specialize in volunteer programs, customizable tour packages, and immersive cultural trips. 🌴
                    </div>
                    <div className="msg-bubble msg-bot" style={{ marginTop: '-5px' }}>
                        Simply click the button below to start your adventure. Our experts are ready to assist you right away! ✨
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
            {!isOpen && showNotification && (
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
            <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)} title="Chat with us" style={{ position: 'relative' }}>
                {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-brands fa-whatsapp" style={{fontSize: '1.8rem'}}></i>}
                {!isOpen && showNotification && (
                    <span style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        background: '#ef4444',
                        color: 'white',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        fontSize: '0.8rem',
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(239, 68, 68, 0.4)',
                        border: 'none',
                        zIndex: 10,
                        animation: 'profFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                    }}>
                        1
                    </span>
                )}
            </button>
            
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes whatsapp-pulse {
                    0% { opacity: 0.4; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.2); }
                    100% { opacity: 0.4; transform: scale(0.8); }
                }
            `}} />
        </div>
    );
};

export default ChatBot;
