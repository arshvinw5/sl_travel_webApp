import React, { ReactElement, useEffect, useRef } from 'react';
import useAnim from '../../../useAnim';

interface ClickOutSideProps {
	children: ReactElement;
}

const ClickOutSide = ({ children }: ClickOutSideProps): ReactElement => {
	const { isActive, setIsActive } = useAnim();

	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutSide = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setIsActive(false);
				console.log(`Clicked Out Side.`);
			}
		};

		document.addEventListener('click', handleClickOutSide);

		return () => {
			document.removeEventListener('click', handleClickOutSide);
		};
	}, [setIsActive]);

	return React.cloneElement(children, { ref: menuRef });
};

export default ClickOutSide;
