module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "plugin:@intlify/vue-i18n/recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-v-html": "off",
    "@intlify/vue-i18n/no-v-html": "off"
  },
  settings: {
    "vue-i18n": {
      localeDir: "./src/locales/*.{json,json5,yaml,yml}",
      messageSyntaxVersion: "^9.0.0",
    },
  },
};
