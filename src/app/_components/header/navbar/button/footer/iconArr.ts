import { FaGoogle } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SocialMediaIcon } from '@/app/_dto/navbar_footer_dto';

export const socialMediaIcons: SocialMediaIcon[] = [
	{
		name: 'Google',
		icon: FaGoogle,
		href: 'https://www.google.com/',
	},
	{
		name: 'LinkedIn',
		icon: FaLinkedinIn,
		href: 'https://lk.linkedin.com/',
	},
	{
		name: 'Facebook',
		icon: FaFacebookF,
		href: 'https://www.facebook.com/',
	},
	{
		name: 'Instagram',
		icon: SiInstagram,
		href: 'https://www.instagram.com/',
	},
	{
		name: 'Twitter',
		icon: BsTwitterX,
		href: 'https://twitter.com/?lang=en',
	},
];
