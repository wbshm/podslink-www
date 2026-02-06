import React, { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { SupportedDevices } from './components/SupportedDevices';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-white font-sans text-[#1d1d1f] overflow-x-hidden">
        <Navbar />
        <main className="relative">
          <section id="overview">
            <Hero />
          </section>
          
          <section id="features" className="scroll-mt-24">
            <Features />
          </section>

          <section id="screenshots" className="scroll-mt-24">
            <Screenshots />
          </section>

          <section id="supported" className="scroll-mt-24">
            <SupportedDevices />
          </section>
          
          <section id="download" className="scroll-mt-24">
            <DownloadCTA />
          </section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
