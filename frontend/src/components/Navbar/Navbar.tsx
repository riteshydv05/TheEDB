import React, { useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="The Editorial Board Logo" 
              className="h-10 w-10 object-contain transition-opacity group-hover:opacity-80"
              loading="eager"
              width={40}
              height={40}
            />
            <img 
              src="/editorial-board-text.png" 
              alt="The Editorial Board" 
              className="h-6 object-contain"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link px-3 py-2 rounded-md transition-all duration-300 flex items-center gap-2 group text-sm font-medium tracking-wide ${
                    isActive(link.path)
                      ? 'bg-accent-orange text-white'
                      : 'text-primary-dark hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className={`text-base transition-transform duration-300 ${
                    isActive(link.path) ? 'animate-pulse' : 'group-hover:scale-110 group-hover:rotate-12'
                  }`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary-dark text-2xl hover:text-accent-orange transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 border-t border-gray-200 pt-4 animate-fadeIn">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`nav-link flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium tracking-wide ${
                    isActive(link.path)
                      ? 'bg-accent-orange text-white'
                      : 'text-primary-dark hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className={`text-lg ${
                    isActive(link.path) ? 'animate-pulse' : ''
                  }`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
