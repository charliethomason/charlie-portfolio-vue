<template>
  <div>
    <h1 class="h1">{{ meta.title }}</h1>
    <filters
      :filters="filters"
      :selected="selectedFilter"
      @change="updateFilters"
    />
    <ul class="galleries">
      <li
        v-for="gallery in filteredGalleres"
        :key="gallery.id"
      >
        <router-link
          :to="`/${meta.id}/${gallery.id}`"
          class="galleries__link"
        >
          <img
            :src="require('../../img/' + meta.id + '/galleries/galleries-' + gallery.id + '.jpg')"
            :alt="`${gallery.title} gallery`"
            class="galleries__img"
          />
          <div class="galleries__text" aria-hidden="true">
            <h2 class="galleries__title">{{ gallery.title }}</h2>
            <div v-if="gallery.subtitle" class="parallelogram">
              <span>{{ gallery.subtitle }}</span>
            </div>
            <div class="galleries__meta">{{ gallery.dates }}</div>
            <div class="galleries__meta">{{ gallery.images.length }} images</div>
          </div>
        </router-link>
      </li>
    </ul>
    <footer-note />
  </div>
</template>

<script>
import data from "../../js/data";
import FooterNote from "../elements/footer.vue";
import Filters from "../elements/filters.vue";

export default {
  name: "Galleries",
  components: { FooterNote, Filters },
  data() {
    return {
      selectedFilter: null
    };
  },
  computed: {
    meta() {
      return this.$route.meta;
    },
    type() {
      return data[this.meta.id];
    },
    filters() {
      return this.type.filters;
    },
    galleries() {
      const { galleries } = this.type;
      return Object.keys(galleries)
        .map(key => ({
          ...galleries[key],
          id: key
        }));
    },
    filteredGalleres() {
      return this.galleries.filter(gal => {
        return this.selectedFilter ? gal.meta.filters.includes(this.selectedFilter) : true;
      });
    }
  },
  methods: {
    updateFilters(filter) {
      this.selectedFilter = filter;
      const params = filter ? { query: { filter } } : {};
      this.$router.replace({ path: `/${this.meta.id}`, ...params })
    }
  },
  mounted() {
    if (this.$route.query.filter) {
      this.selectedFilter = this.$route.query.filter;
    }
  }
};
</script>
