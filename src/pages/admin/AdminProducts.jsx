import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

const AdminProducts = ({ type }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const isVolunteer = type === 'volunteer';
    const title = isVolunteer ? 'Volunteer Packages' : 'Tours';

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .eq('product_type', type)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setProducts(data || []);
        } catch (err) {
            console.error('Error fetching products:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [type]);

    const handleCreateNew = () => {
        setCurrentProduct({
            name: '',
            slug: '',
            product_type: type,
            short_description: '',
            price: 0,
            active: true,
            featured: false,
            details: {}
        });
        setIsEditing(true);
    };

    const handleEdit = (product) => {
        setCurrentProduct(product);
        setIsEditing(true);
    };

    const handleToggleActive = async (id, currentActive) => {
        try {
            const { error } = await supabase
                .from('products')
                .update({ active: !currentActive, updated_at: new Date().toISOString() })
                .eq('id', id);
            
            if (error) throw error;
            fetchProducts();
        } catch (err) {
            console.error("Error updating status:", err);
            alert("Failed to update status");
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...currentProduct,
                updated_at: new Date().toISOString()
            };

            if (currentProduct.id) {
                // Update
                const { error } = await supabase.from('products').update(payload).eq('id', currentProduct.id);
                if (error) throw error;
            } else {
                // Insert
                const { error } = await supabase.from('products').insert([payload]);
                if (error) throw error;
            }

            setIsEditing(false);
            setCurrentProduct(null);
            fetchProducts();
        } catch (err) {
            console.error("Error saving product:", err);
            alert("Failed to save product.");
        }
    };

    if (isEditing) {
        return (
            <div>
                <button onClick={() => setIsEditing(false)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', marginBottom: '20px' }}>
                    <i className="bi bi-arrow-left"></i> Back to {title}
                </button>
                <h1 style={{ marginBottom: '30px', fontSize: '2rem' }}>{currentProduct.id ? 'Edit' : 'Create'} {isVolunteer ? 'Package' : 'Tour'}</h1>
                
                <form onSubmit={handleSave} style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
                            <input type="text" value={currentProduct.name} onChange={e => setCurrentProduct({...currentProduct, name: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} required />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Slug (URL-friendly)</label>
                            <input type="text" value={currentProduct.slug} onChange={e => setCurrentProduct({...currentProduct, slug: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} required />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Price</label>
                            <input type="number" step="0.01" value={currentProduct.price} onChange={e => setCurrentProduct({...currentProduct, price: parseFloat(e.target.value)})} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} required />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Currency</label>
                            <input type="text" value={currentProduct.currency || 'USD'} onChange={e => setCurrentProduct({...currentProduct, currency: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Short Description</label>
                        <textarea value={currentProduct.short_description || ''} onChange={e => setCurrentProduct({...currentProduct, short_description: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', minHeight: '80px' }} />
                    </div>

                    {isVolunteer ? (
                        <div style={{ marginBottom: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '8px' }}>
                            <h4 style={{ marginBottom: '15px' }}>Volunteer Specifics (Stored in Details)</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Project Category</label>
                                    <input type="text" value={currentProduct.details?.project || ''} onChange={e => setCurrentProduct({...currentProduct, details: {...currentProduct.details, project: e.target.value}})} style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #ccc' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Minimum Duration</label>
                                    <input type="text" value={currentProduct.details?.min_duration || ''} onChange={e => setCurrentProduct({...currentProduct, details: {...currentProduct.details, min_duration: e.target.value}})} style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #ccc' }} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ marginBottom: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '8px' }}>
                            <h4 style={{ marginBottom: '15px' }}>Tour Specifics (Stored in Details)</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Meeting Point</label>
                                    <input type="text" value={currentProduct.details?.meeting_point || ''} onChange={e => setCurrentProduct({...currentProduct, details: {...currentProduct.details, meeting_point: e.target.value}})} style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #ccc' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Destinations (Comma separated)</label>
                                    <input type="text" value={currentProduct.details?.destinations || ''} onChange={e => setCurrentProduct({...currentProduct, details: {...currentProduct.details, destinations: e.target.value}})} style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #ccc' }} />
                                </div>
                            </div>
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <input type="checkbox" checked={currentProduct.active} onChange={e => setCurrentProduct({...currentProduct, active: e.target.checked})} />
                            <span>Active (Published)</span>
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <input type="checkbox" checked={currentProduct.featured} onChange={e => setCurrentProduct({...currentProduct, featured: e.target.checked})} />
                            <span>Featured</span>
                        </label>
                    </div>

                    <button type="submit" style={{ padding: '12px 24px', background: 'var(--pitch-black)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                        Save Product
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ fontSize: '2rem', margin: 0 }}>{title}</h1>
                <button onClick={handleCreateNew} style={{ padding: '10px 20px', background: 'var(--primary-green)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                    + Create New
                </button>
            </div>

            {loading ? <p>Loading...</p> : (
                <div style={{ background: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #eee' }}>
                                <th style={{ padding: '15px' }}>Name</th>
                                <th style={{ padding: '15px' }}>Price</th>
                                <th style={{ padding: '15px' }}>Status</th>
                                <th style={{ padding: '15px', textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length === 0 ? (
                                <tr><td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: '#666' }}>No products found.</td></tr>
                            ) : products.map(p => (
                                <tr key={p.id} style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>{p.name}</td>
                                    <td style={{ padding: '15px' }}>{p.currency || 'USD'} {p.price}</td>
                                    <td style={{ padding: '15px' }}>
                                        <button 
                                            onClick={() => handleToggleActive(p.id, p.active)}
                                            style={{ 
                                                padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', border: 'none', cursor: 'pointer',
                                                background: p.active ? '#e6f4ea' : '#ffebee',
                                                color: p.active ? '#1e8e3e' : '#d32f2f'
                                            }}>
                                            {p.active ? 'Published' : 'Hidden'}
                                        </button>
                                    </td>
                                    <td style={{ padding: '15px', textAlign: 'right' }}>
                                        <button onClick={() => handleEdit(p)} style={{ padding: '6px 12px', background: '#eee', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminProducts;
