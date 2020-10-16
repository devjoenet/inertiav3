<template>
  <front-layout>
    <div class="flex flex-col">
      <h1 class="text-2xl font-semibold text-gray-600">
        Hello from Inertia Vue 3 CONTACT
      </h1>
      <inertia-link href="/">
        <btn variant="blue">Home</btn>
      </inertia-link>
      <inertia-link href="/blog">
        <btn variant="pink">Blog</btn>
      </inertia-link>
    </div>
  </front-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import FrontLayout from "../Layouts/FrontLayout.vue"
import Btn from "@/ts/Components/Btn"
export default defineComponent({
  name: "Contact",
  components: {
    Btn,
    FrontLayout
  }
})
</script>
