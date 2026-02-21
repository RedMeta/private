import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface LanguageSelectorProps {
	currentLanguage: string;
	onLanguageChange: (lang: string) => void;
	theme?: 'light' | 'dark';
}

const languages = [
	{ code: 'en', label: 'EN', full: 'English' },
	{ code: 'it', label: 'IT', full: 'Italiano' },
	{ code: 'sq', label: 'SQ', full: 'Shqip' }
];

export function LanguageSelector({ currentLanguage, onLanguageChange, theme = 'dark' }: LanguageSelectorProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const currentLang = languages.find(l => l.code === currentLanguage) || languages[0];

	return (
		<div className="relative" ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`relative p-2 rounded-full transition-colors duration-300 flex items-center gap-1 ${theme === 'dark'
						? 'bg-charcoal text-sensity-green hover:bg-white/10'
						: 'bg-white text-sensity-red hover:bg-black/5 shadow-sm'
					}`}
				aria-label="Select language">
				<Globe size={20} />
				<span className="text-xs font-bold uppercase">{currentLang.label}</span>
			</button>

			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.2 }}
					className={`absolute top-full right-0 mt-2 rounded-lg shadow-lg overflow-hidden z-50 ${theme === 'dark' ? 'bg-charcoal border border-white/10' : 'bg-white border border-black/10'
						}`}>
					{languages.map((lang) => (
						<button
							key={lang.code}
							onClick={() => {
								onLanguageChange(lang.code);
								setIsOpen(false);
							}}
							className={`block w-full text-left px-4 py-2 text-sm transition-colors ${lang.code === currentLanguage
									? theme === 'dark'
										? 'bg-sensity-green/20 text-sensity-green'
										: 'bg-sensity-red/20 text-sensity-red'
									: theme === 'dark'
										? 'text-warm-white hover:bg-white/5'
										: 'text-near-black hover:bg-black/5'
								}`}>
							<span className="font-bold">{lang.label}</span>
							<span className="ml-2 text-xs opacity-70">{lang.full}</span>
						</button>
					))}
				</motion.div>
			)}
		</div>
	);
}
