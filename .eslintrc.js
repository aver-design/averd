module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',

    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    'react/prop-types': 'off',
    'no-console': 'off',
  },
}
