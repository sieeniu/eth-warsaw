/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: ['@frodo/eslint-config/nest.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
    },
};
