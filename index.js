module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  globals: {
    window: false,
    define: false,
    document: false,
    process: false,
    console: false,
    _t: false,
    angular: false,
  },
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    curly: [2, 'all'],
    'eol-last': [2, 'always'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'keyword-spacing': 2,
    'max-depth': [2, 3],
    'max-len': [
      2,
      100,
      2,
      {
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    'max-params': [2, 4],
    'max-statements': [2, 20],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-unused-vars': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [
      2,
      {
        initialized: 'never',
        uninitialized: 'always',
      },
    ],
    'operator-linebreak': [2, 'after'],
    quotes: [2, 'single'],
    'semi-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    'space-before-blocks': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 2,
  },
};
