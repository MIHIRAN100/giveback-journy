import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { tourPackages } from '../data/tours';

// EMAILJS CONFIGURATION
const EMAILJS_SERVICE_ID = 'service_677'; // Placeholder - USER should replace
const EMAILJS_PUBLIC_KEY = 'public_677';   // Placeholder - USER should replace
const ADMIN_TEMPLATE_ID = 'booking_admin';
const CUSTOMER_TEMPLATE_ID = 'booking_customer';

const BookingPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const pkgId = searchParams.get('id');
    const initialPrice = searchParams.get('price');
    const initialPackage = searchParams.get('package');
    
    const selectedPkg = tourPackages.find(p => p.id === parseInt(pkgId)) || null;

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        birthday: '',
        tour_package: initialPackage || (selectedPkg ? selectedPkg.name : ''),
        booking_date: '',
        travelers: '1',
        joining_point: 'Katunayake Airport',
        price: initialPrice || (selectedPkg ? selectedPkg.price : ''),
        notes: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generateBookingId = () => {
        const random = Math.floor(100000 + Math.random() * 900000);
        return `BK-${random}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const booking_id = generateBookingId();
        const submitted_at = new Date().toLocaleString();

        const templateParams = {
            ...formData,
            booking_id,
            submitted_at
        };

        try {
            // Send to Admin
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                ADMIN_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            // Send to Customer
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                CUSTOMER_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            setStatus({ type: 'success', message: 'Booking submitted successfully!' });
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                birthday: '',
                tour_package: selectedPkg ? selectedPkg.name : '',
                booking_date: '',
                travelers: '1',
                joining_point: 'Katunayake Airport',
                price: initialPrice || (selectedPkg ? selectedPkg.price : ''),
                notes: ''
            });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="booking-page" style={{ 
            minHeight: '100vh', 
            background: '#f8f9fa', 
            padding: '120px 20px 60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    background: 'white',
                    borderRadius: '30px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: '1fr'
                }}
            >
                {/* Header Section */}
                <div style={{ 
                    background: 'var(--pitch-black)', 
                    padding: '40px', 
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 900 }}>Finalize Your Journey</h1>
                    <p style={{ opacity: 0.7, marginTop: '10px' }}>Fill in the details below to secure your Sri Lankan adventure.</p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} style={{ padding: '40px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="form-group">
                            <label style={labelStyle}>First Name *</label>
                            <input 
                                type="text" 
                                name="first_name" 
                                value={formData.first_name} 
                                onChange={handleChange} 
                                required 
                                style={inputStyle}
                                placeholder="John"
                            />
                        </div>
                        <div className="form-group">
                            <label style={labelStyle}>Last Name *</label>
                            <input 
                                type="text" 
                                name="last_name" 
                                value={formData.last_name} 
                                onChange={handleChange} 
                                required 
                                style={inputStyle}
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                        <div className="form-group">
                            <label style={labelStyle}>Email Address *</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                style={inputStyle}
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label style={labelStyle}>Phone Number *</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                                style={inputStyle}
                                placeholder="+94 XX XXX XXXX"
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                        <div className="form-group">
                            <label style={labelStyle}>Birthday *</label>
                            <input 
                                type="date" 
                                name="birthday" 
                                value={formData.birthday} 
                                onChange={handleChange} 
                                required 
                                style={inputStyle}
                            />
                        </div>
                        <div className="form-group">
                            <label style={labelStyle}>Booking Date *</label>
                            <input 
                                type="date" 
                                name="booking_date" 
                                value={formData.booking_date} 
                                onChange={handleChange} 
                                required 
                                style={inputStyle}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                        <div className="form-group">
                            <label style={labelStyle}>Tour Package *</label>
                            <input 
                                type="text" 
                                name="tour_package" 
                                value={formData.tour_package} 
                                onChange={handleChange}
                                required 
                                style={formData.tour_package && (selectedPkg || initialPackage) ? {...inputStyle, background: '#f0f0f0'} : inputStyle}
                                readOnly={!!(selectedPkg || initialPackage)}
                            />
                        </div>
                        <div className="form-group">
                            <label style={labelStyle}>Price *</label>
                            <input 
                                type="text" 
                                name="price" 
                                value={formData.price} 
                                onChange={handleChange}
                                required 
                                style={formData.price && initialPrice ? {...inputStyle, background: '#f0f0f0'} : inputStyle}
                                readOnly={!!(initialPrice)}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                        <div className="form-group">
                            <label style={labelStyle}>Number of Travelers *</label>
                            <select 
                                name="travelers" 
                                value={formData.travelers} 
                                onChange={handleChange} 
                                style={inputStyle}
                            >
                                {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
                                    <option key={n} value={n}>{n} {n === 1 ? 'Traveler' : 'Travelers'}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label style={labelStyle}>Joining Point *</label>
                            <select 
                                name="joining_point" 
                                value={formData.joining_point} 
                                onChange={handleChange} 
                                style={inputStyle}
                            >
                                <option value="Katunayake Airport">Katunayake Airport</option>
                                <option value="Kandy">Kandy</option>
                                <option value="Galle">Galle</option>
                                <option value="Hikkaduwa">Hikkaduwa</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group" style={{ marginTop: '20px' }}>
                        <label style={labelStyle}>Special Notes</label>
                        <textarea 
                            name="notes" 
                            value={formData.notes} 
                            onChange={handleChange} 
                            style={{...inputStyle, height: '100px', resize: 'none'}}
                            placeholder="Any special requirements, dietary needs, or requests?"
                        />
                    </div>

                    <AnimatePresence>
                        {status.message && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                style={{ 
                                    marginTop: '20px', 
                                    padding: '15px', 
                                    borderRadius: '10px',
                                    background: status.type === 'success' ? '#d4edda' : '#f8d7da',
                                    color: status.type === 'success' ? '#155724' : '#721c24',
                                    fontWeight: 600,
                                    textAlign: 'center'
                                }}
                            >
                                {status.message}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        style={{
                            width: '100%',
                            marginTop: '30px',
                            padding: '18px',
                            background: isSubmitting ? '#ccc' : 'var(--primary-green)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '15px',
                            fontSize: '1.1rem',
                            fontWeight: 800,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 20px rgba(29, 185, 84, 0.2)'
                        }}
                    >
                        {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#666',
    marginBottom: '8px'
};

const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    fontWeight: 600,
    outline: 'none',
    transition: 'border-color 0.3s ease'
};

export default BookingPage;
