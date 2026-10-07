-- 1. Create the volunteer details table (1-to-1 relationship with bookings)
create table public.volunteer_details (
    id uuid default gen_random_uuid() primary key,
    booking_id uuid references public.bookings(id) on delete cascade unique not null,
    
    -- Logistics
    arrival_date date,
    departure_date date,
    arrival_flight text,
    departure_flight text,
    airport_pickup boolean default false,
    accommodation_req text,
    dietary_req text,
    
    -- Personal & Emergency
    emergency_contact_name text,
    emergency_contact_phone text,
    volunteer_interests text,
    preferred_project text,
    
    -- Sensitive Information
    passport_number text,
    passport_country text,
    
    -- Independent Volunteer Status Lifecycle
    volunteer_status text not null check (volunteer_status in (
        'application_pending', 'confirmed', 'awaiting_arrival', 
        'arrived', 'pickup_completed', 'checked_in', 
        'active', 'completed', 'departed', 'cancelled'
    )) default 'application_pending',
    
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create index for faster joins
create index idx_volunteer_details_booking on public.volunteer_details(booking_id);

-- 3. Enable Row Level Security (RLS)
alter table public.volunteer_details enable row level security;

-- 4. Create RLS Policies for Customers
-- Customers can view their own highly sensitive volunteer details securely
create policy "Customers can view own volunteer details"
    on public.volunteer_details for select
    using ( booking_id in (select id from public.bookings where user_id = auth.uid()) );

-- Customers can insert their own volunteer details during application
create policy "Customers can insert own volunteer details"
    on public.volunteer_details for insert
    with check ( booking_id in (select id from public.bookings where user_id = auth.uid()) );

-- Customers can update their own details (e.g. adding flights later)
create policy "Customers can update own volunteer details"
    on public.volunteer_details for update
    using ( booking_id in (select id from public.bookings where user_id = auth.uid()) );

-- 5. Create RLS Policies for Admins
create policy "Admins can view all volunteer details"
    on public.volunteer_details for select
    using (exists (select 1 from public.profiles where id = auth.uid() and is_admin = true));
    
create policy "Admins can update all volunteer details"
    on public.volunteer_details for update
    using (exists (select 1 from public.profiles where id = auth.uid() and is_admin = true));
    
create policy "Admins can insert all volunteer details"
    on public.volunteer_details for insert
    with check (exists (select 1 from public.profiles where id = auth.uid() and is_admin = true));
