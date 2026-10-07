import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import ScrollReveal from '../components/ScrollReveal';

const Account = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    
    const [profile, setProfile] = useState({
        full_name: '',
        email: '',
        phone: '',
        nationality: '',
        country: '',
    });

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        
        const fetchProfile = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single();
                    
                if (error) {
                    throw error;
                }
                
                if (data) {
                    setProfile({
                        full_name: data.full_name || '',
                        email: data.email || user.email || '',
                        phone: data.phone || '',
                        nationality: data.nationality || '',
                        country: data.country || '',
                    });
                }
            } catch (err) {
                console.error("Error loading profile:", err.message);
                // Profile might not exist yet if trigger failed or delayed
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [user, navigate]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        
        try {
            setUpdating(true);
            setError('');
            setMessage('');
            
            const updates = {
                id: user.id,
                full_name: profile.full_name,
                phone: profile.phone,
                nationality: profile.nationality,
                country: profile.country,
                updated_at: new Date(),
            };
            
            const { error } = await supabase.from('profiles').upsert(updates);
            
            if (error) throw error;
            
            setMessage('Profile updated successfully!');
            setTimeout(() => setMessage(''), 3000);
        } catch (err) {
            setError(err.message);
        } finally {
            setUpdating(false);
        }
    };

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    if (loading) {
        return <div style={{ paddingTop: '150px', textAlign: 'center' }}>Loading profile...</div>;
    }

    return (
        <div className="contact-page" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <section className="contact-modern-container">
                <div className="contact-grid" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="contact-form-column" style={{ margin: '0 auto', width: '100%', maxWidth: '700px' }}>
                        <ScrollReveal>
                            <div className="modern-form-card">
                                <div className="form-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <h3>My Account</h3>
                                        <p>Manage your profile and settings</p>
                                    </div>
                                    <button onClick={handleLogout} className="btn-modern" style={{ padding: '8px 16px', background: '#f5f5f5', color: '#333', border: '1px solid #ddd' }}>
                                        Log Out
                                    </button>
                                </div>
                                
                                {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
                                {message && <div style={{ color: 'green', marginBottom: '15px' }}>{message}</div>}
                                
                                <form onSubmit={handleUpdate} className="premium-form">
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div className="input-group">
                                            <label>Full Name</label>
                                            <input 
                                                type="text" 
                                                value={profile.full_name}
                                                onChange={(e) => setProfile({...profile, full_name: e.target.value})}
                                            />
                                        </div>
                                        <div className="input-group">
                                            <label>Email Address</label>
                                            <input 
                                                type="email" 
                                                value={profile.email}
                                                disabled
                                                style={{ backgroundColor: '#f9f9f9', color: '#666', cursor: 'not-allowed' }}
                                            />
                                        </div>
                                        <div className="input-group">
                                            <label>Phone Number</label>
                                            <input 
                                                type="tel" 
                                                value={profile.phone}
                                                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                                                placeholder="+1 234 567 8900"
                                            />
                                        </div>
                                        <div className="input-group">
                                            <label>Nationality</label>
                                            <input 
                                                type="text" 
                                                value={profile.nationality}
                                                onChange={(e) => setProfile({...profile, nationality: e.target.value})}
                                            />
                                        </div>
                                        <div className="input-group" style={{ gridColumn: 'span 2' }}>
                                            <label>Country of Residence</label>
                                            <input 
                                                type="text" 
                                                value={profile.country}
                                                onChange={(e) => setProfile({...profile, country: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    
                                    <button type="submit" className="btn-modern btn-black btn-block" disabled={updating} style={{ marginTop: '20px' }}>
                                        {updating ? 'Saving...' : 'Save Profile Information'}
                                    </button>
                                </form>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="modern-form-card" style={{ marginTop: '30px' }}>
                                <div className="form-header">
                                    <h3>My Bookings</h3>
                                    <p>Your upcoming and past journeys</p>
                                </div>
                                <UserBookings userId={user.id} />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

const UserBookings = ({ userId }) => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                // Fetch bookings linked to this user, including product details
                const { data, error } = await supabase
                    .from('bookings')
                    .select(`
                        id,
                        booking_reference,
                        booking_date,
                        booking_status,
                        payment_status,
                        amount_due,
                        currency,
                        legacy_product_name,
                        created_at,
                        participants,
                        products (
                            name,
                            featured_image,
                            product_type
                        ),
                        volunteer_details (
                            volunteer_status
                        )
                    `)
                    .eq('user_id', userId)
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setBookings(data || []);
            } catch (err) {
                console.error("Error fetching bookings:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [userId]);

    if (loading) return <div style={{ textAlign: 'center', padding: '20px' }}>Loading bookings...</div>;

    if (bookings.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '30px 10px', backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
                <i className="bi bi-calendar-x" style={{ fontSize: '2rem', color: '#ccc', marginBottom: '10px', display: 'block' }}></i>
                <p style={{ color: '#666', margin: 0 }}>You don't have any bookings yet.</p>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {bookings.map(booking => (
                <div key={booking.id} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px', 
                    padding: '15px', 
                    border: '1px solid #eee', 
                    borderRadius: '12px',
                    background: '#fff',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#eee' }}>
                        {booking.products?.featured_image ? (
                            <img src={booking.products.featured_image} alt="Tour" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa', fontSize: '1.5rem' }}>
                                <i className="bi bi-geo-alt"></i>
                            </div>
                        )}
                    </div>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3b7fba', marginBottom: '2px', textTransform: 'uppercase' }}>
                            {booking.booking_reference || booking.id.split('-')[0]}
                        </div>
                        <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>{booking.products?.name || booking.legacy_product_name || 'Custom Booking'}</h4>
                        <div style={{ display: 'flex', gap: '15px', fontSize: '0.8rem', color: '#666', flexWrap: 'wrap', alignItems: 'center' }}>
                            <span><i className="bi bi-calendar"></i> Travel: {new Date(booking.booking_date).toLocaleDateString()}</span>
                            <span><i className="bi bi-people"></i> {booking.participants} Traveler{booking.participants > 1 ? 's' : ''}</span>
                            <span><i className="bi bi-clock-history"></i> Booked: {new Date(booking.created_at).toLocaleDateString()}</span>
                            
                            <span style={{ textTransform: 'capitalize' }}>
                                <i className="bi bi-info-circle"></i> Status: <strong style={{ color: booking.booking_status === 'confirmed' ? 'green' : 'inherit' }}>{booking.booking_status}</strong>
                            </span>
                            <span style={{ textTransform: 'capitalize' }}>
                                <i className="bi bi-credit-card"></i> Payment: <strong>{booking.payment_status.replace('_', ' ')}</strong>
                            </span>
                            {booking.volunteer_details && (
                                <span style={{ textTransform: 'capitalize' }}>
                                    <i className="bi bi-heart"></i> Volunteer: <strong style={{ color: '#6a1b9a' }}>{booking.volunteer_details.volunteer_status.replace(/_/g, ' ')}</strong>
                                </span>
                            )}
                        </div>
                    </div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#111' }}>
                        {booking.amount_due > 0 ? `${booking.currency} ${booking.amount_due}` : 'Free'}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Account;
