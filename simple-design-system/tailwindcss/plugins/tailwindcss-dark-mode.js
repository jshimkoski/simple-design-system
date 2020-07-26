const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant, e, postcss }) {
  // this variant handles both
  // prefers-color-mode: dark
  // as well all having a .dark
  // class on the :root
  addVariant("dark", ({ container, separator }) => {
    const prefersColorSchemeRule = postcss.atRule({
      name: "media",
      params: "(prefers-color-scheme: dark)",
    });
    prefersColorSchemeRule.append(container.nodes);
    container.append(prefersColorSchemeRule);
    prefersColorSchemeRule.walkRules((rule) => {
      const clone = rule.clone();
      clone.selector = `:root.dark .${e(
        `dark${separator}${rule.selector.slice(1)}`
      )}`;
      rule.selector = `:root:not(.light) .${e(
        `dark${separator}${rule.selector.slice(1)}`
      )}`;
      container.append(clone);
    });
  });
});
