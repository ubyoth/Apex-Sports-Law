
import React from 'react';
import { Link } from 'react-router-dom';
import { SUCCESS_STORIES } from '../constants';

const SuccessStories: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <header className="relative py-24 bg-black overflow-hidden border-b border-accent-gold/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-gold rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-accent-gold rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-wider mb-6 border border-accent-gold/20">Proven Results</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Success Stories</h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            At Apex Sports Law, we measure our success by the victories of our clients. Explore how we’ve navigated complex legal landscapes to deliver exceptional outcomes through meticulous strategy.
          </p>
        </div>
      </header>

      {/* Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SUCCESS_STORIES.map((story) => (
            <div key={story.id} className="bg-white dark:bg-secondary-grey/20 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-accent-gold/10 flex flex-col group hover:border-accent-gold/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  src={story.imageUrl} 
                  alt={story.title} 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-accent-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-accent-gold/30 backdrop-blur-md">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-6 text-black dark:text-white leading-tight group-hover:text-accent-gold transition-colors">{story.title}</h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold text-accent-gold uppercase block mb-2 tracking-widest opacity-80">The Context</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{story.challenge}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent-gold uppercase block mb-2 tracking-widest opacity-80">Our Resolution</span>
                    <p className="text-base text-black dark:text-slate-200 font-bold leading-relaxed">{story.result}</p>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button className="w-full py-4 border border-accent-gold/20 text-accent-gold font-bold text-sm rounded-xl hover:bg-accent-gold hover:text-black transition-all flex items-center justify-center gap-2 group/btn">
                  Learn More
                  <span className="material-icons text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-24 bg-black border-t border-accent-gold/10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Need Expert Legal Counsel?</h2>
          <p className="text-slate-400 text-lg mb-12">Our success stories are built on meticulous attention to detail and unwavering client advocacy. Our founding partner, Yahaya Oruma Othman, ensures every case reflects a decade of excellence.</p>
          <a 
            href="https://calendly.com/apexsportslaw-info/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-accent-gold text-black px-8 py-3.5 rounded-lg font-bold text-base hover:bg-yellow-600 transition-all shadow-2xl shadow-accent-gold/20"
          >
            Schedule Your Confidential Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
