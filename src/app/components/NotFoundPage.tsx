import React, { useEffect } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found | PodsLink';
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Navbar />
      <main className="flex min-h-screen items-center px-6 pb-20 pt-28">
        <div className="mx-auto w-full max-w-[720px] rounded-[36px] border border-black/5 bg-[#f5f5f7] p-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-white text-[#1d1d1f] shadow-sm">
            <Search size={28} />
          </div>
          <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#86868b]">
            404
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] leading-7 text-[#6e6e73]">
            The page may have moved, or the link may be outdated. You can go back to the website homepage or open the help center.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-6 py-3 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <ArrowLeft size={16} />
              <span>Back to homepage</span>
            </a>
            <a
              href="/help"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#1d1d1f] transition-colors hover:bg-[#f2f2f2]"
            >
              Open help center
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
