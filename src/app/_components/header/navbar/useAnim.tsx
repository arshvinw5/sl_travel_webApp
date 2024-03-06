'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const useAnim = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const [selectedLink, setSelectedLink] = useState({
		isActive: false,
		index: -1,
		type: '',
	});

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
