import { createApp, h } from "vue"
// @ts-ignore
import { app, plugin } from "@inertiajs/inertia-vue3"

const el = document.getElementById("app")

createApp({
  render: () =>
    h(app, {
      //@ts-ignore
      initialPage: JSON.parse(el.dataset.page),
      //@ts-ignore
      resolveComponent: (name) => require(`./Pages/${name}`).default
    })
})
  .use(plugin)
  //@ts-ignore
  .mount(el)
