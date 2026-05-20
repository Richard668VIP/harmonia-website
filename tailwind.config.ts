import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        label:   ["var(--font-cinzel)", "serif"],
        mono:    ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":   "linear-gradient(160deg, #162B20 0%, #0D1810 55%, #0A1810 100%)",
        "gold-gradient":   "linear-gradient(135deg, #C9A84C, #E0C06A)",
        "forest-gradient": "linear-gradient(135deg, #162B20, #0D1810)",
      },
      animation: {
        "fade-up":  "fadeUp 0.7s ease both",
        "float":    "float 8s ease-in-out infinite",
        "spin-slow":"spin 80s linear infinite",
        "glow":     "glow 6s ease-in-out infinite",
        "marquee":  "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        glow: {
          "0%, 100%": { opacity: ".3" },
          "50%":      { opacity: ".65" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
