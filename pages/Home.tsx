import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PRACTICE_AREAS, FOUNDER_BIO } from "../constants";

const SITE_URL = "https://apexsportslaw.com";
const OG_IMAGE = `${SITE_URL}/og/default.jpg`;

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

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
        <section className="relative h-[85vh] flex items-center overflow-hidden">

          <div className="absolute inset-0 z-0">
            <img
              alt="Modern law office interior"
              className="w-full h-full object-cover grayscale opacity-50"
              src="/hero-bg.png"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Precision. <br />
                <span className="text-accent-gold">Strategy.</span> <br />
                Resolution.
              </h1>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                Apex Advocates is a premier full-service law practice delivering expert counsel in corporate advisory, commercial dispute resolution, employment law, and specialized sports law across Nigeria and Africa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/practices"
                  className="bg-accent-gold text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-xl shadow-accent-gold/20 text-center"
                >
                  Explore Our Services
                </Link>
              </div>

            </div>
          </div>

        </section>

        {/* Practice Areas Section */}
        <section className="py-24 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-accent-gold font-bold uppercase tracking-widest text-sm mb-3">
                Our Expertise
              </h2>
              <h3 className="text-4xl font-extrabold text-black dark:text-white">
                Core Practice Areas
              </h3>
              <div className="w-20 h-1 bg-accent-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRACTICE_AREAS.filter(
                (area) =>
                  area.id === "sports" ||
                  area.id === "corporate-advisory" ||
                  area.id === "arbitration"
              ).map((area) => (
                <div
                  key={area.id}
                  className="group p-8 bg-slate-50 dark:bg-secondary-grey/50 rounded-xl border border-transparent hover:border-accent-gold/20 transition-all hover:shadow-2xl hover:shadow-accent-gold/5 flex flex-col"
                >
                  <div className="w-14 h-14 bg-accent-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-gold transition-colors shrink-0">
                    <span className="material-icons text-accent-gold group-hover:text-black">
                      {area.icon}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold mb-4 text-black dark:text-white">
                    {area.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {area.description}
                  </p>

                  <Link
                    to={area.id === "sports" ? "/practices/sports" : `/practices#${area.id}`}
                    className="text-accent-gold font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More <span className="material-icons text-sm">arrow_forward</span>
                  </Link>
                </div>
              ))}
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
                  alt="Yahaya Oruma Othman, Esq."
                  className="w-full h-full min-h-[450px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                  src={FOUNDER_BIO.imageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 dark:to-black/30 pointer-events-none"></div>
              </div>

              {/* Content Column */}
              <div className="w-full md:w-[60%] p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-accent-gold font-bold uppercase tracking-widest text-xs mb-3">
                  Leadership
                </h2>

                <h3 className="text-3xl lg:text-4xl font-black text-black dark:text-white mb-6 uppercase tracking-tight">
                  Meet Our Founder
                </h3>

                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 italic border-l-4 border-accent-gold pl-6">
                  "Excellence in legal practice is not an act, but a habit of meticulous precision and
                  relentless strategy."
                </p>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Yahaya Oruma Othman is the Founder and Principal Partner of Apex Advocates.
                </p>

                <div className="flex flex-wrap gap-8 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center">
                      <span className="material-icons text-accent-gold">school</span>
                    </div>
                    <span className="font-bold dark:text-white text-xs uppercase tracking-wider">
                      LL.B, University of Jos
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center">
                      <span className="material-icons text-accent-gold">history_edu</span>
                    </div>
                    <span className="font-bold dark:text-white text-xs uppercase tracking-wider">
                      10+ Years Experience
                    </span>
                  </div>
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-4 bg-black dark:bg-accent-gold text-white dark:text-black px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:gap-6 transition-all shadow-xl self-start"
                >
                  Full Professional Profile{" "}
                  <span className="material-icons">arrow_forward</span>
                </Link>
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
                  <img src={logo} alt={`Client ${index + 1}`} className="h-30 object-contain" />
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
            <p className="text-xl text-slate-400 mb-10">
              Schedule a consultation with our experts to discuss your requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/othmany13/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-gold text-black px-8 py-3.5 rounded-lg font-bold text-base hover:bg-yellow-600 transition-all shadow-xl shadow-accent-gold/20"
              >
                Book a Consultation
              </a>

              <Link
                to="/success-stories"
                className="bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-lg font-bold text-base hover:bg-white/10 transition-all"
              >
                Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
