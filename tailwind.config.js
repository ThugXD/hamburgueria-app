/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burger-red': '#EF4444',
        'burger-red-dark': '#DC2626',
        'burger-orange': '#F59E0B',
        'burger-orange-light': '#FCD34D',
        'burger-dark': '#1F2937',
      }
    },
  },
  plugins: [],
}