
import React from 'react';
import { Link } from 'react-router-dom';

const SportsLaw: React.FC = () => {
  const bridgeTransferUrl = "https://medium.com/@othmany13/bridge-transfers-in-football-what-you-need-to-know-0e434faf0fb1";

  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      {/* Hero Header */}
      <section className="relative py-28 md:py-32 overflow-hidden bg-[#202020] border-b border-white/10">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
            alt="Sports Stadium"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#202020]/80 via-[#202020] to-[#202020]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#B99A55] text-xs font-semibold uppercase tracking-wider mb-12 hover:text-white transition-colors duration-300"
          >
            <span className="material-icons text-sm">arrow_back</span>
            Back to Practices
          </Link>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight">
            Sports Law & <br />
            <span className="text-[#B99A55]">Athlete Representation</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-[#D0D0D0] leading-relaxed font-light">
            Providing airtight legal protection and strategic management for world-class athletes, agencies, and sports organizations in the Nigerian and global markets.
          </p>
        </div>
      </section>

      {/* The Arena of Law: Visual Break Section */}
      <section className="py-20 md:py-24 bg-[#F4F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Sports Equipment Side */}
            <div className="relative group overflow-hidden border border-[#E9E6DE] h-[420px] md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop"
                alt="Sports Equipment"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-[#202020]/25 to-transparent flex flex-col justify-end p-8 md:p-12">
                <span className="text-[#D0B477] font-semibold uppercase tracking-[0.2em] text-[10px] mb-4">
                  The Arena of Performance
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-medium text-white">
                  Strategic Advocacy
                </h3>
                <p className="mt-4 text-[#D0D0D0] text-sm leading-relaxed max-w-xs">
                  Defending athlete interests on and off the field, from transfer windows to disciplinary chambers and commercial endorsements.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="py-20 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
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
              <div
                key={i}
                className="bg-white border border-[#E9E6DE] p-8 md:p-9 hover:border-[#B99A55]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#F4F2ED] flex items-center justify-center mb-7 group-hover:bg-[#B99A55]/10 transition-colors duration-300">
                  <span className="material-icons text-[#A88B4D] text-2xl">
                    {service.icon}
                  </span>
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-medium text-[#202020] mb-6 border-b border-[#E9E6DE] pb-4">
                  {service.title}
                </h3>

                <ul className="space-y-4">
                  {service.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[#666666] text-sm leading-relaxed"
                    >
                      <span className="material-icons text-[#B99A55] text-xs mt-1">
                        check_circle
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight - Now using the Bridge Transfers Brief */}
      <section className="bg-[#F4F2ED] py-20 md:py-24 border-y border-[#E9E6DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-7 md:p-10 lg:p-12 border border-[#E9E6DE] flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative group overflow-hidden border border-[#E9E6DE]">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop"
                  alt="Football Stadium"
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <span className="text-[#A88B4D] font-semibold uppercase tracking-[0.18em] text-[10px] mb-4 block">
                Featured Brief
              </span>

              <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#202020] mb-5 leading-snug">
                Bridge Transfers in Football: What you need to know
              </h3>

              <p className="text-[#666666] text-sm md:text-base mb-7 leading-relaxed">
                Exploring the regulatory complexities and FIFA's stance on bridge transfers in domestic and international football. A critical analysis of player mobility and club obligations by Yahaya Othman.
              </p>

              <a
                href={bridgeTransferUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A88B4D] font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all duration-300 uppercase tracking-wider text-xs"
              >
                Read Full Professional Brief
                <span className="material-icons text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-24 text-center bg-[#202020]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-7 leading-tight">
            Elevate Your Career with Elite Counsel
          </h2>

          <p className="text-[#D0D0D0] text-base md:text-lg mb-10 leading-relaxed">
            Whether you are a rising talent or an established professional, our Sports Law division provides the strategic backbone your career needs.
          </p>

          <a
            href="https://calendly.com/apexsportslaw-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#B99A55] text-[#202020] px-9 py-4 font-semibold text-xs uppercase tracking-wider hover:bg-[#A88B4D] hover:text-white transition-all duration-300"
          >
            Request Private Consultation
          </a>
        </div>
      </section>

    </div>
  );
};

export default SportsLaw;
