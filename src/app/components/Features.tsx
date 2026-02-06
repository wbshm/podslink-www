import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Bluetooth, Zap, MapPin, Headphones } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import gesturesImage from '@/assets/439b5dcb8eb28c49de4510d11a631c0947942605.png';
import imgImageLeftEarbud from "@/assets/a155c358c86f8304676cc799d11f21f2cb863c40.png";
import imgImageRightEarbud from "@/assets/41f58edab280c981b3bc47ce35ce4bf050386819.png";
import imgImageChargingCase from "@/assets/d8d06419e330cf1485bef7885bd2c061eb03f5e3.png";
import popupBgDark from "@/assets/4ca469331e858a56ad25f7e01047c493a3abb53f.png";
import widgetImage from "@/assets/0e54b9ec2fcde479d2f719056d6b413c9d8a60d4.png";
import featuresTitleImage from "@/assets/fabfdcba3cd7a8d72f22f6bc40a88c08d10a4fd0.png";

// --- Visual Components ---

// Small Card: Battery Visual
const BatteryVisual = () => (
  <div className="w-full h-full flex items-center justify-center pb-4">
     <div className="flex justify-center gap-4 transform scale-100"> 
        
        {/* Left Earbud Card */}
        <div className="flex flex-col items-center transform -rotate-6 translate-y-4 transition-transform hover:-translate-y-2 duration-300">
            <div className="w-[58px] h-[88px] bg-gradient-to-b from-[#5ADC78] to-[#4CD964] rounded-[18px] flex flex-col items-center justify-between py-2.5 shadow-[0_8px_20px_rgba(76,217,100,0.3)] border border-white/20 backdrop-blur-md">
                <span className="text-white font-bold text-xl drop-shadow-sm">L</span>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-[10px] rounded-[2px] border-[1.5px] border-white/90 p-[1.5px] relative">
                        <div className="h-full bg-white rounded-[1px] w-full shadow-[0_0_4px_rgba(255,255,255,0.4)]" />
                        <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1.5 bg-white/90 rounded-r-[1px]" />
                    </div>
                    <span className="text-white text-[10px] font-bold tracking-wide opacity-95">100</span>
                </div>
            </div>
        </div>

        {/* Case Card */}
        <div className="flex flex-col items-center z-20 -translate-y-2 transition-transform hover:-translate-y-4 duration-300">
             <div className="w-[64px] h-[96px] bg-gradient-to-b from-[#9e9e9e] to-[#8e8e93] rounded-[20px] flex flex-col items-center justify-between py-3 shadow-[0_12px_24px_rgba(0,0,0,0.15)] border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-white/40" />
                <span className="text-white font-bold text-lg drop-shadow-sm">Case</span>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-[10px] rounded-[2px] border-[1.5px] border-white/90 p-[1.5px] relative">
                         <div className="h-full bg-white rounded-[1px] w-[70%]" />
                         <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1.5 bg-white/90 rounded-r-[1px]" />
                    </div>
                    <span className="text-white text-[10px] font-bold tracking-wide opacity-95">72%</span>
                </div>
            </div>
        </div>

        {/* Right Earbud Card */}
        <div className="flex flex-col items-center transform rotate-6 translate-y-4 transition-transform hover:-translate-y-2 duration-300">
            <div className="w-[58px] h-[88px] bg-gradient-to-b from-[#5ADC78] to-[#4CD964] rounded-[18px] flex flex-col items-center justify-between py-2.5 shadow-[0_8px_20px_rgba(76,217,100,0.3)] border border-white/20 backdrop-blur-md">
                <span className="text-white font-bold text-xl drop-shadow-sm">R</span>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-[10px] rounded-[2px] border-[1.5px] border-white/90 p-[1.5px] relative">
                        <div className="h-full bg-white rounded-[1px] w-full shadow-[0_0_4px_rgba(255,255,255,0.4)]" />
                        <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1.5 bg-white/90 rounded-r-[1px]" />
                    </div>
                    <span className="text-white text-[10px] font-bold tracking-wide opacity-95">100</span>
                </div>
            </div>
        </div>
     </div>
  </div>
);

