/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // UW-Madison red, our single brand accent
        badger: {
          DEFAULT: "#c5050c",
          bright: "#e00122",
          dark: "#9b0000",
          50: "#fef2f2",
        },
        // Mars-toned neutrals for the dark canvas
        rust: {
          900: "#0a0605",
          800: "#140b08",
          700: "#1f100b",
          600: "#2c1810",
        },
        ink: {
          950: "#0b0c0f",
          900: "#111318",
          800: "#181b22",
          700: "#20242d",
          600: "#2c313c",
        },
        chalk: {
          DEFAULT: "#eceae7",
          soft: "#b9bcc4",
          dim: "#7f858f",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "80rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee var(--marquee-duration,40s) linear infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
