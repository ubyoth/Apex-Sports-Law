import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SUCCESS_STORIES } from '../constants';

const SITE_URL = "https://apexsportslaw.com";
const PAGE_URL = `${SITE_URL}/success-stories`;
const OG_IMAGE = `${SITE_URL}/og/default.jpg`;

const SuccessStories: React.FC = () => {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: "Client Success Stories | Apex Advocates",
    url: PAGE_URL,
    description: "Explore how Apex Advocates delivers legal outcomes in corporate advisory, dispute resolution, employment law, and sports law across Africa.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: SUCCESS_STORIES.map((story, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: story.title,
        description: story.challenge
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Client Success Stories & Track Record | Apex Advocates</title>
        <meta
          name="description"
          content="Explore how Apex Advocates delivers exceptional legal outcomes in corporate advisory, intellectual property, labor disputes, and sports law across Nigeria and Africa."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Advocates" />
        <meta property="og:title" content="Success Stories | Apex Advocates" />
        <meta
          property="og:description"
          content="Discover our track record in corporate restructuring, labor disputes, intellectual property, and sports law."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Success Stories | Apex Advocates" />
        <meta
          name="twitter:description"
          content="Discover our track record in corporate restructuring, labor disputes, intellectual property, and sports law."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(pageJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black font-sans">
        {/* Hero */}
        <header className="relative py-24 bg-black overflow-hidden border-b border-accent-gold/10">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-gold rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 -right-24 w-64 h-64 bg-accent-gold rounded-full filter blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-wider mb-6 border border-accent-gold/20">
              Proven Results
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Success Stories</h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed">
              At Apex Advocates, we measure our success by the victories and protection of our clients. Explore how we’ve navigated complex legal landscapes to deliver exceptional outcomes through meticulous strategy.
            </p>
          </div>
        </header>

        {/* Grid */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SUCCESS_STORIES.map((story) => (
              <div 
                key={story.id} 
                className="bg-white dark:bg-secondary-grey/20 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-accent-gold/10 flex flex-col group hover:border-accent-gold/30 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    src={story.imageUrl} 
                    alt={story.title} 
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-accent-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-accent-gold/30 backdrop-blur-md">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-6 text-black dark:text-white leading-tight group-hover:text-accent-gold transition-colors">
                    {story.title}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                        {story.challenge}
                      </p>
                    </div>
                    {story.result && (
                      <div>
                        <p className="text-base text-black dark:text-slate-200 font-bold leading-relaxed">
                          {story.result}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-8 pt-0 mt-auto"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation Section */}
        <section className="py-24 bg-black border-t border-accent-gold/10 text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">Need Expert Legal Counsel?</h2>
            <a 
              href="https://calendly.com/apexsportslaw-info/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-accent-gold text-black px-8 py-3.5 rounded-lg font-bold text-base hover:bg-yellow-600 transition-all shadow-2xl shadow-accent-gold/20"
            >
              Schedule Your Consultation
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default SuccessStories;
