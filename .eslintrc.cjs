module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    // 'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts", "tailwind.config.js"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'import', 'promise', 'simple-import-sort'],
  rules: {
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        classes: true,
        functions: false,
        variables: true,
      },
    ],
    // 'import/no-default-export': 'warn',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000'],
          ['^node:'],
          ['^react', '^@react', '^'],
          ['^@?\\w'],
          ['^'],
          ['^\\.'],
          // Процессы должны инициализироваться в App файле, после импорта всех остальных сущностей
          ['^\\u0000processes/'],
        ],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
}
