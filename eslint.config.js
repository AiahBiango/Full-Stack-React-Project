//  // eslint.config.js
// import js from '@eslint/js'
// import reactPlugin from 'eslint-plugin-react'
// import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
// import babelParser from '@babel/eslint-parser'
// import globals from 'globals'

// export default [
//   js.configs.recommended,
//   {
//     ignores: ['node_modules', 'dist', 'coverage'],
//     languageOptions: {
//       parser: babelParser,
//       parserOptions: {
//         requireConfigFile: false,
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//         ecmaFeatures: { jsx: true },
//         babelOptions: { presets: ['@babel/preset-react'] },
//       },
//       env: {
//         node: true, 
//         es6: true   
//       },
//     },
//     plugins: {
//       eslint: recommended,
//       prettier
//     },
//     rules: {
//       'react/jsx-uses-react': 'error',
//       'react/jsx-uses-vars': 'error',
//       'no-unused-vars': ['warn', { varsIgnorePattern: '^React$' }],
//       'jsx-a11y/alt-text': 'warn',
//       'no-alert': 'error',
//     },
//   },
// ]


// eslint.config.js
import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import babelParser from '@babel/eslint-parser'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    ignores: ['node_modules', 'dist', 'coverage'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        babelOptions: { presets: ['@babel/preset-react'] },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'no-unused-vars': ['warn', { varsIgnorePattern: '^React$' }],
      'jsx-a11y/alt-text': 'warn',
      'no-alert': 'error',
    },
  },
]
