module.exports = {
  extends: ['eslint-config-qunar-typescript-base'].map(require.resolve),
  env: {
    node: true
  }
};
