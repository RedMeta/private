import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CoffeeBackground from './CoffeeBackground';

interface MenuItem {
  id: string;
}

interface CollectionProps {
  theme: 'light' | 'dark';
}

export function Collection({ theme }: CollectionProps) {
  const { t } = useTranslation();

  const menuItems: MenuItem[] = [
    { id: 'rojal' },
    { id: 'densa' },
    { id: 'kaffa' },
    { id: 'choco' }
  ];

  return (
    <section
      id="menu"
      className={`relative py-24 md:py-32 overflow-hidden transition-colors duration-500 ${theme === 'dark'
        ? 'bg-near-black text-cream'
        : 'bg-cream text-coffee'
        }`}>
      <CoffeeBackground>
        <div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">

            <motion.h2
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}
              className="text-5xl md:text-7xl font-serif font-black tracking-tight uppercase">

              {t('menu.title1')}
              <br />
              <span className="text-sensity-red">{t('menu.title2')}</span>
            </motion.h2>

            <motion.div
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.5
              }}
              className={`md:hidden uppercase tracking-widest text-sm font-bold ${theme === 'dark' ? 'text-cream' : 'text-coffee'}`}>

              Scroll to explore &rarr;
            </motion.div>
          </div>

          <div className="relative w-full">
            <div className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-12 md:px-12 gap-4 md:gap-6 scrollbar-hide">
              {/* Spacer for mobile centering */}
              <div className="md:hidden flex-shrink-0" style={{ width: 'calc(50vw - 140px - 0.5rem)' }} />

              {menuItems.map((item, index) =>
                <motion.div
                  key={item.id}
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
                    duration: 0.6,
                    delay: index * 0.1
                  }}
                  className={`snap-center flex-shrink-0 md:flex-shrink w-[280px] md:w-auto min-h-[520px] border p-6 flex flex-col justify-between group transition-all duration-500 ${theme === 'dark' ? 'bg-charcoal border-white/10 hover:border-sensity-green' : 'bg-white border-black/5 shadow-sm hover:shadow-xl hover:border-sensity-red/30'}`}>

                  <div>
                    <div className="flex flex-row justify-between items-start mb-3">
                      <h3
                        className={`text-2xl font-serif font-bold transition-colors duration-300 ${theme === 'dark' ? 'group-hover:text-sensity-green' : 'group-hover:text-sensity-red'}`}>

                        {t(`menu.items.${item.id}.name`)}
                      </h3>

                      <span className="text-xl font-bold text-sensity-red font-serif whitespace-nowrap ml-2">
                        {t(`menu.items.${item.id}.price`)}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="w-full mb-4 aspect-square overflow-hidden rounded-lg">
                      <img
                        src={t(`menu.items.${item.id}.image`)}
                        alt={t(`menu.items.${item.id}.name`)}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div
                      className={`w-12 h-1 mb-3 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'}`} />

                    <p
                      className={`text-sm font-light italic leading-relaxed ${theme === 'dark' ? 'text-cream/70' : 'text-coffee/70'}`}>

                      "{t(`menu.items.${item.id}.description`)}"
                    </p>
                  </div>

                  <button
                    className={`w-full py-3 border-t flex justify-between items-center transition-colors duration-300 ${theme === 'dark' ? 'border-white/10 group-hover:border-sensity-green/50 text-cream' : 'border-black/5 group-hover:border-sensity-red/30 text-coffee'}`}>

                    <span className="uppercase tracking-widest text-xs font-bold">
                      {t('menu.viewDetails')}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300 ${theme === 'dark' ? 'text-sensity-green' : 'text-sensity-red'}`} />

                  </button>
                </motion.div>
              )}

              {/* Spacer for mobile centering */}
              <div className="md:hidden flex-shrink-0" style={{ width: 'calc(50vw - 140px - 0.5rem)' }} />
            </div>
          </div>
        </div>

      </CoffeeBackground>

    </section >
  );

}
