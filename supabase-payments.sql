-- 1. Add admin role flag to profiles
alter table public.profiles add column if not exists is_admin boolean default false;

-- 2. Create the payments table for manual tracking and audit trail
create table public.payments (
    id uuid default gen_random_uuid() primary key,
    booking_id uuid references public.bookings(id) on delete cascade not null,
    amount numeric not null check (amount > 0),
    currency text default 'USD',
    payment_method text not null check (payment_method in ('cash_airport', 'cash_other')),
    collected_by uuid references auth.users(id),
    notes text,
    payment_date timestamp with time zone default timezone('utc'::text, now()) not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Secure the payments table
alter table public.payments enable row level security;

-- Customers can view payments linked to their own bookings
create policy "Customers can view their own payments"
    on public.payments for select
    using (
        booking_id in (
            select id from public.bookings where user_id = auth.uid()
        )
    );

-- Admins can view all payments
create policy "Admins can view all payments"
    on public.payments for select
    using (
        exists (select 1 from public.profiles where id = auth.uid() and is_admin = true)
    );

-- Only admins can record new payments
create policy "Admins can insert payments"
    on public.payments for insert
    with check (
        exists (select 1 from public.profiles where id = auth.uid() and is_admin = true)
    );

-- 4. Automatically update bookings when a payment is recorded
create or replace function public.update_booking_payment_status()
returns trigger as $$
declare
    v_amount_due numeric;
    v_total_received numeric;
    v_new_status text;
begin
    -- Get the current amount due
    select amount_due into v_amount_due from public.bookings where id = NEW.booking_id;
    
    -- Calculate total received from the audit trail
    select coalesce(sum(amount), 0) into v_total_received from public.payments where booking_id = NEW.booking_id;
    
    -- Apply payment business rules
    if v_total_received >= v_amount_due then
        v_new_status := 'paid';
    elsif v_total_received > 0 then
        v_new_status := 'partially_paid';
    else
        v_new_status := 'awaiting_payment';
    end if;
    
    -- Safely update the booking record
    update public.bookings 
    set amount_received = v_total_received,
        payment_status = v_new_status,
        updated_at = now()
    where id = NEW.booking_id;
    
    return NEW;
end;
$$ language plpgsql security definer;

create trigger on_payment_inserted
    after insert on public.payments
    for each row execute procedure public.update_booking_payment_status();
    
-- 5. Add Admin RLS bypass policies for Bookings
create policy "Admins can view all bookings"
    on public.bookings for select
    using ( exists (select 1 from public.profiles where id = auth.uid() and is_admin = true) );
    
create policy "Admins can update all bookings"
    on public.bookings for update
    using ( exists (select 1 from public.profiles where id = auth.uid() and is_admin = true) );
