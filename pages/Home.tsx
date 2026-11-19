import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PRACTICE_AREAS, FOUNDER_BIO } from "../constants";

const SITE_URL = "https://apexsportslaw.com";
const OG_IMAGE = `${SITE_URL}/og/default.jpg`;
const FALLBACK_SERVICE_IMAGE =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop";

const SERVICE_IMAGES: Record<string, string> = {
  sports:
    "https://res.cloudinary.com/dq7vjblwd/image/upload/v1795099794/sasun-bughdaryan-FaTLrG5-ViE-unsplash_dy07yr.jpg?q=80&w=2093&auto=format&fit=crop",
  compliance:
    "https://res.cloudinary.com/dq7vjblwd/image/upload/v1795099791/jakub-zerdzicki-fXlL5I0IvK0-unsplash_pydhio.jpg?q=80&w=2069&auto=format&fit=crop",
  "corporate-advisory":
    "https://res.cloudinary.com/dq7vjblwd/image/upload/v1795099793/adeolu-eletu-E7RLgUjjazc-unsplash_adbzf4.jpg?q=80&w=2069&auto=format&fit=crop",
  arbitration:
    "https://res.cloudinary.com/dq7vjblwd/image/upload/v1795099794/sasun-bughdaryan-FaTLrG5-ViE-unsplash_dy07yr.jpg?q=80&w=2070&auto=format&fit=crop",
  labour:
    "https://res.cloudinary.com/dq7vjblwd/image/upload/v1795099801/jason-charters-IorqsMssQH0-unsplash_khpbxl.jpg?q=80&w=2070&auto=format&fit=crop",
  ip:
    "https://res.cloudinary.com/dq7vjblwd/image/upload/v1795099793/monineath-horn-wrF8Oft14sE-unsplash_ua0ob9.jpg?q=80&w=2072&auto=format&fit=crop",
};

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Apex Advocates | Corporate Law, Dispute Resolution & Sports Law in Nigeria</title>

        <meta
          name="description"
          content="Apex Advocates is a premier full-service law firm in Lagos, Nigeria, specializing in corporate advisory, commercial dispute resolution, labor law, and sports law."
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
          content="Full-service commercial law practice providing strategic legal counsel across corporate advisory, dispute resolution, employment, and sports law in Nigeria and Africa."
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
          content="Full-service commercial law practice providing strategic legal counsel across corporate advisory, dispute resolution, employment, and sports law in Nigeria and Africa."
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

      <div className="flex flex-col font-sans">
        {/* Hero Section */}
        <section className="relative h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Modern law office interior"
              className="w-full h-full object-cover grayscale opacity-50"
              src="/hero-bg.png"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 md:mt-32">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug mb-6">
                Protecting Athletes. <br />
                <span className="text-accent-gold">Resolving Disputes.</span> <br />
                Enhancing Compliance.
              </h1>
            </div>
          </div>
        </section>

        {/* Practice Areas Section (6 cards: 3 columns x 2 rows) */}
        <section className="py-24 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-extrabold text-black dark:text-white">
                Our Services
              </h3>
              <div className="w-20 h-1 bg-accent-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {PRACTICE_AREAS.slice(0, 6).map((area) => {
                const targetPath =
                  area.id === "sports" ? "/practices/sports" : `/practices#${area.id}`;
                const imageSrc = SERVICE_IMAGES[area.id] || FALLBACK_SERVICE_IMAGE;

                return (
                  <Link
                    key={area.id}
                    to={targetPath}
                    className="group block text-left"
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-secondary-grey">
                      <img
                        src={imageSrc}
                        alt={area.title}
                        className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="w-10 h-1.5 bg-accent-gold mt-0 mb-3"></div>

                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 group-hover:text-accent-gold transition-colors">
                      {area.title}
                    </h4>
                  </Link>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/practices"
                className="inline-flex items-center gap-2 bg-black dark:bg-accent-gold text-white dark:text-black px-10 py-4 rounded-xl font-bold hover:gap-4 transition-all shadow-2xl"
              >
                View All Services <span className="material-icons">east</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 bg-slate-50 dark:bg-legal-black overflow-hidden border-y border-accent-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-secondary-grey/20 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-accent-gold/10 flex flex-col md:flex-row items-stretch">
              {/* Image Column */}
              <div className="w-full md:w-[30%] relative">
                <img
                  alt={FOUNDER_BIO.name}
                  className="w-full h-full min-h-[450px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                  src={FOUNDER_BIO.imageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 dark:to-black/30 pointer-events-none"></div>
              </div>

              {/* Content Column */}
              <div className="w-full md:w-[70%] p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <span className="text-accent-gold text-xs font-black uppercase tracking-[0.3em] mb-3 block">
                    Leadership & Counsel
                  </span>
                  <h3 className="text-3xl font-black text-black dark:text-white mb-2">
                    {FOUNDER_BIO.name}
                  </h3>
                  <p className="text-accent-gold font-bold text-sm mb-6 uppercase tracking-wider">
                    {FOUNDER_BIO.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-light">
                    {FOUNDER_BIO.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-accent-gold/10 flex flex-wrap items-center justify-between gap-4">
                  {/*
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-3 bg-black dark:bg-accent-gold text-white dark:text-black px-8 py-3.5 rounded-xl font-black uppercase tracking-widest text-xs hover:gap-4 transition-all shadow-xl"
                  >
                    Read Full Bio <span className="material-icons">east</span>
                  </Link>
                  */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-24 bg-white dark:bg-black border-t border-accent-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-accent-gold font-bold uppercase tracking-widest text-sm mb-3">
                Trusted By
              </h2>
              <h3 className="text-4xl font-extrabold text-black dark:text-white">Our Clients</h3>
              <div className="w-20 h-1 bg-accent-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              {[
                "https://res.cloudinary.com/dq7vjblwd/image/upload/v1771517207/Teambonding_Nigeria_hi8tk4.png",
                "https://res.cloudinary.com/dq7vjblwd/image/upload/v1771517004/images_urbidu.jpg",
                "https://res.cloudinary.com/dq7vjblwd/image/upload/v1771517330/itslearningtime_nsyi60.png",
                "https://res.cloudinary.com/dq7vjblwd/image/upload/v1771518667/saharan_titans_xmitsa.png",
              ].map((logo, index) => (
                <div key={index} className="flex items-center justify-center h-full">
                  <img src={logo} alt={`Client ${index + 1}`} className="h-20 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-20 border-t border-accent-gold/20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your Legal Interests Today
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/apexsportslaw-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-gold text-black px-8 py-3.5 rounded-lg font-bold text-base hover:bg-yellow-600 transition-all shadow-xl shadow-accent-gold/20"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
