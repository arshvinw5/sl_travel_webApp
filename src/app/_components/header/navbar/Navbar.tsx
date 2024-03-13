'use client';
import Link from 'next/link';
import Button from './button/Button';
import { navArr } from './navArr';
import { FaSearch } from 'react-icons/fa';
import Magnetic from '../../magnetic/Magnetic';

const Navbar = () => {
	return (
		<div className='relative w-full flex justify-evenly items-center z-50'>
			<div>
				<h1 className='absolute text-white font-bold text-2xl z-20 cursor-pointer top-[25px] left-[25px]'>
					ArshvinW5.
				</h1>
			</div>
			<div className='hidden md:absolute md:flex text-white top-[16px]'>
				<ul>
					<li className='flex'>
						{navArr.map(({ key, title, href }, index) => {
							return (
								<Link key={index} href={href} className='p-3'>
									<Magnetic>
										<div>{title}</div>
									</Magnetic>
								</Link>
							);
						})}
					</li>
				</ul>
			</div>
			<div className='hidden md:absolute md:flex text-white top-[26px] right-[25px] cursor-pointer'>
				<Magnetic>
					<div>
						<FaSearch />
					</div>
				</Magnetic>
			</div>
			<div>
				<Button />
			</div>
		</div>
	);
};

export default Navbar;
