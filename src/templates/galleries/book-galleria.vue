<template>
  <div>
    <h1 class="h1">{{ bookData.title }}</h1>
    <h2 class="h2">{{ bookData.subtitle}}</h2>
    <galleria book-name="test" :photos="bookData.photos" />
    <footer-note />
  </div>
</template>

<script>
import data from '../../data/books.json';
import Galleria from '../../partials/galleria.vue';
import FooterNote from '../../partials/footer.vue';

export default {
  name: 'BookGalleria',
  components: { Galleria, FooterNote },
  computed: {
    bookName() {
      return this.$route.params.id;
    },
    bookData() {
      return data[this.bookName];
    }
  }
}
</script>