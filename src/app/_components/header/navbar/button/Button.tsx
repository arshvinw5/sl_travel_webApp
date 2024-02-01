'use client';
import styles from './styles.module.scss';
import useAnim from '../useAnim';

import { motion } from 'framer-motion';
import { perspectiveTextProps } from '@/app/_dto/navbar_button_dto';

const Button = () => {
  const { isActive, setIsActive, button } = useAnim();

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={styles.button}
    >
      <div className={styles.slider}>
        <motion.div variants={button} animate='menu' className={styles.el}>
          <PerspectiveText label='Menu' />
        </motion.div>
        <motion.div variants={button} animate='close' className={styles.el}>
          <PerspectiveText label='Close' />
        </motion.div>
      </div>
    </div>
  );
};

export default Button;

function PerspectiveText({ label }: perspectiveTextProps) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}