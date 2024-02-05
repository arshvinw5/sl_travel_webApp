import styles from './styles.module.scss';
import Link from '../link/LinkItem';
import useAnim from '../../useAnim';

import { navArr } from '../../navArr';
import { motion } from 'framer-motion';
import { menuSlide } from '../../animation';

const NavItem = () => {
  const { selectedLink, setSelectedLink } = useAnim();
  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <motion.div
            variants={menuSlide}
            initial='initial'
            animate='enter'
            exit='exit'
            className={styles.header}
          >
            <span>Navigation</span>
          </motion.div>
          {navArr.map((item, index) => {
            return (
              <Link
                key={`L_${index}`}
                data={{ ...item, index }}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default NavItem;
