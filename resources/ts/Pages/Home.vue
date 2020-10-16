<template>
  <front-layout>
    <div class="flex flex-col w-full h-full">
      <h1 class="text-2xl font-semibold text-gray-600 bg-gray-100">
        Hello from Inertia Vue 3 HOME
      </h1>
      <div class="flex flex-wrap items-center justify-center max-w-full p-6">
        <v-btn
          v-for="color in colors"
          :key="color"
          :variant="color"
          tag="button"
          class="m-4"
        >
          {{ color }}
        </v-btn>
      </div>
    </div>
  </front-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import FrontLayout from "../Layouts/FrontLayout.vue"
import VBtn from "@/ts/Components/Btn"
import Theme from "../Components/Btn/theme"
export default defineComponent({
  name: "Home",
  components: {
    VBtn,
    FrontLayout
  },
  data() {
    return {
      colors: [""]
    }
  },
  created() {
    const themes = new Theme()
    this.colors = themes.getThemes()
  }
})
</script>
