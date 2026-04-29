import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { DocsPage } from './components/DocsPage';
import { LandingPage } from './components/LandingPage';
import { NotFoundPage } from './components/NotFoundPage';

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/help" element={<DocsPage />} />
        <Route path="/basic/:slug" element={<DocsPage />} />
        <Route path="/faq/:slug" element={<DocsPage />} />
        <Route path="/func/:slug" element={<DocsPage />} />
        <Route path="/rel/:slug" element={<DocsPage />} />
        <Route path="/privacy" element={<DocsPage />} />
        <Route path="/agreement" element={<DocsPage />} />
        <Route path="/account-deletion" element={<DocsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LanguageProvider>
  );
}
