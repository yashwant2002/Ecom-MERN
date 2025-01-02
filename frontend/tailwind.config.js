/** @type {import('tailwindcss').Config} */ export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.jsx",
    "./components/**/*.jsx",
  ],
 theme: {
    extend: {
      keyframes: {
        underline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        underline: 'underline 300ms ease-out',
      },
    },
  },
  plugins: [],
};
