import styles from './styles.module.scss';
import Link from 'next/link';

import { T_navItem } from '@/app/_dto/navbar_link_dto';

const LinkItem = ({ data }: T_navItem) => {
  const { key, title, href, index } = data;

  return (
    <div className={styles.link}>
      <Link href={href}>
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default LinkItem;
