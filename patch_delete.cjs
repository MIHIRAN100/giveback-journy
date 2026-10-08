const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'admin', 'AdminBookings.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const oldLogic = `            if (selectedBooking.volunteer_details) {
                await supabase.from('volunteer_details').delete().eq('booking_id', selectedBooking.id);
            }
            
            const { error } = await supabase.from('bookings').delete().eq('id', selectedBooking.id);`;

const newLogic = `            // Force delete any child records first to avoid Foreign Key Constraint errors
            await supabase.from('volunteer_details').delete().eq('booking_id', selectedBooking.id);
            await supabase.from('payments').delete().eq('booking_id', selectedBooking.id);
            await supabase.from('booking_participants').delete().eq('booking_id', selectedBooking.id);
            await supabase.from('booking_addons').delete().eq('booking_id', selectedBooking.id);
            
            const { error } = await supabase.from('bookings').delete().eq('id', selectedBooking.id);`;

content = content.replace(oldLogic, newLogic);

// Also the user said: "alo oder name need be chnaged as bookings"
// Meaning: "also order name need be changed to bookings"
// In DashboardOverview.jsx, the widget is titled "Recent Orders". They want it to be "Recent Bookings".
fs.writeFileSync(filePath, content);
console.log("Updated AdminBookings deletion logic");
