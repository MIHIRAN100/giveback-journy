import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import bgImage from '../assets/b7f8179e-7e30-41bb-bb99-477f25c24d60.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { logIn, logInWithProvider } = useAuth();
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
        <div style={styles.page}>
            <div style={styles.card}>


                {/* Right Side: Form */}
                <div style={styles.rightSide}>
                    <h1 style={styles.title}>Log in to your account</h1>
                    <p style={styles.subtitle}>
                        Don't have an account? <Link to="/signup" style={styles.loginLink}>Sign up</Link>
                    </p>

                    {error && <div style={{ color: '#ff6b6b', backgroundColor: '#fee2e2', padding: '10px', borderRadius: '8px', marginBottom: '15px', fontSize: '14px' }}>{error}</div>}

                    <form onSubmit={handleSubmit} style={styles.form}>
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
                                placeholder="Enter your password"
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

                        <div style={styles.optionsRow}>
                            <div style={styles.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    id="remember"
                                    style={styles.checkbox}
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label htmlFor="remember" style={styles.checkboxLabel}>
                                    Remember me
                                </label>
                            </div>
                            <Link to="/forgot-password" style={styles.forgotLink}>Forgot password?</Link>
                        </div>

                        <button type="submit" style={styles.submitBtn} disabled={loading}>
                            {loading ? 'Logging in...' : 'Log in'}
                        </button>
                    </form>

                    <div style={styles.dividerContainer}>
                        <div style={styles.dividerLine}></div>
                        <span style={styles.dividerText}>Or log in with</span>
                        <div style={styles.dividerLine}></div>
                    </div>

                    <div style={styles.socialRow}>
                        <button type="button" onClick={() => logInWithProvider('google')} style={styles.socialBtn}>
                            <svg width="20" height="20" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                <path fill="none" d="M0 0h48v48H0z"></path>
                            </svg>
                            Google
                        </button>
                        <button type="button" style={styles.socialBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#374151">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" fill="none" />
                                <path d="M16.365 9.915c-.412-1.895-1.92-3.13-3.83-3.13-2.095 0-3.696 1.41-3.696 3.615v1.442H6.96v2.793h1.878v7.412a10.024 10.024 0 0 0 3.328.002v-7.414h2.24l.354-2.793h-2.594v-1.12c0-.685.163-.996.953-.996h1.246V9.915z" />
                                <path d="M16.036 10.275c-.015-1.63 1.332-2.42 1.392-2.46-1.025-1.503-2.618-1.72-3.18-1.745-1.353-.135-2.646.79-3.336.79-.693 0-1.764-.78-2.88-.758-1.44.02-2.775.836-3.52 2.13-1.506 2.61-.384 6.48 1.085 8.605.72 1.045 1.563 2.213 2.684 2.17 1.083-.042 1.496-.697 2.802-.697 1.303 0 1.68.697 2.805.674 1.144-.02 1.868-1.066 2.584-2.112.825-1.206 1.164-2.375 1.182-2.435-.027-.01-2.285-.875-2.298-3.412M14.62 5.093c.594-.72 1.01-1.74 1.01-2.75-.01.21-1.05.25-1.96.84-.71.46-1.19 1.47-1.16 2.45 0 .21 1.04.22 1.95-.53l.16-.01" fill="#374151"/>
                            </svg>
                            Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        backgroundColor: '#F3F4F6', // Outer background (light gray)
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        padding: '20px'
    },
    card: {
        display: 'flex',
        width: '100%',
        maxWidth: '450px',
        minHeight: '600px',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
    },
    leftSide: {
        flex: 1,
        position: 'relative',
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${bgImage}) center/cover no-repeat`,
        padding: '40px',
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
    backButton: {
        color: 'white',
        textDecoration: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        backdropFilter: 'blur(10px)'
    },
    leftBottom: {
        paddingBottom: '20px'
    },
    leftTitle: {
        fontSize: '32px',
        fontWeight: '500',
        lineHeight: '1.2',
        marginBottom: '20px'
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
        padding: '50px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    title: {
        color: '#111827',
        fontSize: '36px',
        fontWeight: '500',
        margin: '0 0 10px 0'
    },
    subtitle: {
        color: '#6B7280',
        fontSize: '15px',
        margin: '0 0 30px 0'
    },
    loginLink: {
        color: '#3b7fba',
        textDecoration: 'none',
        fontWeight: '500'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    input: {
        backgroundColor: '#F9FAFB',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        padding: '14px 16px',
        color: '#111827',
        fontSize: '15px',
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
        right: '16px',
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
        marginTop: '4px',
        marginBottom: '4px'
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    checkbox: {
        width: '18px',
        height: '18px',
        accentColor: '#3b7fba',
        cursor: 'pointer'
    },
    checkboxLabel: {
        color: '#4B5563',
        fontSize: '14px'
    },
    forgotLink: {
        color: '#3b7fba',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '500'
    },
    submitBtn: {
        backgroundColor: '#3b7fba',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '16px',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'opacity 0.2s'
    },
    dividerContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '30px 0',
        gap: '15px'
    },
    dividerLine: {
        flex: 1,
        height: '1px',
        backgroundColor: '#E5E7EB'
    },
    dividerText: {
        color: '#6B7280',
        fontSize: '14px'
    },
    socialRow: {
        display: 'flex',
        gap: '16px'
    },
    socialBtn: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        backgroundColor: '#F3F4F6',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        padding: '14px',
        color: '#374151',
        fontSize: '15px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
    }
};

export default Login;
