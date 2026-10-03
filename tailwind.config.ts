import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "var(--color-forest)",
          dark: "var(--color-forest-dark)",
          light: "var(--color-forest-light)",
          fg: "var(--color-forest-fg)",
        },
        sand: {
          DEFAULT: "var(--color-sand)",
          light: "var(--color-sand-light)",
        },
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        ivory: "var(--color-ivory)",
        ink: "var(--color-ink)",
        moss: "var(--color-moss)",
        fog: "var(--color-fog)",
        sage: "var(--color-sage)",
        olive: "var(--color-olive)",
        clay: "var(--color-clay)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        ethiopic: ["var(--font-ethiopic)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(31, 59, 44, 0.04)",
        md: "0 4px 12px rgba(31, 59, 44, 0.06)",
        lg: "0 12px 32px rgba(31, 59, 44, 0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
