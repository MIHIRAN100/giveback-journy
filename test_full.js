import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function test() {
    const { data, error } = await supabase
        .from('bookings')
        .insert({
            user_id: null,
            booking_reference: 'TEST-VOL-1234',
            customer_name: 'Test',
            customer_email: 'test@test.com',
            customer_phone: '12345',
            legacy_product_name: 'VOLUNTEER: test',
            legacy_product_type: 'volunteer',
            booking_date: '2026-10-10',
            participants: 1,
            amount_due: 0,
            amount_received: 0,
            currency: 'USD',
            payment_method: 'cash',
            payment_status: 'awaiting_payment',
            booking_status: 'pending',
            notes: 'Test'
        })
        .select('id')
        .single();
    console.log('Data:', data);
    console.log('Error:', error);
}
test();
