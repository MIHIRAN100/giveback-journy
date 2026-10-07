-- IDE-SAFE CONSOLIDATED DATABASE UPDATE SCRIPT
-- This script safely adds all required columns and ensures idempotency so it doesn't fail if ran twice.

-- 1. Support legacy hardcoded tours
alter table public.bookings alter column product_id drop not null;
alter table public.bookings add column if not exists legacy_product_name text;
alter table public.bookings add column if not exists legacy_product_type text;

-- 2. Support guest bookings and strict booking references
alter table public.bookings alter column user_id drop not null;
alter table public.bookings add column if not exists booking_reference text unique;
alter table public.bookings add column if not exists customer_name text;
alter table public.bookings add column if not exists customer_email text;
alter table public.bookings add column if not exists customer_phone text;
alter table public.bookings add column if not exists payment_method text;

-- 3. Update Row Level Security to allow guest bookings
drop policy if exists "Users can create own bookings" on public.bookings;
drop policy if exists "Anyone can insert bookings" on public.bookings;
create policy "Anyone can insert bookings"
    on public.bookings for insert
    with check (true);
    
drop policy if exists "Users can insert own volunteer details" on public.volunteer_details;
drop policy if exists "Anyone can insert volunteer details" on public.volunteer_details;
create policy "Anyone can insert volunteer details"
    on public.volunteer_details for insert
    with check (true);
