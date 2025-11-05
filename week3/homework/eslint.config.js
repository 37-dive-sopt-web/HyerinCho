import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import react from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default [
  { ignores: ["node_modules", "dist"] },

  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      react,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...(react.configs?.recommended?.rules ?? {}),

      curly: ["error", "all"],
      "no-console": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_|^args$" }],

      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      "react/jsx-filename-extension": ["error", { extensions: [".jsx"] }],

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^node:"],
            ["^react$", "^@?\\w"],
            ["^\\u0000"],
            ["^\\."],
            ["^.+\\.css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },

  prettierConfig,
];
