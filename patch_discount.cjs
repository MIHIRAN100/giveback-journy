const fs = require('fs');
const path = require('path');

// ===== 1. Update AdminBookings.jsx =====
const bookingsPath = path.join(__dirname, 'src', 'pages', 'admin', 'AdminBookings.jsx');
let bookings = fs.readFileSync(bookingsPath, 'utf-8');

// Add discount_given to the select query
bookings = bookings.replace(
    "customer_name, customer_email, customer_phone, legacy_product_name, legacy_product_type,",
    "customer_name, customer_email, customer_phone, legacy_product_name, legacy_product_type, discount_given,"
);

// Add discount_given to the manageForm initial state
bookings = bookings.replace(
    "amount_due: 0,\n          volunteer_status: ''",
    "amount_due: 0,\n          discount_given: 0,\n          volunteer_status: ''"
);

// Add discount_given to handleManageClick
bookings = bookings.replace(
    "amount_due: booking.amount_due || 0,",
    "amount_due: booking.amount_due || 0,\n            discount_given: booking.discount_given || 0,"
);

// Add discount_given to the Supabase update call
bookings = bookings.replace(
    "amount_due: parseFloat(manageForm.amount_due)",
    "amount_due: parseFloat(manageForm.amount_due),\n                    discount_given: parseFloat(manageForm.discount_given) || 0"
);

// Add the discount_given input field in the modal, right after the "Edit this to apply discounts" hint
bookings = bookings.replace(
    `<div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>Edit this to apply discounts.</div>`,
    `<div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>Edit this to apply discounts.</div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '5px' }}>Discount Given (USD)</label>
                                <input 
                                    type="number"
                                    value={manageForm.discount_given}
                                    onChange={e => setManageForm({...manageForm, discount_given: e.target.value})}
                                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                                />
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>Enter the discount amount given to this customer.</div>`
);

fs.writeFileSync(bookingsPath, bookings);
console.log("Updated AdminBookings.jsx with discount_given field");

// ===== 2. Update DashboardOverview.jsx =====
const dashPath = path.join(__dirname, 'src', 'pages', 'admin', 'DashboardOverview.jsx');
let dash = fs.readFileSync(dashPath, 'utf-8');

// Add discount_given to select query
dash = dash.replace(
    "payment_status, booking_status, legacy_product_name, legacy_product_type",
    "payment_status, booking_status, legacy_product_name, legacy_product_type, discount_given"
);

// Add totalDiscounts variable
dash = dash.replace(
    "let volCount = 0;",
    "let volCount = 0;\n                let totalDiscounts = 0;"
);

// Add discount summing in the loop - after volCount
dash = dash.replace(
    "if (b.legacy_product_type === 'volunteer' || b.products?.product_type === 'volunteer') {\n                            volCount++;\n                        }",
    "if (b.legacy_product_type === 'volunteer' || b.products?.product_type === 'volunteer') {\n                            volCount++;\n                        }\n                        totalDiscounts += (Number(b.discount_given) || 0);"
);

// Add totalDiscounts to state
dash = dash.replace(
    "totalVolunteers: volCount",
    "totalVolunteers: volCount,\n                    totalDiscounts: totalDiscounts"
);

// Add totalDiscounts to initial state
dash = dash.replace(
    "totalVolunteers: 0\n    });",
    "totalVolunteers: 0,\n        totalDiscounts: 0\n    });"
);

// Wire the Discounts Given card to use real data
dash = dash.replace(
    'title="Discounts Given" \n                    value={formatPrice(0)}',
    'title="Discounts Given" \n                    value={formatPrice(stats.totalDiscounts)}'
);

fs.writeFileSync(dashPath, dash);
console.log("Updated DashboardOverview.jsx with totalDiscounts");
