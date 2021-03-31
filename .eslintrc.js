module.exports = {
	env: {
		es2020: true,
		node: true,
		commonjs: true,
	},
	extends: ['airbnb-base'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'import/prefer-default-export': 'off',
		'no-underscore-dangle': 'off',
		'no-undef': 'off',
		indent: 'off',
		'max-classes-per-file': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-tabs': 'off',
	},
};
