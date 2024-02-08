import styles from './styles.module.scss';
import Link from '../link/LinkItem';
import useAnim from '../../useAnim';
import Footer from '../footer/footer';

import { navArr } from '../../navArr';
import { motion } from 'framer-motion';
import { menuSlide } from '../../animation';

const NavItem = () => {
  const { selectedLink, setSelectedLink, menuRef, setIsActive } = useAnim();

  return (
    <motion.div
      ref={menuRef}
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
                setIsActive={setIsActive}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default NavItem;

// In this code, I’ve added a check for spaces in the forEach loop.
// If the character is a space, it renders a non-breaking space ('\u00A0').
// This will preserve the spaces
// between words while still allowing the characters to animate one by one.

// In your case, the condition is char === ' ', which checks
// if the current character is a space. If the condition is true
// (i.e., the character is a space), it assigns '\u00A0' to the content
// variable. If the condition is false (i.e., the character is not a space),
// it assigns char to the content variable.
