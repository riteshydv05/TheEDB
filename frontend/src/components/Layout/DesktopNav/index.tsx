// Desktop Navigation Component
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { routes } from '../../../config/routes';

export const DesktopNav = memo(() => {
  const location = useLocation();
  const navRoutes = routes.filter(r => r.showInNav);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {navRoutes.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              to={link.path}
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 group text-sm font-medium tracking-wide ${
                isActive(link.path)
                  ? 'text-white'
                  : 'text-gray-700 hover:text-primary-dark'
              }`}
            >
              {isActive(link.path) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gradient-to-r from-accent-orange to-orange-500 rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {!isActive(link.path) && (
                <span className="absolute inset-0 rounded-lg bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              )}
              <IconComponent className={`text-sm transition-transform duration-300 ${
                isActive(link.path) ? '' : 'group-hover:scale-110'
              }`} />
              <span>{link.name}</span>
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
});

DesktopNav.displayName = 'DesktopNav';
