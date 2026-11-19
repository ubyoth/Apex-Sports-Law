
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CALENDLY_URL = 'https://calendly.com/apexsportslaw-info/30min';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    // { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/practices' },
    // { name: 'Our Work', path: '/our-work' },
    { name: 'Knowledge Centre', path: '/knowledge' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E9E6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center overflow-hidden shrink-0">
              <img
                src="/logo.png"
                alt="Apex Advocates Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.onerror = null;
                  img.src =
                    'https://res.cloudinary.com/dq7vjblwd/image/upload/v1771280793/pngtree-high-quality-gold-medal-for-recognition-png-image_14451009_ptmpmx.png';
                }}
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-semibold tracking-tight text-[#202020] uppercase">
                Apex
              </span>
              <span className="text-[9px] tracking-[0.22em] text-[#A88B4D] font-semibold uppercase mt-1">
                Advocates
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 text-[13px] font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#A88B4D]'
                    : 'text-[#555555] hover:text-[#A88B4D]'
                }`}
              >
                {link.name}

                {isActive(link.path) && (
                  <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#B99A55]" />
                )}
              </Link>
            ))}

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#202020] hover:bg-[#B99A55] text-white hover:text-[#202020] px-5 py-3 text-xs font-semibold transition-all duration-300"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#202020] hover:text-[#A88B4D] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="material-icons text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-t border-[#E9E6DE] animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-3 pb-6 space-y-2">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-sm font-medium border-b border-[#E9E6DE] transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#A88B4D]'
                    : 'text-[#555555] hover:text-[#A88B4D]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-[#202020] hover:bg-[#B99A55] text-white hover:text-[#202020] px-6 py-4 mt-4 text-sm font-semibold transition-all duration-300"
            >
              Book Consultation
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
