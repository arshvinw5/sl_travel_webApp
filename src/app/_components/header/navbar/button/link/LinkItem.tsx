import styles from './styles.module.scss';
import Link from 'next/link';

import { T_navItem } from '@/app/_dto/navbar_link_dto';
import { motion } from 'framer-motion';

const LinkItem = ({ data }: T_navItem) => {
  const { key, title, href, index } = data;

  const getChars = (title: string) => {
    let chars: React.ReactNode[] = [];
    title.split('').forEach((char, i) => {
      const content = char === ' ' ? '\u00A0' : char;
      chars.push(<span key={`c_${i}`}>{content}</span>);
    });
    return chars;
  };

  return (
    <div className={styles.link}>
      <Link href={href}>
        <p>{getChars(title)}</p>
      </Link>
    </div>
  );
};

export default LinkItem;
