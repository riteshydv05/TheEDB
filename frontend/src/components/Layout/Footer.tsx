import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-primary-dark mt-16 border-t-2 border-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="The Editorial Board Logo" 
                className="h-10 w-10 object-contain"
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
            </div>
            <p className="text-gray-600 text-xs leading-relaxed" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
              Fostering excellence in research and academic discourse.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary-dark" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-accent-orange transition-colors text-xs" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 hover:text-accent-orange transition-colors text-xs" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
                  Team
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-accent-orange transition-colors text-xs" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-gray-600 hover:text-accent-orange transition-colors text-xs" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary-dark" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>More</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/alumni" className="text-gray-600 hover:text-accent-orange transition-colors text-xs" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
                  Alumni
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-accent-orange transition-colors text-xs" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/canvas" className="text-gray-600 hover:text-accent-orange transition-colors text-xs" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
                  Canvas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-accent-orange transition-colors text-xs" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary-dark" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-accent-blue hover:bg-accent-orange flex items-center justify-center transition-colors text-white"
              >
                <FaFacebook size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-accent-blue hover:bg-accent-orange flex items-center justify-center transition-colors text-white"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-accent-blue hover:bg-accent-orange flex items-center justify-center transition-colors text-white"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-accent-blue hover:bg-accent-orange flex items-center justify-center transition-colors text-white"
              >
                <FaLinkedin size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-xs" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
              &copy; {currentYear} The Editorial Board. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs">
              <a href="#" className="text-gray-600 hover:text-accent-orange transition-colors" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-accent-orange transition-colors" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
