'use client';
import Button from './button/Button';

const Navbar = () => {
	return (
		<div className='relative w-full flex justify-between items-center z-50'>
			<h1 className='absolute text-white font-bold text-2xl z-20 cursor-pointer top-[25px] left-[25px]'>
				ArshvinW5.
			</h1>
			<div className='absolute top-[20px] right-[25px]'>
				<Button />
			</div>
		</div>
	);
};

export default Navbar;
