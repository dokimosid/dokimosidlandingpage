import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pine:   '#15564A',
        paper:  '#F4F1EA',
        ink:    '#1A1813',
        accent: '#4A90D9',
        'pine-light': '#1d7363',
        'pine-dim':   '#0e3d34',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body:    ['var(--font-hanken)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
