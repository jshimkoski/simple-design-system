const defaultColors = require("./colors");

module.exports = (colors) => ({
  // disable preflight since
  // we have a custom base plugin
  // that is more modern than css
  // normalize and it enables
  // complete control over the
  // dynamic colors
  corePlugins: {
    preflight: false,
  },
  // Lets get ready for Tailwind 2.0
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // turn off purge so all
  // utility classes are available
  // to developers just importing
  // the index.css file into their
  // projects
  purge: false,
  // important set to true so the
  // @tailwindcss/typography plugin
  // can be overridden with utility
  // classes
  important: true,
  theme: {
    // simple design theme settings
    typography: require("./theme/tailwindcss-typography"),
    colors: require("./theme/tailwindcss-colors"),
    extend: {
      opacity: {
        10: "0.1",
      },
    },
  },
  // turn on dark mode and active variants for
  // all color types
  variants: {
    backgroundColor: ["responsive", "dark", "hover", "focus", "active"],
    borderColor: ["responsive", "dark", "hover", "focus", "active"],
    placeholderColor: ["responsive", "dark", "focus", "active"],
    textColor: ["responsive", "dark", "hover", "focus", "active"],
  },
  plugins: [
    // simple design system plugins
    require("./plugins/tailwindcss-css-variables")({
      ...defaultColors,
      ...colors,
    }),
    require("./plugins/tailwindcss-base"),
    require("./plugins/tailwindcss-dark-mode"),
    require("./plugins/tailwindcss-lightness"),
    require("./plugins/tailwindcss-bg-glass"),
    // the official @tailwindcss/typography
    // plugin
    require("@tailwindcss/typography"),
    // a third party css variables plugin
    require("tailwind-css-variables")({
      colors: false,
    }),
  ],
});
