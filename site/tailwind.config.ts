import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme');



const config: Config = {

	darkMode: 'class',

  content: [
        './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
			colors: {
				'brand': 'var(--brand)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
			},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
