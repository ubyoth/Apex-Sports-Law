import React from "react";
import { Link } from "react-router-dom";

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6">
          Thank you.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
          We’ve received your inquiry. A senior associate will respond within one business day.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-accent-gold text-black px-8 py-4 rounded-xl font-black hover:bg-yellow-600 transition-all"
        >
          Back to Home <span className="material-icons text-sm">east</span>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;