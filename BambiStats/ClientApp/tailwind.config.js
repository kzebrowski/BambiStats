/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px'
    },
    colors: {
      'pink': '#FCC5C0',
      'brown': '#A64B2A',
      'lightgrey': '#D8D8D8'
    },
    extend: {}
  },
  plugins: [],
}
