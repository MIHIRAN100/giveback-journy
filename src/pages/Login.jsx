import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ScrollReveal from '../components/ScrollReveal';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { logIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            const { error } = await logIn(email, password);
            if (error) throw error;
            navigate('/account');
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
                                <h3>Welcome Back</h3>
                                <p>Log in to manage your journeys</p>
                            </div>
                            
                            {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
                            
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
                                <div className="input-group">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                
                                <button type="submit" className="btn-modern btn-black btn-block" disabled={loading}>
                                    {loading ? 'Logging In...' : 'Log In'}
                                </button>
                            </form>
                            
                            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
                                <p><Link to="/forgot-password" style={{ color: '#555', textDecoration: 'underline' }}>Forgot Password?</Link></p>
                                <p style={{ marginTop: '10px' }}>Don't have an account? <Link to="/signup" style={{ fontWeight: 'bold' }}>Sign up</Link></p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Login;
