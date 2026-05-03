import React from 'react';
import { useCompare } from '../context/CompareContext';
import { Link } from 'react-router-dom';

const Compare = () => {
    const { compareList, removeFromCompare, clearCompare } = useCompare();

    if (compareList.length === 0) {
        return (
            <div style={{ padding: '150px 5%', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px' }}>Your Comparison List is Empty</h2>
                <p style={{ color: '#666', marginBottom: '40px' }}>Add some journeys to compare their routes, durations, and prices.</p>
                <Link to="/packages" className="btn-modern btn-black">Browse Packages</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '120px 5% 80px', background: '#fcfcfc', minHeight: '100vh' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                    <div>
                        <span style={{ color: 'var(--primary-green)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>Decision Maker</span>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0', letterSpacing: '-0.04em' }}>Compare Your <span style={{ color: 'var(--primary-green)' }}>Journeys</span></h1>
                        <p style={{ color: '#666', marginTop: '10px', fontSize: '1.1rem' }}>Review your {compareList.length} selected Sri Lankan experiences side-by-side.</p>
                    </div>
                    <button 
                        onClick={clearCompare}
                        style={{ background: 'white', border: '1px solid #eee', padding: '12px 30px', borderRadius: '12px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'all 0.3s ease' }}
                    >
                        <i className="bi bi-trash3" style={{ marginRight: '8px' }}></i> Clear List
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(compareList.length, 4)}, 1fr)`, gap: '30px', justifyItems: 'start' }}>
                    {compareList.map((tour) => (
                        <div key={tour.id} className="compare-card" style={{ 
                            background: 'white', 
                            borderRadius: '32px', 
                            padding: '0', 
                            boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                            border: '1px solid rgba(0,0,0,0.03)',
                            position: 'relative',
                            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            maxWidth: '380px',
                            margin: '0',
                            width: '100%',
                            overflow: 'hidden'
                        }}>
                            <button 
                                onClick={() => removeFromCompare(tour.id)}
                                style={{ 
                                    position: 'absolute', 
                                    top: '25px', 
                                    right: '25px', 
                                    background: 'rgba(255,255,255,0.9)', 
                                    border: 'none', 
                                    width: '36px', 
                                    height: '36px', 
                                    borderRadius: '50%', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    cursor: 'pointer', 
                                    zIndex: 10,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }}
                            >
                                <i className="bi bi-x" style={{ fontSize: '1.5rem', color: '#111' }}></i>
                            </button>
                            
                            <div style={{ height: '240px', borderRadius: '0', overflow: 'hidden', marginBottom: '25px' }}>
                                <img src={tour.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={tour.name} />
                            </div>
                            
                            <div style={{ padding: '0 20px 30px' }}>
                                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                                    <span style={{ background: 'rgba(29, 185, 84, 0.1)', color: 'var(--primary-green)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800 }}>{tour.days}</span>
                                    <span style={{ background: '#f8f9fa', color: '#666', padding: '4px 12px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800 }}>Popular</span>
                                </div>
                                
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '15px', color: '#111', lineHeight: 1.3 }}>{tour.name}</h3>
                                
                                <div style={{ marginBottom: '30px' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#999', fontWeight: 700, display: 'block' }}>Trip Total</span>
                                    <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--primary-green)' }}>{tour.price}</span>
                                </div>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                    <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '16px' }}>
                                        <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#999', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>Top Highlights</span>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                            {tour.inclusions && tour.inclusions.slice(0, 3).map((inc, i) => (
                                                <li key={i} style={{ fontSize: '0.9rem', color: '#444', marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                                    <i className="bi bi-check2-circle" style={{ color: 'var(--primary-green)', fontWeight: 900 }}></i>
                                                    {inc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <Link to={`/package/${tour.id}`} className="btn-modern btn-black" style={{ flex: 1, textAlign: 'center', padding: '15px' }}>View Detail</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Compare;
