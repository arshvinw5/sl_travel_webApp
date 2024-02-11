'use client';

import { Dispatch, SetStateAction } from 'react';

type T_data = { title: string; href: string; index: number; key: string };



type T_navItem = {
  data: T_data;
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: Dispatch<
    SetStateAction<{
      isActive: boolean;
      index: number;
    }>
  >;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
export type { T_navItem };
