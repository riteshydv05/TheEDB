// Mobile Navigation Component
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { routes } from '../../../config/routes';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = memo(({ isOpen, onClose }: MobileNavProps) => {
  const location = useLocation();
  const navRoutes = routes.filter(r => r.showInNav);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
          
          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="font-semibold text-gray-900">Menu</span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <MdClose size={24} />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="p-4">
              <ul className="space-y-2">
                {navRoutes.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={onClose}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive(link.path)
                            ? 'bg-gradient-to-r from-accent-orange to-orange-500 text-white shadow-lg shadow-orange-500/25'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <IconComponent className="text-lg" />
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            
            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gray-50">
              <p className="text-xs text-gray-500 text-center">
                The Editorial Board © {new Date().getFullYear()}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

MobileNav.displayName = 'MobileNav';
