/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: colors.blue,
        black: '#000',
        white: '#fff',
        gray: {
          100: '#f7fafc',
          // ...
          900: '#1a202c',
        },
      },
    },
    plugins: [flowbite],
  }
}

