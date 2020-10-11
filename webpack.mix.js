const mix = require("laravel-mix")
const path = require("path")

mix
  .postCss("resources/css/app.css", "public/css", [
    require("tailwindcss"),
    require("autoprefixer")
  ])
  .ts("resources/ts/app.ts", "public/js")
  .vue({ version: 3 })
  .alias({
    "@": path.resolve("resources/ts")
  })
