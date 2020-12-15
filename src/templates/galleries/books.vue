<template>
  <div class="books">
    <h1 class="h1">Books</h1>
    <p class="intro">I am proud to have written, designed, and self-published all of the below listed art books. The content consists of my own art and/or photography, scanned and printed in high resolution. These books are currently only available as print-on-demand through <a href="http://www.blurb.com" target="_blank">Blurb.com</a>, and I do not control the pricing. If you would like me to sign the book for you, please reach out to me directly (see contact methods on homepage).</p>
    <ul class="books__shop">
      <router-link
        v-for="(book, i) in books" :key="i"
        tag="li"
        :to="`/books/${book.id}`"
      >
        <a class="books__shop__link">
          <div class="hover-wrap">
            <img
              :src="require('../../img/art/books/covers/'+book.id+'.jpg')"
              :alt="`${book.title} by Charlie Thomason hardcover book`"
            />
            <span class="hover-cover">View book</span>
          </div>
          <h2 class="h2">{{ book.title }}</h2>
          <h3 class="subtitle">{{ book.subtitle }}</h3>
        </a>
        <div class="meta">{{ book.year }}</div>
        <div class="meta">{{ book.pages }} pages</div>
        <a :href="book.blurb" target="_blank" class="btn">Order book on Blurb.com</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
import { books } from '../../data/books.json';

export default {
  name: 'Books',
  data() {
    return {
      books
    };
  }
};
</script>