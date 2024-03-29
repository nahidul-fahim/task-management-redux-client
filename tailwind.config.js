/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#5720bd',
      second: '#482b7c',
      lightPrimary: '#dbc7ff',
      customRed: '#ff4343',
      body: '#363636',
      white: '#fff',
      black: '#000',
      lightGray: '#d1d1d1',
    },
    extend: {
    },
  },
  plugins: [],
}