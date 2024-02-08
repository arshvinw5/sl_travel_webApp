/* eslint-disable react-hooks/rules-of-hooks */
import styles from './styles.module.scss';

import { motion } from 'framer-motion';
import { socialMediaIcons } from './iconArr';
import { slideFooter } from '../../animation';
import { SocialMediaIcon } from '@/app/_dto/navbar_footer_dto';

const footer = () => {
  const getIcon = (icon: SocialMediaIcon[]) => {
    let iconElements: JSX.Element[] = [];
    icon.forEach(({ name, icon: Icon }, i) => {
      iconElements.push(
        <motion.div
          key={name}
          custom={i}
          variants={slideFooter}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <a>
            <Icon />
          </a>
        </motion.div>
      );
    });
    return iconElements;
  };
  return (
    <div>
      <motion.div className={styles.footer}>
        {getIcon(socialMediaIcons)}
      </motion.div>
    </div>
  );
};

export default footer;

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
