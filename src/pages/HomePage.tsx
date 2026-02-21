import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Philosophy';
import { Collection } from '../components/Collection';
import { Location } from '../components/Location';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [beanImage, setBeanImage] = useState<'svg' | 'photo'>('svg');

  const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  };

  const toggleBeanImage = () => {
    setBeanImage((prev) => prev === 'svg' ? 'photo' : 'svg');
  };
  return (
    <div
      className={`min-h-screen selection:bg-sensity-red selection:text-white transition-colors duration-500 ${theme === 'dark' ? 'bg-near-black' : 'bg-cream'}`}>

      <Navbar theme={theme} onToggleTheme={toggleTheme} beanImage={beanImage} onToggleBeanImage={toggleBeanImage} />
      <main>
        <Hero theme={theme} beanImage={beanImage} />
        {/* <Hero theme={theme} /> */}
        <Philosophy theme={theme} />
        <Collection theme={theme} />
        <Location theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>);

}
