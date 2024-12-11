/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.{html,ts}",
    "./libs/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px', // Matches TypeScript logic
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}

