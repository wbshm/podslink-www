import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import findImg from 'figma:asset/348809c5a724e50e324d932cf7f7cb9c996bb546.png';
import widgetImg from 'figma:asset/0c7fdc1c6aa62d6c1a991d37989c4c250d09f2ff.png';
import eqImg from 'figma:asset/007be8019058f7d55bc5ef7cfaa29d9ad9e116c3.png';
import moreImg from 'figma:asset/7e1fcf8b15214368748c410bbcdcc395e5ccd4c2.png';
import popupImg from 'figma:asset/bc20cf9ee63381995a4a312366b73db907eb3a22.png';
import batteryImg from 'figma:asset/f9f196447b8fbd6c7ef46e10ad4d3a6be57b2754.png';
import gestureImg from 'figma:asset/47583318d10fd1a54ad59a9f0831247a6acc5b2b.png';

interface ScreenshotCardProps {
  image: string;
  title: string;
  description: string;
  inView: boolean;
}

function ScreenshotCard({ image, title, description, inView }: ScreenshotCardProps) {
  return (
    <div className="flex-[0_0_75%] md:flex-[0_0_38%] lg:flex-[0_0_26%] min-w-0 pl-6 lg:pl-10 relative">
      <div 
        className="group flex flex-col h-full transition-all duration-700 ease-out"
        style={{
           opacity: inView ? 1 : 0.4,
           transform: inView ? 'scale(1)' : 'scale(0.95)',
        }}
      >
        {/* Device Frame */}
        <div 
          className="relative overflow-hidden rounded-[40px] bg-[#F5F5F7] mb-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-[6px] border-white ring-1 ring-black/5 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-grab active:cursor-grabbing"
        >
          {/* Inner Bezel */}
          <div className="absolute inset-0 border-[2px] border-black/5 rounded-[30px] pointer-events-none z-20" />
          
          {/* Glare/Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
        
        {/* Text info */}
        <div className={`text-center transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-[21px] font-bold text-[#1d1d1f] mb-2 tracking-tight">{title}</h3>
          <p className="text-[#86868b] text-[15px] font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function Screenshots() {
  const { t } = useLanguage();

  const screenshots = [
    { 
      image: popupImg, 
      title: t.screenshots.items[0].title, 
      description: t.screenshots.items[0].desc
    },
    { 
      image: batteryImg, 
      title: t.screenshots.items[1].title, 
      description: t.screenshots.items[1].desc
    },
    { 
      image: gestureImg, 
      title: t.screenshots.items[2].title, 
      description: t.screenshots.items[2].desc
    },
    { 
      image: findImg, 
      title: t.screenshots.items[3].title, 
      description: t.screenshots.items[3].desc
    },
    { 
      image: widgetImg, 
      title: t.screenshots.items[4].title, 
      description: t.screenshots.items[4].desc
    },
    { 
      image: eqImg, 
      title: t.screenshots.items[5].title, 
      description: t.screenshots.items[5].desc
    },
    { 
      image: moreImg, 
      title: t.screenshots.items[6].title, 
      description: t.screenshots.items[6].desc
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'center',
    loop: false,
    containScroll: 'trimSnaps',
    dragFree: true
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative py-24 lg:py-40 bg-white overflow-hidden" id="screenshots">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#F5F5F7] to-transparent -z-10 opacity-50" />

      <div className="max-w-[980px] mx-auto px-6 lg:px-8 mb-16 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-5xl lg:text-[64px] text-[#1d1d1f] tracking-tighter font-bold mb-6 leading-none">
            {t.screenshots.title}
          </h2>
          <p className="text-[24px] text-[#86868b] font-medium leading-snug">
            {t.screenshots.subtitle}
            <br className="hidden md:block" />
            {t.screenshots.subtitle2}
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4 mt-8">
            {/* Scroll Bar */}
            <div className="hidden md:block w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-[#1d1d1f] rounded-full transition-all duration-100"
                    style={{ width: `${(1 / screenshots.length) * 100}%`, transform: `translateX(${selectedIndex * 100}%)` }}
                />
            </div>

            <div className="flex gap-3">
              <button 
                onClick={scrollPrev}
                disabled={selectedIndex === 0}
                className="w-11 h-11 rounded-full bg-[#F5F5F7] hover:bg-[#E8E8ED] flex items-center justify-center text-[#1d1d1f] disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollNext}
                disabled={selectedIndex === screenshots.length - 1}
                className="w-11 h-11 rounded-full bg-[#F5F5F7] hover:bg-[#E8E8ED] flex items-center justify-center text-[#1d1d1f] disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex pl-6 md:pl-[max(2rem,calc((100vw-980px)/2))]">
          {screenshots.map((screenshot, index) => (
            <ScreenshotCard
              key={index}
              image={screenshot.image}
              title={screenshot.title}
              description={screenshot.description}
              inView={index === selectedIndex || (window.innerWidth >= 768 && Math.abs(index - selectedIndex) < 2) || (window.innerWidth >= 1024 && Math.abs(index - selectedIndex) < 3)}
            />
          ))}
          <div className="flex-[0_0_24px]" />
        </div>
      </div>
    </section>
  );
}