import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111111",
          soft: "#1E1E1E",
          muted: "#4A4A4A",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F7F5",
          sunk: "#EFEFEC",
        },
        border: {
          DEFAULT: "#E5E5E1",
          strong: "#D4D4D0",
        },
        brand: {
          green: "#138A36",
          "green-dark": "#0E6B29",
          "green-soft": "#E8F3EC",
          cyan: "#0EA5B7",
          navy: "#13366A",
          red: "#C8321D",
          lime: "#8CC63F",
        },
        text: {
          DEFAULT: "#1A1A1A",
          muted: "#5A5A58",
          subtle: "#8A8A86",
        },
      },
      fontFamily: {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.1rem" }],
        sm: ["0.875rem", { lineHeight: "1.35rem" }],
        base: ["1rem", { lineHeight: "1.65rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.8rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "3.25rem" }],
        "6xl": ["3.75rem", { lineHeight: "4rem" }],
      },
      maxWidth: {
        "prose-article": "68ch",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(17,17,17,0.04), 0 1px 3px 0 rgba(17,17,17,0.06)",
        "card-hover":
          "0 2px 4px 0 rgba(17,17,17,0.06), 0 6px 16px 0 rgba(17,17,17,0.08)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.2, 0.65, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.35s cubic-bezier(0.2, 0.65, 0.3, 1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
