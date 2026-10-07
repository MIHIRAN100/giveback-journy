import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function test() {
    const { data, error } = await supabase
        .from('bookings')
        .insert({ booking_reference: 'TEST1234', amount_due: 0 })
        .select('id')
        .single();
    console.log('Data:', data);
    console.log('Error:', error);
}
test();