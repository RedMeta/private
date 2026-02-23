import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CoffeeBackground from './CoffeeBackground';

interface HeroProps {
  theme: 'light' | 'dark';
}
export function Hero({ theme }: HeroProps) {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      className={`relative w-full flex flex-col justify-start overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-near-black text-cream' : 'bg-cream text-coffee'}`}>

      {/* Noise Texture Overlay */}
      <div
        className={`absolute inset-0 bg-noise pointer-events-none mix-blend-overlay ${theme === 'dark' ? 'opacity-20' : 'opacity-40'}`} />


      <div className={`max-w-7xl mx-auto px-6 md:px-12 w-full z-10 pt-20 md:pt-30`}>
        <CoffeeBackground>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col">

            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-8xl font-serif font-extrabold tracking-tighter-editorial leading-[0.9] uppercase text-sensity-green drop-shadow-2xl">

              {t('hero.title1')}
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className={`text-7xl md:text-8xl font-serif font-extrabold tracking-tighter-editorial leading-[0.9] uppercase drop-shadow-2xl ${theme === 'dark' ? 'text-transparent' : 'text-coffee'}`}
              style={{
                WebkitTextStroke:
                  theme === 'dark' ? '3px #FFF8F0' : '',
              }}
            >

              {t('hero.title2')}
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-8xl font-serif font-extrabold tracking-tighter-editorial leading-[0.9] uppercase text-sensity-red drop-shadow-2xl">

              {t('hero.title3')}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-16 md:mt-24 max-w-md pb-4 md:pb-12">

              <p
                className={`text-lg md:text-xl font-semibold leading-relaxed mb-8 ${theme === 'dark' ? 'text-cream drop-shadow-sm' : 'text-coffee bg-cream/90 px-3 py-2 rounded-sm'}`}>

                {t('hero.subtitle')}
              </p>

              <button
                onClick={() =>
                  document.getElementById('menu')?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }
                className={`group flex items-center space-x-4 px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300 ${theme === 'dark' ? 'bg-sensity-green text-white border-2 border-sensity-green hover:bg-transparent hover:text-sensity-green' : 'bg-sensity-red text-white border-2 border-sensity-red hover:bg-transparent hover:text-sensity-red'}`}>

                <span>{t('hero.cta')}</span>
                <ArrowDown className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </CoffeeBackground>
      </div>
    </section >);

}
