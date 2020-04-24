const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    colors: {
      // Static colors

      white: "var(--color-white)",
      black: "var(--color-black)",
      transparent: "var(--color-transparent)",
      current: "var(--color-current)",

      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      success: "var(--color-success)",
      info: "var(--color-info)",
      warning: "var(--color-warning)",
      danger: "var(--color-danger)",

      "static-gray": {
        100: "var(--color-static-gray-100)",
        200: "var(--color-static-gray-200)",
        300: "var(--color-static-gray-300)",
        400: "var(--color-static-gray-400)",
        500: "var(--color-static-gray-500)",
        600: "var(--color-static-gray-600)",
        700: "var(--color-static-gray-700)",
        800: "var(--color-static-gray-800)",
        900: "var(--color-static-gray-900)",
      },

      // Dynamic colors

      fgcolor: "var(--color-fgcolor)",
      bgcolor: "var(--color-bgcolor)",
      bgTransparent: "var(--color-bg-transparent)",

      border: "var(--color-border)",
      placeholder: "var(--color-placeholder)",

      gray: {
        100: "var(--color-gray-100)",
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        500: "var(--color-gray-500)",
        600: "var(--color-gray-600)",
        700: "var(--color-gray-700)",
        800: "var(--color-gray-800)",
        900: "var(--color-gray-900)",
      },
    },
  },
  variants: {},
  plugins: [
    require("tailwind-css-variables")({
      colors: false,
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".darken": {
          filter: "var(--darken)",
        },
        ".lighten": {
          filter: "var(--lighten)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    }),
  ],
};
