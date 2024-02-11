import React, { ReactElement, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MagneticProps {
	children: ReactElement;
}

export default function Magnetic({ children }: MagneticProps): ReactElement {
	const magnetic = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const xTo = gsap.quickTo(magnetic.current, 'x', {
			duration: 1,
			ease: 'elastic.out(1, 0.3)',
		});
		const yTo = gsap.quickTo(magnetic.current, 'y', {
			duration: 1,
			ease: 'elastic.out(1, 0.3)',
		});

		magnetic.current?.addEventListener('mousemove', (e: MouseEvent) => {
			const { clientX, clientY } = e;
			const { height, width, left, top } =
				magnetic.current?.getBoundingClientRect() as DOMRect;
			const x = clientX - (left + width / 2);
			const y = clientY - (top + height / 2);
			xTo(x * 0.35);
			yTo(y * 0.35);
		});
		magnetic.current?.addEventListener('mouseleave', (e: MouseEvent) => {
			xTo(0);
			yTo(0);
		});
	}, []);

	return React.cloneElement(children, { ref: magnetic });
}

// children: This is a special prop in React that allows components to be passed
//  as data to other components, essentially allowing for component
// nesting. In this case, children is the element that you’re cloning.
// { ref: magnetic }: This is an object containing the new props that you want to pass to the cloned
// element. Here, you’re passing a ref prop with a value of magnetic.
// ref: This is a special prop in React that’s used to access the properties of a component
// directly. It’s often used for reading values that are ‘owned’ by the DOM, such as the value of an input field.
//  In this case, magnetic is likely a reference instance created by React.createRef() or useRef()

// the reason we are using ? to ref is to identify it as null
// if you have something between opening and closing tag of your component that's count as children <button> click me -> children</button>
