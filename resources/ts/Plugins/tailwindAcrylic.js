const _ = require("lodash")
const Color = require("color")

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.map(theme("acrylic", {}), (color, name) => {
    const rgbColor = Color(color).rgb().array()
    return {
      [`.bg-acrylic-${e(name)}`]: {
        backgroundColor: `rgba(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]},.9)`,
        [`@supports (backdrop-filter: blur(20px)) or (-webkit-backdrop-filter: blur(20px))`]: {
          backdropFilter: "blur(20px) saturate(125%)",
          backgroundColor: `rgba(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]},.3)`
        }
      }
    }
  })

  addUtilities(utilities, variants("acrylic", []))
}
