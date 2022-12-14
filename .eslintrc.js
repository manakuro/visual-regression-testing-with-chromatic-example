module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      semi: false,
      trailingComma: 'all'
    }]
  }
};