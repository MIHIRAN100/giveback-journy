import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import CookieBar from './components/CookieBar';
import Home from './pages/Home';
import SriLanka from './pages/SriLanka';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import Stays from './pages/Stays';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ExclusiveJourneys from './pages/ExclusiveJourneys';
import TourDetails from './pages/TourDetails';
import LoadingScreen from './components/LoadingScreen';
import MobileBottomBar from './components/MobileBottomBar';

const AppContent = () => {
  const [cookieVisible, setCookieVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <LoadingScreen />
      <Navbar />
      <main style={{flex: 1, paddingTop: isHomePage ? '0' : '90px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sri-lanka" element={<SriLanka />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/package/:id" element={<TourDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/exclusive-journeys" element={<ExclusiveJourneys />} />
        </Routes>
      </main>
      <Footer />
      <ChatBot cookieVisible={cookieVisible} />
      <CookieBar onVisibilityChange={setCookieVisible} />
      <MobileBottomBar />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
