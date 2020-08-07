const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".bg-glass": {
      background: "rgba(240, 240, 240, 0.8)",
      backdropFilter: "saturate(180%) blur(20px)",
    },

    ":root.dark .bg-glass": {
      background: "rgba(0, 0, 0, 0.8)",
    },

    "@media (prefers-color-scheme: dark)": {
      ":root:not(.light) .bg-glass": {
        background: "rgba(0, 0, 0, 0.8)",
      },
    },
  };

  addUtilities(newUtilities, ["responsive", "hover", "focus"]);
});
