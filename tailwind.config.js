/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep:      "#0D1810",
        forest:    "#162B20",
        jade:      { DEFAULT: "#2D6A4F", light: "#3D8A65" },
        sage:      { DEFAULT: "#74A98B", pale: "#C8DDD2" },
        gold:      { DEFAULT: "#C9A84C", light: "#E0C06A", pale: "#F0DFA0" },
        parchment: "#F4EFE4",
        cream:     "#FAF7F2",
        ink:       "#181E16",
        brown:     "#3C2D18",
        muted:     "#6A7A6D",
        dim:       "#9BAD9E",
        border:    "#D5E2D8",
      },
    },
  },
  plugins: [],
};

module.exports = config;
