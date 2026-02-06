import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import imgAppIcon from 'figma:asset/769d0a29245202fd1627047491876bc9538d8a02.png';

export function DownloadCTA() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section className="relative py-24 lg:py-40 bg-white" id="download">
      <div className="max-w-[1024px] mx-auto px-6 lg:px-8">
        <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-black rounded-[48px] p-12 lg:p-32 text-center overflow-hidden isolate"
          style={{ y, scale }}
        >
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1d1d1f] to-black z-[-2]" />
          
          {/* Animated Glows */}
          <motion.div 
            className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-[#0071e3] opacity-30 blur-[150px] rounded-full pointer-events-none mix-blend-screen"
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.4, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-[#5E5CE6] opacity-20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" 
            animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
             {/* App Icon */}
             <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-10 relative"
             >
                <img 
                    src={imgAppIcon} 
                    alt="PodsLink App Icon" 
                    className="w-24 h-24 rounded-[22px] shadow-2xl"
                />
             </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl lg:text-5xl text-white tracking-tighter font-semibold mb-6"
            >
              {t.footer.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl lg:text-[24px] text-gray-400 max-w-2xl mx-auto leading-snug font-medium mb-10"
            >
              {t.footer.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md"
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=net.podslink"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-1 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-[#f5f5f7] active:scale-95 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shimmer effect */}
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] group-hover:animate-[shimmer_1s_infinite]" />
                
                <span className="flex items-center justify-center gap-2 relative z-10">
                   {t.footer.download}
                   <Download className="w-5 h-5" />
                </span>
              </motion.a>
              
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}