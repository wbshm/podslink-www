import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import batteryImg from '@/assets/6e812bb7e63d2f943b654de229f85774032fb81b.png';
import popupImg from '@/assets/a07553c3382655fba627ccca11c1cb2e10bb3450.png';
import gestureImg from '@/assets/c8889515e8578414e75f962a7eb111650af013b7.png';

interface ShowcaseItemProps {
  image: string;
  title: string;
  subtitle: string;
  features: string[];
  index: number;
  isReversed?: boolean;
}

function ShowcaseItem({ image, title, subtitle, features, index, isReversed = false }: ShowcaseItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative py-24 lg:py-32">
      <motion.div
        style={{ opacity }}
        className={`relative flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-32`}
      >
        {/* Text Content */}
      <div className={`flex-1 ${isReversed ? 'lg:pl-12' : 'lg:pr-12'} space-y-10 max-w-lg`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl lg:text-[40px] text-[#1d1d1f] tracking-tight font-semibold mb-6 leading-[1.1]">
            {title}
          </h2>
          <p className="text-xl lg:text-[21px] text-[#86868b] font-medium leading-[1.4] mb-10">
            {subtitle}
          </p>

          <ul className="space-y-6">
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full border border-[#0071e3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0071e3] transition-colors duration-300">
                  <svg className="w-2.5 h-2.5 text-[#0071e3] group-hover:text-white transition-colors duration-300" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#1d1d1f] text-[17px] font-medium leading-tight pt-0.5">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div 
        className="flex-1 flex justify-center w-full"
        style={{ y: isReversed ? y : y }} // Subtle parallax
      >
        <div className="relative group perspective-1000 w-full max-w-[420px]">
          {/* Subtle Shadow Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-indigo-50 blur-[80px] rounded-full opacity-60 pointer-events-none" />
          
          {/* Phone Bezel/Mockup Container */}
          <motion.div 
             className="relative rounded-[50px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] bg-white ring-8 ring-white"
             whileHover={{ scale: 1.02 }}
             transition={{ duration: 0.5, ease: "easeOut" }}
          >
             <div className="absolute inset-0 border-[6px] border-black/5 rounded-[42px] z-20 pointer-events-none" />
             <img 
              src={image} 
              alt={title}
              className="w-full h-auto mx-auto bg-[#F5F5F7]"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
}

export function FeatureShowcase() {
  const showcaseFeatures = [
    {
      image: batteryImg,
      title: '电量，\n一目了然。',
      subtitle: '无需繁琐操作，打开盖子，精准电量即刻呈现。支持自定义颜色与显示模式。',
      features: [
        '左右耳独立电量精确显示',
        '充电盒状态实时更新',
        '低电量智能通知提醒',
      ],
    },
    {
      image: popupImg,
      title: '弹窗，\n赏心悦目。',
      subtitle: '深度还原 iOS 原生动画逻辑，配合 120Hz 高刷屏幕，每一次连接都是享受。',
      features: [
        '开盖自动唤醒弹窗',
        '丝滑流畅的动画效果',
        '支持深色模式与自定义主题',
      ],
    },
    {
      image: gestureImg,
      title: '操控，\n得心应手。',
      subtitle: '不仅是听歌，更是你的贴身助理。完全可自定义的触摸手势，释放双手。',
      features: [
        '自定义双击与三击功能',
        '切歌、暂停、唤醒助手',
        '防误触智能算法优化',
      ],
    },
  ];

  return (
    <section className="relative py-12 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 lg:px-8">
        {showcaseFeatures.map((feature, index) => (
          <ShowcaseItem
            key={index}
            image={feature.image}
            title={feature.title}
            subtitle={feature.subtitle}
            features={feature.features}
            index={index}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
