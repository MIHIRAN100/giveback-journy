import React from 'react';

const GlanceItem = ({ icon, label, value }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        textAlign: 'center',
        border: '1px solid rgba(0,0,0,0.02)'
    }}>
        <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            background: 'rgba(29, 185, 84, 0.1)',
            color: 'var(--primary-green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            marginBottom: '15px'
        }}>
            <i className={`bi ${icon}`}></i>
        </div>
        <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: '#888', letterSpacing: '1px', marginBottom: '5px' }}>{label}</span>
        <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--pitch-black)' }}>{value}</span>
    </div>
);

const SriLankaGlance = () => {
    return (
        <section style={{ padding: '80px 5%', background: '#fcfcfc' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <span className="about-tag">Island Stats</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Sri Lanka at a Glance.</h2>
                </div>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '25px'
                }}>
                    <GlanceItem icon="bi-geo-alt" label="Capital" value="Sri Jayawardenepura" />
                    <GlanceItem icon="bi-translate" label="Languages" value="Sinhala, Tamil, English" />
                    <GlanceItem icon="bi-cash-coin" label="Currency" value="LKR (Rupee)" />
                    <GlanceItem icon="bi-thermometer-half" label="Climate" value="Tropical (27°C - 30°C)" />
                    <GlanceItem icon="bi-clock-history" label="Time Zone" value="GMT +5:30" />
                </div>
            </div>
        </section>
    );
};

export default SriLankaGlance;
