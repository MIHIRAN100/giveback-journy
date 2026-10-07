-- 1. Ensure Admins can fully manage Products (Tours and Volunteer Packages)
drop policy if exists "Admins can view all products" on public.products;
create policy "Admins can view all products" 
    on public.products for select 
    using (exists (select 1 from public.profiles where id = auth.uid() and is_admin = true));

drop policy if exists "Admins can insert products" on public.products;
create policy "Admins can insert products" 
    on public.products for insert 
    with check (exists (select 1 from public.profiles where id = auth.uid() and is_admin = true));

drop policy if exists "Admins can update products" on public.products;
create policy "Admins can update products" 
    on public.products for update 
    using (exists (select 1 from public.profiles where id = auth.uid() and is_admin = true));

drop policy if exists "Admins can delete products" on public.products;
create policy "Admins can delete products" 
    on public.products for delete 
    using (exists (select 1 from public.profiles where id = auth.uid() and is_admin = true));

-- 2. Ensure Admins can view and search all Customer Profiles
drop policy if exists "Admins can view all profiles" on public.profiles;
create policy "Admins can view all profiles" 
    on public.profiles for select 
    using (exists (select 1 from public.profiles where id = auth.uid() and is_admin = true));

-- 3. Ensure Admins can manage Auth Users (if needed for metadata, though Profiles is primary)
-- Note: auth.users is handled by Supabase Dashboard, we manage profiles table directly.
