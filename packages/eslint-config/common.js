/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended',
    'turbo',
  ],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        'ignoreArrayIndexes': true,
        'ignoreDefaultValues': true,
        'ignoreNumericLiteralTypes': true,
        'ignoreEnums': true,
        'detectObjects': true,
        'ignore': [-1, 0, 1],
      },
    ],
    'import/no-cycle': [
      'error',
      {
        ignoreExternal: true,
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 'error',
  },
};