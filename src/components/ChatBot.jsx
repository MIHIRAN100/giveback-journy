import React, { useState, useEffect } from 'react';

const ChatBot = ({ cookieVisible, isTourDetails }) => {
    const [showNotification, setShowNotification] = useState(false);
    const [isTidioOpen, setIsTidioOpen] = useState(false);

    useEffect(() => {
        // Pop up the notification badge after 2 seconds
        const popupTimer = setTimeout(() => {
            setShowNotification(true);
        }, 2000);

        // Listen for Tidio events to hide default Tidio launcher bubble when Tidio is closed
        const setupTidioListeners = () => {
            if (window.tidioChatApi) {
                window.tidioChatApi.hide();
                window.tidioChatApi.on('open', () => setIsTidioOpen(true));
                window.tidioChatApi.on('close', () => {
                    setIsTidioOpen(false);
                    window.tidioChatApi.hide();
                });
            }
        };

        if (window.tidioChatApi) {
            setupTidioListeners();
        } else {
            document.addEventListener('tidioChat-ready', setupTidioListeners);
        }

        // Periodic check to ensure Tidio default bubble doesn't cover custom buttons on initial load
        const checkInterval = setInterval(() => {
            if (window.tidioChatApi && !isTidioOpen) {
                window.tidioChatApi.hide();
            }
        }, 1000);

        return () => {
            clearTimeout(popupTimer);
            clearInterval(checkInterval);
            document.removeEventListener('tidioChat-ready', setupTidioListeners);
        };
    }, [isTidioOpen]);

    return (
        <div className="chat-container" style={{ bottom: (cookieVisible || isTourDetails) ? '160px' : '30px' }}>
            {/* Floating Toggle Button that opens Tidio directly */}
            {!isTidioOpen && (
                <button 
                    className="chat-toggle" 
                    onClick={() => {
                        if (window.tidioChatApi) {
                            window.tidioChatApi.show();
                            window.tidioChatApi.open();
                            setShowNotification(false);
                        }
                    }} 
                    title="Live Chat" 
                    style={{ 
                        position: 'relative', 
                        background: '#3B7FBA',
                        boxShadow: '0 15px 40px rgba(59, 127, 186, 0.4)',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H6V21.08C6 21.6 6.64 21.87 7.03 21.52L10.87 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
                    </svg>
                    {showNotification && (
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
            )}
        </div>
    );
};

export default ChatBot;
