/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              'primary-blue': '#007bff',      // Bleu classique
              'electric-blue': '#00e7ff',    // Bleu électrique
              'black': '#000000',            // Noir
              'white': '#ffffff',            // Blanc
          },
      },
  },
  plugins: [],
};