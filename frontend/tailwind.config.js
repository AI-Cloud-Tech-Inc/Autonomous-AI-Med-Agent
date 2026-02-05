/**
 * tailwind.config.js
 * Tailwind CSS configuration for dark enterprise SaaS dashboard
 */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#181A1B', // near-black
        },
        surface: {
          DEFAULT: '#23272B', // card background
        },
        border: {
          DEFAULT: '#2D333B', // neutral border
        },
        accent: {
          DEFAULT: '#388BFF', // blue accent
        },
        text: {
          DEFAULT: '#F3F4F6', // high-contrast text
          secondary: '#AEB3B8', // muted text
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
