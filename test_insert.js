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

async function testInsert() {
    console.log("Testing guest insert...");
    const { data, error } = await supabase.from('bookings').insert({
        booking_reference: 'GBJ-TEST-0001',
        customer_name: 'Test Agent',
        customer_email: 'test@example.com',
        amount_due: 100,
        amount_received: 0,
        currency: 'USD',
        payment_status: 'awaiting_payment',
        booking_status: 'pending'
    }).select('id');
    
    if (error) {
        console.error("Insert failed:", error);
    } else {
        console.log("Insert success:", data);
    }
}
testInsert();
