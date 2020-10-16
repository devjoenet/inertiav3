const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [
    "./resources/**/*.vue",
    "./resources/**/*.js",
    "./resources/**/*.ts",
    "./resources/**/*.html",
    "./resources/views/*.blade.php"
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans]
      }
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.5em",
      wider: "0.1em",
      widest: "0.2em"
    },
    acrylic: (theme) => ({
      light: theme("colors.gray.100"),
      dark: theme("colors.gray.800"),
      green: theme("colors.green.500"),
      blue: theme("colors.blue.500"),
      red: theme("colors.blue.500"),
      pink: theme("colors.blue.500"),
      purple: theme("colors.purple.500")
    })
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui"),
    require("./resources/ts/Plugins/tailwindAcrylic")
  ],
  experimental: {
    uniformColorPalette: true
  }
}
