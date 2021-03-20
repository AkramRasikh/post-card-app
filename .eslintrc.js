module.exports = {
  extends: ['plugin:react/recommended', 'eslint:recommended', 'airbnb'],
  ignorePatterns: ['**/serviceWorker.js'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': [2, 'prefer-single'],
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
