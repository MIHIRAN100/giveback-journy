import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ target, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const duration = 2000;
                    const startTime = performance.now();
                    const animate = (now) => {
                        const progress = Math.min((now - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const glanceData = [
    {
        icon: 'bi-people-fill',
        label: 'Population',
        value: <AnimatedNumber target={22} suffix="M+" />,
        color: '#1DB954',
        desc: 'Friendly people'
    },
    {
        icon: 'bi-globe-asia-australia',
        label: 'Area',
        value: <AnimatedNumber target={65610} suffix=" km²" />,
        color: '#2196F3',
        desc: 'Island nation'
    },
    {
        icon: 'bi-building',
        label: 'Capital',
        value: 'Sri Jayawardenepura',
        color: '#FF9800',
        desc: 'Kotte'
    },
    {
        icon: 'bi-translate',
        label: 'Languages',
        value: 'Sinhala · Tamil · English',
        color: '#9C27B0',
        desc: 'Trilingual nation'
    },
    {
        icon: 'bi-cash-coin',
        label: 'Currency',
        value: 'LKR (Rupee)',
        color: '#4CAF50',
        desc: '≈ $0.003 USD'
    },
    {
        icon: 'bi-thermometer-sun',
        label: 'Climate',
        value: '27°C – 30°C',
        color: '#FF5722',
        desc: 'Tropical year-round'
    },
    {
        icon: 'bi-clock-history',
        label: 'Time Zone',
        value: 'GMT +5:30',
        color: '#607D8B',
        desc: 'IST (UTC+5:30)'
    },
    {
        icon: 'bi-tree-fill',
        label: 'UNESCO Sites',
        value: <AnimatedNumber target={8} />,
        color: '#E91E63',
        desc: 'World Heritage'
    },
    {
        icon: 'bi-cup-hot-fill',
        label: 'Famous Export',
        value: 'Ceylon Tea',
        color: '#FF9800',
        desc: 'World renowned brew'
    },
    {
        icon: 'bi-plug-fill',
        label: 'Plug Type',
        value: 'Type D & G',
        color: '#795548',
        desc: '230V / 50Hz'
    },
    {
        icon: 'bi-passport-fill',
        label: 'Visa',
        value: 'ETA Online',
        color: '#3F51B5',
        desc: 'Free for 30 days'
    },
    {
        icon: 'bi-telephone-fill',
        label: 'Emergency',
        value: '119 / 110',
        color: '#F44336',
        desc: 'Police & Ambulance'
    },
    {
        icon: 'bi-heart-fill',
        label: 'Tipping',
        value: '10% Service',
        color: '#FF4081',
        desc: 'Appreciated, not mandatory'
    },
    {
        icon: 'bi-droplet-fill',
        label: 'Water',
        value: 'Bottled / Filtered',
        color: '#03A9F4',
        desc: 'Avoid tap water'
    }
];

const SriLankaGlance = () => {
    return (
        <section className="glance-section">
            <div className="glance-container">
                {/* Header */}
                <div className="glance-header">
                    <span className="about-tag">Island Stats</span>
                    <h2 className="glance-title">Sri Lanka at a Glance</h2>
                    <p className="glance-subtitle">
                        Everything you need to know before your journey to the pearl of the Indian Ocean.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="glance-grid">
                    {glanceData.map((item, i) => (
                        <div
                            key={i}
                            className={`glance-card ${i === 0 ? 'glance-card-featured' : ''}`}
                        >
                            <div
                                className="glance-icon"
                                style={{ background: `${item.color}15`, color: item.color }}
                            >
                                <i className={`bi ${item.icon}`}></i>
                            </div>
                            <div className="glance-card-content">
                                <span className="glance-label">{item.label}</span>
                                <span className="glance-value">{item.value}</span>
                                <span className="glance-desc">{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SriLankaGlance;
