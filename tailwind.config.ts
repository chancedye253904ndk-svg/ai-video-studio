import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f1419',
        'dark-secondary': '#1a1f26',
        'dark-tertiary': '#242a31',
        'dark-border': '#2a2f36',
        'accent-gold': '#c9a961',
        'accent-cyan': '#4a9fb5',
        'accent-purple': '#7c5a99',
        'text-primary': '#e4e6eb',
        'text-secondary': '#a0a5b0',
        'text-disabled': '#6a7079',
      },
    },
  },
  plugins: [],
} satisfies Config
