import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import imgAppIcon from "@/assets/769d0a29245202fd1627047491876bc9538d8a02.png";

export function Footer() {
  const { t, language } = useLanguage();
  
  const linkData = language === 'en' ? [
    { text: t.footer.faq, href: 'https://help.podslink.net' },
    { text: 'Privacy Policy', href: 'https://www.podslink.net/privacy' },
    { text: 'Terms of Service', href: 'https://www.podslink.net/agreement' }
  ] : [
    { text: t.footer.faq, href: 'https://help.podslink.net' },
    { text: '隐私政策', href: 'https://www.podslink.net/privacy' },
    { text: '服务协议', href: 'https://www.podslink.net/agreement' }
  ];

  return (
    <footer className="bg-[#F5F5F7] py-16 border-t border-[#d2d2d7]/30">
      <div className="max-w-[1024px] mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5 mb-6">
          <img src={imgAppIcon} alt="PodsLink Logo" className="w-8 h-8 rounded-[8px]" />
          <span className="font-semibold text-[19px] tracking-tight text-[#1d1d1f]">PodsLink</span>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-[13px] text-[#424245] font-medium">
          {linkData.map((link, index) => (
             <a 
               key={index} 
               href={link.href} 
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-[#1d1d1f] hover:underline transition-colors"
             >
               {link.text}
             </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
