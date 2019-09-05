module.exports = {
  extends: ['eslint-config-qunar-base'].map(require.resolve),
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.mjs', '.json'],
        paths: ['src']
      }
    },
    'import/extensions': ['.js', '.ts', '.mjs']
  },
  rules: {
    // 使用 ts 类型时会有问题，先禁用
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ]
  }
};
