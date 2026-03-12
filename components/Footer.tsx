
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded">
                <img 
                  src="https://res.cloudinary.com/dq7vjblwd/image/upload/v1771278934/Apex_Logo_l2egs3.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight uppercase text-white leading-tight">Apex Sports Law</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading the way in comprehensive sports law practice, encompassing corporate transactions, dispute resolution, and regulatory compliance, with a commitment to excellence and strategic resolution for athletes, teams, leagues, and industry stakeholders.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/apexadvocatesandsolicitors/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-black transition-colors" title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/apexsportslaw/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-black transition-colors" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* X */}
              {/*<a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-black transition-colors" title="X (formerly Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z"/></svg>*/}
              
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-accent-gold/30 pb-2 text-accent-gold">Practice Areas</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/practices" className="hover:text-accent-gold transition-colors">Corporate Advisory</Link></li>
              <li><Link to="/practices" className="hover:text-accent-gold transition-colors">Labour Disputes</Link></li>
              <li><Link to="/practices" className="hover:text-accent-gold transition-colors">Intellectual Property</Link></li>
              <li><Link to="/practices/sports" className="hover:text-accent-gold transition-colors">Sports Law</Link></li>
              <li><Link to="/practices" className="hover:text-accent-gold transition-colors">Dispute Resolution</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
{/* Contact Info */}
<div>
  <h4 className="text-lg font-bold mb-6 border-b border-accent-gold/30 pb-2 text-accent-gold">Contact Us</h4>
  <div className="space-y-4 text-sm">
    <div className="flex items-start gap-3 text-slate-400">
      <span className="material-icons text-accent-gold">email</span>
      <a
        href="mailto:othman@apexsportslaw.com"
        className="hover:text-accent-gold transition-colors break-all"
      >
        info@apexsportslaw.com
      </a>
    </div>

    <div className="flex items-start gap-3 text-slate-400">
      <span className="material-icons text-accent-gold">phone</span>
      <a
        href="tel:+2348163216169"
        className="hover:text-accent-gold transition-colors"
      >
        +234 8163216169
      </a>
    </div>

    <div className="flex items-start gap-3 text-slate-400">
      <span className="material-icons text-accent-gold">location_on</span>
      <span>Lagos, Nigeria</span>
    </div>
  </div>
</div>

          {/* Location Map Placeholder */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-6 border-b border-accent-gold/30 pb-2 text-accent-gold">Our Location</h4>
            <div className="w-full h-32 rounded-lg overflow-hidden relative border border-white/10">
              <img 
                alt="Map of Lagos" 
                className="w-full h-full object-cover opacity-30 grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgw6lAEyUmi06MMouFZBUe6pP9J66RpZpaAmI8WEM4z46alFk1SevZvtmPkynSqyNRTytL9hssGwmxVqKrLd196fq05mWydO8ho052kxdUQ7N-H5gPmOqM3wyqxEvXlibKJ56OqAn3mcsQeM1tyC_ICqRVI6uTI0BH-9bz_rS6FqwykZ9yfL3Rjja6sWzDNW2nFtVDcvcx9dkyCQxI7TO1kL9XKzsk9fLUT6NZjq9VtwgmBqK4EzZjblKagLUya2pCTy9gZganKfg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-icons text-accent-gold text-4xl">location_on</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-medium tracking-widest uppercase gap-4">
          <p>© 2026 Apex Sports Law. All Rights Reserved.</p>
          <div className="flex gap-8">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
