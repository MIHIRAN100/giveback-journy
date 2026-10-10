import React from 'react';

const SpotifyAdCard = ({ margin = '0', pkg }) => {
    
    // Fallback if pkg is not provided
    const packageName = pkg?.name || 'Tour Package';
    
    // Parse base price
    let basePrice = 0;
    if (pkg?.price) {
        basePrice = parseInt(pkg.price.replace('$', '').replace(',', ''));
    } else {
        basePrice = 785; // Fallback
    }
    
    // Example breakdown logic based on total price
    const accommodation = Math.round(basePrice * 0.40);
    const transport = Math.round(basePrice * 0.30);
    const activities = Math.round(basePrice * 0.20);
    const fees = basePrice - accommodation - transport - activities;

    return (
        <div className="price-breakdown-card" style={{
            margin: margin,
            background: '#ffffff',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            fontFamily: 'Inter, Arial, sans-serif',
            border: '1px solid #eaeaea'
        }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.4rem', fontWeight: 800, color: '#333' }}>
                Price Breakdown
            </h3>
            <p style={{ margin: '0 0 20px 0', fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>
                For {packageName} ({pkg?.days || 'Custom Duration'})
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: '#555' }}>
                    <span>Accommodation & Stays</span>
                    <span style={{ fontWeight: 600, color: '#111' }}>${accommodation}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: '#555' }}>
                    <span>Transport & Guide</span>
                    <span style={{ fontWeight: 600, color: '#111' }}>${transport}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: '#555' }}>
                    <span>Activities & Experiences</span>
                    <span style={{ fontWeight: 600, color: '#111' }}>${activities}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: '#555' }}>
                    <span>Taxes & Service Fees</span>
                    <span style={{ fontWeight: 600, color: '#111' }}>${fees}</span>
                </div>
                
                <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '10px 0' }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 800, color: '#111' }}>
                    <span>Total Amount</span>
                    <span style={{ color: '#1ba352' }}>${basePrice}</span>
                </div>
            </div>
            
            <button style={{
                width: '100%',
                padding: '14px',
                marginTop: '25px',
                background: '#1ba352',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#158742'}
            onMouseOut={(e) => e.target.style.background = '#1ba352'}
            >
                Confirm & Proceed
            </button>
        </div>
    );
};

export default SpotifyAdCard;
