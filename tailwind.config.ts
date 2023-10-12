import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const brandColor = colors.blue

const config: Config = {

	darkMode: 'class',

  content: [
        './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
			colors: {
				brand: colors.orange,
				black: colors.black,
				white: colors.white,
				gray: colors.gray,

			},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
