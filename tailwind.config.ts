import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        jakarta: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FDF8F1',
        'cream-dark': '#F5EFE3',
        navy: '#1B3A4B',
        'navy-light': '#2A5568',
        amber: '#E8963A',
        'amber-light': '#FEF3E4',
        'amber-dark': '#C97D2B',
        sage: '#5F8575',
        'sage-light': '#EDF4EF',
        charcoal: '#2D3748',
        muted: '#718096',
        border: '#E8DDD0',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 70% 40%, #FEF3E4 0%, #FDF8F1 60%, #EDF4EF 100%)',
        'section-gradient': 'linear-gradient(180deg, #FDF8F1 0%, #F5EFE3 100%)',
      },
      boxShadow: {
        card: '0 2px 20px rgba(27, 58, 75, 0.08)',
        'card-hover': '0 8px 40px rgba(27, 58, 75, 0.14)',
        amber: '0 4px 20px rgba(232, 150, 58, 0.30)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
