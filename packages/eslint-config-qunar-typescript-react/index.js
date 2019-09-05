module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-qunar-typescript-base'].map(require.resolve),
  env: {
    es6: true
  },
  plugins: ['react'],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off'
  }
};
