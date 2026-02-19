/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outerBold: ['MADE Outer Sans Bold', 'serif'],
        outerLight: ['MADE Outer Sans Light', 'serif'],
        outerMedium: ['MADE Outer Sans Medium', 'serif'],
        outerRegular: ['MADE Outer Sans Regular', 'serif'],
        cedarville: ['Cedarville Cursive', 'cursive'],
      },
      colors: {
        primary: '#1C172E',
        secondary: '#FF5858',
      },
      spacing: {
        xl: '64px',
        md: '36px',
        sm: '16px',
      },
      animation: {
        xlcarouselScroll: 'scrollXL 24s linear infinite',
        carouselScroll: 'scroll 24s linear infinite',
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
