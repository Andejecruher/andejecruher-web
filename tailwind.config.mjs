/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-primary)',
          'primary-hover': 'var(--color-primary-hover)',
          secondary: 'var(--color-secondary)',
          'secondary-dark': 'var(--color-secondary-dark)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
          soft: 'var(--color-surface-soft)',
        },
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          footer: 'var(--color-bg-footer)',
        },
        cyan: {
          400: 'var(--color-primary)',
          500: 'var(--color-primary-hover)',
          600: 'var(--color-secondary)',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      maxWidth: {
        '6xl': '1180px',
      },
      boxShadow: {
        'glow-primary': 'var(--shadow-glow-primary)',
        'glow-primary-strong': 'var(--shadow-glow-primary-strong)',
        soft: 'var(--shadow-soft)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-hero': 'var(--gradient-hero)',
      },
    },
  },
  plugins: [],
};
