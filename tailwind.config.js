module.exports = {
	mode: 'jit',
	content: ['./public/**/*.html', './pages/**/*.{js,jsx,ts,tsx,vue}', './components/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				heading: ['Montserrat', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#d1363a',
					light: '#da5e61',
				},
				accent: {
					DEFAULT: '#262637',
				},
				muted: {
					DEFAULT: '#f8f8fc',
				},
			},
			animation: {
				flash: 'flash .2s ease-in-out',
			},
			keyframes: {
				flash: {
					'0%': {
						background: '#222222',
					},
					'50%': {
						background: '#343434',
					},
					'100%': {
						background: '#2e2e2e',
					},
				},
			},
		},
	},
	plugins: [],
}
