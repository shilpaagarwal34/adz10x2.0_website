import React from "react";
import Index from "./pages/Index";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Privacy_Policy from "./pages/Privacy_Policy.jsx";
import Navbar from "./pages/components/navbar/Navbar.jsx";
import Footer from "./pages/components/footer/Footer.jsx";
import Terms_conditions from "./pages/Terms_conditions.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./pages/components/ScrollToTop.jsx";
import CookiePolicy from "./pages/components/CookiePolicy.jsx";
import RefundPolicy from "./pages/components/RefundPolicy.jsx";
import AcceptableUsePolicy from "./pages/components/AcceptableUsePolicy.jsx";
import ShippingPolicy from "./pages/components/ShippingPolicy.jsx";
import Disclaimer from "./pages/components/Disclaimer.jsx";
import SupportChatbot from "./pages/components/chatbot/SupportChatbot.jsx";

const AppContent = () => {
  const location = useLocation();
  const showChatbot = location.pathname !== "/";

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/terms-conditions" element={<Terms_conditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/acceptable-use-policy" element={<AcceptableUsePolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
      {showChatbot && <SupportChatbot />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
