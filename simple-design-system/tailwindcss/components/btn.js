const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  const components = {
    /**
     * Base btn class
     */

    ".btn": {
      "@apply border inline-block py-2 px-4 rounded select-none whitespace-no-wrap shadow font-medium": {},
      "--btn-variant": "var(--color-gray-500)",
      "--btn-variant-on": "var(--color-white)",
      borderColor: "var(--btn-variant)",
      backgroundColor: "var(--btn-variant)",
      color: "var(--btn-variant-on)",
    },

    /**
     * Color variants
     */

    ".btn-white": {
      "--btn-variant": "var(--color-white)",
      "--btn-variant-on": "var(--color-static-gray-900)",
    },

    ".btn-black": {
      "--btn-variant": "var(--color-black)",
      "--btn-variant-on": "var(--color-static-gray-100)",
    },

    ".btn-blue": {
      "--btn-variant": "var(--color-blue-500)",
      "--btn-variant-on": "var(--color-white)",
    },

    ".btn-green": {
      "--btn-variant": "var(--color-green-500)",
      "--btn-variant-on": "var(--color-white)",
    },

    ".btn-indigo": {
      "--btn-variant": "var(--color-indigo-500)",
      "--btn-variant-on": "var(--color-white)",
    },

    ".btn-orange": {
      "--btn-variant": "var(--color-orange-500)",
      "--btn-variant-on": "var(--color-white)",
    },

    ".btn-pink": {
      "--btn-variant": "var(--color-pink-500)",
      "--btn-variant-on": "var(--color-white)",
    },

    ".btn-purple": {
      "--btn-variant": "var(--color-purple-500)",
      "--btn-variant-on": "var(--color-white)",
    },

    ".btn-red": {
      "--btn-variant": "var(--color-red-500)",
      "--btn-variant-on": "var(--color-white)",
    },

    ".btn-teal": {
      "--btn-variant": "var(--color-teal-500)",
      "--btn-variant-on": "var(--color-white)",
    },

    ".btn-yellow": {
      "--btn-variant": "var(--color-yellow-500)",
      "--btn-variant-on": "var(--color-black)",
    },

    /**
     * Outline variant
     */

    ".btn-outline": {
      color: "var(--btn-variant)",
      backgroundColor: "var(--color-transparent)",

      "&:hover, &.active": {
        color: "var(--btn-variant-on)",
        backgroundColor: "var(--btn-variant)",
      },
    },

    /**
     * Block variant
     */

    ".btn-block": {
      "@apply block w-full": {},
    },

    /**
     * Action states
     */

    ".btn:hover, .btn:focus": {
      "@apply shadow-md lighten": {},
    },

    ".btn:active": {
      "@apply shadow-md darken": {},
    },

    ".btn.active": {
      "@apply shadow-inner pointer-events-none darken": {},
    },

    ".btn:focus": {
      "@apply outline-none shadow-outline": {},
    },

    ".btn.disabled, .btn[disabled]": {
      "@apply opacity-50 pointer-events-none": {},
    },

    /**
     * Pill variant
     */

    ".btn-pill": {
      "@apply shadow-none": {},
      color: "var(--btn-variant)",
      backgroundColor: "var(--color-transparent)",
      borderColor: "var(--color-transparent)",

      "&:hover, &.active": {
        "@apply bg-gray-100 shadow-none": {},
        filter: "none",
      },

      "&:active": {
        "@apply darken": {},
      },

      "&:focus": {
        "@apply outline-none shadow-outline": {},
      },
    },

    /**
     * Button Group
     */

    ".btn-group": {
      ".btn:not(:first-child):not(:last-child)": {
        "@apply rounded-none": {},
      },

      ".btn:first-child:not(:only-child)": {
        "@apply rounded-r-none": {},
      },

      ".btn:last-child:not(:only-child)": {
        "@apply rounded-l-none": {},
      },
    },
  };

  addComponents(components);
});
