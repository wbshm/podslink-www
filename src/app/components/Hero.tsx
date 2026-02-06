import React, { useRef, useEffect } from 'react';
import { ChevronRight, X, Wifi, Signal, Search, Smartphone } from 'lucide-react';
import { motion, useTransform, useMotionValue } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import imgImageLeftEarbud from "@/assets/a155c358c86f8304676cc799d11f21f2cb863c40.png";
import imgImageRightEarbud from "@/assets/41f58edab280c981b3bc47ce35ce4bf050386819.png";
import imgImageChargingCase from "@/assets/d8d06419e330cf1485bef7885bd2c061eb03f5e3.png";
import imgAirPodsReal from "@/assets/33c660328585b48e4baf2ebc2234da2f3ecc8371.png";
import imgAppIcon from "@/assets/769d0a29245202fd1627047491876bc9538d8a02.png";

// Pixel-perfect Battery Icon Component with Animation
function BatteryIcon({ percent, delay = 0 }: { percent: number, delay?: number }) {
  return (
    <div className="flex flex-col items-center gap-1">
       <div className="relative w-[26px] h-[12px] opacity-90">
          {/* Main Body */}
          <div className="absolute inset-0 border-[1.5px] border-[#34C759] rounded-[3px] p-[1.5px]">
             <motion.div 
               initial={{ width: "0%" }}
               animate={{ width: `${percent}%` }}
               transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
               className="h-full bg-[#34C759] rounded-[1px]" 
             />
          </div>
          {/* Tip */}
          <div className="absolute -right-[2.5px] top-1/2 -translate-y-1/2 w-[2.5px] h-[4px] bg-[#34C759] rounded-r-[1.5px]" />
       </div>
       <span className="text-[11px] font-bold text-black leading-tight mt-1 tracking-tight">{percent}%</span>
    </div>
  );
}

// Android Status Bar Battery (Vertical/Solid style simplified)
function AndroidStatusIcons() {
   return (
      <div className="flex items-center gap-2 opacity-90">
         <Wifi size={18} className="text-black/90" />
         <Signal size={18} className="text-black/90" />
         {/* Android Battery: Vertical with percentage often inside or next to it, let's do a simple solid block */}
         <div className="w-[12px] h-[18px] border-[1.5px] border-black/80 rounded-[2px] relative flex items-end p-[1px]">
            <div className="w-full h-[60%] bg-black/80 rounded-[0.5px]" />
         </div>
      </div>
   );
}

const AndroidLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5235 5.57143L19.2605 2.56303C19.3361 2.43193 19.2924 2.26471 19.1613 2.18908C19.0303 2.11345 18.863 2.15714 18.7874 2.28824L17.0252 5.34118C15.5395 4.66218 13.8588 4.28571 12 4.28571C10.1412 4.28571 8.4605 4.66218 6.97479 5.34118L5.21261 2.28824C5.13697 2.15714 4.96975 2.11345 4.83866 2.18908C4.70756 2.26471 4.66387 2.43193 4.7395 2.56303L6.47647 5.57143C2.88067 7.52941 0.443697 11.2328 0 15.4286H24C23.5563 11.2328 21.1193 7.52941 17.5235 5.57143ZM7.71429 11.5714C7.08403 11.5714 6.57143 11.0588 6.57143 10.4286C6.57143 9.79832 7.08403 9.28571 7.71429 9.28571C8.34454 9.28571 8.85714 9.79832 8.85714 10.4286C8.85714 11.0588 8.34454 11.5714 7.71429 11.5714ZM16.2857 11.5714C15.6555 11.5714 15.1429 11.0588 15.1429 10.4286C15.1429 9.79832 15.6555 9.28571 16.2857 9.28571C16.916 9.28571 17.4286 9.79832 17.4286 10.4286C17.4286 11.0588 16.916 11.5714 16.2857 11.5714Z" />
  </svg>
);

