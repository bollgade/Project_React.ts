module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    indent: ['error', 2, { ignoredNodes: ['ConditionalExpression'] }],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'linebreak-style': ['error', 'windows'],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true, ignoreAttribute: ['to'],
    }],
    'max-len': ['error', { ignoreComments: true }],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': 'error',
  },
  globals: {
    __IS_DEV__: true,
  },

};
