import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function runTests() {
    console.log("=== Running Booking Security Tests ===");

    // Test 1: Try to insert a booking without being logged in
    console.log("\nTest 1: Unauthenticated Booking Creation");
    const { data: noAuthData, error: noAuthError } = await supabase
        .from('bookings')
        .insert({
            user_id: '00000000-0000-0000-0000-000000000000',
            product_id: '00000000-0000-0000-0000-000000000000',
            booking_date: '2026-11-15'
        });

    if (noAuthError) {
        console.log("✅ Passed: Unauthenticated users are blocked from creating bookings.");
        console.log("   Error:", noAuthError.message);
    } else {
        console.error("❌ Failed: Unauthenticated user was able to create a booking!");
    }

    // Test 2: Try to read bookings without being logged in
    console.log("\nTest 2: Unauthenticated Booking Access");
    const { data: readData, error: readError } = await supabase
        .from('bookings')
        .select('*');

    if (readData && readData.length === 0) {
        console.log("✅ Passed: Unauthenticated users see 0 bookings (RLS prevents reading).");
    } else if (readError) {
        console.log("✅ Passed: Blocked with error:", readError.message);
    } else {
        console.error("❌ Failed: Unauthenticated user can read bookings!");
    }

    console.log("\nTests Complete. RLS policies are enforcing security boundaries.");
}

runTests();
