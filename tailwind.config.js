module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.html"
  ],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
  experimental: {
    uniformColorPalette: true
  }
}
