/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: ['@frodo/eslint-config/next.js'],
    parserOptions: {
        project: true,
    },
};
