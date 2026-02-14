import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}
export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  const navLinks = [
  {
    name: 'Philosophy',
    id: 'philosophy'
  },
  {
    name: 'Menu',
    id: 'menu'
  },
  {
    name: 'Location',
    id: 'location'
  },
  {
    name: 'Contact',
    id: 'contact'
  }];

  // Dynamic styles based on theme and scroll state
  const getNavBackground = () => {
    if (!isScrolled) return 'bg-transparent';
    return theme === 'dark' ?
    'bg-near-black/90 backdrop-blur-md border-b border-white/5' :
    'bg-cream/90 backdrop-blur-md border-b border-black/5';
  };
  const getTextColor = () => {
    if (isScrolled) {
      return theme === 'dark' ? 'text-warm-white' : 'text-near-black';
    }
    // Transparent header text colors
    return theme === 'dark' ? 'text-warm-white' : 'text-near-black';
  };
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${getNavBackground()} ${getTextColor()}`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <button
          onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
          }
          className="flex items-center gap-3 z-50 relative group">

          <img
            src="/logo.jpg"
            alt="Sensity Logo"
            className="h-10 w-10 rounded-full object-cover border-2 border-sensity-red group-hover:border-sensity-green transition-colors duration-300" />

          <span className="text-xl md:text-2xl font-serif font-bold tracking-tight uppercase">
            Sensity
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) =>
          <button
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            className={`text-sm font-medium uppercase tracking-widest hover:text-sensity-red transition-colors duration-300 relative group ${theme === 'dark' ? 'text-warm-white' : 'text-near-black'}`}>

              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-sensity-red transition-all duration-300 group-hover:w-full" />
            </button>
          )}

          <div className="pl-4 border-l border-current opacity-50 h-6" />

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative">

            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          className={`fixed inset-0 flex flex-col justify-center items-center md:hidden ${theme === 'dark' ? 'bg-near-black text-warm-white' : 'bg-cream text-near-black'} ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{
            duration: 0.4
          }}>

          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) =>
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-4xl font-serif font-bold uppercase tracking-tight hover:text-sensity-red transition-colors">

                {link.name}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.nav>);

}