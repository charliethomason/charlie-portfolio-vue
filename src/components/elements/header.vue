<template>
  <header class="header">
    <a href="/" class="header__logo" title="Charlie Thomason">
      <span class="sr-text">Charlie Thomason</span>
    </a>
    <main-nav :active="active" />
  </header>
</template>

<script>
import MainNav from "./nav.vue";
export default {
  name: "MainHeader",
  components: { MainNav },
  props: {
    active: {
      type: String,
      default: "index",
    },
  },
};
</script>
