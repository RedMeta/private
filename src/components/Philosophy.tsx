import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface PhilosophyProps {
  theme: 'light' | 'dark';
}
export function Philosophy({ theme }: PhilosophyProps) {
  const { t } = useTranslation();
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
                {t('philosophy.title1')}
                <span className="text-sensity-green">
                  {t('philosophy.title2')}
                </span>
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
              {t('philosophy.text1')}
            </p>
            <p
              className={`text-lg font-light leading-relaxed ${theme === 'dark' ? 'text-warm-white/70' : 'text-near-black/70'}`}>

              {t('philosophy.text2')}
            </p>
            <p
              className={`text-lg font-light leading-relaxed ${theme === 'dark' ? 'text-warm-white/70' : 'text-near-black/70'}`}>

              {t('philosophy.text3')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

}
