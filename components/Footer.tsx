
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#202020] text-white pt-16 md:pt-20 pb-8 border-t border-[#B99A55]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Apex Advocates Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="font-serif text-xl font-medium tracking-tight text-white leading-tight">
                Apex Advocates
              </span>
            </div>

            <p className="text-[#BDBDBD] text-sm leading-relaxed">
              Leading full-service law practice providing strategic counsel across corporate transactions, commercial dispute resolution, labor law, and sports law. Committed to legal excellence and tailored advocacy for corporate clients, institutions, and individuals across Nigeria and Africa.
            </p>

            <div className="flex gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/apexadvocatesandsolicitors/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-[#D0D0D0] hover:bg-[#B99A55] hover:border-[#B99A55] hover:text-[#202020] transition-all duration-300"
                title="Facebook"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/apexsportslaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-[#D0D0D0] hover:bg-[#B99A55] hover:border-[#B99A55] hover:text-[#202020] transition-all duration-300"
                title="LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 border-b border-white/10 pb-3 text-white">
              <span className="border-b border-[#B99A55] pb-3">
                Practice Areas
              </span>
            </h4>

            <ul className="space-y-4 text-[#BDBDBD] text-sm">
              <li>
                <Link to="/practices" className="hover:text-[#D0B477] transition-colors duration-300">
                  Corporate & Commercial
                </Link>
              </li>
              <li>
                <Link to="/practices" className="hover:text-[#D0B477] transition-colors duration-300">
                  Dispute Resolution
                </Link>
              </li>
              <li>
                <Link to="/practices" className="hover:text-[#D0B477] transition-colors duration-300">
                  Labour & Employment
                </Link>
              </li>
              <li>
                <Link to="/practices/sports" className="hover:text-[#D0B477] transition-colors duration-300">
                  Sports Law & Governance
                </Link>
              </li>
              <li>
                <Link to="/practices" className="hover:text-[#D0B477] transition-colors duration-300">
                  Intellectual Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 border-b border-white/10 pb-3 text-white">
              <span className="border-b border-[#B99A55] pb-3">
                Contact Us
              </span>
            </h4>

            <div className="space-y-5 text-sm">

              <div className="flex items-start gap-3 text-[#BDBDBD]">
                <span className="material-icons text-[#B99A55] text-lg">
                  email
                </span>
                <a
                  href="mailto:info@apexsportslaw.com"
                  className="hover:text-[#D0B477] transition-colors break-all"
                >
                  info@apexsportslaw.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-[#BDBDBD]">
                <span className="material-icons text-[#B99A55] text-lg">
                  phone
                </span>
                <a
                  href="tel:+2348163216169"
                  className="hover:text-[#D0B477] transition-colors"
                >
                  +234 8163216169
                </a>
              </div>

              <div className="flex items-start gap-3 text-[#BDBDBD]">
                <span className="material-icons text-[#B99A55] text-lg">
                  location_on
                </span>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div> 
          </div>
         

        {/* Copyright */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#929292] font-medium tracking-wider uppercase gap-4">
          <p>© 2026 Apex Advocates. All Rights Reserved.</p>
          <div className="flex gap-8">
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
