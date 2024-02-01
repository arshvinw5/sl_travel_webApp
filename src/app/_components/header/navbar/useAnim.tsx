'use client';
import { useState } from 'react';

const useAnim = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

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

  return { isActive, setIsActive, button };
};

export default useAnim;
