// Common Types
import type { ReactNode, ComponentType } from 'react';

// Device types
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

// Viewport size
export interface ViewportSize {
  width: number;
  height: number;
  device: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

// Animation variants
export interface AnimationVariant {
  hidden: Record<string, number | string>;
  visible: Record<string, number | string | Record<string, number | string>>;
}

// Loading state
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  progress?: number;
}

// Route configuration
export interface RouteConfig {
  path: string;
  name: string;
  icon: ComponentType<{ className?: string }>;
  component: ComponentType;
  showInNav?: boolean;
  showInFooter?: boolean;
}

// Feature item
export interface Feature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Stat item
export interface Stat {
  value: string;
  label: string;
  color?: string;
}

// Social link
export interface SocialLink {
  name: string;
  icon: ComponentType<{ className?: string }>;
  url: string;
  color?: string;
}

// Team member
export interface TeamMember {
  id: number | string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// Event
export interface Event {
  id: number | string;
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  image?: string;
  category?: string;
  isUpcoming?: boolean;
}

// Gallery item
export interface GalleryItem {
  id: number | string;
  title: string;
  image: string;
  category?: string;
  date?: string;
}

// Props with children
export interface WithChildren {
  children: ReactNode;
}
