import { Profile } from './database.types';

/**
 * Profile with computed/derived properties
 * Used in the UI layer
 */
export interface ProfileWithMetadata extends Profile {
  display_name: string; // Computed from first_name or email
  has_profile_picture: boolean; // Whether profile picture is set
}

/**
 * Profile form data
 * Used for form validation and submission
 */
export interface ProfileFormData {
  first_name?: string;
  profile_picture_url?: string;
}

/**
 * Helper function to get display name from profile
 */
export function getDisplayName(profile: Profile): string {
  if (profile.first_name) {
    return profile.first_name;
  }
  // Fallback to email username
  return profile.email.split('@')[0];
}

/**
 * Helper function to create ProfileWithMetadata from Profile
 */
export function enrichProfile(profile: Profile): ProfileWithMetadata {
  return {
    ...profile,
    display_name: getDisplayName(profile),
    has_profile_picture: !!profile.profile_picture_url,
  };
}

