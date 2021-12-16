<template>
  <div class="collections">
    <h1 class="h1">Collections</h1>
    <p class="intro">{{ intro }}</p>
    <ul class="collections__shop">
      <router-link
        v-for="(c, i) in collections" :key="i"
        tag="li"
        :to="`/collections/${c.id}`"
      >
        <a class="collections__shop__link">
          <div class="hover-wrap">
            <img
              :src="require('../../img/art/collections/covers/'+c.id+'.jpg')"
              :alt="`${c.title}`"
            />
            <span class="hover-cover">View book</span>
          </div>
          <h2 class="h2">{{ c.title }}</h2>
          <h3 class="subtitle">{{ c.subtitle }}</h3>
        </a>
        <div class="meta">{{ c.year }}</div>
        <div class="meta">{{ c.medium }}</div>
        <div v-if="c.pages" class="meta">{{ c.pages }} pages</div>
        <a v-if="c.blurb" :href="c.blurb" target="_blank" class="btn">Order book on Blurb.com</a>
      </router-link>
    </ul>
    <footer-note />
  </div>
</template>
<script>
import { intro, collections } from '../../data/collections.json';
import FooterNote from '../../partials/footer.vue';

export default {
  name: 'Collections',
  components: { FooterNote },
  data() {
    return {
      intro,
      collections
    };
  }
};
</script>