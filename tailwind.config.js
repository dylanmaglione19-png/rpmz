/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary':   '#0A0A0B',
        'bg-secondary': '#111113',
        'bg-elevated':  '#1A1A1C',
        'text-primary':   '#FAFAF9',
        'text-secondary': '#A1A1AA',
        'text-muted':     '#52525B',
        accent:           '#E63329',
        'accent-hover':   '#FF3D33',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.5)',
        glow: '0 0 32px rgba(230,51,41,0.15)',
        'glow-lg': '0 0 48px rgba(230,51,41,0.25)',
      },
    },
  },
  plugins: [],
};
