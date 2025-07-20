<template>
<fieldset class="toggle">
  <label>
    <input type="checkbox" :checked="selected" @change.stop="onChange" />
    <span class="sr-text">Dark theme toggle</span>
    <sun-icon v-if="!selected" />
    <moon-icon v-if="selected" />
  </label>
</fieldset>
</template>
<script>
import SunIcon from "../../img/svg-icons/sun.vue";
import MoonIcon from "../../img/svg-icons/moon.vue";
export default {
  name: "Toggle",
  components: { SunIcon, MoonIcon },
  props: {
    selected: {
      type: Boolean
    }
  },
  methods: {
    onChange() {
      this.$emit("change", !this.selected);
    }
  }
}
</script>