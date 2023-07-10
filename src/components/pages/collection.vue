<template>
  <div>
    <div class="collection__eyebrow">
      <router-link :to="`/${meta.id}`" class="parallelogram">{{ meta.title }}</router-link>
    </div>
    <h1 class="h1">{{ collection.title }}</h1>
    <h2 v-if="collection.subtitle" class="h2">{{ collection.subtitle}}</h2>
    <p class="collection__info">{{ collection.info }}</p>
    <galleria :name="cName" :images="collection.images" />
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
    type() {
      return data[this.meta.id];
    },
    cName() {
      return this.$route.params.name;
    },
    collection() {
      return this.type.galleries[this.cName];
    }
  }
}
</script>