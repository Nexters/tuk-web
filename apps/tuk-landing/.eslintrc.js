// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

module.exports = {
  extends: ['@tuk-web/eslint-config'],
  settings: {
    tailwindcss: {
      config: path.resolve(__dirname, './tailwind.config.js'),
    },
  },
  rules: {
    '@typescript-eslint/no-duplicate-enum-values': 'off',
  },
};
