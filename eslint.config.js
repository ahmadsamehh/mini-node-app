// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  rules: {
  "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  "no-console": "off",

  // bug-prevention / quality
  "eqeqeq": ["error", "always"],
  "no-var": "error",
  "prefer-const": "error",
  "no-implicit-globals": "error",
},
  },
];
