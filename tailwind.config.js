/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    // Angular Material owns the base reset; avoid Tailwind Preflight fighting it.
    preflight: false,
  },
  plugins: [],
};
