const mix = require("laravel-mix");
const path = require("path");

mix.postCss("resources/css/app.css", "public/css", [
  //
])
mix.js("resources/js/app.js", "public/js")
mix.vue({ version: 3 });
mix.alias({
    "@": path.resolve("resources/js"),
});