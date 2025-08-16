import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import { globalIgnores } from "eslint/config";

export default [
  globalIgnores(["dist", "node_modules", ".github"]),

  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.node,
      },
    },
    plugins: {
      react: react,
      import: importPlugin,
    },
    rules: {
      semi: [2, "always"],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/react-in-jsx-scope": "off",
      "import/extensions": [
        "error",
        {
          ts: "never",
          tsx: "never",
          svg: "always",
        },
      ],
    },
  },
];
