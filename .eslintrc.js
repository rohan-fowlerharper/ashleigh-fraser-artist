/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
  },
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "prettier",
  ],
};
