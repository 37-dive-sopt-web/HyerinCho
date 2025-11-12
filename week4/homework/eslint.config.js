import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["node_modules", "dist"] },

  js.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
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
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // 권장 규칙 세트(타입 정보 비필요) + 필요시 type-checked 세트 추가
      ...tseslint.configs.recommended.rules,
      // 타입정보 기반 체크까지 하고 싶으면 아래도 추가(위 parserOptions.project 필요)
      // ...(tseslint.configs.recommendedTypeChecked?.rules ?? {}),

      ...(react.configs?.recommended?.rules ?? {}),

      // React
      "react/prop-types": "off",
      "react/require-default-props": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      // TSX 허용
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".jsx", ".tsx"] },
      ],

      // Hooks 권장
      ...reactHooks.configs.recommended.rules,

      // 일반 규칙
      curly: ["error", "all"],
      "no-console": "warn",
      "no-unused-vars": "off", // TS 규칙으로 대체
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_|^args$" },
      ],

      // import 정렬
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^node:"],
            ["^react$", "^@?\\w"],
            [
              "^@pages(/.*)?$",
              "^@components(/.*)?$",
              "^@styles(/.*)?$",
              "^@utils(/.*)?$",
            ],
            ["^\\u0000"], // side-effect imports
            ["^\\."],
            ["^.+\\.css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
  prettier,
];
