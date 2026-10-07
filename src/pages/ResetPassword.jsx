import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ScrollReveal from '../components/ScrollReveal';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { updatePassword } = useAuth();
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
            const { error } = await updatePassword(password);
            if (error) throw error;
            setMessage('Password updated successfully!');
            setTimeout(() => {
                navigate('/login');
            }, 3000);
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
                                <h3>Set New Password</h3>
                                <p>Please enter your new password below</p>
                            </div>
                            
                            {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
                            {message && <div style={{ color: 'green', marginBottom: '15px', textAlign: 'center' }}>{message}</div>}
                            
                            <form onSubmit={handleSubmit} className="premium-form">
                                <div className="input-group">
                                    <label>New Password</label>
                                    <input 
                                        type="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength="6"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Confirm New Password</label>
                                    <input 
                                        type="password" 
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                
                                <button type="submit" className="btn-modern btn-black btn-block" disabled={loading}>
                                    {loading ? 'Updating...' : 'Update Password'}
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default ResetPassword;
