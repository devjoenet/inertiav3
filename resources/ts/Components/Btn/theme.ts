import { Theme } from "../../Util/theme"

class BtnTheme extends Theme {
  constructor() {
    super()
    this.setBaseClasses([
      "inline-flex",
      "items-center",
      "justify-center",
      "py-3",
      "px-6",
      "text-xs",
      "font-bold",
      "tracking-widest",
      "uppercase",
      "transition",
      "duration-500",
      "ease-in-out",
      "border",
      "rounded-md",
      "shadow-md",
      "hover:shadow-sm"
    ])
    this.setVariants({
      blue: ["bg-blue-700", "text-white", "border-transparent", "hover:bg-blue-600"],
      gray: ["bg-gray-700", "text-white", "border-transparent", "hover:bg-gray-600"],
      green: ["bg-green-700", "text-white", "border-transparent", "hover:bg-green-600"],
      orange: [
        "bg-orange-700",
        "text-white",
        "border-transparent",
        "hover:bg-orange-600"
      ],
      red: ["bg-red-700", "text-white", "border-transparent", "hover:bg-red-600"],
      pink: ["bg-pink-700", "text-white", "border-transparent", "hover:bg-pink-600"],
      blueOutline: ["border-blue-300", "text-blue-700", "hover:bg-blue-100"],
      grayOutline: ["border-gray-300", "text-gray-700", "hover:bg-gray-100"],
      greenOutline: ["border-green-300", "text-green-700", "hover:bg-green-100"],
      orangeOutline: ["border-orange-300", "text-orange-700", "hover:bg-orange-100"],
      redOutline: ["border-red-300", "text-red-700", "hover:bg-red-100"],
      pinkOutline: ["border-pink-300", "text-pink-700", "hover:bg-pink-100"]
    })
    return this
  }
}
export default BtnTheme
