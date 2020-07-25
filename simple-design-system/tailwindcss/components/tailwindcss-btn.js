const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, config }) {
  const components = {
    /**
     * Base btn class
     */

    ".btn": {
      "--btn-variant": config("theme.colors.gray.500"),
      "--btn-variant-on": config("theme.colors.white"),
      borderWidth: config("theme.borderWidth.default"),
      display: "inline-block",
      padding: `${config("theme.padding.2")} ${config("theme.padding.4")}`,
      borderRadius: config("theme.borderRadius.default"),
      userSelect: "none",
      whiteSpace: "nowrap",
      boxShadow: config("theme.boxShadow.default"),
      borderColor: "var(--btn-variant)",
      backgroundColor: "var(--btn-variant)",
      color: "var(--btn-variant-on)",
    },

    /**
     * Color variants
     */

    ".btn-white": {
      "--btn-variant": config("theme.colors.white"),
      "--btn-variant-on": config("theme.colors.static-gray.900"),
    },

    ".btn-black": {
      "--btn-variant": config("theme.colors.black"),
      "--btn-variant-on": config("theme.colors.static-gray.100"),
    },

    ".btn-blue": {
      "--btn-variant": config("theme.colors.blue"),
      "--btn-variant-on": config("theme.colors.white"),
    },

    ".btn-green": {
      "--btn-variant": config("theme.colors.green"),
      "--btn-variant-on": config("theme.colors.white"),
    },

    ".btn-indigo": {
      "--btn-variant": config("theme.colors.indigo"),
      "--btn-variant-on": config("theme.colors.white"),
    },

    ".btn-orange": {
      "--btn-variant": config("theme.colors.orange"),
      "--btn-variant-on": config("theme.colors.white"),
    },

    ".btn-pink": {
      "--btn-variant": config("theme.colors.pink"),
      "--btn-variant-on": config("theme.colors.white"),
    },

    ".btn-purple": {
      "--btn-variant": config("theme.colors.purple"),
      "--btn-variant-on": config("theme.colors.white"),
    },

    ".btn-red": {
      "--btn-variant": config("theme.colors.red"),
      "--btn-variant-on": config("theme.colors.white"),
    },

    ".btn-teal": {
      "--btn-variant": config("theme.colors.teal"),
      "--btn-variant-on": config("theme.colors.white"),
    },

    ".btn-yellow": {
      "--btn-variant": config("theme.colors.yellow"),
      "--btn-variant-on": config("theme.colors.black"),
    },

    /**
     * Outline variant
     */

    ".btn-outline": {
      backgroundColor: config("theme.colors.transparent"),
      color: "var(--btn-variant)",

      "&:hover, &.active": {
        color: "var(--btn-variant-on)",
        backgroundColor: "var(--btn-variant)",
      },
    },

    /**
     * Block variant
     */

    ".btn-block": {
      display: "block",
      width: config("theme.width.full"),
    },

    /**
     * Action states
     */

    ".btn:hover, .btn:focus": {
      boxShadow: config("theme.boxShadow.md"),
      filter: "var(--lighten)",
    },

    ".btn:active": {
      boxShadow: config("theme.boxShadow.md"),
      filter: "var(--darken)",
    },

    ".btn.active": {
      boxShadow: config("theme.boxShadow.inner"),
      filter: "var(--darken)",
      pointerEvents: "none",
    },

    ".btn:focus": {
      outline: "none",
      boxShadow: config("theme.boxShadow.outline"),
    },

    ".btn.disabled, .btn[disabled]": {
      opacity: config("theme.opacity.50"),
      pointerEvents: "none",
    },

    /**
     * Button Group
     */

    ".btn-group": {
      ".btn:not(:first-child):not(:last-child)": {
        borderRadius: config("theme.borderRadius.none"),
      },

      ".btn:first-child:not(:only-child)": {
        borderTopRightRadius: config("theme.borderRadius.none"),
        borderBottomRightRadius: config("theme.borderRadius.none"),
      },

      ".btn:last-child:not(:only-child)": {
        borderTopLeftRadius: config("theme.borderRadius.none"),
        borderBottomLeftRadius: config("theme.borderRadius.none"),
      },
    },
  };

  addComponents(components);
});
