const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function testDelete() {
    // 1. Fetch one booking
    const { data: bookings, error: fetchErr } = await supabase.from('bookings').select('id, booking_status').limit(1);
    console.log("Bookings fetched:", bookings, fetchErr);
    
    if (bookings && bookings.length > 0) {
        const testId = bookings[0].id;
        console.log("Attempting to delete ID:", testId);
        
        // 2. Attempt a fake delete (we won't actually commit this if we can avoid it, but let's just see if delete returns an error)
        const { data, error } = await supabase.from('bookings').delete().eq('id', testId).select();
        console.log("Delete result:", { data, error });
    }
}
testDelete();
