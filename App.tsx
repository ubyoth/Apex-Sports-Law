import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SurveyPopup from './components/SurveyPopup';
import WhatsAppButton from './components/WhatsAppButton';

// Main Pages
import Home from './pages/Home';
import Practices from './pages/Practices';
import SportsLaw from './pages/SportsLaw';
import SuccessStories from './pages/SuccessStories';
import KnowledgeCentre from './pages/KnowledgeCentre';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import PostDetail from './pages/PostDetail';

// Static Knowledge Brief Content Imports
import BridgeTransfers from './content/knowledge/bridge-transfers-in-football';
import FIFALicensing from './content/knowledge/fifa-club-licensing-regulations';
import FakeAgents from './content/knowledge/fake-agent-nightmare';
import NewIFABFootballRegulations from './content/knowledge/new-ifab-football-regulations';
import FIFAParentsEducation from './content/knowledge/fifa-parents-education-on-football';
import FootballContractJustCause from './content/knowledge/termination-of-football-contract-with-just-cause';
import FIFAArticle14AbusiveConduct from './content/knowledge/fifa-article-14-2-abusive-conduct-football-contract';
import TerminationOutstandingSalaries from './content/knowledge/termination-football-contract-outstanding-salaries-fifa-article-14bis';
import FIFARSTP2027 from "./content/knowledge/fifa-rstp-2027-what-is-new";

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/practices" element={<Practices />} />
            <Route path="/practices/sports" element={<SportsLaw />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/knowledge" element={<KnowledgeCentre />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />

            {/* Specific Knowledge Articles */}
            <Route path="/knowledge/bridge-transfers-in-football" element={<BridgeTransfers />} />
            <Route path="/knowledge/fifa-club-licensing-regulations" element={<FIFALicensing />} />
            <Route path="/knowledge/fake-agent-nightmare" element={<FakeAgents />} />
            <Route path="/knowledge/new-ifab-football-regulations" element={<NewIFABFootballRegulations />} />
            <Route path="/knowledge/fifa-parents-education-on-football" element={<FIFAParentsEducation />} />
            <Route path="/knowledge/termination-of-football-contract-with-just-cause" element={<FootballContractJustCause />} />
            <Route path="/knowledge/fifa-article-14-2-abusive-conduct-football-contract" element={<FIFAArticle14AbusiveConduct />} />
            <Route path="/knowledge/termination-football-contract-outstanding-salaries-fifa-article-14bis" element={<TerminationOutstandingSalaries />} />
            <Route path="/knowledge/fifa-rstp-2027-what-is-new" element={<FIFARSTP2027 />}/>
            
            {/* Dynamic Post Catch-all */}
            <Route path="/knowledge/:slug" element={<PostDetail />} />

            {/* Wildcard Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <SurveyPopup />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
