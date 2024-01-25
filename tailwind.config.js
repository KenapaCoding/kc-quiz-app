/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'charcoal': '#2D4356',
      'english-lavender': '#A78295',
      'white': '#fff',
      'copper': '#A76F6F',
      'pastelPink': '#EAB2A0'
    },
    extend: {
      fontFamily:{
        aclonica: ['Aclonica', 'sans-serif'],
        alfa: ['Alfa Slab One', 'sans-serif']
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}