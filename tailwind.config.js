const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'white': '#FCFCFC',
      'black': '#000',
      'gray': '#252C37',
      'light-gray': '#FCFCFC',
      'dark': '#1D202D',
      'hover': '#EAEDF5',
      'def': '#2D3134',
      'menu': '#848888',
      'blue': '#4491BF',
      'background': '#F5F4F3',
      'red': '#EE636D',
      'dark-blue': '#3B6A76',
      'dark-red': '#A24046',
      'green': '#1BA753',
      'light-green': '#24BC62',
      'log': '#ADB2B2',
    },
    extend: {
      fontFamily: {
        sans: ['SF', ...defaultTheme.fontFamily.sans],
        pop: ['Poppins'],
      },
    },
  },
};
