const mix = require("laravel-mix");
const path = require("path");

mix.postCss("resources/css/app.css", "public/css", [
  //
]).js("resources/js/app.js", "public/js").vue({ version: 3 }).alias({
    "@": path.resolve("resources/js"),
});