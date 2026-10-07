import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ScrollReveal from '../components/ScrollReveal';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { signUp } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }
        
        try {
            setError('');
            setMessage('');
            setLoading(true);
            const { error, data } = await signUp(email, password, fullName);
            
            if (error) throw error;
            
            if (data?.user?.identities?.length === 0) {
                 setError('An account with this email already exists.');
            } else {
                 setMessage('Success! Check your email to verify your account.');
                 setFullName(''); setEmail(''); setPassword(''); setConfirmPassword('');
            }
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
                                <h3>Create an Account</h3>
                                <p>Start planning your GiveBackJourney</p>
                            </div>
                            
                            {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
                            {message && <div style={{ color: 'green', marginBottom: '15px', textAlign: 'center' }}>{message}</div>}
                            
                            <form onSubmit={handleSubmit} className="premium-form">
                                <div className="input-group">
                                    <label>Full Name</label>
                                    <input 
                                        type="text" 
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                    />
                                </div>
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
                                        minLength="6"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Confirm Password</label>
                                    <input 
                                        type="password" 
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                
                                <button type="submit" className="btn-modern btn-black btn-block" disabled={loading}>
                                    {loading ? 'Creating Account...' : 'Sign Up'}
                                </button>
                            </form>
                            
                            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
                                <p>Already have an account? <Link to="/login" style={{ fontWeight: 'bold' }}>Log in</Link></p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Signup;
