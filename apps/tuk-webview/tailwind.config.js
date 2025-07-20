module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/tuk-ui/src/**/*.{js,ts,jsx,tsx}', // ✅ 이 경로 꼭 추가!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
