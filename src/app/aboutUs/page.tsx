import React from 'react';
import Button from '../_components/header/navbar/button/Button';
import Image from 'next/image';

const page = () => {
	return (
		<div>
			<div className='relative w-full h-screen overflow-hidden'>
				<Image
					src='/images/hero/Nick.jpg'
					alt='Hero_Image'
					fill={true}
					className='relative object-cover h-screen overflow-hidden'
				/>
				<div className='bg-black/40 absolute top-0 left-0 w-full h-screen' />
			</div>
			<Button />
			<h1 className='absolute top-0 left-[5%] w-full h-full flex flex-col justify-center text-5xl text-white '>
				About Us.
			</h1>
			<div className='h-screen' />
		</div>
	);
};

export default page;
