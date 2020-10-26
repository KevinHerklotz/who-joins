const ERROR = 2
const WARNING = 1
const OFF = 0

// const assertFunctionGenerator = ({ variants, queries }) => {
//   const assertFunctions = []

//   variants.forEach((variant) => {
//     queries.forEach((query) => {
//       assertFunctions.push(variant + query)
//       assertFunctions.push(`screen.${variant}${query}`)
//     })
//   })
//   return assertFunctions
// }

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', // Allows using import/export statements
    project: './tsconfig.eslint.json',
  },
  settings: {
    react: {
      version: 'detect', // for plugin:react/recommended
    },
  },
  env: {
    browser: true, // Enables browser globals like window and document
    node: true, // Enables Node.js global variables and Node.js scoping.
    jest: true,
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'react-hooks',
    'unicorn',
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:unicorn/recommended',
  ],
  rules: {
    // 'react/react-in-jsx-scope': OFF,
    // '@typescript-eslint/ban-ts-comment': OFF,
    // '@typescript-eslint/ban-ts-ignore': OFF,
    // '@typescript-eslint/camelcase': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF, // typing all functions is often useless as TS is really good at infering returned values
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/naming-convention': [
      ERROR,
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: [
          'is',
          'are',
          'does',
          'should',
          'has',
          'have',
          'had',
          'can',
          'did',
          'will',
          'show',
          'display',
          'with',
          'was',
          'were',
          'requires',
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': ERROR,
    // camelcase: OFF,
    '@typescript-eslint/semi': ['error', 'never'],
    'import/no-extraneous-dependencies': [
      ERROR,
      { devDependencies: ['**/*.test.+(ts|tsx)'] },
    ],
    'import/extensions': [
      ERROR,
      {
        ts: 'never',
        json: 'always',
        md: 'always',
        mdx: 'always',
        svg: 'always',
      },
    ],
    'import/order': [
      ERROR,
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: '#*/**',
            group: 'internal',
          },
          {
            pattern: '{./**/*.+(css|scss),../**/*.+(css|scss),**/*.+(css|scss)}', // match './style.scss', '../style.scss' and 'whatever/file.scss'
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
      },
    ],
    // 'import/prefer-default-export': OFF,
    // 'jest/expect-expect': [
    //   ERROR,
    //   {
    //     assertFunctionNames: [
    //       'expect',
    //       ...assertFunctionGenerator({
    //         variants: ['get', 'getAll', 'query', 'queryAll', 'find', 'findAll'],
    //         queries: [
    //           'ByLabelText',
    //           'ByPlaceholderText',
    //           'ByText',
    //           'ByAltText',
    //           'ByTitle',
    //           'ByDisplayValue',
    //           'ByRole',
    //           'ByTestId',
    //         ],
    //       }),
    //     ],
    //   },
    // ],
    // 'jest/no-mocks-import': OFF,
    // 'jest/no-truthy-falsy': [ERROR],
    // 'jest/prefer-spy-on': [ERROR],
    // 'jest/prefer-to-be-null': [ERROR],
    // 'jest/prefer-to-be-undefined': [ERROR],
    // 'jest/prefer-to-contain': [ERROR],
    // 'jest/prefer-to-have-length': [ERROR],
    // 'jest/require-to-throw-message': [ERROR],
    // 'jest/valid-title': [ERROR],
    'jsx-a11y/anchor-is-valid': [
      ERROR,
      {
        components: ['Link'],
        aspects: ['invalidHref', 'preferButton'],
        specialLink: ['hrefLeft', 'hrefRight'],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        allowChildren: true,
        required: { every: ['nesting', 'id'] },
      },
    ],
    'max-len': [ERROR, {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
    }],
    'object-curly-newline': [ERROR, {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true },
      ImportDeclaration: { multiline: true, consistent: true },
      ExportDeclaration: { multiline: true, consistent: true },
    }],
    'object-property-newline': ERROR,
    'unicorn/prefer-flat-map': ERROR,
    'unicorn/prefer-replace-all': ERROR,
    'unicorn/numeric-separators-style': ERROR,
    'unicorn/prevent-abbreviations': OFF,
    radix: [ERROR, 'as-needed'],
    'react/jsx-filename-extension': [
      WARNING,
      {
        allow: 'as-needed',
        extensions: ['.tsx'],
      },
    ],
    'react-hooks/exhaustive-deps': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react/jsx-max-props-per-line': [ERROR, { maximum: 3 }],
    'react/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }], // or 'literal' maybe?
    'react/jsx-props-no-spreading': OFF,
    // 'testing-library/no-wait-for-empty-callback': ERROR,
    // 'testing-library/prefer-presence-queries': ERROR,
    // 'testing-library/prefer-wait-for': ERROR,
  },
  globals: { React: 'writable' },
}
