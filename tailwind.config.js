/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rgb-34-34-34': 'rgb(34, 34, 34)',
        'rgb-82-82-82': 'rgb(82, 82, 82)',
      },
    },
  },
  plugins: [],
}

