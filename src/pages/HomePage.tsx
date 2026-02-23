import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Philosophy';
import { Collection } from '../components/Collection';
import { Location } from '../components/Location';
import { Footer } from '../components/Footer';

export function HomePage() {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };
  return (
    <div
      className={`min-h-screen selection:bg-sensity-red selection:text-white transition-colors duration-500 ${theme === 'dark' ? 'bg-near-black text-cream' : 'bg-cream text-coffee'}`}>

      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        currentLanguage={i18n.language}
        onLanguageChange={changeLanguage}
      />
      <main>
        <Hero theme={theme} />
        <Philosophy theme={theme} />
        <Collection theme={theme} />
        <Location theme={theme} />
        {/* <Contact theme={theme} /> */}
      </main>
      <Footer theme={theme} />
    </div>);

}
