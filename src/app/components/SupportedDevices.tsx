import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, useMotionTemplate } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import beatsWatermark from 'figma:asset/1c7b35a9b8314c34c5d33a6286fc602d84267537.png';

// Bolder, thicker, Apple-style iconography

const AirPodsMaxGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 4C4.23858 4 2 6.23858 2 9V17C2 19.7614 4.23858 22 7 22H8C8.55228 22 9 21.5523 9 21V18C9 17.4477 8.55228 17 8 17H7C5.89543 17 5 16.1046 5 15V9C5 7.89543 5.89543 7 7 7H17C18.1046 7 19 7.89543 19 9V15C19 16.1046 18.1046 17 17 17H16C15.4477 17 15 17.4477 15 18V21C15 21.5523 15.4477 22 16 22H17C19.7614 22 22 19.7614 22 17V9C22 6.23858 19.7614 4 17 4H7Z" />
    <path d="M6 9C6 8.44772 6.44772 8 7 8H17C17.5523 8 18 8.44772 18 9V15C18 15.5523 17.5523 16 17 16H7C6.44772 16 6 15.5523 6 15V9Z" fillOpacity="0.3"/>
  </svg>
);

const BeatsGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM9.5 7C9.5 6.44772 9.05228 6 8.5 6C7.94772 6 7.5 6.44772 7.5 7V16C7.5 16.5523 7.94772 17 8.5 17H11.5C14.5376 17 17 14.5376 17 11.5C17 8.46243 14.5376 6 11.5 6H10.5C9.94772 6 9.5 6.44772 9.5 7ZM10.5 8H11.5C13.433 8 15 9.567 15 11.5C15 13.433 13.433 15 11.5 15H9.5V8Z" />
  </svg>
);

const ChipGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM8 7C7.44772 7 7 7.44772 7 8V16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16V8C17 7.44772 16.5523 7 16 7H8ZM10.5 10C10.5 9.44772 10.9477 9 11.5 9H12.5C13.0523 9 13.5 9.44772 13.5 10V11H14V10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10V14C16 14.5523 15.5523 15 15 15C14.4477 15 14 14.5523 14 14V13H13.5V14C13.5 14.5523 13.0523 15 12.5 15H11.5C10.9477 15 10.5 14.5523 10.5 14V10ZM9 14V10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10V14C7 14.5523 7.44772 15 8 15C8.55228 15 9 14.5523 9 14Z" opacity="0.8"/>
    {/* Pins */}
    <rect x="1" y="7" width="2" height="1" rx="0.5" />
    <rect x="1" y="10" width="2" height="1" rx="0.5" />
    <rect x="1" y="13" width="2" height="1" rx="0.5" />
    <rect x="1" y="16" width="2" height="1" rx="0.5" />
    <rect x="21" y="7" width="2" height="1" rx="0.5" />
    <rect x="21" y="10" width="2" height="1" rx="0.5" />
    <rect x="21" y="13" width="2" height="1" rx="0.5" />
    <rect x="21" y="16" width="2" height="1" rx="0.5" />
    <rect x="7" y="1" width="1" height="2" rx="0.5" />
    <rect x="10" y="1" width="1" height="2" rx="0.5" />
    <rect x="13" y="1" width="1" height="2" rx="0.5" />
    <rect x="16" y="1" width="1" height="2" rx="0.5" />
    <rect x="7" y="21" width="1" height="2" rx="0.5" />
    <rect x="10" y="21" width="1" height="2" rx="0.5" />
    <rect x="13" y="21" width="1" height="2" rx="0.5" />
    <rect x="16" y="21" width="1" height="2" rx="0.5" />
  </svg>
);

