import React, { ReactElement, useEffect, useRef } from 'react';
import useAnim from '../../../useAnim';

interface ClickOutSideProps {
	children: ReactElement;
}

const clickOutsideCustomEvent = new CustomEvent('_click_outside_', {
	detail: { state: false },
});

const ClickOutSide = ({ children }: ClickOutSideProps): ReactElement => {
	const { setIsActive } = useAnim();

	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutSide = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				// we are target the elements in menuRef only  -> e,target
				setIsActive(false);
				document.dispatchEvent(clickOutsideCustomEvent);
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
