<template>
  <header class="header">
    <a href="/" class="header__logo" title="Charlie Thomason">
      <span class="sr-text">Charlie Thomason</span>
    </a>
    <toggle />
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
      default: "index"
    }
  }
};
</script>
