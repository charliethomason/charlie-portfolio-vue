<template>
<fieldset class="toggle">
  <label class="toggle__label">
    <input
      type="checkbox"
      :checked="enableDark"
      name="dark"
      @change.stop="() => onChange(!enableDark)"
    />
    <span class="sr-text">Enable dark theme</span>
    <sun-icon :class-name="iconClasses(false)" />
    <moon-icon :class-name="iconClasses(true)" />
  </label>
</fieldset>
</template>
<script>
import SunIcon from "../../img/svg-icons/sun.vue";
import MoonIcon from "../../img/svg-icons/moon.vue";
export default {
  name: "Toggle",
  components: { SunIcon, MoonIcon },
  data() {
    return {
      enableDark: true
    }
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
      document.documentElement.setAttribute("data-theme", theme);
      window.localStorage.setItem("ctTheme", theme);
    },
    onChange(enableDark) {
      const newTheme = enableDark ? "dark": "light";
      this.enableDark = enableDark;
      this.updateTheme(newTheme);
    },
    iconClasses(enableDark) {
      return this.enableDark === enableDark
        ? "active"
        : null;
    }
  },
  mounted() {
    const ctTheme = window.localStorage.getItem("ctTheme");
    if (!!ctTheme) {
      this.enableDark = ctTheme === "dark";
      this.updateTheme(ctTheme);
    }
  }
}
</script>