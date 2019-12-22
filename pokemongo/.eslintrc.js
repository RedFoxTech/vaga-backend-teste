module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'standard',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    use: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    camelcase: [
      'error', {
        properties: 'never',
        ignoreDestructuring: true
      }
    ]
  }
}
