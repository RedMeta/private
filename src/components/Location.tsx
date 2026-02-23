import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LocationProps {
  theme: 'light' | 'dark';
}
export function Location({ theme }: LocationProps) {
  const { t } = useTranslation();
  return (
    <section
      id="location"
      className={`py-24 md:py-32 transition-colors duration-500 ${theme === 'dark' ? 'bg-charcoal text-cream' : 'bg-white text-coffee'}`}>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.h2
          initial={{
            opacity: 0,
            y: -30
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
          className="text-5xl md:text-7xl font-serif font-black tracking-tight uppercase mb-16">
          <span className="text-sensity-red">{t('location.title1')}</span>
          {' '}
          {t('location.title2')}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Address and Hours */}
          <motion.div
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
            className="space-y-12">

            {/* Address */}
            <div>
              <div className="flex items-start space-x-4">
                <MapPin
                  className={`w-6 h-6 mt-1 flex-shrink-0 ${theme === 'dark' ? 'text-sensity-green' : 'text-sensity-red'}`} />

                <div>
                  <h3 className="text-2xl font-bold mb-2 font-serif">
                    {t('location.businessName')}
                  </h3>
                  <p
                    className={`text-lg font-light leading-relaxed mb-4 ${theme === 'dark' ? 'text-cream/70' : 'text-coffee/70'}`}>

                    {t('location.address').split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < 2 && <br />}
                      </span>
                    ))}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/y99KWLdaMtjzsji98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 font-bold uppercase tracking-widest text-sm border-b-2 pb-1 transition-colors duration-300 ${theme === 'dark' ? 'text-sensity-green border-sensity-green hover:text-cream hover:border-cream' : 'text-sensity-red border-sensity-red hover:text-coffee hover:border-coffee'}`}>
                    <span>{t('location.getDirections')}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div
              className={`p-8 rounded-lg border ${theme === 'dark' ? 'bg-near-black border-white/10' : 'bg-white border-black/5 shadow-sm'}`}>

              <div className="flex items-center space-x-3 mb-6">
                <Clock
                  className={`w-6 h-6 ${theme === 'dark' ? 'text-sensity-green' : 'text-sensity-red'}`} />

                <h3 className="text-xl font-bold uppercase tracking-widest">
                  {t('location.openingHours')}
                </h3>
              </div>

              <div className="space-y-4">
                <div
                  className={`flex justify-between items-center border-b pb-3 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
                  <span className="font-medium">{t('location.days.mondayFriday')}</span>
                  <span
                    className={`font-light ${theme === 'dark' ? 'text-cream/70' : 'text-coffee/70'}`}>
                    {t('location.hours.weekday')}
                  </span>
                </div>
                <div
                  className={`flex justify-between items-center border-b pb-3 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
                  <span className="font-medium">{t('location.days.saturday')}</span>
                  <span
                    className={`font-light ${theme === 'dark' ? 'text-cream/70' : 'text-coffee/70'}`}>
                    {t('location.hours.saturday')}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{t('location.days.sunday')}</span>
                  <span
                    className={`font-light ${theme === 'dark' ? 'text-cream/70' : 'text-coffee/70'}`}>
                    {t('location.hours.sunday')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}>
            <div className={`w-full h-full min-h-[350px] lg:min-h-[450px] rounded-lg overflow-hidden border ${theme === 'dark' ? 'border-white/10' : 'border-black/5 shadow-xl'}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504.4875179786437!2d19.665249876157898!3d41.39790015719092!2m3!1f54.37735576847757!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13502db4b2468f4d%3A0xf7303ed092dd34aa!2sSensity%20Espresso%20Lovers!5e1!3m2!1sit!2s!4v1771840092257!5m2!1sit!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
