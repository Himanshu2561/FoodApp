/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '480px' },
      md: { max: '768px' },
      lg: { max: '1024px' },
      xl: { max: '1440px' },
    },
    extend: {
      colors: {
        'theme-blue': '#0E2368',
        'theme-red': '#E23744',
        'theme-text': '#444957',
      },
    },
  },
  plugins: [],
}
