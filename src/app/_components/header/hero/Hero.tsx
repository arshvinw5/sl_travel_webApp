'use client';
import Image from 'next/image';
import styles from './styles.module.scss';
import gsap from 'gsap';

import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	const direction = useRef(-1);
	let xPercent = 0;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		requestAnimationFrame(animation);

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,
				scrub: 0.24,
				onUpdate: (e) => (direction.current = e.direction * -1),
			},
			x: '-300px',
		});
	}, []);

	const animation = () => {
		xPercent <= -100 ? (xPercent = 0) : null;
		xPercent > 0 ? (xPercent = -100) : null;

		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		xPercent += 0.03 * direction.current;
		requestAnimationFrame(animation);
	};

	return (
		<div className='relative w-full h-screen overflow-hidden'>
			<div>
				<Image
					src='/images/hero/Travel.jpg'
					alt='Hero_Image'
					fill={true}
					className='object-cover h-screen overflow-hidden'
				/>
				<div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
			</div>
			<div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
				<div className='md:left-[5%] max-w-[1000px] m-auto absolute p-5'>
					<h1 className='font-bold text-2xl md:text-4xl drop-shadow-2xl'>
						Welcome to the resplendent island of Sri Lanka.
					</h1>
					<p className='drop-shadow-2xl max-w-[900px] py-5 text-sm md:text-base'>
						Embark on a journey of discovery in Sri Lanka, an island paradise
						nestled in the azure waters of the Indian Ocean. From the sun-kissed
						beaches of the south, the majestic peaks of the central highlands,
						to the historical ruins of ancient kingdoms, every corner of this
						island nation has a story to tell. The aroma of Ceylon tea estates,
						the sight of elephants roaming freely in national parks, and the
						taste of unique local cuisine, all contribute to the diverse
						tapestry that is Sri Lanka. So, immerse yourself in the beauty and
						charm of Sri Lanka, a place where serendipity awaits at every turn.
					</p>
					<button> Tour Packages</button>
				</div>
			</div>
			<div className={styles.slideContainer}>
				<div ref={slider} className={styles.slide}>
					<p ref={firstText}>Enjoy your adventure with us.-</p>
					<p ref={secondText}>Enjoy your adventure with us.-</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
