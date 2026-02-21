import { Image, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface BeanImageToggleProps {
	beanImage: 'svg' | 'photo';
	onToggle: () => void;
}

export function BeanImageToggle({ beanImage, onToggle }: BeanImageToggleProps) {
	return (
		<button
			onClick={onToggle}
			className={`relative p-2 rounded-full transition-colors duration-300 ${beanImage === 'svg' ? 'bg-white/10 text-sensity-green hover:bg-white/20' : 'bg-white/10 text-sensity-red hover:bg-white/20'}`}
			aria-label="Toggle bean image">

			<div className="relative w-6 h-6">
				<motion.div
					initial={false}
					animate={{
						scale: beanImage === 'svg' ? 1 : 0,
						opacity: beanImage === 'svg' ? 1 : 0,
						rotate: beanImage === 'svg' ? 0 : 90
					}}
					transition={{
						duration: 0.2
					}}
					className="absolute inset-0 flex items-center justify-center">

					<Zap size={20} />
				</motion.div>
				<motion.div
					initial={false}
					animate={{
						scale: beanImage === 'photo' ? 1 : 0,
						opacity: beanImage === 'photo' ? 1 : 0,
						rotate: beanImage === 'photo' ? 0 : -90
					}}
					transition={{
						duration: 0.2
					}}
					className="absolute inset-0 flex items-center justify-center">

					<Image size={20} />
				</motion.div>
			</div>
		</button>);

}
