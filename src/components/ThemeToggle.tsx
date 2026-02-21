import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}
export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`relative p-2 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-charcoal text-sensity-red hover:bg-white/10' : 'bg-white text-sensity-red hover:bg-black/5 shadow-sm'}`}
      aria-label="Toggle theme">

      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 90
          }}
          transition={{
            duration: 0.2
          }}
          className="absolute inset-0 flex items-center justify-center">

          <Moon size={20} />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -90
          }}
          transition={{
            duration: 0.2
          }}
          className="absolute inset-0 flex items-center justify-center">

          <Sun size={20} />
        </motion.div>
      </div>
    </button>);

}
