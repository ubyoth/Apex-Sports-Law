
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PRACTICE_AREAS } from "../constants";

const SITE_URL = "https://apexsportslaw.com";
const OG_IMAGE = `${SITE_URL}/og/default.jpg`;

const SERVICE_IMAGES: Record<string, string> = {
  sports:
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop",
  compliance:
    "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
  "corporate-advisory":
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  arbitration:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
  labour:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  ip:
    "https://images.unsplash.com/photo-1453941403708-3c32160971fd?q=80&w=2072&auto=format&fit=crop",
};

const FALLBACK_SERVICE_IMAGE =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop";

/*
 * FOUNDER CONTENT — TEMPORARILY DISABLED
 *
 * The founder biography and qualifications are retained here
 * for possible future use.
 *
const FOUNDER_PARAGRAPHS = [
  "Yahaya Oruma Othman is the Founder and Principal Partner of Apex Advocates, serving clients across Nigeria and Africa. An Associate of the Chartered Institute of Arbitrators (UK) and LawInSport mentee, he brings over a decade of private practice experience to the business and regulation of sport.",
  "Drawing on a strong background in high-stakes litigation, employment disputes, and corporate transactions, he helps sporting stakeholders navigate complex regulatory regimes, structure endorsement and licensing deals, and resolve disputes efficiently.",
  "Apex Advocates was established to deliver agile, specialized, and commercially grounded legal counsel tailored to the evolving sports ecosystem across Africa and the world over.",
];

const FOUNDER_QUALIFICATIONS = [
  "Master in International Sports Law (in view) – ISDE",
  "Business of Sports Institute (BOI), Sports Business & Administration Course",
  "LL.B, University of Jos",
  "Barrister & Solicitor of the Supreme Court of Nigeria (2015)",
  "Associate, Chartered Institute of Arbitrators (UK)",
  "Member, Nigerian Bar Association (NBA)",
];
*/

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Apex Advocates | Corporate Law, Dispute Resolution & Sports Law in
          Nigeria
        </title>

        <meta
          name="description"
          content="Apex Advocates is a premier full-service law firm in Lagos, Nigeria, specializing in corporate advisory, commercial dispute resolution, labour and employment law, and sports law."
        />

        <link rel="canonical" href="https://apexsportslaw.com/" />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Advocates" />
        <meta
          property="og:title"
          content="Apex Advocates | Corporate Law, Dispute Resolution & Sports Law"
        />
        <meta
          property="og:description"
          content="Full-service commercial law practice providing strategic legal counsel across corporate advisory, commercial dispute resolution, labour and employment law, and sports law in Nigeria and Africa."
        />
        <meta property="og:url" content="https://apexsportslaw.com/" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Apex Advocates | Corporate Law, Dispute Resolution & Sports Law"
        />
        <meta
          name="twitter:description"
          content="Full-service commercial law practice providing strategic legal counsel across corporate, dispute resolution, employment, and sports law in Nigeria and Africa."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured Data: WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Apex Advocates",
            url: SITE_URL,
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/knowledge?search={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          })}
        </script>

        {/* Structured Data: LegalService */}
        <script type="application/ld+json">
          {JSON.stringify({
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
            image: OG_IMAGE,
            makesOffer: [
              { "@type": "Offer", name: "Corporate & Commercial Advisory" },
              { "@type": "Offer", name: "Arbitration & Dispute Resolution" },
              { "@type": "Offer", name: "Labour & Employment Law" },
              { "@type": "Offer", name: "Sports Law & Governance" },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white font-sans text-ink">

        {/* Hero Section */}
        <section className="relative min-h-[560px] h-[68vh] max-h-[780px] flex items-center overflow-hidden bg-[#171717]">
          <div className="absolute inset-0 z-0">
            <img
              alt="Modern law office interior"
              className="w-full h-full object-cover grayscale opacity-35"
              src="/hero-bg.png"
              loading="eager"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-12">
            <div className="max-w-3xl">
           
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-white leading-[1.16] mb-7">
                Protecting Athletes.
                <br />
                <span className="text-[#D0B77F]">
                  Resolving Disputes.
                </span>
                <br />
                Enhancing Compliance.
              </h1>

              <div className="w-12 h-[2px] bg-[#B99A55]" />
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

            <div className="text-center mb-12 lg:mb-14">
              <h2 className="text-3xl md:text-[2.35rem] font-semibold tracking-tight text-ink">
                Our Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 lg:gap-y-12">
              {PRACTICE_AREAS.slice(0, 6).map((area) => {
                const targetPath =
                  area.id === "sports"
                    ? "/practices/sports"
                    : `/practices#${area.id}`;

                const imageSrc =
                  SERVICE_IMAGES[area.id] || FALLBACK_SERVICE_IMAGE;

                return (
                  <Link
                    key={area.id}
                    to={targetPath}
                    className="group block text-left"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-warm-100 border border-warm-200">
                      <img
                        src={imageSrc}
                        alt={area.title}
                        className="w-full h-full object-cover grayscale transition-all duration-700 scale-100 group-hover:grayscale-0 group-hover:scale-[1.04]"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500" />
                    </div>

                    <div className="flex items-center justify-between gap-4 mt-5">
                      <h3 className="text-base md:text-lg font-semibold text-ink tracking-tight group-hover:text-[#A88B4D] transition-colors duration-300">
                        {area.title}
                      </h3>

                      <span className="flex items-center justify-center w-8 h-8 shrink-0 border border-warm-200 text-muted group-hover:border-[#B99A55] group-hover:text-[#A88B4D] transition-colors duration-300">
                        <span className="material-icons text-base">
                          east
                        </span>
                      </span>
                    </div>

                    <div className="w-8 h-[2px] bg-[#B99A55] mt-4 transition-all duration-500 group-hover:w-14" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-14 lg:mt-16 text-center">
              <Link
                to="/practices"
                className="inline-flex items-center justify-center gap-3 bg-[#202020] text-white px-7 py-3.5 font-semibold uppercase tracking-[0.14em] text-[10px] hover:bg-[#A88B4D] hover:text-white transition-colors duration-300"
              >
                View All Services
                <span className="material-icons text-base">
                  east
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/*
        ============================================================
        FOUNDER SECTION — TEMPORARILY DISABLED
        ============================================================

        <section className="py-20 lg:py-24 bg-slate-50 dark:bg-secondary-grey/5 overflow-hidden border-y border-accent-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-12">
              <p className="text-accent-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
                Leadership
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black dark:text-white">
                Meet Our Founder
              </h2>
            </div>

            <div className="bg-white dark:bg-black shadow-xl overflow-hidden border border-neutral-200 dark:border-accent-gold/10 flex flex-col md:flex-row items-stretch">

              <div className="w-full md:w-[35%] lg:w-[32%] relative overflow-hidden bg-neutral-200 dark:bg-secondary-grey">
                <img
                  alt={FOUNDER_BIO.name}
                  className="w-full h-full min-h-[420px] md:min-h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                  src={FOUNDER_BIO.imageUrl}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="w-full md:w-[65%] lg:w-[68%] p-8 md:p-10 lg:p-12 flex flex-col justify-between">

                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-black dark:text-white mb-2">
                    {FOUNDER_BIO.name}
                  </h3>

                  <p className="text-accent-gold font-bold text-xs mb-7 uppercase tracking-[0.2em]">
                    {FOUNDER_BIO.role}
                  </p>

                  <div className="space-y-4 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-9 font-light">
                    {FOUNDER_PARAGRAPHS.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-7 border-t border-neutral-200 dark:border-accent-gold/10">
                  <h4 className="text-accent-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
                    Qualifications & Credentials
                  </h4>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                    {FOUNDER_QUALIFICATIONS.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent-gold mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>

        END OF FOUNDER SECTION
        */}

        {/* Call to Action */}
        <section className="bg-[#202020] py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-[#B99A55]/[0.06] rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-5 text-center relative z-10">
        
       

            <p className="text-neutral-300 text-sm md:text-base font-light max-w-2xl mx-auto mb-9 leading-relaxed">
              Schedule a consultation with our team to discuss
              your legal needs and explore how we can assist you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/apexsportslaw-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#B99A55] text-[#171717] px-7 py-3.5 font-semibold uppercase tracking-[0.14em] text-[10px] hover:bg-[#D0B77F] transition-colors duration-300"
              >
                Book a Consultation
                <span className="material-icons text-base">
                  east
                </span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
