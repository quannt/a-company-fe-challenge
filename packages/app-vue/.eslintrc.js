module.exports = {
  extends: [
    "../../.eslintrc.js",
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "prettier/vue",
    "plugin:nuxt/recommended",
  ],
  ignorePatterns: [".nuxt/", "dist/", "coverage/"],
  env: {
    browser: true,
    node: true,
  },
}
