/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all React files
  ],
  theme: {
    extend: {}, // Add custom styles here later
  },
  plugins: [], // Add Tailwind plugins here if needed
}