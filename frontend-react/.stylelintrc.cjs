module.exports = {
  extends: ['stylelint-config-standard'],
  // Use the PostCSS SCSS parser so Tailwind's at-rules are recognized
  customSyntax: 'postcss-scss',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
  },
}
