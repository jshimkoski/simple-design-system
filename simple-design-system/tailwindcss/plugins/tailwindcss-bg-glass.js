const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  /**
   * auto switching version of bg-glass
   */

  const bgGlassUtility = {
    ".bg-glass": {
      background: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "saturate(180%) blur(20px)",
    },

    ":root.dark .bg-glass": {
      background: "rgba(28, 28, 30, 0.8)",
    },

    "@media (prefers-color-scheme: dark)": {
      ":root:not(.light) .bg-glass": {
        background: "rgba(28, 28, 30, 0.8)",
      },
    },
  };

  addUtilities(bgGlassUtility, ["responsive", "hover", "focus"]);

  /**
   * light and dark versions that work with dark mode classes
   */

  const bgGlassVariantsUtility = {
    ".bg-glass-light": {
      background: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "saturate(180%) blur(20px)",
    },

    ".bg-glass-dark": {
      background: "rgba(28, 28, 30, 0.8)",
      backdropFilter: "saturate(180%) blur(20px)",
    },
  };

  addUtilities(bgGlassVariantsUtility, [
    "responsive",
    "dark",
    "hover",
    "focus",
  ]);
});
