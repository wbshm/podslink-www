import React from 'react';
import { ChevronLeft, ExternalLink, House } from 'lucide-react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { NotFoundPage } from './NotFoundPage';
import { helpDocsByRoute, helpSections } from '@/generated/help-docs';

function normalizeRoute(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function getSectionLabel(route: string) {
  for (const section of helpSections) {
    if (section.items.some((item) => item.href === route)) {
      return section.title;
    }
  }

  return 'Help Center';
}

function resolveDocAssetPath(assetPath: string, route: string) {
  if (
    !assetPath ||
    assetPath.startsWith('http://') ||
    assetPath.startsWith('https://') ||
    assetPath.startsWith('data:') ||
    assetPath.startsWith('#')
  ) {
    return assetPath;
  }

  const baseUrl = import.meta.env.BASE_URL;
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  if (assetPath.startsWith('/')) {
    return `${normalizedBase}${assetPath.replace(/^\/+/, '')}`;
  }

  const routeBase = `${normalizedBase}${route.replace(/^\/+/, '')}/`;
  return new URL(assetPath, `https://podslink.local${routeBase}`).pathname;
}

function renderDocHtml(html: string, route: string) {
  return html
    .replace(/<image\b/gi, '<img')
    .replace(/<\/image>/gi, '')
    .replace(/src=(['"])([^'"]+)\1/gi, (_, quote: string, assetPath: string) => {
      return `src=${quote}${resolveDocAssetPath(assetPath, route)}${quote}`;
    });
}

export function DocsPage() {
  const currentRoute = normalizeRoute(window.location.pathname);
  const doc = helpDocsByRoute[currentRoute];

  if (!doc) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />
      <main className="px-6 pb-20 pt-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[13px] font-medium text-[#6e6e73]">
            <a href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-[#1d1d1f]">
              <House size={14} />
              <span>PodsLink</span>
            </a>
            <span>/</span>
            <a href="/help" className="transition-colors hover:text-[#1d1d1f]">
              Help Center
            </a>
            <span>/</span>
            <span className="text-[#1d1d1f]">{getSectionLabel(doc.route)}</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <div className="border-b border-black/5 px-6 py-5">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6e6e73]">
                    Documentation
                  </div>
                  <a
                    href="/help"
                    className="mt-3 inline-flex items-center gap-2 text-[15px] font-semibold text-[#1d1d1f] transition-colors hover:text-[#0071e3]"
                  >
                    <ChevronLeft size={16} />
                    <span>Browse all topics</span>
                  </a>
                </div>

                <div className="max-h-[calc(100vh-180px)] overflow-y-auto px-4 py-4">
                  {helpSections.map((section) => (
                    <div key={section.title} className="mb-5 last:mb-0">
                      <div className="px-2 pb-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#86868b]">
                        {section.title}
                      </div>
                      <div className="space-y-1">
                        {section.items.map((item) => {
                          const isActive = item.href === doc.route;

                          return (
                            <a
                              key={item.href}
                              href={item.href}
                              className={`block rounded-2xl px-3 py-2.5 text-[14px] leading-6 transition-all ${
                                isActive
                                  ? 'bg-[#1d1d1f] text-white shadow-lg'
                                  : 'text-[#424245] hover:bg-[#f5f5f7] hover:text-[#1d1d1f]'
                              }`}
                            >
                              {item.label}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <article className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <div className="border-b border-black/5 px-6 py-8 sm:px-10">
                <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#86868b]">
                  {getSectionLabel(doc.route)}
                </div>
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
                  {doc.title}
                </h1>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-4 py-2 text-[14px] font-medium text-white transition-transform hover:-translate-y-0.5"
                  >
                    <House size={16} />
                    <span>Back to website</span>
                  </a>
                  <a
                    href="/help"
                    className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-4 py-2 text-[14px] font-medium text-[#1d1d1f] transition-colors hover:bg-[#ebebed]"
                  >
                    <span>Help overview</span>
                  </a>
                </div>
              </div>

              <div className="px-6 py-8 sm:px-10">
                <div
                  className="help-markdown"
                  dangerouslySetInnerHTML={{ __html: renderDocHtml(doc.html, doc.route) }}
                />
              </div>

              <div className="border-t border-black/5 bg-[#fbfbfd] px-6 py-6 text-[14px] text-[#6e6e73] sm:px-10">
                <a
                  href="/help"
                  className="inline-flex items-center gap-2 font-medium text-[#0071e3] transition-opacity hover:opacity-80"
                >
                  <ExternalLink size={16} />
                  <span>Continue browsing help topics</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
