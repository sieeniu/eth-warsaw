const { resolve } = require("path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "./common.js",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["simple-import-sort", "testing-library"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  rules: {
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-magic-numbers": [
      "warn",
      {
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        detectObjects: true,
        ignore: [-1, 0, 1, 100],
      },
    ],
    "import/no-cycle": [
      "error",
      {
        ignoreExternal: true,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/no-relative-packages": "error",
    "import/no-self-import": "error",
    "no-unused-vars": "warn",
    "no-console": "warn",
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
