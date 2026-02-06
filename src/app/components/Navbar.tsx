import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import imgAppIcon from "figma:asset/769d0a29245202fd1627047491876bc9538d8a02.png";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navbar.features, href: '#features' },
    { name: t.navbar.screenshots, href: '#screenshots' },
    { name: t.navbar.supported, href: '#supported' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        // Offset for fixed header
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'h-[64px] bg-white/80 backdrop-blur-xl border-b border-black/5' 
            : 'h-[80px] bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Left: Brand */}
          <a href="#" onClick={(e) => handleScrollTo(e, '#')} className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-[10px]">
              <img 
                src={imgAppIcon} 
                alt="Logo" 
                className="w-9 h-9 transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 ring-1 ring-black/5 rounded-[10px]" />
            </div>
            <span className={`font-semibold text-[18px] tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-[#1d1d1f]' : 'text-[#1d1d1f]'
            }`}>
              PodsLink
            </span>
          </a>

          {/* Center: Minimalist Links (Desktop) */}
          <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="relative group py-2"
              >
                <span className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-[#1d1d1f]/80' : 'text-[#1d1d1f]/90'
                } group-hover:text-black`}>
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center opacity-80" />
              </a>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
             {/* Language Switcher */}
             <button
               onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
               className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                 isScrolled 
                   ? 'hover:bg-black/5 text-[#1d1d1f]/80' 
                   : 'hover:bg-white/40 text-[#1d1d1f]/90'
               }`}
            >
               <Globe size={14} />
               <span>{language === 'en' ? 'CN' : 'EN'}</span>
            </button>

            <a 
              href="https://play.google.com/store/apps/details?id=net.podslink"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-[#1d1d1f] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5' 
                  : 'bg-black/5 text-[#1d1d1f] backdrop-blur-sm hover:bg-black/10'
              }`}
            >
              <span>{t.navbar.download}</span>
              {isScrolled && <ArrowRight size={14} className="opacity-70" />}
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            >
              <Menu size={22} className="text-[#1d1d1f]" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu (Modern Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-white/95 backdrop-blur-2xl"
          >
             {/* Close Button */}
            <div className="absolute top-6 right-6">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center bg-black/5 rounded-full active:bg-black/10 transition-colors"
              >
                <X size={24} className="text-[#1d1d1f]" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="h-full flex flex-col justify-center px-10 gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[40px] font-bold text-[#1d1d1f] tracking-tight hover:text-black/60 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3, duration: 0.5 }}
              >
                  <button
                     onClick={() => { setLanguage(language === 'en' ? 'zh' : 'en'); setMobileMenuOpen(false); }}
                     className="text-[18px] font-medium text-[#86868b] flex items-center gap-2 hover:text-[#1d1d1f] transition-colors"
                  >
                     <Globe size={20} />
                     {language === 'en' ? 'Switch to Chinese' : '切换到英文'}
                  </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4"
              >
                <a 
                  href="https://play.google.com/store/apps/details?id=net.podslink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#1d1d1f] text-white px-8 py-4 rounded-full text-[18px] font-medium shadow-xl active:scale-95 transition-transform"
                >
                  {t.navbar.download}
                  <ArrowRight size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}