
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./homepage/**/*.{html,js}"],
  theme: {
    fontFamily:{
      // notosans: ["Noto Sans", "sans-serif"],
      blackhans: ['Black Han Sans', "sans-serif"],
      inter:['Inter','sans-serif'],
      cabin:['Cabin','sans-serif']
    },

    container: {
      
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors:{
        primary:"#404eed",
        black:"#23272a"

      },
    },
  },
  plugins: [],
}