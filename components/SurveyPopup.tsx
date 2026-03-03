import React, { useState, useEffect } from 'react';

const SurveyPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user already answered before
    const answered = localStorage.getItem('apex_survey_completed');
    if (!answered) {
      // Show popup after 3 minutes
      const timer = setTimeout(() => setIsVisible(true), 180000);
      return () => clearTimeout(timer);
    }
  }, []);

  // When user chooses an option
  const handleOptionSelect = (option: string) => {
    console.log('User chose:', option);
    localStorage.setItem('apex_survey_completed', 'true'); // save choice
    setIsSubmitted(true);

    // Hide popup shortly after selection
    setTimeout(() => setIsVisible(false), 500);
  };

  // Close button also counts as choosing
  const closeSurvey = () => {
    localStorage.setItem('apex_survey_completed', 'true'); // save choice
    setIsVisible(false);
  };

  if (!isVisible) return null; // don’t show popup if not visible

  const options = [
    { id: 'social', label: 'LinkedIn / Social Media', icon: 'share' },
    { id: 'referral', label: 'Professional Referral', icon: 'person_add' },
    { id: 'search', label: 'Google Search', icon: 'search' },
    { id: 'ai', label: 'Suggested by AI', icon: 'psychology' },
    { id: 'other', label: 'Other Source', icon: 'more_horiz' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeSurvey}
      />
      <div className="relative bg-white/95 text-black dark:bg-black/95 backdrop-blur-xl w-full max-w-sm rounded-2xl shadow-lg overflow-hidden border border-accent-gold/10 border-b-4 border-b-accent-gold p-8">
        <button
          onClick={closeSurvey}
          className="absolute top-5 right-5 text-slate-400 hover:text-accent-gold p-1"
        >
          <span className="material-icons text-xl">close</span>
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="text-xl font-black mb-2">Help Us <span className="text-accent-gold">Grow</span></h3>
            <p className="text-xs text-slate-500 mb-4">How did you first discover Apex Advocates & Solicitors?</p>
            <div className="space-y-2">
              {options.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleOptionSelect(opt.label)}
                  className="w-full flex justify-between px-5 py-3 bg-slate-50 rounded-xl hover:bg-accent-gold hover:text-black transition"
                >
                  <span>{opt.label}</span>
                  <span className="material-icons text-xs">east</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <span className="material-icons text-3xl text-accent-gold mb-2">done_all</span>
            <h3 className="text-xl font-black mb-2">Thank You</h3>
            <p className="text-xs text-slate-500">Your input helps us improve our reach.</p>
          </div>
        )}

        <div className="text-center text-[9px] text-slate-400 uppercase mt-4 border-t pt-2">
          Apex Advocates & Solicitors
        </div>
      </div>
    </div>
  );
};

export default SurveyPopup;
