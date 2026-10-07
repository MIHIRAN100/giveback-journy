-- TIGHTEN SECURITY POLICIES FOR FINAL AUDIT
-- Prevent malicious actors from inserting bookings under another user's ID
drop policy if exists "Anyone can insert bookings" on public.bookings;
create policy "Anyone can insert bookings"
    on public.bookings for insert
    with check (user_id is null or user_id = auth.uid());

-- Volunteer details is already protected by the unguessable nature of the bookings UUID,
-- but we ensure that only admins or the booking owner can update them.
-- (The update policies were already restricted in previous steps)