// Small Card: Popup Visual
const PopupVisual = () => {
  const [bgIndex, setBgIndex] = useState(0);
  
  const backgrounds = [
    { type: 'image', value: 'url(https://images.unsplash.com/photo-1749630699891-eb25c3426d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMGVsZWdhbnQlMjBhYnN0cmFjdCUyMG1pbmltYWxpc3QlMjB3YWxscGFwZXIlMjB3aGl0ZSUyMGdyZXl8ZW58MXx8fHwxNzcwMjgzNzc1fDA&ixlib=rb-4.1.0&q=80&w=400)', text: '#1d1d1f' },
    { type: 'image', value: 'url(https://images.unsplash.com/photo-1694698955114-82c37b89f961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwd2FsbHBhcGVyJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwMjgzMDUzfDA&ixlib=rb-4.1.0&q=80&w=400)', text: '#FFFFFF' }, // Optimized size
    { type: 'image', value: 'url(https://images.unsplash.com/photo-1758568938040-fb8b7275ca5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZWxlZ2FudCUyMGFic3RyYWN0JTIwZ3JhZGllbnQlMjB3YWxscGFwZXIlMjA0a3xlbnwxfHx8fDE3NzAyODM0OTJ8MA&ixlib=rb-4.1.0&q=80&w=400)', text: '#FFFFFF' }
  ];

  // Auto-rotate backgrounds
  useEffect(() => {
    const timer = setInterval(() => {
        setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  const currentBg = backgrounds[bgIndex];
  const isDark = bgIndex > 0; // Assuming images are dark/rich enough for white text, or we add shadow

  const BatteryIcon = ({ level = 100 }: { level?: number }) => (
    <div className={`w-[14px] h-[6px] rounded-[1.5px] border-[1px] p-[0.5px] relative flex items-center ${isDark ? 'border-white/50' : 'border-[#4CD964]'}`}>
        <div 
            className={`h-full rounded-[0.5px] ${isDark ? 'bg-white' : 'bg-[#4CD964]'}`}
            style={{ width: `${level}%` }}
        />
        <div className={`absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[1px] h-[2px] rounded-r-[0.5px] ${isDark ? 'bg-white/50' : 'bg-[#4CD964]'}`} />
    </div>
  );

  return (
    <div className="w-full h-full flex items-center justify-center relative">
       
       <div className="flex items-center gap-6">
           {/* iOS Battery Popup - Scaled Down */}
           <div 
             className="w-[180px] aspect-square rounded-[26px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15),0_0_1px_rgba(0,0,0,0.1)] flex flex-col p-4 transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden"
             style={{ 
                 ...(currentBg.type === 'color' ? { backgroundColor: currentBg.value } : { backgroundImage: currentBg.value }),
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
             }}
           >
               {/* Dim overlay for text readability on images */}
               {isDark && <div className="absolute inset-0 bg-black/20 pointer-events-none" />}

               {/* Header */}
               <div className="relative w-full mb-2 text-center shrink-0 z-10">
                   <span className="text-[13px] font-bold transition-colors duration-300" style={{ color: currentBg.text }}>AirPods Pro</span>
                   <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center cursor-pointer transition-colors ${isDark ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-[#F2F2F7] text-[#86868b] hover:bg-[#E5E5E5]'}`}>
                       <svg width="6" height="6" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                           <path d="M1 1L9 9M9 1L1 9" />
                       </svg>
                   </div>
               </div>
      
               {/* Devices Display - Grouped Layout */}
               <div className="flex-1 w-full flex justify-center items-center gap-4 z-10 pb-2">
                   
                   {/* Left & Right Earbuds Grouped */}
                   <div className="flex gap-1.5 items-end">
                       {/* Left AirPod */}
                       <div className="flex flex-col items-center gap-2 w-[34px]">
                           <div className="h-[52px] flex items-center justify-center">
                               <img 
                                 src={imgImageLeftEarbud} 
                                 alt="Left AirPod" 
                                 className="h-[44px] object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]" 
                               />
                           </div>
                           <div className="flex flex-col items-center gap-0.5">
                                <BatteryIcon level={100} />
                                <span className="text-[8px] font-bold mt-0.5 transition-colors duration-300" style={{ color: currentBg.text }}>100%</span>
                           </div>
                       </div>
          
                       {/* Right AirPod */}
                       <div className="flex flex-col items-center gap-2 w-[34px]">
                           <div className="h-[52px] flex items-center justify-center">
                               <img 
                                 src={imgImageRightEarbud} 
                                 alt="Right AirPod" 
                                 className="h-[44px] object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]" 
                               />
                           </div>
                           <div className="flex flex-col items-center gap-0.5">
                                <BatteryIcon level={100} />
                                <span className="text-[8px] font-bold mt-0.5 transition-colors duration-300" style={{ color: currentBg.text }}>100%</span>
                           </div>
                       </div>
                   </div>
    
                   {/* Case */}
                   <div className="flex flex-col items-center gap-2 w-[64px]">
                       <div className="h-[52px] flex items-center justify-center">
                            <img 
                             src={imgImageChargingCase} 
                             alt="Charging Case" 
                             className="h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] scale-110" 
                           />
                       </div>
                       <div className="flex flex-col items-center gap-0.5">
                            <div className={`w-[14px] h-[6px] rounded-[1.5px] border-[1px] p-[0.5px] relative flex items-center ${isDark ? 'border-white/50' : 'border-[#86868b]'}`}>
                                <div className={`h-full w-[85%] rounded-[0.5px] ${isDark ? 'bg-white' : 'bg-[#86868b]'}`} />
                                <div className={`absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[1px] h-[2px] rounded-r-[0.5px] ${isDark ? 'bg-white/50' : 'bg-[#86868b]'}`} />
                            </div>
                            <span className="text-[8px] font-bold mt-0.5 transition-colors duration-300" style={{ color: currentBg.text }}>85%</span>
                       </div>
                   </div>
    
               </div>
           </div>
           
           {/* Style Switcher */}
           <div className="flex flex-col gap-3">
               {backgrounds.map((bg, idx) => (
                   <div 
                      key={idx}
                      onClick={() => setBgIndex(idx)}
                      className={`w-8 h-8 rounded-full cursor-pointer transition-all duration-300 border-[2px] shadow-sm relative overflow-hidden ${bgIndex === idx ? 'border-blue-500 scale-110' : 'border-transparent hover:scale-105'}`}
                   >
                      <div 
                          className="absolute inset-0 w-full h-full"
                          style={{ 
                              ...(bg.type === 'color' ? { backgroundColor: '#F2F2F7' } : { backgroundImage: bg.value }),
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                          }} 
                      />
                      {bg.type === 'color' && (
                         <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-500">
                             Aa
                         </div>
                      )}
                   </div>
               ))}
           </div>

       </div>
    </div>
  );
};

// Small Card: Pro EQ (Interactive & Precise)
const EQVisual = () => {
    // Initial state resembling the "M" shape
    const [bands, setBands] = useState([0.65, 0.35, 0.75, 0.25, 0.65]);
    const containerRef = useRef<HTMLDivElement>(null);
    const draggingRef = useRef<{ index: number, startY: number, startVal: number } | null>(null);

    // Dimensions
    const graphWidth = 240;
    const graphHeight = 120;
    const paddingY = 24; 

    // Handle global pointer moves for dragging
    useEffect(() => {
        const handlePointerMove = (e: PointerEvent) => {
            if (!draggingRef.current) return;
            
            const { index, startY, startVal } = draggingRef.current;
            const deltaY = e.clientY - startY;
            const valueChange = deltaY / graphHeight;
            const newVal = Math.max(0, Math.min(1, startVal - valueChange));
            
            setBands(prev => {
                const next = [...prev];
                next[index] = newVal;
                return next;
            });
        };

        const handlePointerUp = () => {
            draggingRef.current = null;
            document.body.style.cursor = '';
        };

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);
        
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, []);

    const handlePointerDown = (index: number, e: React.PointerEvent) => {
        e.preventDefault();
        draggingRef.current = {
            index,
            startY: e.clientY,
            startVal: bands[index]
        };
        document.body.style.cursor = 'grabbing';
    };

    // Calculate points coordinates
    const points = useMemo(() => {
        return bands.map((val, i) => {
            const x = (i / (bands.length - 1)) * graphWidth;
            const y = (1 - val) * graphHeight + paddingY;
            return { x, y, val };
        });
    }, [bands]);

    // Generate smooth path using Catmull-Rom spline
    const pathD = useMemo(() => {
        if (points.length < 2) return "";
        
        // Helper to get vector
        const p = (i: number) => {
            const index = Math.max(0, Math.min(i, points.length - 1));
            return points[index];
        };

        let d = `M ${points[0].x} ${points[0].y}`;
        
        for (let i = 0; i < points.length - 1; i++) {
            const p0 = p(i - 1);
            const p1 = p(i);
            const p2 = p(i + 1);
            const p3 = p(i + 2);

            const cp1x = p1.x + (p2.x - p0.x) / 6;
            const cp1y = p1.y + (p2.y - p0.y) / 6;

            const cp2x = p2.x - (p3.x - p1.x) / 6;
            const cp2y = p2.y - (p3.y - p1.y) / 6;

            d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
        }
        return d;
    }, [points]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative select-none" ref={containerRef}>
             
             {/* Graph Container */}
             <div className="relative" style={{ width: graphWidth, height: graphHeight + paddingY * 2 }}>
                 
                 {/* Background Grid Lines */}
                 <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-[24px] px-0">
                     {[0, 0.5, 1].map((_, i) => (
                         <div key={i} className="w-full h-px bg-gray-100" />
                     ))}
                 </div>

                 {/* Vertical Stems (Tracks) */}
                 {points.map((pt, i) => (
                     <div 
                        key={`stem-${i}`}
                        className="absolute w-px bg-blue-100/50 pointer-events-none"
                        style={{ 
                            left: pt.x, 
                            top: paddingY, 
                            bottom: paddingY,
                            transform: 'translateX(-50%)',
                        }}
                     />
                 ))}

                 {/* SVG Curves */}
                 <svg 
                    width={graphWidth} 
                    height={graphHeight + paddingY * 2} 
                    className="absolute inset-0 overflow-visible pointer-events-none"
                 >
                     <defs>
                         <linearGradient id="eqGradient" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="0%" stopColor="#0071e3" stopOpacity="0.15" />
                             <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
                         </linearGradient>
                     </defs>
                     
                     {/* Fill under curve */}
                     <path 
                        d={`${pathD} V ${graphHeight + paddingY} H 0 Z`} 
                        fill="url(#eqGradient)" 
                     />
                     
                     {/* Stroke Curve */}
                     <path 
                        d={pathD} 
                        fill="none" 
                        stroke="#0071e3" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                     />
                 </svg>

                 {/* Interactive Knobs */}
                 {points.map((pt, i) => (
                    <div
                        key={`knob-${i}`}
                        className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing z-10 transition-transform hover:scale-110 active:scale-95 group"
                        style={{ 
                            left: pt.x, 
                            top: pt.y,
                            marginLeft: -16, 
                            marginTop: -16,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.03)"
                        }}
                        onPointerDown={(e) => handlePointerDown(i, e)}
                    >
                        {/* Blue dot inside */}
                        <div className="w-3 h-3 bg-[#0071e3] rounded-full group-hover:scale-110 transition-transform duration-200" />
                    </div>
                 ))}
             </div>
        </div>
    );
};

// Small Card: Find My (Map + Radar - Recreated from Reference)
const FindMyVisual = () => (
   <div className="w-full h-full relative overflow-hidden bg-[#F5F5F7]">
      {/* Map Background Pattern */}
      <div className="absolute inset-0 scale-[1.35] origin-center rotate-6 opacity-60">
           {/* SVG Map Lines */}
           <svg className="w-full h-full absolute inset-0 text-gray-200" width="100%" height="100%">
                <defs>
                    <pattern id="grid" width="160" height="160" patternUnits="userSpaceOnUse">
                        <path d="M 160 0 L 0 0 0 160" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
           
           {/* Street Names */}
           <div className="absolute top-[30%] left-[20%] text-[9px] text-gray-300 font-bold tracking-widest rotate-0 select-none">MAIN ST</div>
           <div className="absolute bottom-[35%] right-[25%] text-[9px] text-gray-300 font-bold tracking-widest rotate-0 select-none">BROADWAY</div>
      </div>

      {/* Radar Overlay */}
      <div className="absolute inset-0 flex items-center justify-center translate-y-8">
          {/* Concentric Circles - Scaled down slightly to prevent clipping */}
          <div className="absolute w-[240px] h-[240px] rounded-full border border-[#0071e3]/10" />
          <div className="absolute w-[160px] h-[160px] rounded-full border border-[#0071e3]/20" />
          
          {/* Scanning Beam - Using mask for softer edges */}
          <div className="absolute w-[300px] h-[300px] rounded-full overflow-hidden" 
               style={{ 
                   maskImage: 'radial-gradient(circle, black 50%, transparent 70%)',
                   WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 70%)'
               }}>
            <motion.div 
                className="w-full h-full"
                style={{ 
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0,113,227,0.2) 50deg, transparent 60deg)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Device Icon (Central Focus) */}
          <div className="relative z-10 flex flex-col items-center transform translate-y-1">
             {/* White Box */}
             <motion.div 
                className="w-16 h-16 bg-white rounded-[18px] shadow-[0_12px_24px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)] flex items-center justify-center relative z-20"
                initial={{ y: 0 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             >
                <Bluetooth size={30} className="text-[#0071e3]" strokeWidth={2.5} />
             </motion.div>
             
             {/* Pin Arrow */}
             <motion.div 
                 className="w-4 h-4 bg-white rotate-45 transform -translate-y-2.5 z-10"
                 initial={{ y: -10 }}
                 animate={{ y: [-10, -16, -10] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             />

             {/* Ground Shadow */}
             <motion.div 
                 className="absolute bottom-[-12px] w-12 h-2 bg-black/10 rounded-full blur-[4px]"
                 initial={{ scale: 1, opacity: 0.5 }}
                 animate={{ scale: [1, 0.8, 1], opacity: [0.5, 0.3, 0.5] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             />
          </div>
      </div>
   </div>
);

// Small Card: Widgets
const WidgetsVisual = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-5 pb-2">
       {/* Desktop Widget */}
       <div className="w-[100px] h-[100px] rounded-[22px] shadow-[0_12px_24px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)] overflow-hidden transition-transform hover:scale-105 duration-300 bg-white">
           <img src={widgetImage} alt="Battery Widget" className="w-full h-full object-cover" />
       </div>

       {/* Notification Pill */}
       <div className="w-[200px] h-[52px] bg-[#323232] rounded-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center px-4 gap-3 transition-transform hover:scale-105 duration-300 border border-white/10 relative overflow-hidden">
           {/* Glass effect reflection */}
           <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
           
           {/* Icon */}
           <div className="w-7 h-7 rounded-[7px] bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
               <Headphones size={14} className="text-black fill-black" />
           </div>
           
           {/* Text Content */}
           <div className="flex flex-col justify-center gap-0.5 min-w-0 flex-1">
               <div className="flex items-center justify-between w-full">
                   <span className="text-[11px] font-semibold text-white leading-none tracking-wide">PodsLink</span>
                   <span className="text-[9px] text-white/40 leading-none">刚刚</span>
               </div>
               <span className="text-[10px] text-white/70 leading-none truncate font-medium tracking-tight">L:100%  R:100%  Case:85%</span>
           </div>
       </div>
  </div>
);

// Small Card: Gestures
const GesturesVisual = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 relative overflow-hidden">
       {/* Touch Indicator - Animated Overlay */}
       <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          
          {/* Left Earbud Indicator */}
          <div className="absolute flex items-center justify-center -translate-x-[78px] translate-y-[5px]">
              {/* 3 Overlapping Ripples for continuous flow */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-[#0071e3]"
                  initial={{ opacity: 0.5, scale: 0 }}
                  animate={{ opacity: 0, scale: 8 }} // Increased scale for larger ripples
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 1, // Perfect 1s offset for 3s duration
                    ease: "easeOut" 
                  }}
                  style={{ width: '8px', height: '8px' }} // Start from the center dot size
                />
              ))}
              
              {/* Center Dot (Anchor) */}
              <div className="w-2 h-2 bg-[#0071e3] rounded-full shadow-[0_0_10px_rgba(0,113,227,0.8)] z-20 relative" />
          </div>

          {/* Right Earbud Indicator */}
          <div className="absolute flex items-center justify-center translate-x-[67px] translate-y-[42px]">
              {/* 3 Overlapping Ripples */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-[#0071e3]"
                  initial={{ opacity: 0.5, scale: 0 }}
                  animate={{ opacity: 0, scale: 8 }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 1 + 0.5, // Offset right ear by 0.5s
                    ease: "easeOut" 
                  }}
                  style={{ width: '8px', height: '8px' }}
                />
              ))}

              {/* Center Dot */}
              <div className="w-2 h-2 bg-[#0071e3] rounded-full shadow-[0_0_10px_rgba(0,113,227,0.8)] z-20 relative" />
          </div>
       </div>
       
       <div className="relative w-full h-full flex items-center justify-center">
           <img 
              src={gesturesImage} 
              alt="AirPods Gestures" 
              className="object-contain w-full h-full max-h-[130px] drop-shadow-xl transform translate-y-2"
           />
       </div>
    </div>
  );
};

// --- Card Components ---

function SmallCard({ title, subtitle, visual }: { title: string, subtitle: string, visual: React.ReactNode }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="bg-[#F5F5F7] rounded-[40px] overflow-hidden flex flex-col aspect-square w-full group shadow-sm hover:shadow-xl border border-black/5"
    >
      <div className="px-8 pt-8 pb-4 shrink-0 relative z-20">
        <h3 className="text-[24px] font-bold text-[#1d1d1f] tracking-tight leading-tight mb-2">
          {title}
        </h3>
        <p className="text-[15px] text-[#86868b] font-medium leading-relaxed">
          {subtitle}
        </p>
      </div>
      <div className="flex-1 relative w-full overflow-hidden">
         {visual}
      </div>
    </motion.div>
  );
}

