/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'rgb(var(--color-background))',
          foreground: 'rgb(var(--color-foreground))',
        },
        card: 'rgb(var(--color-card))',
        border: 'rgb(var(--color-border))',
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#ec4899',
        'text-secondary': 'rgb(var(--color-text-secondary))',
        'text-muted': 'rgb(var(--color-text-muted))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-hover': '0 0 30px rgba(99, 102, 241, 0.5)',
      },
    },
  },
  plugins: [],
}