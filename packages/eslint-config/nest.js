const { warn } = require("node:console");
const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "./common.js",
  ],
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["import", "simple-import-sort", "testing-library"],
  rules: {
    "import/no-cycle": [
      "error",
      {
        maxDepth: 10,
        ignoreExternal: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-magic-numbers": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "turbo/no-undeclared-env-vars": "warn"
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [
    { files: ["*.js?(x)", "*.ts?(x)"] },
    {
      files: ["*.entity.ts", "*.entity.js"],
      rules: {
        "import/no-cycle": "off",
      },
    },
  ],
};
