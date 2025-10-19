/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      // Custom animations
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'gradient-border': 'gradient-border 5s ease infinite',
      },
      keyframes: {
        // Horizontal gradient animation
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        // Gradient border animation
        'gradient-border': {
          '0%, 100%': { 'border-image-source': 'linear-gradient(45deg, #3b82f6, #06b6d4)' },
          '50%': { 'border-image-source': 'linear-gradient(45deg, #06b6d4, #3b82f6)' },
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
    },
  },
  plugins: [],
};
