'use client';
import styles from './styles.module.scss';
import useAnim from '../useAnim';
import NavItem from './navItem/NavItem';
import Magnetic from '@/app/_components/magnetic/Magnetic';

import { motion } from 'framer-motion';
import { perspectiveTextProps } from '@/app/_dto/navbar_button_dto';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const Button = () => {
	const { isActive, setIsActive, button } = useAnim();

	useEffect(() => {
		const listener = (event: any) => {
			const { state } = event.detail;
			setIsActive(state);
		};

		document.addEventListener('_click_outside_', listener);

		return () => {
			document.removeEventListener('_click_outside_', listener);
		};

		// we use this event listener to catch the _click_outside which is dispatch from CustomEvent
	}, [setIsActive]);

	return (
		<>
			<Magnetic>
				<div
					onClick={() => {
						setIsActive(!isActive);
					}}
					className={styles.button}
				>
					<div className={styles.slider}>
						<motion.div variants={button} animate='menu' className={styles.el}>
							<PerspectiveText label='Menu' />
						</motion.div>
						<motion.div variants={button} animate='close' className={styles.el}>
							<PerspectiveText label='Close' />
						</motion.div>
					</div>
				</div>
			</Magnetic>
			<AnimatePresence mode='wait'>{isActive && <NavItem />}</AnimatePresence>
		</>
	);
};

export default Button;

function PerspectiveText({ label }: perspectiveTextProps) {
	return (
		<div className={styles.perspectiveText}>
			<p>{label}</p>
			<p>{label}</p>
		</div>
	);
}
//the reason why I have useEffect to change the state instead of it in navItem
//because we always have to use useState in parent component not the child component
