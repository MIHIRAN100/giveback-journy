import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function test() {
    // Attempt to bypass RLS by calling get_is_admin logic if we were logged in... but we are not logged in.
    // So we can't query it.
    console.log("We can't query it without being admin.");
}
test();
