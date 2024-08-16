module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all paths are included
    './public/index.html',
  ],
  theme: {
    extend: {
      width: {
        // '54': '13.5rem', // Add custom width class
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
