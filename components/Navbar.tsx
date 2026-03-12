import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CALENDLY_URL = 'https://calendly.com/apexsportslaw/30min';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/practices' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Knowledge Centre', path: '/knowledge' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-accent-gold/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
              <img
                src="/logo.png"
                alt="Apex Advocates Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://res.cloudinary.com/dq7vjblwd/image/upload/v1771280793/pngtree-high-quality-gold-medal-for-recognition-png-image_14451009_ptmpmx.png';
                }}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tight text-primary dark:text-white uppercase">
                Apex
              </span>
              <span className="text-[10px] tracking-[0.2em] text-accent-gold font-semibold uppercase">
                Sports Law
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent-gold ${
                  isActive(link.path)
                    ? 'text-accent-gold'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-gold hover:bg-yellow-400 text-black px-4 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-accent-gold/20"
            >
              Book Consultation
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary dark:text-white"
              aria-label="Toggle menu"
            >
              <span className="material-icons text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-accent-gold/20 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-base font-medium border-b border-slate-100 dark:border-slate-800 ${
                  isActive(link.path)
                    ? 'text-accent-gold'
                    : 'text-slate-600 dark:text-slate-300'
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
              className="block w-full text-center bg-accent-gold text-black px-6 py-4 rounded-xl font-bold text-lg"
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
