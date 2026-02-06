module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['react'],
  rules: {
    // Enforce curly braces for all JSX prop values
    'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'ignore' }],
  },
};
