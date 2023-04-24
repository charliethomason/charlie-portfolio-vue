<template>
  <div>
    <h1 class="collection__title">{{ meta.title }}</h1>
    <ul class="galleries">
      <router-link
        v-for="(gallery, i) in galleries"
        :key="i"
        tag="li"
        :to="`/${meta.id}/${gallery.href}`"
        class="galleries__item"
      >
        <a class="galleries__link">
          <img
            :src="require('../../img/' + meta.id + '/galleries/galleries-' + gallery.href + '.jpg')"
            :alt="`${gallery.name} gallery icon`"
            class="galleries__img"
          />
          <div class="galleries__text">
            <h2 class="galleries__title">{{ gallery.title }}</h2>
            <div v-if="gallery.subtitle" class="galleries__subtitle nohover">{{ gallery.subtitle }}</div>
          </div>
        </a>
      </router-link>
    </ul>
    <footer-note />
  </div>
</template>

<script>
import data from '../../js/data';
import FooterNote from '../elements/footer.vue';

export default {
  name: 'Galleries',
  components: { FooterNote },
  computed: {
    meta() {
      return this.$route.meta;
    },
    galleries() {
      const dataType = data[this.meta.id];
      return dataType.galleries;
    }
  }
};
</script>
