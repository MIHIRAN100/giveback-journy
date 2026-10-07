-- 1. ADD MISSING COLUMNS FOR GUEST CHECKOUT
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS booking_reference text;
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS customer_name text;
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS customer_email text;
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS customer_phone text;
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS legacy_product_name text;
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS legacy_product_type text;
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS payment_method text;

-- 2. MAKE GUEST CHECKOUT POSSIBLE
ALTER TABLE public.bookings ALTER COLUMN user_id DROP NOT NULL;

-- 3. FIX GUEST INSERT PERMISSIONS
DROP POLICY IF EXISTS "Anyone can insert bookings" ON public.bookings;
CREATE POLICY "Anyone can insert bookings"
    ON public.bookings FOR INSERT
    WITH CHECK (user_id IS NULL OR user_id = auth.uid());

-- 4. AUTOMATIC VOLUNTEER CREATION TRIGGER (Bypasses Guest Read Restrictions)
CREATE OR REPLACE FUNCTION public.handle_volunteer_booking()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.legacy_product_type = 'volunteer' THEN
        INSERT INTO public.volunteer_details (booking_id, volunteer_status, volunteer_interests)
        VALUES (NEW.id, 'application_pending', NEW.notes);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_volunteer_booking_created ON public.bookings;
CREATE TRIGGER on_volunteer_booking_created
    AFTER INSERT ON public.bookings
    FOR EACH ROW EXECUTE FUNCTION public.handle_volunteer_booking();
