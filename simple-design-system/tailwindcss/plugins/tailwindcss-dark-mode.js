const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant, e }) {
  addVariant("dark", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.dark .${e(`dark${separator}${className}`)}`;
    });
  });
});
