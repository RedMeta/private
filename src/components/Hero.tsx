import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
interface HeroProps {
  theme: 'light' | 'dark';
}
export function Hero({ theme }: HeroProps) {
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
      className={`coffee-content relative min-h-screen w-full flex flex-col justify-center overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-near-black text-warm-white' : 'bg-cream text-near-black'}`}>

      {/* Noise Texture Overlay */}
      <div
        className={`absolute inset-0 bg-noise pointer-events-none mix-blend-overlay ${theme === 'dark' ? 'opacity-20' : 'opacity-40'}`} />


      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col">

          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-9xl font-serif font-black tracking-tighter leading-[0.9] uppercase text-sensity-green">

            Sensity.
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-9xl font-serif font-black tracking-tighter leading-[0.9] uppercase text-transparent"
            style={{
              WebkitTextStroke:
                theme === 'dark' ? '2px #FAFAF8' : '2px #1A1A1A'
            }}>

            Espresso.
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-9xl font-serif font-black tracking-tighter leading-[0.9] uppercase text-sensity-red">

            Lovers.
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-24 max-w-md">

            <p
              className={`text-lg md:text-xl font-light leading-relaxed mb-8 ${theme === 'dark' ? 'text-warm-white/80' : 'text-near-black/80'}`}>

              Born from the Italian tradition, crafted for the modern
              connoisseur. We don't just serve coffee; we deliver an experience
              of pure intensity.
            </p>

            <button
              onClick={() =>
                document.getElementById('menu')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }
              className={`group flex items-center space-x-4 border px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300 ${theme === 'dark' ? 'text-sensity-green border-sensity-green hover:bg-sensity-green hover:text-white' : 'text-sensity-red border-sensity-red hover:bg-sensity-red hover:text-white'}`}>

              <span>Explore Our Menu</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t pointer-events-none ${theme === 'dark' ? 'from-sensity-red/10 to-transparent' : 'from-sensity-red/5 to-transparent'}`} />

    </section>);

}
