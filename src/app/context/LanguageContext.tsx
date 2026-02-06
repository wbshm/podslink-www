import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'zh';

const translations = {
  en: {
    navbar: {
      features: "Features",
      screenshots: "Interface",
      supported: "Supported",
      download: "Download"
    },
    hero: {
      tag: "Designed for Android",
      title1: "AirPods.",
      title2: "Meet Android.",
      subtitle: "The ultimate companion app. Seamless connection, customizable controls, and native Android integration.",
      download: "Download for Android",
      demo: "Watch Demo"
    },
    features: {
      title: "Core Features",
      subtitle: "Six powerful modules to unlock the full potential of your headphones on Android.",
      cards: {
        battery: { title: "Battery Level", subtitle: "Instant connection, real-time status." },
        eq: { title: "Audio Effects", subtitle: "Built-in EQ, customize your sound." },
        findMy: { title: "Find My", subtitle: "Lost alerts and precision tracking." },
        popup: { title: "Custom Popups", subtitle: "Multiple styles, make it yours." },
        widgets: { title: "Widgets", subtitle: "Desktop notifications at a glance." },
        gestures: { title: "Gestures", subtitle: "Control with a simple touch." }
      }
    },
    supported: {
      title: "Supported Devices",
      subtitle: "PodsLink natively supports all Apple silicon audio devices.",
      subtitleBold: "Plug and play, seamless experience.",
      airpods: {
        title: "AirPods",
        desc: "Support for popup and battery level on all AirPods models."
      },
      beats: {
        title: "Beats",
        desc: "Studio Pro, Fit Pro, Solo 3/4, Powerbeats..."
      },
      chip: {
        title: "H1 / H2",
        label: "Core Engine",
        desc: "Optimized for all chips, fast and stable."
      }
    },
    screenshots: {
      title: "Interface Preview",
      subtitle: "Following Material You guidelines,",
      subtitle2: "while retaining iOS elegance.",
      items: [
        { title: "Native Popup", desc: "Classic Apple popup experience" },
        { title: "Battery Status", desc: "No more battery anxiety" },
        { title: "Gesture Settings", desc: "Customize touch controls" },
        { title: "Find My", desc: "Play sound & map navigation" },
        { title: "Widgets", desc: "3 sizes, fits perfectly" },
        { title: "Audio Enhancer", desc: "Custom EQ for every device" },
        { title: "More Settings", desc: "Auto-play" }
      ]
    },
    footer: {
      title: "Ready to upgrade?",
      subtitle: "Join thousands of users enjoying the best AirPods experience on Android.",
      download: "Download Now",
      copyright: "© 2024 PodsLink. Designed by Apple fans."
    }
  },
  zh: {
    navbar: {
      features: "核心功能",
      screenshots: "界面预览",
      supported: "支持设备",
      download: "下载"
    },
    hero: {
      tag: "专为安卓设计",
      title1: "AirPods，",
      title2: "幸会安卓。",
      subtitle: "为你的 AirPods 打造的终极伴侣。秒连弹窗、电量显示、手势控制，完美融入安卓系统。",
      download: "下载安卓版",
      demo: "观看演示"
    },
    features: {
      title: "核心功能",
      subtitle: "汇集六大实用模块，让你的耳机在安卓上火力全开。",
      cards: {
        battery: { title: "三真电量", subtitle: "开盖即连，电量实时同步。" },
        eq: { title: "专属音效", subtitle: "内置 EQ，听感自由定义。" },
        findMy: { title: "查找定位", subtitle: "遗落提醒，精准追踪。" },
        popup: { title: "弹窗自定义", subtitle: "多种风格，个性定义。" },
        widgets: { title: "个性组件", subtitle: "桌面通知，随时可见。" },
        gestures: { title: "手势操控", subtitle: "指尖轻触，随心而动。" }
      }
    },
    supported: {
      title: "支持型号",
      subtitle: "PodsLink 原生支持所有搭载 Apple 芯片的音频设备。",
      subtitleBold: "即插即用，无缝体验。",
      airpods: {
        title: "AirPods",
        desc: "支持全系 AirPods 开盖弹窗与电量显示。"
      },
      beats: {
        title: "Beats",
        desc: "Studio Pro, Fit Pro, Solo 3/4, Powerbeats..."
      },
      chip: {
        title: "H1 / H2",
        label: "Core Engine",
        desc: "全系芯片适配，连接快速稳定。"
      }
    },
    screenshots: {
      title: "界面预览",
      subtitle: "遵循 Material You 设计规范，",
      subtitle2: "同时保留 iOS 的优雅美学。",
      items: [
        { title: "原生弹窗", desc: "还原 Apple 经典弹窗体验" },
        { title: "电量显示", desc: "告别电量焦虑，一目了然" },
        { title: "手势设置", desc: "自定义耳机触控操作" },
        { title: "查找定位", desc: "支持播放声音与地图导航" },
        { title: "桌面组件", desc: "三种尺寸，完美融入桌面" },
        { title: "音频增强", desc: "为每款耳机定制专属 EQ" },
        { title: "更多设置", desc: "自动播放" }
      ]
    },
    footer: {
      title: "准备好升级体验了吗？",
      subtitle: "加入数万用户，在安卓上享受最好的 AirPods 体验。",
      download: "立即下载",
      copyright: "© 2024 PodsLink. 由果粉为果粉设计。"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
