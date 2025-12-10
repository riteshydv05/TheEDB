import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaUniversity, FaNewspaper, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Publications', path: '/publications' },
  ];

  const moreLinks = [
    { name: 'Alumni', path: '/alumni' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Canvas', path: '/canvas' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com', color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com', color: 'hover:bg-blue-700' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-primary-dark border-t border-gray-200">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent-orange text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp />
      </motion.button>

      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.png" 
                alt="The Editorial Board Logo" 
                className="h-14 w-14 object-contain"
                loading="lazy"
                width={56}
                height={56}
              />
              <img 
                src="/editorial-board-text.png" 
                alt="The Editorial Board" 
                className="h-8 object-contain"
                loading="lazy"
              />
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent-orange">
                <FaUniversity className="text-lg" />
                <span className="font-semibold text-sm tracking-widest uppercase">MMMUT Official</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Editorial Board is the official publishing body of 
                <span className="font-semibold text-primary-dark"> MMMUT</span>, 
                Gorakhpur. Dedicated to fostering excellence in academic research, 
                creative writing, and scholarly discourse.
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <FaNewspaper />
                <span className="italic tracking-wide">Publishing excellence since establishment</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold mb-6 text-primary-dark tracking-widest uppercase text-xs border-b-2 border-accent-orange pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-accent-orange transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent-orange group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold mb-6 text-primary-dark tracking-widest uppercase text-xs border-b-2 border-accent-orange pb-2 inline-block">
              Explore More
            </h4>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-accent-orange transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent-orange group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold mb-6 text-primary-dark tracking-widest uppercase text-xs border-b-2 border-accent-orange pb-2 inline-block">
              Connect With Us
            </h4>
            <div className="flex space-x-3 mb-8">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 text-white ${social.color}`}
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={16} />
                  </motion.a>
                );
              })}
            </div>
            
            <div className="text-sm text-gray-600 space-y-2 bg-white/50 rounded-xl p-4">
              <p className="font-semibold text-primary-dark">MMMUT, Gorakhpur</p>
              <p className="text-xs text-gray-500">Uttar Pradesh, India - 273010</p>
              <p className="text-xs text-gray-500">contact@editorialboard.edu</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-300 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm font-medium flex items-center gap-2">
              &copy; {currentYear} The Editorial Board, MMMUT. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" />
              </motion.span>
            </p>
            <div className="flex space-x-8 text-sm">
              <a 
                href="#" 
                className="text-gray-500 hover:text-accent-orange transition-colors font-medium"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-accent-orange transition-colors font-medium"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
