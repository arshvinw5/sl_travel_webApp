'use client';
import { useEffect, useRef, useState } from 'react';
// import { usePathname } from 'next/navigation';

const useAnim = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const [selectedLink, setSelectedLink] = useState({
		isActive: false,
		index: 0,
	});

	// const pathName = usePathname();

	// useEffect(() => {
	//   setIsActive(false);
	// }, [pathName]);

	const button = {
		menu: {
			x: isActive ? '100%' : '0',
			transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
		},
		close: {
			y: isActive ? '-100%' : '0',
			transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
		},
	};

	return {
		isActive,
		setIsActive,
		button,
		selectedLink,
		setSelectedLink,
	};
};

export default useAnim;
