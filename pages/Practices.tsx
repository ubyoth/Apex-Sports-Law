import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const PAGE_URL = `${SITE_URL}/practices`;
const OG_IMAGE = `${SITE_URL}/og/practice-areas.jpg`;

type PracticeGroup = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  services: string[];
  imageUrl: string;
  link?: string;
};

const PRACTICE_GROUPS: PracticeGroup[] = [
  {
    id: "corporate-commercial",
    title: "Corporate & Commercial Advisory",
    subtitle: "Enterprise Governance, M&A & Regulatory Compliance",
    icon: "business_center",
    description:
      "We provide strategic counsel to startups, established enterprises, and international investors navigating the Nigerian and broader African business landscape. From entity structuring and CAC compliance to complex commercial contracting and cross-border M&A transactions, we ensure complete risk mitigation.",
    services: [
      "Corporate Structuring & Governance",
      "Mergers, Acquisitions & Joint Ventures",
      "Regulatory Compliance & CAC Filings",
      "Commercial Contract Drafting & Negotiation",
      "Intellectual Property Protection",
      "Foreign Direct Investment (FDI) Advisory"
    ],
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution & Commercial Arbitration",
    subtitle: "Litigation, Mediation & International Arbitration",
    icon: "gavel",
    description:
      "When commercial disputes arise, our focus is swift, partner-led resolution that preserves enterprise value and business relationships. We represent corporate entities and executives across high-stakes commercial litigation, domestic and international arbitration, and structured mediation.",
    services: [
      "Commercial Litigation & Appellate Practice",
      "Domestic & International Arbitration",
      "Alternative Dispute Resolution (ADR)",
      "Contractual Breach & Enforcement",
      "Shareholder & Partnership Disputes",
      "Asset Recovery & Debt Restructuring"
    ],
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "labour-employment",
    title: "Labour & Employment Law",
    subtitle: "Workplace Governance, Executive Contracts & Advisory",
    icon: "badge",
    description:
      "We advise employers, boards, and senior executives on complex labor issues, trade union engagements, and National Industrial Court litigation. Our practice ensures robust compliance with Nigerian labor laws while crafting executive compensation packages and employment policies.",
    services: [
      "Executive Employment Contracts & Severance",
      "Workplace Policy & Employee Handbooks",
      "Trade Union & Collective Bargaining",
      "National Industrial Court Representation",
      "Redundancy & Restructuring Advisory",
      "Workplace Harassment & Compliance Audits"
    ],
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "sports-governance",
    title: "Sports Law & Regulatory Governance",
    subtitle: "Contracts, FIFA DRC Representation & Athlete Advisory",
    icon: "sports_soccer",
    description:
      "As a premier sports law authority in Africa, we advise professional athletes, sports clubs, governing bodies, and commercial sponsors on complex sports regulations, transfer contracts, image rights, and representation before the FIFA Football Tribunal and CAS.",
    services: [
      "Player Transfer & Representation Agreements",
      "FIFA Tribunal & CAS Arbitration",
      "Image Rights & Sponsorship Contracts",
      "Club Governance & Academy Structuring",
      "Regulatory & Disciplinary Defense",
      "Sports Infrastructure & Event Licensing"
    ],
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop",
    link: "/practices/sports"
  }
];

