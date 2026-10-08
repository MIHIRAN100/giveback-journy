import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const AuthModal = () => {
    const { isAuthModalOpen, setAuthModalOpen, authModalView, setAuthModalView, logIn, signUp, logInWithProvider } = useAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    if (!isAuthModalOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            if (authModalView === 'login') {
                const { error } = await logIn(email, password);
                if (error) throw error;
            } else {
                const { error } = await signUp(email, password, fullName);
                if (error) throw error;
            }
            setAuthModalOpen(false);
            navigate('/account');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#fff', width: '400px', maxWidth: '90%', borderRadius: '16px', padding: '30px', position: 'relative', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', maxHeight: '90vh', overflowY: 'auto' }}>
                <button onClick={() => setAuthModalOpen(false)} style={{ position: 'absolute', top: '15px', left: '15px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#666' }}>&times;</button>
                
                <h3 style={{ textAlign: 'center', marginTop: '0', fontSize: '1.4rem', fontWeight: 'bold' }}>
                    {authModalView === 'login' ? 'Log in or sign up' : 'Sign up'}
                </h3>
                
                {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center', fontSize: '0.9rem' }}>{error}</div>}
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                    {authModalView === 'signup' && (
                        <div>
                            <input type="text" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} required style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '8px' }} />
                        </div>
                    )}
                    <div>
                        <input type="email" placeholder="EMAIL ADDRESS" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '12px', border: '1px solid #0066cc', borderRadius: '8px', color: '#0066cc', fontWeight: 'bold' }} />
                    </div>
                    <div>
                        <input type="password" placeholder="PASSWORD" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '8px' }} />
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '12px', background: '#fff', color: '#0066cc', border: '2px solid #0066cc', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }} disabled={loading}>
                        {loading ? 'Processing...' : (authModalView === 'login' ? 'Continue with email' : 'Sign up')}
                    </button>
                </form>

                <div style={{ margin: '25px 0', textAlign: 'center', position: 'relative' }}>
                    <hr style={{ borderTop: '1px solid #eee' }} />
                    <span style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#fff', padding: '0 15px', color: '#888', fontSize: '0.9rem' }}>OR</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <button onClick={() => logInWithProvider('google')} type="button" style={{ padding: '12px', border: '1px solid #e2e8f0', borderRadius: '30px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', color: '#111' }}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ width: '24px', height: '24px' }}>
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                        Continue with Google
                    </button>
                </div>

                <div style={{ marginTop: '25px', textAlign: 'center', fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.5' }}>
                    By continuing, you log in or sign up and accept our <Link to="/terms-and-conditions" onClick={() => setAuthModalOpen(false)} style={{ color: '#111', textDecoration: 'underline' }}>Terms and Conditions</Link>. See our <Link to="/privacy-policy" onClick={() => setAuthModalOpen(false)} style={{ color: '#111', textDecoration: 'underline' }}>Privacy Policy</Link>.
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
                    {authModalView === 'login' ? (
                        <p style={{ marginTop: '10px' }}>Don't have an account? <span onClick={() => setAuthModalView('signup')} style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}>Sign up</span></p>
                    ) : (
                        <p style={{ marginTop: '10px' }}>Already have an account? <span onClick={() => setAuthModalView('login')} style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}>Log in</span></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
