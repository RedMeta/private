import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
interface ContactProps {
  theme: 'light' | 'dark';
}
export function Contact({ theme }: ContactProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };
  const inputClasses = `w-full bg-transparent border-b py-4 text-xl md:text-2xl focus:outline-none transition-colors duration-300 font-light ${theme === 'dark' ? 'border-white/20 focus:border-sensity-red placeholder-white/20 text-white' : 'border-black/20 focus:border-sensity-red placeholder-black/20 text-black'}`;
  const labelClasses = `block text-sm uppercase tracking-widest mb-2 font-bold ${theme === 'dark' ? 'text-sensity-green' : 'text-sensity-red'}`;
  return (
    <section
      id="contact"
      className={` coffee-back py-24 md:py-32 transition-colors duration-500 ${theme === 'dark' ? 'bg-near-black text-warm-white' : 'bg-cream text-near-black'}`}>

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
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
          className="text-center mb-16">

          <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tight uppercase mb-6">
            Get In Touch
          </h2>
          <p
            className={`text-xl font-light ${theme === 'dark' ? 'text-warm-white/60' : 'text-near-black/60'}`}>

            Wholesale inquiries, press, or just to say hello.
          </p>
        </motion.div>

        <motion.form
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
            duration: 0.8,
            delay: 0.2
          }}
          onSubmit={handleSubmit}
          className="space-y-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <label htmlFor="name" className={labelClasses}>
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    name: e.target.value
                  })
                }
                className={inputClasses}
                placeholder="Marco Rossi"
                required />

            </div>
            <div className="group">
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value
                  })
                }
                className={inputClasses}
                placeholder="marco@example.com"
                required />

            </div>
          </div>

          <div className="group">
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formState.message}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  message: e.target.value
                })
              }
              className={`${inputClasses} resize-none`}
              placeholder="Tell us about your passion for coffee..."
              required />

          </div>

          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className={`group flex items-center space-x-4 px-12 py-5 uppercase tracking-widest text-sm font-bold transition-all duration-300 ${theme === 'dark' ? 'bg-sensity-red text-white hover:bg-white hover:text-sensity-red' : 'bg-sensity-red text-white hover:bg-near-black hover:text-white'}`}>

              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>);

}
