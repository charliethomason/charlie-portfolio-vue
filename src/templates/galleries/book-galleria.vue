<template>
  <div>
    <h1 class="h1">{{ bookData.title }}</h1>
    <h2 class="h2">{{ bookData.subtitle}}</h2>
  </div>
</template>

<script>
import data from '../../data/books.json';

export default {
  name: 'BookGalleria',
  computed: {
    bookData() {
      return data[this.$route.params.id];
    }
  }
}
</script>