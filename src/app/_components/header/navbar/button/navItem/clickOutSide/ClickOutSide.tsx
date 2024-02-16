import React, { ReactElement, useEffect, useRef } from 'react';

interface ClickOutSideProps {
	children: ReactElement;
}

const ClickOutSide = ({ children }: ClickOutSideProps): ReactElement => {
	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutSide = (e: MouseEvent) => {
			const clickOutsideCustomEvent = new CustomEvent('_click_outside_', {
				detail: { state: false },
			});

			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				// we are target the elements in menuRef only  -> e,target
				document.dispatchEvent(clickOutsideCustomEvent);
			}
		};

		document.addEventListener('click', handleClickOutSide);

		return () => {
			document.removeEventListener('click', handleClickOutSide);
		};
	}, []);

	return React.cloneElement(children, { ref: menuRef });
};

export default ClickOutSide;
