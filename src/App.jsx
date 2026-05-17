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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ExclusiveJourneys from './pages/ExclusiveJourneys';
import VolunteerPage from './pages/VolunteerPage';
import TourDetails from './pages/TourDetails';
import BookingPage from './pages/BookingPage';
import BookingInquiryPage from './pages/BookingInquiryPage';
import VolunteerInquiryPage from './pages/VolunteerInquiryPage';
import Compare from './pages/Compare';
import LoadingScreen from './components/LoadingScreen';
import MobileBottomBar from './components/MobileBottomBar';
import BottomAdBanner from './components/BottomAdBanner';
import Breadcrumbs from './components/Breadcrumbs';
import ScrollToTop from './components/ScrollToTop';

import { CompareProvider } from './context/CompareContext';
import { CurrencyProvider } from './context/CurrencyContext';

const AppContent = () => {
  const [cookieVisible, setCookieVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isTourDetails = location.pathname.startsWith('/package/');

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <LoadingScreen />
      <Navbar />
      <main style={{flex: 1, paddingTop: isHomePage ? '0' : '90px'}}>
        {!isHomePage && <Breadcrumbs />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sri-lanka" element={<SriLanka />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/package/:id" element={<TourDetails />} />
          <Route path="/inquiry/:id" element={<BookingInquiryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/exclusive-journeys" element={<ExclusiveJourneys />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/volunteer-inquiry" element={<VolunteerInquiryPage />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
      <ChatBot cookieVisible={cookieVisible} isTourDetails={isTourDetails} />
      <CookieBar onVisibilityChange={setCookieVisible} />

      {!isTourDetails && <MobileBottomBar />}
      <BottomAdBanner isCookieVisible={cookieVisible} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CurrencyProvider>
        <CompareProvider>
          <AppContent />
        </CompareProvider>
      </CurrencyProvider>
    </Router>
  );
}

export default App;
