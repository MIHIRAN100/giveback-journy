import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { supabase } from './lib/supabase';
import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import CookieBar from './components/CookieBar';
import HeroPromoBadge from './components/HeroPromoBadge';
import Home from './pages/Home';
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

import VolunteerProgramDetails from './pages/VolunteerProgramDetails';
import Compare from './pages/Compare';
import NDAPage from './pages/NDAPage';
import CookiePolicy from './pages/CookiePolicy';


import BottomAdBanner from './components/BottomAdBanner';
import ChatBot from './components/ChatBot';
import Breadcrumbs from './components/Breadcrumbs';
import ScrollToTop from './components/ScrollToTop';
import TourDetailsPromoBanner from './components/TourDetailsPromoBanner';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Account from './pages/Account';

// Admin Imports
import AdminRoute from './components/AdminRoute';
import AdminLayout from './pages/admin/AdminLayout';
import DashboardOverview from './pages/admin/DashboardOverview';
import AdminProducts from './pages/admin/AdminProducts';
import AdminBookings from './pages/admin/AdminBookings';
import AdminPayments from './pages/admin/AdminPayments';
import AdminArrivals from './pages/admin/AdminArrivals';
import AdminPlaceholder from './pages/admin/AdminPlaceholder';
import AdminCustomers from './pages/admin/AdminCustomers';

import { CompareProvider } from './context/CompareContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { ReactLenis } from 'lenis/react';
import { Analytics } from '@vercel/analytics/react';

const AppContent = () => {
  const [cookieVisible, setCookieVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isTourDetails = location.pathname.startsWith('/package/');
  const isVolunteerDetails = location.pathname.startsWith('/volunteer-program/');
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isProtectedOrAdmin = location.pathname.startsWith('/account') || location.pathname.startsWith('/admin');
  const hideMobileBottomBar = location.pathname.startsWith('/package/') || location.pathname.startsWith('/volunteer-program/');
  const showGlobalBadge = ['/packages', '/volunteer', '/exclusive-journeys', '/contact'].includes(location.pathname);

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      
      <Navbar />
      <AuthModal />
      <main style={{flex: 1, paddingTop: (isHomePage || isProtectedOrAdmin) ? '0' : '90px'}}>
        {(isTourDetails || isVolunteerDetails) && <TourDetailsPromoBanner />}
        {!isHomePage && <Breadcrumbs />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/tours" element={<PackagesPage />} />
          <Route path="/tour" element={<PackagesPage />} />
          <Route path="/package/:id" element={<TourDetails />} />
          <Route path="/inquiry/:id" element={<BookingInquiryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/exclusive-journeys" element={<ExclusiveJourneys />} />
          <Route path="/about-us" element={<ExclusiveJourneys />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/volunteer-program/:id" element={<VolunteerProgramDetails />} />
          <Route path="/volunteer-inquiry" element={<VolunteerInquiryPage />} />

          <Route path="/compare" element={<Compare />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/nda" element={<NDAPage />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
            <Route index element={<DashboardOverview />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="volunteers" element={<AdminPlaceholder title="Volunteers" />} />
            <Route path="tours" element={<AdminProducts type="tour" />} />
            <Route path="volunteer-packages" element={<AdminProducts type="volunteer" />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="payments" element={<AdminPayments />} />
            <Route path="arrivals" element={<AdminArrivals />} />
            <Route path="accommodation" element={<AdminPlaceholder title="Accommodation" />} />
            <Route path="audit" element={<AdminPlaceholder title="Audit History" />} />
            <Route path="settings" element={<AdminPlaceholder title="System Settings" />} />
          </Route>
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
      <CookieBar onVisibilityChange={setCookieVisible} />
      {showGlobalBadge && <HeroPromoBadge />}
      <BottomAdBanner isCookieVisible={cookieVisible} />
      <ChatBot cookieVisible={cookieVisible} isTourDetails={isTourDetails} isVolunteerDetails={isVolunteerDetails} />
    </div>
  );
};

function App() {
  return (
    <ReactLenis root>
      <Router>
        <AuthProvider>
          <ScrollToTop />
          <CurrencyProvider>
            <CompareProvider>
              <AppContent />
              <Analytics />
            </CompareProvider>
          </CurrencyProvider>
        </AuthProvider>
      </Router>
    </ReactLenis>
  );
}

export default App;
