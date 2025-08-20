/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'dam-hero': "url('https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg')",
      },
    },
  },
  plugins: [],
};