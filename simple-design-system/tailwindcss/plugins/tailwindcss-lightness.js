const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".darken": {
      filter: "brightness(85%)",
    },
    ".lighten": {
      filter: "brightness(115%)",
    },
  };

  addUtilities(newUtilities, ["responsive", "dark", "hover", "focus"]);
});
