import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaUniversity, FaNewspaper } from 'react-icons/fa';

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
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-primary-dark mt-16 border-t-2 border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="The Editorial Board Logo" 
                className="h-12 w-12 object-contain"
                loading="lazy"
                width={48}
                height={48}
              />
              <img 
                src="/editorial-board-text.png" 
                alt="The Editorial Board" 
                className="h-7 object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Official Description */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-accent-orange">
                <FaUniversity className="text-lg" />
                <span className="font-semibold text-sm tracking-wide">MMMUT Official</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-serif">
                The Editorial Board is the official publishing body of 
                <span className="font-semibold text-primary-dark"> Madan Mohan Malaviya University of Technology (MMMUT)</span>, 
                Gorakhpur. We are dedicated to fostering excellence in academic research, 
                creative writing, and scholarly discourse within our university community.
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <FaNewspaper />
                <span className="italic">Publishing excellence since establishment</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-primary-dark tracking-wide uppercase text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-accent-orange transition-colors text-sm font-medium hover:translate-x-1 inline-block transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-primary-dark tracking-wide uppercase text-sm">
              Explore More
            </h4>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-accent-orange transition-colors text-sm font-medium hover:translate-x-1 inline-block transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-primary-dark tracking-wide uppercase text-sm">
              Connect With Us
            </h4>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-dark hover:bg-accent-orange flex items-center justify-center transition-all duration-300 text-white hover:scale-110 hover:shadow-lg"
                    aria-label={social.name}
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
            
            {/* Contact Info */}
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-medium">MMMUT, Gorakhpur</p>
              <p className="text-xs">Uttar Pradesh, India - 273010</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm font-medium">
              &copy; {currentYear} The Editorial Board, MMMUT. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm">
              <a 
                href="#" 
                className="text-gray-600 hover:text-accent-orange transition-colors font-medium"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-accent-orange transition-colors font-medium"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
