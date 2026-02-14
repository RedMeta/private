import React from 'react';
import { motion } from 'framer-motion';
interface PhilosophyProps {
  theme: 'light' | 'dark';
}
export function Philosophy({ theme }: PhilosophyProps) {
  return (
    <section
      id="philosophy"
      className={`py-24 md:py-32 relative transition-colors duration-500 ${theme === 'dark' ? 'bg-charcoal text-warm-white' : 'bg-white text-near-black'}`}>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            scaleX: 0
          }}
          whileInView={{
            scaleX: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          className={`w-full h-px mb-16 origin-left ${theme === 'dark' ? 'bg-white/20' : 'bg-black/10'}`} />


        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}>

            <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tight uppercase leading-none">
              Our
              <br />
              <span className="text-sensity-green">Passion</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="space-y-8">

            <p className="text-xl md:text-2xl font-light leading-relaxed">
              At Sensity, we believe espresso is the purest expression of
              coffee. It is an art form that demands precision, respect, and
              above all, passion.
            </p>
            <p
              className={`text-lg font-light leading-relaxed ${theme === 'dark' ? 'text-warm-white/70' : 'text-near-black/70'}`}>

              Our journey began in the bustling piazzas of Italy, where coffee
              is not just a drink, but a moment of connection. We've brought
              that spirit here, refining it with modern techniques while
              honoring the timeless traditions of the barista craft.
            </p>
            <p
              className={`text-lg font-light leading-relaxed ${theme === 'dark' ? 'text-warm-white/70' : 'text-near-black/70'}`}>

              Every shot we pull is a testament to our obsession with quality.
              From the grind to the tamp, from the pressure to the pour—we chase
              the perfect crema, the perfect balance, the perfect moment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

}