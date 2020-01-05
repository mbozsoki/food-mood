module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['plugin:react/recommended', 'airbnb/hooks'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint/eslint-plugin'],
    rules: {},
    settings: {
        "react": {
            "version": "detect"
        }
    }
};
