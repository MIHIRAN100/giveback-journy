import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import CookieBar from './components/CookieBar';
import Home from './pages/Home';
import SriLanka from './pages/SriLanka';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ExclusiveJourneys from './pages/ExclusiveJourneys';

function App() {
  const [cookieVisible, setCookieVisible] = useState(false);

  return (
    <Router>
      <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Navbar />
        <main style={{flex: 1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sri-lanka" element={<SriLanka />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/exclusive-journeys" element={<ExclusiveJourneys />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot cookieVisible={cookieVisible} />
        <CookieBar onVisibilityChange={setCookieVisible} />
      </div>
    </Router>
  );
}

export default App;
