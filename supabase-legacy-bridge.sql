alter table public.bookings alter column product_id drop not null;
alter table public.bookings add column if not exists legacy_product_name text;
alter table public.bookings add column if not exists legacy_product_type text;
