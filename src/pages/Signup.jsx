import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { countries } from '../data/countries';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);
    
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { signUp, logInWithProvider } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!agreed) {
            return setError("Please agree to the Terms & Conditions");
        }
        
        if (!country) {
            return setError("Please select your nationality");
        }
        
        if (!phone) {
            return setError("Please enter your phone number");
        }
        
        try {
            setError('');
            setMessage('');
            setLoading(true);
            const fullName = `${firstName} ${lastName}`.trim();
            const { error, data } = await signUp(email, password, fullName, country, phone);
            // Note: you might also want to save the `country` to user profile in Supabase here.
            
            if (error) throw error;
            
            if (data?.user?.identities?.length === 0) {
                 setError('An account with this email already exists.');
            } else {
                 setMessage('Success! Check your email to verify your account.');
                 setFirstName(''); setLastName(''); setEmail(''); setPassword(''); setCountry('');
            }
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
                    <h1 style={styles.title}>Create an account</h1>
                    <p style={styles.subtitle}>
                        Already have an account? <Link to="/login" style={styles.loginLink}>Log in</Link>
                    </p>

                    {error && <div style={{ color: '#ff6b6b', backgroundColor: '#fee2e2', padding: '10px', borderRadius: '8px', marginBottom: '15px', fontSize: '14px' }}>{error}</div>}
                    {message && <div style={{ color: '#059669', backgroundColor: '#d1fae5', padding: '10px', borderRadius: '8px', marginBottom: '15px', fontSize: '14px' }}>{message}</div>}

                    <form onSubmit={handleSubmit} style={styles.form}>
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
                        
                        <select 
                            style={{...styles.input, appearance: 'none', background: '#F9FAFB url("data:image/svg+xml;utf8,<svg fill=%27%23374151%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/></svg>") no-repeat right 10px center'}} 
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select your nationality</option>
                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>

                        <input
                            style={styles.input}
                            type="tel"
                            placeholder="Phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />

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
                                minLength="6"
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

                        <div style={styles.checkboxContainer}>
                            <input
                                type="checkbox"
                                id="terms"
                                style={styles.checkbox}
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <label htmlFor="terms" style={styles.checkboxLabel}>
                                I agree to the <Link to="/terms-and-conditions" style={styles.termsLink}>Terms & Conditions</Link>
                            </label>
                        </div>

                        <button type="submit" style={styles.submitBtn} disabled={loading}>
                            {loading ? 'Creating...' : 'Create account'}
                        </button>
                    </form>

                    <div style={styles.dividerContainer}>
                        <div style={styles.dividerLine}></div>
                        <span style={styles.dividerText}>Or register with</span>
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
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        backgroundColor: '#F3F4F6',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
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
        fontWeight: '600',
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
    row: {
        display: 'flex',
        gap: '16px'
    },
    input: {
        flex: 1,
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
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginTop: '4px',
        marginBottom: '4px'
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
    termsLink: {
        color: '#3b7fba',
        textDecoration: 'none',
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

export default Signup;
