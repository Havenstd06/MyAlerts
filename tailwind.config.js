const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    'public/index.html',
    'src/**/*.js',
    'src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Filson Soft', 'Inter', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bluebell: {
          light: '#2A2B6E',
          DEFAULT: '#15152D',
          dark: '#15152D',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}