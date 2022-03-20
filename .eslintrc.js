/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-03-09 22:25:16
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-20 15:13:02
 * @LastEditContent: 'plugin:prettier/recommended'
 */
module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-var-requires': 'off'
	}
}
