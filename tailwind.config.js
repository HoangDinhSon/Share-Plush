/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'Arial', 'sans'],
      },
      boxShadow: {
        'main': '0px 0px 12px 0px rgba(0, 0, 0, 0.10)',
      }
    },
  },
  plugins: [],
}

