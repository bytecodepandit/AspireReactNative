module.exports = {
  root: true,
  plugins: ['react-hooks'],
  extends: '@react-native-community',
  'no-unused-vars': 'off',
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn', // <--- THIS IS THE NEW RULE
  },
};
