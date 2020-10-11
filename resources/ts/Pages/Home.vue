<template>
  <h1>Hello from Inertia Vue 3</h1>
  <inertia-link href="/contact">Contact</inertia-link>
  <inertia-link href="/blog">Blog</inertia-link>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "Home"
})
</script>
