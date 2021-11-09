<template>
  <div class="books">
    <h1 class="h1">Albums</h1>
    <ul class="books__shop">
      <router-link
        v-for="(album, i) in albums" :key="i"
        tag="li"
        :to="`/albums/${album.id}`"
      >
        <a class="books__shop__link">
          <div class="hover-wrap">
            <img
              :src="require('../../img/art/albums/covers/'+album.id+'.jpg')"
              :alt="`${album.title}`"
            />
            <span class="hover-cover">View album</span>
          </div>
          <h2 class="h2">{{ album.title }}</h2>
          <h3 class="subtitle">{{ album.subtitle }}</h3>
        </a>
        <div class="meta">{{ album.year }}</div>
        <div class="meta">{{ album.medium }}</div>
      </router-link>
    </ul>
    <footer-note />
  </div>
</template>
<script>
import { albums } from '../../data/albums.json';
import FooterNote from '../../partials/footer.vue';

export default {
  name: 'Albums',
  components: { FooterNote },
  data() {
    return {
      albums
    };
  }
};
</script>
