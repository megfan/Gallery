/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
         colors: {
        'primary': '#f60797',
        'white': '#ffff',
        'darkPrimary': '#2a2a2e',
        'darkSec': '#2C2D32',
        'lightGray': '#d7d7d747',
        'darkThird': '#171717cb',
        'darkVery': '#0e0e0e',
      },
    },
  },
  plugins: [],
}