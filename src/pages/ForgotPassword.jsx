import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ScrollReveal from '../components/ScrollReveal';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { resetPassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setMessage('');
            setError('');
            setLoading(true);
            const { error } = await resetPassword(email);
            if (error) throw error;
            setMessage('Check your inbox for further instructions.');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <section className="contact-modern-container" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="contact-form-column" style={{ width: '100%', maxWidth: '500px' }}>
                    <ScrollReveal>
                        <div className="modern-form-card">
                            <div className="form-header" style={{ textAlign: 'center' }}>
                                <h3>Password Reset</h3>
                                <p>Enter your email and we'll send you a link to reset your password</p>
                            </div>
                            
                            {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
                            {message && <div style={{ color: 'green', marginBottom: '15px', textAlign: 'center' }}>{message}</div>}
                            
                            <form onSubmit={handleSubmit} className="premium-form">
                                <div className="input-group">
                                    <label>Email Address</label>
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                
                                <button type="submit" className="btn-modern btn-black btn-block" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send Reset Link'}
                                </button>
                            </form>
                            
                            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
                                <p><Link to="/login" style={{ fontWeight: 'bold' }}>Back to Login</Link></p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default ForgotPassword;
