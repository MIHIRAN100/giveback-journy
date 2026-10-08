const fs = require('fs');
const path = require('path');

const accountJsx = `import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import ScrollReveal from '../components/ScrollReveal';

const Account = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
    
    const [profile, setProfile] = useState({
        full_name: '',
        email: '',
        phone: '',
        nationality: '',
        country: '',
        profile_photo: ''
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
                        profile_photo: data.profile_photo || ''
                    });
                }
            } catch (err) {
                console.error("Error loading profile:", err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [user, navigate]);

    const handleUpdate = async (e) => {
        if (e) e.preventDefault();
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
                profile_photo: profile.profile_photo,
                updated_at: new Date(),
            };
            
            const { error } = await supabase.from('profiles').upsert(updates);
            if (error) throw error;
            
            setMessage('Profile updated successfully!');
            setEditMode(false);
            setTimeout(() => setMessage(''), 3000);
        } catch (err) {
            setError(err.message);
        } finally {
            setUpdating(false);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploadingImage(true);
        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64String = reader.result;
            
            try {
                // Update local state immediately
                setProfile(prev => ({ ...prev, profile_photo: base64String }));
                
                // Save to Supabase immediately
                const updates = {
                    id: user.id,
                    profile_photo: base64String,
                    updated_at: new Date(),
                };
                const { error } = await supabase.from('profiles').upsert(updates);
                if (error) throw error;
            } catch (err) {
                console.error("Error saving image:", err.message);
                setError("Failed to save profile picture.");
            } finally {
                setUploadingImage(false);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    const getInitials = (name) => {
        if (!name) return user?.email?.charAt(0).toUpperCase() || 'U';
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    if (loading) {
        return <div style={{ paddingTop: '150px', textAlign: 'center' }}>Loading profile...</div>;
    }

    // Split name for display
    const nameParts = profile.full_name ? profile.full_name.split(' ') : [];
    const firstName = nameParts[0] || '';
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    return (
        <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                    
                    {/* LEFT COLUMN: Profile Card */}
                    <div style={{ flex: '1 1 300px', maxWidth: '350px' }}>
                        <ScrollReveal>
                            <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
                                
                                {/* Avatar Header Section */}
                                <div style={{ padding: '30px 20px', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
                                    <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 15px auto' }}>
                                        {profile.profile_photo ? (
                                            <img 
                                                src={profile.profile_photo} 
                                                alt="Profile" 
                                                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} 
                                            />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#3b7fba', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                                {getInitials(profile.full_name)}
                                            </div>
                                        )}
                                        
                                        <button 
                                            onClick={() => fileInputRef.current.click()}
                                            disabled={uploadingImage}
                                            style={{
                                                position: 'absolute',
                                                bottom: '0',
                                                right: '5px',
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                backgroundColor: '#5C3BBA',
                                                color: '#fff',
                                                border: '2px solid #fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: uploadingImage ? 'wait' : 'pointer',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                                            }}
                                        >
                                            <i className={uploadingImage ? "bi bi-hourglass-split" : "bi bi-pencil-fill"} style={{ fontSize: '12px' }}></i>
                                        </button>
                                        <input 
                                            type="file" 
                                            ref={fileInputRef} 
                                            onChange={handleImageUpload} 
                                            accept="image/*" 
                                            style={{ display: 'none' }} 
                                        />
                                    </div>
                                    
                                    <h2 style={{ margin: '0 0 5px 0', fontSize: '1.4rem', fontWeight: 'bold', color: '#111' }}>
                                        {profile.full_name || 'My Account'}
                                    </h2>
                                    <button 
                                        onClick={() => setEditMode(!editMode)}
                                        style={{ background: 'none', border: 'none', color: '#5C3BBA', fontWeight: '600', cursor: 'pointer', padding: '5px' }}
                                    >
                                        {editMode ? 'Cancel editing' : 'Edit basic info'}
                                    </button>
                                </div>

                                {/* Info List Section */}
                                <div style={{ padding: '20px' }}>
                                    {error && <div style={{ color: 'red', fontSize: '0.9rem', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
                                    {message && <div style={{ color: 'green', fontSize: '0.9rem', marginBottom: '15px', textAlign: 'center' }}>{message}</div>}
                                    
                                    <form onSubmit={handleUpdate}>
                                        <div style={{ marginBottom: '15px' }}>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#111', marginBottom: '5px' }}>First name</label>
                                            {editMode ? (
                                                <input type="text" value={firstName} onChange={(e) => setProfile({...profile, full_name: e.target.value + ' ' + lastName})} style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '6px' }} />
                                            ) : (
                                                <div style={{ fontSize: '0.95rem', color: '#555' }}>{firstName || '+ Add'}</div>
                                            )}
                                        </div>

                                        <div style={{ marginBottom: '15px' }}>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#111', marginBottom: '5px' }}>Last name</label>
                                            {editMode ? (
                                                <input type="text" value={lastName} onChange={(e) => setProfile({...profile, full_name: firstName + ' ' + e.target.value})} style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '6px' }} />
                                            ) : (
                                                <div style={{ fontSize: '0.95rem', color: '#555' }}>{lastName || '+ Add'}</div>
                                            )}
                                        </div>

                                        <div style={{ marginBottom: '15px' }}>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#111', marginBottom: '5px' }}>Mobile number</label>
                                            {editMode ? (
                                                <input type="tel" value={profile.phone} onChange={(e) => setProfile({...profile, phone: e.target.value})} style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '6px' }} />
                                            ) : (
                                                <div style={{ fontSize: '0.95rem', color: '#555' }}>{profile.phone || '+ Add'}</div>
                                            )}
                                        </div>

                                        <div style={{ marginBottom: '15px' }}>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#111', marginBottom: '5px' }}>Email address</label>
                                            <div style={{ fontSize: '0.95rem', color: '#555', wordBreak: 'break-all' }}>{profile.email}</div>
                                        </div>
                                        
                                        <div style={{ marginBottom: '15px' }}>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#111', marginBottom: '5px' }}>Nationality</label>
                                            {editMode ? (
                                                <input type="text" value={profile.nationality} onChange={(e) => setProfile({...profile, nationality: e.target.value})} style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '6px' }} />
                                            ) : (
                                                <div style={{ fontSize: '0.95rem', color: '#555' }}>{profile.nationality || '+ Add'}</div>
                                            )}
                                        </div>

                                        <div style={{ marginBottom: '25px' }}>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#111', marginBottom: '5px' }}>Country</label>
                                            {editMode ? (
                                                <input type="text" value={profile.country} onChange={(e) => setProfile({...profile, country: e.target.value})} style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '6px' }} />
                                            ) : (
                                                <div style={{ fontSize: '0.95rem', color: '#555' }}>{profile.country || '+ Add'}</div>
                                            )}
                                        </div>

                                        {editMode && (
                                            <button type="submit" disabled={updating} style={{ width: '100%', padding: '10px', backgroundColor: '#5C3BBA', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' }}>
                                                {updating ? 'Saving...' : 'Save Profile'}
                                            </button>
                                        )}
                                    </form>
                                    
                                    <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '15px', marginTop: '10px', textAlign: 'center' }}>
                                        <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#d32f2f', fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem' }}>
                                            Log out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* RIGHT COLUMN: Bookings */}
                    <div style={{ flex: '2 1 500px' }}>
                        <ScrollReveal delay={100}>
                            <UserBookings userId={user.id} />
                        </ScrollReveal>
                    </div>

                </div>
            </div>
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
                    .select(\`
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
                    \`)
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
            <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                <i className="bi bi-calendar-x" style={{ fontSize: '2.5rem', color: '#ccc', marginBottom: '15px', display: 'block' }}></i>
                <h3 style={{ margin: '0 0 10px 0', color: '#111' }}>No bookings found</h3>
                <p style={{ color: '#666', margin: 0 }}>You don't have any upcoming or past journeys yet.</p>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ margin: '0', fontSize: '1.4rem', fontWeight: 'bold', color: '#111' }}>My Bookings</h3>
            
            {bookings.map(booking => (
                <div key={booking.id} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px', 
                    padding: '20px', 
                    border: '1px solid #f0f0f0', 
                    borderRadius: '12px',
                    background: '#fff',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#eee', flexShrink: 0 }}>
                        {booking.products?.featured_image ? (
                            <img src={booking.products.featured_image} alt="Tour" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa', fontSize: '1.5rem' }}>
                                <i className="bi bi-geo-alt"></i>
                            </div>
                        )}
                    </div>
                    
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#5C3BBA', marginBottom: '4px', textTransform: 'uppercase' }}>
                            REF: {booking.booking_reference || booking.id.split('-')[0]}
                        </div>
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: '#111' }}>{booking.products?.name || booking.legacy_product_name || 'Custom Booking'}</h4>
                        
                        <div style={{ display: 'flex', gap: '15px', fontSize: '0.85rem', color: '#555', flexWrap: 'wrap', alignItems: 'center' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <i className="bi bi-calendar"></i> Travel: {new Date(booking.booking_date).toLocaleDateString()}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <i className="bi bi-people"></i> {booking.participants} Traveler{booking.participants > 1 ? 's' : ''}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', textTransform: 'capitalize' }}>
                                <i className="bi bi-info-circle"></i> Status: <strong style={{ color: booking.booking_status === 'confirmed' ? '#2e7d32' : 'inherit' }}>{booking.booking_status}</strong>
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', textTransform: 'capitalize' }}>
                                <i className="bi bi-credit-card"></i> Payment: <strong>{booking.payment_status.replace('_', ' ')}</strong>
                            </span>
                        </div>
                    </div>
                    
                    <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#111', textAlign: 'right' }}>
                        {booking.amount_due > 0 ? \`\${booking.currency} \${booking.amount_due}\` : 'Paid'}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Account;
`;

const filePath = path.join(__dirname, 'src', 'pages', 'Account.jsx');
fs.writeFileSync(filePath, accountJsx);
console.log('Account.jsx replaced successfully with Fresha-style layout!');
