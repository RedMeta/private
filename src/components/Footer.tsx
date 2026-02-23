import { Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  theme: 'light' | 'dark';
}
export function Footer({ theme }: FooterProps) {
  const { t } = useTranslation();
  return (
    <footer
      className={`py-12 border-t transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-cream/40 border-white/5' : 'bg-cream text-coffee/60 border-black/5'}`}>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt={t('brand.logoAlt')}
            className="h-8 w-8 rounded-full opacity-80" />

          <div className={`text-2xl font-serif font-black tracking-tight uppercase ${theme === 'dark' ? 'text-cream' : 'text-coffee'}`}>
            {t('brand.name')}
          </div>
        </div>

        <div className="text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} {t('brand.fullName')}. {t('footer.rights')}
        </div>

        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/sensityespressolovers/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sensity-red transition-colors duration-300">

            <Instagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/sensityespresso"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sensity-red transition-colors duration-300">

            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>);

}
