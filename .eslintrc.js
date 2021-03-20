module.exports = {
  extends: 'airbnb',
  ignorePatterns: ['**/serviceWorker.js'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': [2, 'prefer-single'],
  },
};
