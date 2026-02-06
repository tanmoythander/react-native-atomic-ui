module.exports = {
  root: true,
  extends: ['@react-native/eslint-config'],
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    // Enforce curly braces for all JSX prop values
    'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'ignore' }],
    // Align with prettier's trailingComma: 'es5'
    'comma-dangle': ['warn', 'only-multiline'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
