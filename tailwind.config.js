/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'header': '#07080B',
      'primary': '#14213D',
      'butprimary': '#FCA311',
      'background': '#E5E5E5',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',

    },
    extend: {},
  },
  plugins: [],
}
