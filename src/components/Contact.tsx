import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactProps {
  theme: 'light' | 'dark';
}
export function Contact({ theme }: ContactProps) {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };
  const inputClasses = `w-full bg-transparent border-b py-4 text-xl md:text-2xl focus:outline-none transition-colors duration-300 font-light ${theme === 'dark' ? 'border-white/20 focus:border-sensity-red placeholder-cream/20 text-cream' : 'border-black/20 focus:border-sensity-red placeholder-coffee/20 text-coffee'}`;
  const labelClasses = `block text-sm uppercase tracking-widest mb-2 font-bold ${theme === 'dark' ? 'text-cream' : 'text-coffee'}`;
  return (
    <section
      id="contact"
      className={`py-24 md:py-32 transition-colors duration-500 ${theme === 'dark' ? 'bg-near-black text-cream' : 'bg-cream text-coffee'}`}>

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
            {t('contact.title')}
          </h2>
          <p
            className={`text-xl font-light ${theme === 'dark' ? 'text-cream/60' : 'text-coffee/60'}`}>

            {t('contact.subtitle')}
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
                {t('contact.form.name')}
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
                placeholder={t('contact.form.namePlaceholder')}
                required />

            </div>
            <div className="group">
              <label htmlFor="email" className={labelClasses}>
                {t('contact.form.email')}
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
                placeholder={t('contact.form.emailPlaceholder')}
                required />

            </div>
          </div>

          <div className="group">
            <label htmlFor="message" className={labelClasses}>
              {t('contact.form.message')}
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
              placeholder={t('contact.form.messagePlaceholder')}
              required />

          </div>

          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className={`group flex items-center space-x-4 px-12 py-5 uppercase tracking-widest text-sm font-bold transition-all duration-300 ${theme === 'dark' ? 'bg-sensity-red text-white hover:bg-white hover:text-sensity-red' : 'bg-sensity-red text-white hover:bg-near-black hover:text-white'}`}>

              <span>{t('contact.form.send')}</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.form>

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
            duration: 0.8,
            delay: 0.4
          }}
          className="mt-20 pt-20 border-t border-opacity-20"
          style={{
            borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
          }}>

          <h3 className="text-2xl md:text-3xl font-serif font-black uppercase mb-8">
            {t('contact.directContact')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className={`text-sm uppercase tracking-widest mb-2 font-bold ${theme === 'dark' ? 'text-cream' : 'text-coffee'}`}>
                {t('contact.form.email')}
              </p>
              <a
                href="mailto:sensityespres80@gmail.com"
                className={`text-lg font-light transition-colors duration-300 ${theme === 'dark' ? 'text-cream hover:text-sensity-green' : 'text-coffee hover:text-sensity-red'
                  }`}>
                sensityespres80@gmail.com
              </a>
            </div>

            <div>
              <p className={`text-sm uppercase tracking-widest mb-2 font-bold ${theme === 'dark' ? 'text-cream' : 'text-coffee'}`}>
                {t('contact.phone')}
              </p>
              <div className="space-y-1">
                <a
                  href="tel:+355695420190"
                  className={`block text-lg font-light transition-colors duration-300 ${theme === 'dark' ? 'text-cream hover:text-sensity-green' : 'text-coffee hover:text-sensity-red'
                    }`}>
                  +355 69 542 0190
                </a>
                <a
                  href="tel:+355683629893"
                  className={`block text-lg font-light transition-colors duration-300 ${theme === 'dark' ? 'text-cream hover:text-sensity-green' : 'text-coffee hover:text-sensity-red'
                    }`}>
                  +355 68 362 9893
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}
