import React from 'react';

const AdminPlaceholder = ({ title }) => {
    return (
        <div>
            <h1 style={{ marginBottom: '30px', fontSize: '2rem' }}>{title}</h1>
            <div style={{ background: 'white', borderRadius: '16px', padding: '50px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <i className="bi bi-tools" style={{ fontSize: '3rem', color: '#ccc', marginBottom: '20px', display: 'block' }}></i>
                <h2>Under Construction</h2>
                <p style={{ color: '#666', maxWidth: '400px', margin: '0 auto' }}>
                    The {title} module is currently being built. The database foundations are already live!
                </p>
            </div>
        </div>
    );
};

export default AdminPlaceholder;
