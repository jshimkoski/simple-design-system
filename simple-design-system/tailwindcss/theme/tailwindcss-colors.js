const color = (cssVariable) => {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVariable}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVariable}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVariable}))`;
  };
};

module.exports = {
  // Static colors

  white: color("--color-white-raw"),
  black: color("--color-black-raw"),
  transparent: "--color-transparent",
  current: "--color-current",

  "static-gray": {
    default: color("--color-static-gray-500-raw"),
    100: color("--color-static-gray-100-raw"),
    200: color("--color-static-gray-200-raw"),
    300: color("--color-static-gray-300-raw"),
    400: color("--color-static-gray-400-raw"),
    500: color("--color-static-gray-500-raw"),
    600: color("--color-static-gray-600-raw"),
    700: color("--color-static-gray-700-raw"),
    800: color("--color-static-gray-800-raw"),
    900: color("--color-static-gray-900-raw"),
  },

  "static-blue": {
    default: color("--color-static-blue-500-raw"),
    100: color("--color-static-blue-100-raw"),
    200: color("--color-static-blue-200-raw"),
    300: color("--color-static-blue-300-raw"),
    400: color("--color-static-blue-400-raw"),
    500: color("--color-static-blue-500-raw"),
    600: color("--color-static-blue-600-raw"),
    700: color("--color-static-blue-700-raw"),
    800: color("--color-static-blue-800-raw"),
    900: color("--color-static-blue-900-raw"),
  },

  "static-green": {
    default: color("--color-static-green-500-raw"),
    100: color("--color-static-green-100-raw"),
    200: color("--color-static-green-200-raw"),
    300: color("--color-static-green-300-raw"),
    400: color("--color-static-green-400-raw"),
    500: color("--color-static-green-500-raw"),
    600: color("--color-static-green-600-raw"),
    700: color("--color-static-green-700-raw"),
    800: color("--color-static-green-800-raw"),
    900: color("--color-static-green-900-raw"),
  },

  "static-indigo": {
    default: color("--color-static-indigo-500-raw"),
    100: color("--color-static-indigo-100-raw"),
    200: color("--color-static-indigo-200-raw"),
    300: color("--color-static-indigo-300-raw"),
    400: color("--color-static-indigo-400-raw"),
    500: color("--color-static-indigo-500-raw"),
    600: color("--color-static-indigo-600-raw"),
    700: color("--color-static-indigo-700-raw"),
    800: color("--color-static-indigo-800-raw"),
    900: color("--color-static-indigo-900-raw"),
  },

  "static-orange": {
    default: color("--color-static-orange-500-raw"),
    100: color("--color-static-orange-100-raw"),
    200: color("--color-static-orange-200-raw"),
    300: color("--color-static-orange-300-raw"),
    400: color("--color-static-orange-400-raw"),
    500: color("--color-static-orange-500-raw"),
    600: color("--color-static-orange-600-raw"),
    700: color("--color-static-orange-700-raw"),
    800: color("--color-static-orange-800-raw"),
    900: color("--color-static-orange-900-raw"),
  },

  "static-pink": {
    default: color("--color-static-pink-500-raw"),
    100: color("--color-static-pink-100-raw"),
    200: color("--color-static-pink-200-raw"),
    300: color("--color-static-pink-300-raw"),
    400: color("--color-static-pink-400-raw"),
    500: color("--color-static-pink-500-raw"),
    600: color("--color-static-pink-600-raw"),
    700: color("--color-static-pink-700-raw"),
    800: color("--color-static-pink-800-raw"),
    900: color("--color-static-pink-900-raw"),
  },

  "static-purple": {
    default: color("--color-static-purple-500-raw"),
    100: color("--color-static-purple-100-raw"),
    200: color("--color-static-purple-200-raw"),
    300: color("--color-static-purple-300-raw"),
    400: color("--color-static-purple-400-raw"),
    500: color("--color-static-purple-500-raw"),
    600: color("--color-static-purple-600-raw"),
    700: color("--color-static-purple-700-raw"),
    800: color("--color-static-purple-800-raw"),
    900: color("--color-static-purple-900-raw"),
  },

  "static-red": {
    default: color("--color-static-red-500-raw"),
    100: color("--color-static-red-100-raw"),
    200: color("--color-static-red-200-raw"),
    300: color("--color-static-red-300-raw"),
    400: color("--color-static-red-400-raw"),
    500: color("--color-static-red-500-raw"),
    600: color("--color-static-red-600-raw"),
    700: color("--color-static-red-700-raw"),
    800: color("--color-static-red-800-raw"),
    900: color("--color-static-red-900-raw"),
  },

  "static-teal": {
    default: color("--color-static-teal-500-raw"),
    100: color("--color-static-teal-100-raw"),
    200: color("--color-static-teal-200-raw"),
    300: color("--color-static-teal-300-raw"),
    400: color("--color-static-teal-400-raw"),
    500: color("--color-static-teal-500-raw"),
    600: color("--color-static-teal-600-raw"),
    700: color("--color-static-teal-700-raw"),
    800: color("--color-static-teal-800-raw"),
    900: color("--color-static-teal-900-raw"),
  },

  "static-yellow": {
    default: color("--color-static-yellow-500-raw"),
    100: color("--color-static-yellow-100-raw"),
    200: color("--color-static-yellow-200-raw"),
    300: color("--color-static-yellow-300-raw"),
    400: color("--color-static-yellow-400-raw"),
    500: color("--color-static-yellow-500-raw"),
    600: color("--color-static-yellow-600-raw"),
    700: color("--color-static-yellow-700-raw"),
    800: color("--color-static-yellow-800-raw"),
    900: color("--color-static-yellow-900-raw"),
  },

  // Dynamic colors

  fgcolor: color("--color-fgcolor-raw"),
  bgcolor: color("--color-bgcolor-raw"),

  border: color("--color-border-raw"),
  placeholder: color("--color-placeholder-raw"),

  gray: {
    default: color("--color-gray-500-raw"),
    100: color("--color-gray-100-raw"),
    200: color("--color-gray-200-raw"),
    300: color("--color-gray-300-raw"),
    400: color("--color-gray-400-raw"),
    500: color("--color-gray-500-raw"),
    600: color("--color-gray-600-raw"),
    700: color("--color-gray-700-raw"),
    800: color("--color-gray-800-raw"),
    900: color("--color-gray-900-raw"),
  },

  blue: {
    default: color("--color-blue-500-raw"),
    100: color("--color-blue-100-raw"),
    200: color("--color-blue-200-raw"),
    300: color("--color-blue-300-raw"),
    400: color("--color-blue-400-raw"),
    500: color("--color-blue-500-raw"),
    600: color("--color-blue-600-raw"),
    700: color("--color-blue-700-raw"),
    800: color("--color-blue-800-raw"),
    900: color("--color-blue-900-raw"),
  },

  green: {
    default: color("--color-green-500-raw"),
    100: color("--color-green-100-raw"),
    200: color("--color-green-200-raw"),
    300: color("--color-green-300-raw"),
    400: color("--color-green-400-raw"),
    500: color("--color-green-500-raw"),
    600: color("--color-green-600-raw"),
    700: color("--color-green-700-raw"),
    800: color("--color-green-800-raw"),
    900: color("--color-green-900-raw"),
  },

  indigo: {
    default: color("--color-indigo-500-raw"),
    100: color("--color-indigo-100-raw"),
    200: color("--color-indigo-200-raw"),
    300: color("--color-indigo-300-raw"),
    400: color("--color-indigo-400-raw"),
    500: color("--color-indigo-500-raw"),
    600: color("--color-indigo-600-raw"),
    700: color("--color-indigo-700-raw"),
    800: color("--color-indigo-800-raw"),
    900: color("--color-indigo-900-raw"),
  },

  orange: {
    default: color("--color-orange-500-raw"),
    100: color("--color-orange-100-raw"),
    200: color("--color-orange-200-raw"),
    300: color("--color-orange-300-raw"),
    400: color("--color-orange-400-raw"),
    500: color("--color-orange-500-raw"),
    600: color("--color-orange-600-raw"),
    700: color("--color-orange-700-raw"),
    800: color("--color-orange-800-raw"),
    900: color("--color-orange-900-raw"),
  },

  pink: {
    default: color("--color-pink-500-raw"),
    100: color("--color-pink-100-raw"),
    200: color("--color-pink-200-raw"),
    300: color("--color-pink-300-raw"),
    400: color("--color-pink-400-raw"),
    500: color("--color-pink-500-raw"),
    600: color("--color-pink-600-raw"),
    700: color("--color-pink-700-raw"),
    800: color("--color-pink-800-raw"),
    900: color("--color-pink-900-raw"),
  },

  purple: {
    default: color("--color-purple-500-raw"),
    100: color("--color-purple-100-raw"),
    200: color("--color-purple-200-raw"),
    300: color("--color-purple-300-raw"),
    400: color("--color-purple-400-raw"),
    500: color("--color-purple-500-raw"),
    600: color("--color-purple-600-raw"),
    700: color("--color-purple-700-raw"),
    800: color("--color-purple-800-raw"),
    900: color("--color-purple-900-raw"),
  },

  red: {
    default: color("--color-red-500-raw"),
    100: color("--color-red-100-raw"),
    200: color("--color-red-200-raw"),
    300: color("--color-red-300-raw"),
    400: color("--color-red-400-raw"),
    500: color("--color-red-500-raw"),
    600: color("--color-red-600-raw"),
    700: color("--color-red-700-raw"),
    800: color("--color-red-800-raw"),
    900: color("--color-red-900-raw"),
  },

  teal: {
    default: color("--color-teal-500-raw"),
    100: color("--color-teal-100-raw"),
    200: color("--color-teal-200-raw"),
    300: color("--color-teal-300-raw"),
    400: color("--color-teal-400-raw"),
    500: color("--color-teal-500-raw"),
    600: color("--color-teal-600-raw"),
    700: color("--color-teal-700-raw"),
    800: color("--color-teal-800-raw"),
    900: color("--color-teal-900-raw"),
  },

  yellow: {
    default: color("--color-yellow-500-raw"),
    100: color("--color-yellow-100-raw"),
    200: color("--color-yellow-200-raw"),
    300: color("--color-yellow-300-raw"),
    400: color("--color-yellow-400-raw"),
    500: color("--color-yellow-500-raw"),
    600: color("--color-yellow-600-raw"),
    700: color("--color-yellow-700-raw"),
    800: color("--color-yellow-800-raw"),
    900: color("--color-yellow-900-raw"),
  },
};
