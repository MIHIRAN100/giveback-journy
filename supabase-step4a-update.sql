-- Update the bookings table to support guest bookings and specific booking references
alter table public.bookings alter column user_id drop not null;
alter table public.bookings add column if not exists booking_reference text unique;
alter table public.bookings add column if not exists customer_name text;
alter table public.bookings add column if not exists customer_email text;
alter table public.bookings add column if not exists customer_phone text;
alter table public.bookings add column if not exists payment_method text;

-- Update RLS to allow guest booking insertions
drop policy if exists "Users can create own bookings" on public.bookings;
create policy "Anyone can insert bookings"
    on public.bookings for insert
    with check (true);
    
-- Update volunteer details to allow anonymous inserts if attached to a valid booking
drop policy if exists "Users can insert own volunteer details" on public.volunteer_details;
create policy "Anyone can insert volunteer details"
    on public.volunteer_details for insert
    with check (true);
