import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { FaHome, FaUsers, FaCalendar, FaBook, FaUserGraduate, FaImages, FaPalette, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'Team', path: '/team', icon: FaUsers },
    { name: 'Events', path: '/events', icon: FaCalendar },
    { name: 'Publications', path: '/publications', icon: FaBook },
    { name: 'Alumni', path: '/alumni', icon: FaUserGraduate },
    { name: 'Gallery', path: '/gallery', icon: FaImages },
    { name: 'Canvas', path: '/canvas', icon: FaPalette },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white font-semibold shadow-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="The Editorial Board Logo" 
              className="h-10 w-10 object-contain transition-opacity group-hover:opacity-80"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <img 
              src="/editorial-board-text.png" 
              alt="The Editorial Board" 
              className="h-6 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
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
                  className={`px-3 py-2 rounded-md transition-all duration-300 flex items-center gap-2 group text-sm ${
                    isActive(link.path)
                      ? 'bg-accent-orange text-white'
                      : 'text-primary-dark hover:bg-gray-100'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
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
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-dark text-2xl hover:text-accent-orange transition-colors"
          >
            {isOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 border-t border-gray-200 pt-4">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-300 text-sm ${
                    isActive(link.path)
                      ? 'bg-accent-orange text-white'
                      : 'text-primary-dark hover:bg-gray-100'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
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
};

export default Header;
