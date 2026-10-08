const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function checkSchema() {
    // try to select discount_given from a single row
    const { data, error } = await supabase.from('bookings').select('discount_given').limit(1);
    console.log("Result:", data, error);
}
checkSchema();
