/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ochre-light': '#fdf5e6',
        'ochre': '#cc7722',
        'pastel-charcoal': '#5a646e',
        'pastel-brown': '#8d7b6d',
        'pastel-sage': '#9caf88',
        'pastel-rose': '#c9ada7',
        'pastel-blue': '#98c1d9',
      },
      fontFamily: {
        handwriting: ['"Dancing Script"', 'cursive'],
      }
    },
  },
  plugins: [],
}
