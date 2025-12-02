/**
 * Database type definitions for Supabase tables
 * These types represent the structure of the database tables
 */

/**
 * Profile table type definition
 * Represents extended user information linked to auth.users
 */
export interface Profile {
  id: string; // UUID, references auth.users.id
  first_name: string | null; // Optional first name
  profile_picture_url: string | null; // Optional profile picture URL
  email: string; // User's email (required)
  created_at: string; // ISO 8601 timestamp
  updated_at: string; // ISO 8601 timestamp
}

/**
 * Profile insert type
 * Used when creating a new profile
 */
export interface ProfileInsert {
  id: string; // UUID, references auth.users.id
  first_name?: string | null;
  profile_picture_url?: string | null;
  email: string;
  created_at?: string;
  updated_at?: string;
}

/**
 * Profile update type
 * Used when updating an existing profile
 * All fields are optional except id cannot be changed
 */
export interface ProfileUpdate {
  first_name?: string | null;
  profile_picture_url?: string | null;
  email?: string;
  updated_at?: string;
}

/**
 * Database schema type
 * Central export for all database types
 */
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: ProfileInsert;
        Update: ProfileUpdate;
      };
    };
  };
}

