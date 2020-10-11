module.exports = {
  env: {
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 6,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/vue"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: false,
        trailingComma: "none",
        printWidth: 80
      }
    ],
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-var-requires": 0,
    "vue/no-multiple-template-root": 0
  }
}
