/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      customBackground: '#2b2b2b',
      customForeground: '#c4c4c4',
      primary: '#7124ff',
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