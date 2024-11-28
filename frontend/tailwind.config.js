/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              'primary-blue': '#212E53',      // Bleu classique
              'electric-blue': '#0a363b',    // Bleu électrique
              'black': '#000000',            // Noir
              'white': '#ffffff',            // Blanc
              'red' : '#ff0000',             // rouge         
          },
      },
  },
  plugins: [],
};