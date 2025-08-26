/* eslint-env node */
module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript'
  ],
  rules: {
    // Add any custom rules here
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/no-unescaped-entities': 'off',
  },
}
