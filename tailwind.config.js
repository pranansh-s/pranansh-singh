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
      },
      spacing: {
        xl: '64px',
        md: '36px',
        sm: '8px',
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
