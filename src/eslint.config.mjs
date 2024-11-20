// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

const styledComponentArrowFn =
  "TaggedTemplateExpression > TemplateLiteral > ArrowFunctionExpression";

const ignoredNodes = [
	styledComponentArrowFn,
	`${styledComponentArrowFn} > BlockStatement`,
];

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	tseslint.configs.strict,
	tseslint.configs.stylistic,
	{
		plugins: {
			"@stylistic": stylistic,
		},
		rules: {
			"@stylistic/member-delimiter-style": ["error"],
			"@stylistic/quote-props": ["error", "as-needed"],
			"@typescript-eslint/consistent-type-imports": "warn",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-expressions": ["error", { allowShortCircuit: true }],
			"@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
			"array-bracket-spacing": ["error", "never"],
			"comma-dangle": ["error", "always-multiline"],
			"comma-spacing": ["error", { before: false, after: true }],
			"eol-last": ["error", "always"],
			"keyword-spacing": "error",
			"no-extra-semi": "error",
			"no-mixed-spaces-and-tabs": "error",
			"no-multi-spaces": ["error"],
			"no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],
			"no-trailing-spaces": ["error"],
			"object-curly-spacing": ["error", "always"],
			"one-var-declaration-per-line": "error",
			"space-before-blocks": ["error"],
			"space-infix-ops": "error",
			indent: ["error", "tab", { flatTernaryExpressions: true, ignoredNodes }],
			quotes: ["error", "double", { avoidEscape: true }],
			semi: ["error", "always"],
		},
	},
	{
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
		plugins: {
			/** @type any */
			react,
			/** @type any */
			"react-hooks": reactHooks,
		},
		rules: {
			"@stylistic/jsx-child-element-spacing": ["error"],
			"@stylistic/jsx-closing-bracket-location": ["error"],
			"@stylistic/jsx-closing-tag-location": ["error"],
			"@stylistic/jsx-curly-brace-presence": ["error", { propElementValues: "always" }],
			"@stylistic/jsx-curly-newline": ["error"],
			"@stylistic/jsx-curly-spacing": ["error"],
			"@stylistic/jsx-equals-spacing": ["error"],
			"@stylistic/jsx-first-prop-new-line": ["error"],
			"@stylistic/jsx-indent": ["error", "tab", { checkAttributes: true, indentLogicalExpressions: true }],
			"@stylistic/jsx-indent-props": ["error", "tab"],
			"@stylistic/jsx-one-expression-per-line": ["error", { allow: "single-child" }],
			"@stylistic/jsx-pascal-case": ["error"],
			"@stylistic/jsx-props-no-multi-spaces": ["error"],
			"@stylistic/jsx-quotes": ["error"],
			"@stylistic/jsx-self-closing-comp": ["error"],
			"@stylistic/jsx-tag-spacing": ["error"],
			"@stylistic/jsx-wrap-multilines": ["error", { arrow: "parens-new-line", assignment: "parens-new-line", condition: "parens-new-line", declaration: "parens-new-line", logical: "parens-new-line", return: "parens-new-line" }],
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
		},
	},
);
