import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('pk_language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('pk_language', lang);
  }, [lang]);

  const t = (key) => {
    if (!translations[lang]) return translations['en'][key] || key;
    return translations[lang][key] || translations['en'][key] || key;
  };

  const getMultilingualText = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj['en'] || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getMultilingualText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
