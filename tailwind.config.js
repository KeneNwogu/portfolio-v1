/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        canvas: 'rgb(var(--c-base-rgb) / <alpha-value>)',
        surface: 'rgb(var(--c-surface-rgb) / <alpha-value>)',
        line: 'rgb(var(--c-line-rgb) / <alpha-value>)',
        ink: 'rgb(var(--c-ink-rgb) / <alpha-value>)',
        muted: 'rgb(var(--c-muted-rgb) / <alpha-value>)',
        faint: 'rgb(var(--c-faint-rgb) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--c-accent-rgb) / <alpha-value>)',
          dim: 'rgb(var(--c-accent-dim-rgb) / <alpha-value>)',
          soft: 'var(--c-accent-soft)',
        },
      },
      maxWidth: {
        content: '1200px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
