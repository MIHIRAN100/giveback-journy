const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'admin', 'DashboardOverview.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update the Supabase select query
content = content.replace(
    ".select('id, amount_due, created_at, customer_name, customer_email, payment_status, booking_status, legacy_product_name, products(name)')",
    ".select('id, amount_due, created_at, booking_date, customer_name, customer_email, payment_status, booking_status, legacy_product_name, legacy_product_type, products(name, product_type)')"
);

// 2. Add the state variables
content = content.replace(
    "topTours: []",
    "topTours: [],\n        todaysArrivals: 0,\n        totalVolunteers: 0"
);

// 3. Add the logic to calculate todaysArrivals and totalVolunteers
const logicInsertPoint = "const tourCounts = {};";
const newLogic = `const tourCounts = {};
                let arrivalsToday = 0;
                let volCount = 0;
                const todayStr = new Date().toISOString().split('T')[0];`;

content = content.replace(logicInsertPoint, newLogic);

const loopInsertPoint = "if (b.customer_email) uniqueCustomers.add(b.customer_email);";
const newLoopLogic = `if (b.customer_email) uniqueCustomers.add(b.customer_email);
                        
                        if (b.booking_date && b.booking_date.startsWith(todayStr)) {
                            arrivalsToday++;
                        }
                        
                        if (b.legacy_product_type === 'volunteer' || b.products?.product_type === 'volunteer') {
                            volCount++;
                        }`;

content = content.replace(loopInsertPoint, newLoopLogic);

// 4. Update the setStats call
content = content.replace(
    "topTours: sortedTours",
    "topTours: sortedTours,\n                    todaysArrivals: arrivalsToday,\n                    totalVolunteers: volCount"
);

// 5. Add the two new StatCards to the KPI Grid
const kpiInsertPoint = `<StatCard 
                    title="Total Orders" 
                    value={stats.recentBookings.length} 
                    icon="bi-box-seam" 
                    color="#8b5cf6"
                    trend="-10.5%" 
                />`;

const newCards = `<StatCard 
                    title="Total Orders" 
                    value={stats.recentBookings.length} 
                    icon="bi-box-seam" 
                    color="#8b5cf6"
                    trend="-10.5%" 
                />
                <StatCard 
                    title="Today's Arrivals" 
                    value={stats.todaysArrivals} 
                    icon="bi-airplane-engines" 
                    color="#0ea5e9"
                />
                <StatCard 
                    title="Total Volunteers" 
                    value={stats.totalVolunteers} 
                    icon="bi-heart-fill" 
                    color="#ec4899"
                />`;

content = content.replace(kpiInsertPoint, newCards);

fs.writeFileSync(filePath, content);
console.log("Added Todays Arrivals and Total Volunteers KPI cards.");
