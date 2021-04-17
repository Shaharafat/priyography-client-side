module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
