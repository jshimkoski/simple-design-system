const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, config }) {
  const components = {
    /**
     * Base nav class
     */

    ".nav": {
      "--nav-variant": config("theme.colors.gray.200"),
      "--nav-on-variant": config("theme.colors.fgcolor"),
      userSelect: "none",
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
      color: config("theme.colors.gray.600"),
      fontSize: config("theme.fontSize.sm"),
      padding: `${config("theme.padding.3")} ${config("theme.padding.4")}`,
      width: config("theme.width.full"),
    },

    /**
     * Color variants
     */

    ".nav-white": {
      "--nav-variant": config("theme.colors.white"),
      "--nav-on-variant": config("theme.colors.static-gray.900"),
    },

    ".nav-black": {
      "--nav-variant": config("theme.colors.black"),
      "--nav-on-variant": config("theme.colors.static-gray.100"),
    },

    ".nav-blue": {
      "--nav-variant": config("theme.colors.blue.500"),
      "--nav-on-variant": config("theme.colors.white"),
    },

    ".nav-green": {
      "--nav-variant": config("theme.colors.green.500"),
      "--nav-on-variant": config("theme.colors.white"),
    },

    ".nav-indigo": {
      "--nav-variant": config("theme.colors.indigo.500"),
      "--nav-on-variant": config("theme.colors.white"),
    },

    ".nav-orange": {
      "--nav-variant": config("theme.colors.orange.500"),
      "--nav-on-variant": config("theme.colors.white"),
    },

    ".nav-pink": {
      "--nav-variant": config("theme.colors.pink.500"),
      "--nav-on-variant": config("theme.colors.white"),
    },

    ".nav-purple": {
      "--nav-variant": config("theme.colors.purple.500"),
      "--nav-on-variant": config("theme.colors.white"),
    },

    ".nav-red": {
      "--nav-variant": config("theme.colors.red.500"),
      "--nav-on-variant": config("theme.colors.white"),
    },

    ".nav-teal": {
      "--nav-variant": config("theme.colors.teal.500"),
      "--nav-on-variant": config("theme.colors.white"),
    },

    ".nav-yellow": {
      "--nav-variant": config("theme.colors.yellow.500"),
      "--nav-on-variant": config("theme.colors.white"),
    },

    /**
     * Core styles
     */

    ".nav:hover, .nav:focus, .nav:active": {
      color: "var(--nav-variant)",
      outline: "none",
    },

    ".nav.active": {
      color: "var(--nav-variant)",
    },

    ".nav.disabled, .nav[disabled]": {
      opacity: config("theme.opacity.50"),
      pointerEvents: "none",
    },

    ".nav:not([class*=nav-]):hover, .nav:not([class*=nav-]):focus, .nav:not([class*=nav-]):active": {
      color: config("theme.colors.fgcolor"),
    },

    ".nav:not([class*=nav-]).active": {
      color: config("theme.colors.fgcolor"),
    },

    /**
     * Types
     */

    /* Underline type */

    ".nav-underline": {
      paddingTop: config("theme.padding.3"),
      paddingBottom: config("theme.padding.2"),
      borderBottomWidth: config("theme.borderWidth.4"),
      borderColor: config("theme.colors.transparent"),
    },

    ".nav-underline:hover, .nav-underline:focus, .nav-underline:active": {
      outline: "none",
      color: config("theme.colors.fgcolor"),
      borderColor: "var(--nav-variant)",
    },

    ".nav-underline.active": {
      outline: "none",
      color: config("theme.colors.fgcolor"),
      borderColor: "var(--nav-variant)",
    },

    /* Overline type */

    ".nav-overline": {
      paddingTop: config("theme.padding.2"),
      paddingBottom: "var(--p-3)",
      borderTopWidth: config("theme.borderWidth.4"),
      borderColor: config("theme.colors.transparent"),
    },

    ".nav-overline:hover, .nav-overline:focus, .nav-overline:active": {
      outline: "none",
      color: config("theme.colors.fgcolor"),
      borderColor: "var(--nav-variant)",
    },

    ".nav-overline.active": {
      outline: "none",
      color: config("theme.colors.fgcolor"),
      borderColor: "var(--nav-variant)",
    },

    /* Pill type */

    ".nav-pill:hover, .nav-pill:focus, .nav-pill:active": {
      borderRadius: "var(--rounded)",
      outline: "none",
      color: "var(--nav-on-variant)",
      backgroundColor: "var(--nav-variant)",
    },

    ".nav-pill.active": {
      borderRadius: "var(--rounded)",
      color: "var(--nav-on-variant)",
      backgroundColor: "var(--nav-variant)",
    },

    /* Block type */

    ".nav-block:hover, .nav-block:focus, .nav-block:active": {
      outline: "none",
      color: "var(--nav-on-variant)",
      backgroundColor: "var(--nav-variant)",
    },

    ".nav-block.active": {
      color: "var(--nav-on-variant)",
      backgroundColor: "var(--nav-variant)",
    },

    /**
     * Nav groups
     */

    ".nav-group": {
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: "min-content",
    },

    ".nav-group:not([no-gap])": {
      gap: config("theme.gap.2"),
    },
  };

  addComponents(components);
});
