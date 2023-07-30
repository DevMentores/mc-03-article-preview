/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
	theme: {
		extend: {
			colors: {
				"fem-blue-900": "#48556A", // hsl(217, 19%, 35%)
				"fem-blue-600": "#6D7F97", // hsl(214, 17%, 51%)
				"fem-blue-300": "#9EAFC2", // hsl(212, 23%, 69%)
				"fem-blue-100": "#ECF2F8", // hsl(210, 46%, 95%)
			},
			fontFamily: {
				manrope: ["Manrope", "sans-serif"],
			},
			fontWeight: {
				normal: 500,
				bold: 700,
			},
		},
	},
	plugins: [],
};
