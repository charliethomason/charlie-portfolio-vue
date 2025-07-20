<template>
  <header class="header">
    <a href="/" class="header__logo" title="Charlie Thomason">
      <span class="sr-text">Charlie Thomason</span>
    </a>
    <toggle :selected="darkTheme" @change="updateTheme" />
    <main-nav :active="active" />
  </header>
</template>

<script>
import MainNav from "./nav.vue";
import Toggle from "./toggle.vue";
export default {
  name: "MainHeader",
  components: { MainNav, Toggle },
  props: {
    active: {
      type: String,
      default: "index",
    }
  },
  data() {
    return {
      darkTheme: true
    };
  },
  methods: {
    updateTheme(isDark) {
      this.darkTheme = isDark;
    }
  }
};
</script>
