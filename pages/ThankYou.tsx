import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const PAGE_URL = `${SITE_URL}/thank-you`;
const OG_IMAGE = `${SITE_URL}/og/default.jpg`;

const ThankYou: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | Apex Advocates</title>
        <meta
          name="description"
          content="Thank you for reaching out to Apex Advocates. We have received your inquiry and will respond within one business day."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="noindex,follow" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Advocates" />
        <meta property="og:title" content="Thank You | Apex Advocates" />
        <meta
          property="og:description"
          content="We have received your legal inquiry and will be in touch shortly."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thank You | Apex Advocates" />
        <meta
          name="twitter:description"
          content="We have received your legal inquiry and will be in touch shortly."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black py-24 font-sans flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <div className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto border border-accent-gold/20">
            <span className="material-icons text-accent-gold text-4xl">check_circle</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-tight">
            Thank You.
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light max-w-xl mx-auto">
            We’ve received your inquiry. A senior associate or our principal partner will review your message and respond within one business day.
          </p>

          <div className="pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-accent-gold text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-yellow-600 transition-all shadow-xl shadow-accent-gold/20"
            >
              Back to Home <span className="material-icons text-sm">east</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
