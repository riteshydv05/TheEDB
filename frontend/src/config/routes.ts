// Route Configuration
import { FaHome, FaUsers, FaCalendar, FaBook, FaUserGraduate, FaImages, FaPalette, FaEnvelope } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface RouteConfig {
  path: string;
  name: string;
  icon: IconType;
  showInNav: boolean;
  showInFooter: boolean;
}

export const routes: RouteConfig[] = [
  { path: '/', name: 'Home', icon: FaHome, showInNav: true, showInFooter: true },
  { path: '/team', name: 'Team', icon: FaUsers, showInNav: true, showInFooter: true },
  { path: '/events', name: 'Events', icon: FaCalendar, showInNav: true, showInFooter: true },
  { path: '/publications', name: 'Publications', icon: FaBook, showInNav: true, showInFooter: true },
  { path: '/alumni', name: 'Alumni', icon: FaUserGraduate, showInNav: true, showInFooter: true },
  { path: '/gallery', name: 'Gallery', icon: FaImages, showInNav: true, showInFooter: true },
  { path: '/canvas', name: 'Canvas', icon: FaPalette, showInNav: true, showInFooter: true },
  { path: '/contact', name: 'Contact', icon: FaEnvelope, showInNav: true, showInFooter: true },
];

export const adminRoutes: RouteConfig[] = [
  { path: '/admin/upload', name: 'Upload', icon: FaBook, showInNav: false, showInFooter: false },
];

export const getNavRoutes = () => routes.filter(r => r.showInNav);
export const getFooterRoutes = () => routes.filter(r => r.showInFooter);
