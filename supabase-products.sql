-- Run this entire script in your Supabase SQL Editor to create the unified products system

-- 1. Create the unified products table
create table public.products (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    slug text not null unique,
    product_type text not null check (product_type in ('volunteer', 'tour')),
    short_description text,
    full_description text,
    featured_image text,
    gallery text[],
    price numeric,
    currency text default 'USD',
    duration text,
    location text,
    active boolean default true,
    featured boolean default false,
    
    -- We use a JSONB column to store type-specific data cleanly without forcing columns onto the wrong product
    -- For tours: itinerary, destinations, inclusions, exclusions, meeting point, departure info
    -- For volunteers: project, minimum duration, accommodation, meals, included activities
    details jsonb default '{}'::jsonb,
    
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create index on product_type and active status for faster frontend querying
create index idx_products_type on public.products(product_type);
create index idx_products_active on public.products(active);

-- 3. Enable Row Level Security (RLS)
alter table public.products enable row level security;

-- 4. Create RLS Policies
-- Customers / Public can ONLY view products that are active (publicly available)
create policy "Public can view active products"
    on public.products for select
    using ( active = true );

-- (Admins will bypass this using the service role key or a specific admin policy added later)
