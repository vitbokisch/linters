module.exports = {
  plugins: ['react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        // Note: will not complain if only _one_ of these files exists.
        extensions: ['.js', '.jsx', '.json', '.web.js', '.ios.js', '.android.js', '.mobile.js']
      }
    }
  },
  rules: {
    // The rule looks at all properties that contain color (case-insensitive) in their name in
    // either StyleSheet definitions or JSX properties that have style in their name.
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md
    'react-native/no-color-literals': 'warn',

    // This rule detects inline style objects when they contain literal values.
    // If inline styles only contain variable values, the style is considered acceptable
    // because it's sometimes necessary to set styles based on state or props.
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
    'react-native/no-inline-styles': 'warn',

    // When working on a component over a longer period of time, you could end up with
    // unused StyleSheet rules that slipt in over time but are forgotten as you continue
    // to improve your UX/UI design.
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
    'react-native/no-unused-styles': 'error',

    // When working on a project that supports both Android and IOS, you have to make sure
    // that you use platform specific filenames when you use platform specific components
    // to produce the correct bundle per platform.
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
    'react-native/split-platform-components': 'off'
  }
}
