import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		// fontSize: {
		// 	'5xl': ['2rem', {
		// 		lineHeight: '2rem',
		// 		letterSpacing: '-0.01em',
		// 		fontWeight: '300', // Light weight for 5xl
		// 	}],
		// 	'7xl': ['3rem', {
		// 		lineHeight: '2.25rem',
		// 		letterSpacing: '-0.02em',
		// 		fontWeight: '400', // Light weight for 7xl
		// 	}],
		// },
		extend: {
			fontWeight: {
				semibold: '600', 
			},
			backgroundColor: {
				default: 'none', // Set default to transparent
			},
		},
	},
	plugins: [],
} satisfies Config;
