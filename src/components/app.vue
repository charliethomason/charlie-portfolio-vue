<template>
  <main>
    <main-header :active="active" />
    <section class="content">
      <router-view />
    </section>
  </main>
</template>

<script>
import MainHeader from './elements/header.vue';

export default {
  name: 'App',
  components: { MainHeader },
  computed: {
    active() {
      const rootPath = this.$route.path.split("/")[1];
      return !!rootPath ? rootPath : 'index';
    }
  }
};
</script>
