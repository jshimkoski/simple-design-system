module.exports = {
  // disable preflight since
  // we have a custom base plugin
  // that is more modern than css
  // normalize and it enables
  // complete control over the
  // dynamic colors
  corePlugins: {
    preflight: false,
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
  },
  // turn on active variants for
  // all color types
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    borderColor: ["responsive", "hover", "focus", "active"],
    placeholderColor: ["responsive", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [
    // simple design system plugins
    require("./plugins/tailwindcss-css-variables"),
    require("./plugins/tailwindcss-base"),
    require("./plugins/tailwindcss-lightness"),
    require("./components/tailwindcss-btn"),
    require("./components/tailwindcss-form-control"),
    require("./components/tailwindcss-nav"),
    // the official @tailwindcss/typography
    // plugin
    require("@tailwindcss/typography"),
    // a third party css variables plugin
    require("tailwind-css-variables")({
      colors: false,
    }),
  ],
};
