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
        lightbell: {
          light: "#8F8CFB",
          DEFAULT: "#9DB4FF",
          dark: "#918FFB",
        },
        graybell: {
          light: "#33315C",
          DEFAULT: "#2F2F44",
        }
      },
      height: {
        '75': '19rem',
      },
      width: {
        '1/1': '100%',
        '1/7': '14%',
        '2/7': '27%',
        '3/7': '42%',
        '4/7': '57%',
        '5/7': '71%',
        '6/7': '85%',
        '7/8': '95%',
        '3/8': '35%',
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
        '1/7': '14%',
        '2/7': '27%',
        '3/7': '42%',
        '4/7': '57%',
        '5/7': '71%',
        '6/7': '85%',
        '7/8': '95%',
        '3/8': '35%',
        '46': '11.5rem'
      },
      translate: {
        '1/7': '14%',
        '2/7': '28%',
        '3/7': '42%',
        '4/7': '57%',
        '5/7': '71%',
        '6/7': '85%',
        '7/8': '95%',
        '3/8': '35%',
        '46': '11.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}