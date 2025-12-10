import React, { useState, memo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { FaHome, FaUsers, FaCalendar, FaBook, FaUserGraduate, FaImages, FaPalette, FaEnvelope } from 'react-icons/fa';

interface NavLink {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'Team', path: '/team', icon: FaUsers },
  { name: 'Events', path: '/events', icon: FaCalendar },
  { name: 'Publications', path: '/publications', icon: FaBook },
  { name: 'Alumni', path: '/alumni', icon: FaUserGraduate },
  { name: 'Gallery', path: '/gallery', icon: FaImages },
  { name: 'Canvas', path: '/canvas', icon: FaPalette },
  { name: 'Contact', path: '/contact', icon: FaEnvelope },
];

const Navbar: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white shadow-sm border-b border-gray-200'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img 
              src="/logo.png" 
              alt="The Editorial Board Logo" 
              className="h-10 w-10 object-contain"
              loading="eager"
              width={40}
              height={40}
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <img 
              src="/editorial-board-text.png" 
              alt="The Editorial Board" 
              className="h-6 object-contain hidden sm:block"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => {
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
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-accent-orange transition-colors rounded-lg hover:bg-gray-100"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MdClose size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <GiHamburgerMenu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-gray-100">
                {navLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${
                          isActive(link.path)
                            ? 'bg-gradient-to-r from-accent-orange to-orange-500 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary-dark'
                        }`}
                      >
                        <IconComponent className="text-lg" />
                        <span>{link.name}</span>
                        {isActive(link.path) && (
                          <motion.div
                            className="ml-auto w-2 h-2 rounded-full bg-white"
                            layoutId="activeMobileIndicator"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
