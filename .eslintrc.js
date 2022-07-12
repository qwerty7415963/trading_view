module.exports = {
    root: true,
  
    env: {
      node: true,
    },
  
    extends: ['plugin:vue/recommended', 'plugin:vue/vue3-recommended','eslint:recommended',"prettier"],
  
    parserOptions: {
      parser: 'babel-eslint',
    },
    "ignorePatterns": ["src/@core/libs/*","public/*"],
    rules: {
      'import/no-cycle': 'off',
      'import/prefer-default-export': 'off',
      'no-empty-pattern': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  
      semi: ['error', 'never'],
      'max-len': 'off',
      'linebreak-style': 'off',
      camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }],
      'arrow-parens': ['error', 'as-needed'],
      'vue/multiline-html-element-content-newline': 'off',
    },
  
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)',
        ],
        env: {
          jest: true,
        },
      },
    ],
  }