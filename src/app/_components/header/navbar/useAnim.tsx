'use client';
import { useEffect, useRef, useState } from 'react';
// import { usePathname } from 'next/navigation';

const useAnim = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  // const pathName = usePathname();

  // useEffect(() => {
  //   setIsActive(false);
  // }, [pathName]);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsActive(false);
        console.log(`Click out side : ${isActive}`);
      }
    };
    document.addEventListener('click', handleClickOutSide);

    return () => {
      document.removeEventListener('click', handleClickOutSide);
    };
  }, [setIsActive, isActive]);

  const button = {
    menu: {
      x: isActive ? '100%' : '0',
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
    },
    close: {
      y: isActive ? '-100%' : '0',
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
    },
  };

  return {
    isActive,
    setIsActive,
    button,
    selectedLink,
    setSelectedLink,
    menuRef,
  };
};

export default useAnim;
