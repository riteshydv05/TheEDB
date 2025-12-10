// Main Components Export Index
// This file provides a centralized export for all components

// Layout Components (Mobile/Desktop Separated)
export { Layout, Navbar, Footer, DesktopNav, MobileNav } from './Layout';

// Shared UI Components (Individual Folders)
export {
  Button,
  Card,
  Loader,
  PageLoader,
  Badge,
  Container,
  Section,
  AnimatedElement,
  Icon
} from './shared';

// Publications Components (Enhanced)
export {
  PDFViewer,
  MagazineCard,
  PublicationCard,
  PublicationGrid
} from './Publications';

// Common Components (Legacy - kept for backward compatibility)
export { default as ScrollToTop } from './Common/ScrollToTop';
export { default as RotatingText } from './Common/RotatingText';
export { default as OptimizedImage } from './Common/OptimizedImage';
export { default as CardSwap } from './Common/CardSwap';
export { default as CircularGallery } from './Common/CircularGallery';
export { default as AlumniRotatingBanner } from './Common/AlumniRotatingBanner';

// Motion Components
export * from './Motion';

// Re-export types
export type { Publication } from '../services/publicationsService';
export type { 
  DeviceType, 
  ViewportSize, 
  Feature, 
  Stat
} from '../types/common';