const Practices: React.FC = () => {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Apex Advocates Practice Areas",
    itemListElement: PRACTICE_GROUPS.map((group, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: group.title,
      url: `${SITE_URL}/practices#${group.id}`,
    })),
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Apex Advocates",
    url: SITE_URL,
    areaServed: ["NG", "Africa"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    serviceType: [
      "Corporate Advisory",
      "Commercial Dispute Resolution",
      "Labour & Employment Law",
      "Sports Law & Governance"
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans">
      <Helmet>
        <title>Full-Service Corporate, Dispute Resolution & Sports Law | Apex Advocates</title>
        <meta
          name="description"
          content="Discover Apex Advocates' comprehensive commercial practice areas in Lagos, Nigeria: Corporate Advisory, Dispute Resolution, Employment Law, and Sports Law."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Advocates" />
        <meta property="og:title" content="Full-Service Practice Areas | Apex Advocates" />
        <meta
          property="og:description"
          content="Strategic legal counsel in Corporate Advisory, Dispute Resolution, Employment Law, and Sports Law in Nigeria and across Africa."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Full-Service Practice Areas | Apex Advocates" />
        <meta
          name="twitter:description"
          content="Strategic legal counsel in Corporate Advisory, Dispute Resolution, Employment Law, and Sports Law in Nigeria and across Africa."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      {/* Services Hero */}
      <header className="relative py-32 bg-black overflow-hidden border-b border-accent-gold/20">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gold/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1.5 px-5 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-accent-gold/20">
            Full-Service Commercial Law Firm
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Strategic Counsel for <br />
            <span className="text-accent-gold">Business, Industry & Governance</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed font-light">
            Apex Advocates provides partner-led legal representation across corporate transactions, commercial litigation, labor disputes, and specialized sports regulation across Nigeria and Africa.
          </p>
        </div>
      </header>

      {/* Main Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {PRACTICE_GROUPS.map((group, index) => (
            <div
              key={group.id}
              id={group.id}
              className={`flex flex-col lg:flex-row gap-16 items-center scroll-mt-32 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Column */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20">
                    <span className="material-icons text-accent-gold text-2xl">{group.icon}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">
                    {group.subtitle}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-6 uppercase tracking-tight">
                  {group.title}
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-light">
                  {group.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {group.services.map((service) => (
                    <div key={service} className="flex items-start gap-3 group">
                      <span className="material-icons text-accent-gold text-sm mt-1 transition-transform group-hover:scale-125">
                        verified
                      </span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                {group.link ? (
                  <Link
                    to={group.link}
                    className="inline-flex items-center gap-4 bg-black dark:bg-accent-gold text-white dark:text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:gap-6 transition-all shadow-xl"
                  >
                    Explore Dedicated Sports Practice <span className="material-icons">east</span>
                  </Link>
                ) : (
                  <a
                    href="https://calendly.com/apexsportslaw-info/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-black dark:bg-accent-gold text-white dark:text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:gap-6 transition-all shadow-xl"
                  >
                    Request Consultation <span className="material-icons">east</span>
                  </a>
                )}
              </div>

              {/* Image Column */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-accent-gold/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-accent-gold/10 shadow-2xl">
                    <img
                      src={group.imageUrl}
                      alt={`${group.title} legal practice`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-24 bg-slate-50 dark:bg-secondary-grey/5 border-y border-accent-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-4">
            Our Methodology
          </h2>
          <h3 className="text-4xl font-black text-black dark:text-white mb-16 uppercase tracking-tight">
            The Apex Advantage
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Partner-Led Service",
                desc: "Every matter is managed directly by our Principal Partner, ensuring rigorous accountability, strategic focus, and senior legal direction.",
                icon: "person_outline",
              },
              {
                title: "Dispute Resolution First",
                desc: "We deploy commercial negotiation and arbitration to resolve disputes efficiently, protecting enterprise value and avoiding prolonged litigation.",
                icon: "handshake",
              },
              {
                title: "Commercial Pragmatism",
                desc: "We provide clear, actionable risk assessment that empowers corporate leaders to execute strategic business decisions with confidence.",
                icon: "business_center",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="p-8 bg-white dark:bg-black rounded-3xl border border-accent-gold/5 shadow-xl transition-all hover:border-accent-gold/30 group text-left"
              >
                <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-gold transition-colors">
                  <span className="material-icons text-accent-gold text-3xl group-hover:text-black">
                    {step.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-black dark:text-white uppercase tracking-tight">
                  {step.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Inquiry CTA */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
          <h2 className="text-4xl font-black text-white uppercase tracking-tight">
            Ready for Strategic Commercial Representation?
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            Schedule a confidential consultation with our principal partner to discuss your corporate, dispute resolution, or sports advisory needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <a
              href="https://calendly.com/apexsportslaw-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-gold text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-yellow-600 transition-all shadow-xl shadow-accent-gold/20"
            >
              Book Partner Consultation
            </a>

            <Link
              to="/contact"
              className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
            >
              Direct Office Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Practices;
