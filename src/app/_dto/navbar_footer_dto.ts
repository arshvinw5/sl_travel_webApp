'use client';
import { IconType } from 'react-icons';
import { Dispatch, SetStateAction } from 'react';

export type SocialMediaIcon = {
	name: string;
	icon: IconType;
	href: string;
};

export type T_Footer = {
	selectedLink: { isActive: boolean; index: number; type: string };
	setSelectedLink: Dispatch<
		SetStateAction<{
			isActive: boolean;
			index: number;
			type: string;
		}>
	>;
};
