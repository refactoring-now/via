module.exports = {
  extends: ['standard'],
  env: {
    node: true,
    es6: true,
    jest: true
  },
  globals: {},
  rules: {
    'no-unused-expressions': 0,
    'no-useless-constructor': 0
  },
  parser: 'babel-eslint'
}
