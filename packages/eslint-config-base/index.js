module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node-commonjs',
    './rules/style',
    './rules/variables',
    './rules/ECMAScript'
  ].map(require.resolve)
}
