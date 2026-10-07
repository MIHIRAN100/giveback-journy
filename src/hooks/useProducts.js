import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export const useProducts = (type = null) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                let query = supabase.from('products').select('*').eq('active', true);
                
                if (type) {
                    query = query.eq('product_type', type);
                }

                const { data, error: fetchError } = await query;
                
                if (fetchError) {
                    throw fetchError;
                }
                
                if (data) {
                    setProducts(data);
                }
            } catch (err) {
                console.error("Error fetching products:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [type]);

    return { products, loading, error };
};
