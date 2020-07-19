const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".darken": {
      filter: "var(--darken)",
    },
    ".lighten": {
      filter: "var(--lighten)",
    },
  };

  addUtilities(newUtilities, ["responsive", "hover", "focus"]);
});
