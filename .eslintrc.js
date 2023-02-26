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
    'react-hooks',
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
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': [
      'warn',
      {
        exceptions: ['Link', 'button'],
      },

    ],
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config.ts',
          '**/*.{test,stories}.{ts,tsx}',
          '**/{tests,stories,config}/**/*.{ts,tsx}',
        ],
      },
    ],
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: [
        'to',
        'data-testid',
      ],
    }],
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 100,
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': 'error',
    'jsx-a11y/no-static-element-interactions': 'off', // TODO: handle it later
    'jsx-a11y/click-events-have-key-events': 'off', // TODO: handle it later
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
    {
      files: ['**/*.stories.{ts,tsx}'],
      rules: {
        'max-len': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