function Card3D({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);
  const sheenGradient = useMotionTemplate`radial-gradient(
    800px circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%,
    rgba(255,255,255,0.3),
    transparent 40%
  )`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-[40px] transition-all duration-300 ease-out ${className}`}
    >
      <div style={{ transform: "translateZ(0)" }} className="relative h-full">
        {children}
      </div>
      <motion.div
        style={{ background: sheenGradient }}
        className="pointer-events-none absolute inset-0 z-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay"
      />
    </motion.div>
  );
}

const DeviceList = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-1 gap-2.5">
    {items.map((item, i) => (
      <div key={i} className="flex items-center gap-2.5 group/item">
        <CheckCircle2 size={18} className="text-[#0071e3] opacity-80 group-hover/item:opacity-100 transition-opacity flex-shrink-0" strokeWidth={2.5} />
        <span className="text-[15px] font-semibold text-[#1d1d1f]/90 group-hover/item:text-[#1d1d1f] transition-colors leading-tight">
          {item}
        </span>
      </div>
    ))}
  </div>
);

export function SupportedDevices() {
  const { t } = useLanguage();
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="supported">
      {/* Clean Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#FAFAFC]" />
      
      <div className="max-w-[1024px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-[64px] font-bold text-[#1d1d1f] tracking-tighter mb-6 leading-none"
          >
            {t.supported.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[24px] font-medium text-[#86868b] max-w-2xl leading-snug mx-auto"
          >
            {t.supported.subtitle}
            <span className="text-[#1d1d1f] block mt-2 font-semibold">{t.supported.subtitleBold}</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[540px]">
          
          {/* Main Card: AirPods */}
          <Card3D className="group md:col-span-2 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-black/5">
            <div className="p-10 h-full flex flex-col justify-between relative z-10">
              
              {/* Bold Background Graphic */}
              <div className="absolute right-[-40px] bottom-[-40px] w-[380px] h-[380px] opacity-[0.04] transform rotate-[-15deg] group-hover:scale-110 group-hover:opacity-[0.06] transition-all duration-700 ease-out pointer-events-none text-black">
                <AirPodsMaxGlyph className="w-full h-full" />
              </div>
              
              <div className="relative">
                {/* AirPods "A" Icon */}
                <div className="w-14 h-14 bg-[#F5F5F7] rounded-[18px] flex items-center justify-center mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_2px_4px_rgba(0,0,0,0.05)] border border-black/[0.03]">
                   <span className="text-[28px] font-bold text-[#1d1d1f] leading-none font-sans mt-0.5">A</span>
                </div>
                
                <h3 className="text-[34px] font-bold text-[#1d1d1f] mb-3 tracking-tight leading-none">{t.supported.airpods.title}</h3>
                <p className="text-[#86868b] text-lg font-medium mb-10 max-w-sm">
                   {t.supported.airpods.desc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-[#86868b] uppercase tracking-wider mb-4">Pro & Max</h4>
                    <DeviceList items={[
                      "AirPods Pro 3",
                      "AirPods Pro 2",
                      "AirPods Pro 1",
                      "AirPods Max",
                    ]} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#86868b] uppercase tracking-wider mb-4">Standard</h4>
                    <DeviceList items={[
                      "AirPods 4 (ANC)",
                      "AirPods 3",
                      "AirPods 2",
                    ]} />
                  </div>
                </div>
              </div>
            </div>
          </Card3D>

          {/* Right Column Container */}
          <div className="grid grid-rows-2 gap-6 md:col-span-1 h-full">
            
            {/* Beats Card */}
            <Card3D className="group bg-[#E30018] text-white shadow-[0_20px_40px_-15px_rgba(227,0,24,0.3)] hover:shadow-[0_30px_60px_-15px_rgba(227,0,24,0.4)] border-none">
               <div className="p-8 h-full flex flex-col relative overflow-hidden">
                  {/* Giant Background Logo */}
                  <BeatsGlyph className="absolute -right-8 -top-8 w-48 h-48 text-black/10 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                  
                  <div className="mt-auto relative z-10">
                     {/* Beats "B" Icon */}
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                        <span className="text-[20px] font-bold text-[#E30018] leading-none font-sans mt-0.5">B</span>
                     </div>
                     <h3 className="text-3xl font-bold mb-2">{t.supported.beats.title}</h3>
                     <p className="text-white/80 text-[15px] font-semibold leading-relaxed">
                        {t.supported.beats.desc}
                     </p>
                  </div>
               </div>
            </Card3D>

            {/* Chip/Tech Card */}
            <Card3D className="group bg-[#1d1d1f] text-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border-none">
               <div className="p-8 h-full flex flex-col justify-center relative overflow-hidden">
                  
                  {/* Schematic Background */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[1px] border-white/20 rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-[1px] border-white/20 rounded-full" />
                  </div>

                  <ChipGlyph className="absolute -right-6 -bottom-6 w-40 h-40 text-white/[0.05] group-hover:rotate-12 transition-transform duration-700" />

                  <div className="relative z-10">
                     <div className="flex items-center gap-2 text-[#2997FF] font-bold text-sm mb-3 uppercase tracking-wider">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
                        {t.supported.chip.label}
                     </div>
                     <p className="text-4xl font-bold tracking-tight mb-2">
                        {t.supported.chip.title}
                     </p>
                     <p className="text-white/60 text-[15px] font-medium leading-relaxed">
                        {t.supported.chip.desc}
                     </p>
                  </div>
               </div>
            </Card3D>
          
          </div>
        </div>
      </div>
    </section>
  );
}