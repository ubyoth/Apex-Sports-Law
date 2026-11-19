
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const PAGE_URL = `${SITE_URL}/practices`;
const OG_IMAGE = `${SITE_URL}/og/practice-areas.jpg`;

type PracticeGroup = {
  id: string;
  title: string;
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
    icon: "sports_soccer",
    description:
      "We maintain a full boutique sports law practice serving athletes, coaches, agents, clubs, leagues, federations, and sports brands. We draft and negotiate playing, coaching, and agent agreements and advise on domestic and international transfers under FIFA and federation rules. We represent clients before disciplinary panels, the FIFA Football Tribunal, and the Court of Arbitration for Sport (CAS) in contract, wage, eligibility, and agent fee disputes. We counsel governing bodies on constitutions, club licensing, anti-doping, integrity, and safeguarding compliance. And we structure and protect the commercial value of sport through image rights, sponsorship and endorsement deals, media and broadcasting rights, merchandising, and esports partnerships.",
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
    <div className="min-h-screen bg-white font-sans text-[#202020]">
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

        <script type="application/ld+json">
          {JSON.stringify(itemListJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(orgJsonLd)}
        </script>
      </Helmet>

      {/* Services Hero */}
      <header className="relative overflow-hidden border-b border-white/10 bg-[#202020] py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -right-32 -top-40 h-[600px] w-[600px] rounded-full bg-[#B99A55]/30 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Strategic Legal <br />
            <span className="text-[#B99A55]">Counsel for Business</span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base font-light leading-8 text-neutral-300 md:text-lg">
            Apex Advocates is a full-service commercial law practice. We provide strategic legal
            counsel to businesses, institutions, and individuals across corporate advisory, dispute
            resolution, employment, regulatory compliance, intellectual property, and sports law.
          </p>
        </div>
      </header>

      {/* Main Services Grid */}
      <section className="bg-[#FAF9F6] py-20 md:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8 md:space-y-24">
          {PRACTICE_GROUPS.map((group, index) => (
            <div
              key={group.id}
              id={group.id}
              className={`flex scroll-mt-28 flex-col items-center gap-9 lg:flex-row lg:gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Column */}
              <div className="w-full lg:w-7/12">
                <h2 className="mb-5 text-2xl font-semibold leading-tight tracking-tight text-[#202020] md:text-3xl lg:text-4xl">
                  {group.title}
                </h2>

                <p className="mb-7 text-[15px] font-light leading-8 text-[#555555] md:text-base">
                  {group.description}
                </p>

                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {group.services.map((service) => (
                    <div key={service} className="group flex items-start gap-3">
                      <span className="material-icons mt-1 text-sm text-[#A88B4D] transition-transform group-hover:scale-110">
                        verified
                      </span>
                      <span className="text-sm font-medium text-[#454545]">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                {group.link && (
                  <Link
                    to={group.link}
                    className="inline-flex items-center gap-3 border border-[#202020] bg-[#202020] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#A88B4D] hover:bg-[#A88B4D] hover:text-[#202020]"
                  >
                    Explore Dedicated Sports Practice
                    <span className="material-icons text-base">east</span>
                  </Link>
                )}
              </div>

              {/* Image Column */}
              <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:w-5/12">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-[#E9E6DE] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative aspect-[5/4] overflow-hidden border border-[#E9E6DE] bg-[#F4F2ED]">
                    <img
                      src={group.imageUrl}
                      alt={`${group.title} legal practice`}
                      className="h-full w-full scale-[1.03] object-cover grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="border-y border-[#E9E6DE] bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A88B4D]">
            Our Methodology
          </h2>
          <h3 className="mb-14 text-3xl font-semibold tracking-tight text-[#202020] md:text-4xl">
            The Apex Advantage
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "Partner-Led Service",
                desc: "Every matter is managed directly by our Principal Partner, ensuring rigorous accountability, strategic focus, and senior legal direction.",
              },
              {
                title: "Dispute Resolution First",
                desc: "We deploy commercial negotiation and arbitration to resolve disputes efficiently, protecting enterprise value and avoiding prolonged litigation.",
              },
              {
                title: "Commercial Pragmatism",
                desc: "We provide clear, actionable risk assessment that empowers business leaders to execute strategic decisions with confidence.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="group border border-[#E9E6DE] bg-[#FAF9F6] p-7 text-left transition-all duration-300 hover:border-[#B99A55] md:p-8"
              >
                <h4 className="mb-4 text-xl font-semibold tracking-tight text-[#202020]">
                  {step.title}
                </h4>
                <p className="text-sm font-light leading-7 text-[#666666]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Inquiry CTA */}
      <section className="relative overflow-hidden bg-[#202020] py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#B99A55]/10 blur-[130px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl space-y-7 px-4 text-center">
          <p className="mx-auto max-w-2xl text-base font-light leading-8 text-neutral-300 md:text-lg">
            Schedule a confidential consultation with us to discuss your needs.
          </p>

          <div className="flex flex-col justify-center gap-5 pt-3 sm:flex-row">
            <a
              href="https://calendly.com/apexsportslaw-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#B99A55] bg-[#B99A55] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#202020] transition-all duration-300 hover:border-[#D0B77D] hover:bg-[#D0B77D]"
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
