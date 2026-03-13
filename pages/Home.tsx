import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PRACTICE_AREAS, FOUNDER_BIO } from "../constants";

const SITE_URL = "https://apexsportslaw.com";
const OG_IMAGE = `${SITE_URL}/og/default.jpg`;

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      title: "The Law Library",
      category: "Research",
    },
    {
      url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop",
      title: "Chambers Boardroom",
      category: "Strategic Meetings",
    },
    {
      url: "https://images.unsplash.com/photo-1453941403708-3c32160971fd?q=80&w=2072&auto=format&fit=crop",
      title: "Litigation Review",
      category: "Case Prep",
    },
  ];

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
        <title>Apex Sports Law | Sports Lawyers for Footballers, Clubs & Agents</title>

        <meta
          name="description"
          content="Apex Sports Law advises footballers, clubs and agents on football contracts, FIFA regulations, transfers, disputes and sports arbitration in Nigeria."
        />

        <link rel="canonical" href="https://apexsportslaw.com/" />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Sports Law" />
        <meta
          property="og:title"
          content="Apex Sports Law | Sports Lawyers for Footballers, Clubs & Agents"
        />
        <meta
          property="og:description"
          content="Sports law advice for footballers, clubs and agents on contracts, transfers, FIFA regulations and disputes."
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
          content="Apex Sports Law | Sports Lawyers for Footballers, Clubs & Agents"
        />
        <meta
          name="twitter:description"
          content="Sports law advice for footballers, clubs and agents on contracts, transfers, FIFA regulations and disputes."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured Data: WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Apex Sports Law",
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
            name: "Apex Sports Law",
            url: SITE_URL,
            areaServed: "NG",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lagos",
              addressCountry: "NG",
            },
            image: OG_IMAGE,
            makesOffer: [
              { "@type": "Offer", name: "Sports Law" },
              { "@type": "Offer", name: "Arbitration & Dispute Resolution" },
              { "@type": "Offer", name: "Corporate Advisory" },
            ],
          })}
        </script>
      </Helmet>

      <div className="flex flex-col">

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
                Apex Sports Law advises footballers, agents and clubs on football contracts and
                player transfers, FIFA transfer regulations, sports arbitration and dispute
                resolution.
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

      </div>
    </>
  );
};

export default Home;
