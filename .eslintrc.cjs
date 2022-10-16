module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
