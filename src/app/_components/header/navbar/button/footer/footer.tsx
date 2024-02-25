import styles from './styles.module.scss';

import { motion } from 'framer-motion';
import { socialMediaIcons } from './iconArr';
import { slideFooter, blur } from '../../animation';
import { T_Footer } from '@/app/_dto/navbar_footer_dto';
import Magnetic from '@/app/_components/magnetic/Magnetic';

const Footer = ({ selectedLink, setSelectedLink }: T_Footer) => {
	const iconElements = socialMediaIcons.map(
		({ href, icon: Icon, name }, index) => {
			return (
				<motion.div
					key={`icon_${index}`}
					custom={index}
					variants={slideFooter}
					initial='initial'
					animate='enter'
					exit='exit'
					onMouseOver={() => {
						setSelectedLink({ isActive: true, index, type: 'icon' });
					}}
					onMouseLeave={() => {
						setSelectedLink({ isActive: false, index: -1, type: '' });
					}}
				>
					<a href={href}>
						<motion.div
							className={styles.footer}
							variants={blur}
							initial='initial'
							animate={
								selectedLink.isActive &&
								!(selectedLink.type === 'icon' && selectedLink.index === index)
									? 'open'
									: 'close'
							}
						>
							<Icon />
						</motion.div>
					</a>
				</motion.div>
			);
		}
	);
	return <div className={styles.footer}>{iconElements}</div>;
};

export default Footer;

// In this code, { name, icon: Icon } is
// destructuring the icon object. It means “get the
//  name property and get the icon property but rename
//  it to Icon”. The reason for renaming icon to Icon is that
//  in JSX (the syntax used by React), component names must start
//  with a capital letter. If you tried to do <icon />, it would be
//   interpreted as a regular HTML tag, not a React component. By
//   renaming icon to Icon, you ensure that it’s treated as a React
//    component. This way, each
// icon in your socialMediaIcons array will be correctly rendered.

//this reason we need type to identify the index of the array since
//there is two difference arrays overlap with state mentioned index

// let cities = objects.map(({ address: { city } }) => city);
