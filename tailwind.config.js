/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#198754',
          dark: '#157347',
        },
        secondary: {
          main: '#16496f',
        },
      },
      screens: {
        xs: '400px',
        msm: '500px',
        xmd: '740px',
        sxl: '1400px',
        mxl: '1515px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
