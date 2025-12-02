-- Migration: Create profiles table
-- Purpose: Store extended user profile information linked to auth.users
-- Tables affected: public.profiles
-- Special considerations: 
--   - Automatically creates a profile when a user signs up via trigger
--   - RLS enabled to ensure users can only access their own data
--   - email is synced from auth.users for convenience

-- Create the profiles table
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  first_name text,
  profile_picture_url text,
  email text not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

comment on table public.profiles is 'Extended user profile information. Each profile is linked 1:1 with auth.users.';
comment on column public.profiles.id is 'References auth.users.id. Primary key and foreign key.';
comment on column public.profiles.first_name is 'User''s first name (optional).';
comment on column public.profiles.profile_picture_url is 'URL to user''s profile picture (optional).';
comment on column public.profiles.email is 'User''s email address, synced from auth.users.';

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Create index on id for better query performance
create index profiles_id_idx on public.profiles using btree (id);

-- RLS Policy: Allow users to view their own profile
create policy "Users can view their own profile"
  on public.profiles
  for select
  to authenticated
  using ( (select auth.uid()) = id );

-- RLS Policy: Allow users to insert their own profile
create policy "Users can insert their own profile"
  on public.profiles
  for insert
  to authenticated
  with check ( (select auth.uid()) = id );

-- RLS Policy: Allow users to update their own profile
create policy "Users can update their own profile"
  on public.profiles
  for update
  to authenticated
  using ( (select auth.uid()) = id )
  with check ( (select auth.uid()) = id );

-- RLS Policy: Allow users to delete their own profile
create policy "Users can delete their own profile"
  on public.profiles
  for delete
  to authenticated
  using ( (select auth.uid()) = id );

-- Function: Create profile on user signup
-- This function automatically creates a profile entry when a new user signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, created_at, updated_at)
  values (
    new.id,
    new.email,
    now(),
    now()
  );
  return new;
end;
$$;

comment on function public.handle_new_user() is 'Automatically creates a profile entry when a new user signs up.';

-- Trigger: Execute handle_new_user function after user signup
-- This trigger fires after a new user is inserted into auth.users
-- Note: We cannot add comments to triggers on auth.users due to permissions
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

-- Function: Update updated_at timestamp
-- This function automatically updates the updated_at column on profile updates
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

comment on function public.handle_updated_at() is 'Automatically updates the updated_at timestamp on row update.';

-- Trigger: Update updated_at before profile update
create trigger on_profile_updated
  before update on public.profiles
  for each row
  execute function public.handle_updated_at();

comment on trigger on_profile_updated on public.profiles is 'Automatically updates the updated_at column before a profile is updated.';

