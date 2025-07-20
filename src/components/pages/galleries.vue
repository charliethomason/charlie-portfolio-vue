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
          <card :heading="gallery.title" link>
            <img
              :src="require('../../img/' + meta.id + '/galleries/galleries-' + gallery.id + '.jpg')"
              :alt="`${gallery.title} gallery`"
              class="galleries__img"
            />
            <div class="galleries__text" aria-hidden="true">
              <div class="galleries__info">{{ gallery.info }}</div>
              <!-- <div class="pill">{{ gallery.dates }}</div>
              <div class="pill">{{ gallery.images.length }} images</div> -->
              <info-list :info="gallery.infoList" />
            </div>
          </card>
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
import Card from "../elements/card.vue";
import InfoList from "../elements/info-list.vue";

export default {
  name: "Galleries",
  components: {
    FooterNote,
    Filters,
    Card,
    InfoList
  },
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
        .map(key => {
          const { dates, images, ...gallery } = galleries[key];
          return {
            ...gallery,
            images,
            id: key,
            infoList: [
              { term: "Dates", desc: dates },
              { term: "Images", desc: images.length }
            ]
          };
        });
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
