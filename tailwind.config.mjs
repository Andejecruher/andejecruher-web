/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00d9f5',
          'primary-hover': '#00bfd8',
          secondary: '#0087a8',
          'secondary-dark': '#0b4f6c',
        },
        surface: {
          DEFAULT: '#07101a',
          elevated: '#091521',
          soft: 'rgba(255, 255, 255, 0.03)',
        },
        bg: {
          primary: '#02070b',
          secondary: '#050b12',
          tertiary: '#07111c',
          footer: '#061014',
        },
        cyan: {
          400: '#00d9f5',
          500: '#00bfd8',
          600: '#0087a8',
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
        'glow-primary': '0 0 32px rgba(0, 217, 245, 0.22)',
        'glow-primary-strong': '0 0 28px rgba(0, 217, 245, 0.4)',
        soft: '0 18px 60px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00d9f5 0%, #0087a8 100%)',
        'gradient-hero':
          'radial-gradient(circle at 75% 45%, rgba(0, 217, 245, 0.16), transparent 34%), linear-gradient(135deg, #02070b 0%, #07111c 55%, #031827 100%)',
      },
    },
  },
  plugins: [],
};