export function Features() {
  const { t } = useLanguage();
  return (
    <section className="py-24 lg:py-32 bg-white" id="features">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <div className="mb-20 text-center">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl lg:text-[64px] font-bold text-[#1d1d1f] tracking-tighter mb-6 leading-none"
           >
             {t.features.title}
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-[24px] font-medium text-[#86868b] max-w-2xl leading-snug mx-auto"
           >
             {t.features.subtitle}
           </motion.p>
        </div>

        {/* Grid Layout: Auto height, direct children - 1:1 Aspect Ratio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
           <SmallCard 
             title={t.features.cards.battery.title}
             subtitle={t.features.cards.battery.subtitle}
             visual={<BatteryVisual />}
           />
           
           <SmallCard 
             title={t.features.cards.eq.title}
             subtitle={t.features.cards.eq.subtitle}
             visual={<EQVisual />}
           />

           <SmallCard 
             title={t.features.cards.findMy.title}
             subtitle={t.features.cards.findMy.subtitle}
             visual={<FindMyVisual />}
           />
           
           <SmallCard 
             title={t.features.cards.popup.title}
             subtitle={t.features.cards.popup.subtitle}
             visual={<PopupVisual />}
           />

           <SmallCard 
             title={t.features.cards.widgets.title}
             subtitle={t.features.cards.widgets.subtitle}
             visual={<WidgetsVisual />}
           />

           <SmallCard 
             title={t.features.cards.gestures.title}
             subtitle={t.features.cards.gestures.subtitle}
             visual={<GesturesVisual />}
           />

        </div>
      </div>
    </section>
  );
}