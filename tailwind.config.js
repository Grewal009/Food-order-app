/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '128': '32rem',
      }
   
    },
  },
  plugins: [],
}