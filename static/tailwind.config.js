/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../*.html'],
  theme: {
    fontFamily:{
      'libre':['"Libre Franklin"', 'sans-serif']
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [],
}

