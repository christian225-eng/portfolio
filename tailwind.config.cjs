/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: "#FF6347", // couleur personnalisée
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "oklch(55% 0.3 240)",
          secondary: "oklch(70% 0.25 200)",
          accent: "oklch(65% 0.25 160)",
          neutral: "oklch(50% 0.05 240)",
          "base-100": "oklch(98% 0.02 240)",
        },
      },
    ],
    darkTheme: "mytheme",
  },
};
