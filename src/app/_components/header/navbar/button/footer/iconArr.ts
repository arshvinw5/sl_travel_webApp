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
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
  },
  {
    name: 'Facebook',
    icon: FaFacebookF,
  },
  {
    name: 'Instagram',
    icon: SiInstagram,
  },
  {
    name: 'Twitter',
    icon: BsTwitterX,
  },
];
