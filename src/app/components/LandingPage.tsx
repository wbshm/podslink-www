import React from 'react';
import { DownloadCTA } from './DownloadCTA';
import { Features } from './Features';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { Screenshots } from './Screenshots';
import { SupportedDevices } from './SupportedDevices';

export function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white font-sans text-[#1d1d1f]">
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
  );
}
