module.exports = {
    env: {},
    extends: ['airbnb', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-filename-extension': 'off',
        'dot-notation': ['error', { allowKeywords: false }],
        'jsx-a11y/click-events-have-key-events': ['off'],
    },
};
