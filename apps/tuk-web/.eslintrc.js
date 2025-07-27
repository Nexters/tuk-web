import path from 'path';

module.exports = {
  extends: ['@tuk-web/eslint-config'],
  settings: {
    tailwindcss: {
      config: path.resolve(__dirname, './tailwind.config.js'),
    },
  },
};
