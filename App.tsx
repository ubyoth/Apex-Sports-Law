
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SuccessStories from './pages/SuccessStories';
import KnowledgeCentre from './pages/KnowledgeCentre';
import Contact from './pages/Contact';
import SportsLaw from './pages/SportsLaw';
import Practices from './pages/Practices';
import About from './pages/About';
import SurveyPopup from './components/SurveyPopup';
import PostDetail from "./pages/PostDetail";
import BridgeTransfers from "./content/knowledge/bridge-transfers-in-football";
import FIFALicensing from "./content/knowledge/fifa-club-licensing-regulations";
import FakeAgents from "./content/knowledge/fake-agent-nightmare";
import ThankYou from "./pages/ThankYou";
import WhatsAppButton from "./components/WhatsAppButton";
const ScrollToTop = () => {
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
  {/* Main pages */}
  <Route path="/" element={<Home />} />
  <Route path="/practices" element={<Practices />} />
  <Route path="/practices/sports" element={<SportsLaw />} />
  <Route path="/success-stories" element={<SuccessStories />} />
  <Route path="/knowledge" element={<KnowledgeCentre />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />

  {/* ✅ Thank you page */}
  <Route path="/thank-you" element={<ThankYou />} />

  {/* Knowledge articles (specific first) */}
  <Route path="/knowledge/bridge-transfers-in-football" element={<BridgeTransfers />} />
  <Route path="/knowledge/fifa-club-licensing-regulations" element={<FIFALicensing />} />
  <Route path="/knowledge/fake-agent-nightmare" element={<FakeAgents />} />

  {/* Dynamic post route LAST among /knowledge routes */}
  <Route path="/knowledge/:slug" element={<PostDetail />} />

  {/* ✅ Catch-all LAST */}
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
