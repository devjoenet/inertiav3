<template>
  <div class="w-full min-h-screen font-sans">
    <header />
    <main class="w-full min-h-screen">
      <slot />
    </main>
    <footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "FrontLayout"
})
</script>
