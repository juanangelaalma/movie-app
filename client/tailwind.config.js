const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'black': '#09080A',
      'gray-red': '#5E565A',
      'orange': '#F36F45',
      'orange-hover': '#F45827',
      'gold': '#FFD700',
    },
    fontFamily: {
      'sans': ['lato', 'system-ui', 'ui-sans-serif'],
    },
    fontSize: {
      'xxs': '.6rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}
