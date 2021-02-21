module.exports = {
  purge: [`./src/**/*.{js,jsx,ts,tsx}`],
  darkMode: `media`, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require(`@tailwindcss/typography`)],
};
