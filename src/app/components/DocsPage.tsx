import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ExternalLink, House, X } from 'lucide-react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
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
  const section = getSection(route);
  return section?.title ?? 'Help Center';
}

function getSection(route: string) {
  for (const section of helpSections) {
    if (section.items.some((item) => item.href === route)) {
      return section;
    }
  }
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
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null>(null);
  const currentRoute = normalizeRoute(window.location.pathname);
  const doc = helpDocsByRoute[currentRoute];
  const initialPreviewScale = useMemo(() => {
    if (!previewImage || typeof window === 'undefined') {
      return 1;
    }

    const safeWidth = previewImage.width || 1;
    const safeHeight = previewImage.height || 1;
    const viewportWidth = Math.max(window.innerWidth - 24, 1);
    const viewportHeight = Math.max(window.innerHeight - 24, 1);

    return Math.min(viewportWidth / safeWidth, viewportHeight / safeHeight);
  }, [previewImage]);
  const initialPreviewPosition = useMemo(() => {
    if (!previewImage || typeof window === 'undefined') {
      return { x: 0, y: 0 };
    }

    const scaledWidth = previewImage.width * initialPreviewScale;
    const scaledHeight = previewImage.height * initialPreviewScale;

    return {
      x: (window.innerWidth - scaledWidth) / 2,
      y: (window.innerHeight - scaledHeight) / 2,
    };
  }, [initialPreviewScale, previewImage]);

  useEffect(() => {
    if (!previewImage) {
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPreviewImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewImage]);

  if (!doc) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />
      <main className="px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-6 hidden flex-wrap items-center gap-3 text-[13px] font-medium text-[#6e6e73] lg:flex">
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
            <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
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
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#86868b]">
                    {getSectionLabel(doc.route)}
                  </div>
                  <a
                    href="/help"
                    className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-black/5 bg-[#f5f5f7] px-4 text-[13px] font-medium text-[#1d1d1f] shadow-[0_8px_20px_rgba(0,0,0,0.06)] lg:hidden"
                  >
                    Guide
                  </a>
                </div>
                <h1 className="max-w-3xl text-[28px] font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
                  {doc.title}
                </h1>
                <div className="mt-5 hidden flex-wrap gap-3 sm:flex">
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
                  onClick={(event) => {
                    const target = event.target as HTMLElement;
                    const image = target.closest('img');

                    if (!(image instanceof HTMLImageElement)) {
                      return;
                    }

                    setPreviewImage({
                      src: image.currentSrc || image.src,
                      alt: image.alt || doc.title,
                      width: image.naturalWidth || image.width || 1,
                      height: image.naturalHeight || image.height || 1,
                    });
                  }}
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
      {previewImage ? (
        <div className="fixed inset-0 z-[1300] bg-black">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close image preview"
            onClick={() => setPreviewImage(null)}
          />
          <button
            type="button"
            onClick={() => setPreviewImage(null)}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur"
            aria-label="Close image preview"
          >
            <X size={18} />
          </button>
          <div className="relative z-[1] h-full w-full">
            <TransformWrapper
              key={previewImage.src}
              initialScale={initialPreviewScale}
              initialPositionX={initialPreviewPosition.x}
              initialPositionY={initialPreviewPosition.y}
              minScale={Math.max(initialPreviewScale * 0.8, 0.2)}
              maxScale={8}
              centerZoomedOut
              doubleClick={{ disabled: true }}
              pinch={{ step: 5 }}
              wheel={{ step: 0.12 }}
              panning={{ velocityDisabled: true }}
            >
              <TransformComponent
                wrapperClass="h-full w-full"
                wrapperStyle={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
                contentStyle={{
                  width: `${previewImage.width}px`,
                  height: `${previewImage.height}px`,
                }}
              >
                <img
                  src={previewImage.src}
                  alt={previewImage.alt}
                  className="block max-w-none select-none"
                  style={{
                    width: `${previewImage.width}px`,
                    height: `${previewImage.height}px`,
                    maxWidth: 'none',
                    maxHeight: 'none',
                    borderRadius: 0,
                  }}
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      ) : null}
      <Footer />
    </div>
  );
}
