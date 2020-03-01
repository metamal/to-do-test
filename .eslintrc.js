module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'object-curly-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
  },
};
