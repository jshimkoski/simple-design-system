const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./simple-design-system/**/*.html",
    "./simple-design-system/**/*.vue",
    "./simple-design-system/**/*.jsx",
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require("postcss-nested"),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" && process.env.PURGE_CSS
      ? [purgecss]
      : []),
  ],
};
