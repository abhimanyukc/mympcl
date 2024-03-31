/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        customGreen: '#00662e',
        customBlue: '#2b2f96',
        customHover: '#d0d534',
      },
    },
  },
 
     
    
  variants: {
    extend: {
      textColor: ['hover'], // Enable hover variant for textColor
    },
  },
  plugins: [],
}