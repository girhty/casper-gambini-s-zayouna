/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        roast: '#16120f',
        ink: '#241c17',
        cream: '#f4efe7',
        oat: '#e8ded0',
        copper: '#bd8654',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Arial Black', 'sans-serif'],
        body: ['"DM Sans"', 'Arial', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
};