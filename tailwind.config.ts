/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary':  '#f3b826',
        'secondary': '#191919',
        'third': '#bf0a33'
      },
    },
  },
  plugins: [],
};