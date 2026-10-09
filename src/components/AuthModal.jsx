import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from '../assets/b7f8179e-7e30-41bb-bb99-477f25c24d60.jpg';
import { countries } from '../data/countries';

const AuthModal = () => {
    const { isAuthModalOpen, setAuthModalOpen, authModalView, setAuthModalView, logIn, signUp, logInWithProvider } = useAuth();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    if (!isAuthModalOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (authModalView === 'signup' && !agreed) {
            return setError("Please agree to the Terms & Conditions");
        }

        if (authModalView === 'signup' && !country) {
            return setError("Please select your country");
        }
        
        try {
            setError('');
            setLoading(true);
            if (authModalView === 'login') {
                const { error } = await logIn(email, password);
                if (error) throw error;
            } else {
                const fullName = `${firstName} ${lastName}`.trim();
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
        <div style={styles.overlay} onClick={() => setAuthModalOpen(false)}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>


                {/* Right Side: Form */}
                <div style={styles.rightSide}>
                    <button onClick={() => setAuthModalOpen(false)} style={styles.closeBtn}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <h1 style={styles.title}>
                        {authModalView === 'login' ? 'Log in to your account' : 'Create an account'}
                    </h1>
                    <p style={styles.subtitle}>
                        {authModalView === 'login' ? (
                            <>Don't have an account? <span onClick={() => setAuthModalView('signup')} style={styles.link}>Sign up</span></>
                        ) : (
                            <>Already have an account? <span onClick={() => setAuthModalView('login')} style={styles.link}>Log in</span></>
                        )}
                    </p>

                    {error && <div style={{ color: '#ff6b6b', backgroundColor: '#fee2e2', padding: '10px', borderRadius: '8px', marginBottom: '15px', fontSize: '14px' }}>{error}</div>}

                    <form onSubmit={handleSubmit} style={styles.form}>
                        {authModalView === 'signup' && (
                            <div style={styles.row}>
                                <input
                                    style={styles.input}
                                    type="text"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <input
                                    style={styles.input}
                                    type="text"
                                    placeholder="Last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        {authModalView === 'signup' && (
                            <select 
                                style={{...styles.input, appearance: 'none', background: '#F9FAFB url("data:image/svg+xml;utf8,<svg fill=%27%23374151%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/></svg>") no-repeat right 14px center'}} 
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select your country</option>
                                {countries.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        )}

                        <input
                            style={styles.input}
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div style={styles.passwordContainer}>
                            <input
                                style={{...styles.input, width: '100%'}}
                                type={showPassword ? "text" : "password"}
                                placeholder={authModalView === 'login' ? "Enter your password" : "Create a password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button 
                                type="button" 
                                style={styles.eyeBtn}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {showPassword ? (
                                        <>
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                            <line x1="1" y1="1" x2="23" y2="23"></line>
                                        </>
                                    ) : (
                                        <>
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </>
                                    )}
                                </svg>
                            </button>
                        </div>

                        {authModalView === 'signup' ? (
                            <div style={styles.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    id="modal-terms"
                                    style={styles.checkbox}
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                />
                                <label htmlFor="modal-terms" style={styles.checkboxLabel}>
                                    I agree to the <Link to="/terms-and-conditions" onClick={() => setAuthModalOpen(false)} style={styles.link}>Terms & Conditions</Link>
                                </label>
                            </div>
                        ) : (
                            <div style={styles.optionsRow}>
                                <div style={styles.checkboxContainer}>
                                    <input
                                        type="checkbox"
                                        id="modal-remember"
                                        style={styles.checkbox}
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <label htmlFor="modal-remember" style={styles.checkboxLabel}>
                                        Remember me
                                    </label>
                                </div>
                                <Link to="/forgot-password" onClick={() => setAuthModalOpen(false)} style={styles.forgotLink}>Forgot password?</Link>
                            </div>
                        )}

                        <button type="submit" style={styles.submitBtn} disabled={loading}>
                            {loading ? 'Processing...' : (authModalView === 'login' ? 'Log in' : 'Create account')}
                        </button>
                    </form>

                    <div style={styles.dividerContainer}>
                        <div style={styles.dividerLine}></div>
                        <span style={styles.dividerText}>Or {authModalView === 'login' ? 'log in' : 'register'} with</span>
                        <div style={styles.dividerLine}></div>
                    </div>

                    <div style={styles.socialRow}>
                        <button type="button" onClick={() => { logInWithProvider('google'); setAuthModalOpen(false); }} style={styles.socialBtn}>
                            <svg width="20" height="20" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                <path fill="none" d="M0 0h48v48H0z"></path>
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    modal: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        maxWidth: '450px',
        minHeight: '550px',
        borderRadius: '16px',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    leftSide: {
        flex: 1,
        position: 'relative',
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${bgImage}) center/cover no-repeat`,
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: 'white'
    },
    leftTopBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
        letterSpacing: '2px'
    },
    leftBottom: {
        paddingBottom: '10px'
    },
    leftTitle: {
        fontSize: '28px',
        fontWeight: '500',
        lineHeight: '1.2',
        marginBottom: '15px'
    },
    dots: {
        display: 'flex',
        gap: '8px'
    },
    dot: {
        width: '24px',
        height: '3px',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: '2px'
    },
    dotActive: {
        backgroundColor: 'white'
    },
    rightSide: {
        flex: 1,
        padding: '40px 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        position: 'relative'
    },
    closeBtn: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'none',
        border: 'none',
        color: '#6B7280',
        cursor: 'pointer',
        padding: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'color 0.2s'
    },
    title: {
        color: '#111827',
        fontSize: '28px',
        fontWeight: '600',
        margin: '0 0 8px 0'
    },
    subtitle: {
        color: '#6B7280',
        fontSize: '14px',
        margin: '0 0 25px 0'
    },
    link: {
        color: '#3b7fba',
        textDecoration: 'none',
        cursor: 'pointer',
        fontWeight: '500'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
    },
    row: {
        display: 'flex',
        gap: '14px'
    },
    input: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        padding: '12px 14px',
        color: '#111827',
        fontSize: '14px',
        outline: 'none',
        boxSizing: 'border-box',
        width: '100%',
        transition: 'border-color 0.2s'
    },
    passwordContainer: {
        position: 'relative',
        width: '100%'
    },
    eyeBtn: {
        position: 'absolute',
        right: '14px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '2px',
        marginBottom: '2px'
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    checkbox: {
        width: '16px',
        height: '16px',
        accentColor: '#3b7fba',
        cursor: 'pointer'
    },
    checkboxLabel: {
        color: '#4B5563',
        fontSize: '13px'
    },
    forgotLink: {
        color: '#3b7fba',
        textDecoration: 'none',
        fontSize: '13px',
        fontWeight: '500'
    },
    submitBtn: {
        backgroundColor: '#3b7fba',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '14px',
        fontSize: '15px',
        fontWeight: '500',
        cursor: 'pointer',
        marginTop: '6px',
        transition: 'opacity 0.2s'
    },
    dividerContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '20px 0',
        gap: '15px'
    },
    dividerLine: {
        flex: 1,
        height: '1px',
        backgroundColor: '#E5E7EB'
    },
    dividerText: {
        color: '#6B7280',
        fontSize: '13px'
    },
    socialRow: {
        display: 'flex',
        gap: '14px'
    },
    socialBtn: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        backgroundColor: '#F3F4F6',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        padding: '12px',
        color: '#374151',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
    }
};

export default AuthModal;
