import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    dashboard: 'Dashboard',
    documentation: 'Documentation',
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    profile: 'Profile',
    tehriDam: 'Tehri Dam',
    poweringIndia: 'Powering India with Clean Energy',
    heroTitle: 'Tehri Dam: Engineering Marvel of Hydropower',
    heroSubtitle: 'Experience real-time operational data and interactive simulations of one of India\'s largest hydroelectric projects.',
    viewDocs: 'View Documentation',
    realTimeData: 'Real-Time Data',
    waterLevel: 'Water Level',
    energyProduced: 'Energy Produced',
    currentProduced: 'Current Produced',
    turbineStatus: 'Turbine Status',
    simulation: 'Interactive Simulation',
    adjustParameters: 'Adjust Parameters'
  },
  hi: {
    home: 'होम',
    about: 'के बारे में',
    dashboard: 'डैशबोर्ड',
    documentation: 'दस्तावेज़',
    login: 'लॉगिन',
    signup: 'साइन अप',
    logout: 'लॉगआउट',
    profile: 'प्रोफ़ाइल',
    tehriDam: 'टिहरी बांध',
    poweringIndia: 'स्वच्छ ऊर्जा से भारत को शक्ति',
    heroTitle: 'टिहरी बांध: हाइड्रोपावर का इंजीनियरिंग चमत्कार',
    heroSubtitle: 'भारत की सबसे बड़ी हाइड्रोइलेक्ट्रिक परियोजनाओं में से एक का रीयल-टाइम डेटा और इंटरैक्टिव सिमुलेशन अनुभव करें।',
    viewDocs: 'दस्तावेज़ देखें',
    realTimeData: 'रीयल-टाइम डेटा',
    waterLevel: 'जल स्तर',
    energyProduced: 'उत्पादित ऊर्जा',
    currentProduced: 'उत्पादित करंट',
    turbineStatus: 'टरबाइन स्थिति',
    simulation: 'इंटरैक्टिव सिमुलेशन',
    adjustParameters: 'पैरामीटर समायोजित करें'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};