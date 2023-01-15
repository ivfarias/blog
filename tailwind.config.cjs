/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		backgroundImage: {
			'noise': "url('./img/sm-noise.png')",
			'sm-squared-blk-1': "url('./img/sm-squared-blk-1.svg')",
			'noise-grad-byr-1': "url('./img/noise-grad-byr-1.svg')"
		},
		colors: {
			'riso-black-1': '#31312B',
			'riso-black-2': '#5A5A55',
			'riso-black-3': '#838380',
			'riso-black-4': '#ADADAA',
			'riso-blue-1': '#3765AB',
			'riso-blue-2': '#5F84BC',
			'riso-blue-3': '#87A3CD',
			'riso-blue-4': '#AFC1DD',
			'riso-pink-1': '#FE67BC',
			'riso-pink-2': '#FE85C9',
			'riso-pink-3': '#FEA4D7',
			'riso-pink-4': '#FFC2E4',
			'riso-yellow-1': '#F8ED3B',
			'riso-yellow-2': '#F9F162',
			'riso-yellow-3': '#FBF489',
			'riso-yellow-4': '#FCF8B1',
			'riso-red-1': '#F25050',
			'riso-red-2': '#F57373',
			'riso-red-3': '#F79696',
			'riso-red-4': '#FAB9B9',
			'kinda-white': '#F3EDDE'
		},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  },
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography', '@tailwindcss/forms'),
],
}