function HeroVisual() {
  return (
    <div className="relative w-[320px] h-[690px] select-none lg:scale-[0.85] origin-center">
       {/* Device Frame - Sleek Modern Android Flagship */}
       <div className="absolute inset-0 bg-[#121212] rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3),0_30px_60px_-30px_rgba(0,0,0,0.5)] ring-[8px] ring-[#2a2a2a] overflow-hidden isolate border-[4px] border-[#1a1a1a]">
          
          {/* Screen Content */}
          <div className="absolute inset-0 bg-[#eef2f5] rounded-[32px] overflow-hidden flex flex-col z-10 font-sans">
             
             {/* Android Status Bar */}
             <div className="absolute top-0 left-0 right-0 h-[40px] px-5 flex items-end pb-2 justify-between z-50">
                {/* Time (Left aligned on Android) */}
                <span className="text-[14px] font-medium text-black/80 tracking-wide">10:00</span>
                
                {/* Status Icons (Right aligned) */}
                <AndroidStatusIcons />
             </div>

             {/* Android Home Screen Environment */}
             <div className="absolute top-[60px] left-0 right-0 px-5 flex flex-col h-full pt-4">
                
                {/* "At a Glance" Widget */}
                <div className="flex flex-col mb-8 opacity-80 pl-1">
                   <span className="text-[13px] font-medium text-gray-500 uppercase tracking-wider">Tuesday, Feb 5</span>
                   <span className="text-[26px] font-normal text-gray-800 leading-tight">22°C</span>
                </div>

                {/* Grid of Apps - Circle Icons (Android Style) */}
                <div className="grid grid-cols-4 gap-x-4 gap-y-6 opacity-80">
                   {[...Array(16)].map((_, i) => (
                       i === 0 ? (
                         <div key={i} className="flex flex-col items-center gap-1.5">
                            <img src={imgAppIcon} alt="App" className="w-[52px] h-[52px] rounded-full shadow-sm object-cover" />
                            <div className="w-8 h-1.5 bg-gray-300/50 rounded-full" />
                         </div>
                       ) : (
                         <div key={i} className="flex flex-col items-center gap-1.5">
                            <div className="w-[52px] h-[52px] bg-[#dce4eb] rounded-full shadow-sm" />
                            <div className="w-8 h-1.5 bg-gray-300/50 rounded-full" />
                         </div>
                       )
                   ))}
                </div>
                
                {/* Bottom Area */}
                <div className="absolute bottom-[24px] left-0 right-0 px-4">
                   {/* Google Search Pill */}
                   <div className="h-[48px] bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center px-4 gap-3 mb-6 mx-1">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-500 via-red-500 to-yellow-500 opacity-80" />
                      <span className="text-gray-400 text-sm">Search...</span>
                      <Search size={18} className="ml-auto text-gray-400" />
                   </div>

                   {/* Dock (5 icons standard on Android) */}
                   <div className="flex justify-between px-2">
                      {[...Array(5)].map((_, i) => (
                         <div key={i} className="w-[50px] h-[50px] bg-[#c5d3e0] rounded-full shadow-sm" />
                      ))}
                   </div>
                </div>
             </div>

             {/* Dimming Overlay (Simulating iOS focus/modal state) */}
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }} // Starts dimming just before popup
                className="absolute inset-0 bg-black/25 z-30 pointer-events-none"
             />

             {/* The Popup Card - 1:1 Aspect Ratio (iOS Design Language preserved) */}
             <motion.div 
               initial={{ y: "110%" }}
               animate={{ y: 0 }}
               transition={{ 
                   type: "spring",
                   stiffness: 280,
                   damping: 24,
                   mass: 0.8,
                   delay: 0.7
               }}
               className="absolute bottom-0 left-0 right-0 bg-white w-full aspect-square rounded-t-[38px] flex flex-col items-center pt-9 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] z-40"
             >
                {/* Close Button */}
                <button className="absolute top-5 right-5 w-[26px] h-[26px] bg-[#F2F2F7] rounded-full flex items-center justify-center hover:bg-[#E5E5EA] transition-colors">
                   <X size={12} className="text-[#8E8E93] stroke-[3px]" />
                </button>

                {/* Title Section */}
                <div className="text-center mb-2 w-full px-4">
                   <motion.h2 
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.9, duration: 0.4 }}
                     className="text-[22px] font-bold text-black tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
                   >
                      AirPods Pro
                   </motion.h2>
                </div>

                {/* Devices Display */}
                <div className="flex-1 w-full px-6 pb-20 flex items-end justify-between relative">
                   
                   {/* Left Group: Two Earbuds - Reduced Size */}
                   <div className="flex gap-2 items-end">
                      {/* Left Earbud */}
                      <motion.div 
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.95, duration: 0.4 }}
                         className="flex flex-col items-center w-[60px]"
                      >
                         <div className="h-[90px] flex items-center justify-center mb-4">
                            <img src={imgImageLeftEarbud} alt="L" className="h-[76px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]" />
                         </div>
                         <BatteryIcon percent={100} delay={1.1} />
                      </motion.div>

                      {/* Right Earbud */}
                      <motion.div 
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 1.0, duration: 0.4 }}
                         className="flex flex-col items-center w-[60px]"
                      >
                         <div className="h-[90px] flex items-center justify-center mb-4">
                            <img src={imgImageRightEarbud} alt="R" className="h-[76px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]" />
                         </div>
                         <BatteryIcon percent={100} delay={1.15} />
                      </motion.div>
                   </div>

                   {/* Right Group: Case */}
                   <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.05, duration: 0.4 }}
                      className="flex flex-col items-center w-[90px] mr-1"
                   >
                      <div className="h-[90px] flex items-center justify-center mb-4">
                         <img src={imgImageChargingCase} alt="Case" className="h-[96px] max-w-none object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)] origin-bottom" />
                      </div>
                      <BatteryIcon percent={85} delay={1.2} />
                   </motion.div>

                </div>
             </motion.div>
          </div>

          {/* Glare/Reflection Overlay */}
          <div className="absolute inset-0 rounded-[40px] pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40 z-20 mix-blend-overlay" />
       </div>
       
       {/* Real AirPods Device Floating - Outside the phone */}
       <motion.div 
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute -right-[100px] -bottom-[60px] w-[180px] z-50 pointer-events-none hidden lg:block"
          style={{ translateZ: 60 }}
       >
          <img 
            src={imgAirPodsReal} 
            alt="Realistic AirPods Pro" 
            className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]" 
          />
       </motion.div>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse move effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Throttled mouse move for better performance
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        mouseX.set((e.clientX / innerWidth - 0.5) * 5); // Reduced intensity
        mouseY.set((e.clientY / innerHeight - 0.5) * 5);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, (val) => -val);
  const rotateY = useTransform(mouseX, (val) => val);

  return (
    <div ref={containerRef} className="relative bg-white overflow-hidden flex flex-col items-center justify-start pt-28 pb-12 lg:pt-36 lg:pb-20">
      
      {/* Background Ambience & Pulse Effect - Optimized */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none will-change-transform">
         {/* Moving Gradient Orbs */}
         <motion.div 
           animate={{ 
             scale: [1, 1.1, 1],
             opacity: [0.4, 0.5, 0.4]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-gradient-to-b from-[#F5F5F7] to-[#E0E5FF] rounded-full blur-[80px] will-change-transform" 
         />
         <motion.div 
           animate={{ 
             scale: [1.1, 1, 1.1],
             opacity: [0.4, 0.5, 0.4]
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-t from-[#F5F5F7] to-[#E8F1FF] rounded-full blur-[80px] will-change-transform" 
         />
         
         {/* Radar/Ripple Waves centered behind the phone */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.3, 0], scale: 1.5 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 border border-[#000000]/5 rounded-full"
              />
            ))}
            {/* Subtle inner glow */}
             <motion.div 
               animate={{ opacity: [0.3, 0.6, 0.3] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute w-[300px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full"
             />
         </div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f3f4] mb-8 mx-auto lg:mx-0 border border-black/5"
          >
             <div className="w-5 h-5 flex items-center justify-center bg-[#3ddc84] rounded-full">
                <AndroidLogo className="w-3.5 h-3.5 text-white" />
             </div>
             <span className="text-[13px] font-semibold text-[#1d1d1f] tracking-wide uppercase">{t.hero.tag}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl lg:text-[80px] font-bold tracking-tighter text-[#1d1d1f] leading-[1.05] mb-8"
          >
            {t.hero.title1}
            <br />
            <span className="text-[#86868b]">
               {t.hero.title2}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[24px] text-[#1d1d1f] max-w-xl mx-auto lg:mx-0 leading-snug mb-10 tracking-tight font-medium"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="flex flex-row items-center justify-center lg:justify-start gap-8"
          >
             <a 
               href="https://play.google.com/store/apps/details?id=net.podslink"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-[#1d1d1f] hover:bg-black text-white px-9 py-4 rounded-full text-[17px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl flex items-center gap-3"
             >
                <AndroidLogo className="w-5 h-5 text-white" />
                <span>{t.hero.download}</span>
             </a>
             <a 
               href="https://www.youtube.com/watch?v=i2fbaHubZhs"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-[#86868b] hover:text-[#1d1d1f] font-medium text-[16px] group transition-colors"
             >
                {t.hero.demo} <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
             </a>
          </motion.div>
        </div>

        {/* Right: The Focused Visual */}
        <motion.div 
           className="flex-1 w-full flex justify-center perspective-[2000px] py-10"
           style={{ rotateX, rotateY }}
        >
           <motion.div
             initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
             animate={{ opacity: 1, scale: 1, rotateY: 0 }}
             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
             className="relative origin-center"
           >
             <HeroVisual />
           </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
