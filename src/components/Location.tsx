import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
interface LocationProps {
  theme: 'light' | 'dark';
}
export function Location({ theme }: LocationProps) {
  return (
    <section
      id="location"
      className={`py-24 md:py-32 transition-colors duration-500 ${theme === 'dark' ? 'bg-charcoal text-warm-white' : 'bg-white text-near-black'}`}>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Address Column */}
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
            }}>

            <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tight uppercase mb-12">
              Visit
              <br />
              Us
            </h2>

            <div className="flex items-start space-x-4 mb-8">
              <MapPin
                className={`w-6 h-6 mt-1 flex-shrink-0 ${theme === 'dark' ? 'text-sensity-green' : 'text-sensity-red'}`} />

              <div>
                <h3 className="text-2xl font-bold mb-2 font-serif">
                  Sensity Espresso Bar
                </h3>
                <p
                  className={`text-lg font-light leading-relaxed ${theme === 'dark' ? 'text-warm-white/70' : 'text-near-black/70'}`}>

                  1240 Industrial Avenue
                  <br />
                  Arts District
                  <br />
                  Los Angeles, CA 90021
                </p>
                <a
                  href="#"
                  className={`inline-block mt-4 font-bold uppercase tracking-widest text-sm border-b pb-1 transition-colors duration-300 ${theme === 'dark' ? 'text-sensity-green border-sensity-green hover:text-white hover:border-white' : 'text-sensity-red border-sensity-red hover:text-black hover:border-black'}`}>

                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hours Column */}
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
            }}
            className="flex flex-col justify-center">

            <div
              className={`p-8 md:p-12 ${theme === 'dark' ? 'bg-near-black' : 'bg-cream'}`}>

              <div className="flex items-center space-x-3 mb-8">
                <Clock
                  className={`w-6 h-6 ${theme === 'dark' ? 'text-sensity-red' : 'text-sensity-green'}`} />

                <h3 className="text-xl font-bold uppercase tracking-widest">
                  Opening Hours
                </h3>
              </div>

              <div className="space-y-6">
                <div
                  className={`flex justify-between items-center border-b pb-4 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>

                  <span className="font-medium">Monday - Friday</span>
                  <span
                    className={`font-light ${theme === 'dark' ? 'text-warm-white/70' : 'text-near-black/70'}`}>

                    7:00 AM — 6:00 PM
                  </span>
                </div>
                <div
                  className={`flex justify-between items-center border-b pb-4 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>

                  <span className="font-medium">Saturday</span>
                  <span
                    className={`font-light ${theme === 'dark' ? 'text-warm-white/70' : 'text-near-black/70'}`}>

                    8:00 AM — 7:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span
                    className={`font-light ${theme === 'dark' ? 'text-warm-white/70' : 'text-near-black/70'}`}>

                    8:00 AM — 5:00 PM
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
