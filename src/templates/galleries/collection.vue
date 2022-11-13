<template>
  <div>
    <div class="eyebrow">
      <router-link to="/" class="collection__btn">Art</router-link>
    </div>
    <h1 class="collection__title">{{ cData.title }}</h1>
    <h2 v-if="cData.subtitle" class="h2 collection__subtitle">{{ cData.subtitle}}</h2>
    <p class="collection__info">{{ cData.info }}</p>
    <galleria :name="cName" :images="cData.images" />
    <footer-note />
  </div>
</template>

<script>
import data from '../../data/art.json';
import Galleria from '../../partials/galleria.vue';
import FooterNote from '../../partials/footer.vue';

export default {
  name: 'Collection',
  components: { Galleria, FooterNote },
  computed: {
    cName() {
      return this.$route.path.split("/")[1];
    },
    cData() {
      return data[this.cName];
    }
  }
}
</script>