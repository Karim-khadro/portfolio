// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
      fontFamily: {
        sans: ['BR Firma', 'sans-serif'],
        'MyFont': ['"mono"', 'serif']
    },
      colors: {
        'background': '#0a192f',
        'main_green':'#64ffda',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}