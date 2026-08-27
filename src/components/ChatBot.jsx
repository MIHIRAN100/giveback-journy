import React, { useState, useEffect } from 'react';

const ChatBot = ({ cookieVisible, isTourDetails }) => {
    const [isTidioOpen, setIsTidioOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        // Show notification badge after 2s
        const popupTimer = setTimeout(() => {
            setShowNotification(true);
        }, 2000);

        const hideNativeBubble = () => {
            if (window.tidioChatApi && !isTidioOpen) {
                window.tidioChatApi.hide();
            }
        };

        const setupTidio = () => {
            if (window.tidioChatApi) {
                hideNativeBubble();

                window.tidioChatApi.on('open', () => {
                    setIsTidioOpen(true);
                    setIsLoading(false);
                });

                window.tidioChatApi.on('close', () => {
                    setIsTidioOpen(false);
                    // Hide Tidio's native bubble after closing animation to prevent double icons
                    setTimeout(hideNativeBubble, 150);
                    setTimeout(hideNativeBubble, 400);
                });
            }
        };

        if (window.tidioChatApi) {
            setupTidio();
        } else {
            document.addEventListener('tidioChat-ready', setupTidio);
        }

        return () => {
            clearTimeout(popupTimer);
            document.removeEventListener('tidioChat-ready', setupTidio);
        };
    }, []);

    const handleOpenTidio = () => {
        setShowNotification(false);
        if (window.tidioChatApi) {
            window.tidioChatApi.show();
            window.tidioChatApi.open();
            setIsTidioOpen(true);
        } else {
            setIsLoading(true);
            const onReady = () => {
                if (window.tidioChatApi) {
                    window.tidioChatApi.show();
                    window.tidioChatApi.open();
                    setIsTidioOpen(true);
                }
                setIsLoading(false);
            };
            document.addEventListener('tidioChat-ready', onReady, { once: true });

            // Fallback after 3 seconds if Tidio is blocked or unavailable
            setTimeout(() => {
                if (!window.tidioChatApi) {
                    setIsLoading(false);
                    window.open('https://wa.me/94774944909', '_blank');
                }
            }, 3000);
        }
    };

    return (
        <div className="chat-container" style={{ bottom: (cookieVisible || isTourDetails) ? '175px' : '55px', right: '20px' }}>
            {!isTidioOpen && (
                <button 
                    className="chat-toggle" 
                    onClick={handleOpenTidio} 
                    title="Tidio Live Chat" 
                    style={{ 
                        position: 'relative', 
                        background: '#3B7FBA',
                        boxShadow: 'none',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        pointerEvents: 'auto',
                        width: '58px',
                        height: '58px',
                        borderRadius: '50%',
                        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                >
                    {isLoading ? (
                        <i className="fa-solid fa-circle-notch fa-spin" style={{ fontSize: '1.4rem', color: 'white' }}></i>
                    ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H6V21.08C6 21.6 6.64 21.87 7.03 21.52L10.87 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
                        </svg>
                    )}

                    {showNotification && !isLoading && (
                        <span style={{
                            position: 'absolute',
                            top: '-4px',
                            right: '-4px',
                            background: '#ef4444',
                            color: 'white',
                            borderRadius: '50%',
                            width: '22px',
                            height: '22px',
                            fontSize: '0.78rem',
                            fontWeight: '800',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 10px rgba(239, 68, 68, 0.4)',
                            border: '2px solid white',
                            zIndex: 10
                        }}>
                            1
                        </span>
                    )}
                </button>
            )}
        </div>
    );
};

export default ChatBot;
