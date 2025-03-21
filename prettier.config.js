// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindStylesheet": "./src/styles/styles.css",
  // "tailwindAttributes": ["class"],
  // "tailwindAttributes": ["myClassList"],
  // "tailwindConfig": "./styles/tailwind.config.js",
  // "tailwindPreserveDuplicates": true, // pluginnya auto ngehapus class duplikat, buat jaga"
};

export default config;