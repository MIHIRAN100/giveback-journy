const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://cijxlyphpcrvdkbmoequ.supabase.co', 'sb_publishable_MJbBVu4_eKkfnvRmnq0-IQ_ZKWRSoV3');
async function test() {
    const { data, error } = await supabase.from('bookings').select('*').limit(1);
    console.log(error ? error : Object.keys(data[0] || {}));
}
test();
