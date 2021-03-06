const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  const components = {
    /**
     * Base nav class
     */

    ".nav": {
      "@apply select-none whitespace-no-wrap flex items-center text-gray-600 text-sm font-medium py-3 px-4 w-full": {},
      "--nav-variant": "var(--color-gray-200)",
      "--nav-on-variant": "var(--color-fgcolor)",
    },

    /**
     * Color variants
     */

    ".nav-white": {
      "--nav-variant": "var(--color-white)",
      "--nav-on-variant": "var(--color-static-gray-900)",
    },

    ".nav-black": {
      "--nav-variant": "var(--color-black)",
      "--nav-on-variant": "var(--color-static-gray-100)",
    },

    ".nav-blue": {
      "--nav-variant": "var(--color-blue-500)",
      "--nav-on-variant": "var(--color-white)",
    },

    ".nav-green": {
      "--nav-variant": "var(--color-green-500)",
      "--nav-on-variant": "var(--color-white)",
    },

    ".nav-indigo": {
      "--nav-variant": "var(--color-indigo-500)",
      "--nav-on-variant": "var(--color-white)",
    },

    ".nav-orange": {
      "--nav-variant": "var(--color-orange-500)",
      "--nav-on-variant": "var(--color-white)",
    },

    ".nav-pink": {
      "--nav-variant": "var(--color-pink-500)",
      "--nav-on-variant": "var(--color-white)",
    },

    ".nav-purple": {
      "--nav-variant": "var(--color-purple-500)",
      "--nav-on-variant": "var(--color-white)",
    },

    ".nav-red": {
      "--nav-variant": "var(--color-red-500)",
      "--nav-on-variant": "var(--color-white)",
    },

    ".nav-teal": {
      "--nav-variant": "var(--color-teal-500)",
      "--nav-on-variant": "var(--color-white)",
    },

    ".nav-yellow": {
      "--nav-variant": "var(--color-yellow-500)",
      "--nav-on-variant": "var(--color-white)",
    },

    /**
     * Core styles
     */

    ".nav:hover, .nav:focus, .nav:active": {
      "@apply outline-none": {},
      color: "var(--nav-variant)",
    },

    ".nav:active": {
      "@apply darken": {},
    },

    ".nav.active": {
      color: "var(--nav-variant)",
    },

    ".nav.disabled, .nav[disabled]": {
      "@apply opacity-50 pointer-events-none": {},
    },

    ".nav:not([class*=nav-]):hover, .nav:not([class*=nav-]):focus, .nav:not([class*=nav-]):active": {
      "@apply text-fgcolor": {},
    },

    ".nav:not([class*=nav-]).active": {
      "@apply text-fgcolor": {},
    },

    /**
     * Types
     */

    /* Underline type */

    ".nav-underline": {
      "@apply pt-3 pb-2 border-b-4": {},
      borderColor: "var(--color-transparent)",
    },

    ".nav-underline:hover, .nav-underline:focus, .nav-underline:active": {
      "@apply outline-none text-fgcolor border-gray-200": {},
    },

    ".nav-underline.active": {
      "@apply outline-none text-fgcolor": {},
      borderColor: "var(--nav-variant)",
    },

    /* Overline type */

    ".nav-overline": {
      "@apply pt-2 pb-3 border-t-4": {},
      borderColor: "var(--color-transparent)",
    },

    ".nav-overline:hover, .nav-overline:focus, .nav-overline:active": {
      "@apply outline-none text-fgcolor border-gray-200": {},
    },

    ".nav-overline.active": {
      "@apply outline-none text-fgcolor": {},
      borderColor: "var(--nav-variant)",
    },

    /* Pill type */

    ".nav-pill:hover, .nav-pill:focus, .nav-pill:active": {
      "@apply rounded outline-none": {},
      color: "var(--nav-on-variant)",
      backgroundColor: "var(--nav-variant)",
    },

    ".nav-pill.active": {
      "@apply rounded": {},
      color: "var(--nav-on-variant)",
      backgroundColor: "var(--nav-variant)",
    },

    /* Block type */

    ".nav-block:hover, .nav-block:focus, .nav-block:active": {
      "@apply outline-none": {},
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
      "@apply grid grid-flow-col": {},
      gridAutoColumns: "min-content",
    },
  };

  addComponents(components);
});
