module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ['react'],

  // REMOVE ON TYPESCRIPT IMPLEMENTATION
  rules: {
    'react/prop-types': 0,
  },
};
