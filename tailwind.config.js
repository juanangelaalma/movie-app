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
    },
    fontFamily: {
      'sans': ['lato', 'system-ui', 'ui-sans-serif'],
    }
  },
  plugins: [],
}
