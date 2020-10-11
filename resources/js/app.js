import { createApp, h } from 'vue'
import { app, plugin } from '@inertiajs/inertia-vue3'

const el = document.getElementById('app')

createApp({
  render: () => h(app, {
    initialPage: JSON.parse(el.dataset.page),
    resolveComponent: name => require(`./Pages/${name}`).default,
  })
}).use(plugin).mount(el)