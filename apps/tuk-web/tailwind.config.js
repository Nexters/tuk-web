/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../../packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
        noto: ['Noto Serif KR', 'serif'],
      },
      colors: {
        primary: {
          50: '#FFF1F1',
          100: '#FFDFDF',
          200: '#FFC5C5',
          300: '#FF9D9D',
          400: '#FF6464',
          500: '#FF3838',
          600: '#ED1515',
          700: '#C80D0D',
          800: '#A50F0F',
          900: '#881414',
          950: '#4B0404',
        },
        white: {
          default: '#ffffff',
        },
        black: {
          default: '#000000',
          500: '#1f1f1f',
        },
        gray: {
          500: '#d9d9d9',
          800: '#888888',
        },
      },
    },
  },
  plugins: [],
};
