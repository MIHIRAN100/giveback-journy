import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const envPath = path.resolve('.env');
let envContent = '';
try { envContent = fs.readFileSync(envPath, 'utf-8'); } catch (e) {}

const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabaseUrl = urlMatch[1].trim();
const supabaseKey = keyMatch[1].trim();
const supabase = createClient(supabaseUrl, supabaseKey);

async function testQuery() {
    console.log("Testing dashboard query...");
    const { data, error } = await supabase.from('bookings').select(`
        id,
        booking_reference,
        booking_date,
        booking_status,
        payment_status,
        amount_due,
        currency,
        legacy_product_name,
        participants,
        products (
            name,
            featured_image,
            product_type
        ),
        volunteer_details (
            volunteer_status
        )
    `).limit(5);
    
    console.log("Data:", data);
    console.log("Error:", error);
}

testQuery();