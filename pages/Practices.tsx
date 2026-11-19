import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const PAGE_URL = `${SITE_URL}/practices`;
const OG_IMAGE = `${SITE_URL}/og/practice-areas.jpg`;

type PracticeGroup = {
  id: string;
  title: string;
  subtitle: string; // Can be left in type or removed if unused elsewhere
  icon: string;
  description: string;
  services: string[];
  imageUrl: string;
  link?: string;
};

const PRACTICE_GROUPS: PracticeGroup[] = [
  {
    id: "sports-governance",
    title: "Athlete, Coach & Agent Representation",
    subtitle: "Contracts, FIFA DRC Representation & Athlete Advisory",
    icon: "sports_soccer",
    description:
      "We provide end-to-end representation for athletes, coaches, and licensed agents across every stage of a sporting career. Our practice handles the drafting and negotiation of playing contracts, coaching agreements, termination clauses, and performance bonus structures. We also advise on domestic and international transfers, ensuring compliance with FIFA and local federation regulations regarding solidarity mechanisms, training compensation calculations, and player-agent representation agreements.",
    services: [
    ],
    imageUrl: "https://res.cloudinary.com/dq7vjblwd/image/upload/v1779473746/businessman-signing-sports-contract-with-soccer-ball-desk_1235831-54791_ivilyz.png?q=80&w=2070&auto=format&fit=crop",
    link: "/practices/sports"
  }, 
  
  {
    id: "corporate-commercial",
    title: "Corporate & Commercial Advisory",
    subtitle: "",
    icon: "business_center",
    description:
      "We provide strategic counsel to startups and established enterprises navigating the Nigerian and broader African business landscape. From entity structuring and CAC compliance to complex commercial contracting, we ensure complete risk mitigation.",
    services: [
      
    ],
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution & Commercial Arbitration",
    subtitle: "Litigation, Mediation & International Arbitration",
    description:
      "We represent athletes, clubs, agents, and governing bodies before domestic disciplinary panels, federation chambers like the FIFA Football Tribunal, and the Court of Arbitration for Sport (CAS). Our disputes practice spans unilateral contract terminations, unpaid wages, agent fee disputes, and selection or eligibility challenges, backed by urgent injunctive relief, defamation defense, and online abuse takedowns during tournaments and transfer windows.",
    services: [
    ],
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "labour-employment",
    title: "Regulatory & League Compliance",
    subtitle: "",
    description:
      "We counsel federations, leagues, national sports commissions, and clubs on drafting constitutions, bylaws, ethics codes, and club licensing frameworks. We also manage compliance with World Anti-Doping Agency (WADA) codes, match-fixing and anti-corruption protocols, athlete safeguarding policies, salary caps, and Financial Fair Play sustainability criteria.",
    services: [
    ],
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property & Brand Protection",
    subtitle: "Trademarks, Copyrights & Commercial Licensing",
    description:
      "We help talent, clubs, and corporate partners monetize and protect sports assets by structuring image rights companies, negotiating brand ambassador endorsements, and managing Name, Image, and Likeness (NIL) deals. Our practice also covers kit supply agreements, stadium naming rights, merchandising licenses, ambush marketing protection, broadcasting and streaming/OTT licensing, anti-piracy enforcement, and esports partnerships.",
    services: [
    ],
    imageUrl: "https://res.cloudinary.com/dq7vjblwd/image/upload/v1795008255/markus-winkler-9XfSFjcwGh0-unsplash_kmkg2s.jpg?q=80&w=2072&auto=format&fit=crop",
  },

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
      "Intellectual Property & Brand Protection",
      "Sports Law & Governance"
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans">
      <Helmet>
        <title>Full-Service Sports Law Firm | Apex Advocates</title>
        <meta
          name="description"
          content="Discover Apex Advocates' comprehensive commercial sports law practice in Lagos, Nigeria and across Africa."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Advocates" />
        <meta property="og:title" content="Full-Service Practice Areas | Apex Advocates" />
        <meta
          property="og:description"
          content="Strategic legal counsel in Sports Law in Nigeria and across Africa."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sports Law Practice Areas | Apex Advocates" />
        <meta
          name="twitter:description"
          content="Strategic legal counsel in Sports Law in Nigeria and across Africa."
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
          {/* Hero pill badge removed here */}

          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Strategic Counsel for <br />
            <span className="text-accent-gold">Business, Industry & Governance</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed font-light">
            We focus exclusively on resolving sports-related disputes and protecting athletes’ rights, through litigation, arbitration and alternative dispute resolution methods.
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
                {/* Subtitle with icon block removed here */}

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
            Need Commercial Representation?
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            Schedule a confidential consultation with us to discuss your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <a
              href="https://calendly.com/apexsportslaw-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-gold text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-yellow-600 transition-all shadow-xl shadow-accent-gold/20"
            >
              Book Consultation
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Practices;
