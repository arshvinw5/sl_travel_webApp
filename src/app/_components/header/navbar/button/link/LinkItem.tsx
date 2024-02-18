import styles from './styles.module.scss';
import Link from 'next/link';

import { T_navItem } from '@/app/_dto/navbar_link_dto';
import { motion } from 'framer-motion';
import { slide, blur } from '../../animation';

const LinkItem = ({
	data,
	selectedLink,
	setSelectedLink,
	setIsActive,
}: T_navItem) => {
	const { key, title, href, index } = data;

	const getChars = (title: string) => {
		return title.split('').map((char, i) => {
			let content = char === ' ' ? '\u00A0' : char;
			return (
				<motion.span
					key={`c_${i}`}
					custom={[i * 0.05, (title.length - i) * 0.03]}
					variants={slide}
					initial='initial'
					animate='enter'
					exit='exit'
				>
					{content}
				</motion.span>
			);
		});
	};

	return (
		<motion.div className={styles.link}>
			<Link
				href={href}
				onMouseOver={() => {
					setSelectedLink({ isActive: true, index });
				}}
				onMouseLeave={() => {
					setSelectedLink({ isActive: false, index });
				}}
				onClick={(e) => {
					e.stopPropagation();
					setIsActive(false);
				}}
			>
				<motion.p
					variants={blur}
					initial='initial'
					animate={
						selectedLink.isActive && selectedLink.index !== index
							? 'open'
							: 'close'
					}
				>
					{getChars(title)}
				</motion.p>
			</Link>
		</motion.div>
	);
};

export default LinkItem;
