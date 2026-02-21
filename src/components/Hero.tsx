import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import CoffeeBackground from './CoffeeBackground';

interface HeroProps {
  theme: 'light' | 'dark';
}
export function Hero({ theme }: HeroProps) {
  const getScreenSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 768;
    const isSmallViewport = width < 480;
    const isTall = height > width * 1.5;

    return { isMobile, isSmallViewport, isTall };
  };

  const [screenSize, setScreenSize] = useState(() => {
    if (typeof window === 'undefined') return { isMobile: false, isSmallViewport: false, isTall: false };
    return getScreenSize();
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const beanCount = screenSize.isMobile ? 7 : 75;
  const topPadding = screenSize.isTall ? 'pt-12' : 'pt-16 md:pt-20';
  const bottomSpacing = screenSize.isSmallViewport ? 'pb-2' : 'pb-4 md:pb-12';

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
      className={`relative min-h-[100svh] md:min-h-screen w-full flex flex-col justify-center overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-near-black text-warm-white' : 'bg-cream text-near-black'}`}>

      {/* Noise Texture Overlay */}
      <div
        className={`absolute inset-0 bg-noise pointer-events-none mix-blend-overlay ${theme === 'dark' ? 'opacity-20' : 'opacity-40'}`} />


      <div className={`max-w-7xl mx-auto px-6 md:px-12 w-full z-10 ${topPadding}`}>
        <CoffeeBackground beanCount={beanCount}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col">

            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-9xl font-serif font-extrabold tracking-tighter-editorial leading-[0.9] uppercase text-sensity-green drop-shadow-2xl">

              Sensity
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className={`text-7xl md:text-9xl font-serif font-extrabold tracking-tighter-editorial leading-[0.9] uppercase drop-shadow-2xl ${theme === 'dark' ? 'text-warm-white' : 'text-charcoal'}`}
            // style={{
            //   WebkitTextStroke:
            //     theme === 'dark' ? '3px #FAFAF8' : '3px #1A1A1A'
            // }}
            >

              Espresso
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-9xl font-serif font-extrabold tracking-tighter-editorial leading-[0.9] uppercase text-sensity-red drop-shadow-2xl">

              Lovers
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-16 md:mt-24 max-w-md pb-4 md:pb-12">

              <p
                className={`text-lg md:text-xl font-semibold leading-relaxed mb-8 ${theme === 'dark' ? 'text-warm-white drop-shadow-sm' : 'text-near-black bg-cream/90 px-3 py-2 rounded-sm'}`}>

                Rrugë të vjetra. Mëngjese të hershme. Një espresso e shkurtër,
                e fortë, në banak. Ai shpirt italian mbetet me ne—i rilindur
                te Sensity me qartësi moderne, thellësi të butë dhe një shije
                që zgjat.
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
        </CoffeeBackground>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t pointer-events-none ${theme === 'dark' ? 'from-sensity-red/10 to-transparent' : 'from-sensity-red/5 to-transparent'}`} />
    </section >);

}
