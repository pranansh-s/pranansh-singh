/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outerRegular: ['MADE Outer Sans Regular', 'serif'],
        bagelRegular: ['Bagel Fat One Regular', 'sans-serif'],
        cedarville: ['Cedarville Cursive', 'cursive'],
      },
      colors: {
        primary: '#F5F1F9',
        secondary: '#FF5858',
        'primary-muted': '#AEA4BD',
        'primary-dim': '#6B6080',
        surface: '#231D38',
        'surface-light': '#2E2649',
        'secondary-glow': '#FF7A7A',
        'canvas-bg': '#1C172E',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        'sm-md': '20px',
        md: '36px',
        'md-lg': '48px',
        xl: '64px',
        '2xl': '96px',
      },
      animation: {
        xlcarouselScrollUp: 'scrollXL 24s linear infinite',
        xlcarouselScrollDown: 'scrollXL 24s linear infinite reverse',
        carouselScrollLeft: 'scroll 24s linear infinite',
        carouselScrollRight: 'scroll 24s linear infinite reverse',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollXL: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
