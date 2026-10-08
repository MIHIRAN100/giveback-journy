import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCurrency } from '../context/CurrencyContext';
import { supabase } from '../lib/supabase';
import ScrollReveal from '../components/ScrollReveal';

const bgColors = ['#e6f4ea', '#e8f0fe', '#fce8e6', '#f3e5f5'];

    const getCountryCode = (countryName) => {
        if (!countryName) return null;
        const map = {
            'sri lanka': 'lk', 'united states': 'us', 'usa': 'us', 'united kingdom': 'gb', 'uk': 'gb',
            'australia': 'au', 'canada': 'ca', 'germany': 'de', 'france': 'fr', 'italy': 'it',
            'spain': 'es', 'netherlands': 'nl', 'switzerland': 'ch', 'sweden': 'se', 'norway': 'no',
            'india': 'in', 'japan': 'jp', 'china': 'cn', 'brazil': 'br', 'new zealand': 'nz'
        };
        return map[countryName.toLowerCase().trim()] || null;
    };

const Account = () => {
    const { user, logOut } = useAuth();
    const { formatPrice } = useCurrency();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [uploadingImage, setUploadingImage] = useState(false);
    const [activeTab, setActiveTab] = useState('Overview');
    const [bookings, setBookings] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    
    const [profile, setProfile] = useState({
        full_name: '',
        email: '',
        phone: '',
        nationality: '',
        country: '',
        profile_photo: '',
        // Extended UI fields to match design
        address: '',
        city: '',
        postcode: '',
        dob: '',
        passport_id: ''
    });

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        
        const fetchData = async () => {
            try {
                setLoading(true);
                // Fetch Profile
                const { data: profileData, error: profileError } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single();
                    
                if (profileError) throw profileError;
                
                if (profileData) {
                    setProfile({
                        full_name: profileData.full_name || '',
                        email: profileData.email || user.email || '',
                        phone: profileData.phone || '',
                        nationality: profileData.nationality || '',
                        country: profileData.country || '',
                        profile_photo: profileData.profile_photo || '',
                        address: profileData.address || '',
                        city: profileData.city || '',
                        postcode: profileData.postcode || '',
                        dob: profileData.dob || '',
                        passport_id: profileData.passport_id || ''
                    });
                }

                // Fetch Bookings
                const { data: bookingsData, error: bookingsError } = await supabase
                    .from('bookings')
                    .select(`
                        id, booking_reference, booking_date, booking_status, payment_status, amount_due, currency, created_at, participants, legacy_product_name,
                        products ( name, featured_image, product_type )
                    `)
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false });

                if (bookingsError) throw bookingsError;
                setBookings(bookingsData || []);

            } catch (err) {
                console.error("Error loading data:", err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user, navigate]);

    const handleUpdate = async (e) => {
        if (e) e.preventDefault();
        try {
            setUpdating(true);
            setError('');
            setMessage('');
            
            // Note: address, city, postcode, dob, passport_id might not exist in the actual DB schema yet. 
            // If they don't, this will fail unless we just save the standard fields.
            // For now, we attempt to save standard fields. 
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
            setIsEditing(false);
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
                setProfile(prev => ({ ...prev, profile_photo: base64String }));
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

    const shortId = user?.id ? user.id.substring(0, 8).toUpperCase() : 'UNKNOWN';

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '90px', paddingBottom: '60px', fontFamily: 'Inter, sans-serif' }}>
            
            {/* Top Header & Tabs */}
            <div style={{ backgroundColor: '#1a2332', borderBottom: '1px solid #0f1620', padding: '20px 5% 0 5%' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                        <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '700', color: '#fff' }}>Profile</h1>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                            <button 
                                onClick={handleLogout}
                                style={{ padding: '8px 16px', backgroundColor: 'var(--primary-green)', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem' }}
                            >
                                Log Out
                            </button>
                            {profile.country && (
                                <div style={{ fontSize: '0.75rem', color: '#aaa', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '500' }}>
                                    {getCountryCode(profile.country) ? (
                                        <img src={`https://flagcdn.com/w20/${getCountryCode(profile.country)}.png`} alt={profile.country} style={{ width: '16px', height: '11px', borderRadius: '2px' }} />
                                    ) : (
                                        <i className="bi bi-geo-alt-fill" style={{ color: 'var(--primary-green)' }}></i>
                                    )}
                                    {profile.country}
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '30px', borderBottom: '1px solid transparent' }}>
                        {['Overview', 'Bookings', 'Payments'].map(tab => (
                            <div 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{ 
                                    paddingBottom: '15px', 
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: activeTab === tab ? '600' : '500',
                                    color: activeTab === tab ? '#111' : '#666',
                                    borderBottom: activeTab === tab ? '3px solid var(--primary-green)' : '3px solid transparent', color: activeTab === tab ? 'var(--primary-green)' : '#aaa',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: '1400px', margin: '30px auto', padding: '0 5%', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                
                {/* LEFT SIDEBAR (Profile Info) */}
                <div style={{ width: '100%', maxWidth: '320px', flexShrink: 0, backgroundColor: '#fff', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', height: 'fit-content' }}>
                    
                    {/* User Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <div style={{ position: 'relative', width: '85px', height: '85px' }}>
                            {profile.profile_photo ? (
                                <img src={profile.profile_photo} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', objectFit: 'cover' }} />
                            ) : (
                                <div style={{ width: '100%', height: '100%', borderRadius: '50%', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', background: 'linear-gradient(135deg, #111 0%, #333 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                    {getInitials(profile.full_name)}
                                </div>
                            )}
                            <button 
                                onClick={() => fileInputRef.current.click()}
                                style={{
                                    position: 'absolute', bottom: '-5px', right: '-5px',
                                    width: '24px', height: '24px', borderRadius: '50%',
                                    backgroundColor: '#fff', border: '1px solid #eaeaea',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                }}
                            >
                                <i className="bi bi-camera-fill" style={{ fontSize: '10px', color: '#111', fontWeight: 'bold' }}></i>
                            </button>
                            <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" style={{ display: 'none' }} />
                        </div>
                        <div>
                            <h2 style={{ margin: '0 0 4px 0', fontSize: '1.2rem', fontWeight: '700', color: '#111' }}>
                                {profile.full_name || 'Traveler'}
                            </h2>
                            <div style={{ fontSize: '0.8rem', color: '#888' }}>#TRV{shortId}</div>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid #eaeaea', paddingTop: '20px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700', color: '#111' }}>About</h3>
                            <button onClick={() => setIsEditing(!isEditing)} style={{ background: 'none', border: 'none', color: '#d32f2f', fontSize: '0.8rem', cursor: 'pointer', fontWeight: '600' }}>
                                {isEditing ? 'Cancel' : 'Edit'}
                            </button>
                        </div>
                        
                        {isEditing ? (
                            <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <input type="text" placeholder="Full Name" value={profile.full_name} onChange={e => setProfile({...profile, full_name: e.target.value})} style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.85rem' }} />
                                <input type="tel" placeholder="Phone" value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.85rem' }} />
                                <button type="submit" disabled={updating} style={{ padding: '8px', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>{updating ? 'Saving...' : 'Save'}</button>
                            </form>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#333' }}>
                                    <i className="bi bi-telephone" style={{ color: '#888', fontSize: '1rem' }}></i> 
                                    <span>Phone: <span style={{ color: '#111', fontWeight: 'bold' }}>{profile.phone || 'Not provided'}</span></span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#333' }}>
                                    <i className="bi bi-envelope" style={{ color: '#888', fontSize: '1rem' }}></i> 
                                    <span>Email: <span style={{ color: '#111', fontWeight: 'bold' }}>{profile.email}</span></span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div style={{ borderTop: '1px solid #eaeaea', paddingTop: '20px', marginBottom: '20px' }}>
                        <h3 style={{ margin: '0 0 15px 0', fontSize: '0.95rem', fontWeight: '700', color: '#111' }}>Address</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#333' }}>
                                <i className="bi bi-house-door" style={{ color: '#888', fontSize: '1rem' }}></i> 
                                <span>Country: <span style={{ color: '#111', fontWeight: 'bold' }}>{profile.country || 'Not provided'}</span></span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#333' }}>
                                <i className="bi bi-building" style={{ color: '#888', fontSize: '1rem' }}></i> 
                                <span>Nationality: <span style={{ color: '#111', fontWeight: 'bold' }}>{profile.nationality || 'Not provided'}</span></span>
                            </div>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid #eaeaea', paddingTop: '20px', marginBottom: '20px' }}>
                        <h3 style={{ margin: '0 0 15px 0', fontSize: '0.95rem', fontWeight: '700', color: '#111' }}>Traveler details</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#333' }}>
                                <i className="bi bi-calendar-event" style={{ color: '#888', fontSize: '1rem' }}></i> 
                                <span>Member since: <span style={{ color: '#111', fontWeight: 'bold' }}>{new Date().getFullYear()}</span></span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#333' }}>
                                <i className="bi bi-person-badge" style={{ color: '#888', fontSize: '1rem' }}></i> 
                                <span>Account Status: <span style={{ color: '#111', fontWeight: 'bold' }}>Active</span></span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#333' }}>
                                <i className="bi bi-briefcase" style={{ color: '#888', fontSize: '1rem' }}></i> 
                                <span>Total Bookings: <span style={{ color: '#111', fontWeight: 'bold' }}>{bookings.length}</span></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT AREA */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    
                    {activeTab === 'Overview' && (
                        <>
                            {/* Top Table Area (Mimicking "Job Information") -> We use it for "Upcoming Journeys" */}
                            <div style={{ marginBottom: '40px', backgroundColor: '#fff', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>Journey Itinerary</h3>
                                    <button onClick={() => navigate('/packages')} style={{ background: 'none', border: 'none', color: '#d32f2f', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '600' }}>
                                        + Find Tours
                                    </button>
                                </div>
                                
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                                        <thead>
                                            <tr style={{ color: '#888', borderBottom: '1px solid #eaeaea' }}>
                                                <th style={{ padding: '12px 0', fontWeight: '600' }}>TOUR NAME</th>
                                                <th style={{ padding: '12px 0', fontWeight: '600' }}>STATUS</th>
                                                <th style={{ padding: '12px 0', fontWeight: '600' }}>TRAVEL DATE</th>
                                                <th style={{ padding: '12px 0', fontWeight: '600' }}>TRAVELERS</th>
                                                <th style={{ padding: '12px 0', fontWeight: '600' }}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.slice(0, 4).map((booking, idx) => (
                                                <tr key={idx} style={{ borderBottom: '1px solid #f5f5f5' }}>
                                                    <td style={{ padding: '15px 0', color: '#111', fontWeight: 'bold' }}>
                                                        {booking.products?.name || booking.legacy_product_name || 'Custom Booking'}
                                                    </td>
                                                    <td style={{ padding: '15px 0' }}>
                                                        <span style={{ 
                                                            padding: '4px 10px', 
                                                            borderRadius: '20px', 
                                                            fontSize: '0.75rem', 
                                                            fontWeight: 'bold', 
                                                            textTransform: 'uppercase',
                                                            backgroundColor: booking.booking_status === 'confirmed' ? '#dcfce7' : '#fef3c7',
                                                            color: booking.booking_status === 'confirmed' ? '#166534' : '#92400e'
                                                        }}>
                                                            {booking.booking_status}
                                                        </span>
                                                    </td>
                                                    <td style={{ padding: '15px 0', color: '#111', fontWeight: 'bold' }}>{new Date(booking.booking_date).toLocaleDateString()}</td>
                                                    <td style={{ padding: '15px 0', color: '#111', fontWeight: 'bold' }}>{booking.participants}</td>
                                                    <td style={{ padding: '15px 0', color: '#666', textAlign: 'right' }}><i className="bi bi-three-dots"></i></td>
                                                </tr>
                                            ))}
                                            {bookings.length === 0 && (
                                                <tr>
                                                    <td colSpan="5" style={{ padding: '20px 0', textAlign: 'center', color: '#888' }}>No journeys planned yet.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Bottom Split Area (Mimicking "Activity" and "Compensation") */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                                
                                {/* Bookings Activity */}
                                <div style={{ backgroundColor: 'transparent', padding: '10px 0' }}>
                                    <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#166534' }}>Booking Activity</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        {bookings.slice(0, 3).map((booking, idx) => (
                                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: bgColors[idx % 4], overflow: 'hidden', flexShrink: 0 }}>
                                                    {booking.products?.featured_image ? (
                                                        <img src={booking.products?.featured_image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="tour" />
                                                    ) : (
                                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}><i className="bi bi-geo-alt"></i></div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '0.85rem', color: '#111', fontWeight: '600' }}>
                                                        <i className="bi bi-geo-alt" style={{ marginRight: '5px', color: '#5C3BBA' }}></i>{booking.products?.name || booking.legacy_product_name || 'Custom Booking'} <span style={{ color: '#888', fontWeight: '400' }}>booked on {new Date(booking.created_at).toLocaleDateString()}</span>
                                                    </div>
                                                    <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '3px' }}>
                                                        Ref: {booking.booking_reference || booking.id.split('-')[0]}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {bookings.length === 0 && <div style={{ fontSize: '0.85rem', color: '#888' }}>No recent activity.</div>}
                                        {bookings.length > 0 && <button onClick={() => setActiveTab('Bookings')} style={{ background: 'none', border: 'none', color: '#d32f2f', fontSize: '0.85rem', fontWeight: '600', padding: 0, textAlign: 'left', cursor: 'pointer', marginTop: '10px' }}>View all</button>}
                                    </div>
                                </div>

                                {/* Payment History */}
                                <div style={{ backgroundColor: 'transparent', padding: '10px 0' }}>
                                    <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#9a3412' }}>Payment History</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                        {bookings.slice(0, 3).map((booking, idx) => (
                                            <div key={idx}>
                                                <div style={{ fontSize: '0.85rem', color: '#111', fontWeight: '600', marginBottom: '4px' }}>
                                                    {booking.amount_due > 0 ? formatPrice(booking.amount_due) : 'Fully Paid'} 
                                                    <span style={{ color: '#888', fontWeight: '400' }}> for {(booking.products?.name || booking.legacy_product_name || 'Custom Booking').substring(0, 15)}...</span>
                                                </div>
                                                <div style={{ fontSize: '0.75rem', color: '#888' }}>
                                                    Status: <span style={{ textTransform: 'capitalize', color: booking.payment_status === 'paid' ? 'green' : 'inherit' }}>{booking.payment_status.replace('_', ' ')}</span>
                                                </div>
                                            </div>
                                        ))}
                                        {bookings.length === 0 && <div style={{ fontSize: '0.85rem', color: '#888' }}>No payment history.</div>}
                                        {bookings.length > 0 && <button onClick={() => setActiveTab('Payments')} style={{ background: 'none', border: 'none', color: '#d32f2f', fontSize: '0.85rem', fontWeight: '600', padding: 0, textAlign: 'left', cursor: 'pointer', marginTop: '5px' }}>View all</button>}
                                    </div>
                                </div>

                            </div>
                        </>
                    )}

                    {activeTab === 'Bookings' && (
                        <div>
                            <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>All Bookings</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {bookings.map((booking, idx) => (
                                    <div key={idx} style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <div>
                                                <div style={{ fontSize: '1rem', color: '#111', fontWeight: '600', marginBottom: '5px' }}>{booking.products?.name || booking.legacy_product_name || 'Custom Booking'}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#666' }}>Ref: {booking.booking_reference || booking.id.split('-')[0]} • Date: {new Date(booking.booking_date).toLocaleDateString()}</div>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '0.85rem', fontWeight: '600', color: booking.booking_status === 'confirmed' ? 'green' : '#888', textTransform: 'capitalize', marginBottom: '5px' }}>{booking.booking_status}</div>
                                            <button onClick={() => navigate(`/contact?ref=${booking.booking_reference}`)} style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px', background: '#fff', fontSize: '0.8rem', cursor: 'pointer' }}>Contact Support</button>
                                        </div>
                                    </div>
                                ))}
                                {bookings.length === 0 && <div style={{ color: '#888', padding: '20px 0' }}>No bookings found.</div>}
                            </div>
                        </div>
                    )}

                    {activeTab === 'Payments' && (
                        <div>
                            <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '700', color: '#111' }}>All Payments</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {bookings.map((booking, idx) => (
                                    <div key={idx} style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <div style={{ fontSize: '1rem', color: '#111', fontWeight: '600', marginBottom: '5px' }}>Payment for {booking.products?.name || booking.legacy_product_name || 'Custom Booking'}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Ref: {booking.booking_reference || booking.id.split('-')[0]}</div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111', marginBottom: '5px' }}>{booking.amount_due > 0 ? formatPrice(booking.amount_due) : 'Fully Paid'}</div>
                                            <div style={{ fontSize: '0.85rem', fontWeight: '600', color: booking.payment_status === 'paid' ? 'green' : '#d32f2f', textTransform: 'capitalize' }}>{booking.payment_status.replace('_', ' ')}</div>
                                        </div>
                                    </div>
                                ))}
                                {bookings.length === 0 && <div style={{ color: '#888', padding: '20px 0' }}>No payments found.</div>}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Account;
