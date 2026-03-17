
import React from 'react';
import { Link } from 'react-router-dom';

const SportsLaw: React.FC = () => {
  const bridgeTransferUrl = "https://medium.com/@othmany13/bridge-transfers-in-football-what-you-need-to-know-0e434faf0fb1";

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Header */}
      <section className="relative py-32 overflow-hidden border-b border-accent-gold/20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop" 
            alt="Sports Stadium" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black to-black"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-accent-gold text-xs font-bold uppercase tracking-widest mb-12 hover:gap-4 transition-all">
            <span className="material-icons text-sm">arrow_back</span> Back to Practices
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            Sports Law & <br/>
            <span className="text-accent-gold">Athlete Representation</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed font-light">
            Providing airtight legal protection and strategic management for world-class athletes, agencies, and sports organizations in the Nigerian and global markets.
          </p>
        </div>
      </section>

            {/* The Arena of Law: Visual Break Section */}
      <section className="py-24 bg-legal-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Sports Equipment Side */}
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-accent-gold/20 h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop" 
                alt="Sports Equipment" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-12">
                <span className="text-accent-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">The Arena of Performance</span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Strategic Advocacy</h3>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs">
                  Defending athlete interests on and off the field, from transfer windows to disciplinary chambers and commercial endorsements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Contractual Strategy",
              icon: "description",
              details: [
                "Negotiation of Professional Playing Contracts",
                "Endorsement & Sponsorship Agreements",
                "Image Rights Licensing & Protection",
                "International Transfer Governance"
              ]
            },
            {
              title: "Dispute Resolution",
              icon: "gavel",
              details: [
                "Representation before FIFA & CAS",
                "Employment Dispute Mediation",
                "Disciplinary Hearing Defense",
                "Anti-Doping Compliance & Appeals"
              ]
            },
            {
              title: "Brand Management",
              icon: "verified",
              details: [
                "Trademarking Personal Brands",
                "Digital Media & Content Governance",
                "Philanthropic Foundation Setup",
                "Intellectual Property Enforcement"
              ]
            }
          ].map((service, i) => (
            <div key={i} className="bg-secondary-grey/20 border border-accent-gold/10 p-10 rounded-3xl hover:border-accent-gold/40 transition-all group">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent-gold transition-all">
                <span className="material-icons text-accent-gold text-3xl group-hover:text-black">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-accent-gold/10 pb-4">{service.title}</h3>
              <ul className="space-y-4">
                {service.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="material-icons text-accent-gold text-xs mt-1">check_circle</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>


      {/* Featured Insight - Now using the Bridge Transfers Brief */}
      <section className="bg-secondary-grey/10 py-24 border-b border-accent-gold/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-black p-12 rounded-[2.5rem] border border-accent-gold/20 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
            <div className="w-full md:w-1/3">
              <div className="relative group overflow-hidden rounded-3xl border border-accent-gold/20">
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop" 
                  alt="Football Stadium" 
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <span className="text-accent-gold font-black uppercase tracking-widest text-[10px] mb-4 block">Featured Brief</span>
              <h3 className="text-3xl font-bold text-white mb-6">Bridge Transfers in Football: What you need to know</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Exploring the regulatory complexities and FIFA's stance on bridge transfers in domestic and international football. A critical analysis of player mobility and club obligations by Yahaya Othman.
              </p>
              <a 
                href={bridgeTransferUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent-gold font-bold inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-xs"
              >
                Read Full Professional Brief <span className="material-icons text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8">Elevate Your Career with Elite Counsel</h2>
          <p className="text-slate-400 text-lg mb-12">
            Whether you are a rising talent or an established professional, our Sports Law division provides the strategic backbone your career needs.
          </p>
          <a 
            href="https://calendly.com/apexsportslaw-info/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-accent-gold text-black px-12 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-yellow-600 transition-all shadow-2xl shadow-accent-gold/20"
          >
            Request Private Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default SportsLaw;
