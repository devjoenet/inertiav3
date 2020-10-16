import { defineComponent, computed, h } from "vue"
import Theme from "./theme"
export default defineComponent({
  name: "VBtn",
  props: {
    tag: { type: String, default: "button", required: false },
    variant: { type: String, default: "blue", required: false }
  },
  setup(props) {
    const theme = new Theme()
    const classes = computed((): string => theme.getClasses(props.variant))
    return {
      classes
    }
  },
  render() {
    return h(
      this.tag, // tag name
      {
        class: this.classes
      }, // props/attributes
      this.$slots.default() // array of children
    )
  }
})
