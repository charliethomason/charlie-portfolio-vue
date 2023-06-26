<template>
  <div>
    <h1 class="collection__title">{{ meta.title }}</h1>
    <div class="control-bar">
      <filters
        :data="metaFilters"
        :selected="filtersForId"
        @change="handleChange"
      />
    </div>
    <ul class="galleries">
      <router-link
        v-for="(gallery, i) in filteredGalleres"
        :key="i"
        tag="li"
        :to="`/${meta.id}/${gallery.id}`"
        class="galleries__item"
      >
        <a class="galleries__link">
          <img
            :src="require('../../img/' + meta.id + '/galleries/galleries-' + gallery.id + '.jpg')"
            :alt="`${gallery.title} gallery`"
            class="galleries__img"
          />
          <div class="galleries__text" aria-hidden="true">
            <h2 class="galleries__title">{{ gallery.title }}</h2>
            <div v-if="gallery.subtitle" class="parallelogram nohover">{{ gallery.subtitle }}</div>
          </div>
          <div class="galleries__size">{{ gallery.images.length }} images</div>
        </a>
      </router-link>
    </ul>
    <footer-note />
  </div>
</template>

<script>
import data from '../../js/data';
import FooterNote from '../elements/footer.vue';
import Filters from '../elements/filters.vue';

const ALL_OPTIONS = "All";

export default {
  name: 'Galleries',
  components: { FooterNote, Filters },
  data() {
    return {
      filters: {
        art: {
          mediums: ALL_OPTIONS,
          years: ALL_OPTIONS
        },
        photo: {
          mediums: ALL_OPTIONS,
          years: ALL_OPTIONS
        }
      }
    };
  },
  computed: {
    meta() {
      return this.$route.meta;
    },
    type() {
      return data[this.meta.id];
    },
    controls() {
      return this.type.controls;
    },
    filtersForId() {
      return this.filters[this.meta.id];
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
        const filteredByMedium = this.isIncludedByFilter("mediums", gal.meta);
        const filteredByYear = this.isIncludedByFilter("years", gal.meta);
        return filteredByMedium && filteredByYear;
      });
    },
    metaFilters() {
      return this.galleries.reduce((options, gallery) => {
        Object.keys(gallery.meta).forEach(filter => {
          if (!options[filter]) {
            const optionSet = new Set();
            options[filter] = optionSet;
          }
          gallery.meta[filter].forEach(opt => options[filter].add(opt));
        });
        return options;
      }, {});
    }
  },
  methods: {
    isIncludedByFilter(type, meta) {
      const filters = this.filters[this.meta.id];
      return filters[type] === ALL_OPTIONS || meta[type].includes(filters[type]);
    },
    handleChange(opt, controlName) {
      const currentFilters = localStorage.getItem("filters")
        ? JSON.parse(localStorage.getItem("filters"))
        : this.filters;
      const updatedFilters = { ...currentFilters };
      updatedFilters[this.meta.id][controlName] = opt;
      this.filters = updatedFilters;
      localStorage.setItem("filters", JSON.stringify(updatedFilters));
    }
  },
  mounted() {
    if (localStorage.getItem("filters")) {
      const parsedFilters = JSON.parse(localStorage.getItem("filters"));
      this.filters[this.meta.id] = parsedFilters[this.meta.id];
    }
  }
};
</script>
