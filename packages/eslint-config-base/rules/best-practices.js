module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'error',

    // treat var statements as if they were block scoped
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // enforce that class methods use "this"
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: []
      }
    ],

    // specify the maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/rules/complexity
    complexity: ['off', 11],

    // require return statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // specify curly brace conventions for all control statements
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'multi-line'],

    // require default case in switch statements
    // https://eslint.org/docs/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // make sure for-in loops have an if statement
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // disallow the use of alert, confirm, and prompt
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',

    // disallow use of arguments.caller or arguments.callee
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 'error',

    // disallow division operators explicitly at beginning of regular expression
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': 'error',

    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods']
      }
    ],

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // disallow comparisons to null without a type-checking operator
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // disallow use of eval()
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // disallow adding to native types
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // disallow unnecessary function binding
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // disallow fallthrough of case statements
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // disallow the use of leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // disallow implicit type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: []
      }
    ],

    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // disallow use of eval()-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // disallow usage of __iterator__ property
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // disallow use of labels for anything other then loops and switches
    // https://eslint.org/docs/rules/no-labels
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // disallow creation of functions within loops
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false
      }
    ],

    // disallow use of multiple spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false
      }
    ],

    // disallow use of multiline strings
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-str': 'error',

    // disallow use of new operator when not part of the assignment or comparison
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // disallow use of new operator for Function object
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // disallows creating new instances of String, Number, and Boolean
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // disallow use of (old style) octal literals
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'self' //for mobx-state-tree
        ]
      }
    ],

    // disallow usage of __proto__ property
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // disallow declaring the same variable more then once
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.'
      }
    ],

    // disallow use of assignment in return statement
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'],

    // disallow redundant `return await`
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // disallow use of `javascript:` urls.
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // disallow use of comma operator
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // disallow usage of expressions in statement position
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // disallow unnecessary .call() and .apply()
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // disallow redundant return; keywords
    // http://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // disallow usage of configurable warning terms in comments: e.g. todo
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // disallow use of the with statement
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // require using Error objects as Promise rejection reasons
    // http://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // require use of the second argument for parseInt()
    // https://eslint.org/docs/rules/radix
    radix: ['error', 'as-needed'],

    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // http://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // requires to declare all vars on top of their containing scope
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // require or disallow Yoda conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'error'
  }
}
