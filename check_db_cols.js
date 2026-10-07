import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Read .env file for Supabase credentials
const envPath = path.resolve('.env');
let envContent = '';
try {
    envContent = fs.readFileSync(envPath, 'utf-8');
} catch (e) {
    console.error("Could not read .env", e);
    process.exit(1);
}

const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.*)/);

if (!urlMatch || !keyMatch) {
    console.error("Could not find Supabase credentials in .env");
    process.exit(1);
}

const supabaseUrl = urlMatch[1].trim();
const supabaseKey = keyMatch[1].trim();

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    console.log("Checking bookings...");
    const { data, error } = await supabase.from('bookings').select('booking_reference, customer_name').order('created_at', { ascending: false }).limit(5);
    
    if (error) {
        console.error("Query Error:", error);
    } else {
        console.log("Latest bookings:", JSON.stringify(data, null, 2));
    }
}

check();
