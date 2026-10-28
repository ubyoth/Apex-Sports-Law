
import React from 'react';
import { Link } from 'react-router-dom';
import { FOUNDER_BIO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-display">
      {/* Hero */}
      <header className="relative py-32 bg-black overflow-hidden border-b border-accent-gold/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent-gold/20 rounded-full blur-[120px] -translate-x-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              About Our <span className="text-accent-gold">Founding Partner</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Visual Column */}
            <div className="w-full lg:w-2/5">
              <div className="sticky top-32">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-accent-gold/20 rounded-[2.5rem] blur-xl opacity-20"></div>
                  <div className="relative rounded-[2rem] overflow-hidden border-8 border-white dark:border-secondary-grey shadow-2xl bg-secondary-grey/10">
                    <img 
                      src={FOUNDER_BIO.imageUrl} 
                      alt={FOUNDER_BIO.name} 
                      className="w-full h-[650px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 text-white">
                      <p className="text-3xl font-black mb-1 uppercase tracking-tight">{FOUNDER_BIO.name}</p>
                      <p className="text-accent-gold font-black uppercase tracking-[0.2em] text-xs">{FOUNDER_BIO.role}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 space-y-4">
                  <h4 className="text-[10px] font-black text-accent-gold uppercase tracking-[0.3em] mb-6">Connect Directly</h4>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/yahaya-othman/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-secondary-grey/20 flex items-center justify-center hover:bg-accent-gold transition-all group shadow-sm border border-accent-gold/5">
                      <svg className="w-6 h-6 text-black dark:text-white group-hover:text-black fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a 
                      href="https://calendly.com/apexsportslaw-info/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-grow bg-black dark:bg-accent-gold text-white dark:text-black rounded-2xl flex items-center justify-center font-black uppercase tracking-widest text-xs hover:bg-slate-800 dark:hover:bg-yellow-600 transition-all"
                    >
                      Schedule Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-3/5">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-12">
                  <div>
                    <h3 className="text-3xl font-black text-black dark:text-white mb-8 border-l-4 border-accent-gold pl-6 uppercase tracking-tight">Professional Summary</h3>
                    {FOUNDER_BIO.bio.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-light">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-y border-slate-100 dark:border-accent-gold/10">
                    <div>
                      <h4 className="text-[10px] font-black text-accent-gold uppercase tracking-[0.3em] mb-6">Practice Focus</h4>
                      <ul className="space-y-4">
                        {[
                          'Corporate Advisory',
                          'Arbitration',
                          'Sports Law',
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-black dark:text-slate-200">
                            <span className="material-icons text-accent-gold text-lg">verified</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-accent-gold uppercase tracking-[0.3em] mb-6">Credentials</h4>
                      <ul className="space-y-4">
                        {FOUNDER_BIO.qualifications.map((qual, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm font-bold text-black dark:text-slate-200">
                            <span className="material-icons text-accent-gold text-lg mt-0.5">school</span>
                            <span>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="p-10 bg-black rounded-[2rem] border border-accent-gold/20 text-white relative overflow-hidden group">
                       <div className="relative z-10">
                          <h4 className="text-2xl font-bold mb-6 text-accent-gold">Direct Partner Engagement</h4>
                          <p className="text-slate-400 mb-8 leading-relaxed">
                            Every brief entrusted to our firm is led personally by Yahaya, ensuring that your most critical legal matters benefit from a decade of high-stakes dispute resolution and corporate experience. No delegation to juniors, no loss of strategic continuity.
                          </p>
                       </div>
                       <span className="material-icons absolute -bottom-10 -right-10 text-accent-gold/5 text-[200px] pointer-events-none group-hover:scale-110 transition-transform duration-1000">gavel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 dark:bg-secondary-grey/5 py-24 border-t border-slate-100 dark:border-accent-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-black dark:text-white mb-6 uppercase tracking-tight">Ready to Resolve Your Legal Challenge?</h2>
          <a 
            href="https://calendly.com/apexsportslaw-info/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black dark:bg-accent-gold text-white dark:text-black px-8 py-3.5 rounded-lg font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-accent-gold/20"
          >
            Direct Inquiry
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
