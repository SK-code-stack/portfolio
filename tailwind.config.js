/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode

  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specifies files for Tailwind to scan
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          // Dark mode color
          'myblack': '#0A0A0A',
          // Light mode color
          'mylight': '#f5f5f5',
          'txt': '#F4F4F5',
          'lightgray': '#5A5658',
        },
      },
      fontFamily: {
        custom: ['Playfair Display', 'serif'],
        new: ['"Poppins"', 'sans-serif'],        // New font

      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}