import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Philosophy';
import { Collection } from '../components/Collection';
import { Location } from '../components/Location';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import CoffeeBackground from '../components/CoffeeBackground';

export function HomePage() {

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  };
  return (
    <div
      className={`min-h-screen selection:bg-sensity-red selection:text-white transition-colors duration-500 ${theme === 'dark' ? 'bg-near-black' : 'bg-cream'}`}>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <CoffeeBackground children={<Hero theme={theme} />} beanCount={100} />

        {/* <Hero theme={theme} /> */}
        <Philosophy theme={theme} />
        <Collection theme={theme} />
        <Location theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>);

}
