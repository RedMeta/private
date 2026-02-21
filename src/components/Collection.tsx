import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: 'Classic' | 'Milk-Based' | 'Specialty';
  price: string;
}
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Espresso',
    description: 'The foundation. Bold, intense, pure.',
    category: 'Classic',
    price: '$4'
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Velvety foam meets rich espresso.',
    category: 'Milk-Based',
    price: '$6'
  },
  {
    id: 3,
    name: 'Macchiato',
    description: 'Espresso kissed with steamed milk.',
    category: 'Classic',
    price: '$5'
  },
  {
    id: 4,
    name: 'Affogato',
    description: 'Vanilla gelato drowned in espresso.',
    category: 'Specialty',
    price: '$7'
  },
  {
    id: 5,
    name: 'Ristretto',
    description: 'Short, sweet, and concentrated.',
    category: 'Classic',
    price: '$4'
  },
  {
    id: 6,
    name: 'Flat White',
    description: 'Silky microfoam, double shot.',
    category: 'Milk-Based',
    price: '$6'
  }];

interface CollectionProps {
  theme: 'light' | 'dark';
}
export function Collection({ theme }: CollectionProps) {
  return (
    <section
      id="menu"
      className={`relative py-24 md:py-32 overflow-hidden transition-colors duration-500 ${theme === 'dark'
        ? 'bg-near-black text-warm-white'
        : 'bg-cream text-near-black'
        }`}>
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

          The
          <br />
          <span className="text-sensity-red">Menu</span>
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
          className={`hidden md:block uppercase tracking-widest text-sm font-bold ${theme === 'dark' ? 'text-sensity-green' : 'text-sensity-red'}`}>

          Scroll to explore &rarr;
        </motion.div>
      </div>

      <div className="relative w-full">
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 px-6 md:px-12 space-x-6 md:space-x-8 scrollbar-hide">
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
              className={`snap-start flex-shrink-0 w-[300px] md:w-[350px] h-[450px] border p-8 flex flex-col justify-between group transition-all duration-500 ${theme === 'dark' ? 'bg-charcoal border-white/10 hover:border-sensity-green' : 'bg-white border-black/5 shadow-sm hover:shadow-xl hover:border-sensity-red/30'}`}>

              <div>
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={`px-3 py-1 text-xs font-bold uppercase tracking-widest border rounded-full ${theme === 'dark' ? 'border-white/20 text-white/60' : 'border-black/10 text-black/60'}`}>

                    {item.category}
                  </span>
                  <span className="text-2xl font-bold text-sensity-red font-serif">
                    {item.price}
                  </span>
                </div>

                <h3
                  className={`text-3xl font-serif font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'group-hover:text-sensity-green' : 'group-hover:text-sensity-red'}`}>

                  {item.name}
                </h3>

                <div
                  className={`w-12 h-1 mb-6 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'}`} />


                <p
                  className={`text-lg font-light italic leading-relaxed ${theme === 'dark' ? 'text-warm-white/70' : 'text-near-black/70'}`}>

                  "{item.description}"
                </p>
              </div>

              <button
                className={`w-full py-4 border-t flex justify-between items-center transition-colors duration-300 ${theme === 'dark' ? 'border-white/10 group-hover:border-sensity-green/50 text-white' : 'border-black/5 group-hover:border-sensity-red/30 text-black'}`}>

                <span className="uppercase tracking-widest text-sm font-bold">
                  Order Now
                </span>
                <ArrowRight
                  className={`w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 ${theme === 'dark' ? 'text-sensity-green' : 'text-sensity-red'}`} />

              </button>
            </motion.div>
          )}

          {/* Spacer for end of scroll */}
          <div className="w-6 md:w-12 flex-shrink-0" />
        </div>
      </div>
    </section>);

}
