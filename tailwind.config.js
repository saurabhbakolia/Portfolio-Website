/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode toggle via class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio_color: '#16B0B2', // Teal accent color for your portfolio
        // Background colors
        backgroundLight: '#f9fafb', // Light background for light mode
        backgroundDark: '#1a202c', // Dark background for dark mode
        // Text colors
        textLight: '#2d3748', // Dark text for light mode
        textDark: '#f7fafc', // Light text for dark mode
        // Additional colors for buttons and hover effects
        buttonHoverLight: '#0e7c7d', // Hover color for light mode
        buttonHoverDark: '#149598',  // Hover color for dark mode
      },
      fontFamily: {
        code: ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
}
