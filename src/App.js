import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ServerWatcher from "./components/ServerWatcher";

const InitialPage = lazy(() => import("./pages/InitialPage"));
const TransformPage = lazy(() => import("./pages/TransformPage"));
const DownloadPage = lazy(() => import("./pages/DownloadPage"));
const MyAccountPage = lazy(() => import("./pages/MyAccountPage"));
const PaymentSuccessPage = lazy(() => import("./pages/PaymentSuccessPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const HelpPage = lazy(() => import("./pages/HelpPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ServerWatcher />
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-brandPink border-t-white rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/transform" element={<TransformPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/download/:bookId" element={<DownloadPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/account" element={<MyAccountPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/contact" element={<HelpPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
