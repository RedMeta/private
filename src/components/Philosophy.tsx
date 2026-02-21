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
            }}
            className="h-full">
            <div className='sack-back'>
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tight uppercase leading-none">
                Pasioni
                <br />
                <span className="text-sensity-green">Ynë</span>
              </h2>
            </div>
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
              Te Sensity, ne besojmë se espresso është shprehja më e pastër e
              kafesë. Është një formë arti që kërkon precizion, respekt dhe,
              mbi të gjitha, pasion.
            </p>
            <p
              className={`text-lg font-light leading-relaxed ${theme === 'dark' ? 'text-warm-white/70' : 'text-near-black/70'}`}>

              Udhëtimi ynë nisi në piazzat plot jetë të Italisë, ku kafeja nuk
              është thjesht një pije, por një moment lidhjeje. Ne e kemi sjellë
              këtë frymë këtu, duke e rafinuar me teknika moderne dhe duke
              nderuar traditat e përjetshme të artit të baristës.
            </p>
            <p
              className={`text-lg font-light leading-relaxed ${theme === 'dark' ? 'text-warm-white/70' : 'text-near-black/70'}`}>

              Çdo kafe që përgatisim është dëshmi e fiksimit tonë me cilësinë.
              Nga pjekja te stampimi, nga presioni te derdhja—ne ndjekim kremin
              perfekt, balancën perfekte dhe momentin perfekt.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

}
