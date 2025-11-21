// App.tsx – AFTER
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const ThankYouPage = lazy(() => import("./ThankYouPage"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./TermsAndConditions"));
const FloatingWhatsApp = lazy(() => import("./components/FloatingWhatsApp"));
const PopUp = lazy(() => import("./components/PopUp"));

function App() {
  return (
    <Suspense fallback={<div />}>
      <PopUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/thank_you" element={<ThankYouPage />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingWhatsApp />
    </Suspense>
  );
}

export default App;
