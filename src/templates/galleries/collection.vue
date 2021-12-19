<template>
  <div>
    <div class="eyebrow">
      <router-link to="/collections" class="btn">Collections</router-link>
    </div>
    <h1 class="h1">{{ cData.title }}</h1>
    <h2 class="h2">{{ cData.subtitle}}</h2>
    <p class="collection__info">{{ cData.info }}</p>
    <galleria :name="cName" :images="cData.images" />
    <footer-note />
  </div>
</template>

<script>
import data from '../../data/collections.json';
import Galleria from '../../partials/galleria.vue';
import FooterNote from '../../partials/footer.vue';

export default {
  name: 'Collection',
  components: { Galleria, FooterNote },
  computed: {
    cName() {
      return this.$route.params.id;
    },
    cData() {
      return data[this.cName];
    }
  }
}
</script>