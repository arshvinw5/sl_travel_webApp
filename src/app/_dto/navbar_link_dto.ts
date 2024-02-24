'use client';

import { Dispatch, SetStateAction } from 'react';

type T_data = { title: string; href: string; index: number; key: string };

type T_navItem = {
	data: T_data;
	selectedLink: { isActive: boolean; index: number; type: string };
	setSelectedLink: Dispatch<
		SetStateAction<{
			isActive: boolean;
			index: number;
			type: string;
		}>
	>;
};
export type { T_navItem };
