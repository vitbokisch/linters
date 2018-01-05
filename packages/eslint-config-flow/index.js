module.exports = {
  plugins: ['flowtype'],
  parser: 'babel-eslint',
  env: {
    es6: true
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  },

  rules: {
    // Enforces a particular style for boolean type annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-boolean-style
    'flowtype/boolean-style': ['error', 'boolean'],

    // Marks Flow type identifiers as defined.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type
    'flowtype/define-flow-type': 'warn',

    // Enforces consistent use of trailing commas in Object and Tuple annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-delimiter-dangle
    'flowtype/delimiter-dangle': ['error', 'always-multiline'],

    // Enforces consistent spacing within generic type annotation parameters.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-generic-spacing
    'flowtype/generic-spacing': ['error', 'never'],

    // Checks for duplicate properties in Object annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-dupe-keys
    'flowtype/no-dupe-keys': 'error',

    // Requires use of $ReadOnlyArray instead of just Array or array shorthand notation.
    // https://github.com/gajus/eslint-plugin-flowtype#no-mutable-array
    'flowtype/no-mutable-array': 'error',

    // Disallows use of primitive constructors as types, such as Boolean, Number and String
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-primitive-constructor-types
    'flowtype/no-primitive-constructor-types': 'error',

    // NOTE: expected you are using flow in all your project files, so annotation is not needed
    // Disallows Flow type imports, aliases, and annotations in files missing a valid Flow file declaration (or a @noflow annotation).
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-types-missing-file-annotation
    'flowtype/no-types-missing-file-annotation': 'off',

    // An extension of ESLint's no-unused-expressions. This rule ignores type cast expressions, but otherwise behaves the same as ESLint's no-unused-expressions.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-unused-expressions
    'flowtype/no-unused-expressions': 'error',

    // Warns against weak type annotations any, Object and Function. These types can cause flow to silently skip over portions of your code, which would have otherwise caused type errors.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-weak-types
    'flowtype/no-weak-types': [
      'error',
      {
        any: false,
        Object: true,
        Function: true
      }
    ],

    // Enforces consistent separators between properties in Flow object types.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-object-type-delimiter
    'flowtype/object-type-delimiter': ['error', 'comma'],

    // Requires that all function parameters have type annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-parameter-type
    'flowtype/require-parameter-type': 'error',

    // Requires that functions have return type annotation.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-return-type
    'flowtype/require-return-type': [
      'error',
      'always',
      {
        annotateUndefined: 'never'
      }
    ],

    // NOTE: expected you are using flow in all your project files, so annotation is not needed
    // This rule validates Flow file annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-valid-file-annotation
    'flowtype/require-valid-file-annotation': 'off',
    // Requires that all variable declarators have type annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-variable-type
    'flowtype/require-variable-type': [
      'error',
      {
        excludeVariableTypes: {
          var: true,
          let: true,
          const: false
        }
      }
    ],
    // Enforces consistent use of semicolons after type aliases.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-semi
    'flowtype/semi': ['error', 'never'],
    // Enforces sorting of Object annotations.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-sort-keys
    'flowtype/sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: false,
        natural: true
      }
    ],
    // Enforces consistent spacing after the type annotation colon.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-after-type-colon
    'flowtype/space-after-type-colon': ['error', 'always', { allowLineBreak: false }],
    // Enforces consistent spacing before the opening < of generic type annotation parameters.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-generic-bracket
    'flowtype/space-before-generic-bracket': ['error', 'never'],
    // Enforces consistent spacing before the type annotation colon.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-type-colon
    'flowtype/space-before-type-colon': ['error', 'never'],
    // Enforces a consistent naming pattern for type aliases.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-type-id-match
    'flowtype/type-id-match': 'off',
    // Enforces consistent spacing around union and intersection type separators (| and &).
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-union-intersection-spacing
    'flowtype/union-intersection-spacing': ['error', 'always'],
    // Marks Flow type alias declarations as used.
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-use-flow-type
    'flowtype/use-flow-type': 'warn'
  }
}
