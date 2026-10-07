-- Run this entire script in your Supabase SQL Editor to create the unified booking system

-- 1. Create the unified bookings table
create table public.bookings (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references auth.users(id) on delete cascade not null,
    product_id uuid references public.products(id) on delete restrict not null,
    booking_date date not null,
    participants integer not null default 1,
    amount_due numeric not null default 0,
    amount_received numeric not null default 0,
    currency text default 'USD',
    booking_status text not null check (booking_status in ('pending', 'confirmed', 'cancelled', 'completed')) default 'pending',
    payment_status text not null check (payment_status in ('awaiting_payment', 'partially_paid', 'paid', 'refunded', 'not_required')) default 'awaiting_payment',
    notes text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create indexes for faster queries
create index idx_bookings_user on public.bookings(user_id);
create index idx_bookings_product on public.bookings(product_id);

-- 3. Enable Row Level Security (RLS)
alter table public.bookings enable row level security;

-- 4. Create RLS Policies
-- Customers can only view their OWN bookings
create policy "Users can view own bookings"
    on public.bookings for select
    using ( auth.uid() = user_id );

-- Customers can only create bookings for themselves
create policy "Users can create own bookings"
    on public.bookings for insert
    with check ( auth.uid() = user_id );

-- Customers can only update their own bookings (e.g. adding notes or cancelling)
create policy "Users can update own bookings"
    on public.bookings for update
    using ( auth.uid() = user_id );

-- (Admins will bypass this using the service role key or an admin policy later)
