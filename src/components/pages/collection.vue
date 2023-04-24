<template>
  <div>
    <div class="eyebrow">
      <router-link :to="`/${meta.id}`" class="collection__btn">{{ meta.title }}</router-link>
    </div>
    <h1 class="collection__title">{{ cData.title }}</h1>
    <h2 v-if="cData.subtitle" class="h2 collection__subtitle">{{ cData.subtitle}}</h2>
    <p class="collection__info">{{ cData.info }}</p>
    <galleria :name="cName" :images="cData.images" />
    <footer-note />
  </div>
</template>

<script>
import data from '../../js/data';
import Galleria from '../elements/galleria.vue';
import FooterNote from '../elements/footer.vue';

export default {
  name: 'Collection',
  components: { Galleria, FooterNote },
  computed: {
    meta() {
      return this.$route.meta;
    },
    cName() {
      return this.$route.params.name;
    },
    cData() {
      const dataType = data[this.meta.id];
      return dataType[this.cName];
    }
  }
}
</script>