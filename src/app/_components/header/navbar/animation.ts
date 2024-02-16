export const menuSlide = {
	initial: {
		x: '100%',
	},
	enter: {
		x: '0',
		transition: { duration: 1.5, ease: [0.83, 0, 0.17, 1] },
	},
	exit: {
		x: '100%',
		transition: { duration: 1.5, ease: [0.83, 0, 0.17, 1] },
	},
};

export const slide = {
	initial: {
		x: '80px',
		opacity: 0,
	},
	enter: (i: number[]) => ({
		x: '0',
		opacity: 1,

		transition: { duration: 1.5, ease: [0.83, 0, 0.17, 1], delay: i[0] },
	}),
	exit: (i: number[]) => ({
		x: '80px',
		opacity: 0,
		transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: i[0] },
	}),
};

export const blur = {
	initial: {
		filter: 'blur(0px)',
		opacity: '1',
	},
	open: {
		filter: 'blur(5px)',
		opacity: '0.6',
		transition: { duration: 0.3 },
	},
	close: {
		filter: 'blur(0px)',
		opacity: '1',
		transition: { duration: 0.3 },
	},
};

export const slideFooter = {
	initial: {
		x: '80px',
		opacity: 0,
	},
	enter: (i: number) => ({
		x: '0',
		opacity: 1,

		transition: { duration: 1.5, ease: [0.83, 0, 0.17, 1], delay: i * 0.3 },
	}),
	exit: (i: number) => ({
		x: '80px',
		opacity: 0,
		transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: i * 0.3 },
	}),
};
