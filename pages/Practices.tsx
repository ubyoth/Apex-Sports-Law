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
    subtitle: "Entity Structuring, Compliance & Commercial Contracts",
    icon: "business_center",
    description:
      "We provide strategic counsel to startups and established enterprises navigating the Nigerian and broader African business landscape. From entity structuring and CAC compliance to shareholder agreements, mergers and acquisitions, investment transactions, and complex commercial contracting, we ensure complete risk mitigation at every stage of your business.",
    services: [],
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution & Commercial Arbitration",
    subtitle: "Litigation, Mediation & Arbitration",
    icon: "gavel",
    description:
      "We represent businesses, institutions, and individuals in commercial litigation, mediation, and domestic and international arbitration. Our disputes practice spans breach of contract, debt recovery, shareholder and partnership disputes, and enforcement of judgments and arbitral awards, with urgent injunctive relief where speed matters. We pursue negotiated resolution wherever it serves your interests and litigate decisively when it does not.",
    services: [],
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "labour-employment",
    title: "Labour & Employment Law",
    subtitle: "Employment Contracts, Workplace Policy & Employment Disputes",
    icon: "groups",
    description:
      "We advise employers and senior executives on the full employment lifecycle: drafting employment contracts and executive agreements, building staff handbooks and workplace policies, and managing disciplinary processes, terminations, and redundancies in line with Nigerian labour law. We also represent clients in employment disputes, and advise on statutory obligations such as pensions and employee compensation.",
    services: [],
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "regulatory-compliance",
    title: "Regulatory & Compliance Advisory",
    subtitle: "Licensing, Data Protection & Corporate Governance",
    icon: "policy",
    description:
      "We help businesses navigate the regulatory environment they operate in. Our compliance practice covers sector licensing and regulatory approvals, data protection, anti-money laundering and consumer protection obligations, corporate governance, and the design of internal compliance policies and programmes. We also represent clients in regulatory inquiries and enforcement matters, helping you stay compliant, avoid penalties, and protect your licence to operate.",
    services: [],
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property & Brand Protection",
    subtitle: "Trademarks, Copyrights & Commercial Licensing",
    icon: "verified_user",
    description:
      "We help businesses, creators, and innovators protect and monetize their intangible assets. Our practice covers trademark and copyright registration, brand clearance and portfolio management, licensing and franchising agreements, technology and software licensing, and infringement and anti-counterfeiting enforcement, so that your brand and ideas remain secure as you grow.",
    services: [],
    imageUrl:
      "https://res.cloudinary.com/dq7vjblwd/image/upload/v1795008255/markus-winkler-9XfSFjcwGh0-unsplash_kmkg2s.jpg?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "sports-governance",
    title: "Sports Law",
    subtitle: "Representation, Disputes, Governance & Commercial Rights",
    icon: "sports_soccer",
    description:
      "Alongside our commercial practice, we maintain a full boutique sports law practice serving athletes, coaches, agents, clubs, leagues, federations, and sports brands. We draft and negotiate playing, coaching, and agent agreements and advise on domestic and international transfers under FIFA and federation rules. We represent clients before disciplinary panels, the FIFA Football Tribunal, and the Court of Arbitration for Sport (CAS) in contract, wage, eligibility, and agent fee disputes. We counsel governing bodies on constitutions, club licensing, anti-doping, integrity, and safeguarding compliance. And we structure and protect the commercial value of sport through image rights, sponsorship and endorsement deals, media and broadcasting rights, merchandising, and esports partnerships.",
    services: [],
    imageUrl:
      "https://res.cloudinary.com/dq7vjblwd/image/upload/v1779473746/businessman-signing-sports-contract-with-soccer-ball-desk_1235831-54791_ivilyz.png?q=80&w=2070&auto=format&fit=crop",
    link: "/practices/sports",
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
    description:
      "Full-service commercial law practice providing strategic legal counsel in Nigeria and across Africa.",
    areaServed: ["NG", "Africa"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    serviceType: [
      "Corporate & Commercial Advisory",
      "Dispute Resolution & Commercial Arbitration",
      "Labour & Employment Law",
      "Regulatory & Compliance Advisory",
      "Intellectual Property & Brand Protection",
      "Sports Law",
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans">
      <Helmet>
        <title>Full-Service Commercial Law Firm | Apex Advocates</title>
        <meta
          name="description"
          content="Apex Advocates is a full-service commercial law practice in Lagos, Nigeria, providing strategic legal counsel across corporate, dispute resolution, employment, regulatory compliance, intellectual property, and sports law."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Advocates" />
        <meta property="og:title" content="Full-Service Practice Areas | Apex Advocates" />
        <meta
          property="og:description"
          content="Strategic legal counsel across corporate, disputes, employment, IP, and sports law in Nigeria and across Africa."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Practice Areas | Apex Advocates" />
        <meta
          name="twitter:description"
          content="Strategic legal counsel across corporate, disputes, employment, IP, and sports law in Nigeria and across Africa."
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
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Strategic Legal <br />
            <span className="text-accent-gold">Counsel for Business</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-white leading-relaxed font-light">
            Apex Advocates is a full-service commercial law practice. We provide strategic legal
            counsel to businesses, institutions, and individuals across corporate advisory, dispute
            resolution, employment, regulatory compliance, intellectual property, and sports law.
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
                <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-6 tracking-tight">
                  {group.title}
                </h2>

                <p className="text-lg text-neutral-600 dark:text-white leading-relaxed mb-8 font-light">
                  {group.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {group.services.map((service) => (
                    <div key={service} className="flex items-start gap-3 group">
                      <span className="material-icons text-accent-gold text-sm mt-1 transition-transform group-hover:scale-125">
                        verified
                      </span>
                      <span className="text-sm font-semibold text-neutral-800 dark:text-white">
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
          <h2 className="font-sans text-accent-gold font-bold uppercase tracking-widest text-xs mb-4">
            Our Methodology
          </h2>
          <h3 className="text-4xl font-semibold text-black dark:text-white mb-16 tracking-tight">
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
                desc: "We provide clear, actionable risk assessment that empowers business leaders to execute strategic decisions with confidence.",
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
                <h4 className="text-xl font-semibold mb-4 text-black dark:text-white tracking-tight">
                  {step.title}
                </h4>
                <p className="text-neutral-600 dark:text-white text-sm leading-relaxed font-light">
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
          <h2 className="text-4xl font-semibold text-white tracking-tight">
            Need Commercial Representation?
          </h2>
          <p className="text-white text-lg font-light max-w-2xl mx-auto">
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
