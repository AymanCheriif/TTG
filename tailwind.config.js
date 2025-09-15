/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ["Aeonik", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "gradient-purple": "linear-gradient(135deg, #4f00aa 0%, #200044 100%)",
      },
      colors: {
        "ttg-purple": "#4f00aa",
        "ttg-dark-purple": "#200044",
      },
    },
  },
  plugins: [],
};
