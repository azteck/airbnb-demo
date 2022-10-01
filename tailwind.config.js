/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],

  /* corePlugins: {
    preflight: false // <== disable this if Antd Modal has issues
  }, */
};
