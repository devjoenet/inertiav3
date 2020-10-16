<template>
  <front-layout>
    <h1>Hello from Inertia Vue 3</h1>
    <inertia-link href="/">
      <btn variant="blue">Home</btn>
    </inertia-link>
    <inertia-link href="/contact">
      <btn variant="pink">Contact</btn>
    </inertia-link>
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
