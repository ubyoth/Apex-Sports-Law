import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PRACTICE_AREAS } from "../constants";

const SITE_URL = "https://apexsportslaw.com";
const PAGE_URL = `${SITE_URL}/practices`;
const OG_IMAGE = `${SITE_URL}/og/practice-areas.jpg`; // you can temporarily use /og/default.jpg

const Practices: React.FC = () => {
  const featuredAreas = PRACTICE_AREAS.filter(
    (area) =>
      area.id === "sports" ||
      area.id === "corporate-advisory" ||
      area.id === "arbitration"
  );

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Practice Areas",
    itemListElement: featuredAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: area.title,
      url:
        area.id === "sports"
          ? `${SITE_URL}/practices/sports`
          : `${SITE_URL}/practices#${area.id}`,
    })),
  };

  // Optional: org-level info (safe + generic)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Apex Sports Law",
    url: SITE_URL,
    areaServed: "NG",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    serviceType: ["Sports law", "Arbitration", "Corporate advisory"],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Helmet>
        {/* Primary SEO */}
        <title>Practice Areas | Sports Law, Arbitration & Corporate Advisory | Apex Sports Law</title>
        <meta
          name="description"
          content="Explore Apex Sports Law’s practice areas in Lagos, Nigeria: Sports Law (football contracts, transfers, FIFA regulations), Arbitration & Dispute Resolution, and Corporate Advisory."
        />
        <link rel="canonical" href={PAGE_URL} />

        {/* Indexing / crawling */}
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Sports Law" />
        <meta property="og:title" content="Practice Areas | Apex Sports Law" />
        <meta
          property="og:description"
          content="Sports Law, Arbitration & Dispute Resolution, and Corporate Advisory services in Lagos, Nigeria."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Practice Areas | Apex Sports Law" />
        <meta
          name="twitter:description"
          content="Sports Law, Arbitration & Dispute Resolution, and Corporate Advisory services in Lagos, Nigeria."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      {/* Services Hero */}
      <header className="relative py-28 bg-black overflow-hidden border-b border-accent-gold/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-accent-gold/20">
            Legal Excellence
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Our <span className="text-accent-gold">Practice</span> Areas
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed font-light">
            Apex Sports Law offers a comprehensive suite of legal services designed
            to protect and promote the commercial interests of our global and local clientele.
          </p>
        </div>
      </header>

      {/* Main Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {featuredAreas.map((area, index) => (
            <div
              key={area.id}
              id={area.id}
              className={`flex flex-col lg:flex-row gap-16 items-center scroll-mt-32 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20">
                    <span className="material-icons text-accent-gold">{area.icon}</span>
                  </div>

                  {/* Keep these as H2s for page structure */}
                  <h2 className="text-3xl font-bold text-black dark:text-white uppercase tracking-tight">
                    {area.title}
                  </h2>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                  {area.description} Our firm leverages a decade of experience to provide
                  "outside the box" resolutions for complex legal challenges within this domain.
                  We ensure that every strategy is meticulously tailored to the specific needs of
                  our clients.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {area.services.map((service) => (
                    <div key={service} className="flex items-start gap-3 group">
                      <span className="material-icons text-accent-gold text-sm mt-1 transition-transform group-hover:scale-125">
                        verified
                      </span>
                      <span className="text-sm font-semibold text-black dark:text-slate-300">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                {area.id === "sports" ? (
                  <Link
                    to="/practices/sports"
                    className="inline-flex items-center gap-4 bg-black dark:bg-accent-gold text-white dark:text-black px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:gap-6 transition-all shadow-xl"
                    aria-label="Explore Sports Law practice area"
                  >
                    Explore Sports Law <span className="material-icons">east</span>
                  </Link>
                ) : (
                  <a
                    href="https://calendly.com//apexsportslaw/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-black dark:bg-accent-gold text-white dark:text-black px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:gap-6 transition-all shadow-xl"
                    aria-label="Request a consultation"
                  >
                    Request Consultation <span className="material-icons">east</span>
                  </a>
                )}
              </div>

              {/* Visual Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-accent-gold/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-accent-gold/10">
                    <img
                      src={`https://images.unsplash.com/${
                        index % 2 === 0
                          ? "photo-1589829545856-d10d557cf95f"
                          : "photo-1497366216548-37526070297c"
                      }?q=80&w=2070&auto=format&fit=crop`}
                      alt={`${area.title} legal services`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
          <h2 className="text-accent-gold font-bold uppercase tracking-widest text-sm mb-4">
            Our Methodology
          </h2>
          <h3 className="text-4xl font-extrabold text-black dark:text-white mb-16">
            The Apex Advantage
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Partner-Led Service",
                desc: "Every client works directly with the firm's principal, ensuring continuity, accountability, and senior-level expertise on every matter.",
                icon: "person_outline",
              },
              {
                title: "Alternative Dispute Resolution First",
                desc: "We deploy negotiation, mediation, and arbitration as strategic tools to resolve disputes efficiently, preserve relationships, and avoid the cost and unpredictability of litigation.",
                icon: "handshake",
              },
              {
                title: "Commercial Pragmatism",
                desc: "Legal advice is only valuable when it enables business decisions. We prioritize clear counsel, risk assessment, and solutions that align with client objectives.",
                icon: "business_center",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="p-8 bg-white dark:bg-black rounded-3xl border border-accent-gold/5 shadow-xl transition-all hover:border-accent-gold/30 group"
              >
                <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-gold transition-colors">
                  <span className="material-icons text-accent-gold text-3xl group-hover:text-black">
                    {step.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-black dark:text-white uppercase tracking-tight">
                  {step.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Inquiry CTA */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold rounded-full blur-[160px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tight">
            Need a Bespoke Legal Strategy?
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://calendly.com/apexsportslaw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-gold text-black px-8 py-3.5 rounded-lg font-black uppercase tracking-widest text-xs hover:bg-yellow-600 transition-all shadow-xl shadow-accent-gold/20"
            >
              Book Consultation
            </a>

            <Link
              to="/success-stories"
              className="bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-lg font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
            >
              Client Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Practices;
