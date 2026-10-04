/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#0A192F',
          card: '#112240',
          light: '#233554',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E071',
          accent: '#E6C200',
        }
      }
    },
  },
  plugins: [],
}