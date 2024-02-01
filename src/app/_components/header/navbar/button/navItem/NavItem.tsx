import styles from './styles.module.scss';
import Link from '../link/LinkItem';

import { navArr } from '../../navArr';

const NavItem = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navArr.map((item, index) => {
            return <Link key={`L_${index}`} data={{ ...item, index }} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NavItem;
