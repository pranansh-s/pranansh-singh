/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outerBold: ['MADE Outer Sans Bold', 'serif'],
        outerLight: ['MADE Outer Sans Light', 'serif'],
        outerMedium: ['MADE Outer Sans Medium', 'serif'],
        outerRegular: ['MADE Outer Sans Regular', 'serif'],
        cedarville: ['Cedarville Cursive', 'cursive']
      },
      colors: {
        primary: '#1C172E',
        secondary: '#FF5858'
      },
      animation: {
        'scroll1': 'scrollR1 11s linear infinite',
        'scroll2': 'scrollR2 14s linear infinite',
        'scroll3': 'scrollR3 9s linear infinite',
        'scroll4': 'scrollR4 8s linear infinite',

        'scrollResp': 'scrollResp 16s linear infinite',
      },
      keyframes: {
        scrollR1: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc((18vh + 0.75rem) * 8))" }
        },
        scrollR2: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc((18vh + 0.75rem) * -6))" }
        },
        scrollR3: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc((18vh + 0.75rem) * 4))" }
        },
        scrollR4: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc((18vh + 0.75rem) * -2))" }
        },

        scrollResp: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc((8rem + 0.75rem) * -20))" }
        },
      }
    }
  },
  plugins: [],
}
